import React, {useState}   from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


function Header() {
    
        const [value, setValue] = useState('');
        const [menuOpen, setMenuOpen] = useState(false);
        const [gameMenu, setGameMenu] = useState(false);
        const [lessonPlanMenu, setLessonPlanMenu] = useState(false);
        const [contactMenu, setContactMenu] = useState(false);
    

    return (
        <header>
            <div className="title">
                <h1>Online ESL Teacher Resources</h1>
                <h3>Your source for games, lesson plans, and more!</h3>
            </div>
            <div className="navbar">
                <button 
                    name="menuOpen" 
                    style={menuOpen ? 
                    buttonStyle : 
                    null} 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="menuOpenButton">
                        <FontAwesomeIcon name="menuOpen" icon="bars" size="2x" style={{color: 'red'}}/>
                    </button>
                {menuOpen ? ResponsiveNavMenu() : null}
            </div>
            
            
            
        </header>
    )
    

}
    

const ResponsiveNavMenu = () => {
    return (
        <div className="openNavbar">
            <ul>
                <li className="navLink">Home</li>
                <li className="navLink" id="lessonPlanMenu">
                    <button className="navLink" 
                        
                        name="lessonPlanMenu" 
                        onClick={this.setLessonPlanMenu = this.lessonPlanMenu}>
                            {this.lessonPlanMenu ? "^ Lesson Plans ^" : "v Lesson Plans v"}
                    </button>
                </li>
                {this.state.lessonPlanMenu ? lessonPlansNav() : null}
                <li className="navLink" id="gameMenu">
                    <button className="navLink" 
                        
                        name="gameMenu" 
                        onClick={this.state.menuClick}>
                            {this.state.gameMenu ? "^ Games ^" : "v Games v"}
                    </button>
                </li>
                {this.state.gameMenu ? gamesNav() : null}
                <li id="contactUs" className="navLink">
                    <button className="navLink"
                        name="contactMenu"
                        onClick={this.state.menuClick}>
                            {this.state.contactMenu ? "^ Contact Us ^" : "v Contact Us v"}
                    </button>
                </li>
                {this.state.contactMenu ? contactUsNav() : null}
            </ul>
        </div>
    )
    }
const buttonStyle = {
    boxShadow: 'none',
    border: 'none'
}

const gamesNav = () => {
    return (
        <div className='subMenu'>
            <li className="navLink"><Link to='/games'>Tic-Tac-Toe!</Link></li>
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