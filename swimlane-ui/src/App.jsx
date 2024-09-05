import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import store from './store/store';
import SwimlanePage from './pages/SwimlanePage';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <SwimlanePage />
        </DndProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
