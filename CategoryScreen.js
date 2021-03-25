import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';
import { Button, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import QuizIcon from './QuizIcon'
import { CategoryContext } from './CategoryContext'
import { QuizContext } from './QuizContext'

const CategoryScreen = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [uncompletedQuizzesInCategory, setUncompletedQuizzesInCategory] = useState([])
    const [allQuizzesInCategory , setAllQuizzesInCategory] = useState([])
    const [selectedQuiz, setSelectedQuiz] = useState({})
    
    const currentQuizCategory = props.route.params.quizCategory

    const setUncompletedQuizzesInCategoryLocal = async (uncompletedQuizzesInCategoryData, currentQuizCategoryData) => {
        try {
            await AsyncStorage.setItem(`uncompletedQuizzesInCategory${currentQuizCategoryData}`, JSON.stringify(uncompletedQuizzesInCategoryData))
        }
        catch (err) {console.err(err)}
    }

    // TODO: Change function name to something more descriptive
    const extractUncompletedQuizzesInCategory = async (currentQuizCategoryData) => {
        try{
            await AsyncStorage.getItem(`uncompletedQuizzesInCategory${currentQuizCategoryData}`).then((data) => {
                if(data != null){
                    setUncompletedQuizzesInCategory(data)
                } else {
                    setUncompletedQuizzesInCategory(allQuizzesInCategory)
                }
            }).catch((error) => console.error(error))
        } catch (err){
            console.error(err)
        }
    }

    useEffect(() => {
        // IP needs to be explicitly set to server's IP instead of just localhost:PORT because of emulation pointing to device ip when using localhost
        fetch(`http://10.142.98.224:4001/quiz/getbycategory/${currentQuizCategory}`)
        .then((response) => response.json())
        .then((json) => setAllQuizzesInCategory(json.))
        .catch((error) => console.error(error))
        .finally(() => {
            /*extractUncompletedQuizzesInCategory(currentQuizCategory).then(() => {
                setUncompletedQuizzesInCategoryLocal(uncompletedQuizzesInCategory, currentQuizCategory).then(() => {
                    console.log('yeet')
                    setLoading(false)
                })
                .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))*/
            //console.log(allQuizzesInCategory)
            setLoading(false)
        })
    })
    
    return(
        <QuizContext.Provider value={selectedQuiz}>
            <View style={styles.container}>
            {isLoading ? <Text>Loading..</Text> : 
            (
                <View>
                    <Text>{currentQuizCategory}</Text>
                    {
                        allQuizzesInCategory.map((val, index) => {
                            return (
                                <QuizIcon name={val} key={val} onPress={() => {
                                    setSelectedQuiz(allQuizzesInCategory[index])
                                    props.navigation.navigate('Quiz')
                                }}/>
                            )
                        })
                    }
                </View>    
            )}
            </View>
        </QuizContext.Provider>
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