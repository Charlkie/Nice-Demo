import React from 'react';
import { Divider } from 'semantic-ui-react';
import Routes from '../routes';
import Footer from './footer';
import './index.css';
import Navigation from './navigation';

export default class PageLayout extends React.Component {
    public render() {
        return (
            <div className='content-contain'>
                <Navigation />
                <div className='content'>
                    <Routes />
                    <Divider />
                    <Footer />
                </div>
            </div>
        )
    }
}