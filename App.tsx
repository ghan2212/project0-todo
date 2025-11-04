import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FlexBox from "./componnents/flex.box";
import Ionicons from "@expo/vector-icons/Ionicons";
interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống");
      return;
    }

    setListTodo([...listTodo, { id: randomInteger(2, 2000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id);
    setListTodo(newTodo)
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Hang</Text>
        {/* Form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.TodoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add todo" onPress={handleAddTodo} />
        </View>
        {/* List Todo */}
        <View style={[styles.todo]}>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id + " "}
            renderItem={({ item }) => {
              return (
                <Pressable
                  
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <Ionicons name="close" 
                    size={24} 
                    color="black" 
                    onPress={() => deleteTodo(item.id)}
                    
                    />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
//Css in Js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    borderWidth: 1,
    borderColor: "red",
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
    flex: 1,
  },

  form: {
    flex: 2,
    marginBottom:20
  },
  todo: {
    flex: 8,
  },
  //Form
  TodoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "solid",
    margin: 15,
    padding: 5,
    marginTop: 15,
  },
  todoItem: {
    fontSize: 30,
    
  },
  groupTodo: {
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent:"space-between",//dùng để căn trái cắn phải khi có 2 item 
    marginBottom: 15,
    alignItems:"center",
    padding:15
  },
});
