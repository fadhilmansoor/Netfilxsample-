import './App.css';
import NavBar from './Components/navbar/NavBar';
import {orginals,action} from './url'
import Banner from './Components/banner/banner';
import Rowpost from './Components/Rowpost/Rowpost';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url={orginals} title='Netflix Orginals'/>
    <Rowpost url={action} title='Action' issmall/>
    </div>
  );
}


export default App;
