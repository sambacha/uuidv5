#!/usr/bin/env node
import { execSync } from 'child_process';
console.log("Generating");
execSync('npx uuid v5 manifold b3bc0db5-401b-439d-8a11-482b542184c6',function(error, stdout, stderr){
// {stdio:[0,1,2]});
	console.log(stdout);
});
