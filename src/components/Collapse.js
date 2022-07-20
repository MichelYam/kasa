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
                <div className={`arrow ${open ? 'open' : null}`}></div>
            </div>
            {open ?
                <div className='collapsible-content'>
                    {props.children}
                </div> : null
            }
        </div>
    )
}
