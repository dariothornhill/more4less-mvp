import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    constructor() {
        super();
    
      }
    

      render() {
        return (
          <div>
              Footer goes here
          </div>
        );
      }
}

export default connect()(Footer);