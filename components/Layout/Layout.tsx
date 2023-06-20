import { RootState } from "@/store";
import Header from "./Header";
import { useDispatch, useSelector } from 'react-redux';
import { ThreeBounce } from "better-react-spinkit";

export default function Layout({children}: any){
    const loading = useSelector((state: RootState) => state.session.loading);

    return(
        <div>
            {
                loading?
    
                <div className="flex items-center justify-center w-screen h-screen">
                    <ThreeBounce size={30} color="orange" />
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