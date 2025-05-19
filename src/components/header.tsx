import logo from "../imagens/logo.png"
export const Header=()=>{

    return(
        <header className="bg-red-900 w-screen flex justify-center">
            <img src={logo} alt=""className=" h-20 w-25   " />
        </header>
    )
}
