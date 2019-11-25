import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const ResponsiveNavMenu = () => {

        const [gameMenu, setGameMenu] = useState(false);
        const [lessonPlanMenu, setLessonPlanMenu] = useState(false);
        const [contactMenu, setContactMenu] = useState(false);

    return (
        <div className="openNavBar">
            <ul>
                <li className="navLink"><Link to='/'>Home</Link></li>
                <li className="navLink">
                    <button
                        className="navLink"
                        onClick={() => setGameMenu(!gameMenu)}
                        >{gameMenu ? "v Games v" : "^ Games ^"}
                    </button>
                    {gameMenu ? gamesNav() : null}
                </li>
                <li className="navLink">
                    <button 
                        className='navLink'
                        onClick={()=> setLessonPlanMenu(!lessonPlanMenu)}
                        >{lessonPlanMenu ? "v Lesson Plans v" : "^ Lesson Plans ^"}
                    </button>
                    {lessonPlanMenu ? lessonPlansNav() : null}
                </li>
                <li className="navLink">
                    <button
                        className="navLink"
                        onClick={()=> setContactMenu(!contactMenu)}
                        >{contactMenu ? "v Contact Us v" : "^ Contact Us ^"}
                    </button>
                    {contactMenu ? contactUsNav() : null}
                </li>
            </ul>
        </div>
    )
    }

    const gamesNav = () => {
        return (
            <div className='subMenu'>
                <li className="navLink"><Link to='/games'>Tic-Tac-Toe!</Link></li>
                <li className="navLink"><Link to='/games/wordguess'>Word Guess</Link></li>
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

export default ResponsiveNavMenu