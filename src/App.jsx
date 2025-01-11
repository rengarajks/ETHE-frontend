import './App.css'
import Home from './Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router';

export default function App() {
  return (
    <div className='font-poppinsMedium'>
      <Router>
        <Routes>
          <Route path='/*' element={<Home/>}/>
        </Routes>
      </Router>      
    </div>
  );
}
