import './App.css';
import Nav from './components/nav/Nav';
import Body from './components/body/Body'
import Gallery from './Gallery';

function App() {
  Gallery();
  return (
    <div className="App">
     <Nav/>
     <Body/>

    </div>
  );
}

export default App;
