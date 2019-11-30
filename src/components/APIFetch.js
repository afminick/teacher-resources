import React, {useState, useEffect} from 'react';
import config from './config'

function APIFetch(props) {
    

  const [data, setData] = useState({});

  useEffect(() => {

    fetch(config.valuesUrl)
      .then(res => {
        return res.json()
      })
      .then(data => {
       
        let masterListOfWords = {}
        for (const key of data.valueRanges[0].values) {
          masterListOfWords[key[0]+key[1]+key[2]+key[3]+key[4]] = 
            {"Name": key[5],
            "Words":key[6],
            "Sounds": key[7],
            "Feedback": key[8]
            }
        }

        setData(masterListOfWords);
       
      })
      
    }, [])

    let wordArray = []

    if (props.course && props.level && props.unit && props.lessonCycle) {
      let wordKey = props.course + props.level + props.unit + props.lessonCycle + (props.lessonCycle === "1" ? "6" : "12")
      wordArray = data[wordKey].Words.split(", ")
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

    return(
        
            wordArray[0] ? wordDropdown : null
        
    )
}


export default APIFetch