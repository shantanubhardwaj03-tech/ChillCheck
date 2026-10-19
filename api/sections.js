// Vercel version of /api/sections (the same code Netlify runs)
import handler from "../netlify/functions/sections.mjs";
import { wrap } from "./_wrap.js";
export const GET = wrap(handler);
