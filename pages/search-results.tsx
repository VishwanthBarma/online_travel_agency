import { supabase } from '@/utils/supabaseClient';
import React from 'react'

function searchResults({ results }: any) {
    console.log(results);
  return (
    <div>search-results</div>
  )
}

export default searchResults

export const getServerSideProps = async (context: any) => {
    const { departure_city, arrival_city, departure_date } = context.query;

    const { data, error } = await supabase
    .from('flight_table')
    .select('*')
    .eq('departure_city', departure_city.toLowerCase())
    .eq('arrival_city', arrival_city.toLowerCase())
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