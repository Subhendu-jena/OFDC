import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './config/redux/store.ts';
import { FontSizeProvider } from './components/home/FontSizeContext.tsx';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './variables/Toast.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toast />
      <FontSizeProvider>
        <App />
      </FontSizeProvider>
    </Provider>
  </StrictMode>
);
