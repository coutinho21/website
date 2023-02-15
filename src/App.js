import './App.css';

function App() {
  const handleClickScrollAbout = () => {
    const element = document.getElementById('about-section');
    if (element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App w-full overflow-hidden">
      <nav className="navbar">
        <ul className="flex justify-center">
          <li className="ml-4 mr-4">
            <button onClick={handleClickScrollAbout}>About</button>
          </li>
          <li className="ml-4 mr-4">
            <button>Projects</button>
          </li>
          <li className="ml-4 mr-4">
            <button>Skills and Education</button>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1 className="name">Guilherme</h1>
        <img src={require("./pics/yin_yang.png")} className="yin-yang" alt="yin-yang" />
        <h1 className="name">Coutinho</h1>
      </header>
      <div className="about" id="about-section">
        <h1 className="about-title">About</h1>
        <p className="about-text">I'm a Software Engineering Student based in Portugal</p>
      </div>
    </div>
  );
}

export default App;
