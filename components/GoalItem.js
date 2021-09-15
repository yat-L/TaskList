import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress= {props.onDelete}>
      <View style={styles.items}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  items: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
});

export default GoalItem;
