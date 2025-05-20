import { Header } from "../components/header"
import{Footer} from "../components/footer"
import Anna  from "../img/anna.jpg"
import Lizha from "../img/lizha.jpg"
import Cef    from "../img/cef.jpg"












export const DestaquesDoUsuario =() =>{
return(
    <>
    <Header/>

    
       <main className="">
        <div  className="flex ">
        <img src={Anna} alt=""  className=" w-30 h-30 mx-1 pt-2"/> 
        
        <img src={Cef} alt=""  className="w-30 h-30 pt-2"  />
        <img src={Lizha} alt=""  className="w-30 h-30 mx-1 pt-2"/>
        </div><br />

        
        
       </main>
    
    <Footer/>
    </>


    
)
    
}