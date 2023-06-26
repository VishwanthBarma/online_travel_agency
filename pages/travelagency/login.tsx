import { AgencyContext } from '@/context/AgencyContext';
import { supabase } from '@/utils/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

const login: React.FC = () => {
    const [signUpGmail, setSignUpGmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [dataOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [logInClicked, setLogInClicked] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const [logInGmail, setLogInGmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");

    const router = useRouter();
    const {session, fetchSession, setLoading}: any = useContext(AgencyContext);


    useEffect(() => {
        if(session){
            router.push("/");
        }
    }, [session]);
    
    const handleSignUp = async(e: any) => {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email: signUpGmail,
            password: signUpPassword,
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
                username: username,
                email: signUpGmail,
                fullname: fullname,
                date_of_birth: dataOfBirth,
                gender: gender,
                contact_number : contactNumber
            })

            if(error){
                console.log("Error in inserting the row into user_table");
                console.log(error);
            }else{
                console.log("SignUp successfull.")
                setErrorMessage("");
                fetchSession();
                router.push("/");
            }

        }else{
            setErrorMessage(error.message);
        }
    }

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
    }

  return (
    <div className='p-16'>
        <div className='p-4 bg-neutral-800 rounded-2xl flex flex-col space-y-4 '>
            <div className='flex justify-evenly'>
                <button onClick={() => setLogInClicked(false)} className={`${logInClicked ? "text-slate-300" : "text-sky-500"} font-semibold`}>User Sign Up</button>
                <button onClick={() => setLogInClicked(true)} className={`${logInClicked ? "text-sky-500" : "text-slate-300"} font-semibold`}>User Login</button>
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
                                <input required className='bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='email' value={signUpGmail} onChange={e => setSignUpGmail(e.target.value)}></input>
                            </div>
                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Password</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='password' value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Username</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Full name</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={fullname} onChange={e => setFullname(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Date of birth </label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='date' value={dataOfBirth} onChange={e => setDateOfBirth(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Gender</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={gender} onChange={e => setGender(e.target.value)}></input>
                            </div>

                            <div className='flex items-center'>
                                <label className='font-semibold text-center w-32'>
                                    Contact number</label>
                                <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={contactNumber} onChange={e => setContactNumber(e.target.value)}></input>
                            </div>
                            
                            
                            <button className='bg-neutral-900 font-bold p-2 text-sky-500 rounded-3xl' type='submit'>Sign Up</button>
                            {
                                errorMessage != "" && <>
                                    <div className='text-center m-3 text-rose-500 font-semibold'>{errorMessage}</div>
                                </>
                            }
                        </form>
                    </div>
                :

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
            }
        </div>
        
        <div className='bg-neutral-800 mt-5 p-3 rounded-3xl flex justify-evenly'>
            <Link className='hover:text-sky-500' href="/travelagency/agencylogin">Agency Login</Link>
            <Link className='hover:text-sky-500' href="/travelagency/adminlogin">Admin Login</Link>
        </div>

    </div>
  )
}

export default login;
