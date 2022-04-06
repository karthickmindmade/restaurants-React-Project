import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Content from '../sections/AdminVendorList/Content';

function AdminVendorList() {

    return (
        <div className="ms-body ms-aside-left-open ms-primary-theme">
            <Sidenavigation />
            <main className="body-content">
                <Topnavigation />
                <Content />
            </main>

        </div>
    );
}


export default AdminVendorList;