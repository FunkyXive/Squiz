import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

class Category extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Icon reverse title={this.props.name} key={this.props.name} onPress={this.props.onPress}></Icon>
                <Text style={styles.text}>{this.props.name}</Text>    
            </View>
        )
    }
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

export default Category