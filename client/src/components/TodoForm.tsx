import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

function TodoForm() {
  const [todo, setTodo] = useState('');

  const todoSubmit = () => {
    console.log('jisdsd');
  };
  console.log(todo);
  return (
    <FormControl isRequired width="300px" onSubmit={todoSubmit}>
      <FormLabel>Add Todos</FormLabel>
      <Input
        placeholder="Add Todos"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />

      <Button my="10px">ADD TODO</Button>
    </FormControl>
  );
}

export default TodoForm;
