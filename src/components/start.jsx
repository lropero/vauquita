import React from 'react'
import styled from 'styled-components'
import { Space, Typography } from 'antd'
import { useSelector } from 'react-redux'

import Cow from 'vauquita/assets/cow.svg'
import { useTheme } from 'vauquita/hooks'

const Center = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Start = () => {
  const theme = useTheme()
  const { dimensions } = useSelector(state => state.utils)

  return (
    <Center backgroundColor={theme.start.backgroundColor}>
      <Space align='center' direction='vertical'>
        <Cow style={{ width: 220 }} />
        <Typography.Title>Vauquita</Typography.Title>
        <Typography.Text>
          Edit <code>src/components/start.jsx</code> and save to reload.
        </Typography.Text>
        {!!Object.keys(dimensions).length && (
          <Typography.Text>
            Window size is {`${dimensions.width}x${dimensions.height}`}
          </Typography.Text>
        )}
        <a
          href='https://github.com/lropero/vauquita#readme'
          rel='noopener noreferrer'
          target='_blank'
        >
          README.md
        </a>
      </Space>
    </Center>
  )
}

export default Start
