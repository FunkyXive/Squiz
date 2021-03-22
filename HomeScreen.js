import React from 'react';
import { StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import { CategoryContext } from './CategoryContext'

class HomeScreen extends React.Component {
    static contextType = CategoryContext
    render() {
        /* console.log(this.context)
        let playQuiz = this.context.playQuiz
        let quizButtons = this.context.uncompletedQuizzes.map(function (val, index) {
            return (
                <Icon reverse title={val} key={val} onPress={playQuiz(index)}></Icon>
                //<Text key={val}>{this.context}</Text>
            ) 
        })*/
        return (
            <View style={styles.container}>
                <Text h3 style={{ textAlign: 'center', color: 'white' }}>Your Available Quizzes</Text>
                {
                    this.context.uncompletedQuizzes.map(function (val, index) {
                        //<Button title={val} key={val} onPress={() => this.context.playQuiz(index)}/>
                        <Text key={val}>{this.context.uncompletedQuizzes}</Text>
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5450',
    },
});

export default HomeScreen;