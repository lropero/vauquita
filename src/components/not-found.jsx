import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { MehTwoTone } from '@ant-design/icons'
import { Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const Center = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const NotFound = () => {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <Center backgroundColor={theme.notFound.backgroundColor}>
      <Space align='center' direction='vertical'>
        <MehTwoTone style={{ fontSize: '8em' }} />
        <Typography.Title level={3} style={{ color: theme.notFound.color }}>
          {t('page-not-found')}
        </Typography.Title>
      </Space>
    </Center>
  )
}

export default NotFound
