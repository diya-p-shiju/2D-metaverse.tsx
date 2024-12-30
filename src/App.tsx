import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layouts/Layout";
import UserHomePage from "./pages/UserHomePage";
import Auth0withRedirect from "./authentication/Auth0withRedirect";

function App() {
  const renderWithLayout = (Component: React.ComponentType) => (
    <Auth0withRedirect>
      <Layout>
        <Component />
      </Layout>
    </Auth0withRedirect>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/action" element={renderWithLayout(UserHomePage)} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
