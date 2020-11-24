
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import AgenteList from './components/AgentesList'
import CrearAgentes from './components/CrearAgentes'
import CrearVias from './components/CrearVias'
import Viaslist from './components/ViasList'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
    <Router>
      
      <Navigation />
      <div className="contaner p-4">
  
      <Route path="/listA" exact component={AgenteList}/>
      <Route path="/edit/:id"  component={CrearAgentes}/>
      <Route path="/create/" component={CrearAgentes}/>
      <Route path="/createV" component={CrearVias}/>
      <Route path="/listV" component={Viaslist}/>
      </div>
      
    </Router>
    

  );
  
}

export default App;
