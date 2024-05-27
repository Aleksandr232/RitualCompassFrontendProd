import React from 'react';
import Cookies from 'js-cookie';

const LogoutButton = ()  => {

  const handleLogout = () => {
    // Очищаем токен в куки
    Cookies.remove('token', { path: '/login' });
    window.location.href = '/login'
  };

  return (
    <button onClick={handleLogout}>
      Выйти
    </button>
  );
}

export default LogoutButton