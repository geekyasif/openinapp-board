import "./globals.css";
import Provider from "./components/Provider";

export const metadata = {
  title: "Board",
  description: "Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
