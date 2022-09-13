import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'pages/Main';
import AskQuestion from 'pages/AskQuestion';
import ReadQuestion from 'pages/ReadQuestion';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';
import Edit from 'components/Questions/Edit';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questions">
          <Route path="" element={<AskQuestion />} />
          <Route path=":id" element={<ReadQuestion />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
