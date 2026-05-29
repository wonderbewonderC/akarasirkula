import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'umkm';
    points?: number; // For normal users
    balance?: number; // For UMKM
    location?: string;
    joinDate?: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        // Coba ambil dari local storage saat pertama kali dimuat
        const savedUser = localStorage.getItem('akarasirkula_user');
        if (savedUser) {
            try {
                return JSON.parse(savedUser);
            } catch (e) {
                return null;
            }
        }
        return null;
    });

    // Simpan ke local storage setiap kali state user berubah
    useEffect(() => {
        if (user) {
            localStorage.setItem('akarasirkula_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('akarasirkula_user');
        }
    }, [user]);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const updateUser = (data: Partial<User>) => {
        setUser((prev) => {
            if (!prev) return prev;
            return { ...prev, ...data };
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
