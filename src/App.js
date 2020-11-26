import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";


function App() {
  console.log(process.env)
  return (
    <div className="App">
      <NavBar/>
      <Signup/>
    </div>
  );
}

export default App;