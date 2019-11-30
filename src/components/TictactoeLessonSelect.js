import React, {useState} from 'react'
import '../pages/games/wordguess/wordguessStyles/wordguessLessonSelect.css'

import TictactoeAPIFetch from './APIFetch'

function TictactoeLessonSelect(props) {

    const [course, setCourse] = useState("MC")
    const [level, setLevel] = useState("")
    const [unit, setUnit] = useState("")
    const [lessonCycle, setLessonCycle] = useState("")

   

    return (

        

        <div className="lessonSelect">
            <select className="lessonSelectDropdown" onChange={(e) => setCourse(e.target.value)}>
                    <option value="MC">Master Course</option>
                    <option value="GM">Grammer</option>
                </select> 
                <select className="lessonSelectDropdown" onChange={(e) => setLevel(e.target.value)}>
                    <option></option>
                    <option value="3">Level 3</option>
                </select>
                <select className="lessonSelectDropdown" onChange={(e) => setUnit(e.target.value)}>
                    <option></option>
                    <option value="1">Unit 1</option>
                    <option value="2">Unit 2</option>
                    <option value="3">Unit 3</option>
                    <option value="4">Unit 4</option>
                    <option value="5">Unit 5</option>
                    <option value="6">Unit 6</option>
                    <option value="7">Unit 7</option>
                    <option value="8">Unit 8</option>
                    <option value="9">Unit 9</option>
                    <option value="10">Unit 10</option>
                    <option value="11">Unit 11</option>
                    <option value="12">Unit 12</option>
                </select>
                <select className="lessonSelectDropdown" onChange={(e) => setLessonCycle(e.target.value)}>
                    <option></option>
                    <option value="1">Lesson Cycle 1</option>
                    <option value="2">Lesson Cycle 2</option>
                </select>

                
        </div>
    )
}

export default TictactoeLessonSelect