import { View, FlatList, Button } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";

import GoalItem from "../components/GoalItem";
import { getGoals, deleteGoal, markDone } from "../services/api";

export default function Home() {

  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const res = await getGoals();
    setGoals(res.data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleDelete = async (id) => {
    await deleteGoal(id);
    fetchGoals();
  };

  const handleDone = async (id) => {
    await markDone(id);
    fetchGoals();
  };

  return (
    <View>
      <Button title="Add Goal" onPress={() => router.push("/addGoal")} />

      <FlatList
        data={goals}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <GoalItem
            goal={item}
            onDelete={handleDelete}
            onDone={handleDone}
            onEdit={() => router.push({ pathname: "/editGoal", params: item })}
          />
        )}
      />
    </View>
  );
}