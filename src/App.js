import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
// import { Greet } from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div>
      <h2><FunctionClick/></h2>
      <h2><ClassClick/></h2>
      <h2><EventBind/></h2>

      {/* <h4><Header degree = " 200"/>
      <HeaderTwo firstName = "Nishu" lastName = "Tyagi"/>
      <HeaderTwo firstName = "Krati" lastName = "Gupta"/>
      <HeaderTwo firstName = "Tulika" lastName = "Sharma"/>
      <Greet/>
      <Welcome/></h4>
      <Message/>
      <h2><Counter/></h2> */}
    </div>
  );
}

export default App;
