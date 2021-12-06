import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {useFonts} from 'expo-font'
import TaskList from './components/TaskList';

export default function App() {

  const addTodo = () =>{
    if (textValue ==="") return
    const random = Math.ceil(Math.random()*1000);
    console.log(tasks);
    setTasks([...tasks, {id:random, description: textValue, completed: false} ])
    //console.log(random)
  }

  const deleteTodo = (element) => {
    const newTasks = tasks.filter(el => el.id !== element)
    setTasks(newTasks)
    console.log(element)
  }
  

  const [textValue, setTextValue] = useState("")
  const [tasks, setTasks] = useState([
    {id:1, description: "First task", completed: false},
    {id:2,  description: "Second task", completed: false}
  ]) 


  return (
    <View style={styles.container}>
     <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#779bdc" translucent = {true}/>

      <Text style={styles.title}>Todos</Text>
      
      <View style={styles.formContainer}>
        <TextInput style={styles.input} value={textValue} onChangeText={e=> setTextValue(e)}/>
        <TouchableOpacity style={styles.button} onPress={addTodo}><Text style={styles.white}>Add</Text></TouchableOpacity>
      </View>

      <ScrollView>
        <TaskList tasks={tasks} deleteTodo={deleteTodo}/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 22,
    fontWeight:'bold',
    marginTop:36,
    textAlign:'center',
    padding: 10,
    backgroundColor: '#6564db',
    color:'#fff'
  },

  container: {
    flex: 1,
    flexDirection:'column'
  },

  formContainer:{
    flexDirection:'row',
    borderColor:'#abc',
    height:40,
    paddingHorizontal:5,
    marginTop:10
  },
  input:{
    flex:2,
    height: '100%',
    borderWidth:1,
    borderColor:'#6564db',
    fontSize:18,
  },
  button:{
    flex:1,
    backgroundColor:'#6564db',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  white:{
    color:'#fff'
  }
});
