import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { createGoal } from "../services/api";

export default function AddGoal() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    await createGoal({ title, description });
    router.back();
  };

  return (
    <View>
      <TextInput placeholder="Title" onChangeText={setTitle} />
      <TextInput placeholder="Description" onChangeText={setDescription} />
      <Button title="Add Goal" onPress={handleAdd} />
    </View>
  );
}