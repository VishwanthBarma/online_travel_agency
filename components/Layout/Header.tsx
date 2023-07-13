import { supabase } from "@/utils/supabaseClient";
import { Session, User } from "@supabase/supabase-js";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AgencyContext } from "@/context/AgencyContext";

export default function Header(){
    const router = useRouter();
    const { session, user, clearSession, setLoading }: any = useContext(AgencyContext);

    const handleClick = () => {
        if(session){
            const userId = user?.id;
            router.push({
                pathname: `/profiles/[userId]`,
                query: { userId }
            });
        }else{
            router.push("/travelagency/user/signup");
        }
    }

    const handleSignOut = async(e: any) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signOut()
        if(error){
            console.log("Error in signout");
            console.log(error);
        }else{
            console.log("SignedOut Success");
            router.push("/");
            clearSession();
        }
    }
    return(
        <header className="sticky top-0 z-50 bg-neutral-800 p-3 text-center flex justify-center shadow-neutral-800 shadow-2xl">
            <h1 className="font-bold text-2xl">Travel Agency</h1>
            <div className="absolute right-5 text-center flex">
                {
                    session && <button onClick={handleSignOut} className="mr-2 hover:text-rose-500">signout</button>
                }
                <button onClick={handleClick} className={`${session && "text-green-500"} text-3xl hover:text-sky-500`}>
                    <CgProfile />
                </button>
            </div>
        </header>
    )
}