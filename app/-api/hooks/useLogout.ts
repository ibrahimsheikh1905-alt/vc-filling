import axios from "axios";

export async function useLogout() {
  
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response: any = await axios.post(`/api/logout`, {
      refreshToken: refreshToken,
    });
    if (response) {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("refreshToken");
      return true;
    }
  } catch (error: any) {
    return false;
  }
}
