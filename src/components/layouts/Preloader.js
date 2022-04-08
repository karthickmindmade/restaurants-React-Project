import React, { useEffect, useState } from 'react';

function Preloader() {
    
    const [fetchSuccess, setFetchSuccess] = useState(false);

    useEffect(() => {
            setFetchSuccess(true);
    }, [])

    return (
        <div id="preloader-wrap" className={fetchSuccess ? 'loaded' : ''}>
            <div className="spinner spinner-8">
                <div className="ms-circle1 ms-child" />
                <div className="ms-circle2 ms-child" />
                <div className="ms-circle3 ms-child" />
                <div className="ms-circle4 ms-child" />
                <div className="ms-circle5 ms-child" />
                <div className="ms-circle6 ms-child" />
                <div className="ms-circle7 ms-child" />
                <div className="ms-circle8 ms-child" />
                <div className="ms-circle9 ms-child" />
                <div className="ms-circle10 ms-child" />
                <div className="ms-circle11 ms-child" />
                <div className="ms-circle12 ms-child" />
            </div>
        </div>
    );
};

export default Preloader;