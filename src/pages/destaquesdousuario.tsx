import { Header } from "../components/header"
import{Footer} from "../components/footer"
import Anna  from "../img/anna.jpg"
import Lizha from "../img/lizha.jpg"
import Ubakka from "../img/ubakka.jpg"


export const DestaquesDoUsuario =() =>{
return(
    <>
    <Header/>

    <div className="bg-gray-50 flex list-inside">
       <main>
        <h1>Favoritas</h1>
        <img src={Anna} alt=""  className="w-30 h-45"/> <br />
        <img src={Ubakka} alt=""  className="w-30 h-45" />
    <h1>Destaques</h1>
        <img src={Lizha} alt=""  className=" w-30 h-45"/>
    
        
       </main>
    </div>

    <Footer/>
    </>


    
)
    
}