import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import FormData from './components/FormData';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path = "/" Component={Form}></Route>
        <Route exact path = "/apointments" Component={FormData}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
