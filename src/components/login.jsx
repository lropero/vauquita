import React from 'react'
import styled from 'styled-components'
import { Space, Typography } from 'antd'
import { useSelector } from 'react-redux'

import Cow from 'vauquita/assets/cow.svg'
import { makeCircle } from 'vauquita/helpers'
import { useTheme } from 'vauquita/hooks'

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.login.backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Text = styled(Typography.Text)`
  align-items: center;
  display: flex;
`

const Login = () => {
  const theme = useTheme()
  const { dimensions } = useSelector(state => state.utils)

  return (
    <Container theme={theme}>
      <Space align='center' direction='vertical'>
        <Cow style={{ height: 180 }} />
        <Text>
          {makeCircle({ color: 'red', size: 6 })}&nbsp;Edit <code>src/components/login.jsx</code> and save to reload.
        </Text>
        {!!Object.keys(dimensions).length && <Typography.Text>Window size is {`${dimensions.width}x${dimensions.height}`}</Typography.Text>}
        <a href='https://github.com/lropero/vauquita#readme' rel='noopener noreferrer' target='_blank'>
          README.md
        </a>
      </Space>
    </Container>
  )
}

export default Login
