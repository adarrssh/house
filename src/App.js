import './App.css';
import Heading from './components/Heading/Heading';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="main">
        <div className='main-body'>
          <Heading/>
          <Menu/>
        </div>
      </div>
    </div>
  );
}

export default App;
