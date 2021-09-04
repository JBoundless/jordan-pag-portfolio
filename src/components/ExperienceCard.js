import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function WorkCards() {
  return(
    <div>
    <Card>
  <Card.Header>Journalism</Card.Header>
  <ListGroup variant="flush">
  <ListGroup.Item>Community Journalist (2015 - Present)</ListGroup.Item>
    <ListGroup.Item>Basketball Beat Writer, <i>The Loyalist</i> (Oct 2018 - Feb 2020)</ListGroup.Item>
    <ListGroup.Item>Sports editor, <i>The Loyalist</i> (Aug 2020 - Present)</ListGroup.Item>
    <ListGroup.Item>Writer & Editor, <i>The Voice of Truth (Medium)</i> (Oct 2018 - Present)</ListGroup.Item>
    <ListGroup.Item>Play-by-Play Commentator, Varsity Basketball Broadcasts, <i>John Malloy Broadcast Club</i> (Nov 2018 - Present)</ListGroup.Item>
      <ListGroup.Item>Online Managing Editor, <i>The Loyalist</i> (Jul 2021 - Present)</ListGroup.Item>
  </ListGroup>
</Card>

<Card>
  <Card.Header>Photography/Videography</Card.Header>
  <ListGroup variant="flush">
  <ListGroup.Item>Camera Operator - Varsity Football Broadcasts, <i>John Malloy Broadcast Club</i> (Sep 2019 - Oct 2019)</ListGroup.Item>
    <ListGroup.Item>Camera Operator - Varsity Volleyball Broadcasts, <i>John Malloy Broadcast Club</i> (Apr 2021)</ListGroup.Item>
  </ListGroup>
</Card>
<Card>
  <Card.Header>Computer Science</Card.Header>
  <ListGroup variant="flush">
  <ListGroup.Item>HTML/CSS Tutor, <i>Ignatian Coding</i> (Mar 2021 - Present)</ListGroup.Item>
    <ListGroup.Item>Member, <i>Loyola High School Computer Science Club</i> (Sep 2021 - Present)</ListGroup.Item>
  </ListGroup>
</Card>
</div>
  )
}