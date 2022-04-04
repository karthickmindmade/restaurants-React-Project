import React from "react"

export default function Imgloop(props) {
    const { image } = props
    var images = []
var imageurl=[]
    if (image === undefined) {
        images = []
    } else {
        images = image
        for (let i = 0; i < image.length; i++) {
            imageurl.push(URL.createObjectURL(image[i]))
        }
        console.log(imageurl)
    }
    return (
        <div className={props.divClassName} >

        </div>

    )
}