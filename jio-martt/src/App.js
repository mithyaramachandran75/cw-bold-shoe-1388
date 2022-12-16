import './App.css';
import First_page from './Components/First_page';
import Navlist from './Components/Navlist';
import Footer from "./footer/Footer"
function App() {
  return (
    <div className='background'>
      <div>
        <First_page />
      </div>
      <div>
        <Navlist />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}
export default App
