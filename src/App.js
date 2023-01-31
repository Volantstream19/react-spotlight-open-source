import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { UserData } from './ChartData.js';
import './App.css';
import BarChart from './components/barChart.js';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import * as emailData from './users.json';
import 'rsuite-table/dist/css/rsuite-table.css';
import { TextField } from '@mui/material';

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
        <Link to="/table" className="link">
          Table
        </Link>
        <Link to="/charts" className="link">
          Charts
        </Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <TextField className="blah" label="This is the CSS Library Component" />
          <Table data={emailData} autoHeight>
            <Column width={150}>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="first_name" />
            </Column>

            <Column width={150}>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="last_name" />
            </Column>

            <Column width={150} sortable fixed resizable>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>

            <Column width={150} sortable fixed resizable>
              <HeaderCell>IP address</HeaderCell>
              <Cell dataKey="ip_address" />
            </Column>

            <Column width={150} sortable fixed resizable>
              <HeaderCell>Favorite Color</HeaderCell>
              <Cell dataKey="favorite_color" />
            </Column>
          </Table>
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
