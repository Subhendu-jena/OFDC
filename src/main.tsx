import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// import { Provider } from 'react-redux';
// import { store } from './config/redux/store.ts';
import { FontSizeProvider } from './components/home/FontSizeContext.tsx';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './variables/Toast.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryy from './components/home/ErrorBoundary.tsx';
// import { AuthProvider } from './config/authContext.tsx';
createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorBoundaryy}>
      {/* <Provider store={store}> */}
        <Toast />
        {/* <AuthProvider> */}
          <FontSizeProvider>
            <App />
          </FontSizeProvider>
        {/* </AuthProvider> */}
      {/* </Provider> */}
    </ErrorBoundary>
  </StrictMode>
);
