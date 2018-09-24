const CategoriesList = (props) => {
    const list = props.categories.map(
        element => (
            <CategoryCard
            key={element.id}
            categId={element.id}
            src={element.image.src}
            name={element.name}
            />
        )
    );
    return <div>{list}</div>;
};


export default class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
        };
    }

    componentWillMount() {
        fetch(`http://localhost:3030/categories`)
        .then(res => res.json())
        .then(json => this.setState({categories: json}))
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return <CategoriesList categories={this.state.categories}></CategoriesList>
    }
}
