import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Admin } from "./pages/Admin/Admin";
function App() {
  return (
    <div className="font-poppins m-0 box-border ">
      <Navbar />
      <Admin />
    </div>
  );
}

export default App;
