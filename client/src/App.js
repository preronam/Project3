
import './App.css';
//import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import LoginForm from './components/LoginForm';
import Search from './pages/Searchpage';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <LoginForm />
      <Search />
      <StickyFooter />

    </div>
  );
}

export default App;
