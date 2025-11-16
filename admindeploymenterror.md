2025-11-16T08:52:27.447Z	Initializing build environment...
2025-11-16T08:53:27.091Z	Success: Finished initializing build environment
2025-11-16T08:53:27.467Z	Cloning repository...
2025-11-16T08:53:28.531Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-16T08:53:28.532Z	Restoring from dependencies cache
2025-11-16T08:53:28.538Z	Restoring from build output cache
2025-11-16T08:53:28.918Z	Installing project dependencies: npm clean-install --progress=false
2025-11-16T08:53:33.942Z	
2025-11-16T08:53:33.943Z	added 243 packages, and audited 244 packages in 5s
2025-11-16T08:53:33.943Z	
2025-11-16T08:53:33.943Z	45 packages are looking for funding
2025-11-16T08:53:33.943Z	  run `npm fund` for details
2025-11-16T08:53:33.948Z	
2025-11-16T08:53:33.948Z	2 moderate severity vulnerabilities
2025-11-16T08:53:33.948Z	
2025-11-16T08:53:33.948Z	To address all issues (including breaking changes), run:
2025-11-16T08:53:33.948Z	  npm audit fix --force
2025-11-16T08:53:33.949Z	
2025-11-16T08:53:33.949Z	Run `npm audit` for details.
2025-11-16T08:53:34.169Z	Executing user build command: npm run build
2025-11-16T08:53:34.363Z	
2025-11-16T08:53:34.363Z	> iba-cleaning-admin@1.0.0 build
2025-11-16T08:53:34.363Z	> tsc && vite build
2025-11-16T08:53:34.363Z	
2025-11-16T08:53:36.264Z	The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
2025-11-16T08:53:36.304Z	vite v5.4.21 building for production...
2025-11-16T08:53:36.350Z	transforming...
2025-11-16T08:53:36.556Z	(node:728) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///opt/buildhome/repo/admin/postcss.config.js is not specified and it doesn't parse as CommonJS.
2025-11-16T08:53:36.556Z	Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
2025-11-16T08:53:36.558Z	To eliminate this warning, add "type": "module" to /opt/buildhome/repo/admin/package.json.
2025-11-16T08:53:36.558Z	(Use `node --trace-warnings ...` to show where the warning was created)
2025-11-16T08:53:39.178Z	✓ 846 modules transformed.
2025-11-16T08:53:39.645Z	rendering chunks...
2025-11-16T08:53:39.655Z	computing gzip size...
2025-11-16T08:53:42.705Z	dist/index.html                   0.47 kB │ gzip:   0.30 kB
2025-11-16T08:53:42.705Z	dist/assets/index-BiAxsRfG.css   18.00 kB │ gzip:   3.83 kB
2025-11-16T08:53:42.706Z	dist/assets/index-BEHIGGvs.js   618.40 kB │ gzip: 175.00 kB
2025-11-16T08:53:42.706Z	
2025-11-16T08:53:42.706Z	(!) Some chunks are larger than 500 kB after minification. Consider:
2025-11-16T08:53:42.706Z	- Using dynamic import() to code-split the application
2025-11-16T08:53:42.706Z	- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
2025-11-16T08:53:42.706Z	- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
2025-11-16T08:53:42.706Z	✓ built in 6.38s
2025-11-16T08:53:42.749Z	Success: Build command completed
2025-11-16T08:53:42.904Z	Executing user deploy command: npx wrangler deploy
2025-11-16T08:53:43.718Z	npm warn exec The following package was not found and will be installed: wrangler@4.47.0
2025-11-16T08:53:53.374Z	
2025-11-16T08:53:53.374Z	 ⛅️ wrangler 4.47.0
2025-11-16T08:53:53.374Z	───────────────────
2025-11-16T08:53:53.387Z	
2025-11-16T08:53:53.446Z	✘ [ERROR] Missing entry-point to Worker script or to assets directory
2025-11-16T08:53:53.446Z	
2025-11-16T08:53:53.447Z	  
2025-11-16T08:53:53.447Z	  If there is code to deploy, you can either:
2025-11-16T08:53:53.447Z	  - Specify an entry-point to your Worker script via the command line (ex: `npx wrangler deploy src/index.ts`)
2025-11-16T08:53:53.447Z	  - Or create a "wrangler.jsonc" file containing:
2025-11-16T08:53:53.447Z	  
2025-11-16T08:53:53.447Z	  ```
2025-11-16T08:53:53.447Z	  {
2025-11-16T08:53:53.447Z	    "name": "worker-name",
2025-11-16T08:53:53.447Z	    "compatibility_date": "2025-11-16",
2025-11-16T08:53:53.448Z	    "main": "src/index.ts"
2025-11-16T08:53:53.450Z	  }
2025-11-16T08:53:53.450Z	  ```
2025-11-16T08:53:53.450Z	  
2025-11-16T08:53:53.450Z	  
2025-11-16T08:53:53.450Z	  If are uploading a directory of assets, you can either:
2025-11-16T08:53:53.451Z	  - Specify the path to the directory of assets via the command line: (ex: `npx wrangler deploy --assets=./dist`)
2025-11-16T08:53:53.451Z	  - Or create a "wrangler.jsonc" file containing:
2025-11-16T08:53:53.451Z	  
2025-11-16T08:53:53.451Z	  ```
2025-11-16T08:53:53.451Z	  {
2025-11-16T08:53:53.451Z	    "name": "worker-name",
2025-11-16T08:53:53.451Z	    "compatibility_date": "2025-11-16",
2025-11-16T08:53:53.451Z	    "assets": {
2025-11-16T08:53:53.451Z	      "directory": "./dist"
2025-11-16T08:53:53.451Z	    }
2025-11-16T08:53:53.451Z	  }
2025-11-16T08:53:53.451Z	  ```
2025-11-16T08:53:53.451Z	  
2025-11-16T08:53:53.452Z	
2025-11-16T08:53:53.452Z	
2025-11-16T08:53:53.467Z	
2025-11-16T08:53:53.467Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2025-11-16T08:53:53.479Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2025-11-16_08-53-52_790.log"
2025-11-16T08:53:53.584Z	Failed: error occurred while running deploy command