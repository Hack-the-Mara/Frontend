import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router';
import PageNotFound from '../Pages/PageNotFound';
import Transactions from '../Pages/Transactions';

const User = () => {
  const status = useSelector((state) => state.onlineReducer.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === false) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="" element={<Transactions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default User;
