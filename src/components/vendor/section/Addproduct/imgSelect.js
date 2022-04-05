import React from "react"
export default function ImgSelectOption(props) {

    var imageurl = []

    if (props.imagesurl === undefined) {

    } else {
        imageurl = props.imagesurl
    }
    return (
        <div className={props.divClassName} >
            {imageurl.map((value) =>
                <div className="imgPre">
                    <img width='70px' className='' src={value} /><button className='btn-secondary imgPreCloseBtn' value={value} onClick={props.deleteFun}>X</button>
                </div>
            )}
        </div>
    )
}