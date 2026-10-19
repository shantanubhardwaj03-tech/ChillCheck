// Vercel version of /api/docs (the same code Netlify runs)
import handler from "../netlify/functions/docs.mjs";
import { wrap } from "./_wrap.js";
export const GET = wrap(handler);
