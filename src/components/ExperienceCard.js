import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ExperienceCard() {
  return(
    <div>
    <Card>
  <Card.Header style={{fontWeight: 700}}>Journalism</Card.Header>
  <ListGroup variant="flush">
  <ListGroup.Item>Community Journalist (Jan. 2015 - Present)</ListGroup.Item>
    <ListGroup.Item>Varsity Basketball Beat Writer, <i>The Loyalist</i> (Oct. 2018 - Feb. 2020, Sep. 2021 - Present)</ListGroup.Item>
    <ListGroup.Item>Sports Editor, <i>The Loyalist</i> (Aug. 2020 - Jun. 2021)</ListGroup.Item>
    <ListGroup.Item>Writer & Editor, <i>The Voice of Truth (Medium)</i> (Oct. 2018 - Present)</ListGroup.Item>
    <ListGroup.Item>Play-by-Play Commentator, Varsity Basketball Broadcasts, <i>John Malloy Broadcast Club</i> (Nov. 2018 - Present)</ListGroup.Item>
    <ListGroup.Item>Online Managing Editor, <i>The Loyalist</i> (Jul. 2021 - Present)</ListGroup.Item>
    <ListGroup.Item>Photographer (as needed), <i>The Loyalist</i> (Sep. 2021 - Present)</ListGroup.Item>
    
  </ListGroup>
</Card>

<Card>
  <Card.Header style={{fontWeight: 700}}>Videography/Broadcast Production</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Camera Operator - Varsity Football Broadcasts, <i>John Malloy Broadcast Club</i> (Sep. 2019 - Oct. 2021)</ListGroup.Item>
    <ListGroup.Item>Camera Operator - Varsity Volleyball Broadcasts, <i>John Malloy Broadcast Club</i> (Apr. 2021)</ListGroup.Item>
    <ListGroup.Item>Switchboard Operator - Varsity Football Broadcasts, <i>John Malloy Broadcast Club</i> (Sep. 2021 - Oct. 2021)</ListGroup.Item>
  </ListGroup>
</Card>
<Card>
  <Card.Header style={{fontWeight: 700}}>Computer Science</Card.Header>
  <ListGroup variant="flush">
  <ListGroup.Item>HTML/CSS Tutor, <i>Ignatian Coding</i> (Loyola High School) (Mar. 2021 - May. 2021)</ListGroup.Item>
    <ListGroup.Item>Member, <i>Loyola High School Computer Science Club</i> (Sep. 2020 - Present)</ListGroup.Item>
  </ListGroup>
</Card>
<Card>
  <Card.Header style={{fontWeight: 700}}>Miscellaneous</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Attended Cal State Northridge Journalism's 'J-Day' Conference (Oct. 23, 2021)</ListGroup.Item>
  </ListGroup>
</Card>

</div>
  )
}
