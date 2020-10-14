import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'

import Router from 'vauquita/router'
import { initI18n } from 'vauquita/helpers'
import { useDimensions } from 'vauquita/hooks'

const App = () => {
  useDimensions()

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      await initI18n()
      setReady(true)
    }
    init()
  }, [])

  return ready ? <Router /> : null
}

export default App
