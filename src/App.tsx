import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layouts/Layout";

function App() {
  const renderWithLayout = (Component: React.ComponentType) => (
    <Layout>
      <Component />
    </Layout>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/action" element={renderWithLayout(HomePage)} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
