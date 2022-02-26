import profile_pic from "./Images/EFL_0515.jpg"
import Icons from "./Components/Icons/Icons.js";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="title">Siger Ma</header>
      <img className = "profile_pic" src={profile_pic} alt=""></img>
      <p className="description">I am a hardworking first year student in Software Engineering Co-op.</p>
      <Icons></Icons>
    </div>
  );
}

export default App;
