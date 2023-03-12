import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../app/store";
import { createTodo, updateTodo } from "../features/todos/todoSlice";
interface funProps {
  editButtonFunc: (id: any) => void;
  updateNew: any;
  dataNew: any;
  setDataNew: any;
  setFakeNew: (numb: number) => void;
  fakNew: number;
}
function TodosForm({
  setDataNew,
  dataNew,
  editButtonFunc,
  updateNew,
  setFakeNew,
  fakNew,
}: funProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { title, description } = dataNew;
  console.log(updateNew?._id, "LLL");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoown = {
      title,
      description,
    };
    if (fakNew === 1) {
      dispatch(createTodo(todoown));
      setDataNew({
        title: "",
        description: "",
      });
    }
    if (fakNew === 2) {
      dispatch(updateTodo(updateNew));
      // setDataNew({
      //   title: "",
      //   description: "",
      // });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataNew((dataPass: any) => ({
      ...dataPass,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired width="300px">
        <FormLabel>Add Todos</FormLabel>
        <Input
          placeholder="Add Todos"
          value={dataNew.title}
          name="title"
          onChange={handleChange}
        />
        <Box py="10px" />
        <Input
          placeholder="Description your Todos"
          value={dataNew.description}
          name="description"
          onChange={handleChange}
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
