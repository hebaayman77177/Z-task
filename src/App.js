import './App.css';
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme"
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/main' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </ Router >
      </div>
    </ThemeProvider>
  );
}

export default App;
