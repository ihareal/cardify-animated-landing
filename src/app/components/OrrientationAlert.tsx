// components/OrientationAlert.js
'use client';
import { useEffect } from 'react';

const OrientationAlert = () => {
  useEffect(() => {
    const checkOrientation = () => {
      if (
        window.matchMedia('(orientation: landscape)').matches &&
        window.innerWidth <= 1020
      ) {
        alert('Пожалуйста, поверните устройство обратно в портретный режим.');
      }
    };

    if (typeof window === 'undefined') {
      return;
    }

    // Initial check
    checkOrientation();

    // Event listener for orientation changes
    window.addEventListener('orientationchange', checkOrientation);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default OrientationAlert;
