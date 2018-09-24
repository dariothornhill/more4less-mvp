import React from 'react';
import { connect } from 'react-redux';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Search from './Search';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">More4Less</NavbarBrand>
                    <img src="http://somelink" alt="U" />
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar style={{float: 'right'}}>
                            <NavItem>
                                <NavLink href="/my-account">My Account</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/logout">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Navigation);