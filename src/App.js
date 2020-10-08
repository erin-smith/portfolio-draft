import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      {console.log (`process.env.PUBLIC_URL: ${process.env.PUBLIC_URL + '/react-portfolio'}`)}
      <div>
        <Header/>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
