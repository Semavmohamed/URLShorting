import React from 'react'

export default function Buttons(props) {
    return (
        <button className={`bg-second py-2 px-5 text-white rounded-3xl font-bold hover:bg-buttonH ${props.className || ''}  `}>
            {props.value}
        </button>
    )
}
