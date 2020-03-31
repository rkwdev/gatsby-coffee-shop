import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />

        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              deserunt. Optio consequuntur, rerum voluptatem sapiente, nobis
              placeat eius fuga corrupti quis a molestias fugit doloremque modi
              excepturi sequi natus incidunt, mollitia dolorum quidem hic! Nihil
              repudiandae sequi placeat sapiente, soluta adipisci deserunt
              cumque reprehenderit ipsa, magni illum nisi unde dignissimos.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
