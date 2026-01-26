export default function Table() {
  return (
    <div className="mx-1 mt-2">
      <table className="w-full border-collapse">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="py-1 px-2 text-left">Name</th>
            <th className="py-1 px-2 text-left">Class</th>
            <th className="py-1 px-2 text-left">Students</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          <tr className="bg-white">
            <td className="py-1 px-2">Gentil</td>
            <td className="py-1 px-2">L5 SWD</td>
            <td className="py-1 px-2">1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
