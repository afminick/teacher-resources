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
                <li className="navLink"><Link to='/games'>Tic-Tac-Toe!</Link></li>
                <li className="navLink"><Link to='/games/wordguess'>Word Guess</Link></li>
            </div>
            
        )
    }
    
    const lessonPlansNav = () => {
        return (
            <div className="subMenu">
                <li className="navLink"><Link to='/'>Master Course</Link></li>
                <li className="navLink"><Link to='/'>Grammar</Link></li>
                <li className="navLink"><Link to='/'>Leveled Reading</Link></li>
                <li className="navLink"><Link to='/'>Free Talk</Link></li>
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