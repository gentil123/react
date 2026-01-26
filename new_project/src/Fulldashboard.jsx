import Card from "./Pages/Card";
import Dashboard from "./Pages/dashboard";
import Table from "./Pages/Table";
import Footer from "./Pages/Footer";

export default function Fulldashboard() {
  return (
    <div className="flex flex-col w-full">
      <Dashboard />
      <div className="flex  flex-1 p-4 gap-3">
        <Card title="Users" value="3000" />
        <Card title="Students" value="600" />
        <Card title="Payment" value="1,000,000 frw" />
        <Card title="Classes" value="40" />
      </div>
     <Table/>
     <Footer/>
    </div>
  );
}
