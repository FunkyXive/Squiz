import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { QuizContext } from './QuizContext'

class QuizScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentQuestion: {},
            allQuestions: [],
            amountCorrectAnswers: 0
        }
    }

    nextQuestion = (index) => {
        const {currentQuestion, allQuestions} = this.state

        const nextQuestion = allQuestions.splice()
    }

    isAnswerCorrect = (index) => {
        const { currentQuestion, amountCorrectAnswers } = this.state
        
        
        const answer = currentQuestion.answers.splice(index, 1)

        if (answer != currentQuestion.answers.correctAnswer) return false
        
        amountCorrectAnswers++

        this.setState({
            amountCorrectAnswers
        })

        return true
    }

    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <Text></Text>
            </SafeAreaView>
        )        
    }
}

QuizScreen.contextType = QuizContext


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default QuizScreen
