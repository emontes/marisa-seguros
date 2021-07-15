import React from "react";
import Layout from "../components/Layout";
import RubrosDestacados from "../components/RubrosDestacados";
import Seo from "../components/SEO";

const Contacto = () => {
  return (
    <Layout>
      <Seo
        title="Contacto"
        description="contáctanos para que podamos brindarte la asesoría que tú te mereces"
      />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>¿Quieres contactarnos?</h3>
            <p>
              Nuestros asesores profesionales estarán encantados de brindarte el
              apoyo profesional que mereces.
            </p>
            <p>
              Calle Magdalena 10 B Col. La Paz <br />
              Puebla, Pue Cp 72160
            </p>
            <p>
              Teléfono: <b>221 349 4440</b>
            </p>
          </article>

          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Tu Nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">tu email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">mensaje</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Send
              </button>
            </form>
          </article>
        </section>
        <RubrosDestacados />
      </main>
    </Layout>
  );
};

export default Contacto;
