import React from 'react'
import 'antd/dist/antd.css'

import Router from 'vauquita/router'
import { useDimensions } from 'vauquita/hooks'

const App = () => {
  useDimensions()

  return <Router />
}

export default App
