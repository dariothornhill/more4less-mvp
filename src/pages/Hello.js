import React from 'react';
import {Button } from 'reactstrap';


const API = 'http://randomuser.me/api';
const GreetAPI = 'http://172.16.0.43/hello';

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
        fetch(GreetAPI+'/this.state.name')
        .then(res => res.json()).then(greeting => {
            console.log(greeting);
            this.setState({
                greeting: greeting.results.message,
                loading: false
            });
        })
    });
    }

    render() {
        const { loading, user, greeting } = this.state;

        if (loading) {
            return <p> Loading...</p>;
        };

        return (
        <div>
            <img src={user.picture.thumbnail} alt=""/>
            <p>{user.name.first} {user.name.last}</p>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
            <p>{greeting}</p>
            <Button onClick={() => this.getData()}>Get New Person</Button>
        </div>);
    }
}
