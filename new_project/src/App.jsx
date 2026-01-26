import Fulldashboard from "./Fulldashboard";
import Navbar from "./Pages/Nav";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <Fulldashboard />
       
      </div>
 <Footer/>
    </div>
  );
}

export default App;
