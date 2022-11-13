# Vue 3 + TypeScript + Vite + Wrangler + SSL

This project is just for reproducing https://github.com/cloudflare/wrangler2/issues/1908  
This branch implements a ugly workaroud.  
```sh
#produce a cert chain
npm run create-cert
#run wrangler allowing previously produced CA cert
npm run dev
#browse https://localhost:8788
```
