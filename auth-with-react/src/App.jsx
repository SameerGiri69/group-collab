import { Routes, Route } from "react-router-dom";
import Dhedu from "./assets/Component/Dhedu";
import BusinessPage from "./Pages/BusinessPage"; 


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Dhedu />} />
        <Route path="/business" element={<BusinessPage />} />
      </Routes>
    </>
  );
}

export default App;
