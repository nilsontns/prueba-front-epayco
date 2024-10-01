import axios from "axios";
import { Item } from "../types/Item";

const apiUri = "https://jsonplaceholder.typicode.com/posts";

export const fetchItems = async () => {
  const response = await axios.get(`${apiUri}`);
  return response.data;
};

export const addItem = async (newItem: Item) => {
  const response = await axios.post(`${apiUri}`, newItem);
  return response.data;
};
