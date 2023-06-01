import { useState } from "react";

export const useText = () => {
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('Double click to edit')

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          setEditMode(false);
        }
    };

    return {handleKeyPress, editMode, setEditMode, value, setValue}
}