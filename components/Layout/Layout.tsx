import Header from "./Header";
import SyncLoader from "react-spinners/SyncLoader";
import { useContext } from "react";
import { AgencyContext } from "@/context/AgencyContext";

export default function Layout({children}: any){
    const { loading }: any = useContext(AgencyContext);

    return(
        <div>
            {
                loading ?
    
                <div className="flex items-center justify-center w-screen h-screen">
                    <SyncLoader color="rgb(14 165 233)" size={30} />
                </div>

                :
    
                <div className="flex flex-col h-screen">
                    <Header />
                    <main>{children}</main>
                </div>
            }
        </div>
    )
}