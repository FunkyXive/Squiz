import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import { CategoryContext } from './CategoryContext'

const CategoryScreen = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [uncompletedQuizzesInCategory, setUncompletedQuizzes] = useState([])
    const [allQuizzesInCategory , setAllQuizzesInCategory] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState({})
    
    const context = useContext(CategoryContext)

    console.log(context)

    useEffect(() => {
        // IP needs to be explicitly set to server's IP instead of just localhost:PORT because of emulation pointing to device ip when using localhost
        fetch(`http://10.142.98.224:4001/quiz/getbycategory/${context.currentQuizCategory}`)
        .then((response) => response.json())
        .then((json) => setAllQuizzesInCategory(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    })
    
    return(
        <View style={styles.container}>
            {isLoading ? <Text>Loading..</Text> : 
            (
                <Text>Yeet</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4f5450',
        alignContent: 'center',
        alignItems: 'center'
    },
});

export default CategoryScreen;