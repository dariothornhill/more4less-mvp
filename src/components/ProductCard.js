import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import React from 'react';
import { connect } from 'react-redux';

class ProductCard extends React.Component {
    render() {
        return <Card className="w-25">
            <CardImg top width="100%" src={this.props.image.src} alt={this.props.image.src || "no image"} />
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{this.props.description}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    }
}
const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps)(ProductCard);