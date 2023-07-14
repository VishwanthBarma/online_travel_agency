import SearchFlightsAgain from '@/components/Search/SearchFlightsAgain';
import SearchResultItem from '@/components/Search/SearchResultItem';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';
import React from 'react'

function searchResults({ results }: any) {

    const router = useRouter();
    const { departure_city, arrival_city, departure_date } = router.query;

  return (
    <div className='p-12 flex flex-col space-y-3'>
        <h1 className='font-bold text-2xl text-sky-500'>Search Results</h1>
        <div className='mb-5'>
            <SearchFlightsAgain
                departure_city={departure_city}
                arrival_city={arrival_city}
                departure_date={departure_date}
            />
        </div>
        <div className='flex flex-col space-y-3 mt-3'>
            {
                results.length != 0 ?
                results.map((item : any, index : any) => <SearchResultItem key={item.id} data={item} index={index+1}/>)
                :
                <h1 className='font-semibold text-center bg-neutral-800 p-2 rounded-xl text-neutral-400'>No flights based on your search</h1>
            }
        </div>
    </div>
  )
}

export default searchResults

export const getServerSideProps = async (context: any) => {
    const { departure_city, arrival_city, departure_date } = context.query;

    const { data, error } = await supabase
    .from('flight_table')
    .select('*')
    .eq('departure_city', departure_city?.toLowerCase())
    .eq('arrival_city', arrival_city?.toLowerCase())
    // .eq('departure_date', departure_date.toLowerCase());

    if(error){
        console.log(error.message);
        return{
            props: {
                results: [],
            }
        }
    }

    return {
        props: {
            results : data,
        }
    }
}