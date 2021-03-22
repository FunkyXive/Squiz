import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

class QuizScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is a quiz</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default QuizScreen;