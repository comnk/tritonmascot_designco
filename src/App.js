import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavLink from "./components/NavLink/NavLink";
import intro_img from './images/king_triton.jpeg';

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="body-container">
        <div className='buttons-section'>
          <NavLink>About Me</NavLink>
          <NavLink>About Me</NavLink>
          <NavLink>About Me</NavLink>
          <NavLink>About Me</NavLink>
        </div>
        <div class="form">
          <p>TESTING!</p>
        </div>
        <img src={intro_img} alt="king triton" className='intro_img'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
