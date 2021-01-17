import React from 'react'
import styled from 'styled-components'
import { Space, Typography } from 'antd'
import { useSelector } from 'react-redux'

import Cow from 'vauquita/assets/cow.svg'
import { makeCircle } from 'vauquita/helpers'
import { useTheme } from 'vauquita/hooks'

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.start.backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Text = styled(Typography.Text)`
  align-items: center;
  display: flex;
`

const Start = () => {
  const theme = useTheme()
  const { dimensions } = useSelector(state => state.utils)

  return (
    <Container theme={theme}>
      <Space align='center' direction='vertical'>
        <Cow className='bg-blue-300 h-52 rounded-full shadow w-52' />
        <Text>
          {makeCircle({ color: 'green', size: 6 })}&nbsp;Edit <code>src/components/start.jsx</code> and save to reload.
        </Text>
        {!!Object.keys(dimensions).length && <Typography.Text>Window size is {`${dimensions.width}x${dimensions.height}`}</Typography.Text>}
        <a href='https://github.com/lropero/vauquita#readme' rel='noopener noreferrer' target='_blank'>
          README.md
        </a>
      </Space>
    </Container>
  )
}

export default Start
