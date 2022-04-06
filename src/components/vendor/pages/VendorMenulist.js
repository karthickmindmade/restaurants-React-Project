import React, { Component } from 'react';
import Sidenavigation from '../layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import VendorListcontent from '../section/Menulist/VendorListcontent';
import { useHistory } from 'react-router-dom/esm/react-router-dom';

export default function VendarMenulist() {
   
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <VendorListcontent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }


