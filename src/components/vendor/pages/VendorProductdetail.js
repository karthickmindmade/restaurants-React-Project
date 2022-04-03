import React, { Component } from 'react';
import Sidenavigation from '../layout/Sidenavigation';
import Topnavigation from '../layout/Topnavigation';
import VendorDetailcontent from '../section/VendorProductsdetail/VendorDetailcontent';


export default function VendorProductdetail() {
   
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


