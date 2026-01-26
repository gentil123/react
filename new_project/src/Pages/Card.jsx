export default function Card({title,value}){
    return(
        <div className="bg-white rounded shadow-md flex flex-cols p-6 judtify-center items-center w-63 h-31 gap-4 justify-between">
            <h1 className="text-center text-2xl p-5 ">{title}</h1>
            <p className="text-green-200 font-bold">{value}</p>
        </div>
    )

}