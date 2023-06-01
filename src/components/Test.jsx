import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Test() {

    const [size, setSize] = useState(16)
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('Edit your text')

    const HandleResize = (event) => {
        const value = event.target.value
        setSize(value)
    }
 
    const HandleValue = (e) => {
        setValue(e.target.value)
    }

  return (
    <div>
        <input type="number" value={size} onChange={e => HandleResize(e)}/> 
        <Draggable>
            {editMode ? 
                <input type="text" value={value} onChange={e => HandleValue(e)} onDoubleClick={() => setEditMode(false)}  />
            : 
                <p onDoubleClick={() => setEditMode(true)} style={{fontSize: `${size}px`, position: "absolute"}}>
                    {value}
                </p>
            }
        </Draggable>
    </div>
  )
}

export default Test