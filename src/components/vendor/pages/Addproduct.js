import React, { Component } from 'react';
import Sidenavigation from '../layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import Addproductcontent from '../section/Addproduct/Addproductcontent'


class Addproduct extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Addproductcontent/>
                </main>
               
            </div>
        );
    }
}

export default Addproduct;