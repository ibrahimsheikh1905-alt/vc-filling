"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLogout } from "@/app/api/hooks/useLogout";
import { TokenResponse, Tokens } from "@/types";

export const AuthContext = createContext({});

interface Auth {
  isAuthenticated: boolean;
  token: string | null;
  name: string | null;
  loading: boolean;
  setTokenCookie: (tokens: Tokens) => Promise<string>;
  Logout: () => Promise<boolean>;
}

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const [token, setToken] = useState<Tokens | null>(null);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const tokenData = await getTokenCookie();
      if (tokenData.jwtToken) {
        setToken(tokenData);
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
    router.push("/dashboard");
    return "Login successful";
  };

  const getTokenCookie = async () => {
    const jwtToken = localStorage.getItem("jwtToken") || "";
    const refreshToken = localStorage.getItem("refreshToken") || "";
    const name = localStorage.getItem("vcFillingName") || "";
    return { jwtToken, refreshToken, name };
  };

  const Logout = async () => {
    const success = await useLogout();
    if (success) {
      localStorage.clear();
      setToken(null);
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
