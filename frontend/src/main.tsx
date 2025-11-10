import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./pages/App/App.tsx";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
