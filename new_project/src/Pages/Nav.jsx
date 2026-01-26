export default function Navbar(){
    return(
        <div className="min-h-screen bg-green-500 p-8 justify-center items-center">
            <h1 className="text-white text-2xl items-center justify-center">Admin</h1>
            <ul className="block p-4 justify-center items-center gap-4 onhover:cursor-pointer">
                <li className="text-white text-2xl">users</li>
                <li className="text-white text-2xl">students</li>
                <li className="text-white text-2xl">class</li>
                <li className="text-white text-2xl">logout</li>
            </ul>
        </div>
    )
}