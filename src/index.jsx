import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from 'vauquita/app'
import store from 'vauquita/store'
import theme from 'vauquita/theme'

createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
)
