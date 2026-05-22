import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;