const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function apiRequest<T = any>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

// Auth API helpers
export const authApi = {
  login: (email: string, password: string) =>
    apiRequest("/api/auth", {
      method: "POST",
      body: JSON.stringify({ action: "login", email, password }),
    }),

  register: (userData: any) =>
    apiRequest("/api/auth", {
      method: "POST",
      body: JSON.stringify({ action: "register", ...userData }),
    }),

  logout: () =>
    apiRequest("/api/auth", {
      method: "POST",
      body: JSON.stringify({ action: "logout" }),
    }),

  getProfile: () => apiRequest("/api/auth"),
};

// Services API helpers
export const servicesApi = {
  getAll: () => apiRequest("/api/services"),
  getById: (id: string) => apiRequest(`/api/services/${id}`),
  create: (data: any) => apiRequest("/api/services", {
    method: "POST",
    body: JSON.stringify(data),
  }),
};

// Orders API helpers
export const ordersApi = {
  getAll: () => apiRequest("/api/orders"),
  getById: (id: string) => apiRequest(`/api/orders/${id}`),
  create: (data: any) => apiRequest("/api/orders", {
    method: "POST",
    body: JSON.stringify(data),
  }),
};

export default apiRequest;
