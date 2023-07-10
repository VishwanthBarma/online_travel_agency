import { AgencyContext } from '@/context/AgencyContext';
import { supabase } from '@/utils/supabaseClient';
import { error } from 'console';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

function adminlogin() {
    const [errorMessage, setErrorMessage] = useState("");

    const [logInGmail, setLogInGmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");

    const router = useRouter();
    const {session, fetchSession, setLoading}: any = useContext(AgencyContext);


    const handleLogIn = async(e: any) => {
        e.preventDefault();

        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: logInGmail,
            password: logInPassword,
        })

        if(!error){
            console.log("Successfull SignIn");
            setErrorMessage("");
            fetchSession();
            router.push("/");
        }else{
            console.log("Error in Log in");
            setErrorMessage(error.message);
        }
        setLoading(false);
    }

  return (
    <div className='p-16'>
        <div className='p-4 bg-neutral-800 rounded-2xl flex flex-col space-y-4 '>
            <div className='flex justify-center'>
                <h1 className="text-sky-500 font-semibold">Admin Login</h1>
            </div>

            <span className='w-full h-1 bg-sky-700 rounded-3xl'></span>

                <div className='flex justify-center'>
                        <form onSubmit={handleLogIn} className='flex flex-col space-y-2'>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Gmail</label>
                                <input required className='bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='email' value={logInGmail} onChange={e => setLogInGmail(e.target.value)}></input>
                            </div>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Password</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={logInPassword} onChange={e => setLogInPassword(e.target.value)}></input>
                            </div>

                            <button className='bg-neutral-900 font-bold p-2 text-sky-500 rounded-3xl' type='submit'>Log In</button>
                            {
                                errorMessage != "" && <>
                                    <div className='text-center m-3 text-rose-500 font-semibold'>{errorMessage}</div>
                                </>
                            }
                        </form>
                    </div>
        </div>
        
        <div className='bg-neutral-800 mt-5 p-3 rounded-3xl flex justify-evenly'>
            <Link href="/travelagency/agency/signup">Agency Login</Link>
            <Link href="/travelagency/user/signup">User Login</Link>
        </div>
        
    </div>
  )
}

export default adminlogin;