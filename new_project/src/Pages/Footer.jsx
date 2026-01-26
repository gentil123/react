export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 text-sm mt-4 flex">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
        <p>
          © {new Date().getFullYear()} Student Management System
        </p>

        <p className="mt-1 md:mt-0">
          Developed by <span className="font-semibold text-green-600">Gentil</span>
        </p>
      </div>
    </footer>
  );
}
