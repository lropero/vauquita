import React from 'react'
import styled from 'styled-components'
import { Space, Typography } from 'antd'
import { StopTwoTone } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

import { useTheme } from 'vauquita/hooks'

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.notFound.backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Title = styled(Typography.Title)`
  align-items: center;
  display: flex;
`

const NotFound = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Container theme={theme}>
      <Space align='center' direction='vertical'>
        <StopTwoTone style={{ fontSize: '10em' }} />
        <Title level={3} style={{ color: theme.notFound.color }}>
          &nbsp;{t('page-not-found')}
        </Title>
      </Space>
    </Container>
  )
}

export default NotFound
