// components/OrientationAlert.js
import { useEffect } from 'react';

const OrientationAlert = () => {
  useEffect(() => {
    const checkOrientation = () => {
      if (window.matchMedia('(orientation: landscape)').matches) {
        alert('Пожалуйста, поверните устройство обратно в портретный режим.');
      }
    };

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
