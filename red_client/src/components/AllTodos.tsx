import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../app/store";
import { getTodos } from "../features/todos/todoSlice";

function AllTodos() {
  const [fadat, setFaData] = React.useState([]);
  const dispatch = useDispatch<AppDispatch>();
  const todosState = useSelector((state: RootState) => state.todo);

  const { todos } = todosState;
  React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Box py="10px">
      <Text fontWeight="500" fontSize="24px" textAlign="center">
        Your Todos...
      </Text>

      {todos.map((todo: any) => (
        <Flex justifyContent={"space-between"} py="10px" gap="20">
          {todo.description}
          <Box>|</Box> {todo.title}
          <Button type="submit" colorScheme="teal">
            Edit Todo
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export default AllTodos;
