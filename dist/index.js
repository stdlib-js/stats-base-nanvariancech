"use strict";var M=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var l=M(function(D,k){
function j(a,n,t,v,b){var y,u,p,i,s,f,e,c,r,o,q;if(y=t.data,u=t.accessors[0],a===1||v===0)return r=u(y,b),r===r&&a-n>0?0:NaN;for(i=b,q=0;q<a;q++){if(r=u(y,i),r===r){p=r;break}i+=v}if(q===a)return NaN;for(i+=v,q+=1,s=0,e=0,o=1,q;q<a;q++)r=u(y,i),r===r&&(c=r-p,s+=c*c,e+=c,o+=1),i+=v;return f=o-n,f<=0?NaN:s/f-e/o*(e/f)}k.exports=j
});var h=M(function(E,m){
var O=require('@stdlib/array-base-arraylike2object/dist'),P=l();function R(a,n,t,v,b){var y,u,p,i,s,f,e,c,r,o;if(a<=0)return NaN;if(o=O(t),o.accessorProtocol)return P(a,n,o,v,b);if(a===1||v===0)return e=t[b],e===e&&a-n>0?0:NaN;for(u=b,r=0;r<a;r++){if(e=t[u],e===e){y=e;break}u+=v}if(r===a)return NaN;for(u+=v,r+=1,p=0,s=0,c=1,r;r<a;r++)e=t[u],e===e&&(f=e-y,p+=f*f,s+=f,c+=1),u+=v;return i=c-n,i<=0?NaN:p/i-s/c*(s/i)}m.exports=R
});var N=M(function(F,x){
var d=require('@stdlib/strided-base-stride2offset/dist'),w=h();function z(a,n,t,v){return w(a,n,t,v,d(a,v))}x.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=N(),B=h();A(g,"ndarray",B);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
