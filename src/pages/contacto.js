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
              You probably haven't heard of them gochujang flannel, readymade
              chartreuse schlitz vaporware raclette kinfolk gentrify synth
              tilde. land thundercats wayfarers chillwave narwhal sriracha
              polaroid flannel chambray single-origin coffee locavore. Semiotics
              locavore thundercats paleo PBR&B letterpress.
            </p>
            <p>
              Sartorial chia artisan succulents, lo-fi butcher viral whatever
              shabby chic fixie etsy four dollar toast hella.
            </p>
            <p>
              Pour-over authentic twee vegan green juice jean shorts microdosing
              synth subway tile hexagon fixie woke affogato seitan tofu. Plaid
              mustache you probably haven't heard of them, next level kinfolk
              keytar kickstarter sartorial letterpress jean shorts. Small batch
              farm-to-table iceland, mumblecore coloring book unicorn deep v
              YOLO locavore bicycle rights taiyaki portland. Vape kale chips af
              green juice. Flannel cred celiac aesthetic.
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
