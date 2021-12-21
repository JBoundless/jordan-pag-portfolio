import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function JournalismCards() {
  return (
    <CardGroup>
      <Card style={{ backgroundColor: '#f2eecb' }}>
        <Card.Body>
          <Card.Title>Newspaper Experience</Card.Title>
          <Card.Text>
            I spent my eighth grade year contributing to my middle school's
            newspaper. I wrote and co-wrote several sports articles for them. In
            high school, I spent two years as a varsity basketball reporter for
            my school newspaper,{' '}
            <a href="http://theloyalist.org">The Loyalist</a>. Some of my recent
            articles for them can be found in the Sports section. My hard work
            paid off after I was chosen to be a Sports Editor for the 2020-21
            staff. In Jaunary 2021, was chosen to be the Managing Editor and
            Creative Director for the 2021 Junior Edition, a paper produced
            exclusively by 9th-11th graders. Now, I am the Online Managing
            Editor of the paper, focused on increasing our digital presence by
            publishing time-sensitive articles to our website and sports app.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
