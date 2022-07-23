import { React, useState } from 'react'

export default function Collapse(props) {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open)
    }
    return (
        <div className='collapsible'>
            <div className='collapsible-header' onClick={toggle}>
                {props.label}
                <i className={`fa-solid ${open ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
            </div >
            {
                open ?
                    <div className='collapsible-content'>
                        {props.children}
                    </div> : null
            }
        </div >
    )
}

