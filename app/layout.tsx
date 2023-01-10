import "../styles/globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md mx-auto min-h-screen p-4">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
