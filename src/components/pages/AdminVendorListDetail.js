import React from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Content from '../sections/AdminVendorListDetail/Content';

function AdminVendorListDetail() {

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


export default AdminVendorListDetail;