import Navbar from './components/functionalComponent/Navbar.jsx';
import './css/App.css';
import ClassComponent from './components/ClassComponent/ClassComponent.jsx';

const h1Style = {
  backgroundColor: "blue",
  color: "white",
  textAlign: "center"
};

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div>
        <h1 style={h1Style}>Welcome to Derry</h1>
        <h2 className="h2">This is simple react</h2>

        <ClassComponent />

        <img
          src="vite.svg"
          alt="Vite logo"
          style={{ marginLeft: "650px", height: "400px" }}
        />
      </div>
    </>
  );
}

export default App;
