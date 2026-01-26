export default function Login() {
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center p-8">
      <div className="w-full max-w-md bg-white rounded shadow p-6">
        
        <h1 className="text-2xl text-center mb-4 font-semibold">
          Sign In
        </h1>

        <form className="flex flex-col gap-4">
          <label className="text-gray-500 text-sm">
            Username
          </label>

          <input
            type="text"
            className="rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300"
            placeholder="Enter username"
          />
             <label className="text-gray-500 text-sm">
          Password
          </label>
          <input
            type="text"
            className="rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300"
            placeholder="Enter username"
          />
          <button type="submit " className="bg-blue-500 mx-aoto">Send</button>
        </form>

      </div>
    </div>
  );
}
