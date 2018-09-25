import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

function DealCard(props) {
  const { product } = props;
  const { title, description, image } = product || {};
  return (
    <div className="col">
      <Card className="row padding">
        <CardImg top width="100%" src={image} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default DealCard;
