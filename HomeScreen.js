import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, View } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import CategoryIcon from './CategoryIcon'
import { CategoryContext } from './CategoryContext'


const HomeScreen = (props) => {
    // States
    const [isLoading, setLoading] = useState(true)
    const [quizCategories, setQuizCategories] = useState([])
    const [currentQuizCategory, setCurrentQuizCategory] = useState('')
    
    useEffect(() => {
        // IP needs to be explicitly set to server's IP instead of just localhost:PORT because of emulation pointing to device ip when using localhost
        // Although this still produces error 'network request failed', Suggested fix is hosting on httpss
        fetch('http://10.142.98.224:4001/quiz/getallcategories')
        .then((response) => response.json())
        .then((json) => setQuizCategories(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    })

    return (
        <View style={styles.container}>
            {isLoading ? <Text>Loading...</Text> :       
                //(<Text></Text>)
                quizCategories.map((val, index) => {
                    return (<CategoryIcon name={val} key={val} onPress={() =>{
                        setCurrentQuizCategory(quizCategories[index])
                        props.navigation.navigate('Category', {quizCategory: quizCategories[index]})
                    }}/>)
                })

            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5450',
    },
});

export default HomeScreen;