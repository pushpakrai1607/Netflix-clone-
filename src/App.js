import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Home from './Component/Home';
import Header from './Component/Header';
import './App.scss'


function App() {
  return (
  <Router>
    <Header/>

<Routes>

<Route path='/' element={<Home/>}></Route>

</Routes>

  </Router> 
  );
}

export default App;
