const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// The apex currently redirects to www; keep every search identity URL on that final host.
export const SITE_URL = (configuredSiteUrl || "https://www.gv8global.com").replace(/\/+$/, "");
export const SITE_NAME = "GV8 Global Solutions";
