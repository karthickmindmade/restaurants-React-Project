import React, { Component } from 'react';
import Sidenavigation from '../layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import Addproductcontent from '../section/Addproduct/Addproductcontent'


function Addproduct() {

    return (
        <div className="ms-body ms-aside-left-open ms-primary-theme">
            <Sidenavigation />
            <main className="body-content">
                <Topnavigation />
                <Addproductcontent />
            </main>

        </div>
    );
}

export default Addproduct;