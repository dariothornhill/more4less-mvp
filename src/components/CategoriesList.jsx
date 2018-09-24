

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: prop.categories,
        };
    }

    componentWillMount() {

    }

    render() {
        return <ul>
            this.state.categories.array.forEach(element => 
                 (<li>element</li>)
            );
        </ul>
    }
}
