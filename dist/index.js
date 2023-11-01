"use strict";var q=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var h=q(function(z,M){
function x(r,u,N,e){var p,i,f,o,t,c,a,n,v;if(r<=0)return NaN;if(r===1||e===0)return a=N[0],a===a&&r-u>0?0:NaN;for(e<0?i=(1-r)*e:i=0,v=0;v<r;v++){if(a=N[i],a===a){p=a;break}i+=e}if(v===r)return NaN;for(i+=e,v+=1,f=0,t=0,n=1,v;v<r;v++)a=N[i],a===a&&(c=a-p,f+=c*c,t+=c,n+=1),i+=e;return o=n-u,o<=0?NaN:f/o-t/n*(t/o)}M.exports=x
});var y=q(function(A,m){
function O(r,u,N,e,p){var i,f,o,t,c,a,n,v,s;if(r<=0)return NaN;if(r===1||e===0)return n=N[p],n===n&&r-u>0?0:NaN;for(f=p,s=0;s<r;s++){if(n=N[f],n===n){i=n;break}f+=e}if(s===r)return NaN;for(f+=e,s+=1,o=0,c=0,v=1,s;s<r;s++)n=N[f],n===n&&(a=n-i,o+=a*a,c+=a,v+=1),f+=e;return t=v-u,t<=0?NaN:o/t-c/v*(c/t)}m.exports=O
});var l=q(function(B,k){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=h(),g=y();R(b,"ndarray",g);k.exports=b
});var j=l();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
