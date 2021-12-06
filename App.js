import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {useFonts} from 'expo-font'
import TaskList from './components/TaskList';

export default function App() {
  

  const [textValue, setTextValue] = useState("")
  const [tasks, setTasks] = useState([
    {id:1, description: "First task"},
    {id:2,  description: "Second task"}
  ]) 


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Todos</Text>
      
      <View style={styles.formContainer}>
        <TextInput style={styles.input} value={textValue} onChangeText={e=> setTextValue(e)}/>
        <TouchableOpacity style={styles.button}><Text>Add</Text></TouchableOpacity>
      </View>

      <ScrollView>
        <TaskList tasks={tasks}/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 22,
    fontWeight:'bold',
    marginTop: 50,
    textAlign:'center',
    padding: 10,
    backgroundColor: '#abc'
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
    borderColor:'#abc',
    fontSize:18,
  },
  button:{
    flex:1,
    backgroundColor:'#abc',
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  }
});
