import React from 'react';
import Sidenavigation from '../../vendor/layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import Homecontent from '../section/vendorDashboard/Homecontent';


export default function VendorDashboard () {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Homecontent/>
                </main>
               
            </div>
        );
};