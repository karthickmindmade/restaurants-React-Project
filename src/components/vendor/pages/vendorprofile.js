import React from 'react';
import Sidenavigation from '../../vendor/layout/Sidenavigation';
import Topnavigation from '../../vendor/layout/Topnavigation';
import Content from '../../vendor/section/vendorprofile/Content'
export default function Vendorprofile() {
  
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <Content/>
                </main>
            </div>
        );
    }


