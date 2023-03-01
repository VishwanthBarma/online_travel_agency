import Header from "./Header";

export default function Layout({children}: any){
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <main>{children}</main>
        </div>
    )
}