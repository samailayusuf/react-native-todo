import React from 'react'
import { View, Text } from 'react-native'

const Task = ({key, text}) => {
    return (
        <View>
            <Text key={key}>{text}</Text>
        </View>
    )
}

export default Task
