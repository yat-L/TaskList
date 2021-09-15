import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listofGoal, setListOfGoal] = useState([]);
  const [keyCount, setKeyCount] = useState("0");

  const addGoal = (goalName) => {
    setListOfGoal((oldArray) => [
      ...oldArray,
      { key: keyCount, string: goalName },
    ]);
    setKeyCount((state) => (parseInt(state) + 1).toString());
  };
  const clear = () => {
    setListOfGoal([]);
  };

  const deleteGoal = (key) => {
    setListOfGoal(
      listofGoal.filter((item) => {
        return item.key !== key;
      })
    );
    //useEffect(() => {
    //listofGoal = listofGoal.filter((item) => { return item.key !== key; })
    //});
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal} />

      <View style={styles.list}>
        <FlatList
          data={listofGoal}
          renderItem={(itemData) => (
            <GoalItem
              onDelete={deleteGoal.bind(this, itemData.item.key)}
              title={itemData.item.string}
            />
          )}
        />
      </View>

      <View>
        <Button title="Clear All" color="red" onPress={clear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  insertBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBox: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  list: {
    flex: 3,
  },
});
