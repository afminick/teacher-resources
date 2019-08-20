import React from 'react'

function responsiveMenu(props) {

    return (
        <div className="openNavbar">
            <ul>
                <li className="navLink">Home</li>
                <li className="navLink" id="gameMenu">
                    <button className="navLink" 
                        
                        name="gameMenu" 
                        onClick={props.menuClick}>
                            {props.data.gameMenu ? "^ Games ^" : "v Games v"}
                    </button>
                </li>
                {props.data.gameMenu ? gamesNav() : null}
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
                <button name="menuOpen" style={props.data.menuOpen ? buttonStyle : null} onClick={props.menuClick} className="menuOpenButton">{props.data.menuOpen ? "Close" : "Open"}</button>
                {props.data.menuOpen ? responsiveMenu(props) : null}
            </div>
            
            
            
        </header>
    )
}

const buttonStyle = {
    boxShadow: 'none',
    border: 'none'
}

const gamesNav = () => {
    return (
        <div className='subMenu'>
            <li className="navLink"><a href="https://vigilant-lichterman-f14f98.netlify.com/">Tic-Tac-Toe</a></li>
            <li className="navLink"><a href="https://goofy-montalcini-2ef709.netlify.com/">Hangman</a></li>
        </div>
        
    )
}

export default Header;