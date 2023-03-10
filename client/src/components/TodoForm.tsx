import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../app/store';
import { createTodoMy } from '../features/todoSlice';

function TodoForm() {
  const [data, setData] = useState({ title: '', description: '' });
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const todoown = {
      title: data.title,
      description: data.description,
    };
    // dispatch(cre)
    dispatch(createTodoMy(todoown));
    // dispatch(creat({ text }));

    // axios
    //   .post('http://localhost:8000/api/todo', data)
    //   .then((res) => {
    //     setData({ title: '', description: '' });
    //     console.log(res.data.message);
    //   })
    //   .catch((err) => {
    //     console.log("Error couldn't create TODO");
    //     console.log(err.message);
    //   });
  };

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <FormControl isRequired width="300px" onSubmit={handleSubmit}>
      <FormLabel>Add Todos</FormLabel>
      <Input
        placeholder="Add Todos"
        value={data.title}
        name="title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setData((dataPass) => ({
            ...dataPass,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Box py="10px" />
      <Input
        placeholder="Description your Todos"
        value={data.description}
        name="description"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setData((dataPass) => ({
            ...dataPass,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <Box py="10px" />
      <Button type="submit" colorScheme="green" w="full">
        Submit Todo
      </Button>
    </FormControl>
  );
}

export default TodoForm;
