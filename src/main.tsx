import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './config/redux/store.ts';
import { FontSizeProvider } from './components/home/FontSizeContext.tsx';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './variables/Toast.tsx';
import { ErrorBoundary } from "react-error-boundary";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Provider store={store}>
      <Toast />
      <FontSizeProvider>
        <App />
      </FontSizeProvider>
    </Provider>
    </ErrorBoundary>
  </StrictMode>
);
