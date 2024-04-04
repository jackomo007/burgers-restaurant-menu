export const language = navigator.language.split(/[-_]/)[0];

export const currency = language === "pt" ? "BRL" : "USD";
