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
                <div className="display-flex">
                    <img width='50px' className={props.className} src={value} /><button className={props.deleteButton} value={value} onClick={props.deleteFun}>X</button>
                </div>
            )}
        </div>
    )
}