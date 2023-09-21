import "./globals.css";
import Provider from "./components/Provider";
import ModalProvider from "./context/ModalProvider";

export const metadata = {
  title: "Board",
  description: "Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <ModalProvider>{children}</ModalProvider>
        </Provider>
      </body>
    </html>
  );
}
