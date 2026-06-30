"use client";

export async function useLogout(): Promise<boolean> {
  try {
    // Clear ALL authentication tokens from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("vc_tokens");
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("vcFillingName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userId");
      
      // Redirect to login page
      window.location.href = "/login";
    }
    
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}
