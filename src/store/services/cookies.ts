const APP_COOKIE_SUFFIX = "@EccomerceDashboard:";

function cookieGet(key: string): string | undefined {
  const name = `${APP_COOKIE_SUFFIX}${key}=`;
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookies.split(";");

  for (let cookie of cookiesArray) {
    cookie = cookie.trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }

  return undefined;
}

function cookieSet(
  key: string,
  value: string,
  options?: { expires?: number | Date; path?: string; secure?: boolean }
): void {
  let cookieString = `${APP_COOKIE_SUFFIX}${key}=${encodeURIComponent(value)};`;

  if (options) {
    if (options.expires) {
      const expires =
        typeof options.expires === "number"
          ? new Date(Date.now() + options.expires * 864e5)
          : options.expires;
      cookieString += `expires=${expires.toUTCString()};`;
    }

    if (options.path) {
      cookieString += `path=${options.path};`;
    }

    if (options.secure) {
      cookieString += "secure;";
    }
  }

  document.cookie = cookieString;
}

function cookieDelete(key: string, path?: string): void {
  cookieSet(key, "", { expires: -1, path });
}

function cookieClear(path?: string): void {
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const key = cookie.split("=")[0].trim();
    cookieDelete(key, path);
  });
}

export { cookieGet, cookieSet, cookieDelete, cookieClear };
