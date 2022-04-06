import React, { Component } from 'react';
import jQuery from 'jquery'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
function FailAlert (props) {
       const alert =props
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
        toastr.remove();
        toastr.options.positionClass = "toast-bottom-left";
        toastr.error(alert.message, 'Failed');
        return (
          
            <></>
                                  
        );   
}
export default FailAlert;