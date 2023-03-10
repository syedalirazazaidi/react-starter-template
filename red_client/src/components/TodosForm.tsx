import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../app/store";
import { createTodo } from "../features/todos/todoSlice";

function TodosForm() {
  const [data, setData] = useState({ title: "", description: "" });
  const dispatch = useDispatch<AppDispatch>();
  const { title, description } = data;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoown = {
      title,
      description,
    };
    dispatch(createTodo(todoown));
    setData({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired width="300px">
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
    </form>
  );
}

export default TodosForm;
