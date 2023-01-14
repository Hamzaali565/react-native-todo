import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
// import { TextInput } from 'react-native-web';

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  let users = [];
  const Submit = () => {
    if (todo !== "") {
      // users.push([{name: todo}])
      setTodoData([...todoData, { name: todo, id: `${new Date().getTime()}` }]);
      console.log(todoData);
    }
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>

    <SafeAreaView style={styles.container}>
      <Text
        style={{
          flex: 0,
          // justifyContent:"center",
          // alignItems:"center",
          marginLeft: 180,
          color: "red",
        }}
      >
        Todo App
      </Text>

      <TextInput
        placeholder="Enter Yout Todo"
        onChangeText={(newText) => setTodo(newText)}
        style={{ marginLeft: 150, marginTop: 20 }}
      />
      <Button title="Submit" onPress={Submit} />
      <View>
        {todoData.map((eachTodo, i) => (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                // borderStyle: 1,
                marginTop: 5,
                marginLeft: 150,
              }}
            >
              {eachTodo.name}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // justifyContent: "center",
    // color:"red",
    marginTop: 40,
    // marginTop:StatusBar.currentHeight
  },
});
