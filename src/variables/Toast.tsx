import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toast: React.FC = () => {
  return (
    <>
      {/* Your app components */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Toast;