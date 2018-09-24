import React from 'react';
import { connect } from 'react-redux';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ProductCard extends React.Component {
    render() {
        return <div className="col">
            <Card className="row padding">
            <CardImg top width="100%" src={this.props.image.src} alt={this.props.image.src || "no image"} />
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{this.props.description}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
        </div>
    }
}
const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps)(ProductCard);