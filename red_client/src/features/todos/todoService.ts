import axios from "axios";

const API_URL = "http://localhost:8000";

const createTodoice = async (todosData: {
  title: string;
  description: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, todosData);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const getTodoice = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

const todoService = {
  createTodoice,
  getTodoice,
};
export default todoService;
