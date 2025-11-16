2025-11-16T10:22:53.788Z	Initializing build environment...
2025-11-16T10:22:56.123Z	Success: Finished initializing build environment
2025-11-16T10:22:59.603Z	Cloning repository...
2025-11-16T10:23:00.654Z	Restoring from dependencies cache
2025-11-16T10:23:00.656Z	Restoring from build output cache
2025-11-16T10:23:01.608Z	Detected the following tools from environment: nodejs@22.21.1, bun@1.2.15, npm@10.9.2
2025-11-16T10:23:01.609Z	Installing nodejs 22.21.1
2025-11-16T10:23:07.508Z	Installing project dependencies: npm clean-install --progress=false
2025-11-16T10:23:21.452Z	
2025-11-16T10:23:21.452Z	added 189 packages, and audited 190 packages in 14s
2025-11-16T10:23:21.452Z	
2025-11-16T10:23:21.453Z	46 packages are looking for funding
2025-11-16T10:23:21.453Z	  run `npm fund` for details
2025-11-16T10:23:21.454Z	
2025-11-16T10:23:21.454Z	found 0 vulnerabilities
2025-11-16T10:23:21.751Z	Executing user build command: npm install && npm run build:static
2025-11-16T10:23:22.526Z	
2025-11-16T10:23:22.526Z	up to date, audited 190 packages in 567ms
2025-11-16T10:23:22.526Z	
2025-11-16T10:23:22.526Z	46 packages are looking for funding
2025-11-16T10:23:22.526Z	  run `npm fund` for details
2025-11-16T10:23:22.527Z	
2025-11-16T10:23:22.527Z	found 0 vulnerabilities
2025-11-16T10:23:22.806Z	
2025-11-16T10:23:22.807Z	> iba-cleaning-client@1.0.0 build:static
2025-11-16T10:23:22.807Z	> next build && next export
2025-11-16T10:23:22.807Z	
2025-11-16T10:23:23.377Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-11-16T10:23:23.381Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-11-16T10:23:23.381Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-11-16T10:23:23.382Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-11-16T10:23:23.382Z	https://nextjs.org/telemetry
2025-11-16T10:23:23.382Z	
2025-11-16T10:23:23.442Z	  ▲ Next.js 14.2.33
2025-11-16T10:23:23.443Z	
2025-11-16T10:23:23.484Z	   Creating an optimized production build ...
2025-11-16T10:23:44.452Z	 ✓ Compiled successfully
2025-11-16T10:23:44.454Z	   Linting and checking validity of types ...
2025-11-16T10:23:48.457Z	   Collecting page data ...
2025-11-16T10:23:49.518Z	   Generating static pages (0/4) ...
2025-11-16T10:23:49.693Z	   Generating static pages (1/4) 
2025-11-16T10:23:49.697Z	   Generating static pages (2/4) 
2025-11-16T10:23:49.722Z	   Generating static pages (3/4) 
2025-11-16T10:23:49.822Z	 ✓ Generating static pages (4/4)
2025-11-16T10:23:50.060Z	   Finalizing page optimization ...
2025-11-16T10:23:50.062Z	   Collecting build traces ...
2025-11-16T10:23:55.790Z	
2025-11-16T10:23:55.799Z	Route (app)                              Size     First Load JS
2025-11-16T10:23:55.799Z	┌ ○ /                                    38.3 kB         136 kB
2025-11-16T10:23:55.799Z	└ ○ /_not-found                          873 B          88.1 kB
2025-11-16T10:23:55.799Z	+ First Load JS shared by all            87.2 kB
2025-11-16T10:23:55.799Z	  ├ chunks/117-3c7b4db3cf1e1abb.js       31.7 kB
2025-11-16T10:23:55.800Z	  ├ chunks/fd9d1056-d6d3becf4bde940d.js  53.6 kB
2025-11-16T10:23:55.800Z	  └ other shared chunks (total)          1.89 kB
2025-11-16T10:23:55.800Z	
2025-11-16T10:23:55.800Z	
2025-11-16T10:23:55.801Z	○  (Static)  prerendered as static content
2025-11-16T10:23:55.801Z	
2025-11-16T10:23:55.917Z	 ⨯ 
2025-11-16T10:23:55.917Z	    `next export` has been removed in favor of 'output: export' in next.config.js.
2025-11-16T10:23:55.918Z	Learn more: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
2025-11-16T10:23:55.918Z	  
2025-11-16T10:23:55.936Z	Failed: error occurred while running build command