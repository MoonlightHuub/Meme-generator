import Draggable from "react-draggable";
import { useText } from "../hooks/useText";
import { useContext } from 'react'
import { MyContext } from "../context/modifyContext";
import styles from '../css/text.module.css'

function Text() {
  const { value, setValue, handleKeyPress, editMode, setEditMode } = useText();
  const { textSize, color } = useContext(MyContext);

  return (
    <div
      style={{ position: "absolute"}}
    >
      <Draggable>
        {editMode ? (
          <textarea
            onKeyDown={handleKeyPress}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{fontSize: `${textSize}px`}}
          />
        ) : (
          <div className={styles.textContainer}>
            <p 
              onDoubleClick={() => setEditMode(true)}
              style={{fontSize: `${textSize}px`, color: `${color}`, fontWeight: "bold"}}
              >
              {value}
            </p>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default Text;
