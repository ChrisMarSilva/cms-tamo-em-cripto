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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ \"(middleware)/./src/lib/actions/session.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\"use server\";\n//import { cookies } from 'next/headers'\n\n\nasync function updateSession(request) {\n    const session = await (0,_session__WEBPACK_IMPORTED_MODULE_0__.getSession)();\n    if (!session) return null;\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    session.expires = expiresAt;\n    const response = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    response.cookies.set({\n        name: \"session\",\n        value: await (0,_session__WEBPACK_IMPORTED_MODULE_0__.encrypt)(session),\n        httpOnly: true,\n        expires: session.expires\n    });\n    return response;\n// cookies().set('session', session, {\n//   expires: expiresAt,\n//   maxAge: 60 * 60 * 24 * 7, // 1 week\n//   path: '/',\n//   domain: process.env.HOST ?? \"localhost\",\n//   httpOnly: true,\n//   secure: true, // process.env.NODE_ENV === \"production\",\n//   sameSite: 'lax',\n// })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hY3Rpb25zL3Nlc3Npb24tdXBkYXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsd0NBQXdDO0FBQ087QUFDUTtBQUVoRCxlQUFlRyxjQUFjQyxPQUFvQjtJQUN0RCxNQUFNQyxVQUFVLE1BQU1MLG9EQUFVQTtJQUNoQyxJQUFJLENBQUNLLFNBQVMsT0FBTztJQUVyQixNQUFNQyxZQUFZLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLO0lBQzNESCxRQUFRSSxPQUFPLEdBQUdIO0lBRWxCLE1BQU1JLFdBQVdSLHFEQUFZQSxDQUFDUyxJQUFJO0lBQ2xDRCxTQUFTRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUNuQkMsTUFBTTtRQUNOQyxPQUFPLE1BQU1kLGlEQUFPQSxDQUFDSTtRQUNyQlcsVUFBVTtRQUNWUCxTQUFTSixRQUFRSSxPQUFPO0lBQUE7SUFDMUIsT0FBT0M7QUFHUCxzQ0FBc0M7QUFDdEMsd0JBQXdCO0FBQ3hCLHdDQUF3QztBQUN4QyxlQUFlO0FBQ2YsNkNBQTZDO0FBQzdDLG9CQUFvQjtBQUNwQiw0REFBNEQ7QUFDNUQscUJBQXFCO0FBQ3JCLEtBQUs7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2FjdGlvbnMvc2Vzc2lvbi11cGRhdGUudHM/MTE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbi8vaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgZW5jcnlwdCB9IGZyb20gJy4vc2Vzc2lvbidcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsXHJcblxyXG4gIGNvbnN0IGV4cGlyZXNBdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICBzZXNzaW9uLmV4cGlyZXMgPSBleHBpcmVzQXRcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbiAgcmVzcG9uc2UuY29va2llcy5zZXQoe1xyXG4gICAgbmFtZTogXCJzZXNzaW9uXCIsIFxyXG4gICAgdmFsdWU6IGF3YWl0IGVuY3J5cHQoc2Vzc2lvbiksIFxyXG4gICAgaHR0cE9ubHk6IHRydWUsIFxyXG4gICAgZXhwaXJlczogc2Vzc2lvbi5leHBpcmVzfSlcclxuICByZXR1cm4gcmVzcG9uc2VcclxuXHJcbiAgXHJcbiAgLy8gY29va2llcygpLnNldCgnc2Vzc2lvbicsIHNlc3Npb24sIHtcclxuICAvLyAgIGV4cGlyZXM6IGV4cGlyZXNBdCxcclxuICAvLyAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gMSB3ZWVrXHJcbiAgLy8gICBwYXRoOiAnLycsXHJcbiAgLy8gICBkb21haW46IHByb2Nlc3MuZW52LkhPU1QgPz8gXCJsb2NhbGhvc3RcIixcclxuICAvLyAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gIC8vICAgc2VjdXJlOiB0cnVlLCAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgLy8gICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgLy8gfSlcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImVuY3J5cHQiLCJOZXh0UmVzcG9uc2UiLCJ1cGRhdGVTZXNzaW9uIiwicmVxdWVzdCIsInNlc3Npb24iLCJleHBpcmVzQXQiLCJEYXRlIiwibm93IiwiZXhwaXJlcyIsInJlc3BvbnNlIiwibmV4dCIsImNvb2tpZXMiLCJzZXQiLCJuYW1lIiwidmFsdWUiLCJodHRwT25seSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/actions/session-update.ts\n");

/***/ })

});