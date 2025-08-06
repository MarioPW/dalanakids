import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserServices } from '../../services/users'
import { MySpinner } from '../utilities/Spinner'

export const ProtectedRoute = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
  
    useEffect(() => {
      const checkAuthorization = async () => {
        const service = new UserServices();
        try {
          const response = await service.checkAuthorization();
          setIsAuthorized(response.message === 'Authorized');
        } catch (error) {
          console.error('Authorization check failed:', error.message);
          setIsAuthorized(false);
        } finally {
          setIsLoading(false);
        }
      };
      checkAuthorization();
    }, []);
  
    if (isLoading) {
      return <MySpinner />;
    }
    return isAuthorized ? <Outlet /> : <Navigate to="/" />;
  }