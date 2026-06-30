import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Token management functions
const TOKEN_KEY = "vc_tokens";

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export function setTokens(tokens: Tokens): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
  }
}

export function getTokens(): Tokens | null {
  if (typeof window !== "undefined") {
    const tokenData = localStorage.getItem(TOKEN_KEY);
    if (tokenData) {
      return JSON.parse(tokenData);
    }
  }
  return null;
}

export function removeTokens(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
}
