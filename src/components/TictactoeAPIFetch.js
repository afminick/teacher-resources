import React, {useState, useEffect} from 'react';
import config from './config'

function TictactoeAPIFetch(props) {
    

  const [unitWords, setunitWords] = useState({});

  useEffect(() => {

    fetch(config.valuesUrl)
      .then(res => {
        return res.json()
      })
      .then(unitWords => {
       
        let masterListOfWords = {}
        for (const key of unitWords.valueRanges[0].values) {
          masterListOfWords[key[0]+key[1]+key[2]+key[3]+key[4]] = 
            {"Name": key[5],
            "Words":key[6],
            "Sounds": key[7],
            "Feedback": key[8]
            }
        }

        setunitWords(masterListOfWords);
       
      })
      
    }, [])

    let wordArray = []

    if (props.course && props.level && props.unit && props.lessonCycle) {
      let wordKey = props.course + props.level + props.unit + props.lessonCycle + (props.lessonCycle === "1" ? "6" : "12")
      wordArray = unitWords[wordKey].Words.split(", ")
      wordArray.unshift(" ")
    } 
    

    /*const wordDropdownWords = wordArray[0] ? 
            wordArray.map((w, index)=> <option value={w} key={index}>{w}</option>) : null;

          const wordDropdown = 
            <div className="wordDropdown">
              <p>Choose a word from the unit</p>
              <select className="lessonSelectDropdown" name="value" onChange={props.handleChange}>
                {wordDropdownWords}
              </select>
            </div>*/

    return(
        
            wordArray[0] ? wordArray : null

    )
}


export default TictactoeAPIFetch