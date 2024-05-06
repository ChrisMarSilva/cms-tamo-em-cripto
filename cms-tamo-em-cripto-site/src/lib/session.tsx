import nextSession from "next-session";
export const getSession = nextSession(options);

const secretKey = process.env.SESSION_SECRET