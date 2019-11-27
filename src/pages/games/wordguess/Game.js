import React from 'react';
import WordguessSetup from './WordguessSetup';
import WordguessArea from './WordguessArea';


class Wordguess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'',
            word:[],
            guess: [],
            unusedLetters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            usedLetters:[],
            wrongLetters: [],
            usedWords:[],
            scoreBoxes:['','','','','','','','']
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitWord = this.submitWord.bind(this);
        this.guessLetter = this.guessLetter.bind(this);
        this.winner = this.winner.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }

    handleKeyPress(event) {
        
        if (event.target.type !== 'text') {

            
            let key = event.key.toUpperCase();
            const letterList = [...this.state.usedLetters];
            letterList.push(key);

            const newGuess = [...this.state.guess];
            const wrong = [...this.state.wrongLetters];
            this.state.word.map((item, index) => 
            item === key ? 
            newGuess[index] = item : 
            !wrong.includes(key) && 
            !this.state.word.includes(key) &&
            this.state.unusedLetters.includes(key)? 
            wrong.push(key) : 
            null);
        
            this.setState({
            usedLetters:letterList,
            guess:newGuess,
            wrongLetters: wrong
        })
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    submitWord(event) {
        event.preventDefault();
        const newWord = this.state.value.toUpperCase().split('');
        const usedWord = [...this.state.usedWords]
        usedWord.push(this.state.value.toUpperCase());
        const guessArray =[]; 
        newWord.map((i) => i === '-' ? guessArray.push(i) : i === ' ' ? guessArray.push(i) : guessArray.push('_'))
        this.setState({
            value:'',
            guess:guessArray,
            word:newWord,
            wrongLetters:[],
            usedLetters: [],
            usedWords: usedWord
        })
    }

    guessLetter(event) {
        event.preventDefault();
        
        //Update used letter list 
        const letterList = [...this.state.usedLetters];
        letterList.push(event.target.name);

        //Check guess against previous used letters 
        const newGuess = [...this.state.guess];
        const wrong = [...this.state.wrongLetters];
        this.state.word.map((item, index) => 
            item === event.target.name ? 
            newGuess[index] = item : 
            !wrong.includes(event.target.name) && 
            !this.state.word.includes(event.target.name) ? 
            wrong.push(event.target.name) : 
            null);
        
        this.setState({
            usedLetters:letterList,
            guess:newGuess,
            wrongLetters: wrong
        })
        
        


    }

    winner() {
        
        if (!this.state.guess.includes('_') && this.state.word[0]) {          
            return <h3 className='winner'>You Win!!</h3>
        } else if (this.state.wrongLetters[7]) {
            return <h3 className='winner'>Game Over!!</h3>
        } 
    
        return  null        
    }

    render() {
        return (
            <main className='wordguess'>
                
                <WordguessSetup 
                    data={this.state}
                    handleChange={this.handleChange}
                    submitWord={this.submitWord}/>
                <WordguessArea
                    data={this.state}
                    guessLetter={this.guessLetter}
                    winner={this.winner}
                     />
            </main>
        )
    }
}



export default Wordguess