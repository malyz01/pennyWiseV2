import React from 'react'
import { Container } from '@material-ui/core';
import { sIndex } from './style'

const Footer = () => {
  const f = sIndex()

  return (
    <Container className={f.mainContainer}>
      <div>
        Footer
    </div>
    </Container>
  )
}

export default Footer
