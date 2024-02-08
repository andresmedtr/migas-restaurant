import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@/styles/index.css";

export const metadata = {
  title: "Migas",
  description: "Created by andresmedinatr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=El+Messiri&family=Kanit:wght@300&family=Poppins:wght@300&display=swap"
        />
        <link
          href="https://unpkg.com/react-pdf/dist/react-pdf.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <CustomNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
