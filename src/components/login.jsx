import React from 'react'
import styled from 'styled-components'
import { Space, Typography } from 'antd'

import Cow from 'vauquita/assets/cow.svg'
import { useTheme } from 'vauquita/hooks'

const Center = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.start.backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Login = () => {
  const theme = useTheme()

  return (
    <Center theme={theme}>
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
