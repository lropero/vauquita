import React from 'react'
import styled from 'styled-components'

import Cow from 'vauquita/assets/cow.svg'
import { useTheme } from 'vauquita/hooks'

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.start.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Text = styled.p`
  align-items: center;
  display: flex;
`

const Start = () => {
  const theme = useTheme()

  return (
    <Container theme={theme}>
      <Cow style={{ height: 180 }} />
      <Text>
        Edit&nbsp;<code>src/components/start.jsx</code>&nbsp;and save to reload
      </Text>
      <a href='https://github.com/lropero/vauquita#readme' rel='noopener noreferrer' target='_blank'>
        README.md
      </a>
    </Container>
  )
}

export default Start
