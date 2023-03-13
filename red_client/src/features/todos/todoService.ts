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
const updateTodo = async (textData: any) => {
  console.log(textData, "IIII");
  const { _id, title, description } = textData;
  console.log(`${API_URL}/todos${_id}`);
  const response = await axios.put(`${API_URL}/${_id}`, {
    title,
    description,
  });
  // API_URL + currentId
  console.log(response, "%%%");
  return response.data;
};
const getTodoice = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

const todoService = {
  createTodoice,
  getTodoice,
  updateTodo,
};
export default todoService;
