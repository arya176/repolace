import React from "react";
import Nav from "./Nav";

function Header (){
    return  <header>
        <Nav></Nav>
        <img className="image1" src="pics/10.svg" alt="header"></img>
        <h1>I'm Arya</h1>
        <h2 className="navh2"> A Future Web Developer</h2>
    </header>
}

export default Header;
