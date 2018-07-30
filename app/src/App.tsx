import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import PageLayout from './components/layout/pagelayout'

export default class App extends React.Component {
  public render() {
    return (
      <div>
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </div>
    );
  }
}

