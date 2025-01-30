"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="menu">
          <button onClick={() => router.push('/')}>Home</button>
          &nbsp;
          <button onClick={() => router.push('/about')}>About</button>
          &nbsp;
          <button onClick={() => router.push('/contacts')}>Contacts</button>
      </div>
      <h1>Contact Us</h1>
      <p>This is the Contact Us page.</p>
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
    </div>
  );
}
