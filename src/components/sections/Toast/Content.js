import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import jQuery from 'jquery'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


function Content () {
   
        toastsuccess = toastsuccess.bind(this);
       
      
        toastr.options =
        {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-left",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

    function toastsuccess() {
        toastr.remove();
        toastr.options.positionClass = "toast-bottom-left";
        toastr.success('This is a Success Toast', 'lorem ipsum asit');
    }
    
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Toast</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Check <code>/assets/js/toast.js</code> for reference</p>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <h6 className="section-title">Top Left Success</h6>
                                        <button className="btn btn-primary" id="toast-success" onClick={toastsuccess}>Click Me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    
}

export default Content;