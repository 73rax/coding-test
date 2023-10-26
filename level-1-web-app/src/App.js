import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsFeedPage from "./pages/NewsFeedPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="grid-container">
          <Sidebar />
          <main className="main box-2">
            <section className="page-banner">
              <h2 className="page-banner__header">NewsFeed</h2>
              <p className="page-banner__description">Check what your friends have been up to!</p>
            </section>
            <section className="main__container">
              <Routes>
                <Route path="/" element={<NewsFeedPage />} />
              </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
