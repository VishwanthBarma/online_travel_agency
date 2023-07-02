import { AgencyContext } from '@/context/AgencyContext';
import { supabase } from '@/utils/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

const Agencysignup: React.FC = () => {
    const [agencyName, setAgencyName] = useState("");
    const [signUpGmail, setSignUpGmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

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
                    user_role: "agent"
                }
            }
        })

        if(!error){
            const new_user_id = data.user!.id;

            const { error } = await supabase
            .from('agency_table')
            .insert({
                auth_id: new_user_id,
                email: signUpGmail,
                agency_name: agencyName,
                contact_number : contactNumber,
                address: address,
                city: city,
                state: state,
                country: country,
                postal_code: postalCode
            })

            if(error){
                console.log("Error in inserting the row into user_table");
                console.log(error);
            }else{
                console.log("SignUp successfull.")
                setErrorMessage("");
                fetchSession();
            }
        }else{
            setErrorMessage(error.message);
        }
        setLoading(false);
    }

  return (
    <div className='p-16'>
        <div className='p-4 bg-neutral-800 rounded-2xl flex flex-col space-y-4 '>
            <div className='flex justify-evenly'>
                <button className={`text-sky-500 font-semibold`}>Agency Sign Up</button>
                <button onClick={() => router.push("/travelagency/agency/login")} className={`text-slate-300 font-semibold`}>Agency Login</button>
            </div>

            <span className='w-full h-1 bg-sky-700 rounded-3xl'></span>

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
                            AgencyName</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={agencyName} onChange={e => setAgencyName(e.target.value)}></input>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-semibold text-center w-32'>
                            Contact number</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={contactNumber} onChange={e => setContactNumber(e.target.value)}></input>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-semibold text-center w-32'>
                            Address</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={address} onChange={e => setAddress(e.target.value)}></input>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-semibold text-center w-32'>
                            City</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={city} onChange={e => setCity(e.target.value)}></input>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-semibold text-center w-32'>
                            State</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={state} onChange={e => setState(e.target.value)}></input>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-semibold text-center w-32'>
                            Country</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={country} onChange={e => setCountry(e.target.value)}></input>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-semibold text-center w-32'>
                            PostalCode</label>
                        <input required className=' bg-neutral-900 p-2 rounded-xl ml-3 outline-none text-white' type='text' value={postalCode} onChange={e => setPostalCode(e.target.value)}></input>
                    </div>

                    
                    <button className='bg-neutral-900 font-bold p-2 text-sky-500 rounded-3xl' type='submit'>Sign Up</button>
                    {
                        errorMessage != "" && <>
                            <div className='text-center m-3 text-rose-500 font-semibold'>{errorMessage}</div>
                        </>
                    }
                </form>
            </div>
                
        </div>
        
        <div className='bg-neutral-800 mt-5 p-3 rounded-3xl flex justify-evenly'>
            <Link className='hover:text-sky-500' href="/travelagency/user/signup">User Login</Link>
            <Link className='hover:text-sky-500' href="/travelagency/adminlogin">Admin Login</Link>
        </div>

    </div>
  )
}

export default Agencysignup;
