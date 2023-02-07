import React from 'react'
import { Link, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Stopwatch from './Stopwatch'


export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Stopwatch/>
    </div>
  )
}
