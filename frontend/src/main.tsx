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

import { I18nextProvider } from "react-i18next";
import i18n from "./Utils/i18n";

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
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  </StrictMode>
);
