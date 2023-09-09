'use client'
// components/ProtectedRoute.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '../utils/authService.js';

const ProtectedRoute = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn()) {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default ProtectedRoute;
