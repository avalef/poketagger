import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConvexProvider } from "convex/react";
import { convex } from "./convex";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </StrictMode>
);