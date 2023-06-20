import { supabase } from "@/utils/supabaseClient";
import { Session, User } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
export default function Header(){
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (error) {
              console.error('Error fetching user:', error.message);
            } else {
              setUser(data?.user);
            }
        }

        const fetchSession = async () => {
            const { data, error } = await supabase.auth.getSession()
            if (error) {
                console.error('Error fetching session:', error.message);
            } else {
                setSession(data?.session);
                fetchUser();
            }
        }
      
        fetchSession();
    }, []);

    const handleClick = () => {
        if(user){
            const userId = user.id;
            router.push({
                pathname: `/profiles/[userId]`,
                query: {userId}
            });
        }
        router.push("/travelagency/login");
    }

    const handleSignOut = async(e: any) => {
        e.preventDefault();
        const { error } = await supabase.auth.signOut()
        if(error){
            console.log("Error in signout");
            console.log(error);
        }else{
            console.log("SignedOut Success");
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