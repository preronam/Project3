
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Login />
      <StickyFooter/>
    </div>
  );
}

export default App;
