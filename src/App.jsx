import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./componenets/Body";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import Layout from "./Layout";
import BookOnline from "./componenets/BookOnline";

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element:<Body/>
    },
    {
      path: 'BookOnline',
      element:<BookOnline/>
    }
  ]
}])

function App() {
  return (
    <>
      <div className="text-white">
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
