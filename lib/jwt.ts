import jwt, { Secret } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY as Secret || "your-secret-key-here";

export interface TokenPayload {
  id: number;
  email: string;
  name?: string;
  role?: string;
}

export function generateToken(payload: TokenPayload, expiresIn: string = "30d"): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn } as jwt.SignOptions);
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, SECRET_KEY) as TokenPayload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export function decodeToken(token: string): TokenPayload | null {
  try {
    return jwt.decode(token) as TokenPayload;
  } catch (error) {
    console.error("Token decoding failed:", error);
    return null;
  }
}

export { SECRET_KEY };
