import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function responsiveMenu(props) {

    return (
        <div className="openNavbar">
            <ul>
                <li className="navLink">Home</li>
                <li className="navLink" id="lessonPlanMenu">
                    <button className="navLink" 
                        
                        name="lessonPlanMenu" 
                        onClick={props.menuClick}>
                            {props.data.lessonPlanMenu ? "^ Lesson Plans ^" : "v Lesson Plans v"}
                    </button>
                </li>
                {props.data.lessonPlanMenu ? lessonPlansNav() : null}
                <li className="navLink" id="gameMenu">
                    <button className="navLink" 
                        
                        name="gameMenu" 
                        onClick={props.menuClick}>
                            {props.data.gameMenu ? "^ Games ^" : "v Games v"}
                    </button>
                </li>
                {props.data.gameMenu ? gamesNav() : null}
                <li id="contactUs" className="navLink">
                    <button className="navLink"
                        name="contactMenu"
                        onClick={props.menuClick}>
                            {props.data.contactMenu ? "^ Contact Us ^" : "v Contact Us v"}
                    </button>
                </li>
                {props.data.contactMenu ? contactUsNav() : null}
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
                <button 
                    name="menuOpen" 
                    style={props.data.menuOpen ? 
                    buttonStyle : 
                    null} 
                    onClick={props.menuClick} 
                    className="menuOpenButton">
                        <FontAwesomeIcon name="menuOpen" icon="bars" size="2x" style={{color: 'red'}}/>
                    </button>
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

const lessonPlansNav = () => {
    return (
        <div className="subMenu">
            <li className="navLink"><a href="#">Master Course</a></li>
            <li className="navLink"><a href="#">Grammar</a></li>
            <li className="navLink"><a href="#">Leveled Reading</a></li>
            <li className="navLink"><a href="#">Free Talk</a></li>
        </div>
    )
}

const contactUsNav = () => {
    return(
        <div className="subMenu" id="contactUsNav">
            <a className="contactLink" href="#"><FontAwesomeIcon icon="envelope" size="2x" /></a>
            <a className="contactLink" href="#"><FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" /></a>
            <a className="contactLink" href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>
            <a className="contactLink" href="#"><FontAwesomeIcon icon={['fab', 'twitter-square']} size='2x'/></a>
        </div>
    )
}

export default Header;