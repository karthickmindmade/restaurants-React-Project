import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import AddVendorContent from '../sections/AddVendor/AddVendorContent';


function AddVendor () {
   
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                   <AddVendorContent />
                </main>
            </div>
        );
    }


export default AddVendor;