import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Space, Typography } from 'antd'

import Cow from 'vauquita/assets/cow.svg'

const Center = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Login = () => {
  const theme = useContext(ThemeContext)

  return (
    <Center backgroundColor={theme.start.backgroundColor}>
      <Space align='center' direction='vertical'>
        <Cow style={{ width: 220 }} />
        <Typography.Text>
          Edit <code>src/components/login.jsx</code> and save to reload.
        </Typography.Text>
      </Space>
    </Center>
  )
}

export default Login
