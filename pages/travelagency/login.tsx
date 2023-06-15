import { supabase } from '@/utils/supabaseClient';
import React, { useState } from 'react'

function login() {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const [logInClicked, setLogInClicked] = useState(false);
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
    <div className='p-16'>
        <div className='p-4 bg-neutral-800 rounded-2xl flex flex-col space-y-4 '>
            <div className='flex justify-evenly'>
                <button onClick={() => setLogInClicked(false)} className={`${logInClicked ? "text-slate-300" : "text-sky-500"} font-semibold`}>User Sign Up</button>
                <button onClick={() => setLogInClicked(true)} className={`${logInClicked ? "text-sky-500" : "text-slate-300"} font-semibold`}>User Log In</button>
            </div>

            <span className='w-full h-1 bg-sky-700 rounded-3xl'></span>

            {/* SignUp Form  */}
            {
                !logInClicked?
                    <div className='flex justify-center'>
                        <form onSubmit={handleSignUp} className='flex flex-col space-y-2'>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Gmail</label>
                                <input required className='bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='email' value={gmail} onChange={e => setGmail(e.target.value)}></input>
                            </div>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Password</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Username</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Full name</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Date of birth </label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Gender</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Contact number</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            
                            
                            <button className='bg-neutral-900 font-bold p-2 text-sky-500 rounded-3xl' type='submit'>Sign Up</button>
                        </form>
                    </div>
                :

                <div className='flex justify-center'>
                        <form onSubmit={handleSignUp} className='flex flex-col space-y-2'>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Gmail</label>
                                <input required className='bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='email' value={gmail} onChange={e => setGmail(e.target.value)}></input>
                            </div>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Password</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>

                            <button className='bg-neutral-900 font-bold p-2 text-sky-500 rounded-3xl' type='submit'>Sign Up</button>
                        </form>
                    </div>

            }
        </div>

        <div className='bg-neutral-800 mt-5 p-3 rounded-3xl flex justify-evenly'>
            <button>Agency Login</button>
            <button>Admin Login</button>
        </div>

        {/* <form onSubmit={handleLogIn}>
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

        <button onClick={getUserDetails}>Get User Details</button> */}
        
    </div>
  )
}

export default login;