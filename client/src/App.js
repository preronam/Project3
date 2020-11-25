
import './App.css';
//import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import LoginForm from './components/LoginForm';
// import Signup from './pages/Signup';
// import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <LoginForm />
    </div>
  );
}

export default App;
