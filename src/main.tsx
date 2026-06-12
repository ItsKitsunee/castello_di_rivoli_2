import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import './index.css'
import App from './App.tsx'
import {OverlookProvider} from "./global_state/OverlookContext.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <OverlookProvider>
          <ChakraProvider value={defaultSystem}>
              <App />
          </ChakraProvider>
      </OverlookProvider>
        </BrowserRouter>
  </StrictMode>,
)
