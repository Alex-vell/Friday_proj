import React from 'react';
import s from './App.module.css';
import {RoutesComponent} from "./routes/RoutesComponent";
import {Header} from "./components/header/Header";


function App() {
  return (
      <div className={s.App}>
        <Header/>
        <RoutesComponent/>
      </div>
  );
}

export default App;