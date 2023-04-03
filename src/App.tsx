import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App():JSX.Element {
  return (
    <div className="flex">
     <SideBar/>
     <Home/>
      
    </div>
  );
}

export default App;