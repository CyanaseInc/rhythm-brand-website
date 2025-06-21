import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful login
          const mockUser: User = {
            id: '1',
            email,
            firstName: 'John',
            lastName: 'Doe',
          };
          
          const mockToken = 'mock-jwt-token';
          
          set({ 
            user: mockUser, 
            token: mockToken, 
            isLoading: false 
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (userData: RegisterData) => {
        set({ isLoading: true });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful registration
          const mockUser: User = {
            id: '1',
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
          };
          
          const mockToken = 'mock-jwt-token';
          
          set({ 
            user: mockUser, 
            token: mockToken, 
            isLoading: false 
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        set({ user: null, token: null });
      },

      updateProfile: async (userData: Partial<User>) => {
        const currentUser = get().user;
        if (!currentUser) return;

        set({ isLoading: true });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          set({ 
            user: { ...currentUser, ...userData },
            isLoading: false 
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);