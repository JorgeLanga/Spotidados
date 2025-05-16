


export const Login = () => {
    return (
        <body className=" bg-red-700  flex justify-center">
            <div >
        <form className="flex flex-col  py-10 ">
            <h2>Login</h2>
                <input type="user or email" placeholder="User or Email" className="bg-white rounded-md outline-1 m-5 w-40" />
                <input type="password" placeholder="Password" className="bg-white rounded-md outline-1 m-5 w-40"/>
            <button className="bg-white rounded-md outline-1 w-40  m-auto ">Entrar</button>
        </form>
    </div>
        </body>
        
    
)
}