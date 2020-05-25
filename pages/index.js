import Head from "next/head";
import { Mail, GitHub, Linkedin, Instagram } from "react-feather";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andy Hong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <h1>Hi, I'm Andy.</h1>
          <p>
            A self-taught developer passionate about helping teams operate
            effectively to successfully reach their goals.
          </p>
          <div className="links">
            <a href="mailto:andyhongoc@gmail.com">
              <Mail color="#111111" size={24} />
            </a>
            <a href="https://github.com/andyhong">
              <GitHub color="#111111" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/andy-hong-067385118">
              <Linkedin color="#111111" size={24} />
            </a>
            <a href="https://www.instagram.com/andyhxng">
              <Instagram color="#111111" size={24} />
            </a>
          </div>
        </div>

        <hr />

        <div className="projects">
          <h2>Projects</h2>
          <h3>
            <a href="https://churchkey.io">Churchkey</a>
          </h3>
          <p>
            An online bulletin solution for churches to create a simple and
            frictionless hand-off experience.
          </p>
          <h3>Glimpse</h3>
          <p>
            <strong>Coming soon</strong> &mdash; a custom built GUI for PCO that
            displays all relevant information and milestones for a single person
            in real time.
          </p>
        </div>

        <hr />

        <div className="blog">
          <h2>Blog</h2>
          <h3>Coming soon!</h3>
        </div>
      </main>

      <style jsx>{`
        .header {
          max-width: 450px;
        }

        .links {
          margin-top: 1.5rem;
        }

        .links a {
          margin-right: 0.75rem;
        }

        h1 {
          font-size: 3rem;
          margin: 0.25rem 0;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
          color: #0074d9;
        }

        h3 a:visited {
          color: #0074d9;
        }

        p {
          font-size: 1rem;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        hr {
          width: 100px;
          margin: 2rem 0;
          border: 0
          height: 1px;
          background-color: black;
        }

      `}</style>

      <style jsx global>{`
        html {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 16px;
        }

        body {
          padding: 3rem;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
          color: #111111;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
