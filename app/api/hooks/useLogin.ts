import { AuthFormData } from "@/types";
import axios from "axios";

export async function useLogin({ email, otp }: AuthFormData) {
  try {
    // check if user exists
    const checkUserResponse = await axios.post(`/api/check-user`, {
      email,
    });
    if (!checkUserResponse.data.success) {
      return {
        status: 210,
      }
    }

    // verify otp
    const verifyResponse = await axios.post(`/api/verify-otp`, {
      email,
      otp,
    });
    if (!verifyResponse.data.success) {
      throw new Error("Login failed: Wrong OTP. Please try again. ");
    }
    // finally login
    const response = await axios.post(`/api/login`, {
      email,
      otp,
    });

    if (response.data.success) {
      return {
        status: response.status,
        jwtToken: response.data.token,
        refreshToken: response.data.refreshToken,
        exception: "",
        message: "Login Successful!",
        name: response.data.name,
      };
    } else {
      throw new Error(
        "Login failed: " + (response.data.message || "Unknown error")
      );
    }
  } catch (e: any) {
    console.error("Error Occurred in Login Hook", e);
    return {
      status: e.response?.status || 500,
      jwtToken: "",
      refreshToken: "",
      exception: e.message || "Unknown error",
      message: e.response?.data?.message || "Login failed",
    };
  }
}
