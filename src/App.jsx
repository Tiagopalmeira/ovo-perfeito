import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import TypeEgg from "./screen/typeEgg";
import CronometroPage from "./screen/cronometro";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typeegg" element={<TypeEgg />} />
        <Route path="/cronometro/:tipo" element={<CronometroPage />} />
      </Routes>
    </BrowserRouter>
  );
}
