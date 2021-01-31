import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

//NextJS uses code splitting out of the box

class IndexPage extends Component {
  static async getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Next' });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Name of the app is {this.props.appName}</h1>
        <p>
          Go to{' '}
          <Link href='/auth/'>
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push('/auth/')}>
          Go to Auth Using the Router
        </button>
      </div>
    );
  }
}

export default IndexPage;
