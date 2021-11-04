import React from 'react';
import { Route } from "react-router-dom";
import styles from './App.module.css';
import { Landing, Home, CreateDog, DogDetail } from "./Pages/index"

export default function App() {
  return (
    <div className={styles.app}>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/detail/:id' component={DogDetail} />
      <Route exact path='/createDog' component={CreateDog} />
    </div>
  );
}