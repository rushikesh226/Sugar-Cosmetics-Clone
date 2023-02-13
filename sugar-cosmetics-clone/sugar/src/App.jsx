import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { Footer } from "./Components/Pages/aman/Footer";
import { Navbar } from "./Components/Pages/aman/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
