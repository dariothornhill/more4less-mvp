import React from 'react';
import { Button } from 'reactstrap';


const API = 'https://randomuser.me/api';
const GreetAPI = 'http://172.16.0.43:8000/hello';

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            user: null
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(API)
            .then(res => res.json())
            .then(user => {
                console.log(user);
                this.setState({
                    user: user.results[0],
                    loading: false
                });
            })
            .then(() => {
                console.log(this.state.user.name.first);
                fetch(GreetAPI + `/${this.state.user.name.first}`)
                    .then(res => res.json())
                    .then(greeting => {
                        console.log(greeting);
                        this.setState({
                            greeting: greeting.message,
                            loading: false
                        });
                    })
                    .catch(console.log);
            })
            .catch(console.log);
    }

    render() {
        const { loading, user, greeting } = this.state;

        if (loading) {
            return <p> Loading...</p>;
        };

        return (
            <div>
                <img src={user.picture.thumbnail} alt="" />
                <p>{user.name.first} {user.name.last}</p>
                <a href={`tel:${user.phone}`}>{user.phone}</a>
                <p>{greeting}</p>
                <Button onClick={() => this.getData()}>Get New Person</Button>
            </div>);
    }
}
