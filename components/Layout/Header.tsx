import Link from "next/link";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
export default function Header(){
    const router = useRouter();
    const handleClick = () => {
        // if session the open profile page or open login page
        router.push("/travelagency/login");
    }
    return(
        <header className="sticky top-0 z-50 bg-neutral-800 p-3 text-center flex justify-center shadow-neutral-800 shadow-2xl">
            <h1 className="font-bold text-2xl">Travel Agency</h1>
            <button onClick={handleClick} className="absolute right-5 text-3xl hover:text-sky-500" >
                <CgProfile />
            </button>
        </header>
    )
}