import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import Title from './components/Title'

const ComingSoonPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ComingSoon = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <ComingSoonPage>
        {/* <LogoIcon width="64px" mb="8px" /> */}
        <Title as="h1">{TranslateString(999, 'Coming Soon')}</Title>
      </ComingSoonPage>
    </Page>
  )
}

export default ComingSoon
