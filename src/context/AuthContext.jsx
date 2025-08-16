import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../../supabaseClients";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Sign out function
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
  };

  // Sign in with Google
  const signUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
       redirectTo: window.location.href
    });
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
