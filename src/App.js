import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, { useState } from 'react';
import intro_img from './images/king_triton.jpeg';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalNumber) => {
    setActiveModal(modalNumber);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="App">
      <Header/>
      <div className="body-container">
        <div className='buttons-section'>
          <button onClick={() => openModal(1)} className='glow-on-hover'>About Me</button>
          <button onClick={() => openModal(2)} className='glow-on-hover'>Strengths</button>
          <button onClick={() => openModal(3)} className='glow-on-hover'>Photo Gallery</button>
          <button onClick={() => openModal(4)} className='glow-on-hover'>Social Media</button>
        </div>
        <div className="modals">
        {activeModal === 1 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>The Triton is described as the offspring of Poseidon and Amphitrite, 
              a demigod of the sea with a lower part of the body like that of a fish. It is known as a mighty and fierce sea warrior.
              Given UC San Diego's close proximity to the Pacific Ocean and its connections with the world-famous Scripps Institution of Oceanography, 
              the Triton became our appropriate mascot in 1964</p>
          </div>
        </div>
      )}

      {activeModal === 2 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              <ul>
                <li>Prideful</li>
                <br></br>
                <li>Caring</li>
                <br></br>
                <li>Energetic</li>
              </ul>
            </p>
          </div>
        </div>
      )}

      {activeModal === 3 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>More images coming soon!</p>
            <img src="https://s-media-cache-ak0.pinimg.com/736x/91/1a/6e/911a6e0bd796efa3e0dbc644ec305a6f.jpg" alt="triton design" width="50%"/>
          </div>
        </div>
      )}

      {activeModal === 4 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              <a href="https://www.instagram.com/ucsdtritontide/">Instagram</a>
              <br></br>
              <br></br>
              <a href="https://twitter.com/UCSDTritonTide">Twitter</a>
              <br></br>
              <br></br>
              <a href="https://ucsdtritons.com/sports/2019/12/13/triton-tide.aspx">Official Website</a>
            </p>
          </div>
        </div>
      )}
        </div>

        <div className="form">
          <form className="input-form">
            <h1>Send a Letter</h1>
            <div className="input">
              <label for="say">What is your name?</label>
              <input name="name" id="name" placeholder="John Doe" required/>
            </div>
            <div className="input">
              <label for="email">What is your email?</label>
              <input name="email" id="email" placeholder="johndoe@gmail.com" required/>
            </div>
            <div className="input">
              <label for="to">What do you want to say to the Triton?</label>
              <textarea name="to" id="to" rows="5" cols="33" placeholder="Hello Triton..." required/>
            </div>
            <div>
              <button className='glow-on-hover'>Send my greetings</button>
            </div>
          </form>
          <p>The Triton appreciates you for visiting his page!</p>
        </div>
        <img src={intro_img} alt="king triton" className='intro_img'/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
