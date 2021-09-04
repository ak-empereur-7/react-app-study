import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import {
  ChakraProvider,
  Button,
} from "@chakra-ui/react"

import theme from "./theme/theme"
import Router from "./router/Router"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
)
