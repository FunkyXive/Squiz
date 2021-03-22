import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quizCategories: [
        'Sports',
        'Cuisine',
        'Video Games'
      ],
      uncompletedQuizzes: [
        'Food',
        'Animals',
        'Video Games'
      ],
      currentQuiz: '',
      completedQuizzes: []
    }
  }

  playQuiz = (index) => {
    const {
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

  render() {
    /*let header = () => {
      return (<Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />)
    }*/
    return (
      <SafeAreaProvider>
        <CategoryContext.Provider value={
          {
            quizCategories: this.state.quizCategories,
            completedQuizzes: this.state.completedQuizzes,
            uncompletedQuizzes: this.state.uncompletedQuizzes,
            currentQuiz: this.state.currentQuiz,
            playQuiz: this.playQuiz
          }
        }>
          <NavigationContainer>
            <Stack.Navigator /*screenOptions={{
              header: header,
            }}*/>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Category" component={CategoryScreen} />
              <Stack.Screen name="Quiz" component={QuizScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </CategoryContext.Provider>
      </SafeAreaProvider >
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

export default App
