import styles from '../css/modifyText.module.css'
import { useContext } from "react"
import { MyContext } from "../context/modifyContext"

function ModifyText() {
  const { handleChangeSize, textSize, handleColorWhite, handleColorBlack } = useContext(MyContext)

  return (
    <div>
      <p>Edit text size: {textSize}</p>
      <input type="number" value={textSize} onChange={e => handleChangeSize(e)} />
      <div className={styles.black} onClick={handleColorBlack} />
      <div className={styles.white} onClick={handleColorWhite}/>
    </div>
  )
}

export default ModifyText