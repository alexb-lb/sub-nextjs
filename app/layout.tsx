import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          // src="/main.js"
          src="https://lb-cctest.s3.ap-south-1.amazonaws.com/cookie_consent_25/b0e7d900-2dd6-4816-a3e1-adcbff8141ed/main_aaddbb4.js"
          id="lb-cookie-consent"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src={"./injectCookies.js"}
          type="text/javascript"
          strategy="beforeInteractive"
        />
        <GoogleTagManager gtmId="GTM-5GXBGFPT" />
        <Script src="https://test-cookies.tiiny.site/show_alert.js" />
        <Script src="https://lb-next-main.vercel.app/alert.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
