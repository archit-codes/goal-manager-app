import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { updateGoal } from "../services/api";

export default function EditGoal() {

  const params = useLocalSearchParams();

  const [title, setTitle] = useState(params.title);
  const [description, setDescription] = useState(params.description);

  const handleUpdate = async () => {
    await updateGoal(params._id, { title, description });
    router.back();
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} />
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Update Goal" onPress={handleUpdate} />
    </View>
  );
}