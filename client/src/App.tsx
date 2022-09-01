import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'pages/Main';
import AskQuestion from 'pages/AskQuestion';
import ReadQuestion from 'pages/ReadQuestion';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<ReadQuestion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
