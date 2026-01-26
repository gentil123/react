export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded p-4 flex flex-col items-center justify-center w-40 h-32">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
