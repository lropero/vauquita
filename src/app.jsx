import React, { useEffect, useState } from 'react'

import Router from 'vauquita/router'
import { initI18n } from 'vauquita/helpers'
import { useDimensions } from 'vauquita/hooks'

import 'sanitize.css'

const App = () => {
  useDimensions()

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      try {
        await initI18n()
      } catch (error) {
        console.error(error.toString())
      } finally {
        setReady(true)
      }
    }
    init()
  }, [])

  return ready ? <Router /> : null
}

export default App
