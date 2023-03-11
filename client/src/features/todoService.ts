import axios from 'axios';

const API_URL = 'http://loaclhost:8000';

const createTodoice = async (todosData: any) => {
  const response = await axios.post(`${API_URL}/todos`, todosData);
  return response.data;
};

const todoService = {
  createTodoice,
};
export default todoService;
