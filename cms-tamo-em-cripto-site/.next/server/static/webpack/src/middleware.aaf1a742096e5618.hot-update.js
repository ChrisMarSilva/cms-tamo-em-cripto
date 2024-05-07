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

/***/ "(middleware)/./src/lib/actions/session.ts":
/*!************************************!*\
  !*** ./src/lib/actions/session.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSession: () => (/* binding */ createSession),\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   deleteSession: () => (/* binding */ deleteSession),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server-only */ \"(middleware)/./node_modules/next/dist/compiled/server-only/empty.js\");\n/* harmony import */ var server_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server_only__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\n\n\n\nconst secretKey = process.env.NEXT_SESSION_SECRET;\nconst encodedKey = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_3__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"7d\") // \"10 sec from now\"\n    .sign(encodedKey);\n}\nasync function decrypt(session = \"\") {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify)(session, encodedKey, {\n            algorithms: [\n                \"HS256\"\n            ]\n        });\n        return payload;\n    } catch (error) {\n        console.log(\"Failed to verify session\");\n    }\n}\nasync function getSession() {\n    //const cookie = request.cookies.get(\"session\")?.value\n    const cookie = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get(\"session\")?.value;\n    if (!cookie) return null;\n    const session = await decrypt(cookie);\n    if (!session) return null;\n    return session;\n}\nasync function createSession(token) {\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    const session = await encrypt({\n        token,\n        expiresAt\n    }) // JSON.stringify(token)\n    ;\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().set(\"session\", session, {\n        expires: expiresAt,\n        maxAge: 60 * 60 * 24 * 7,\n        path: \"/\",\n        domain: process.env.HOST ?? \"localhost\",\n        httpOnly: true,\n        secure: true,\n        sameSite: \"lax\"\n    });\n}\nasync function updateSession(request) {\n    const session = await getSession();\n    if (!session) return null;\n    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);\n    session.expires = expiresAt;\n    const response = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    response.cookies.set({\n        name: \"session\",\n        value: await encrypt(session),\n        expires: session.expires,\n        maxAge: 60 * 60 * 24 * 7,\n        path: \"/\",\n        domain: process.env.HOST ?? \"localhost\",\n        httpOnly: true,\n        secure: true,\n        sameSite: \"lax\"\n    });\n    return response;\n// cookies().set('session', session, {\n//   expires: expiresAt,\n//   maxAge: 60 * 60 * 24 * 7, // 1 week\n//   path: '/',\n//   domain: process.env.HOST ?? \"localhost\",\n//   httpOnly: true,\n//   secure: true, // process.env.NODE_ENV === \"production\",\n//   sameSite: 'lax',\n// })\n}\nfunction deleteSession() {\n    //cookies().set(\"session\", \"\", { ...config, maxAge: 0, expires: new Date(0) });\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().delete(\"session\");\n} // export const verifySession = cache(async () => {\n //   const session = await getSession()\n //   if (!session || !session?.token) return null // redirect('/login')\n //   return { isAuth: true, token: session.token }\n // })\n // export const getUserSession = cache(async () => {\n //   const session = await verifySession()\n //   if (!session || !session?.token) return null\n //   const token = session?.token\n //   return jwtDecode(token)\n // })\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hY3Rpb25zL3Nlc3Npb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFHbUM7QUFDakI7QUFDRztBQUd6QyxNQUFNSSxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLG1CQUFtQjtBQUNqRCxNQUFNQyxhQUFhLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ047QUFFckMsZUFBZU8sUUFBUUMsT0FBWTtJQUN4QyxPQUFPLE1BQU0sSUFBSVYseUNBQU9BLENBQUNVLFNBQ3RCQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO0lBQVEsR0FDbENDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsTUFBTSxvQkFBb0I7S0FDNUNDLElBQUksQ0FBQ1Q7QUFDVjtBQUVPLGVBQWVVLFFBQVFDLFVBQThCLEVBQUU7SUFDNUQsSUFBSTtRQUNGLE1BQU0sRUFBRVAsT0FBTyxFQUFFLEdBQUcsTUFBTVQsK0NBQVNBLENBQUNnQixTQUFTWCxZQUFZO1lBQUVZLFlBQVk7Z0JBQUM7YUFBUTtRQUFDO1FBQ2pGLE9BQU9SO0lBQ1QsRUFBRSxPQUFPUyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0FBQ0Y7QUFFTyxlQUFlQztJQUNwQixzREFBc0Q7SUFDdEQsTUFBTUMsU0FBU3hCLHFEQUFPQSxHQUFHeUIsR0FBRyxDQUFDLFlBQVlDO0lBQ3pDLElBQUksQ0FBQ0YsUUFBUSxPQUFPO0lBRXBCLE1BQU1OLFVBQVUsTUFBTUQsUUFBUU87SUFDOUIsSUFBSSxDQUFDTixTQUFTLE9BQU87SUFFckIsT0FBT0E7QUFDVDtBQUVPLGVBQWVTLGNBQWNDLEtBQWE7SUFDL0MsTUFBTUMsWUFBWSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSztJQUMzRCxNQUFNYixVQUFVLE1BQU1SLFFBQVE7UUFBRWtCO1FBQU9DO0lBQVUsR0FBRyx3QkFBd0I7O0lBRTVFN0IscURBQU9BLEdBQUdnQyxHQUFHLENBQUMsV0FBV2QsU0FBUztRQUNoQ2UsU0FBU0o7UUFDVEssUUFBUSxLQUFLLEtBQUssS0FBSztRQUN2QkMsTUFBTTtRQUNOQyxRQUFRaEMsUUFBUUMsR0FBRyxDQUFDZ0MsSUFBSSxJQUFJO1FBQzVCQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsVUFBVTtJQUNaO0FBQ0Y7QUFFTyxlQUFlQyxjQUFjQyxPQUFvQjtJQUN0RCxNQUFNeEIsVUFBVSxNQUFNSztJQUN0QixJQUFJLENBQUNMLFNBQVMsT0FBTztJQUVyQixNQUFNVyxZQUFZLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLO0lBQzNEYixRQUFRZSxPQUFPLEdBQUdKO0lBRWxCLE1BQU1jLFdBQVc1QyxxREFBWUEsQ0FBQzZDLElBQUk7SUFDbENELFNBQVMzQyxPQUFPLENBQUNnQyxHQUFHLENBQUM7UUFDbkJhLE1BQU07UUFDTm5CLE9BQU8sTUFBTWhCLFFBQVFRO1FBQ3JCZSxTQUFTZixRQUFRZSxPQUFPO1FBQ3hCQyxRQUFRLEtBQUssS0FBSyxLQUFLO1FBQ3ZCQyxNQUFNO1FBQ05DLFFBQVFoQyxRQUFRQyxHQUFHLENBQUNnQyxJQUFJLElBQUk7UUFDNUJDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxVQUFVO0lBQ1o7SUFFQSxPQUFPRztBQUdQLHNDQUFzQztBQUN0Qyx3QkFBd0I7QUFDeEIsd0NBQXdDO0FBQ3hDLGVBQWU7QUFDZiw2Q0FBNkM7QUFDN0Msb0JBQW9CO0FBQ3BCLDREQUE0RDtBQUM1RCxxQkFBcUI7QUFDckIsS0FBSztBQUNQO0FBRU8sU0FBU0c7SUFDZCwrRUFBK0U7SUFDL0U5QyxxREFBT0EsR0FBRytDLE1BQU0sQ0FBQztBQUNuQixFQUVBLG1EQUFtRDtDQUNuRCx1Q0FBdUM7Q0FDdkMsdUVBQXVFO0NBRXZFLGtEQUFrRDtDQUNsRCxLQUFLO0NBRUwsb0RBQW9EO0NBQ3BELDBDQUEwQztDQUMxQyxpREFBaUQ7Q0FFakQsaUNBQWlDO0NBQ2pDLDRCQUE0QjtDQUM1QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvYWN0aW9ucy9zZXNzaW9uLnRzPzEwYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzZXJ2ZXItb25seSdcclxuXHJcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xyXG5pbXBvcnQgeyBTaWduSldULCBqd3RWZXJpZnkgfSBmcm9tICdqb3NlJ1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiXHJcblxyXG5jb25zdCBzZWNyZXRLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1NFU1NJT05fU0VDUkVUXHJcbmNvbnN0IGVuY29kZWRLZXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc2VjcmV0S2V5KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY3J5cHQocGF5bG9hZDogYW55KSB7XHJcbiAgcmV0dXJuIGF3YWl0IG5ldyBTaWduSldUKHBheWxvYWQpXHJcbiAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHsgYWxnOiAnSFMyNTYnIH0pXHJcbiAgICAuc2V0SXNzdWVkQXQoKVxyXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKCc3ZCcpIC8vIFwiMTAgc2VjIGZyb20gbm93XCJcclxuICAgIC5zaWduKGVuY29kZWRLZXkpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWNyeXB0KHNlc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnKTogUHJvbWlzZTxhbnk+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkoc2Vzc2lvbiwgZW5jb2RlZEtleSwgeyBhbGdvcml0aG1zOiBbJ0hTMjU2J10gfSlcclxuICAgIHJldHVybiBwYXlsb2FkXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gdmVyaWZ5IHNlc3Npb24nKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XHJcbiAgLy9jb25zdCBjb29raWUgPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwic2Vzc2lvblwiKT8udmFsdWVcclxuICBjb25zdCBjb29raWUgPSBjb29raWVzKCkuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlXHJcbiAgaWYgKCFjb29raWUpIHJldHVybiBudWxsXHJcblxyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBkZWNyeXB0KGNvb2tpZSlcclxuICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsXHJcblxyXG4gIHJldHVybiBzZXNzaW9uXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKHRva2VuOiBzdHJpbmcpIHtcclxuICBjb25zdCBleHBpcmVzQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGVuY3J5cHQoeyB0b2tlbiwgZXhwaXJlc0F0IH0pIC8vIEpTT04uc3RyaW5naWZ5KHRva2VuKVxyXG5cclxuICBjb29raWVzKCkuc2V0KCdzZXNzaW9uJywgc2Vzc2lvbiwge1xyXG4gICAgZXhwaXJlczogZXhwaXJlc0F0LFxyXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuSE9TVCA/PyBcImxvY2FsaG9zdFwiLFxyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBzZWN1cmU6IHRydWUsIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsXHJcblxyXG4gIGNvbnN0IGV4cGlyZXNBdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICBzZXNzaW9uLmV4cGlyZXMgPSBleHBpcmVzQXRcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbiAgcmVzcG9uc2UuY29va2llcy5zZXQoe1xyXG4gICAgbmFtZTogXCJzZXNzaW9uXCIsIFxyXG4gICAgdmFsdWU6IGF3YWl0IGVuY3J5cHQoc2Vzc2lvbiksIFxyXG4gICAgZXhwaXJlczogc2Vzc2lvbi5leHBpcmVzLFxyXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcclxuICAgIHBhdGg6IFwiL1wiLCBcclxuICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuSE9TVCA/PyBcImxvY2FsaG9zdFwiLFxyXG4gICAgaHR0cE9ubHk6IHRydWUsIFxyXG4gICAgc2VjdXJlOiB0cnVlLCBcclxuICAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICB9KVxyXG4gIFxyXG4gIHJldHVybiByZXNwb25zZVxyXG5cclxuICBcclxuICAvLyBjb29raWVzKCkuc2V0KCdzZXNzaW9uJywgc2Vzc2lvbiwge1xyXG4gIC8vICAgZXhwaXJlczogZXhwaXJlc0F0LFxyXG4gIC8vICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcclxuICAvLyAgIHBhdGg6ICcvJyxcclxuICAvLyAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuSE9TVCA/PyBcImxvY2FsaG9zdFwiLFxyXG4gIC8vICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgLy8gICBzZWN1cmU6IHRydWUsIC8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAvLyAgIHNhbWVTaXRlOiAnbGF4JyxcclxuICAvLyB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2Vzc2lvbigpIHtcclxuICAvL2Nvb2tpZXMoKS5zZXQoXCJzZXNzaW9uXCIsIFwiXCIsIHsgLi4uY29uZmlnLCBtYXhBZ2U6IDAsIGV4cGlyZXM6IG5ldyBEYXRlKDApIH0pO1xyXG4gIGNvb2tpZXMoKS5kZWxldGUoJ3Nlc3Npb24nKVxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgdmVyaWZ5U2Vzc2lvbiA9IGNhY2hlKGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcbi8vICAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uPy50b2tlbikgcmV0dXJuIG51bGwgLy8gcmVkaXJlY3QoJy9sb2dpbicpXHJcblxyXG4vLyAgIHJldHVybiB7IGlzQXV0aDogdHJ1ZSwgdG9rZW46IHNlc3Npb24udG9rZW4gfVxyXG4vLyB9KVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFVzZXJTZXNzaW9uID0gY2FjaGUoYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCB2ZXJpZnlTZXNzaW9uKClcclxuLy8gICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24/LnRva2VuKSByZXR1cm4gbnVsbFxyXG5cclxuLy8gICBjb25zdCB0b2tlbiA9IHNlc3Npb24/LnRva2VuXHJcbi8vICAgcmV0dXJuIGp3dERlY29kZSh0b2tlbilcclxuLy8gfSlcclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvb2tpZXMiLCJTaWduSldUIiwiand0VmVyaWZ5Iiwic2VjcmV0S2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfU0VTU0lPTl9TRUNSRVQiLCJlbmNvZGVkS2V5IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJlbmNyeXB0IiwicGF5bG9hZCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldElzc3VlZEF0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwiZGVjcnlwdCIsInNlc3Npb24iLCJhbGdvcml0aG1zIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2Vzc2lvbiIsImNvb2tpZSIsImdldCIsInZhbHVlIiwiY3JlYXRlU2Vzc2lvbiIsInRva2VuIiwiZXhwaXJlc0F0IiwiRGF0ZSIsIm5vdyIsInNldCIsImV4cGlyZXMiLCJtYXhBZ2UiLCJwYXRoIiwiZG9tYWluIiwiSE9TVCIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJ1cGRhdGVTZXNzaW9uIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibmV4dCIsIm5hbWUiLCJkZWxldGVTZXNzaW9uIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/actions/session.ts\n");

/***/ })

});