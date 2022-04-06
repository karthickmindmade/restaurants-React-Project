import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Content from '../sections/Customer-list/Content'


class Customerlist extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Content/>
                </main>
                
            </div>
        );
    }
}

export default Customerlist;