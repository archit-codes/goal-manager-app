import axios from "axios";

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
});

export const getGoals = () => API.get("/goals");
export const createGoal = (goal) => API.post("/goals", goal);
export const updateGoal = (id, goal) => API.put(`/goals/${id}`, goal);
export const deleteGoal = (id) => API.delete(`/goals/${id}`);
export const markDone = (id) => API.patch(`/goals/${id}/done`);