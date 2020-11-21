
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Login />
    </div>
  );
}

export default App;
