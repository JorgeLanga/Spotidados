import { Header } from "../components/header"
import{Footer} from "../components/footer"
import Anna  from "../img/anna.jpg"
import Lizha from "../img/lizha.jpg"
import Tanzy    from "../img/tanzy.jpg"
import Burna  from "../img/burna.jpg"
import Ubakka from "../img/ubakka.jpg"
import Twenty from "../img/twenty.jpg"
import Trex   from "../img/trex.jpg"
import Plutonio   from "../img/plutonio.jpg"
import Tamires   from "../img/tamires.jpg"
import Cleyton   from "../img/cleyton.jpg"
import Adelle    from "../img/adelle.jpg"
import  Ayra from "../img/ayra.jpg";









export const DestaquesDoUsuario =() =>{
return(
    <>
    <Header/>

    
       <main className="">
     
        <h1  className="text-3xl text-red-500 ">Músicas <span className="block text "><strong>+Tocadas</strong></span></h1>
        <div  className="flex  flex-columns ">
            <div>
    <img src={Anna} alt="Anna Joyce "  className=" w-30 h-30 mx-0 pt-2"/> 
        <p  className="text-center " ><strong>Anna Joyce</strong><br />Protagonista</p>
        
            </div>
       
        <div>
        <img src={Tanzy} alt="Cef Tanzy"  className="w-30 h-30  mx-2 pt-2"  />
        <p className="text-center"><strong>Cef Tanzy</strong><br />Amante Fiel</p>
        </div>
        <div>
            <img src={Lizha} alt="Lizha James"  className="w-30 h-30 mx- pt-2"/>
            <p className="text-center"><strong>Lizha James</strong><br />Mbilu Yami </p>
        </div>
        </div>

         <div  className="flex ">
        <div>
            <img src={Burna} alt="Burna Boy"  className=" w-30 h-30 mx-0 pt-6"/> 
            <p className="text-center" ><strong>Burna Boy</strong><br /> City Boy</p>
        </div>
       <div>
        <img src={Trex} alt="Tóy Tóy T-rex"className=" w-30 h-30 mx-2 pt-6" /> 
        <p className="text-center"><strong>Tóy Tóy T-rex</strong><br /> Tá Tudo Bem</p>
       </div>
       <div>
         <img src={Twenty} alt="Twenty Fingers" className="w-30 h-30 mx- pt-6" />
        <p className="text-center"><strong>Twenty Fingers</strong><br />Fala na minha cara</p>
       </div>
        </div>


    <div className="flex">

       <div>
         <img src={Ubakka} alt="Justino Ubakka"  className="w-30 h-30 pt-6"  />
         <p className="text-center"><strong>Justino Ubakka</strong><br />Rhula</p>
       </div>

        <div>
            <img src= {Plutonio} alt="Plutónio"  className=" w-30 h-30 mx-2 pt-6"/>
            <p className="text-center"><strong>Plutónio</strong><br />Tal e Qual</p>
        </div>
        

        <div>
            
        <img src= {Tamires} alt="Tamyres Moiane" className=" w-30 h-30 mx- pt-6" />
        <p className="text-center"><strong>Tamyres Moiane</strong><br />Vem</p>
        </div>

        </div>
        
    <div className=" flex">
       <div>
         <img src= {Cleyton} alt="Cleyton David " className=" w-30 h-30 mx-1 pt-6" />
         <p className="text-center"><strong>Cleyton David</strong><br />Coração Culpado</p>
       </div>

        <div>
            <img src={Adelle} alt="Adelle" className=" w-30 h-30 mx-1 pt-6"/>
        <p className="text-center"><strong>Adelle</strong><br />Easy On Me </p>
        </div>

        <div>
            <img src={Ayra} alt="Ayra Star"  className=" w-30 h-30 mx-1 pt-6"/>
            <p className="text-center"><strong>Ayra Star</strong><br />All The Love</p>
        </div>
    </div>


       </main>
    
    <Footer/>
    </>


    
)
    
}