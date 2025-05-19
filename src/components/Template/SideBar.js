import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="Headshot of Austen smiling." />
      </Link>
      <header>
        <h2>Austen Money</h2>
        <p>
          <a href="mailto:austen.money@gmail.com">austen.money@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Austen! I am a Tufts alum and a software developer at the{' '}
        <a href="https://hidivelab.org/">HIDIVE Lab</a> at Harvard Medical School.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Austen Money & <Link to="https://github.com/mldangelo/personal-site"> Michael D&apos;Angelo </Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
