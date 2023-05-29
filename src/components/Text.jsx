import Draggable from "react-draggable";
import { useState } from "react";

function Text() {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('Double click to edit')

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          setEditMode(false);
        }
    };
    

  return (
    <div>
      <Draggable>
        {editMode ? <input onKeyPress={handleKeyPress} value={value} onChange={e => setValue(e.target.value)} /> : <h1 onDoubleClick={() => setEditMode(true)}>{value}</h1>}
      </Draggable>
    </div>
  );
}

export default Text;
