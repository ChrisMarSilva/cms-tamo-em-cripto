"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _lib_actions_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/actions/session */ \"(middleware)/./src/lib/actions/session.ts\");\n\n\n//import { getUserMe } from \"@/lib/services/user-service\"\nasync function middleware(req) {\n    // 1. Specify protected and public routes\n    const protectedRoutes = [\n        \"/dashboard\"\n    ];\n    const publicRoutes = [\n        \"/\",\n        \"/signup\",\n        \"/signin\"\n    ];\n    // 2. Check if the current route is protected or public\n    const path = req.nextUrl.pathname;\n    const isProtectedRoute = protectedRoutes.includes(path);\n    const isPublicRoute = publicRoutes.includes(path);\n    // 3. Decrypt the session from the cookie\n    // const cookie = cookies().get('session')?.value\n    // const session = cookie ?  await decrypt(cookie) : null\n    const session = await (0,_lib_actions_session__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n    // 5. Redirect to /signin if the user is not authenticated\n    if (isProtectedRoute && !session?.token) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/signin\", req.nextUrl));\n    // 6. Redirect to /dashboard if the user is authenticated\n    if (isPublicRoute && session?.token && !req.nextUrl.pathname.startsWith(\"/dashboard\")) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/dashboard\", req.nextUrl));\n    // const user = await getUserMe()\n    // const currentPath = request.nextUrl.pathname\n    // if (currentPath.startsWith(\"/dashboard\") && user.ok === false) return NextResponse.redirect(new URL(\"/signin\", request.url))\n    return await (0,_lib_actions_session__WEBPACK_IMPORTED_MODULE_1__.updateSession)(req);\n//return NextResponse.next()\n}\n// Routes Middleware should not run on\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|favicon.ico|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUVrQztBQUN6Rix5REFBeUQ7QUFFMUMsZUFBZUcsV0FBV0MsR0FBZ0I7SUFFckQseUNBQXlDO0lBQzNDLE1BQU1DLGtCQUFrQjtRQUFDO0tBQWE7SUFDdEMsTUFBTUMsZUFBZTtRQUFFO1FBQUk7UUFBVTtLQUFVO0lBRS9DLHVEQUF1RDtJQUN2RCxNQUFNQyxPQUFPSCxJQUFJSSxPQUFPLENBQUNDLFFBQVE7SUFDakMsTUFBTUMsbUJBQW1CTCxnQkFBZ0JNLFFBQVEsQ0FBQ0o7SUFDbEQsTUFBTUssZ0JBQWdCTixhQUFhSyxRQUFRLENBQUNKO0lBRTVDLHlDQUF5QztJQUN6QyxpREFBaUQ7SUFDakQseURBQXlEO0lBQ3pELE1BQU1NLFVBQVUsTUFBTVosZ0VBQVVBO0lBRWhDLDBEQUEwRDtJQUMxRCxJQUFJUyxvQkFBb0IsQ0FBQ0csU0FBU0MsT0FBTyxPQUFPZCxxREFBWUEsQ0FBQ2UsUUFBUSxDQUFDLElBQUlDLElBQUksV0FBV1osSUFBSUksT0FBTztJQUVwRyx5REFBeUQ7SUFDekQsSUFBSUksaUJBQWlCQyxTQUFTQyxTQUFTLENBQUNWLElBQUlJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDUSxVQUFVLENBQUMsZUFBZSxPQUFPakIscURBQVlBLENBQUNlLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGNBQWNaLElBQUlJLE9BQU87SUFFckosaUNBQWlDO0lBQ2pDLCtDQUErQztJQUMvQywrSEFBK0g7SUFFL0gsT0FBTyxNQUFNTixtRUFBYUEsQ0FBQ0U7QUFDM0IsNEJBQTRCO0FBQzlCO0FBRUEsc0NBQXNDO0FBQy9CLE1BQU1jLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUE4RDtBQUMxRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xyXG5pbXBvcnQgeyBkZWNyeXB0LCBnZXRTZXNzaW9uLCB2ZXJpZnlTZXNzaW9uLCB1cGRhdGVTZXNzaW9uIH0gZnJvbSAnQC9saWIvYWN0aW9ucy9zZXNzaW9uJ1xyXG4vL2ltcG9ydCB7IGdldFVzZXJNZSB9IGZyb20gXCJAL2xpYi9zZXJ2aWNlcy91c2VyLXNlcnZpY2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG4gICAgLy8gMS4gU3BlY2lmeSBwcm90ZWN0ZWQgYW5kIHB1YmxpYyByb3V0ZXNcclxuICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbJy9kYXNoYm9hcmQnXVxyXG4gIGNvbnN0IHB1YmxpY1JvdXRlcyA9IFsgJy8nLCcvc2lnbnVwJywnL3NpZ25pbiddXHJcblxyXG4gIC8vIDIuIENoZWNrIGlmIHRoZSBjdXJyZW50IHJvdXRlIGlzIHByb3RlY3RlZCBvciBwdWJsaWNcclxuICBjb25zdCBwYXRoID0gcmVxLm5leHRVcmwucGF0aG5hbWVcclxuICBjb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gcHJvdGVjdGVkUm91dGVzLmluY2x1ZGVzKHBhdGgpXHJcbiAgY29uc3QgaXNQdWJsaWNSb3V0ZSA9IHB1YmxpY1JvdXRlcy5pbmNsdWRlcyhwYXRoKVxyXG5cclxuICAvLyAzLiBEZWNyeXB0IHRoZSBzZXNzaW9uIGZyb20gdGhlIGNvb2tpZVxyXG4gIC8vIGNvbnN0IGNvb2tpZSA9IGNvb2tpZXMoKS5nZXQoJ3Nlc3Npb24nKT8udmFsdWVcclxuICAvLyBjb25zdCBzZXNzaW9uID0gY29va2llID8gIGF3YWl0IGRlY3J5cHQoY29va2llKSA6IG51bGxcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcblxyXG4gIC8vIDUuIFJlZGlyZWN0IHRvIC9zaWduaW4gaWYgdGhlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcclxuICBpZiAoaXNQcm90ZWN0ZWRSb3V0ZSAmJiAhc2Vzc2lvbj8udG9rZW4pIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3NpZ25pbicsIHJlcS5uZXh0VXJsKSlcclxuXHJcbiAgLy8gNi4gUmVkaXJlY3QgdG8gL2Rhc2hib2FyZCBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXHJcbiAgaWYgKGlzUHVibGljUm91dGUgJiYgc2Vzc2lvbj8udG9rZW4gJiYgIXJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9kYXNoYm9hcmQnKSkgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvZGFzaGJvYXJkJywgcmVxLm5leHRVcmwpKVxyXG5cclxuICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlck1lKClcclxuICAvLyBjb25zdCBjdXJyZW50UGF0aCA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZVxyXG4gIC8vIGlmIChjdXJyZW50UGF0aC5zdGFydHNXaXRoKFwiL2Rhc2hib2FyZFwiKSAmJiB1c2VyLm9rID09PSBmYWxzZSkgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3NpZ25pblwiLCByZXF1ZXN0LnVybCkpXHJcblxyXG4gIHJldHVybiBhd2FpdCB1cGRhdGVTZXNzaW9uKHJlcSlcclxuICAvL3JldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbn1cclxuXHJcbi8vIFJvdXRlcyBNaWRkbGV3YXJlIHNob3VsZCBub3QgcnVuIG9uXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8ZmF2aWNvbi5pY298LipcXFxcLnBuZyQpLiopJ10sXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlc3Npb24iLCJ1cGRhdGVTZXNzaW9uIiwibWlkZGxld2FyZSIsInJlcSIsInByb3RlY3RlZFJvdXRlcyIsInB1YmxpY1JvdXRlcyIsInBhdGgiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJpc1Byb3RlY3RlZFJvdXRlIiwiaW5jbHVkZXMiLCJpc1B1YmxpY1JvdXRlIiwic2Vzc2lvbiIsInRva2VuIiwicmVkaXJlY3QiLCJVUkwiLCJzdGFydHNXaXRoIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});