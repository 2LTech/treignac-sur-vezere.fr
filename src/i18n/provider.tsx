"use client";

import { createContext, useContext, useMemo } from "react";

import { Locale, localizeHref } from "./config";
import { getDictionary } from "./index";
import { Dictionary } from "./types";

interface I18nContextValue {
  /** Current locale */
  locale: Locale;
  /** Dictionary for the current locale */
  t: Dictionary;
  /** Prefix a path with the current locale */
  href: (path: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * I18n provider
 * @param props Props
 * @returns I18nProvider
 */
export const I18nProvider: React.FunctionComponent<{
  locale: Locale;
  children: React.ReactNode;
}> = ({ locale, children }) => {
  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: getDictionary(locale),
      href: (path: string) => localizeHref(locale, path),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

/**
 * Use i18n
 * @returns I18n context (locale, dictionary, href helper)
 */
export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within an I18nProvider");
  return context;
};
