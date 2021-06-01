import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { useTheme } from 'vauquita/hooks'

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.notFound.background};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Title = styled.h1`
  align-items: center;
  display: flex;
`

const NotFound = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Container theme={theme}>
      <Title style={{ color: theme.notFound.color }}>{t('page-not-found')}</Title>
    </Container>
  )
}

export default NotFound
