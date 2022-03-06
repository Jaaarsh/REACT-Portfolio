import React, { useState } from "react";

import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Page from "./components/page/Page";
import Footer from "./components/footer/Footer";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [pages] = useState([
    {
      name: "about"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;