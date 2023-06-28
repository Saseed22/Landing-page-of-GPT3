import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <header className="gradient__bg">
      <Navbar />
      <Header />
    </header>
    <main>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
