import React, {useState} from 'react'
import '../pages/games/wordguess/wordguessStyles/wordguessLessonSelect.css'



function TictactoeLessonSelect(props) {

    const [course, setCourse] = useState("MC")
    const [level, setLevel] = useState("")
    const [unit, setUnit] = useState("")
    const [lessonCycle, setLessonCycle] = useState("")

    let wordArray = []

    if (course && level && unit && lessonCycle) {
      let wordKey = course + level + unit + lessonCycle + (lessonCycle === "1" ? "6" : "12")
      wordArray = props.unitWords[wordKey].Words.split(", ")
      wordArray.unshift(" ")
    } 

    const wordDropdownWords = wordArray[0] ? 
            wordArray.map((w, index)=> <option value={w} key={index}>{w}</option>) : null;

          const wordDropdown = 
            <div className="wordDropdown">
              <p>Choose a word from the unit</p>
              <select className="lessonSelectDropdown" name="value" onChange={props.handleChange}>
                {wordDropdownWords}
              </select>
            </div>   

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

                {wordArray[0] ? wordDropdown : null}

        </div>
    )
}

export default TictactoeLessonSelect