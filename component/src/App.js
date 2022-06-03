import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import ProfilePhoto from "./component/profile/ProfilePhoto";
import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";


function App() {
  return (
    <section className="sec">
    <div className="App">
    <div className="container">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
    </section>
  );
}

export default App;



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);