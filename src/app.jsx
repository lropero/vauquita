import React from 'react'
import 'antd/dist/antd.css'

import Router from 'vauquita/router'
import { useDimensions, useI18n } from 'vauquita/hooks'

const App = () => {
  useDimensions()
  useI18n()

  return <Router />
}

export default App
