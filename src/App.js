import ReactDOM from "react-dom/client";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./header/Header"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
