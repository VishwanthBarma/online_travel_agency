import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function adminsignup() {
    const [signUpGmail, setSignUpGmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const router = useRouter();
    const handleSubmit = async(e: any) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            email: signUpGmail,
            password: signUpPassword,
            options: {
                data:{
                    user_role: "admin"
                }
            }
        })

        console.log("Admin Signed In")
        console.log(data);
    }

    const handleSignOut = async(e: any) => {
        e.preventDefault();
        const { error } = await supabase.auth.signOut()
        if(error){
            console.log("Error in signout");
            console.log(error);
        }else{
            console.log("SignedOut Success");
            router.push("/");
        }
    }

  return (
    <div className='text-black'>
        <form onSubmit={handleSubmit}>
            <input value={signUpGmail} onChange={(e) => setSignUpGmail(e.target.value)} className='' type="gmail"></input>
            <input value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} type="text"></input>
            <button className='text-white' type="submit">save</button>
        </form>
        <button className='text-white' onClick={handleSignOut}>Signout</button>
    </div>
  )
}

export default adminsignup