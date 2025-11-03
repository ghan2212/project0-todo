import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([])


  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      alert("Empty todo")
      return;
    }

    setListTodo([...listTodo, { id: randomInteger(2, 2000), name: todo }])
    setTodo("")
  }

  const deleteTodo =(id:number)=>{
    const newTodo = listTodo.filter(item=>item.id !==id);
    setListTodo(newTodo)
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>
        Hang
      </Text>
      {/* Form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.TodoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title='Add todo'
          onPress={handleAddTodo}
        />
        <Text> Form </Text>
      </View>
      {/* List Todo */}
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + " "}
          renderItem={({ item }) => {
            return (
              <Pressable
              
              onPress={()=>deleteTodo(item.id)}
              style= {({pressed})=>({opacity: pressed ? 0.5 :1})}
              >
                     <Text style={styles.todoItem}>{item.name}</Text>
              </Pressable>
           
            )
          }

          }
        />
      </View>
    </View>

  );
}
//Css in Js
const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 15,

  },
  //Form
  TodoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "solid",
    margin: 15,
    padding: 5,
    marginTop: 15

  },
  todoItem: {
    fontSize: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "dashed",
  },


});
