export type CookiesConsent = {
  necessary: true;
  accepted: boolean;
  updatedAt: string;
};

const KEY = "cookies_consent_v1";

export function getCookiesConsent(): CookiesConsent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiesConsent;

    if (parsed.necessary !== true) return null;
    if (typeof parsed.accepted !== "boolean") return null;
    if (typeof parsed.updatedAt !== "string") return null;

    return parsed;
  } catch {
    return null;
  }
}

export function setCookiesConsent(accepted: boolean): CookiesConsent {
  const value: CookiesConsent = {
    necessary: true,
    accepted,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify(value));
  return value;
}

export function clearCookiesConsent() {
  localStorage.removeItem(KEY);
}
