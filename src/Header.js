import React from 'react'

function responsiveMenu(props) {

    return (
        <div className="openNavbar">
            <ul>
                <li><a href="https://vigilant-lichterman-f14f98.netlify.com/">Tic-Tac-Toe</a></li>
                <li><a href="https://goofy-montalcini-2ef709.netlify.com/">Hangman</a></li>
                <li>Home</li>
                <li>Home</li>
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
                <button onClick={props.menuClick} className="menuOpenButton">X</button>
                {props.menuStatus ? responsiveMenu() : null}
            </div>
            
            
            
        </header>
    )
}

export default Header;