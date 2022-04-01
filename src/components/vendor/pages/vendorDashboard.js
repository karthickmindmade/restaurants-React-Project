import React, { Component } from 'react';
import Sidenavigation from '../layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import Homecontent from '../section/vendorDashboard/Homecontent';


class VendorDashboard extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Homecontent/>
                </main>
               
            </div>
        );
    }
}

export default VendorDashboard;