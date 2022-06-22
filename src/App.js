import "./App.css";
import Nav from "./components/nav/Nav";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import {useSelector} from 'react-redux';
import ErrorMessage from "./components/error/ErrorMessage";
function App() {

  const mediaError = useSelector(state => state.media.error);
  return (
    <div className="App">
      <Nav />
      {mediaError.success && <Body />}
      {!mediaError.success && <ErrorMessage/>}
      <Footer />
    </div>
  );
}

export default App;
