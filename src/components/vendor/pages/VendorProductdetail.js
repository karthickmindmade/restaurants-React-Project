import React, { Component } from 'react';
import Sidenavigation from '../layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import VendorDetailcontent from '../section/VendorProductsdetail/VendorDetailcontent';
import { useLocation } from 'react-router-dom/esm/react-router-dom';

export default function VendorProductdetail() {
    // const {state}   = useLocation()

        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <VendorDetailcontent/>
                </main>
             
            </div>
        );
    }


