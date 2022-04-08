import React from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import AdminProductDetailcontent from '../sections/AdminProductsdetail/adminproductDetailcontent';

export default function AdminProductdetail() {

        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                   <AdminProductDetailcontent />
                </main>
             
            </div>
        );
    }


