import './App.css';
import LinkedLogoBlack from './assets/linkedin-logo-black.png'
import GithubLogoBalck from './assets/github-logo-black.png'
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
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a future <a className='aboutme-intro-title'>Software Engineer</a></p>
      </div>
    
      </main>

      {/* The footer of the portfolio*/}
      <footer>
        
      </footer>
    </div>
  );
}

export default App;