export function getShopName() {
  const host = window.location.hostname;
  if (host.includes("localhost")) {
    // beautyhub.localhost
    return host.split(".")[0];
  }
  // beautyhub.example.com
  return host.split(".")[0];
}
