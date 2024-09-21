import './App.css';
import Typical from 'react-typical';

function App() {
  return (
    <div className="app">
      
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
          <span className="block text-blue-500 z-0 lg:inline">
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
        </span>
        </p>
        </div>
    
      </main>

      {/* The footer of the portfolio*/}
      <footer>
        
      </footer>
    </div>
  );
}

export default App;