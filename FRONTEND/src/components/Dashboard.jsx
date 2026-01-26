import Sidebar from "./pages/Sidebar";
import Card from "./pages/card";
export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100 flex gap-4 mt-4">
          <Card title="Users" value="1000" />
          <Card title="student" value="500" />
          <Card title="payment" value="1,000,000" />
          <Card title="class" value="60" />
      
      </div>
    </div>
  );
}
