import React from 'react';
import { Button, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import { QuizContext } from './QuizContext'

class CategoryScreen extends React.Component {
    render() {
        let quizButtons = this.context.uncompletedQuizzes.map(function (val, index) {
            return (
                <Icon reverse title={val} key={val} onPress={() => this.context.playQuiz(index)}></Icon>
            )
        })
        return (
            <SafeAreaView style={styles.container}>
                <Text h3 style={{ textAlign: 'center', color: 'white' }}>Your Available Quizzes</Text>
                {quizButtons}
            </SafeAreaView>
        );
    }
}
CategoryScreen.contextType = QuizContext

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5450',
    },
});

export default CategoryScreen;