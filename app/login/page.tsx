"use client";

import NavigationWrapper from '@/components/NavigationWrapper';
import { AuthContext } from '@/contexts/auth';
import { AuthContextType, Tokens, User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const authContext = useContext(AuthContext) as AuthContextType;

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const storedUsers = localStorage.getItem('tempUsers');
      const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

      const user = users.find((u: User) => u.email === email && u.password === password);

      if (!user) {
        setStatus('Invalid email or password.');
        setLoading(false);
        return;
      }

      const fakeJwt: string = `fake-jwt-${email}`;
      const fakeRefresh: string = `fake-refresh-${email}`;

      localStorage.setItem('jwtToken', fakeJwt);
      localStorage.setItem('refreshToken', fakeRefresh);
      localStorage.setItem('vcFillingName', user.name);
      localStorage.setItem('userEmail', email);

      await authContext.setTokenCookie({
        jwtToken: fakeJwt,
        refreshToken: fakeRefresh,
        name: user.name,
      } as Tokens);

      setStatus('Login successful! Redirecting to dashboard...');
    } catch (error) {
      setStatus('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NavigationWrapper>
      <div className="wrapper bg-white grid grid-cols-1 xl:grid-cols-[530px_1fr] max-w-[1680px] mx-auto">
        <div className="min-h-[100dvh] flex flex-col justify-between">
          <div className="py-8 md:py-20 px-6 md:px-20 flex flex-col gap-8 items-center xl:items-start">
            <Link 
              className="flex select-none flex-col justify-end rounded-md p-6 no-underline outline-none" 
              href="/" 
            >
              <Image 
                src="/logo.png" 
                width={130} 
                height={20} 
                alt="VC Filling Logo" 
              />
            </Link>

            <h2 className="text-black font-semibold text-3xl m-0">
              Sign In to <span className="text-primary">VC Filling</span>
            </h2>

            <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed py-3 px-4 font-medium transition-all"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>

              {status && (
                <div className={`p-3 rounded-lg text-sm ${
                  status.includes('Invalid') || status.includes('failed') 
                    ? 'bg-red-100 border border-red-200 text-red-800' 
                    : 'bg-green-100 border border-green-200 text-green-800'
                }`}>
                  {status}
                </div>
              )}

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-primary hover:underline font-semibold">
                  Sign up here
                </Link>
              </p>
            </form>
          </div>

          <p className="text-base xl:text-lg text-center py-6">
            © 2024 VC Filling. All rights reserved.
          </p>
        </div>

        <div className="hidden xl:block border border-gray-300 rounded-[40px] bg-gray-100 m-8 relative overflow-hidden">
          <Image 
            src="/banner-login-page.webp" 
            fill 
            className="object-cover" 
            alt="Login Banner" 
          />
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default Login;

