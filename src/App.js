import './App.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react'; // Add this line to import React and useEffect

import image1 from "./images/img1.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import image4 from "./images/img4.jpeg";
import image5 from "./images/img5.jpeg";
import image6 from "./images/img6.jpeg";
import image7 from "./images/img7.jpeg";
import image8 from "./images/img8.jpeg";
import image9 from "./images/img9.jpeg";
import image10 from "./images/img10.jpeg";
import image11 from "./images/img11.jpeg";
import image12 from "./images/img12.jpeg";
import image13 from "./images/img13.jpeg";
import image14 from "./images/img14.jpeg";
import image15 from "./images/img15.jpeg";
import image16 from "./images/img16.jpeg";
import image17 from "./images/img17.jpeg";
import image18 from "./images/img18.jpeg";
import image19 from "./images/img19.jpeg";
import image20 from "./images/img20.jpeg";
import image21 from "./images/img21.jpeg";
import image22 from "./images/img22.jpeg";
import image23 from "./images/img23.jpeg";
import image24 from "./images/img24.jpeg";
import image25 from "./images/img25.jpeg";
import image26 from "./images/img26.jpeg";
import image27 from "./images/img27.jpeg";
import image28 from "./images/img28.jpeg";
import image29 from "./images/img29.jpeg";
import image30 from "./images/img30.jpeg";
import image31 from "./images/img31.jpeg";
import image32 from "./images/img32.jpeg";
import image33 from "./images/img33.jpeg";
import image34 from "./images/img34.jpeg";
import image35 from "./images/img35.jpeg";





function App() {
  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8,  image10,
    image11, image13, image14, image15,image18,
    image16, image17,  image20, image21,
    image22, image23, image24, image25,  image27, image28,
    image29, image30, image32,  image35
  ];

    // Randomly change the opacity of images
    const randomOpacityChange = () => {
      const allImages = document.querySelectorAll('.background-grid img');
      setInterval(() => {
        // Pick a random image
        const randomIndex = Math.floor(Math.random() * allImages.length);
        const randomImage = allImages[randomIndex];
  
        // Set opacity to 1 for a while, then revert it
        randomImage.style.opacity = .3;
        setTimeout(() => {
          randomImage.style.opacity = 0.1;
        }, 2000); // Revert after 2 seconds
      }, 1500); // Change opacity of a new image every second
    };
  
    // Use useEffect to run the opacity change function once the component mounts
    React.useEffect(() => {
      randomOpacityChange();
    }, []);

  return (
    <div className="app">
      
      {/* Background image grid */}
      <div className="background-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`background-${index}`} />
        ))}
      </div>

      {/* The header of the portfolio*/}

      <header>

        <div className='navbar-name'>
          <a>Alex Matos</a>
        </div>

        <div className='navbar-links'>

        <div className='navbar-links-link'>
          <a>
            <p className='emoji'>👨🏾‍🦱</p>
            About Me
          </a>
        </div>

        <div className='navbar-links-link'>
          <a>
            <p className='emoji'>💼</p>
            Work
          </a>
        </div>
        
        <div className='navbar-links-link'>
          <a>
            <p className='emoji'>📂</p>
            Projects
          </a>
        </div>

        <div className='navbar-links-link'>
          <a>
            <p className='emoji'>🧠</p> 
            Knowledge Bank
          </a>
        </div>
        </div>
      </header>


      {/* The content of the portfolio*/}
      <main>

        <div className='aboutme-intro'>
          <p>👋🏾 Hi, my name is Alex Matos!</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a {' '}
            <Typical className='aboutme-intro-title'
              steps={[
                "Backend Engineer",
                1500,
                "Fullstack Engineer",
                1500,
                "Mobile Developer",
                1500,
                "System Administrator",
                1500,
              ]}
              loop={Infinity}
              wrapper='span'
            />
          </p>
        </div>

        <div className='aboutme-links'>
          <div className='aboutme-links-icons'>
            <a href="https://github.com/al3xm8" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/al3xm8" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="https://twitter.com/amatos_alfredo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </div>
          <div className='aboutme-links-resume'>
          Resume
          </div>
        </div>
    
      </main>

    </div>
  );
}

export default App;