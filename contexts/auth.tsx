"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import { TokenResponse, Tokens } from "@/types";

export const AuthContext = createContext({});

interface Auth {
  isAuthenticated: boolean;
  token: string | null;
  name: string | null;
  userId: number | null;
  loading: boolean;
  setTokenCookie: (tokens: Tokens) => Promise<string>;
  Logout: () => Promise<boolean>;
}

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const [token, setToken] = useState<Tokens | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  // Helper to decode JWT and extract userId
  const decodeJwtToken = (jwtToken: string): number | null => {
    try {
      const base64Url = jwtToken.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const payload = JSON.parse(jsonPayload);
      return payload.id || payload.userId || null;
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  };

useEffect(() => {
    (async function () {
      const tokenData = await getTokenCookie();
      if (tokenData.jwtToken) {
        setToken(tokenData);
        // Decode userId from JWT
        const decodedUserId = decodeJwtToken(tokenData.jwtToken);
        setUserId(decodedUserId);
        
        // Also store userId in localStorage for components that need it directly
        if (decodedUserId) {
          localStorage.setItem("userId", decodedUserId.toString());
        }
      }
      setLoading(false);
      setTokenChecked(true);
    })();
  }, []);

const setTokenCookie = async (tokens: Tokens) => {
    const { jwtToken, refreshToken, name } = tokens;
    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("vcFillingName", name);
    
    setToken(tokens);
    // Decode userId from JWT when setting token
    const decodedUserId = decodeJwtToken(jwtToken);
    setUserId(decodedUserId);
    
    // Also store userId in localStorage for components that need it directly
    if (decodedUserId) {
      localStorage.setItem("userId", decodedUserId.toString());
    }
    
    router.push("/dashboard");
    return "Login successful";
  };

  const getTokenCookie = async () => {
    const jwtToken = localStorage.getItem("jwtToken") || "";
    const refreshToken = localStorage.getItem("refreshToken") || "";
    const name = localStorage.getItem("vcFillingName") || "";
    return { jwtToken, refreshToken, name };
  };

  // Avoid calling hooks inside arbitrary callbacks.
  const logoutFn = () => useLogout();

  const Logout = async () => {
    const success = await logoutFn();
    if (success) {
      localStorage.clear();
      setToken(null);
      setUserId(null);
      router.push("/login");
      return true;
    }
    return false;
  };

return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token?.jwtToken,
        token: token?.jwtToken || null,
        name: token?.name || null,
        userId,
        loading,
        setTokenCookie,
        Logout,
      }}
    >
      {tokenChecked ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};

export const useAuth = (): Auth => useContext(AuthContext) as Auth;

export const ProtectRoute = ({ children }: any) => {
  const { isAuthenticated, loading } = useAuth();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    
    if (isAuthenticated && (pathName === '/login' || pathName === '/register')) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, pathName, loading, router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return children;
};
