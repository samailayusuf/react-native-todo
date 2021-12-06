import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.square} onPress={() => props.deleteTodo(props.id)}></TouchableOpacity>
            <Text style={styles.task} key={props.key}>{props.text}</Text> 
            {/* <Text>
              <Icon name="heart" size={20} color="#900" />
            </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer:{
        padding: 15,
        backgroundColor: '#f0effb',
        marginTop: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius:5,
        // justifyContent: 'space-between'
    }
,
    square:{
        height:30,
        width:30,
        backgroundColor: '#6564db',
        borderRadius:5,
        marginRight: 15
    },
    task:{
        fontSize:16
    }
})

export default Task
