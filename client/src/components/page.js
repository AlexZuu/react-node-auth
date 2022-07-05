import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthProvider';

const Page = () => {
  const { auth } = useContext(AuthContext)

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.length) navigate('/')
  })

  return (
    <div>
      <h1>Вход успешно осуществлён</h1>
    </div>
  );
};

export default Page;
