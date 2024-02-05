import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavLink from "./components/NavLink/NavLink";
import intro_img from './images/king_triton.jpeg';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body-container">
        <div className='buttons-section'>
          <NavLink>About Me</NavLink>
          <NavLink>Skills</NavLink>
          <NavLink>Photos</NavLink>
          <NavLink>Social Media</NavLink>
        </div>
        <div className="form">
          <p>The Triton appreciates you for visiting his page!</p>
        </div>
        <img src={intro_img} alt="king triton" className='intro_img'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
