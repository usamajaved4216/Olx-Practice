import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Config';


function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <BrowserRouter>

          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
