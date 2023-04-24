import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Hire me! Ask me Questions!</p>
            <ul className="contact-links">
              <li className="contact-item">Email: michi@mail.com</li>
              <li className="contact-item">Phone: +1234567890</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
