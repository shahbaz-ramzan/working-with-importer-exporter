// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import CompA from './ComponentA';
import { ComponentA } from './Task2/ComponentA';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>

     { <Route exact path='/' element={<CompA/>}/>}
     <Route path='/componenta' element={<ComponentA/>} />
     </Routes>
     </BrowserRouter>

      
       </div>
  );
}

export default App;
