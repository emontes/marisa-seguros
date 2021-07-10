import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 not found" description="not found page" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Página no encontrada</h3>
        </section>

        <p>
          Lo sentimos{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          no pudimos encontrar lo que estás buscando.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Ir al inicio</Link>.
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
