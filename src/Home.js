import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="p-5">
        <h2>Hello React</h2>
        <p style={{ textAlign: "justify" }}>
          React has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started. Sometimes we break HTML semantics when we add
          elements to our JSX to make our React code work, especially when
          working with lists (and) and the HTML. In these cases we should rather
          use React Fragments to group together multiple elements.
        </p>
      </div>
    );
  }
}

export default Home;
