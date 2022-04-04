import React from "react"

export default function ImgSelectOption(props) {
    const { image } = props
    var images =[]
   var imageurl=props.imagesurl
    if (image === undefined) {
        images = []
    } else {
        images=image
        for (let i = 0; i < images.length; i++) {
            imageurl.push(URL.createObjectURL(images[i]))
        }
    }
  console.log(imageurl)
    return (
        <div className={props.divClassName} >
            {imageurl.map((value) =>
                <div className="display-flex">
                    <img width='100px' className={props.className} src={value}/><button className={props.deleteButton} value={value} onClick={props.deleteFun}>X</button>
                </div>
            )}
        </div>

    )
}