import { Session } from "@supabase/supabase-js";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from "@/store";
import { supabase } from "@/utils/supabaseClient";

interface SessionState {
    session: Session | null;
    loading: boolean;
    error: string | null;
    user : any | null;
    userData : any | null;
    userRole : string | null;
}

const initialState: SessionState = {
    session: null,
    loading: false,
    error: null,
    user: null,
    userData : null,
    userRole: null,
}

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<Session | null>) => {
            state.session = action.payload;
            state.loading = false;
            state.error = null;
        },
        clearSession: (state) => {
            state.session = null;
            state.loading = false;
            state.error = null;
            state.user = null;
            state.userRole = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
        setUser: (state, action: PayloadAction<any | null>) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        setUserData: (state, action: PayloadAction<any | null>) => {
            state.userData = action.payload;
            state.loading = false;
            state.error = null;
        },
        setUserRole: (state, action: PayloadAction<string | null>) => {
            state.userRole = action.payload;
            state.loading = false;
            state.error = null;
        }

    },
});

export const {
    setSession,
    clearSession,
    setLoading,
    setError,
    setUser,
    setUserData,
    setUserRole,
} = sessionSlice.actions;
export default sessionSlice.reducer;

export const fetchSession = (): AppThunk => async ( dispatch ) => {
    dispatch(setLoading(true));
    try{

        const { data: { session }, error } = await supabase.auth.getSession()
        dispatch(setSession(session));
        dispatch(setUser(session!.user));
        dispatch(setUserRole(session?.user?.user_metadata?.user_role));

    }catch(error: any){
        dispatch(setError(error.message));
    }
}

export const fetchUserData = (): AppThunk => async ( dispatch, getState ) => {
    dispatch(setLoading(true));
    try{
        const state = getState();
        const userId = state.session.user?.id;
        const { data, error } = await supabase
        .from('user_table')
        .select()
        .eq('auth_id', userId)

        dispatch(setUserData(data![0]));
    }catch(error: any){
        dispatch(setError(error.message));
    }
}
