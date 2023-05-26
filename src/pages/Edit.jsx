import React from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
    const navigate = useNavigate()

  return (
    <section className="container text-center">
      <header>
        <button onClick={() => {navigate("/")}} className="btn btn-primary m-2">
            Home
        </button>
        <h1>Edit Your Meme</h1>
      </header>
      <main>
        meme on editing
      </main>
    </section>
  );
}

export default Edit;
