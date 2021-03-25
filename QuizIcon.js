import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
 
const QuizIcon = (props) => {
    return(
        <View>
            <Icon reverse title={props.name} key={props.name} onPress={props.onPress}></Icon>
            <Text>{props.name}</Text>
        </View>
    )
}

export default QuizIcon