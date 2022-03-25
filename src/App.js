import './App.css';
import Questions from './components/Questions/Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guns from './components/Guns/Guns';

function App() {
  return (
    <div className="App">
      <Guns />
      <Questions />
    </div>
  );
}

export default App;
