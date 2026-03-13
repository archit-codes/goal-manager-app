import { View, Text, Button, StyleSheet } from "react-native";

export default function GoalItem({ goal, onDelete, onDone, onEdit }) {
  return (
    <View style={styles.container}>
      <Text style={goal.completed ? styles.done : styles.text}>
        {goal.title}
      </Text>

      <View style={styles.buttons}>
        <Button title="Done" onPress={() => onDone(goal._id)} />
        <Button title="Edit" onPress={() => onEdit(goal)} />
        <Button title="Delete" onPress={() => onDelete(goal._id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 8,
    backgroundColor: "#eee"
  },
  text: {
    fontSize: 18
  },
  done: {
    fontSize: 18,
    textDecorationLine: "line-through"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});