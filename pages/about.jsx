import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I choose to become a Webdeveloper. I researched my possibilities
              in Vienna and choose to do the upleveled.io Bootcamp! It's my
              first day and i learned a lot already about git projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
