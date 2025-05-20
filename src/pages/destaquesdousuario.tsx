import { Header } from "../components/header"
import{Footer} from "../components/footer"
import Anna  from "../img/anna.jpg"
import Lizha from "../img/lizha.jpg"
import Tanzy    from "../img/tanzy.jpg"
import Burna  from "../img/burna.jpg"
import Ubakka from "../img/ubakka.jpg"
import Twenty from "../img/twenty.jpg"












export const DestaquesDoUsuario =() =>{
return(
    <>
    <Header/>

    
       <main className="">
        <h1  className="text-3xl text-red-500">Destaques</h1>
        <div  className="flex ">
        <img src={Anna} alt=""  className=" w-30 h-30 mx-1 pt-2"/> 
        <img src={Tanzy} alt=""  className="w-30 h-30 pt-2"  />
        <img src={Lizha} alt=""  className="w-30 h-30 mx-1 pt-2"/>
        </div>

         <div  className=" ">
        <img src={Burna} alt=""  className=" w-30 h-30 mx-1 pt-2"/> 
       
        <img src={Twenty} alt="" className="w-30 h-30 mx-1 pt-2" />
        <img src={Ubakka} alt=""  className="w-30 h-30 pt-2"  />
    
        </div>

        
       </main>
    
    <Footer/>
    </>


    
)
    
}