import { createBrowserRouter, data, Route } from "react-router";
import CardDetail from "../Components/Cards/CardDetail/Detail"; 
import App from "../App";
import Detail from "../Components/Cards/CardDetail/Detail";

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/detail/:symbol', element: <Detail /> }
]);