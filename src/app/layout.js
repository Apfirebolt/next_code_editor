import "./globals.css";
import './main.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Code Editor - Next.js",
  description: "A code editor built using Next.js",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-sand">
        <ToastContainer />
        {children}
      </body>
    </html>
  );
};

export default MainLayout;
