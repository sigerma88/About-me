import ReactTooltip from 'react-tooltip';
import profile_pic from "./Images/EFL_0515.jpg";
import {Icon1, Icon2, Icon3, Icon4} from "./Components/Icons/Icons.js";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="title">Siger Ma</header>
      <img className = "profile_pic" src={profile_pic} alt=""></img>
      <p className="description">I am a hardworking first year student in Software Engineering Co-op at McGill University.</p>
      <button className = "button1" data-tip data-for="LinkedIn">
        <Icon1></Icon1>
      </button>
      <ReactTooltip id='LinkedIn' effect='solid' backgroundColor= '#3b83f7'>
        LinkedIn
      </ReactTooltip>
      <button className = "button2" data-tip data-for="GitHub">
        <Icon2></Icon2>
      </button>
      <ReactTooltip id='GitHub' effect='solid' backgroundColor= '#1e0342'>
        GitHub
      </ReactTooltip>
      <button className = "button3" data-tip data-for="Email">
        <Icon3></Icon3>
      </button>
      <ReactTooltip id='Email' effect='solid' backgroundColor='#373738'>
        Email
      </ReactTooltip>
      <button className = "button4" data-tip data-for="Resume">
        <Icon4></Icon4>
      </button>
      <ReactTooltip id='Resume' effect='solid' backgroundColor='#fa362f'>
        Resume
      </ReactTooltip>
      <header className="bookshelf">Bookshelf</header>
    </div>
  );
}

export default App
