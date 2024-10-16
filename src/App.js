import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <TaskList />
      </div>
      <Footer />
    </>
  );
}

export default App;
