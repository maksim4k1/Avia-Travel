import AppRouters from './components/AppRouters';
import Logo from './components/Logo';
import './styles/App.css';

function App() {
  return (
    <div className="App container">
      <Logo/>
      <AppRouters/>
    </div>
  );
}

export default App;