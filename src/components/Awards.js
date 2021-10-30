import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Awards() {
  return(
    <div>
    <Card>
  <Card.Header style={{fontWeight: 700}}>Awards</Card.Header>
<ListGroup variant="flush">
  <ListGroup.Item>FIRST PLACE (Sportswriting) - CSUN Journalism Day 2021</ListGroup.Item>
  </ListGroup>
</Card>
</div>
)
};
