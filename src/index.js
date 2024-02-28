import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';

const {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Heading,
  Link,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  VStack,
  Image,
} = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Spacer,
    Heading,
    Link,
    Text,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    FormErrorMessage,
    VStack,
    Image,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <HelmetProvider>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <App />
            </BrowserRouter>
          </PersistGate>
        </HelmetProvider>
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>
);
