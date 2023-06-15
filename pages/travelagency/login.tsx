import { supabase } from '@/utils/supabaseClient';
import React, { useState } from 'react'

function login() {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userData, setUserData] = useState(null);
    
    const handleSignUp = async(e: any) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            email: gmail,
            password: password,
            options: {
                data:{
                    user_role: "client"
                }
            }
        })

        if(!error){
            const new_user_id = data.user!.id;

            const { error } = await supabase
            .from('user_table')
            .insert({
                auth_id: new_user_id,
                username: "ajljfals",
                email: gmail,
                password: password,
                fullname: "dflkajdf",
                date_of_birth: "02380",
                gender: "Male",
                contact_number : "q08320-483-"
            })

            if(error){
                console.log("Error in inserting the row into user_table");
                console.log(error);
            }

        }else{
            console.log(error);
        }
    }

    const handleLogIn = async(e: any) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: gmail,
            password: password,
        })

        if(!error){
            console.log(data);
            console.log("Successfull SignIn");
        }else{
            console.log("Error in Log in");
            console.log(error);
        }
  
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

    const getUserDetails = async(e: any) => {
        e.preventDefault();
        const { data: { user } } = await supabase.auth.getUser()
        
        // const { data, error } = await supabase
        // .from('user_table')
        // .select()
        // .eq('auth_id', user!.id)


        // const { data, error } = await supabase.auth.getSession()



        console.log(user?.user_metadata.user_role);
    }

  return (
    <div>
        <form onSubmit={handleSignUp}>
            <label>
                Gmail
                <input className='text-black' type='email' value={gmail} onChange={e => setGmail(e.target.value)}></input>
            </label>
            <label>
                Password
                <input className='text-black' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
            </label>
            <button type='submit'>Sign UP</button>
        </form>

        <form onSubmit={handleLogIn}>
            <label>
                Gmail
                <input className='text-black' type='email' value={gmail} onChange={e => setGmail(e.target.value)}></input>
            </label>
            <label>
                Password
                <input className='text-black' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
            </label>
            <button type='submit'>Log IN</button>
        </form>

        <button onClick={handleSignOut}>signout</button>

        <button onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}

export default login;