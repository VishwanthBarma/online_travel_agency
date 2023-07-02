import { Provider } from 'react-redux';
import { createContext, useEffect, useState } from "react";
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabaseClient';

type contextState = {
    session: Session | null;
    loading: boolean;
    error: string | null;
    user : any | null;
    userData : any | null;
    userRole : string | null;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    fetchSession: () => Promise<void>;
    fetchUserData: () => Promise<void>;
    clearSession: () => Promise<void>;
}

export const AgencyContext = createContext<contextState | null>(null);

export const AgencyProvider = ({children}: any) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [userData, setUserData] = useState<any | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        fetchSession();
    }, [])  

    useEffect(() => {
        fetchUserData();
    }, [userRole])

    const fetchSession = async () => {
        setLoading(true);

        const { data: { session }, error } = await supabase.auth.getSession()
        if(session){
            setSession(session);
            setUser(session!.user);
            setUserRole(session?.user?.user_metadata?.user_role);
        }
        if(error){
            setError(error!.message);
        }

        setLoading(false);
    }

    const fetchUserData = async () => {
        setLoading(true);

        const userId = user?.id;

        if(userRole == "client"){
            const { data, error } = await supabase
            .from('user_table')
            .select()
            .eq('auth_id', userId)
            setUserData(data![0]);
        }

        if(userRole == "agent"){
            const { data, error } = await supabase
            .from('agency_table')
            .select()
            .eq('auth_id', userId)
            setUserData(data![0]);
        }
        
        setLoading(false);
    }

    const clearSession = async () => {
        setLoading(true);

        setSession(null);
        setUser(null);
        setUserData(null);
        setError(null);
        setUserRole(null);

        setLoading(false);
    }

    return (
        <AgencyContext.Provider value= {{
            session,
            user,
            userData,
            userRole,
            loading,
            error,
            setLoading,
            fetchSession,
            fetchUserData,
            clearSession
        }}>
        {children}
        </AgencyContext.Provider>
    );
}