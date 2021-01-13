import React from 'react'
import {Container, Card} from 'react-bootstrap'

export default function Favourite({favourite}) {
  return (
    <Container>
      <Card>
        <Card.Body >
          {favourite.name}
        </Card.Body>
      </Card>
    </Container>
  )
}
