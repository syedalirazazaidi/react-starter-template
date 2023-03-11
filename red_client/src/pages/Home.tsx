import { Box, Center, Container, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import AllTodos from "../components/AllTodos";
import Header from "../components/Header";

import TodosForm from "../components/TodosForm";

function Home() {
  const [update, SetUpdate] = useState({});
  const [data, setData] = useState({ title: "", description: "" });
  const editButton: any = (todo: any) => {
    SetUpdate(todo);
    setData({
      title: todo.title,
      description: todo.description,
    });
  };

  return (
    <Box>
      <Center bg="teal.500" py="20px" color="white">
        <Header />
      </Center>
      <VStack py="40px">
        <TodosForm
          editButtonFunc={editButton}
          updateNew={update}
          setDataNew={setData}
          dataNew={data}
        />
        <AllTodos editButtonFunc={editButton} />
      </VStack>
    </Box>
  );
}

export default Home;
