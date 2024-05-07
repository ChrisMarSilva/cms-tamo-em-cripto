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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var _lib_actions_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/actions/session */ \"(middleware)/./src/lib/actions/session.ts\");\n\n\n\n//import { getUserMe } from \"@/lib/services/user-service\"\nasync function middleware(req) {\n    // 1. Specify protected and public routes\n    const protectedRoutes = [\n        \"/dashboard\"\n    ];\n    const publicRoutes = [\n        \"/\",\n        \"/signup\",\n        \"/signin\"\n    ];\n    // 2. Check if the current route is protected or public\n    const path = req.nextUrl.pathname;\n    const isProtectedRoute = protectedRoutes.includes(path);\n    const isPublicRoute = publicRoutes.includes(path);\n    // 3. Decrypt the session from the cookie\n    const cookie = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"session\")?.value;\n    const session = cookie ? await (0,_lib_actions_session__WEBPACK_IMPORTED_MODULE_2__.decrypt)(cookie) : null;\n    // 5. Redirect to /signin if the user is not authenticated\n    if (isProtectedRoute && !session?.token) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/signin\", req.nextUrl));\n    // 6. Redirect to /dashboard if the user is authenticated\n    if (isPublicRoute && session?.token && !req.nextUrl.pathname.startsWith(\"/dashboard\")) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/dashboard\", req.nextUrl));\n    // const user = await getUserMe()\n    // const currentPath = request.nextUrl.pathname\n    // if (currentPath.startsWith(\"/dashboard\") && user.ok === false) return NextResponse.redirect(new URL(\"/signin\", request.url))\n    return await (0,_lib_actions_session__WEBPACK_IMPORTED_MODULE_2__.updateSession)(req);\n//return NextResponse.next()\n}\n// Routes Middleware should not run on\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|favicon.ico|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDakI7QUFDd0I7QUFDOUQseURBQXlEO0FBRTFDLGVBQWVJLFdBQVdDLEdBQWdCO0lBRXJELHlDQUF5QztJQUMzQyxNQUFNQyxrQkFBa0I7UUFBQztLQUFhO0lBQ3RDLE1BQU1DLGVBQWU7UUFBRTtRQUFJO1FBQVU7S0FBVTtJQUUvQyx1REFBdUQ7SUFDdkQsTUFBTUMsT0FBT0gsSUFBSUksT0FBTyxDQUFDQyxRQUFRO0lBQ2pDLE1BQU1DLG1CQUFtQkwsZ0JBQWdCTSxRQUFRLENBQUNKO0lBQ2xELE1BQU1LLGdCQUFnQk4sYUFBYUssUUFBUSxDQUFDSjtJQUU1Qyx5Q0FBeUM7SUFDekMsTUFBTU0sU0FBU2IscURBQU9BLEdBQUdjLEdBQUcsQ0FBQyxZQUFZQztJQUN6QyxNQUFNQyxVQUFVSCxTQUFVLE1BQU1aLDZEQUFPQSxDQUFDWSxVQUFVO0lBRWxELDBEQUEwRDtJQUMxRCxJQUFJSCxvQkFBb0IsQ0FBQ00sU0FBU0MsT0FBTyxPQUFPbEIscURBQVlBLENBQUNtQixRQUFRLENBQUMsSUFBSUMsSUFBSSxXQUFXZixJQUFJSSxPQUFPO0lBRXBHLHlEQUF5RDtJQUN6RCxJQUFJSSxpQkFBaUJJLFNBQVNDLFNBQVMsQ0FBQ2IsSUFBSUksT0FBTyxDQUFDQyxRQUFRLENBQUNXLFVBQVUsQ0FBQyxlQUFlLE9BQU9yQixxREFBWUEsQ0FBQ21CLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLGNBQWNmLElBQUlJLE9BQU87SUFFckosaUNBQWlDO0lBQ2pDLCtDQUErQztJQUMvQywrSEFBK0g7SUFFL0gsT0FBTyxNQUFNTixtRUFBYUEsQ0FBQ0U7QUFDM0IsNEJBQTRCO0FBQzlCO0FBRUEsc0NBQXNDO0FBQy9CLE1BQU1pQixTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBOEQ7QUFDMUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcclxuaW1wb3J0IHsgZGVjcnlwdCwgdXBkYXRlU2Vzc2lvbiB9IGZyb20gJ0AvbGliL2FjdGlvbnMvc2Vzc2lvbidcclxuLy9pbXBvcnQgeyBnZXRVc2VyTWUgfSBmcm9tIFwiQC9saWIvc2VydmljZXMvdXNlci1zZXJ2aWNlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xyXG5cclxuICAgIC8vIDEuIFNwZWNpZnkgcHJvdGVjdGVkIGFuZCBwdWJsaWMgcm91dGVzXHJcbiAgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gWycvZGFzaGJvYXJkJ11cclxuICBjb25zdCBwdWJsaWNSb3V0ZXMgPSBbICcvJywnL3NpZ251cCcsJy9zaWduaW4nXVxyXG5cclxuICAvLyAyLiBDaGVjayBpZiB0aGUgY3VycmVudCByb3V0ZSBpcyBwcm90ZWN0ZWQgb3IgcHVibGljXHJcbiAgY29uc3QgcGF0aCA9IHJlcS5uZXh0VXJsLnBhdGhuYW1lXHJcbiAgY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9IHByb3RlY3RlZFJvdXRlcy5pbmNsdWRlcyhwYXRoKVxyXG4gIGNvbnN0IGlzUHVibGljUm91dGUgPSBwdWJsaWNSb3V0ZXMuaW5jbHVkZXMocGF0aClcclxuXHJcbiAgLy8gMy4gRGVjcnlwdCB0aGUgc2Vzc2lvbiBmcm9tIHRoZSBjb29raWVcclxuICBjb25zdCBjb29raWUgPSBjb29raWVzKCkuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGNvb2tpZSA/ICBhd2FpdCBkZWNyeXB0KGNvb2tpZSkgOiBudWxsXHJcblxyXG4gIC8vIDUuIFJlZGlyZWN0IHRvIC9zaWduaW4gaWYgdGhlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcclxuICBpZiAoaXNQcm90ZWN0ZWRSb3V0ZSAmJiAhc2Vzc2lvbj8udG9rZW4pIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3NpZ25pbicsIHJlcS5uZXh0VXJsKSlcclxuXHJcbiAgLy8gNi4gUmVkaXJlY3QgdG8gL2Rhc2hib2FyZCBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXHJcbiAgaWYgKGlzUHVibGljUm91dGUgJiYgc2Vzc2lvbj8udG9rZW4gJiYgIXJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9kYXNoYm9hcmQnKSkgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvZGFzaGJvYXJkJywgcmVxLm5leHRVcmwpKVxyXG5cclxuICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlck1lKClcclxuICAvLyBjb25zdCBjdXJyZW50UGF0aCA9IHJlcXVlc3QubmV4dFVybC5wYXRobmFtZVxyXG4gIC8vIGlmIChjdXJyZW50UGF0aC5zdGFydHNXaXRoKFwiL2Rhc2hib2FyZFwiKSAmJiB1c2VyLm9rID09PSBmYWxzZSkgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL3NpZ25pblwiLCByZXF1ZXN0LnVybCkpXHJcblxyXG4gIHJldHVybiBhd2FpdCB1cGRhdGVTZXNzaW9uKHJlcSlcclxuICAvL3JldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbn1cclxuXHJcbi8vIFJvdXRlcyBNaWRkbGV3YXJlIHNob3VsZCBub3QgcnVuIG9uXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8ZmF2aWNvbi5pY298LipcXFxcLnBuZyQpLiopJ10sXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvb2tpZXMiLCJkZWNyeXB0IiwidXBkYXRlU2Vzc2lvbiIsIm1pZGRsZXdhcmUiLCJyZXEiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJwdWJsaWNSb3V0ZXMiLCJwYXRoIiwibmV4dFVybCIsInBhdGhuYW1lIiwiaXNQcm90ZWN0ZWRSb3V0ZSIsImluY2x1ZGVzIiwiaXNQdWJsaWNSb3V0ZSIsImNvb2tpZSIsImdldCIsInZhbHVlIiwic2Vzc2lvbiIsInRva2VuIiwicmVkaXJlY3QiLCJVUkwiLCJzdGFydHNXaXRoIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});