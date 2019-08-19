import React from 'react'

function responsiveMenu(props) {

    return (
        <div className="openNavbar">
            <ul>
                <li className="navLink">Home</li>
                <li className="navLink"><a href="https://vigilant-lichterman-f14f98.netlify.com/">Tic-Tac-Toe</a></li>
                <li className="navLink"><a href="https://goofy-montalcini-2ef709.netlify.com/">Hangman</a></li>
                <li className="navLink">Contact Us</li>
            </ul>
            
        </div>
    )
}

function Header(props) {
    return (
        <header>
            <div className="title">
                <h1>Online ESL Teacher Resources</h1>
                <h3>Your source for games, lesson plans, and more!</h3>
            </div>
            <div className="navbar">
                <button style={props.menuStatus ? buttonStyle : null} onClick={props.menuClick} className="menuOpenButton">{props.menuStatus ? "Close" : "Open"}</button>
                {props.menuStatus ? responsiveMenu() : null}
            </div>
            
            
            
        </header>
    )
}

const buttonStyle = {
    boxShadow: 'none',
    border: 'none'
}

export default Header;