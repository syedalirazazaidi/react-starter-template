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
interface funProps {
  editButtonFunc: (id: any) => void;
}
function AllTodos({ editButtonFunc }: funProps) {
  const [fadat, setFaData] = React.useState([]);
  const dispatch = useDispatch<AppDispatch>();
  const todosState = useSelector((state: RootState) => state.todo);

  const { todos } = todosState;
  React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Box py="10px" my="30px">
      <Text fontWeight="500" fontSize="24px" textAlign="center">
        Your Todos...
      </Text>

      {todos.map(
        (todo: {
          description:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          _id: any;
        }) => (
          <Flex justifyContent={"space-between"} py="10px" gap="20">
            {todo.description}
            <Box>|</Box> {todo.title}
            <Button
              type="submit"
              colorScheme="teal"
              onClick={() => editButtonFunc(todo)}
            >
              Edit Todo
            </Button>
          </Flex>
        )
      )}
    </Box>
  );
}

export default AllTodos;
