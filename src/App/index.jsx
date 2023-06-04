
import React from "react";
import { AppUI } from './AppUI';
import { ChakraProvider } from '@chakra-ui/react'
import { TodoProvider } from "../TodoContext";


// 2. Extend the theme to include custom colors, fonts, etc
function App() {

  return (
    <ChakraProvider resetCSS={false}>
      <TodoProvider>
        <AppUI/>  
      </TodoProvider>
    </ChakraProvider>
  )
}

export default App;
