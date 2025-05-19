import definicoes from '../../public/definicoes.png';
import historico from '../../public/historico.png'
import home from '../../public/home.png'
import pesquisa from '../../public/pesquisa.png'

export const Footer=()=>{

    return(
   <div>
     <footer>
        <div className='flex flex-row space-around  fixed bottom-0 bg-red-900 rounded w-screen'>
    <span><img src={home} className='h-10 w- mx-5.5 '/></span>
      <span><img src={pesquisa} alt="" className='h-10 w- mx-8' /></span>
      <span><img src={historico} alt="" className='h-10 w- mx-8' /></span>
      <span><img src={definicoes} alt="" className='h-10 w- mx-5'/></span>
        </div>
      
        </footer>   
   </div>
    )

}