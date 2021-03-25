import React, { useContext } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {Icon} from 'react-native-elements'
import { CategoryContext } from './CategoryContext'

const CategoryIcon = (props) => {   
    return(
        <View>
            <Icon reverse name="rowing" key={props.name} onPress={props.onPress}/>
            <Text>{props.name}</Text>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }
})

export default CategoryIcon