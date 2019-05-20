import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Store from './containers/Store/Store';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Store />
        </Layout>
      </div>
    );
  }
}

export default App;
