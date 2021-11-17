import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { NoMatch } from "./NoMatch";
import { About } from "./About";
import Layout from "./Components/Layout";
import NavigationBar from "./Components/NavigationBar";
import { Jumbotron } from "./Components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
