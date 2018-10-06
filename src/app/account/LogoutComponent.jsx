import React from 'react';

import Navigation from '../components/Navigation';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
       this.logout();
    }

    logout() {
        const { userLogout } = this.props.actions;
        userLogout()
            .then(user => {
               
                console.log(user);
            })
            .catch(error => {
                
                console.log(error.message);
            });
    }

    render() {
        return(<div>
            <Navigation />
            <p>Logout</p>
            </div>);
    }
}

export default Logout;