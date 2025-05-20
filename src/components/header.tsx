import logo from "../img/logo.png"
export const Header=()=>{

    return(
        <header className="bg-black w-screen flex justify-center">
            <img src={logo} alt=""className=" h-20 w-25   " />
        </header>
    )
}
