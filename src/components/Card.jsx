import styles from "../css/card.module.css";
import { useGetMemes } from "../hooks/useGetMemes";
import { useNavigate } from "react-router-dom";

function Card() {
  const { memes } = useGetMemes();
  const navigate = useNavigate()

  return (
    <section className={`${styles.Container}`} style={{ width: "100%" }}>
      <main className={styles.cardContainer}>
        {memes.map((e) => (
          <div
            className={`card ${styles.card}`}
            style={{ width: "18rem", margin: "2em" }}
            key={e.id}
          >
            <div className={styles.imageContainer}>
              <img src={e.image} className="card-img-top" alt={e.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <button href="#" className="btn btn-primary" onClick={() => {navigate(`/Edit`)}}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Card;
