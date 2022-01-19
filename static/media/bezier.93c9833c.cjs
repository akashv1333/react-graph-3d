"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Bezier=void 0;const{abs:abs,cos:cos,sin:sin,acos:acos,atan2:atan2,sqrt:sqrt,pow:pow}=Math;function crt(t){return t<0?-pow(-t,1/3):pow(t,1/3)}const pi=Math.PI,tau=2*pi,quart=pi/2,epsilon=1e-6,nMax=Number.MAX_SAFE_INTEGER||9007199254740991,nMin=Number.MIN_SAFE_INTEGER||-9007199254740991,ZERO={x:0,y:0,z:0},utils={Tvalues:[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],Cvalues:[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],arcfn:function(t,i){const e=i(t);let n=e.x*e.x+e.y*e.y;return"undefined"!==typeof e.z&&(n+=e.z*e.z),sqrt(n)},compute:function(t,i,e){if(0===t)return i[0].t=0,i[0];const n=i.length-1;if(1===t)return i[n].t=1,i[n];const r=1-t;let s=i;if(0===n)return i[0].t=t,i[0];if(1===n){const i={x:r*s[0].x+t*s[1].x,y:r*s[0].y+t*s[1].y,t:t};return e&&(i.z=r*s[0].z+t*s[1].z),i}if(n<4){let i,o,u,l=r*r,c=t*t,a=0;2===n?(s=[s[0],s[1],s[2],ZERO],i=l,o=r*t*2,u=c):3===n&&(i=l*r,o=l*t*3,u=r*c*3,a=t*c);const h={x:i*s[0].x+o*s[1].x+u*s[2].x+a*s[3].x,y:i*s[0].y+o*s[1].y+u*s[2].y+a*s[3].y,t:t};return e&&(h.z=i*s[0].z+o*s[1].z+u*s[2].z+a*s[3].z),h}const o=JSON.parse(JSON.stringify(i));for(;o.length>1;){for(let i=0;i<o.length-1;i++)o[i]={x:o[i].x+(o[i+1].x-o[i].x)*t,y:o[i].y+(o[i+1].y-o[i].y)*t},"undefined"!==typeof o[i].z&&(o[i]=o[i].z+(o[i+1].z-o[i].z)*t);o.splice(o.length-1,1)}return o[0].t=t,o[0]},computeWithRatios:function(t,i,e,n){const r=1-t,s=e,o=i;let u,l=s[0],c=s[1],a=s[2],h=s[3];return l*=r,c*=t,2===o.length?(u=l+c,{x:(l*o[0].x+c*o[1].x)/u,y:(l*o[0].y+c*o[1].y)/u,z:!!n&&(l*o[0].z+c*o[1].z)/u,t:t}):(l*=r,c*=2*r,a*=t*t,3===o.length?(u=l+c+a,{x:(l*o[0].x+c*o[1].x+a*o[2].x)/u,y:(l*o[0].y+c*o[1].y+a*o[2].y)/u,z:!!n&&(l*o[0].z+c*o[1].z+a*o[2].z)/u,t:t}):(l*=r,c*=1.5*r,a*=3*r,h*=t*t*t,4===o.length?(u=l+c+a+h,{x:(l*o[0].x+c*o[1].x+a*o[2].x+h*o[3].x)/u,y:(l*o[0].y+c*o[1].y+a*o[2].y+h*o[3].y)/u,z:!!n&&(l*o[0].z+c*o[1].z+a*o[2].z+h*o[3].z)/u,t:t}):void 0))},derive:function(t,i){const e=[];for(let n=t,r=n.length,s=r-1;r>1;r--,s--){const t=[];for(let e,r=0;r<s;r++)e={x:s*(n[r+1].x-n[r].x),y:s*(n[r+1].y-n[r].y)},i&&(e.z=s*(n[r+1].z-n[r].z)),t.push(e);e.push(t),n=t}return e},between:function(t,i,e){return i<=t&&t<=e||utils.approximately(t,i)||utils.approximately(t,e)},approximately:function(t,i,e){return abs(t-i)<=(e||epsilon)},length:function(t){const i=utils.Tvalues.length;let e=0;for(let n,r=0;r<i;r++)n=.5*utils.Tvalues[r]+.5,e+=utils.Cvalues[r]*utils.arcfn(n,t);return.5*e},map:function(t,i,e,n,r){return n+(r-n)*((t-i)/(e-i))},lerp:function(t,i,e){const n={x:i.x+t*(e.x-i.x),y:i.y+t*(e.y-i.y)};return void 0!==i.z&&void 0!==e.z&&(n.z=i.z+t*(e.z-i.z)),n},pointToString:function(t){let i=t.x+"/"+t.y;return"undefined"!==typeof t.z&&(i+="/"+t.z),i},pointsToString:function(t){return"["+t.map(utils.pointToString).join(", ")+"]"},copy:function(t){return JSON.parse(JSON.stringify(t))},angle:function(t,i,e){const n=i.x-t.x,r=i.y-t.y,s=e.x-t.x,o=e.y-t.y;return atan2(n*o-r*s,n*s+r*o)},round:function(t,i){const e=""+t,n=e.indexOf(".");return parseFloat(e.substring(0,n+1+i))},dist:function(t,i){const e=t.x-i.x,n=t.y-i.y;return sqrt(e*e+n*n)},closest:function(t,i){let e,n,r=pow(2,63);return t.forEach((function(t,s){n=utils.dist(i,t),n<r&&(r=n,e=s)})),{mdist:r,mpos:e}},abcratio:function(t,i){if(2!==i&&3!==i)return!1;if("undefined"===typeof t)t=.5;else if(0===t||1===t)return t;const e=pow(t,i)+pow(1-t,i);return abs((e-1)/e)},projectionratio:function(t,i){if(2!==i&&3!==i)return!1;if("undefined"===typeof t)t=.5;else if(0===t||1===t)return t;const e=pow(1-t,i);return e/(pow(t,i)+e)},lli8:function(t,i,e,n,r,s,o,u){const l=(t-e)*(s-u)-(i-n)*(r-o);return 0!=l&&{x:((t*n-i*e)*(r-o)-(t-e)*(r*u-s*o))/l,y:((t*n-i*e)*(s-u)-(i-n)*(r*u-s*o))/l}},lli4:function(t,i,e,n){const r=t.x,s=t.y,o=i.x,u=i.y,l=e.x,c=e.y,a=n.x,h=n.y;return utils.lli8(r,s,o,u,l,c,a,h)},lli:function(t,i){return utils.lli4(t,t.c,i,i.c)},makeline:function(t,i){return new Bezier(t.x,t.y,(t.x+i.x)/2,(t.y+i.y)/2,i.x,i.y)},findbbox:function(t){let i=nMax,e=nMax,n=nMin,r=nMin;return t.forEach((function(t){const s=t.bbox();i>s.x.min&&(i=s.x.min),e>s.y.min&&(e=s.y.min),n<s.x.max&&(n=s.x.max),r<s.y.max&&(r=s.y.max)})),{x:{min:i,mid:(i+n)/2,max:n,size:n-i},y:{min:e,mid:(e+r)/2,max:r,size:r-e}}},shapeintersections:function(t,i,e,n,r){if(!utils.bboxoverlap(i,n))return[];const s=[],o=[t.startcap,t.forward,t.back,t.endcap],u=[e.startcap,e.forward,e.back,e.endcap];return o.forEach((function(i){i.virtual||u.forEach((function(n){if(n.virtual)return;const o=i.intersects(n,r);o.length>0&&(o.c1=i,o.c2=n,o.s1=t,o.s2=e,s.push(o))}))})),s},makeshape:function(t,i,e){const n=i.points.length,r=t.points.length,s=utils.makeline(i.points[n-1],t.points[0]),o=utils.makeline(t.points[r-1],i.points[0]),u={startcap:s,forward:t,back:i,endcap:o,bbox:utils.findbbox([s,t,i,o]),intersections:function(t){return utils.shapeintersections(u,u.bbox,t,t.bbox,e)}};return u},getminmax:function(t,i,e){if(!e)return{min:0,max:0};let n,r,s=nMax,o=nMin;-1===e.indexOf(0)&&(e=[0].concat(e)),-1===e.indexOf(1)&&e.push(1);for(let u=0,l=e.length;u<l;u++)n=e[u],r=t.get(n),r[i]<s&&(s=r[i]),r[i]>o&&(o=r[i]);return{min:s,mid:(s+o)/2,max:o,size:o-s}},align:function(t,i){const e=i.p1.x,n=i.p1.y,r=-atan2(i.p2.y-n,i.p2.x-e);return t.map((function(t){return{x:(t.x-e)*cos(r)-(t.y-n)*sin(r),y:(t.x-e)*sin(r)+(t.y-n)*cos(r)}}))},roots:function(t,i){i=i||{p1:{x:0,y:0},p2:{x:1,y:0}};const e=t.length-1,n=utils.align(t,i),r=function(t){return 0<=t&&t<=1};if(2===e){const t=n[0].y,i=n[1].y,e=n[2].y,s=t-2*i+e;if(0!==s){const n=-sqrt(i*i-t*e),o=-t+i;return[-(n+o)/s,-(-n+o)/s].filter(r)}return i!==e&&0===s?[(2*i-e)/(2*i-2*e)].filter(r):[]}const s=n[0].y,o=n[1].y,u=n[2].y;let l=3*o-s-3*u+n[3].y,c=3*s-6*o+3*u,a=-3*s+3*o,h=s;if(utils.approximately(l,0)){if(utils.approximately(c,0))return utils.approximately(a,0)?[]:[-h/a].filter(r);const t=sqrt(a*a-4*c*h),i=2*c;return[(t-a)/i,(-a-t)/i].filter(r)}c/=l,a/=l,h/=l;const x=(3*a-c*c)/3,f=x/3,y=(2*c*c*c-9*c*a+27*h)/27,p=y/2,d=p*p+f*f*f;let m,z,g,_,b;if(d<0){const t=-x/3,i=sqrt(t*t*t),e=-y/(2*i),n=acos(e<-1?-1:e>1?1:e),s=2*crt(i);return g=s*cos(n/3)-c/3,_=s*cos((n+tau)/3)-c/3,b=s*cos((n+2*tau)/3)-c/3,[g,_,b].filter(r)}if(0===d)return m=p<0?crt(-p):-crt(p),g=2*m-c/3,_=-m-c/3,[g,_].filter(r);{const t=sqrt(d);return m=crt(-p+t),z=crt(p+t),[m-z-c/3].filter(r)}},droots:function(t){if(3===t.length){const i=t[0],e=t[1],n=t[2],r=i-2*e+n;if(0!==r){const t=-sqrt(e*e-i*n),s=-i+e;return[-(t+s)/r,-(-t+s)/r]}return e!==n&&0===r?[(2*e-n)/(2*(e-n))]:[]}if(2===t.length){const i=t[0],e=t[1];return i!==e?[i/(i-e)]:[]}return[]},curvature:function(t,i,e,n,r){let s,o,u,l,c=0,a=0;const h=utils.compute(t,i),x=utils.compute(t,e),f=h.x*h.x+h.y*h.y;if(n?(s=sqrt(pow(h.y*x.z-x.y*h.z,2)+pow(h.z*x.x-x.z*h.x,2)+pow(h.x*x.y-x.x*h.y,2)),o=pow(f+h.z*h.z,1.5)):(s=h.x*x.y-h.y*x.x,o=pow(f,1.5)),0===s||0===o)return{k:0,r:0};if(c=s/o,a=o/s,!r){const r=utils.curvature(t-.001,i,e,n,!0).k,s=utils.curvature(t+.001,i,e,n,!0).k;l=(s-c+(c-r))/2,u=(abs(s-c)+abs(c-r))/2}return{k:c,r:a,dk:l,adk:u}},inflections:function(t){if(t.length<4)return[];const i=utils.align(t,{p1:t[0],p2:t.slice(-1)[0]}),e=i[2].x*i[1].y,n=i[3].x*i[1].y,r=i[1].x*i[2].y,s=18*(-3*e+2*n+3*r-i[3].x*i[2].y),o=18*(3*e-n-3*r),u=18*(r-e);if(utils.approximately(s,0)){if(!utils.approximately(o,0)){let t=-u/o;if(0<=t&&t<=1)return[t]}return[]}const l=o*o-4*s*u,c=Math.sqrt(l),a=2*s;return utils.approximately(a,0)?[]:[(c-o)/a,-(o+c)/a].filter((function(t){return 0<=t&&t<=1}))},bboxoverlap:function(t,i){const e=["x","y"],n=e.length;for(let r,s,o,u,l=0;l<n;l++)if(r=e[l],s=t[r].mid,o=i[r].mid,u=(t[r].size+i[r].size)/2,abs(s-o)>=u)return!1;return!0},expandbox:function(t,i){i.x.min<t.x.min&&(t.x.min=i.x.min),i.y.min<t.y.min&&(t.y.min=i.y.min),i.z&&i.z.min<t.z.min&&(t.z.min=i.z.min),i.x.max>t.x.max&&(t.x.max=i.x.max),i.y.max>t.y.max&&(t.y.max=i.y.max),i.z&&i.z.max>t.z.max&&(t.z.max=i.z.max),t.x.mid=(t.x.min+t.x.max)/2,t.y.mid=(t.y.min+t.y.max)/2,t.z&&(t.z.mid=(t.z.min+t.z.max)/2),t.x.size=t.x.max-t.x.min,t.y.size=t.y.max-t.y.min,t.z&&(t.z.size=t.z.max-t.z.min)},pairiteration:function(t,i,e){const n=t.bbox(),r=i.bbox(),s=1e5,o=e||.5;if(n.x.size+n.y.size<o&&r.x.size+r.y.size<o)return[(s*(t._t1+t._t2)/2|0)/s+"/"+(s*(i._t1+i._t2)/2|0)/s];let u=t.split(.5),l=i.split(.5),c=[{left:u.left,right:l.left},{left:u.left,right:l.right},{left:u.right,right:l.right},{left:u.right,right:l.left}];c=c.filter((function(t){return utils.bboxoverlap(t.left.bbox(),t.right.bbox())}));let a=[];return 0===c.length||(c.forEach((function(t){a=a.concat(utils.pairiteration(t.left,t.right,o))})),a=a.filter((function(t,i){return a.indexOf(t)===i}))),a},getccenter:function(t,i,e){const n=i.x-t.x,r=i.y-t.y,s=e.x-i.x,o=e.y-i.y,u=n*cos(quart)-r*sin(quart),l=n*sin(quart)+r*cos(quart),c=s*cos(quart)-o*sin(quart),a=s*sin(quart)+o*cos(quart),h=(t.x+i.x)/2,x=(t.y+i.y)/2,f=(i.x+e.x)/2,y=(i.y+e.y)/2,p=h+u,d=x+l,m=f+c,z=y+a,g=utils.lli8(h,x,p,d,f,y,m,z),_=utils.dist(g,t);let b,v=atan2(t.y-g.y,t.x-g.x),w=atan2(i.y-g.y,i.x-g.x),B=atan2(e.y-g.y,e.x-g.x);return v<B?((v>w||w>B)&&(v+=tau),v>B&&(b=B,B=v,v=b)):B<w&&w<v?(b=B,B=v,v=b):B+=tau,g.s=v,g.e=B,g.r=_,g},numberSort:function(t,i){return t-i}};class PolyBezier{constructor(t){this.curves=[],this._3d=!1,t&&(this.curves=t,this._3d=this.curves[0]._3d)}valueOf(){return this.toString()}toString(){return"["+this.curves.map((function(t){return utils.pointsToString(t.points)})).join(", ")+"]"}addCurve(t){this.curves.push(t),this._3d=this._3d||t._3d}length(){return this.curves.map((function(t){return t.length()})).reduce((function(t,i){return t+i}))}curve(t){return this.curves[t]}bbox(){const t=this.curves;for(var i=t[0].bbox(),e=1;e<t.length;e++)utils.expandbox(i,t[e].bbox());return i}offset(t){const i=[];return this.curves.forEach((function(e){i.push(...e.offset(t))})),new PolyBezier(i)}}const{abs:abs$1,min:min,max:max,cos:cos$1,sin:sin$1,acos:acos$1,sqrt:sqrt$1}=Math,pi$1=Math.PI;class Bezier{constructor(t){let i=t&&t.forEach?t:Array.from(arguments).slice(),e=!1;if("object"===typeof i[0]){e=i.length;const t=[];i.forEach((function(i){["x","y","z"].forEach((function(e){"undefined"!==typeof i[e]&&t.push(i[e])}))})),i=t}let n=!1;const r=i.length;if(e){if(e>4){if(1!==arguments.length)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");n=!0}}else if(6!==r&&8!==r&&9!==r&&12!==r&&1!==arguments.length)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");const s=this._3d=!n&&(9===r||12===r)||t&&t[0]&&"undefined"!==typeof t[0].z,o=this.points=[];for(let x=0,f=s?3:2;x<r;x+=f){var u={x:i[x],y:i[x+1]};s&&(u.z=i[x+2]),o.push(u)}const l=this.order=o.length-1,c=this.dims=["x","y"];s&&c.push("z"),this.dimlen=c.length;const a=utils.align(o,{p1:o[0],p2:o[l]}),h=utils.dist(o[0],o[l]);this._linear=a.reduce(((t,i)=>t+abs$1(i.y)),0)<h/50,this._lut=[],this._t1=0,this._t2=1,this.update()}static quadraticFromPoints(t,i,e,n){if("undefined"===typeof n&&(n=.5),0===n)return new Bezier(i,i,e);if(1===n)return new Bezier(t,i,i);const r=Bezier.getABC(2,t,i,e,n);return new Bezier(t,r.A,e)}static cubicFromPoints(t,i,e,n,r){"undefined"===typeof n&&(n=.5);const s=Bezier.getABC(3,t,i,e,n);"undefined"===typeof r&&(r=utils.dist(i,s.C));const o=r*(1-n)/n,u=utils.dist(t,e),l=(e.x-t.x)/u,c=(e.y-t.y)/u,a=r*l,h=r*c,x=o*l,f=o*c,y=i.x-a,p=i.y-h,d=i.x+x,m=i.y+f,z=s.A,g=z.x+(y-z.x)/(1-n),_=z.y+(p-z.y)/(1-n),b=z.x+(d-z.x)/n,v=z.y+(m-z.y)/n,w={x:t.x+(g-t.x)/n,y:t.y+(_-t.y)/n},B={x:e.x+(b-e.x)/(1-n),y:e.y+(v-e.y)/(1-n)};return new Bezier(t,w,B,e)}static getUtils(){return utils}getUtils(){return Bezier.getUtils()}static get PolyBezier(){return PolyBezier}valueOf(){return this.toString()}toString(){return utils.pointsToString(this.points)}toSVG(){if(this._3d)return!1;const t=this.points,i=["M",t[0].x,t[0].y,2===this.order?"Q":"C"];for(let e=1,n=t.length;e<n;e++)i.push(t[e].x),i.push(t[e].y);return i.join(" ")}setRatios(t){if(t.length!==this.points.length)throw new Error("incorrect number of ratio values");this.ratios=t,this._lut=[]}verify(){const t=this.coordDigest();t!==this._print&&(this._print=t,this.update())}coordDigest(){return this.points.map((function(t,i){return""+i+t.x+t.y+(t.z?t.z:0)})).join("")}update(){this._lut=[],this.dpoints=utils.derive(this.points,this._3d),this.computedirection()}computedirection(){const t=this.points,i=utils.angle(t[0],t[this.order],t[1]);this.clockwise=i>0}length(){return utils.length(this.derivative.bind(this))}static getABC(t=2,i,e,n,r=.5){const s=utils.projectionratio(r,t),o=1-s,u={x:s*i.x+o*n.x,y:s*i.y+o*n.y},l=utils.abcratio(r,t);return{A:{x:e.x+(e.x-u.x)/l,y:e.y+(e.y-u.y)/l},B:e,C:u,S:i,E:n}}getABC(t,i){i=i||this.get(t);let e=this.points[0],n=this.points[this.order];return Bezier.getABC(this.order,e,i,n,t)}getLUT(t){if(this.verify(),t=t||100,this._lut.length===t)return this._lut;this._lut=[],t++,this._lut=[];for(let i,e,n=0;n<t;n++)e=n/(t-1),i=this.compute(e),i.t=e,this._lut.push(i);return this._lut}on(i,e){e=e||5;const n=this.getLUT(),r=[];for(let t,s=0,o=0;s<n.length;s++)t=n[s],utils.dist(t,i)<e&&(r.push(t),o+=s/n.length);return!!r.length&&(t/=r.length)}project(t){const i=this.getLUT(),e=i.length-1,n=utils.closest(i,t),r=n.mpos,s=(r-1)/e,o=(r+1)/e,u=.1/e;let l,c,a=n.mdist,h=s,x=h;for(a+=1;h<o+u;h+=u)l=this.compute(h),c=utils.dist(t,l),c<a&&(a=c,x=h);return x=x<0?0:x>1?1:x,l=this.compute(x),l.t=x,l.d=a,l}get(t){return this.compute(t)}point(t){return this.points[t]}compute(t){return this.ratios?utils.computeWithRatios(t,this.points,this.ratios,this._3d):utils.compute(t,this.points,this._3d,this.ratios)}raise(){const t=this.points,i=[t[0]],e=t.length;for(let n,r,s=1;s<e;s++)n=t[s],r=t[s-1],i[s]={x:(e-s)/e*n.x+s/e*r.x,y:(e-s)/e*n.y+s/e*r.y};return i[e]=t[e-1],new Bezier(i)}derivative(t){return utils.compute(t,this.dpoints[0],this._3d)}dderivative(t){return utils.compute(t,this.dpoints[1],this._3d)}align(){let t=this.points;return new Bezier(utils.align(t,{p1:t[0],p2:t[t.length-1]}))}curvature(t){return utils.curvature(t,this.dpoints[0],this.dpoints[1],this._3d)}inflections(){return utils.inflections(this.points)}normal(t){return this._3d?this.__normal3(t):this.__normal2(t)}__normal2(t){const i=this.derivative(t),e=sqrt$1(i.x*i.x+i.y*i.y);return{x:-i.y/e,y:i.x/e}}__normal3(t){const i=this.derivative(t),e=this.derivative(t+.01),n=sqrt$1(i.x*i.x+i.y*i.y+i.z*i.z),r=sqrt$1(e.x*e.x+e.y*e.y+e.z*e.z);i.x/=n,i.y/=n,i.z/=n,e.x/=r,e.y/=r,e.z/=r;const s={x:e.y*i.z-e.z*i.y,y:e.z*i.x-e.x*i.z,z:e.x*i.y-e.y*i.x},o=sqrt$1(s.x*s.x+s.y*s.y+s.z*s.z);s.x/=o,s.y/=o,s.z/=o;const u=[s.x*s.x,s.x*s.y-s.z,s.x*s.z+s.y,s.x*s.y+s.z,s.y*s.y,s.y*s.z-s.x,s.x*s.z-s.y,s.y*s.z+s.x,s.z*s.z];return{x:u[0]*i.x+u[1]*i.y+u[2]*i.z,y:u[3]*i.x+u[4]*i.y+u[5]*i.z,z:u[6]*i.x+u[7]*i.y+u[8]*i.z}}hull(t){let i=this.points,e=[],n=[],r=0;for(n[r++]=i[0],n[r++]=i[1],n[r++]=i[2],3===this.order&&(n[r++]=i[3]);i.length>1;){e=[];for(let s,o=0,u=i.length-1;o<u;o++)s=utils.lerp(t,i[o],i[o+1]),n[r++]=s,e.push(s);i=e}return n}split(t,i){if(0===t&&i)return this.split(i).left;if(1===i)return this.split(t).right;const e=this.hull(t),n={left:2===this.order?new Bezier([e[0],e[3],e[5]]):new Bezier([e[0],e[4],e[7],e[9]]),right:2===this.order?new Bezier([e[5],e[4],e[2]]):new Bezier([e[9],e[8],e[6],e[3]]),span:e};return n.left._t1=utils.map(0,0,1,this._t1,this._t2),n.left._t2=utils.map(t,0,1,this._t1,this._t2),n.right._t1=utils.map(t,0,1,this._t1,this._t2),n.right._t2=utils.map(1,0,1,this._t1,this._t2),i?(i=utils.map(i,t,1,0,1),n.right.split(i).left):n}extrema(){const t={};let i=[];return this.dims.forEach(function(e){let n=function(t){return t[e]},r=this.dpoints[0].map(n);t[e]=utils.droots(r),3===this.order&&(r=this.dpoints[1].map(n),t[e]=t[e].concat(utils.droots(r))),t[e]=t[e].filter((function(t){return t>=0&&t<=1})),i=i.concat(t[e].sort(utils.numberSort))}.bind(this)),t.values=i.sort(utils.numberSort).filter((function(t,e){return i.indexOf(t)===e})),t}bbox(){const t=this.extrema(),i={};return this.dims.forEach(function(e){i[e]=utils.getminmax(this,e,t[e])}.bind(this)),i}overlaps(t){const i=this.bbox(),e=t.bbox();return utils.bboxoverlap(i,e)}offset(t,i){if("undefined"!==typeof i){const e=this.get(t),n=this.normal(t),r={c:e,n:n,x:e.x+n.x*i,y:e.y+n.y*i};return this._3d&&(r.z=e.z+n.z*i),r}if(this._linear){const i=this.normal(0),e=this.points.map((function(e){const n={x:e.x+t*i.x,y:e.y+t*i.y};return e.z&&i.z&&(n.z=e.z+t*i.z),n}));return[new Bezier(e)]}return this.reduce().map((function(i){return i._linear?i.offset(t)[0]:i.scale(t)}))}simple(){if(3===this.order){const t=utils.angle(this.points[0],this.points[3],this.points[1]),i=utils.angle(this.points[0],this.points[3],this.points[2]);if(t>0&&i<0||t<0&&i>0)return!1}const t=this.normal(0),i=this.normal(1);let e=t.x*i.x+t.y*i.y;return this._3d&&(e+=t.z*i.z),abs$1(acos$1(e))<pi$1/3}reduce(){let t,i,e=0,n=0,r=.01,s=[],o=[],u=this.extrema().values;for(-1===u.indexOf(0)&&(u=[0].concat(u)),-1===u.indexOf(1)&&u.push(1),e=u[0],t=1;t<u.length;t++)n=u[t],i=this.split(e,n),i._t1=e,i._t2=n,s.push(i),e=n;return s.forEach((function(t){for(e=0,n=0;n<=1;)for(n=e+r;n<=1.01;n+=r)if(i=t.split(e,n),!i.simple()){if(n-=r,abs$1(e-n)<r)return[];i=t.split(e,n),i._t1=utils.map(e,0,1,t._t1,t._t2),i._t2=utils.map(n,0,1,t._t1,t._t2),o.push(i),e=n;break}e<1&&(i=t.split(e,1),i._t1=utils.map(e,0,1,t._t1,t._t2),i._t2=t._t2,o.push(i))})),o}translate(t,i,e){e="number"===typeof e?e:i;const n=this.order;let r=this.points.map(((t,r)=>(1-r/n)*i+r/n*e));return new Bezier(this.points.map(((i,e)=>({x:i.x+t.x*r[e],y:i.y+t.y*r[e]}))))}scale(t){const i=this.order;let e=!1;if("function"===typeof t&&(e=t),e&&2===i)return this.raise().scale(e);const n=this.clockwise,r=this.points;if(this._linear)return this.translate(this.normal(0),e?e(0):t,e?e(1):t);const s=e?e(0):t,o=e?e(1):t,u=[this.offset(0,10),this.offset(1,10)],l=[],c=utils.lli4(u[0],u[0].c,u[1],u[1].c);if(!c)throw new Error("cannot scale this curve. Try reducing it first.");return[0,1].forEach((function(t){const e=l[t*i]=utils.copy(r[t*i]);e.x+=(t?o:s)*u[t].n.x,e.y+=(t?o:s)*u[t].n.y})),e?([0,1].forEach((function(s){if(2!==i||!s){var o=r[s+1],u={x:o.x-c.x,y:o.y-c.y},a=e?e((s+1)/i):t;e&&!n&&(a=-a);var h=sqrt$1(u.x*u.x+u.y*u.y);u.x/=h,u.y/=h,l[s+1]={x:o.x+a*u.x,y:o.y+a*u.y}}})),new Bezier(l)):([0,1].forEach((t=>{if(2===i&&t)return;const e=l[t*i],n=this.derivative(t),s={x:e.x+n.x,y:e.y+n.y};l[t+1]=utils.lli4(e,s,c,r[t+1])})),new Bezier(l))}outline(t,i,e,n){if(i=void 0===i?t:i,this._linear){const r=this.normal(0),s=this.points[0],o=this.points[this.points.length-1];let u,l,c;void 0===e&&(e=t,n=i),u={x:s.x+r.x*t,y:s.y+r.y*t},c={x:o.x+r.x*e,y:o.y+r.y*e},l={x:(u.x+c.x)/2,y:(u.y+c.y)/2};const a=[u,l,c];u={x:s.x-r.x*i,y:s.y-r.y*i},c={x:o.x-r.x*n,y:o.y-r.y*n},l={x:(u.x+c.x)/2,y:(u.y+c.y)/2};const h=[c,l,u],x=utils.makeline(h[2],a[0]),f=utils.makeline(a[2],h[0]),y=[x,new Bezier(a),f,new Bezier(h)];return new PolyBezier(y)}const r=this.reduce(),s=r.length,o=[];let u,l=[],c=0,a=this.length();const h="undefined"!==typeof e&&"undefined"!==typeof n;function x(t,i,e,n,r){return function(s){const o=n/e,u=(n+r)/e,l=i-t;return utils.map(s,0,1,t+o*l,t+u*l)}}r.forEach((function(r){const s=r.length();h?(o.push(r.scale(x(t,e,a,c,s))),l.push(r.scale(x(-i,-n,a,c,s)))):(o.push(r.scale(t)),l.push(r.scale(-i))),c+=s})),l=l.map((function(t){return u=t.points,u[3]?t.points=[u[3],u[2],u[1],u[0]]:t.points=[u[2],u[1],u[0]],t})).reverse();const f=o[0].points[0],y=o[s-1].points[o[s-1].points.length-1],p=l[s-1].points[l[s-1].points.length-1],d=l[0].points[0],m=utils.makeline(p,f),z=utils.makeline(y,d),g=[m].concat(o).concat([z]).concat(l);return new PolyBezier(g)}outlineshapes(t,i,e){i=i||t;const n=this.outline(t,i).curves,r=[];for(let s=1,o=n.length;s<o/2;s++){const t=utils.makeshape(n[s],n[o-s],e);t.startcap.virtual=s>1,t.endcap.virtual=s<o/2-1,r.push(t)}return r}intersects(t,i){return t?t.p1&&t.p2?this.lineIntersects(t):(t instanceof Bezier&&(t=t.reduce()),this.curveintersects(this.reduce(),t,i)):this.selfintersects(i)}lineIntersects(t){const i=min(t.p1.x,t.p2.x),e=min(t.p1.y,t.p2.y),n=max(t.p1.x,t.p2.x),r=max(t.p1.y,t.p2.y);return utils.roots(this.points,t).filter((t=>{var s=this.get(t);return utils.between(s.x,i,n)&&utils.between(s.y,e,r)}))}selfintersects(t){const i=this.reduce(),e=i.length-2,n=[];for(let r,s,o,u=0;u<e;u++)s=i.slice(u,u+1),o=i.slice(u+2),r=this.curveintersects(s,o,t),n.push(...r);return n}curveintersects(t,i,e){const n=[];t.forEach((function(t){i.forEach((function(i){t.overlaps(i)&&n.push({left:t,right:i})}))}));let r=[];return n.forEach((function(t){const i=utils.pairiteration(t.left,t.right,e);i.length>0&&(r=r.concat(i))})),r}arcs(t){return t=t||.5,this._iterate(t,[])}_error(t,i,e,n){const r=(n-e)/4,s=this.get(e+r),o=this.get(n-r),u=utils.dist(t,i),l=utils.dist(t,s),c=utils.dist(t,o);return abs$1(l-u)+abs$1(c-u)}_iterate(t,i){let e,n=0,r=1;do{e=0,r=1;let s,o,u,l,c,a=this.get(n),h=!1,x=!1,f=r,y=1;do{if(x=h,l=u,f=(n+r)/2,s=this.get(f),o=this.get(r),u=utils.getccenter(a,s,o),u.interval={start:n,end:r},h=this._error(u,a,n,r)<=t,c=x&&!h,c||(y=r),h){if(r>=1){if(u.interval.end=y=1,l=u,r>1){let t={x:u.x+u.r*cos$1(u.e),y:u.y+u.r*sin$1(u.e)};u.e+=utils.angle({x:u.x,y:u.y},t,this.get(1))}break}r+=(r-n)/2}else r=f}while(!c&&e++<100);if(e>=100)break;l=l||u,i.push(l),n=y}while(r<1);return i}}exports.Bezier=Bezier;