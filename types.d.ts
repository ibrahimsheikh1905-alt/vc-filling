export interface TokenResponse {
  jwtToken: string;
  refreshToken: string;
  exception: string;
  message: string;
  name: string;
  status?: number;
}

export interface Tokens {
  jwtToken: string;
  refreshToken: string;
  name: string;
}

export interface User {
  email: string;
  password: string;
  name: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  token: string;
  name: string;
  loading: boolean;
  setTokenCookie: (tokens: Tokens) => Promise<any>;
  Logout: () => Promise<boolean>;
}

export interface AuthFormData {
  email: string;
  otp: number;
  isLoading?: boolean;
}

export interface Ticket {
  ticket_id: number;
  subject: string;
  status: string;
  order_id: number;
}

export interface Message {
  id: number;
  senderId: number;
  message: string;
  attachmentUrl: string;
  attachment_url: string;
  order_id: number;
  parent_id: number;
  sender_id: number;
  created_at: string;
}

export interface StateData {
  c_corp_price: string;
  created_at: string;
  id: number;
  llc_price: string;
  nonprofit_price: string;
  s_corp_price: string;
  state_name: string;
  updated_at: string;
}

export interface Keyword {
  id: number;
  keyword: string;
  created_at: string;
  updated_at: string;
}

export interface PaymentData {
  name: string;
  email: string;
  amount: number;
  orderID: string;
}

