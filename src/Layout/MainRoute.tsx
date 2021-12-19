import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Index = () => {
  return <div>hello</div>;
};
const Index1 = () => {
  return <div>Index1</div>;
};
const MainRoute = () => {
  return (
    <Routes>
      <Route path="home" element={<Index />} />
      <Route path="demo" element={<Index1 />} />
    </Routes>
  );
};
export default MainRoute;
