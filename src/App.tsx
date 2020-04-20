import React from "react";
import { Grid } from "semantic-ui-react";
import Inventory from "./components/Inventory";
// import './App.css';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>To Do List React Redux Assignment</h1>
      </Grid.Row>
      <Grid.Row>
        <Inventory />
      </Grid.Row>
    </Grid>
  );
}

export default App;
