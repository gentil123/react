export default function Nav(){
    return(
        <div className="flex flex-col bg-gray-400 text-2xl w-1/4 min-h-screen">
            <h1 className="text-2xl text-center">Admin</h1>
            <ul className="cursor-pointer text-2xl p-3 space-4">
                <li>Users</li>
                <li>Add student</li>
                <li>Profile</li>
            </ul>
        </div>
    )
}