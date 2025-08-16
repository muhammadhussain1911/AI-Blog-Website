import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // To handle initial auth state check

    useEffect(() => {
        // Check for token in localStorage on initial load
        const token = localStorage.getItem('authToken');
        if (token) {
            // In a real app, you'd have an API endpoint like '/api/auth/verify' or '/api/user/me'
            // to validate the token and get user data.
            fetch('/api/user/profile', { // <-- IMPORTANT: Replace with your actual endpoint
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // If token is invalid, it should be cleared
                throw new Error('Invalid token');
            })
            .then(userData => {
                setUser(userData);
            })
            .catch(() => {
                // Token is invalid or expired, or server is down
                localStorage.removeItem('authToken');
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false); // No token, not logged in
        }
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('authToken', token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
        // You might want to also call a backend endpoint to invalidate the session/token
    };

    const authContextValue = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
    };

    // Don't render children until the auth state has been determined
    if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};