import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="p-5">
        <h2>About React</h2>
        <p style={{ textAlign: "justify" }}>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
          Since component logic is written in JavaScript instead of templates,
          you can easily pass rich data through your app and keep state out of
          the DOM.
        </p>
      </div>
    );
  }
}

export default About;
