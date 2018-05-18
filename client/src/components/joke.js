import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

export default class Joke extends Component {

  render() {
    return (
    <div>
      <Card>
        <CardHeader>{this.props.joke.type}</CardHeader>
        <CardBody>
          <CardTitle>{this.props.joke.setup}</CardTitle>
          <CardText>{this.props.joke.punchline}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }

}
