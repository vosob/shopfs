import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

import App from "./pages/App/App.tsx";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/contextAuth";
import { BasketContextProvider } from "./context/contextBasket.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 5 * 60 * 1000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BasketContextProvider>
          <BrowserRouter>
            <App />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 2000,
              }}
            />
          </BrowserRouter>
        </BasketContextProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
