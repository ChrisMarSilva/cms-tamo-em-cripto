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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ \"(middleware)/./src/lib/actions/session.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\"use server\";\n//import { cookies } from 'next/headers'\n\n\nasync function updateSession(request) {\n    const session = await (0,_session__WEBPACK_IMPORTED_MODULE_0__.getSession)();\n    if (!session) return null;\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    session.expires = expiresAt;\n    const response = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    response.cookies.set({\n        name: \"session\",\n        value: await (0,_session__WEBPACK_IMPORTED_MODULE_0__.encrypt)(session),\n        httpOnly: true,\n        expires: session.expires\n    });\n    return response;\n// cookies().set('session', session, {\n//   expires: expiresAt,\n//   maxAge: 60 * 60 * 24 * 7, // 1 week\n//   path: '/',\n//   domain: process.env.HOST ?? \"localhost\",\n//   httpOnly: true,\n//   secure: true, // process.env.NODE_ENV === \"production\",\n//   sameSite: 'lax',\n// })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hY3Rpb25zL3Nlc3Npb24tdXBkYXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsd0NBQXdDO0FBQ087QUFDUTtBQUVoRCxlQUFlRyxjQUFjQyxPQUFvQjtJQUN0RCxNQUFNQyxVQUFVLE1BQU1MLG9EQUFVQTtJQUNoQyxJQUFJLENBQUNLLFNBQVMsT0FBTztJQUVyQixNQUFNQyxZQUFZLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLO0lBQzNESCxRQUFRSSxPQUFPLEdBQUdIO0lBRWxCLE1BQU1JLFdBQVdSLHFEQUFZQSxDQUFDUyxJQUFJO0lBQ2xDRCxTQUFTRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUNuQkMsTUFBTTtRQUFXQyxPQUFPLE1BQU1kLGlEQUFPQSxDQUFDSTtRQUFVVyxVQUFVO1FBQU1QLFNBQVNKLFFBQVFJLE9BQU87SUFBQTtJQUMxRixPQUFPQztBQUdQLHNDQUFzQztBQUN0Qyx3QkFBd0I7QUFDeEIsd0NBQXdDO0FBQ3hDLGVBQWU7QUFDZiw2Q0FBNkM7QUFDN0Msb0JBQW9CO0FBQ3BCLDREQUE0RDtBQUM1RCxxQkFBcUI7QUFDckIsS0FBSztBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvYWN0aW9ucy9zZXNzaW9uLXVwZGF0ZS50cz8xMTY2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xyXG5cclxuLy9pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBlbmNyeXB0IH0gZnJvbSAnLi9zZXNzaW9uJ1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxyXG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIG51bGxcclxuXHJcbiAgY29uc3QgZXhwaXJlc0F0ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxyXG4gIHNlc3Npb24uZXhwaXJlcyA9IGV4cGlyZXNBdFxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5uZXh0KClcclxuICByZXNwb25zZS5jb29raWVzLnNldCh7XHJcbiAgICBuYW1lOiBcInNlc3Npb25cIiwgdmFsdWU6IGF3YWl0IGVuY3J5cHQoc2Vzc2lvbiksIGh0dHBPbmx5OiB0cnVlLCBleHBpcmVzOiBzZXNzaW9uLmV4cGlyZXN9KVxyXG4gIHJldHVybiByZXNwb25zZVxyXG5cclxuICBcclxuICAvLyBjb29raWVzKCkuc2V0KCdzZXNzaW9uJywgc2Vzc2lvbiwge1xyXG4gIC8vICAgZXhwaXJlczogZXhwaXJlc0F0LFxyXG4gIC8vICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcclxuICAvLyAgIHBhdGg6ICcvJyxcclxuICAvLyAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuSE9TVCA/PyBcImxvY2FsaG9zdFwiLFxyXG4gIC8vICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgLy8gICBzZWN1cmU6IHRydWUsIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAvLyAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICAvLyB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwiZW5jcnlwdCIsIk5leHRSZXNwb25zZSIsInVwZGF0ZVNlc3Npb24iLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsImV4cGlyZXNBdCIsIkRhdGUiLCJub3ciLCJleHBpcmVzIiwicmVzcG9uc2UiLCJuZXh0IiwiY29va2llcyIsInNldCIsIm5hbWUiLCJ2YWx1ZSIsImh0dHBPbmx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/actions/session-update.ts\n");

/***/ })

});