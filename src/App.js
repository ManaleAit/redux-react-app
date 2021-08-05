import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admins from './components/admins/Admins';
import AddAdmin from './components/admins/AddAdmin';
import EditAdmin from './components/admins/EditAdmin';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider  store={store}>
        <Router>
          <div className="App">
            <Header branding="Admin Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Admins} />
                <Route exact path="/Admin/add" component={AddAdmin} />
                <Route exact path="/Admin/edit/:id" component={EditAdmin} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
