import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import SearchForm from './containers/commons/SearchForm/SearchForm';
import ContentPage from './pages/ContentPage/ContentPage';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={'/main'} element={<MainPage />} />
      <Route path={'/content'} element={<ContentPage />} />
      <Route path={'/a'} element={<SearchForm />} />
    </Routes>
  );
};

export default App;
