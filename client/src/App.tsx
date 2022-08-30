import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'pages/Main';
import AskQuestion from 'pages/AskQuestion';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/askquestion" element={<AskQuestion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
