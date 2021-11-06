import React from 'react';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Music from './pages/Music';
import Journalism from './pages/Journalism';
import 'semantic-ui-css/semantic.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{margin: "auto"}}>
        <Header />
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/journalism" component={Journalism} />
      <Route path="/music" component={Music} />
    </BrowserRouter>
  );
}
