import React from 'react';
import { connect } from 'react-redux';

import { Input, Button, Form } from 'reactstrap';

class Search extends React.Component {
    constructor() {
        super();
    
      }
    
      submitSearch() {
       //Fire search action with query as payload
      }
      render() {
        return (
          <div>
            <Form inline>
            <Input type="text"/>
            <Button/>
            </Form>
          </div>
        );
      }
}

export default connect()(Search);