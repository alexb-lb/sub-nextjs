"use client";
import Head from "next/head";
import Script from "next/script";

export default function About() {
  const getExternalScript = () => {
    fetch("https://test-cookies.tiiny.site/show_alert.js");
  };

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <p>This is the About Us page.</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        className="footer-item lb-preferences-center-trigger"
        id="lb-cookie-consent-open-preferences"
      >
        Cookie Preferences
      </button>
      <br />
      <button onClick={getExternalScript}>
        Show console message from external site
      </button>
    </div>
  );
}
