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

/***/ "(middleware)/./src/lib/actions/session-update.ts":
/*!*******************************************!*\
  !*** ./src/lib/actions/session-update.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ \"(middleware)/./src/lib/actions/session.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\"use server\";\n//import { cookies } from 'next/headers'\n\n\nasync function updateSession(request) {\n    const session = await (0,_session__WEBPACK_IMPORTED_MODULE_0__.getSession)();\n    if (!session) return null;\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    session.expires = expiresAt;\n    const response = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    response.cookies.set({\n        name: \"session\",\n        value: await (0,_session__WEBPACK_IMPORTED_MODULE_0__.encrypt)(session),\n        expires: session.expires,\n        maxAge: 60 * 60 * 24 * 7,\n        path: \"/\",\n        domain: process.env.HOST ?? \"localhost\",\n        httpOnly: true,\n        secure: true,\n        sameSite: \"lax\"\n    });\n    return response;\n// cookies().set('session', session, {\n//   expires: expiresAt,\n//   maxAge: 60 * 60 * 24 * 7, // 1 week\n//   path: '/',\n//   domain: process.env.HOST ?? \"localhost\",\n//   httpOnly: true,\n//   secure: true, // process.env.NODE_ENV === \"production\",\n//   sameSite: 'lax',\n// })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hY3Rpb25zL3Nlc3Npb24tdXBkYXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsd0NBQXdDO0FBQ087QUFDUTtBQUVoRCxlQUFlRyxjQUFjQyxPQUFvQjtJQUN0RCxNQUFNQyxVQUFVLE1BQU1MLG9EQUFVQTtJQUNoQyxJQUFJLENBQUNLLFNBQVMsT0FBTztJQUVyQixNQUFNQyxZQUFZLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLO0lBQzNESCxRQUFRSSxPQUFPLEdBQUdIO0lBRWxCLE1BQU1JLFdBQVdSLHFEQUFZQSxDQUFDUyxJQUFJO0lBQ2xDRCxTQUFTRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUNuQkMsTUFBTTtRQUNOQyxPQUFPLE1BQU1kLGlEQUFPQSxDQUFDSTtRQUNyQkksU0FBU0osUUFBUUksT0FBTztRQUN4Qk8sUUFBUSxLQUFLLEtBQUssS0FBSztRQUN2QkMsTUFBTTtRQUNOQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLElBQUksSUFBSTtRQUM1QkMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFVBQVU7SUFDWjtJQUVBLE9BQU9kO0FBR1Asc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4Qix3Q0FBd0M7QUFDeEMsZUFBZTtBQUNmLDZDQUE2QztBQUM3QyxvQkFBb0I7QUFDcEIsNERBQTREO0FBQzVELHFCQUFxQjtBQUNyQixLQUFLO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9hY3Rpb25zL3Nlc3Npb24tdXBkYXRlLnRzPzExNjYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG4vL2ltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXHJcbmltcG9ydCB7IGdldFNlc3Npb24sIGVuY3J5cHQgfSBmcm9tICcuL3Nlc3Npb24nXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24ocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gbnVsbFxyXG5cclxuICBjb25zdCBleHBpcmVzQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApXHJcbiAgc2Vzc2lvbi5leHBpcmVzID0gZXhwaXJlc0F0XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gTmV4dFJlc3BvbnNlLm5leHQoKVxyXG4gIHJlc3BvbnNlLmNvb2tpZXMuc2V0KHtcclxuICAgIG5hbWU6IFwic2Vzc2lvblwiLCBcclxuICAgIHZhbHVlOiBhd2FpdCBlbmNyeXB0KHNlc3Npb24pLCBcclxuICAgIGV4cGlyZXM6IHNlc3Npb24uZXhwaXJlcyxcclxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gMSB3ZWVrXHJcbiAgICBwYXRoOiBcIi9cIiwgXHJcbiAgICBkb21haW46IHByb2Nlc3MuZW52LkhPU1QgPz8gXCJsb2NhbGhvc3RcIixcclxuICAgIGh0dHBPbmx5OiB0cnVlLCBcclxuICAgIHNlY3VyZTogdHJ1ZSwgXHJcbiAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgfSlcclxuICBcclxuICByZXR1cm4gcmVzcG9uc2VcclxuXHJcbiAgXHJcbiAgLy8gY29va2llcygpLnNldCgnc2Vzc2lvbicsIHNlc3Npb24sIHtcclxuICAvLyAgIGV4cGlyZXM6IGV4cGlyZXNBdCxcclxuICAvLyAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gMSB3ZWVrXHJcbiAgLy8gICBwYXRoOiAnLycsXHJcbiAgLy8gICBkb21haW46IHByb2Nlc3MuZW52LkhPU1QgPz8gXCJsb2NhbGhvc3RcIixcclxuICAvLyAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gIC8vICAgc2VjdXJlOiB0cnVlLCAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgLy8gICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgLy8gfSlcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImVuY3J5cHQiLCJOZXh0UmVzcG9uc2UiLCJ1cGRhdGVTZXNzaW9uIiwicmVxdWVzdCIsInNlc3Npb24iLCJleHBpcmVzQXQiLCJEYXRlIiwibm93IiwiZXhwaXJlcyIsInJlc3BvbnNlIiwibmV4dCIsImNvb2tpZXMiLCJzZXQiLCJuYW1lIiwidmFsdWUiLCJtYXhBZ2UiLCJwYXRoIiwiZG9tYWluIiwicHJvY2VzcyIsImVudiIsIkhPU1QiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/actions/session-update.ts\n");

/***/ })

});