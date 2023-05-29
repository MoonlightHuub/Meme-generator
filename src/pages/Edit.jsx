import {useState, createRef} from "react";
import styles from '../css/edit.module.css'
import { useNavigate, useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useGetMemes } from '../hooks/useGetMemes'

function Edit() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [count, setCount] = useState(0)
  const memeRef = createRef()
  const {memes} = useGetMemes()

  const AddText = () => {
    setCount(count + 1)
  }

  return (
    <section className="container text-center">
      <header>
        <button onClick={() => {navigate("/")}} className="btn btn-primary m-2">
            Home
        </button>
        <h1>Edit Your Meme</h1>
      </header>
      <main>
        <section className={styles.labContainer}>
          <div ref={memeRef}>
            <img src={params.get('url')} alt='edit meme' width={memes.map(e => e.width)} height={memes.map(e => e.height)} className={styles.image} />
            {Array(count).fill(0).map((e) => (<Text />))}
          </div>
        </section>
        <button
          onClick={AddText}
        >
          Add Text
        </button>
        <button
          variant='succes'
          onClick={() => exportComponentAsJPEG(memeRef)}
        >
          Save
        </button>
      </main>
    </section>
  );
}

export default Edit;
