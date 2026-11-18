const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// Temporary public identity until the owner's custom domain is connected.
// Set NEXT_PUBLIC_SITE_URL to the final HTTPS origin at that point.
export const SITE_URL = (configuredSiteUrl || "https://gv8-global-solutions.vercel.app").replace(/\/+$/, "");
export const SITE_NAME = "GV8 Global Solutions";
