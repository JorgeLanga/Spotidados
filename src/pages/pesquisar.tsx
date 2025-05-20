import { Header } from "../components/header";
import { Footer } from "../components/footer";


export const Pesquisar = () => {
    return (
        <>
        <Header/>
            
                <div className="bg-gray-50">
                    <input type="search" placeholder="Pesquisar" className=" text-white  bg-red-500 " />
                </div>





                <Footer />
            
        </>
    )

}