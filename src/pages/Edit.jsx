import { useState, createRef } from "react";
import styles from "../css/edit.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import ModifyText from "../components/modifyText";

function Edit() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const AddText = () => {
    setCount(count + 1);
  };

  return (
    <section className="container text-center">
      <header>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-primary m-2"
        >
          Home
        </button>
        <h1>Edit Your Meme</h1>
      </header>
      <main>
        <section className={styles.labContainer}>
          <div ref={memeRef} className={styles.image}>
            <img
              src={params.get("url")}
              alt="edit meme"
              style={{ height: "100%", width: "100%" }}
            />
            {Array(count).fill(0).map(() => (
              <Text />
            ))}
          </div>
          <aside className={`${styles.modifierContainer}`}>
            <ModifyText />
            <button onClick={AddText}>Add Text</button>
            <button variant="succes" onClick={() => exportComponentAsJPEG(memeRef)}>
            Save
            </button>
          </aside>
        </section>
      </main>
    </section>
  );
}

export default Edit;
