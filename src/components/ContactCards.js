import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ContactCards() {
  return (
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />
    <Card.Body>
      <Card.Title>Twitter</Card.Title>
      <Button href="https://open.spotify.com/show/2AMgpJa4mznnPs46TjbJez?si=bjBRKp6eTBi5u5dJI5UC6A&nd=1">Check it Out</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" />
    <Card.Body>
      <Card.Title>Instagram</Card.Title>
      <Button href="https://www.instagram.com/jordanboundless/">Check it Out</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" />
    <Card.Body>
      <Card.Title>LinkedIn</Card.Title>
      <Button href="https://www.linkedin.com/in/jordan-pagkalinawan/">Check it Out</Button>
    </Card.Body>
  </Card>
</CardGroup>
  )
}
