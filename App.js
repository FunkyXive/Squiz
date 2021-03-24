import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from 'react-native-elements'
import { QuizContext } from './QuizContext'
import { CategoryContext } from './CategoryContext'
import HomeScreen from './HomeScreen';
import QuizScreen from './QuizScreen';
import CategoryScreen from './CategoryScreen'

const Stack = createStackNavigator()

/* class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quizCategories : [],
      uncompletedQuizzes: [
        'Food',
        'Animals',
        'Video Games'
      ],
      currentQuiz: '',
      completedQuizzes: [],
      currentCategory: '',

    }
  }

  playQuiz = (index) => {
    let {
      uncompletedQuizzes,
      currentQuiz
    } = this.state

    // Set currentQuiz to selected quiz
    currentQuiz = uncompletedQuizzes.splice(index, 1)

    // Update state
    this.setState({
      currentQuiz
    })
  }

  pickCategory = (index) => {
    let {currentCategory} = this.state
    const {quizCategories} = this.state

    currentCategory = quizCategories[index]

    this.setState({
      currentCategory,
      quizCategories
    })
  }

  render() {
    /*let header = () => {
      return (<Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />)
    }
    return (
        <CategoryContext.Provider value={
          {
            quizCategories: this.state.quizCategories,
            completedQuizzes: this.state.completedQuizzes,
            uncompletedQuizzes: this.state.uncompletedQuizzes,
            currentQuiz: this.state.currentQuiz,
            playQuiz: this.playQuiz,
            pickCategory: this.pickCategory,
            getCategories: this.getCategories
          }
        }>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              header: header,
            }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Category" component={CategoryScreen} />
              <Stack.Screen name="Quiz" component={QuizScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </CategoryContext.Provider>
    );
  }
} */

const App = (props) => {
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState({})
  const [completedQuizzes, setCompletedQuizzes] = useState([])
  const [uncompletedQuizzes, setUncompletedQuizzes] = useState([])
  const [currentQuiz, setCurrentQuiz] = useState({})
  const [state, setState] = useState([{categories}, {currentCategory}, {completedQuizzes}, {uncompletedQuizzes}, {currentQuiz}])

  useEffect(() => {
    fetch('http://localhost:4001/quiz/getallcategories')
    .then((response) => response.json())
    .then((json) => setCategories(json))
    .catch((error) => console.error(error))
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Category" component={CategoryScreen}/>
        <Stack.Screen name="Quiz" component={QuizScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
