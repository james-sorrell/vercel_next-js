const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_2e51b349._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__c75c51b7._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.4.0-canary.128_reac_328c8fcddf36fc86c74632b09435ed18/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.4.0-canary.128_reac_328c8fcddf36fc86c74632b09435ed18/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
