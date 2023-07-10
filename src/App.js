import './App.css';
import Dashboard from './components/Dashboard';
import Activity from './components/Activity';
import Transaction from './components/Transaction';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Goals from './components/Goals/Goals';
import Goal from './components/Goals/Goal';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/transaction' element={<Transaction />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/goal/:goalId' element={<Goal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
