import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import '../styles/responsiveNavMenu.css'

const ResponsiveNavMenu = () => {

        const [gameMenu, setGameMenu] = useState(false);
        const [lessonPlanMenu, setLessonPlanMenu] = useState(false);
        const [contactMenu, setContactMenu] = useState(false);

    return (
        <div className="openNavBar">
            <ul>
                <li className="navLink"><Link to='/'>Home</Link></li>
                <li className="navLink" id='gameMenu'>
                    <button
                        className="navLink"
                        onClick={() => setGameMenu(!gameMenu)}
                        >{gameMenu ? "v Games v" : "^ Games ^"}
                    </button>
                    {gameMenu ? gamesNav() : null}
                </li>
                <li className="navLink" id="lessonPlanMenu">
                    <button 
                        className='navLink'
                        onClick={()=> setLessonPlanMenu(!lessonPlanMenu)}
                        >{lessonPlanMenu ? "v Lesson Plans v" : "^ Lesson Plans ^"}
                    </button>
                    {lessonPlanMenu ? lessonPlansNav() : null}
                </li>
                <li className="navLink" id="contactUs">
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
                <Link className="navLink" to='/games'>Tic-Tac-Toe!</Link>
                <Link className="navLink" to='/games/wordguess'>Word Guess</Link>
            </div>
            
        )
    }
    
    const lessonPlansNav = () => {
        return (
            <div className="subMenu">
                <Link className="navLink" to='/'>Master Course</Link>
                <Link className="navLink" to='/'>Grammar</Link>
                <Link className="navLink" to='/'>Leveled Reading</Link>
                <Link className="navLink" to='/'>Free Talk</Link>
            </div>
        )
    }
    
    const contactUsNav = () => {
        return(
            <div className="subMenu" id="contactUsNav">
                <Link className="contactLink" to="/"><FontAwesomeIcon icon="envelope" size="2x" /></Link>
                <Link className="contactLink" to="/"><FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" /></Link>
                <Link className="contactLink" to="/"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></Link>
                <Link className="contactLink" to="/"><FontAwesomeIcon icon={['fab', 'twitter-square']} size='2x'/></Link>
            </div>
        )
    }

export default ResponsiveNavMenu