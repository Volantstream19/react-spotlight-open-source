import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { UserData } from './ChartData.js';
import './App.css';
import BarChart from './components/barChart.js';

function App() {
  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <BarChart chartData={userData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
