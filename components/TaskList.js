import React from 'react'
import { View, Text } from 'react-native'
import Task from '../components/Task'

const TaskList = (props) => {
    return (
        <View>
            {props.tasks.map(el => <Task key={el.id} text={el.description}/>)}
        </View>
    )
}

export default TaskList
