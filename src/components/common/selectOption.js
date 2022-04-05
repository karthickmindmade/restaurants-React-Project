import React from "react"

export default function SelectOption(props) {
    const { option } = props
    var list
    if(option===undefined){ 
         list=[]
    }else{
         list=option
    }
    return (
        <div className={props.divClassName} >
            {list.map((value) =>
                <div className="display-flex">
                    <div className={props.className}>{value}</div><button className='btn-secondary' value={value} onClick={props.deleteFun}>X</button>
                </div>
            )}
        </div>

    )
}