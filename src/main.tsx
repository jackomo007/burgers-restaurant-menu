import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./store.ts";
import "./index.css";
import { IntlProvider } from "react-intl";

interface Messages {
  [key: string]: {
    [key: string]: string;
  };
}

import messages_en from "./intl/locales/en.json";
import messages_pt from "./intl/locales/pt.json";
import { language } from "./utils/index.tsx";

const messages: Messages = {
  en: messages_en,
  pt: messages_pt,
};
const currentMessages = messages[language] || messages.en;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={currentMessages}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>
);
