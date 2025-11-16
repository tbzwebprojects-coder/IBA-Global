2025-11-16T08:51:31.067Z	Initializing build environment...
2025-11-16T08:52:49.926Z	Success: Finished initializing build environment
2025-11-16T08:52:51.894Z	Cloning repository...
2025-11-16T08:52:52.934Z	Restoring from dependencies cache
2025-11-16T08:52:52.936Z	Restoring from build output cache
2025-11-16T08:52:52.938Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2025-11-16T08:52:53.314Z	Installing project dependencies: npm clean-install --progress=false
2025-11-16T08:52:56.846Z	npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
2025-11-16T08:52:57.093Z	npm warn deprecated npmlog@5.0.1: This package is no longer supported.
2025-11-16T08:52:57.151Z	npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
2025-11-16T08:52:57.188Z	npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
2025-11-16T08:52:57.271Z	npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
2025-11-16T08:52:57.319Z	npm warn deprecated gauge@3.0.2: This package is no longer supported.
2025-11-16T08:52:59.960Z	
2025-11-16T08:52:59.961Z	added 326 packages, and audited 327 packages in 6s
2025-11-16T08:52:59.963Z	
2025-11-16T08:52:59.963Z	27 packages are looking for funding
2025-11-16T08:52:59.967Z	  run `npm fund` for details
2025-11-16T08:52:59.967Z	
2025-11-16T08:52:59.967Z	1 moderate severity vulnerability
2025-11-16T08:52:59.968Z	
2025-11-16T08:52:59.968Z	To address all issues (including breaking changes), run:
2025-11-16T08:52:59.968Z	  npm audit fix --force
2025-11-16T08:52:59.968Z	
2025-11-16T08:52:59.968Z	Run `npm audit` for details.
2025-11-16T08:53:00.154Z	Executing user build command: npm run build
2025-11-16T08:53:00.414Z	
2025-11-16T08:53:00.414Z	> iba-cleaning-api@1.0.0 build
2025-11-16T08:53:00.414Z	> tsc
2025-11-16T08:53:00.414Z	
2025-11-16T08:53:03.580Z	Success: Build command completed
2025-11-16T08:53:03.743Z	Executing user deploy command: npx wrangler deploy
2025-11-16T08:53:04.978Z	npm warn exec The following package was not found and will be installed: wrangler@4.47.0
2025-11-16T08:53:23.260Z	
2025-11-16T08:53:23.260Z	 ⛅️ wrangler 4.47.0
2025-11-16T08:53:23.260Z	───────────────────
2025-11-16T08:53:23.274Z	
2025-11-16T08:53:23.336Z	✘ [ERROR] Missing entry-point to Worker script or to assets directory
2025-11-16T08:53:23.336Z	
2025-11-16T08:53:23.337Z	  
2025-11-16T08:53:23.337Z	  If there is code to deploy, you can either:
2025-11-16T08:53:23.337Z	  - Specify an entry-point to your Worker script via the command line (ex: `npx wrangler deploy src/index.ts`)
2025-11-16T08:53:23.337Z	  - Or create a "wrangler.jsonc" file containing:
2025-11-16T08:53:23.337Z	  
2025-11-16T08:53:23.337Z	  ```
2025-11-16T08:53:23.337Z	  {
2025-11-16T08:53:23.337Z	    "name": "worker-name",
2025-11-16T08:53:23.337Z	    "compatibility_date": "2025-11-16",
2025-11-16T08:53:23.337Z	    "main": "src/index.ts"
2025-11-16T08:53:23.337Z	  }
2025-11-16T08:53:23.337Z	  ```
2025-11-16T08:53:23.337Z	  
2025-11-16T08:53:23.337Z	  
2025-11-16T08:53:23.339Z	  If are uploading a directory of assets, you can either:
2025-11-16T08:53:23.339Z	  - Specify the path to the directory of assets via the command line: (ex: `npx wrangler deploy --assets=./dist`)
2025-11-16T08:53:23.339Z	  - Or create a "wrangler.jsonc" file containing:
2025-11-16T08:53:23.340Z	  
2025-11-16T08:53:23.340Z	  ```
2025-11-16T08:53:23.340Z	  {
2025-11-16T08:53:23.340Z	    "name": "worker-name",
2025-11-16T08:53:23.340Z	    "compatibility_date": "2025-11-16",
2025-11-16T08:53:23.340Z	    "assets": {
2025-11-16T08:53:23.340Z	      "directory": "./dist"
2025-11-16T08:53:23.340Z	    }
2025-11-16T08:53:23.340Z	  }
2025-11-16T08:53:23.340Z	  ```
2025-11-16T08:53:23.340Z	  
2025-11-16T08:53:23.340Z	
2025-11-16T08:53:23.340Z	
2025-11-16T08:53:23.355Z	
2025-11-16T08:53:23.355Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2025-11-16T08:53:23.369Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2025-11-16_08-53-22_622.log"
2025-11-16T08:53:23.483Z	Failed: error occurred while running deploy command