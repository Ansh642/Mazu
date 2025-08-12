import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { storage } from '../utils/storage';

const AuthContext = createContext({
  isLoading: true,
  user: null,
  signIn: async (_credentials) => {},
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const storedUser = await storage.getItem(storage.AUTH_USER_KEY);
      if (storedUser) {
        setUser(storedUser);
      }
      setIsLoading(false);
    })();
  }, []);

  const signIn = async (credentials) => {
    // In production, call API then store token/user
    const userPayload = {
      email: credentials?.email ?? '',
      token: 'dummy-token',
    };
    await storage.setItem(storage.AUTH_USER_KEY, userPayload);
    setUser(userPayload);
  };

  const signOut = async () => {
    await storage.removeItem(storage.AUTH_USER_KEY);
    setUser(null);
  };

  const value = useMemo(
    () => ({ isLoading, user, signIn, signOut }),
    [isLoading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


