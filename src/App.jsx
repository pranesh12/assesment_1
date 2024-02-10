import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./components/userList/UserList";
import UserDetails from "./components/userDetails/UserDetails";
import { createContext, useEffect, useState } from "react";
export const userContext = createContext(null);

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserList />,
    },
    {
      path: "/:id",
      element: <UserDetails />,
    },
  ]);
  return (
    <>
      <userContext.Provider value={{ users, setUsers }}>
        <RouterProvider router={router}></RouterProvider>
      </userContext.Provider>
    </>
  );
}

export default App;
