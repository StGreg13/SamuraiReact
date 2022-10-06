import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Technologes from './Technologies';

const App = () => {
  return (
    <div class="grid">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;