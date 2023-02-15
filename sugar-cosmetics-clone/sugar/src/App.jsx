import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { Navbar } from "./Components/Pages/aman/Navbar";
import { Footer } from "./Components/Pages/aman/Footer";
import { useContext } from "react";
import { SortContext } from "./Components/Context/SortContext";
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
