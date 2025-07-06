/*!
 * ONNX Runtime Web v1.21.0-dev.20250206-d981b153d3
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var ba=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,Kf=Object.getOwnPropertyNames,Qf=Object.prototype.hasOwnProperty,Yf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),N=(e,t)=>()=>(e&&(t=e(e=0)),t),ir=(e,t)=>{for(var r in t)ba(e,r,{get:t[r],enumerable:!0})},Zf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Kf(t))!Qf.call(e,a)&&a!==r&&ba(e,a,{get:()=>t[a],enumerable:!(i=jf(t,a))||i.enumerable});return e},Or=e=>Zf(ba({},"__esModule",{value:!0}),e),qt,lt,Ot,fs,Fl,jl=N(()=>{qt=new Map,lt=[],Ot=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=qt.get(e);if(i===void 0)qt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=lt.indexOf(e);a!==-1&&lt.splice(a,1);for(let n=0;n<lt.length;n++)if(qt.get(lt[n]).priority<=r){lt.splice(n,0,e);return}lt.push(e)}return}throw new TypeError("not a valid backend")},fs=async e=>{let t=qt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Fl=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?lt:r,a,n=[],s=new Set;for(let d of i){let p=await fs(d);typeof p=="string"?n.push({name:d,err:p}):(a||(a=p),a===p&&s.add(d))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of n)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[a,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),Xf=N(()=>{jl()}),Kl,Jf=N(()=>{Kl="1.21.0-dev.20250206-d981b153d3"}),li,Ne,Ql=N(()=>{Jf(),li="warning",Ne={wasm:{},webgl:{},webgpu:{},versions:{common:Kl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);li=e}},get logLevel(){return li}},Object.defineProperty(Ne,"logLevel",{enumerable:!0})}),ye,em=N(()=>{Ql(),ye=Ne}),Yl,Zl,tm=N(()=>{Yl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=n*a,u=0,m=f,_=f*2,b=-1;s==="RGBA"?(u=0,m=f,_=f*2,b=f*3):s==="RGB"?(u=0,m=f,_=f*2):s==="RBG"&&(u=0,_=f,m=f*2);for(let y=0;y<n;y++)for(let x=0;x<a;x++){let v=(e.data[u++]-p[0])*d[0],$=(e.data[m++]-p[1])*d[1],k=(e.data[_++]-p[2])*d[2],S=b===-1?255:(e.data[b++]-p[3])*d[3];i.fillStyle="rgba("+v+","+$+","+k+","+S+")",i.fillRect(x,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Zl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,f;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let u=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,_=0,b=1,y=2,x=3,v=0,$=u,k=u*2,S=-1;l==="RGBA"?(v=0,$=u,k=u*2,S=u*3):l==="RGB"?(v=0,$=u,k=u*2):l==="RBG"&&(v=0,k=u,$=u*2),i=r.createImageData(a,n);for(let I=0;I<n*a;_+=m,b+=m,y+=m,x+=m,I++)i.data[_]=(e.data[v++]-f[0])*p[0],i.data[b]=(e.data[$++]-f[1])*p[1],i.data[y]=(e.data[k++]-f[2])*p[2],i.data[x]=S===-1?255:(e.data[S++]-f[3])*p[3]}else throw new Error("Can not access image data");return i}}),yr,Xl,Jl,ed,td,rd,rm=N(()=>{$a(),yr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,f=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),u=4,m=0,_=1,b=2,y=3,x=0,v=p,$=p*2,k=-1;l==="RGB"&&(u=3,m=0,_=1,b=2,y=-1),d==="RGBA"?k=p*3:d==="RBG"?(x=0,$=p,v=p*2):d==="BGR"&&($=0,v=p,x=p*2);for(let S=0;S<p;S++,m+=u,b+=u,_+=u,y+=u)f[x++]=(e[m]+s[0])/n[0],f[v++]=(e[_]+s[1])/n[1],f[$++]=(e[b]+s[2])/n[2],k!==-1&&y!==-1&&(f[k++]=(e[y]+s[3])/n[3]);return d==="RGBA"?new Re("float32",f,[1,4,r,i]):new Re("float32",f,[1,3,r,i])},Xl=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=d();f.width=e.width,f.height=e.height;let u=p(f);if(u!=null){let m=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=m,l.width=_}else l.tensorFormat="RGBA",l.height=m,l.width=_;u.drawImage(e,0,0),s=u.getImageData(0,0,_,m).data}else throw new Error("Can not access image data")}else if(i){let f,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,u=t.resizedWidth):(f=e.height,u=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=f,l.width=u,t!==void 0){let m=d();m.width=u,m.height=f;let _=p(m);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,u,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=d();f.width=e.width,f.height=e.height;let u=p(f);if(u!=null){let m=e.height,_=e.width;return u.drawImage(e,0,0,_,m),s=u.getImageData(0,0,_,m).data,l.height=m,l.width=_,yr(s,l)}else throw new Error("Can not access image data")}else{if(n)return new Promise((f,u)=>{let m=d(),_=p(m);if(!e||!_)return u();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{m.width=b.width,m.height=b.height,_.drawImage(b,0,0,m.width,m.height);let y=_.getImageData(0,0,m.width,m.height);l.height=m.height,l.width=m.width,f(yr(y.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return yr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Jl=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Re({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},ed=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Re({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},td=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Re({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},rd=(e,t,r)=>new Re({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),wt,Yt,di,id,im=N(()=>{wt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Yt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),di=!1,id=()=>{if(!di){di=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(wt.set("int64",BigInt64Array),Yt.set(BigInt64Array,"int64")),t&&(wt.set("uint64",BigUint64Array),Yt.set(BigUint64Array,"uint64")),r?(wt.set("float16",Float16Array),Yt.set(Float16Array,"float16")):wt.set("float16",Uint16Array)}}}),ad,nd,am=N(()=>{$a(),ad=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},nd=(e,t)=>{switch(e.location){case"cpu":return new Re(e.type,e.data,t);case"cpu-pinned":return new Re({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Re({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Re({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Re({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Re,$a=N(()=>{tm(),rm(),im(),am(),Re=class{constructor(e,t,r){id();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=wt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=wt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",s=e;else if(d==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let d=Yt.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let n=ad(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return Xl(e,t)}static fromTexture(e,t){return Jl(e,t)}static fromGpuBuffer(e,t){return ed(e,t)}static fromMLTensor(e,t){return td(e,t)}static fromPinnedBuffer(e,t,r){return rd(e,t,r)}toDataURL(e){return Yl(this,e)}toImageData(e){return Zl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return nd(this,e)}}}),Ye,sd=N(()=>{$a(),Ye=Re}),Rr,pi,Ze,Le,od=N(()=>{Ql(),Rr=(e,t)=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||console.timeStamp(`${e}::ORT::${t}`)},pi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Rr("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Ze=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||pi("BEGIN",e)},Le=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||pi("END",e)}}),ud,nm=N(()=>{jl(),sd(),od(),ud=class ld{constructor(t){this.handler=t}async run(t,r,i){Ze();let a={},n={};if(typeof t!="object"||t===null||t instanceof Ye||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ye)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(f.indexOf(u)!==-1){let m=r[u];(m===null||m instanceof Ye)&&(p=!0,s=!1,a[u]=m)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let l=await this.handler.run(t,a,n),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let f=l[p];f instanceof Ye?d[p]=f:d[p]=new Ye(f.type,f.data,f.dims)}return Le(),d}async release(){return this.handler.dispose()}static async create(t,r,i,a){Ze();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,u=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(m=t.byteLength-u,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||u+m>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-u}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(f,u,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await Fl(s),p=await l.createInferenceSessionHandler(n,d);return Le(),new ld(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),dd,sm=N(()=>{nm(),dd=ud}),om=N(()=>{}),um=N(()=>{}),lm=N(()=>{}),dm=N(()=>{}),pd={};ir(pd,{InferenceSession:()=>dd,TRACE:()=>Rr,TRACE_FUNC_BEGIN:()=>Ze,TRACE_FUNC_END:()=>Le,Tensor:()=>Ye,env:()=>ye,registerBackend:()=>Ot});var He=N(()=>{Xf(),em(),sm(),sd(),om(),um(),od(),lm(),dm()}),wa=N(()=>{}),hd={};ir(hd,{default:()=>cd});var hi,ci,cd,pm=N(()=>{gc(),Tt(),va(),hi="ort-wasm-proxy-worker",ci=globalThis.self?.name===hi,ci&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":xa(r.wasm).then(()=>{qa(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Va(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Ur(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;La(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ha(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:l}=r;Ga(i,a,n,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},ja([...n,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":Fa(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),cd=ci?null:e=>new Worker(e??Oe,{type:"module",name:hi})}),fd={};ir(fd,{default:()=>md});var fi,mi,md,hm=N(()=>{mi=(fi=import.meta.url,async function(e={}){function t(){return Q.buffer!=te.buffer&&me(),te}function r(){return Q.buffer!=te.buffer&&me(),ne}function i(){return Q.buffer!=te.buffer&&me(),X}function a(){return Q.buffer!=te.buffer&&me(),ge}function n(){return Q.buffer!=te.buffer&&me(),M}function s(){return Q.buffer!=te.buffer&&me(),q}function l(){return Q.buffer!=te.buffer&&me(),le}function d(){return Q.buffer!=te.buffer&&me(),Xe}var p,f,u=Object.assign({},e),m=new Promise((o,h)=>{p=o,f=h}),_=typeof window=="object",b=typeof importScripts=="function",y=b&&self.name=="em-pthread";u.mountExternalData=(o,h)=>{o.startsWith("./")&&(o=o.substring(2)),(u.Fb||(u.Fb=new Map)).set(o,h)},u.unmountExternalData=()=>{delete u.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let v=()=>{let o=(c,g,w)=>(...T)=>{let O=je,B=g?.();T=c(...T);let W=g?.();return B!==W&&(c=W,w(B),g=w=null),je!=O?new Promise((H,Z)=>{ti={resolve:H,reject:Z}}):T},h=c=>async(...g)=>{try{if(u.Gb)throw Error("Session already started");let w=u.Gb={hc:g[0],errors:[]},T=await c(...g);if(u.Gb!==w)throw Error("Session mismatch");u.Hb?.flush();let O=w.errors;if(0<O.length){let B=await Promise.all(O);if(B=B.filter(W=>W),0<B.length)throw Error(B.join(`
`))}return T}finally{u.Gb=null}};u._OrtCreateSession=o(u._OrtCreateSession,()=>u._OrtCreateSession,c=>u._OrtCreateSession=c),u._OrtRun=h(o(u._OrtRun,()=>u._OrtRun,c=>u._OrtRun=c)),u._OrtRunWithBinding=h(o(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,c=>u._OrtRunWithBinding=c)),u._OrtBindInput=o(u._OrtBindInput,()=>u._OrtBindInput,c=>u._OrtBindInput=c),v=void 0};u.jsepInit=(o,h)=>{if(v?.(),o==="webgpu"){[u.Hb,u.Vb,u.Zb,u.Ob,u.Yb,u.kb,u.$b,u.cc,u.Wb,u.Xb,u.ac]=h;let c=u.Hb;u.jsepRegisterBuffer=(g,w,T,O)=>c.registerBuffer(g,w,T,O),u.jsepGetBuffer=g=>c.getBuffer(g),u.jsepCreateDownloader=(g,w,T)=>c.createDownloader(g,w,T),u.jsepOnCreateSession=g=>{c.onCreateSession(g)},u.jsepOnReleaseSession=g=>{c.onReleaseSession(g)},u.jsepOnRunStart=g=>c.onRunStart(g),u.dc=(g,w)=>{c.upload(g,w)}}else if(o==="webnn"){[u.Hb,u.bc,u.Pb,u.jsepEnsureTensor,u.ec,u.jsepDownloadTensor]=h,u.jsepReleaseTensorId=u.Pb;let c=u.Hb;u.jsepOnRunStart=g=>c.onRunStart(g),u.jsepRegisterMLContext=(g,w)=>{c.registerMLContext(g,w)},u.jsepOnReleaseSession=g=>{c.onReleaseSession(g)},u.jsepCreateMLTensorDownloader=(g,w)=>c.createMLTensorDownloader(g,w),u.jsepRegisterMLTensor=(g,w,T)=>c.registerMLTensor(g,w,T),u.jsepCreateMLContext=g=>c.createMLContext(g),u.jsepRegisterMLConstant=(g,w,T,O,B)=>c.registerMLConstant(g,w,T,O,B,u.Fb)}};var $,k,S=Object.assign({},u),I=(o,h)=>{throw h},C="";(_||b)&&(b?C=self.location.href:typeof document<"u"&&document.currentScript&&(C=document.currentScript.src),fi&&(C=fi),C=C.startsWith("blob:")?"":C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(k=o=>{var h=new XMLHttpRequest;return h.open("GET",o,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),$=(o,h,c)=>{var g=new XMLHttpRequest;g.open("GET",o,!0),g.responseType="arraybuffer",g.onload=()=>{g.status==200||g.status==0&&g.response?h(g.response):c()},g.onerror=c,g.send(null)});var E,D=console.log.bind(console),P=console.error.bind(console),G=D,L=P;if(Object.assign(u,S),S=null,y){let o=function(h){try{var c=h.data,g=c.cmd;if(g==="load"){let w=[];self.onmessage=T=>w.push(T),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let T of w)o(T);self.onmessage=o};for(let T of c.handlers)u[T]&&!u[T].proxy||(u[T]=(...O)=>{postMessage({Nb:"callHandler",pc:T,args:O})},T=="print"&&(G=u[T]),T=="printErr"&&(L=u[T]));Q=c.wasmMemory,me(),ee(c.wasmModule)}else if(g==="run"){ni(c.pthread_ptr,0,0,1,0,0),Jr(c.pthread_ptr),zc(),nn(),U||(rs(),U=!0);try{Ac(c.start_routine,c.arg)}catch(w){if(w!="unwind")throw w}}else g==="cancel"?zt()&&mr(-1):c.target!=="setimmediate"&&(g==="checkMailbox"?U&&nr():g&&(L(`worker: received unknown command ${g}`),L(c)))}catch(w){throw is(),w}};var ee,U=!1;L=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Nb:"alert",text:h.join(" "),rc:zt()})},u.instantiateWasm=(h,c)=>new Promise(g=>{ee=w=>{w=new WebAssembly.Instance(w,Ja()),c(w),g()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=o}u.wasmBinary&&(E=u.wasmBinary);var Q,ae,V,te,ne,X,ge,M,q,le,ue,ke,Xe,_e=!1;function me(){var o=Q.buffer;u.HEAP8=te=new Int8Array(o),u.HEAP16=X=new Int16Array(o),u.HEAPU8=ne=new Uint8Array(o),u.HEAPU16=ge=new Uint16Array(o),u.HEAP32=M=new Int32Array(o),u.HEAPU32=q=new Uint32Array(o),u.HEAPF32=le=new Float32Array(o),u.HEAPF64=Xe=new Float64Array(o),u.HEAP64=ue=new BigInt64Array(o),u.HEAPU64=ke=new BigUint64Array(o)}if(!y){if(!((Q=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw L("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");me()}var it=[],Nt=[],Wr=[],Pt=0,Ut=null;function Ka(){if(--Pt==0&&Ut){var o=Ut;Ut=null,o()}}function at(o){throw L(o="Aborted("+o+")"),_e=!0,V=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),f(o),o}var qr,Qa=o=>o.startsWith("data:application/octet-stream;base64,"),Ya=o=>o.startsWith("file://");function Za(o){if(o==qr&&E)return new Uint8Array(E);if(k)return k(o);throw"both async and sync fetching of the wasm failed"}function Xa(o,h,c){return function(g){if(!E&&(_||b)){if(typeof fetch=="function"&&!Ya(g))return fetch(g,{credentials:"same-origin"}).then(w=>{if(!w.ok)throw`failed to load wasm binary file at '${g}'`;return w.arrayBuffer()}).catch(()=>Za(g));if($)return new Promise((w,T)=>{$(g,O=>w(new Uint8Array(O)),T)})}return Promise.resolve().then(()=>Za(g))}(o).then(g=>WebAssembly.instantiate(g,h)).then(c,g=>{L(`failed to asynchronously prepare wasm: ${g}`),at(g)})}function Ja(){return{a:{O:Cc,Aa:Ec,b:Rc,aa:ln,B:hn,qa:cn,Y:mn,_:gn,ra:yn,oa:_n,ha:bn,na:$n,L:wn,Z:vn,W:xn,pa:kn,X:Sn,va:Bc,F:Dc,Q:Mc,P:Pc,E:Wc,u:qc,q:Vc,G:Lc,A:Yc,R:Zc,ua:Xc,ka:Jc,U:ef,ba:tf,H:rf,ja:Jr,ta:af,t:nf,Ba:sf,x:lf,o:df,m:hf,c:Zr,n:cf,k:gf,w:yf,p:_f,f:bf,s:$f,l:wf,e:vf,j:xf,i:kf,g:Sf,d:Tf,ea:If,fa:Ef,ga:Cf,ca:Un,da:Wn,T:zf,h:Af,D:Of,I:Rf,M:Bf,y:Df,sa:Mf,V:Nf,v:Vn,z:Pf,N:Uf,S:Wf,za:qf,ya:Vf,la:Gn,ma:Fn,$:Fr,C:jn,K:Kn,ia:Qn,J:Yn,a:Q,xa:Gr,wa:Jn,r:Gf}}}var Vr={916868:(o,h,c,g,w)=>{if(u===void 0||!u.Fb)return 1;if((o=xe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=u.Fb.get(o)))return 2;if(h=Number(h>>>0),c=Number(c>>>0),g=Number(g>>>0),h+c>o.byteLength)return 3;try{let T=o.subarray(h,h+c);switch(w){case 0:r().set(T,g>>>0);break;case 1:u.dc(g,T);break;default:return 4}return 0}catch{return 4}},917583:(o,h,c)=>{u.ec(o,r().subarray(h>>>0,h+c>>>0))},917646:()=>u.bc(),917687:o=>{u.Pb(o)},917723:()=>{u.Wb()},917754:()=>{u.Xb()},917783:()=>{u.ac()},917808:o=>u.Vb(o),917841:o=>u.Zb(o),917873:(o,h,c)=>{u.Ob(Number(o),Number(h),Number(c),!0)},917936:(o,h,c)=>{u.Ob(Number(o),Number(h),Number(c))},917993:()=>typeof wasmOffsetConverter<"u",918050:o=>{u.kb("Abs",o,void 0)},918101:o=>{u.kb("Neg",o,void 0)},918152:o=>{u.kb("Floor",o,void 0)},918205:o=>{u.kb("Ceil",o,void 0)},918257:o=>{u.kb("Reciprocal",o,void 0)},918315:o=>{u.kb("Sqrt",o,void 0)},918367:o=>{u.kb("Exp",o,void 0)},918418:o=>{u.kb("Erf",o,void 0)},918469:o=>{u.kb("Sigmoid",o,void 0)},918524:(o,h,c)=>{u.kb("HardSigmoid",o,{alpha:h,beta:c})},918603:o=>{u.kb("Log",o,void 0)},918654:o=>{u.kb("Sin",o,void 0)},918705:o=>{u.kb("Cos",o,void 0)},918756:o=>{u.kb("Tan",o,void 0)},918807:o=>{u.kb("Asin",o,void 0)},918859:o=>{u.kb("Acos",o,void 0)},918911:o=>{u.kb("Atan",o,void 0)},918963:o=>{u.kb("Sinh",o,void 0)},919015:o=>{u.kb("Cosh",o,void 0)},919067:o=>{u.kb("Asinh",o,void 0)},919120:o=>{u.kb("Acosh",o,void 0)},919173:o=>{u.kb("Atanh",o,void 0)},919226:o=>{u.kb("Tanh",o,void 0)},919278:o=>{u.kb("Not",o,void 0)},919329:(o,h,c)=>{u.kb("Clip",o,{min:h,max:c})},919398:o=>{u.kb("Clip",o,void 0)},919450:(o,h)=>{u.kb("Elu",o,{alpha:h})},919508:o=>{u.kb("Gelu",o,void 0)},919560:o=>{u.kb("Relu",o,void 0)},919612:(o,h)=>{u.kb("LeakyRelu",o,{alpha:h})},919676:(o,h)=>{u.kb("ThresholdedRelu",o,{alpha:h})},919746:(o,h)=>{u.kb("Cast",o,{to:h})},919804:o=>{u.kb("Add",o,void 0)},919855:o=>{u.kb("Sub",o,void 0)},919906:o=>{u.kb("Mul",o,void 0)},919957:o=>{u.kb("Div",o,void 0)},920008:o=>{u.kb("Pow",o,void 0)},920059:o=>{u.kb("Equal",o,void 0)},920112:o=>{u.kb("Greater",o,void 0)},920167:o=>{u.kb("GreaterOrEqual",o,void 0)},920229:o=>{u.kb("Less",o,void 0)},920281:o=>{u.kb("LessOrEqual",o,void 0)},920340:(o,h,c,g,w)=>{u.kb("ReduceMean",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},920515:(o,h,c,g,w)=>{u.kb("ReduceMax",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},920689:(o,h,c,g,w)=>{u.kb("ReduceMin",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},920863:(o,h,c,g,w)=>{u.kb("ReduceProd",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921038:(o,h,c,g,w)=>{u.kb("ReduceSum",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921212:(o,h,c,g,w)=>{u.kb("ReduceL1",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921385:(o,h,c,g,w)=>{u.kb("ReduceL2",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921558:(o,h,c,g,w)=>{u.kb("ReduceLogSum",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921735:(o,h,c,g,w)=>{u.kb("ReduceSumSquare",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},921915:(o,h,c,g,w)=>{u.kb("ReduceLogSumExp",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},922095:o=>{u.kb("Where",o,void 0)},922148:(o,h,c)=>{u.kb("Transpose",o,{perm:h?Array.from(n().subarray(Number(h)>>>0,Number(c)>>>0)):[]})},922272:(o,h,c,g)=>{u.kb("DepthToSpace",o,{blocksize:h,mode:xe(c),format:g?"NHWC":"NCHW"})},922405:(o,h,c,g)=>{u.kb("DepthToSpace",o,{blocksize:h,mode:xe(c),format:g?"NHWC":"NCHW"})},922538:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A,se)=>{u.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:h,dilations:[c],group:g,kernelShape:[w],pads:[T,O],strides:[B],wIsConst:()=>!!t()[H>>>0],outputPadding:Z?Array.from(n().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],outputShape:he?Array.from(n().subarray(Number(he)>>>0,Number(A)>>>0)):[],activation:xe(se)})},922971:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A)=>{u.kb("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:g,kernelShape:Array.from(n().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(n().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(n().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!t()[W>>>0],outputPadding:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],outputShape:oe?Array.from(n().subarray(Number(oe)>>>0,Number(he)>>>0)):[],activation:xe(A)})},923632:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A,se)=>{u.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:h,dilations:[c],group:g,kernelShape:[w],pads:[T,O],strides:[B],wIsConst:()=>!!t()[H>>>0],outputPadding:Z?Array.from(n().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],outputShape:he?Array.from(n().subarray(Number(he)>>>0,Number(A)>>>0)):[],activation:xe(se)})},924065:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A)=>{u.kb("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:g,kernelShape:Array.from(n().subarray(Number(w)>>>0,2+(Number(w)>>>0)>>>0)),pads:Array.from(n().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(n().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!t()[W>>>0],outputPadding:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],outputShape:oe?Array.from(n().subarray(Number(oe)>>>0,Number(he)>>>0)):[],activation:xe(A)})},924726:(o,h)=>{u.kb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},924817:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A)=>{u.kb("AveragePool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},925296:(o,h)=>{u.kb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},925387:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A)=>{u.kb("AveragePool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},925866:(o,h)=>{u.kb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},925953:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A)=>{u.kb("MaxPool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},926428:(o,h)=>{u.kb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},926515:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A)=>{u.kb("MaxPool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:w,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],pads:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],strides:oe?Array.from(n().subarray(Number(oe)>>>0,Number(he)>>>0)):[]})},926990:(o,h,c,g,w)=>{u.kb("Gemm",o,{alpha:h,beta:c,transA:g,transB:w})},927094:o=>{u.kb("MatMul",o,void 0)},927148:(o,h,c,g)=>{u.kb("ArgMax",o,{keepDims:!!h,selectLastIndex:!!c,axis:g})},927256:(o,h,c,g)=>{u.kb("ArgMin",o,{keepDims:!!h,selectLastIndex:!!c,axis:g})},927364:(o,h)=>{u.kb("Softmax",o,{axis:h})},927427:(o,h)=>{u.kb("Concat",o,{axis:h})},927487:(o,h,c,g,w)=>{u.kb("Split",o,{axis:h,numOutputs:c,splitSizes:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},927643:o=>{u.kb("Expand",o,void 0)},927697:(o,h)=>{u.kb("Gather",o,{axis:Number(h)})},927768:(o,h)=>{u.kb("GatherElements",o,{axis:Number(h)})},927847:(o,h)=>{u.kb("GatherND",o,{batch_dims:Number(h)})},927926:(o,h,c,g,w,T,O,B,W,H,Z)=>{u.kb("Resize",o,{antialias:h,axes:c?Array.from(n().subarray(Number(c)>>>0,Number(g)>>>0)):[],coordinateTransformMode:xe(w),cubicCoeffA:T,excludeOutside:O,extrapolationValue:B,keepAspectRatioPolicy:xe(W),mode:xe(H),nearestMode:xe(Z)})},928288:(o,h,c,g,w,T,O)=>{u.kb("Slice",o,{starts:h?Array.from(n().subarray(Number(h)>>>0,Number(c)>>>0)):[],ends:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[],axes:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[]})},928552:o=>{u.kb("Tile",o,void 0)},928604:(o,h,c)=>{u.kb("InstanceNormalization",o,{epsilon:h,format:c?"NHWC":"NCHW"})},928718:(o,h,c)=>{u.kb("InstanceNormalization",o,{epsilon:h,format:c?"NHWC":"NCHW"})},928832:o=>{u.kb("Range",o,void 0)},928885:(o,h)=>{u.kb("Einsum",o,{equation:xe(h)})},928966:(o,h,c,g,w)=>{u.kb("Pad",o,{mode:h,value:c,pads:g?Array.from(n().subarray(Number(g)>>>0,Number(w)>>>0)):[]})},929109:(o,h,c,g,w,T)=>{u.kb("BatchNormalization",o,{epsilon:h,momentum:c,spatial:!!w,trainingMode:!!g,format:T?"NHWC":"NCHW"})},929278:(o,h,c,g,w,T)=>{u.kb("BatchNormalization",o,{epsilon:h,momentum:c,spatial:!!w,trainingMode:!!g,format:T?"NHWC":"NCHW"})},929447:(o,h,c)=>{u.kb("CumSum",o,{exclusive:Number(h),reverse:Number(c)})},929544:(o,h,c)=>{u.kb("DequantizeLinear",o,{axis:h,blockSize:c})},929634:(o,h,c,g,w)=>{u.kb("GridSample",o,{align_corners:h,mode:xe(c),padding_mode:xe(g),format:w?"NHWC":"NCHW"})},929804:(o,h,c,g,w)=>{u.kb("GridSample",o,{align_corners:h,mode:xe(c),padding_mode:xe(g),format:w?"NHWC":"NCHW"})},929974:(o,h,c,g,w,T,O,B,W)=>{u.kb("Attention",o,{numHeads:h,isUnidirectional:c,maskFilterValue:g,scale:w,doRotary:T,qkvHiddenSizes:O?Array.from(n().subarray(Number(B)>>>0,Number(B)+O>>>0)):[],pastPresentShareBuffer:!!W})},930246:o=>{u.kb("BiasAdd",o,void 0)},930301:o=>{u.kb("BiasSplitGelu",o,void 0)},930362:o=>{u.kb("FastGelu",o,void 0)},930418:(o,h,c,g,w,T,O,B,W,H,Z,oe,he,A,se,we)=>{u.kb("Conv",o,{format:oe?"NHWC":"NCHW",auto_pad:h,dilations:c?Array.from(n().subarray(Number(c)>>>0,Number(g)>>>0)):[],group:w,kernel_shape:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],pads:B?Array.from(n().subarray(Number(B)>>>0,Number(W)>>>0)):[],strides:H?Array.from(n().subarray(Number(H)>>>0,Number(Z)>>>0)):[],w_is_const:()=>!!t()[Number(he)>>>0],activation:xe(A),activation_params:se?Array.from(l().subarray(Number(se)>>>0,Number(we)>>>0)):[]})},931002:o=>{u.kb("Gelu",o,void 0)},931054:(o,h,c,g,w,T,O,B,W)=>{u.kb("GroupQueryAttention",o,{numHeads:h,kvNumHeads:c,scale:g,softcap:w,doRotary:T,rotaryInterleaved:O,smoothSoftmax:B,localWindowSize:W})},931271:(o,h,c,g)=>{u.kb("LayerNormalization",o,{axis:h,epsilon:c,simplified:!!g})},931382:(o,h,c,g)=>{u.kb("LayerNormalization",o,{axis:h,epsilon:c,simplified:!!g})},931493:(o,h,c,g,w,T)=>{u.kb("MatMulNBits",o,{k:h,n:c,accuracyLevel:g,bits:w,blockSize:T})},931620:(o,h,c,g,w,T)=>{u.kb("MultiHeadAttention",o,{numHeads:h,isUnidirectional:c,maskFilterValue:g,scale:w,doRotary:T})},931779:(o,h)=>{u.kb("QuickGelu",o,{alpha:h})},931843:(o,h,c,g,w)=>{u.kb("RotaryEmbedding",o,{interleaved:!!h,numHeads:c,rotaryEmbeddingDim:g,scale:w})},931982:(o,h,c)=>{u.kb("SkipLayerNormalization",o,{epsilon:h,simplified:!!c})},932084:(o,h,c)=>{u.kb("SkipLayerNormalization",o,{epsilon:h,simplified:!!c})},932186:(o,h,c,g)=>{u.kb("GatherBlockQuantized",o,{gatherAxis:h,quantizeAxis:c,blockSize:g})},932307:o=>{u.$b(o)},932341:(o,h)=>u.cc(Number(o),Number(h),u.Gb.hc,u.Gb.errors)};function Ec(o,h,c){return Bn(async()=>{await u.Yb(Number(o),Number(h),Number(c))})}function Cc(){return typeof wasmOffsetConverter<"u"}function Lr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var Hr=o=>{o.terminate(),o.onmessage=()=>{}},en=o=>{nt.length==0&&(on(),sn(nt[0]));var h=nt.pop();if(!h)return 6;mt.push(h),Ge[o.Bb]=h,h.Bb=o.Bb;var c={cmd:"run",start_routine:o.ic,arg:o.Rb,pthread_ptr:o.Bb};return h.postMessage(c,o.nc),0},ft=0,be=(o,h,...c)=>{for(var g=2*c.length,w=ui(),T=oi(8*g),O=T>>>3,B=0;B<c.length;B++){var W=c[B];typeof W=="bigint"?(ue[O+2*B]=1n,ue[O+2*B+1]=W):(ue[O+2*B]=0n,d()[O+2*B+1>>>0]=W)}return o=as(o,0,g,T,h),gr(w),o};function Gr(o){if(y)return be(0,1,o);if(V=o,!(0<ft)){for(var h of mt)Hr(h);for(h of nt)Hr(h);nt=[],mt=[],Ge=[],_e=!0}I(0,new Lr(o))}function tn(o){if(y)return be(1,0,o);Fr(o)}var Fr=o=>{if(V=o,y)throw tn(o),"unwind";Gr(o)},nt=[],mt=[],rn=[],Ge={},an=o=>{var h=o.Bb;delete Ge[h],nt.push(o),mt.splice(mt.indexOf(o),1),o.Bb=0,si(h)};function nn(){rn.forEach(o=>o())}var sn=o=>new Promise(h=>{o.onmessage=w=>{var T=(w=w.data).cmd;if(w.targetThread&&w.targetThread!=zt()){var O=Ge[w.targetThread];O?O.postMessage(w,w.transferList):L(`Internal error! Worker sent a message "${T}" to target pthread ${w.targetThread}, but that thread no longer exists!`)}else T==="checkMailbox"?nr():T==="spawnThread"?en(w):T==="cleanupThread"?an(Ge[w.thread]):T==="killThread"?(w=w.thread,T=Ge[w],delete Ge[w],Hr(T),si(w),mt.splice(mt.indexOf(T),1),T.Bb=0):T==="cancelThread"?Ge[w.thread].postMessage({cmd:"cancel"}):T==="loaded"?(o.loaded=!0,h(o)):T==="alert"?alert(`Thread ${w.threadId}: ${w.text}`):w.target==="setimmediate"?o.postMessage(w):T==="callHandler"?u[w.handler](...w.args):T&&L(`worker sent an unknown command ${T}`)},o.onerror=w=>{throw L(`worker sent an error! ${w.filename}:${w.lineno}: ${w.message}`),w};var c,g=[];for(c of[])u.hasOwnProperty(c)&&g.push(c);o.postMessage({cmd:"load",handlers:g,wasmMemory:Q,wasmModule:ae})});function on(){var o=new Worker(import.meta.url.startsWith("file:")?new URL("/chitra/assets/ort.bundle.min-D2-GKZ-g.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});nt.push(o)}var ar=o=>{for(;0<o.length;)o.shift()(u)},zc=()=>{var o=zt(),h=s()[o+52>>>2>>>0];o=s()[o+56>>>2>>>0],ss(h,h-o),gr(h)},Ac=(o,h)=>{ft=0,o=os(o,h),0<ft?V=o:mr(o)};class Oc{constructor(h){this.Kb=h-24}}function Rc(o,h,c){var g=new Oc(o>>>=0);throw h>>>=0,c>>>=0,s()[g.Kb+16>>>2>>>0]=0,s()[g.Kb+4>>>2>>>0]=h,s()[g.Kb+8>>>2>>>0]=c,o}function un(o,h,c,g){return y?be(2,1,o,h,c,g):ln(o,h,c,g)}function ln(o,h,c,g){if(o>>>=0,h>>>=0,c>>>=0,g>>>=0,x===void 0)return L("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var w=[];return y&&w.length===0?un(o,h,c,g):(o={ic:c,Bb:o,Rb:g,nc:w},y?(o.Nb="spawnThread",postMessage(o,w),0):en(o))}var dn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,pn=(o,h,c)=>{var g=(h>>>=0)+c;for(c=h;o[c]&&!(c>=g);)++c;if(16<c-h&&o.buffer&&dn)return dn.decode(o.buffer instanceof x?o.slice(h,c):o.subarray(h,c));for(g="";h<c;){var w=o[h++];if(128&w){var T=63&o[h++];if((224&w)==192)g+=String.fromCharCode((31&w)<<6|T);else{var O=63&o[h++];65536>(w=(240&w)==224?(15&w)<<12|T<<6|O:(7&w)<<18|T<<12|O<<6|63&o[h++])?g+=String.fromCharCode(w):(w-=65536,g+=String.fromCharCode(55296|w>>10,56320|1023&w))}}else g+=String.fromCharCode(w)}return g},xe=(o,h)=>(o>>>=0)?pn(r(),o,h):"";function hn(o,h,c){return y?be(3,1,o,h,c):0}function cn(o,h){if(y)return be(4,1,o,h)}var jr=o=>{for(var h=0,c=0;c<o.length;++c){var g=o.charCodeAt(c);127>=g?h++:2047>=g?h+=2:55296<=g&&57343>=g?(h+=4,++c):h+=3}return h},fn=(o,h,c,g)=>{if(!(0<g))return 0;var w=c>>>=0;g=c+g-1;for(var T=0;T<o.length;++T){var O=o.charCodeAt(T);if(55296<=O&&57343>=O&&(O=65536+((1023&O)<<10)|1023&o.charCodeAt(++T)),127>=O){if(c>=g)break;h[c++>>>0]=O}else{if(2047>=O){if(c+1>=g)break;h[c++>>>0]=192|O>>6}else{if(65535>=O){if(c+2>=g)break;h[c++>>>0]=224|O>>12}else{if(c+3>=g)break;h[c++>>>0]=240|O>>18,h[c++>>>0]=128|O>>12&63}h[c++>>>0]=128|O>>6&63}h[c++>>>0]=128|63&O}}return h[c>>>0]=0,c-w},Et=(o,h,c)=>fn(o,r(),h,c);function mn(o,h){if(y)return be(5,1,o,h)}function gn(o,h,c){if(y)return be(6,1,o,h,c)}function yn(o,h,c){return y?be(7,1,o,h,c):0}function _n(o,h){if(y)return be(8,1,o,h)}function bn(o,h,c){if(y)return be(9,1,o,h,c)}function $n(o,h,c,g){if(y)return be(10,1,o,h,c,g)}function wn(o,h,c,g){if(y)return be(11,1,o,h,c,g)}function vn(o,h,c,g){if(y)return be(12,1,o,h,c,g)}function xn(o){if(y)return be(13,1,o)}function kn(o,h){if(y)return be(14,1,o,h)}function Sn(o,h,c){if(y)return be(15,1,o,h,c)}var Tn,st,Bc=()=>{at("")},Fe=o=>{for(var h="";r()[o>>>0];)h+=Tn[r()[o++>>>0]];return h},Kr={},Qr={};function Je(o,h,c={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(g,w,T={}){var O=w.name;if(!g)throw new st(`type "${O}" must have a positive integer typeid pointer`);if(Qr.hasOwnProperty(g)){if(T.Tb)return;throw new st(`Cannot register type '${O}' twice`)}Qr[g]=w,Kr.hasOwnProperty(g)&&(w=Kr[g],delete Kr[g],w.forEach(B=>B()))}(o,h,c)}var In=(o,h,c)=>{switch(h){case 1:return c?g=>t()[g>>>0]:g=>r()[g>>>0];case 2:return c?g=>i()[g>>>1>>>0]:g=>a()[g>>>1>>>0];case 4:return c?g=>n()[g>>>2>>>0]:g=>s()[g>>>2>>>0];case 8:return c?g=>ue[g>>>3]:g=>ke[g>>>3];default:throw new TypeError(`invalid integer width (${h}): ${o}`)}};function Dc(o,h,c){c>>>=0,Je(o>>>=0,{name:h=Fe(h>>>0),fromWireType:g=>g,toWireType:function(g,w){if(typeof w!="bigint"&&typeof w!="number")throw w=w===null?"null":(g=typeof w)=="object"||g==="array"||g==="function"?w.toString():""+w,new TypeError(`Cannot convert "${w}" to ${this.name}`);return typeof w=="number"&&(w=BigInt(w)),w},argPackAdvance:ot,readValueFromPointer:In(h,c,h.indexOf("u")==-1),Eb:null})}var ot=8;function Mc(o,h,c,g){Je(o>>>=0,{name:h=Fe(h>>>0),fromWireType:function(w){return!!w},toWireType:function(w,T){return T?c:g},argPackAdvance:ot,readValueFromPointer:function(w){return this.fromWireType(r()[w>>>0])},Eb:null})}var Yr=[],et=[];function Zr(o){9<(o>>>=0)&&--et[o+1]==0&&(et[o]=void 0,Yr.push(o))}var Ae=o=>{if(!o)throw new st("Cannot use deleted val. handle = "+o);return et[o]},De=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Yr.pop()||et.length;return et[h]=o,et[h+1]=1,h}};function Xr(o){return this.fromWireType(s()[o>>>2>>>0])}var Nc={name:"emscripten::val",fromWireType:o=>{var h=Ae(o);return Zr(o),h},toWireType:(o,h)=>De(h),argPackAdvance:ot,readValueFromPointer:Xr,Eb:null};function Pc(o){return Je(o>>>0,Nc)}var Uc=(o,h)=>{switch(h){case 4:return function(c){return this.fromWireType(l()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(d()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${o}`)}};function Wc(o,h,c){c>>>=0,Je(o>>>=0,{name:h=Fe(h>>>0),fromWireType:g=>g,toWireType:(g,w)=>w,argPackAdvance:ot,readValueFromPointer:Uc(h,c),Eb:null})}function qc(o,h,c,g,w){if(o>>>=0,c>>>=0,h=Fe(h>>>0),w===-1&&(w=4294967295),w=B=>B,g===0){var T=32-8*c;w=B=>B<<T>>>T}var O=h.includes("unsigned")?function(B,W){return W>>>0}:function(B,W){return W};Je(o,{name:h,fromWireType:w,toWireType:O,argPackAdvance:ot,readValueFromPointer:In(h,c,g!==0),Eb:null})}function Vc(o,h,c){function g(T){var O=s()[T>>>2>>>0];return T=s()[T+4>>>2>>>0],new w(t().buffer,T,O)}var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Je(o>>>=0,{name:c=Fe(c>>>0),fromWireType:g,argPackAdvance:ot,readValueFromPointer:g},{Tb:!0})}function Lc(o,h){o>>>=0;var c=(h=Fe(h>>>0))==="std::string";Je(o,{name:h,fromWireType:function(g){var w=s()[g>>>2>>>0],T=g+4;if(c)for(var O=T,B=0;B<=w;++B){var W=T+B;if(B==w||r()[W>>>0]==0){if(O=xe(O,W-O),H===void 0)var H=O;else H+="\0",H+=O;O=W+1}}else{for(H=Array(w),B=0;B<w;++B)H[B]=String.fromCharCode(r()[T+B>>>0]);H=H.join("")}return Ke(g),H},toWireType:function(g,w){w instanceof ArrayBuffer&&(w=new Uint8Array(w));var T=typeof w=="string";if(!(T||w instanceof Uint8Array||w instanceof Uint8ClampedArray||w instanceof Int8Array))throw new st("Cannot pass non-string to std::string");var O=c&&T?jr(w):w.length,B=fr(4+O+1),W=B+4;if(s()[B>>>2>>>0]=O,c&&T)Et(w,W,O+1);else if(T)for(T=0;T<O;++T){var H=w.charCodeAt(T);if(255<H)throw Ke(W),new st("String has UTF-16 code units that do not fit in 8 bits");r()[W+T>>>0]=H}else for(T=0;T<O;++T)r()[W+T>>>0]=w[T];return g!==null&&g.push(Ke,B),B},argPackAdvance:ot,readValueFromPointer:Xr,Eb(g){Ke(g)}})}var En=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Hc=(o,h)=>{for(var c=o>>1,g=c+h/2;!(c>=g)&&a()[c>>>0];)++c;if(32<(c<<=1)-o&&En)return En.decode(r().slice(o,c));for(c="",g=0;!(g>=h/2);++g){var w=i()[o+2*g>>>1>>>0];if(w==0)break;c+=String.fromCharCode(w)}return c},Gc=(o,h,c)=>{if(c??=2147483647,2>c)return 0;var g=h;c=(c-=2)<2*o.length?c/2:o.length;for(var w=0;w<c;++w){var T=o.charCodeAt(w);i()[h>>>1>>>0]=T,h+=2}return i()[h>>>1>>>0]=0,h-g},Fc=o=>2*o.length,jc=(o,h)=>{for(var c=0,g="";!(c>=h/4);){var w=n()[o+4*c>>>2>>>0];if(w==0)break;++c,65536<=w?(w-=65536,g+=String.fromCharCode(55296|w>>10,56320|1023&w)):g+=String.fromCharCode(w)}return g},Kc=(o,h,c)=>{if(h>>>=0,c??=2147483647,4>c)return 0;var g=h;c=g+c-4;for(var w=0;w<o.length;++w){var T=o.charCodeAt(w);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&o.charCodeAt(++w)),n()[h>>>2>>>0]=T,(h+=4)+4>c)break}return n()[h>>>2>>>0]=0,h-g},Qc=o=>{for(var h=0,c=0;c<o.length;++c){var g=o.charCodeAt(c);55296<=g&&57343>=g&&++c,h+=4}return h};function Yc(o,h,c){if(o>>>=0,h>>>=0,c=Fe(c>>>=0),h===2)var g=Hc,w=Gc,T=Fc,O=B=>a()[B>>>1>>>0];else h===4&&(g=jc,w=Kc,T=Qc,O=B=>s()[B>>>2>>>0]);Je(o,{name:c,fromWireType:B=>{for(var W,H=s()[B>>>2>>>0],Z=B+4,oe=0;oe<=H;++oe){var he=B+4+oe*h;oe!=H&&O(he)!=0||(Z=g(Z,he-Z),W===void 0?W=Z:(W+="\0",W+=Z),Z=he+h)}return Ke(B),W},toWireType:(B,W)=>{if(typeof W!="string")throw new st(`Cannot pass non-string to C++ string type ${c}`);var H=T(W),Z=fr(4+H+h);return s()[Z>>>2>>>0]=H/h,w(W,Z+4,H+h),B!==null&&B.push(Ke,Z),Z},argPackAdvance:ot,readValueFromPointer:Xr,Eb(B){Ke(B)}})}function Zc(o,h){Je(o>>>=0,{Ub:!0,name:h=Fe(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var Xc=()=>1;function Jc(o){ni(o>>>0,!b,1,!_,131072,!1),nn()}var Cn=o=>{if(!_e)try{if(o(),!(0<ft))try{y?mr(V):Fr(V)}catch(h){h instanceof Lr||h=="unwind"||I(0,h)}}catch(h){h instanceof Lr||h=="unwind"||I(0,h)}};function Jr(o){o>>>=0,typeof Atomics.oc=="function"&&(Atomics.oc(n(),o>>>2,o).value.then(nr),o+=128,Atomics.store(n(),o>>>2,1))}var nr=()=>{var o=zt();o&&(Jr(o),Cn(ns))};function ef(o,h){(o>>>=0)==h>>>0?setTimeout(nr):y?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=Ge[o])&&o.postMessage({cmd:"checkMailbox"})}var ei=[];function tf(o,h,c,g,w){for(h>>>=0,g/=2,ei.length=g,c=w>>>0>>>3,w=0;w<g;w++)ei[w]=ue[c+2*w]?ue[c+2*w+1]:d()[c+2*w+1>>>0];return(h?Vr[h]:Ff[o])(...ei)}function rf(o){o>>>=0,y?postMessage({cmd:"cleanupThread",thread:o}):an(Ge[o])}function af(o){}var sr=(o,h)=>{var c=Qr[o];if(c===void 0)throw o=ts(o),c=Fe(o),Ke(o),new st(`${h} has unknown type ${c}`);return c},zn=(o,h,c)=>{var g=[];return o=o.toWireType(g,c),g.length&&(s()[h>>>2>>>0]=De(g)),o};function nf(o,h,c){return h>>>=0,c>>>=0,o=Ae(o>>>0),h=sr(h,"emval::as"),zn(h,c,o)}function sf(o,h){return h>>>=0,o=Ae(o>>>0),(h=sr(h,"emval::as")).toWireType(null,o)}var or=o=>{try{o()}catch(h){at(h)}},ut=0,je=null,An=0,ur=[],On={},Rn={},of=0,ti=null,uf=[];function Bn(o){return function(h){if(!_e){if(ut===0){var c=!1,g=!1;h((w=0)=>{if(!_e&&(An=w,c=!0,g)){ut=2,or(()=>ds(je)),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.resume(),w=!1;try{var T=function(){var W=n()[je+8>>>2>>>0];return W=Y[Rn[W]],--ft,W()}()}catch(W){T=W,w=!0}var O=!1;if(!je){var B=ti;B&&(ti=null,(w?B.reject:B.resolve)(T),O=!0)}if(w&&!O)throw T}}),g=!0,c||(ut=1,je=function(){var w=fr(65548),T=w+12;s()[w>>>2>>>0]=T,s()[w+4>>>2>>>0]=T+65536,T=ur[0];var O=On[T];return O===void 0&&(O=of++,On[T]=O,Rn[O]=T),T=O,n()[w+8>>>2>>>0]=T,w}(),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.pause(),or(()=>us(je)))}else ut===2?(ut=0,or(ps),Ke(je),je=null,uf.forEach(Cn)):at(`invalid state: ${ut}`);return An}}(h=>{o().then(h)})}function lf(o){return o>>>=0,Bn(()=>(o=Ae(o)).then(De))}var lr=[];function df(o,h,c,g){return c>>>=0,g>>>=0,(o=lr[o>>>0])(null,h=Ae(h>>>0),c,g)}var pf={},dr=o=>{var h=pf[o];return h===void 0?Fe(o):h};function hf(o,h,c,g,w){return c>>>=0,g>>>=0,w>>>=0,(o=lr[o>>>0])(h=Ae(h>>>0),h[c=dr(c)],g,w)}var Dn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function cf(o){return(o>>>=0)==0?De(Dn()):(o=dr(o),De(Dn()[o]))}var ff=o=>{var h=lr.length;return lr.push(o),h},mf=(o,h)=>{for(var c=Array(o),g=0;g<o;++g)c[g]=sr(s()[h+4*g>>>2>>>0],"parameter "+g);return c},Mn=(o,h)=>Object.defineProperty(h,"name",{value:o});function gf(o,h,c){var g=(h=mf(o,h>>>0)).shift();o--;var w=`return function (obj, func, destructorsRef, args) {
`,T=0,O=[];c===0&&O.push("obj");for(var B=["retType"],W=[g],H=0;H<o;++H)O.push("arg"+H),B.push("argType"+H),W.push(h[H]),w+=`  var arg${H} = argType${H}.readValueFromPointer(args${T?"+"+T:""});
`,T+=h[H].argPackAdvance;return w+=`  var rv = ${c===1?"new func":"func.call"}(${O.join(", ")});
`,g.Ub||(B.push("emval_returnValue"),W.push(zn),w+=`  return emval_returnValue(retType, destructorsRef, rv);
`),B.push(w+`};
`),o=function(Z){var oe=Function;if(!(oe instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof oe} which is not a function`);var he=Mn(oe.name||"unknownFunctionName",function(){});return he.prototype=oe.prototype,he=new he,(Z=oe.apply(he,Z))instanceof Object?Z:he}(B)(...W),c=`methodCaller<(${h.map(Z=>Z.name).join(", ")}) => ${g.name}>`,ff(Mn(c,o))}function yf(o){return o=dr(o>>>0),De(u[o])}function _f(o,h){return h>>>=0,o=Ae(o>>>0),h=Ae(h),De(o[h])}function bf(o){9<(o>>>=0)&&(et[o+1]+=1)}function $f(){return De([])}function wf(o){o=Ae(o>>>0);for(var h=Array(o.length),c=0;c<o.length;c++)h[c]=o[c];return De(h)}function vf(o){return De(dr(o>>>0))}function xf(){return De({})}function kf(o){for(var h=Ae(o>>>=0);h.length;){var c=h.pop();h.pop()(c)}Zr(o)}function Sf(o,h,c){h>>>=0,c>>>=0,o=Ae(o>>>0),h=Ae(h),c=Ae(c),o[h]=c}function Tf(o,h){return h>>>=0,o=(o=sr(o>>>0,"_emval_take_value")).readValueFromPointer(h),De(o)}function If(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getUTCSeconds(),n()[h+4>>>2>>>0]=o.getUTCMinutes(),n()[h+8>>>2>>>0]=o.getUTCHours(),n()[h+12>>>2>>>0]=o.getUTCDate(),n()[h+16>>>2>>>0]=o.getUTCMonth(),n()[h+20>>>2>>>0]=o.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=o}var Ct=o=>o%4==0&&(o%100!=0||o%400==0),Nn=[0,31,60,91,121,152,182,213,244,274,305,335],Pn=[0,31,59,90,120,151,181,212,243,273,304,334];function Ef(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getSeconds(),n()[h+4>>>2>>>0]=o.getMinutes(),n()[h+8>>>2>>>0]=o.getHours(),n()[h+12>>>2>>>0]=o.getDate(),n()[h+16>>>2>>>0]=o.getMonth(),n()[h+20>>>2>>>0]=o.getFullYear()-1900,n()[h+24>>>2>>>0]=o.getDay();var c=(Ct(o.getFullYear())?Nn:Pn)[o.getMonth()]+o.getDate()-1|0;n()[h+28>>>2>>>0]=c,n()[h+36>>>2>>>0]=-60*o.getTimezoneOffset(),c=new Date(o.getFullYear(),6,1).getTimezoneOffset();var g=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(c!=g&&o.getTimezoneOffset()==Math.min(g,c)),n()[h+32>>>2>>>0]=o}function Cf(o){o>>>=0;var h=new Date(n()[o+20>>>2>>>0]+1900,n()[o+16>>>2>>>0],n()[o+12>>>2>>>0],n()[o+8>>>2>>>0],n()[o+4>>>2>>>0],n()[o>>>2>>>0],0),c=n()[o+32>>>2>>>0],g=h.getTimezoneOffset(),w=new Date(h.getFullYear(),6,1).getTimezoneOffset(),T=new Date(h.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(T,w);return 0>c?n()[o+32>>>2>>>0]=+(w!=T&&O==g):0<c!=(O==g)&&(w=Math.max(T,w),h.setTime(h.getTime()+6e4*((0<c?O:w)-g))),n()[o+24>>>2>>>0]=h.getDay(),c=(Ct(h.getFullYear())?Nn:Pn)[h.getMonth()]+h.getDate()-1|0,n()[o+28>>>2>>>0]=c,n()[o>>>2>>>0]=h.getSeconds(),n()[o+4>>>2>>>0]=h.getMinutes(),n()[o+8>>>2>>>0]=h.getHours(),n()[o+12>>>2>>>0]=h.getDate(),n()[o+16>>>2>>>0]=h.getMonth(),n()[o+20>>>2>>>0]=h.getYear(),o=h.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Un(o,h,c,g,w,T,O){return y?be(16,1,o,h,c,g,w,T,O):-52}function Wn(o,h,c,g,w,T){if(y)return be(17,1,o,h,c,g,w,T)}function zf(o,h,c,g){o>>>=0,h>>>=0,c>>>=0,g>>>=0;var w=new Date().getFullYear(),T=new Date(w,0,1),O=new Date(w,6,1);w=T.getTimezoneOffset();var B=O.getTimezoneOffset(),W=Math.max(w,B);s()[o>>>2>>>0]=60*W,n()[h>>>2>>>0]=+(w!=B),T=(o=H=>H.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(T),O=o(O),B<w?(Et(T,c,17),Et(O,g,17)):(Et(T,g,17),Et(O,c,17))}var ri=[],qn=(o,h)=>{ri.length=0;for(var c;c=r()[o++>>>0];){var g=c!=105;h+=(g&=c!=112)&&h%8?4:0,ri.push(c==112?s()[h>>>2>>>0]:c==106?ue[h>>>3]:c==105?n()[h>>>2>>>0]:d()[h>>>3>>>0]),h+=g?8:4}return ri};function Af(o,h,c){return o>>>=0,h=qn(h>>>0,c>>>0),Vr[o](...h)}function Of(o,h,c){return o>>>=0,h=qn(h>>>0,c>>>0),Vr[o](...h)}var Rf=()=>{},Bf=()=>Date.now();function Df(o,h){return L(xe(o>>>0,h>>>0))}var Vn,Mf=()=>{throw ft+=1,"unwind"};function Nf(){return 4294901760}Vn=()=>performance.timeOrigin+performance.now();var Pf=()=>navigator.hardwareConcurrency;function Uf(){return at("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Wf(o){o>>>=0;var h=r().length;if(o<=h||4294901760<o)return!1;for(var c=1;4>=c;c*=2){var g=h*(1+.2/c);g=Math.min(g,o+100663296);var w=Math;g=Math.max(o,g);e:{w=(w.min.call(w,4294901760,g+(65536-g%65536)%65536)-Q.buffer.byteLength+65535)/65536;try{Q.grow(w),me();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}var pr=()=>(at("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Wt={},Ln=o=>{o.forEach(h=>{pr()})};function qf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Ln(o),Wt.Qb=pr(),Wt.fc=o,Wt.Qb}function Vf(o,h,c){if(o>>>=0,h>>>=0,Wt.Qb==o)var g=Wt.fc;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Ln(g);for(var w=3;g[w]&&pr()!=o;)++w;for(o=0;o<c&&g[o+w];++o)n()[h+4*o>>>2>>>0]=pr();return o}var ii,ai={},Hn=()=>{if(!ii){var o,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ai)ai[o]===void 0?delete h[o]:h[o]=ai[o];var c=[];for(o in h)c.push(`${o}=${h[o]}`);ii=c}return ii};function Gn(o,h){if(y)return be(18,1,o,h);o>>>=0,h>>>=0;var c=0;return Hn().forEach((g,w)=>{var T=h+c;for(w=s()[o+4*w>>>2>>>0]=T,T=0;T<g.length;++T)t()[w++>>>0]=g.charCodeAt(T);t()[w>>>0]=0,c+=g.length+1}),0}function Fn(o,h){if(y)return be(19,1,o,h);o>>>=0,h>>>=0;var c=Hn();s()[o>>>2>>>0]=c.length;var g=0;return c.forEach(w=>g+=w.length+1),s()[h>>>2>>>0]=g,0}function jn(o){return y?be(20,1,o):52}function Kn(o,h,c,g){return y?be(21,1,o,h,c,g):52}function Qn(o,h,c,g){return y?be(22,1,o,h,c,g):70}var Lf=[null,[],[]];function Yn(o,h,c,g){if(y)return be(23,1,o,h,c,g);h>>>=0,c>>>=0,g>>>=0;for(var w=0,T=0;T<c;T++){var O=s()[h>>>2>>>0],B=s()[h+4>>>2>>>0];h+=8;for(var W=0;W<B;W++){var H=r()[O+W>>>0],Z=Lf[o];H===0||H===10?((o===1?G:L)(pn(Z,0)),Z.length=0):Z.push(H)}w+=B}return s()[g>>>2>>>0]=w,0}var Zn=[31,29,31,30,31,30,31,31,30,31,30,31],Xn=[31,28,31,30,31,30,31,31,30,31,30,31],Hf=(o,h)=>{t().set(o,h>>>0)};function Jn(o,h,c,g){function w(A,se,we){for(A=typeof A=="number"?A.toString():A||"";A.length<se;)A=we[0]+A;return A}function T(A,se){return w(A,se,"0")}function O(A,se){function we(cs){return 0>cs?-1:0<cs?1:0}var gt;return(gt=we(A.getFullYear()-se.getFullYear()))===0&&(gt=we(A.getMonth()-se.getMonth()))===0&&(gt=we(A.getDate()-se.getDate())),gt}function B(A){switch(A.getDay()){case 0:return new Date(A.getFullYear()-1,11,29);case 1:return A;case 2:return new Date(A.getFullYear(),0,3);case 3:return new Date(A.getFullYear(),0,2);case 4:return new Date(A.getFullYear(),0,1);case 5:return new Date(A.getFullYear()-1,11,31);case 6:return new Date(A.getFullYear()-1,11,30)}}function W(A){var se=A.Cb;for(A=new Date(new Date(A.Db+1900,0,1).getTime());0<se;){var we=A.getMonth(),gt=(Ct(A.getFullYear())?Zn:Xn)[we];if(!(se>gt-A.getDate())){A.setDate(A.getDate()+se);break}se-=gt-A.getDate()+1,A.setDate(1),11>we?A.setMonth(we+1):(A.setMonth(0),A.setFullYear(A.getFullYear()+1))}return we=new Date(A.getFullYear()+1,0,4),se=B(new Date(A.getFullYear(),0,4)),we=B(we),0>=O(se,A)?0>=O(we,A)?A.getFullYear()+1:A.getFullYear():A.getFullYear()-1}o>>>=0,h>>>=0,c>>>=0,g>>>=0;var H=s()[g+40>>>2>>>0];for(var Z in g={lc:n()[g>>>2>>>0],kc:n()[g+4>>>2>>>0],Ib:n()[g+8>>>2>>>0],Mb:n()[g+12>>>2>>>0],Jb:n()[g+16>>>2>>>0],Db:n()[g+20>>>2>>>0],vb:n()[g+24>>>2>>>0],Cb:n()[g+28>>>2>>>0],sc:n()[g+32>>>2>>>0],jc:n()[g+36>>>2>>>0],mc:H?xe(H):""},c=xe(c),H={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})c=c.replace(new RegExp(Z,"g"),H[Z]);var oe="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),he="January February March April May June July August September October November December".split(" ");for(Z in H={"%a":A=>oe[A.vb].substring(0,3),"%A":A=>oe[A.vb],"%b":A=>he[A.Jb].substring(0,3),"%B":A=>he[A.Jb],"%C":A=>T((A.Db+1900)/100|0,2),"%d":A=>T(A.Mb,2),"%e":A=>w(A.Mb,2," "),"%g":A=>W(A).toString().substring(2),"%G":W,"%H":A=>T(A.Ib,2),"%I":A=>((A=A.Ib)==0?A=12:12<A&&(A-=12),T(A,2)),"%j":A=>{for(var se=0,we=0;we<=A.Jb-1;se+=(Ct(A.Db+1900)?Zn:Xn)[we++]);return T(A.Mb+se,3)},"%m":A=>T(A.Jb+1,2),"%M":A=>T(A.kc,2),"%n":()=>`
`,"%p":A=>0<=A.Ib&&12>A.Ib?"AM":"PM","%S":A=>T(A.lc,2),"%t":()=>"	","%u":A=>A.vb||7,"%U":A=>T(Math.floor((A.Cb+7-A.vb)/7),2),"%V":A=>{var se=Math.floor((A.Cb+7-(A.vb+6)%7)/7);if(2>=(A.vb+371-A.Cb-2)%7&&se++,se)se==53&&((we=(A.vb+371-A.Cb)%7)==4||we==3&&Ct(A.Db)||(se=1));else{se=52;var we=(A.vb+7-A.Cb-1)%7;(we==4||we==5&&Ct(A.Db%400-1))&&se++}return T(se,2)},"%w":A=>A.vb,"%W":A=>T(Math.floor((A.Cb+7-(A.vb+6)%7)/7),2),"%y":A=>(A.Db+1900).toString().substring(2),"%Y":A=>A.Db+1900,"%z":A=>{var se=0<=(A=A.jc);return A=Math.abs(A)/60,(se?"+":"-")+("0000"+(A/60*100+A%60)).slice(-4)},"%Z":A=>A.mc,"%%":()=>"%"},c=c.replace(/%%/g,"\0\0"),H)c.includes(Z)&&(c=c.replace(new RegExp(Z,"g"),H[Z](g)));return Z=function(A){var se=Array(jr(A)+1);return fn(A,se,0,se.length),se}(c=c.replace(/\0\0/g,"%")),Z.length>h?0:(Hf(Z,o),Z.length-1)}function Gf(o,h,c,g){return Jn(o>>>0,h>>>0,c>>>0,g>>>0)}y||function(){for(var o=u.numThreads-1;o--;)on();it.unshift(()=>{Pt++,function(h){y?h():Promise.all(nt.map(sn)).then(h)}(()=>Ka())})}();for(var es=Array(256),hr=0;256>hr;++hr)es[hr]=String.fromCharCode(hr);Tn=es,st=u.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},u.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},et.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>et.length/2-5-Yr.length;var Ff=[Gr,tn,un,hn,cn,mn,gn,yn,_n,bn,$n,wn,vn,xn,kn,Sn,Un,Wn,Gn,Fn,jn,Kn,Qn,Yn],Y=function(){function o(c,g){return Y=c.exports,Y=function(){var w=Y,T={};for(let[O,B]of Object.entries(w))T[O]=typeof B=="function"?(...W)=>{ur.push(O);try{return B(...W)}finally{_e||(ur.pop(),je&&ut===1&&ur.length===0&&(ut=0,ft+=1,or(ls),typeof Fibers<"u"&&Fibers.tc()))}}:B;return T}(),Y=function(){var w=Y,T=B=>W=>B(W)>>>0,O=B=>()=>B()>>>0;return(w=Object.assign({},w)).Da=T(w.Da),w.gb=O(w.gb),w.ib=T(w.ib),w.emscripten_main_runtime_thread_id=O(w.emscripten_main_runtime_thread_id),w.tb=T(w.tb),w.ub=O(w.ub),w}(),rn.push(Y.jb),Nt.unshift(Y.Ca),ae=g,Ka(),Y}var h=Ja();if(Pt++,u.instantiateWasm)try{return u.instantiateWasm(h,o)}catch(c){L(`Module.instantiateWasm callback failed with error: ${c}`),f(c)}return qr||=u.locateFile?Qa("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",C):C+"ort-wasm-simd-threaded.jsep.wasm":new URL("/chitra/assets/ort-wasm-simd-threaded.jsep-Y7jqkEt_.wasm",import.meta.url).href,function(c,g){var w=qr;return E||typeof WebAssembly.instantiateStreaming!="function"||Qa(w)||Ya(w)||typeof fetch!="function"?Xa(w,c,g):fetch(w,{credentials:"same-origin"}).then(T=>WebAssembly.instantiateStreaming(T,c).then(g,function(O){return L(`wasm streaming compile failed: ${O}`),L("falling back to ArrayBuffer instantiation"),Xa(w,c,g)}))}(h,function(c){o(c.instance,c.module)}).catch(f),{}}(),ts=o=>(ts=Y.Da)(o),rs=()=>(rs=Y.Ea)();u._OrtInit=(o,h)=>(u._OrtInit=Y.Fa)(o,h),u._OrtGetLastError=(o,h)=>(u._OrtGetLastError=Y.Ga)(o,h),u._OrtCreateSessionOptions=(o,h,c,g,w,T,O,B,W,H)=>(u._OrtCreateSessionOptions=Y.Ha)(o,h,c,g,w,T,O,B,W,H),u._OrtAppendExecutionProvider=(o,h)=>(u._OrtAppendExecutionProvider=Y.Ia)(o,h),u._OrtAddFreeDimensionOverride=(o,h,c)=>(u._OrtAddFreeDimensionOverride=Y.Ja)(o,h,c),u._OrtAddSessionConfigEntry=(o,h,c)=>(u._OrtAddSessionConfigEntry=Y.Ka)(o,h,c),u._OrtReleaseSessionOptions=o=>(u._OrtReleaseSessionOptions=Y.La)(o),u._OrtCreateSession=(o,h,c)=>(u._OrtCreateSession=Y.Ma)(o,h,c),u._OrtReleaseSession=o=>(u._OrtReleaseSession=Y.Na)(o),u._OrtGetInputOutputCount=(o,h,c)=>(u._OrtGetInputOutputCount=Y.Oa)(o,h,c),u._OrtGetInputName=(o,h)=>(u._OrtGetInputName=Y.Pa)(o,h),u._OrtGetOutputName=(o,h)=>(u._OrtGetOutputName=Y.Qa)(o,h),u._OrtFree=o=>(u._OrtFree=Y.Ra)(o),u._OrtCreateTensor=(o,h,c,g,w,T)=>(u._OrtCreateTensor=Y.Sa)(o,h,c,g,w,T),u._OrtGetTensorData=(o,h,c,g,w)=>(u._OrtGetTensorData=Y.Ta)(o,h,c,g,w),u._OrtReleaseTensor=o=>(u._OrtReleaseTensor=Y.Ua)(o),u._OrtCreateRunOptions=(o,h,c,g)=>(u._OrtCreateRunOptions=Y.Va)(o,h,c,g),u._OrtAddRunConfigEntry=(o,h,c)=>(u._OrtAddRunConfigEntry=Y.Wa)(o,h,c),u._OrtReleaseRunOptions=o=>(u._OrtReleaseRunOptions=Y.Xa)(o),u._OrtCreateBinding=o=>(u._OrtCreateBinding=Y.Ya)(o),u._OrtBindInput=(o,h,c)=>(u._OrtBindInput=Y.Za)(o,h,c),u._OrtBindOutput=(o,h,c,g)=>(u._OrtBindOutput=Y._a)(o,h,c,g),u._OrtClearBoundOutputs=o=>(u._OrtClearBoundOutputs=Y.$a)(o),u._OrtReleaseBinding=o=>(u._OrtReleaseBinding=Y.ab)(o),u._OrtRunWithBinding=(o,h,c,g,w)=>(u._OrtRunWithBinding=Y.bb)(o,h,c,g,w),u._OrtRun=(o,h,c,g,w,T,O,B)=>(u._OrtRun=Y.cb)(o,h,c,g,w,T,O,B),u._OrtEndProfiling=o=>(u._OrtEndProfiling=Y.db)(o),u._JsepOutput=(o,h,c)=>(u._JsepOutput=Y.eb)(o,h,c),u._JsepGetNodeName=o=>(u._JsepGetNodeName=Y.fb)(o);var cr,zt=()=>(zt=Y.gb)(),Ke=u._free=o=>(Ke=u._free=Y.hb)(o),fr=u._malloc=o=>(fr=u._malloc=Y.ib)(o),ni=(o,h,c,g,w,T)=>(ni=Y.lb)(o,h,c,g,w,T),is=()=>(is=Y.mb)(),as=(o,h,c,g,w)=>(as=Y.nb)(o,h,c,g,w),si=o=>(si=Y.ob)(o),mr=o=>(mr=Y.pb)(o),ns=()=>(ns=Y.qb)(),ss=(o,h)=>(ss=Y.rb)(o,h),gr=o=>(gr=Y.sb)(o),oi=o=>(oi=Y.tb)(o),ui=()=>(ui=Y.ub)(),os=u.dynCall_ii=(o,h)=>(os=u.dynCall_ii=Y.wb)(o,h),us=o=>(us=Y.xb)(o),ls=()=>(ls=Y.yb)(),ds=o=>(ds=Y.zb)(o),ps=()=>(ps=Y.Ab)();function hs(){0<Pt||(y?(p(u),y||ar(Nt),startWorker(u)):(ar(it),0<Pt||cr||(cr=!0,u.calledRun=!0,_e||(y||ar(Nt),p(u),y||ar(Wr)))))}return u.___start_em_js=932469,u.___stop_em_js=932715,u.stackSave=()=>ui(),u.stackRestore=o=>gr(o),u.stackAlloc=o=>oi(o),u.setValue=function(o,h,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":t()[o>>>0]=h;break;case"i16":i()[o>>>1>>>0]=h;break;case"i32":n()[o>>>2>>>0]=h;break;case"i64":ue[o>>>3]=BigInt(h);break;case"float":l()[o>>>2>>>0]=h;break;case"double":d()[o>>>3>>>0]=h;break;case"*":s()[o>>>2>>>0]=h;break;default:at(`invalid type for setValue: ${c}`)}},u.getValue=function(o,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return t()[o>>>0];case"i16":return i()[o>>>1>>>0];case"i32":return n()[o>>>2>>>0];case"i64":return ue[o>>>3];case"float":return l()[o>>>2>>>0];case"double":return d()[o>>>3>>>0];case"*":return s()[o>>>2>>>0];default:at(`invalid type for getValue: ${h}`)}},u.UTF8ToString=xe,u.stringToUTF8=Et,u.lengthBytesUTF8=jr,Ut=function o(){cr||hs(),cr||(Ut=o)},hs(),u.PTR_SIZE=4,m}),md=mi,globalThis.self?.name==="em-pthread"&&mi()}),gi,ms,Oe,gd,_r,gs,ys,yi,_s,_i,yd,bi,_d,va=N(()=>{wa(),gi=typeof location>"u"?void 0:location.origin,ms=()=>import.meta.url?.startsWith("file:")?new URL(new URL("/chitra/assets/ort.bundle.min-D2-GKZ-g.mjs",import.meta.url).href,gi).href:import.meta.url,Oe=ms(),gd=()=>{if(Oe&&!Oe.startsWith("blob:"))return Oe.substring(0,Oe.lastIndexOf("/")+1)},_r=(e,t)=>{try{let r=t??Oe;return(r?new URL(e,r):new URL(e)).origin===gi}catch{return!1}},gs=(e,t)=>{let r=t??Oe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},ys=(e,t)=>`${t??"./"}${e}`,yi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},_s=async e=>(await import(e)).default,_i=(pm(),Or(hd)).default,yd=async()=>{if(!Oe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(_r(Oe))return[void 0,_i()];let e=await yi(Oe);return[e,_i(e)]},bi=(hm(),Or(fd)).default,_d=async(e,t,r)=>{if(!e&&!t&&bi&&Oe&&_r(Oe))return[void 0,bi];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??gs(i,t),n=r&&a&&!_r(a,t),s=n?await yi(a):a??ys(i,t);return[n?s:void 0,await _s(s)]}}}),$i,br,Vt,wi,bs,$s,xa,Se,Tt=N(()=>{va(),br=!1,Vt=!1,wi=!1,bs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},$s=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},xa=async e=>{if(br)return Promise.resolve();if(Vt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(wi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Vt=!0;let t=e.initTimeout,r=e.numThreads;if(!$s())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=bs();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,l=s?.href??s,d=a?.wasm,p=d?.href??d,f=e.wasmBinary,[u,m]=await _d(l,n,r>1),_=!1,b=[];if(t>0&&b.push(new Promise(y=>{setTimeout(()=>{_=!0,y()},t)})),b.push(new Promise((y,x)=>{let v={numThreads:r};if(f)v.wasmBinary=f;else if(p||n)v.locateFile=$=>p??n+$;else if(l&&l.indexOf("blob:")!==0)v.locateFile=$=>new URL($,l).href;else if(u){let $=gd();$&&(v.locateFile=k=>$+k)}m(v).then($=>{Vt=!1,br=!0,$i=$,y(),u&&URL.revokeObjectURL(u)},$=>{Vt=!1,wi=!0,x($)})})),await Promise.race(b),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if(br&&$i)return $i;throw new Error("WebAssembly is not initialized yet.")}}),Ee,Br,pe,ka=N(()=>{Tt(),Ee=(e,t)=>{let r=Se(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Br=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Br(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},pe=e=>{let t=Se(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),bd,cm=N(()=>{Tt(),ka(),bd=e=>{let t=Se(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ee(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&pe("Can't create run options."),e?.extra!==void 0&&Br(e.extra,"",new WeakSet,(s,l)=>{let d=Ee(s,i),p=Ee(l,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&pe(`Can't set a run config entry: ${s} - ${l}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),ws,vs,xs,ks,$d,fm=N(()=>{Tt(),ka(),ws=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},xs=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ks=(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name;switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let s=i?.deviceType;if(s){let l=Ee("deviceType",r),d=Ee(s,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&pe(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(a="JS",typeof i!="string"){let s=i;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=Ee("preferredLayout",r),d=Ee(s.preferredLayout,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&pe(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let n=Ee(a,r);Se()._OrtAppendExecutionProvider(e,n)!==0&&pe(`Can't append execution provider: ${a}.`)}},$d=e=>{let t=Se(),r=0,i=[],a=e||{};xs(a);try{let n=ws(a.graphOptimizationLevel??"all"),s=vs(a.executionMode??"sequential"),l=typeof a.logId=="string"?Ee(a.logId,i):0,d=a.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof a.optimizedModelFilePath=="string"?Ee(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,d,p,f),r===0&&pe("Can't create session options."),a.executionProviders&&ks(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let u=Ee("enableGraphCapture",i),m=Ee(a.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,u,m)!==0&&pe(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[u,m]of Object.entries(a.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let _=Ee(u,i);t._OrtAddFreeDimensionOverride(r,_,m)!==0&&pe(`Can't set a free dimension override: ${u} - ${m}.`)}return a.extra!==void 0&&Br(a.extra,"",new WeakSet,(u,m)=>{let _=Ee(u,i),b=Ee(m,i);t._OrtAddSessionConfigEntry(r,_,b)!==0&&pe(`Can't set a session config entry: ${u} - ${m}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&pe("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Zt,vt,Rt,Sa,Dr,Ta,Ia,na,J=N(()=>{Zt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},vt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Rt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},Sa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Dr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ta=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ia=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",na=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ea,wd=N(()=>{wa(),Ea=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let d=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await a.read();if(l)break;let p=d.byteLength;new Uint8Array(n,s,p).set(d),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ss,Ts,Is,Es,Ca,Cs,ce,rt=N(()=>{J(),Ss=["V","I","W","E","F"],Ts=(e,t)=>{console.log(`[${Ss[e]},${new Date().toISOString()}]${t}`)},Ca=(e,t)=>{Is=e,Es=t},Cs=(e,t)=>{let r=Dr(e),i=Dr(Is);r>=i&&Ts(r,typeof t=="function"?t():t)},ce=(...e)=>{Es&&Cs(...e)}}),za,vd=N(()=>{J(),za=(e,t)=>new(Sa(t))(e)}),Aa=N(()=>{}),vi,$r,wr,zs,As,xi,sa,Os,xd,mm=N(()=>{rt(),Aa(),vi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),$r=[],wr=e=>Math.ceil(Number(e)/16)*16,zs=e=>{for(let t=0;t<$r.length;t++){let r=$r[t];if(e<=r)return r}return Math.ceil(e/16)*16},As=1,xi=()=>As++,sa=async(e,t,r,i)=>{let a=wr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let l=n.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{n.destroy()}},Os=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of vi)$r.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=wr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,a)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([p.finish()]),l.destroy(),ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=wr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=xi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=zs(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:xi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await sa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=vi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},xd=(...e)=>new Os(...e)}),Rs,fe,ve=N(()=>{Rs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},fe=e=>new Rs(e)}),Bs,Dt,z,Mr,kd,Sd,Td,re=N(()=>{Bs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Dt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let l=Bs.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[n-2],s[n-1]]=l}for(let l=r?3:1;l<=n;l++){let d=i-l<0?1:e[i-l],p=a-l<0?1:t[a-l];if(d!==p&&d>1&&p>1)return;let f=Math.max(d,p);if(d&&p)s[n-l]=Math.max(d,p);else{if(f>1)return;s[n-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},z=class zr{static size(t){return zr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return zr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return zr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Mr=class Xt{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=i[l]||s[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,l){if(l){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Xt.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],i[d],a[d],n,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,i,a,n,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Xt.computeShapeHelper(t,r,d,i,a,n,s,l),d}static computeConvOutputShape(t,r,i,a,n,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Xt.computeShapeHelper(!1,t,d,i,a,n,s,l),d}static computeShapeHelper(t,r,i,a,n,s,l,d){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(Xt.adjustPadAndReturnShape(r[p+2],a[p],n[p],s[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,i,a,n,s,l,d){let p=i*(a-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return n[s]=0,n[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(d==="SAME_LOWER"?(f+1)/2:f/2),n[l]=f-n[s],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[l]-p)/r+1)}},kd=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,l;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let d=-1;if(i?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(n<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Dt.isValidBroadcast(a,[n,l]))throw new Error("gemm: invalid bias shape for broadcast");return[n,l,s]}},Sd=-34028234663852886e22,Td=34028234663852886e22}),Mt,vr,Te,Ce,K,$e,oa,Bt,ht,j,Lt,R,F,Id,Oa,Ds,Ed,ie=N(()=>{J(),re(),Mt=64,vr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Te=(e,t=1)=>{let r=vr(e,t);return typeof r=="string"?r:r[0]},Ce=(e,t=1)=>{let r=vr(e,t);return typeof r=="string"?r:r[1]},K=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:z.computeStrides(r)})}),t},$e=e=>e%4===0?4:e%2===0?2:1,oa=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Bt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ht=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Lt=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=vr(t,a),f=typeof p=="string"?p:p[1],u=typeof p=="string"?p:p[0],m={indices:d,value:f,storage:u,tensor:t},_=M=>typeof M=="string"?M:`${M}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",x=`${y}${e}_shape`,v=`${y}${e}_strides`,$="";for(let M=0;M<s-1;M++)$+=`
    let dim${M} = current / ${j(v,M,s)};
    let rest${M} = current % ${j(v,M,s)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;$+=`indices[${s-1}] = current;`;let k=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${$}
    return indices;
  }`,S=M=>(b.offsetToIndices=!0,s<2?M:`o2i_${e}(${M})`),I=[];if(s>=2)for(let M=s-1;M>=0;M--)I.push(`${j(v,M,s)} * (indices[${M}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${I.join("+")};
  }`,E=M=>(b.indicesToOffset=!0,s<2?M:`i2o_${e}(${M})`),D=(...M)=>s===0?"0u":`${m.indices}(${M.map(_).join(",")})`,P=(M,q)=>s<2?`${M}`:`${j(M,q,s)}`,G=(M,q,le)=>s<2?`${M}=${le};`:`${j(M,q,s)}=${le};`,L={},ee=(M,q)=>{b.broadcastedIndicesToOffset=!0;let le=`${q.name}broadcastedIndicesTo${e}Offset`;if(le in L)return`${le}(${M})`;let ue=[];for(let ke=s-1;ke>=0;ke--){let Xe=q.indicesGet("outputIndices",ke+q.rank-s);ue.push(`${P(v,ke)} * (${Xe} % ${P(x,ke)})`)}return L[le]=`fn ${le}(outputIndices: ${q.type.indices}) -> u32 {
             return ${ue.length>0?ue.join("+"):"0u"};
           }`,`${le}(${M})`},U=(M,q)=>(()=>{if(m.storage===m.value)return`${e}[${M}]=${q};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${q}), select(0u, 0xFFFFFFFFu, ${q} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${q}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${q}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),Q=M=>(()=>{if(m.storage===m.value)return`${e}[${M}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${M}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${M}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ae=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${f} {
    return ${Q(`i2o_${e}(indices)`)};
  }`,V=s<2?"":(()=>{let M=l.map(le=>`d${le}: u32`).join(", "),q=l.map(le=>`d${le}`).join(", ");return`
  fn get_${e}(${M}) -> ${f} {
    return get_${e}ByIndices(${D(q)});
  }`})(),te=(...M)=>{if(M.length!==s)throw new Error(`indices length must be ${s}`);let q=M.map(_).join(",");return s===0?Q("0u"):s===1?Q(q[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${q})`)},ne=M=>s<2?Q(M):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${M})`),X=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${f}) {
    ${U(`i2o_${e}(indices)`,"value")}
  }`,ge=s<2?"":(()=>{let M=l.map(le=>`d${le}: u32`).join(", "),q=l.map(le=>`d${le}`).join(", ");return`
  fn set_${e}(${M}, value: ${f}) {
    set_${e}ByIndices(${D(q)}, value);
  }`})();return{impl:()=>{let M=[],q=!1;return b.offsetToIndices&&(M.push(k),q=!0),b.indicesToOffset&&(M.push(C),q=!0),b.broadcastedIndicesToOffset&&(Object.values(L).forEach(le=>M.push(le)),q=!0),b.set&&(M.push(ge),q=!0),b.setByIndices&&(M.push(X),q=!0),b.get&&(M.push(V),q=!0),b.getByIndices&&(M.push(ae),q=!0),!n&&q&&M.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${z.computeStrides(r).join(",")});`),M.join(`
`)},type:m,offsetToIndices:S,indicesToOffset:E,broadcastedIndicesToOffset:ee,indices:D,indicesGet:P,indicesSet:G,set:(...M)=>{if(M.length!==s+1)throw new Error(`indices length must be ${s}`);let q=M[s];if(typeof q!="string")throw new Error("value must be string");let le=M.slice(0,s).map(_).join(",");return s===0?U("0u",q):s===1?U(le[0],q):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${le}, ${q})`)},setByOffset:U,setByIndices:(M,q)=>s<2?U(M,q):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${q});`),get:te,getByOffset:Q,getByIndices:ne,usage:i,name:e,strides:v,shape:x,rank:s}},R=(e,t,r,i=1)=>Lt(e,t,r,"input",i),F=(e,t,r,i=1)=>Lt(e,t,r,"output",i),Id=(e,t,r)=>Lt(e,t,r,"atomicOutput",1),Oa=(e,t,r,i=1)=>Lt(e,t,r,"internal",i),Ds=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Mt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ed=(e,t)=>new Ds(e,t)}),Ms,ki,Ns,Ps,Us,Ws,Be,Cd,zd,ct=N(()=>{J(),re(),ve(),ie(),Ms=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ki=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ns=(e,t)=>z.sortBasedOnPerm(e,ki(e.length,t)),Ps=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Us=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Ws=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Be=(e,t)=>{let r=e.dataType,i=e.dims.length,a=ki(i,t),n=Ns(e.dims,a),s=e.dims,l=n,d=i<2||Ws(a,e.dims),p;if(d)return p=b=>{let y=R("input",r,s,4),x=F("output",r,l,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(y,x)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:p};let{newShape:f,newPerm:u}=Us(e.dims,a),m=z.areEqual(u,[2,3,1]),_=z.areEqual(u,[3,1,2]);if(f.length===2||m||_){s=m?[f[0],f[1]*f[2]]:_?[f[0]*f[1],f[2]]:f,l=[s[1],s[0]];let b=16;return p=y=>{let x=R("a",r,s.length),v=F("output",r,l.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${b+1}>, ${b}>;
  ${y.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/b),y:Math.ceil(l[0]/b)},programUniforms:[{type:12,data:y},...K(s,l)]}},getShaderSource:p}}return p=b=>{let y=R("a",r,s.length),x=F("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(y,x)}

  ${Ps(a,i,y,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...K(s,l)]}},getShaderSource:p}},Cd=(e,t)=>{Ms(e.inputs,t.perm),e.compute(Be(e.inputs[0],t.perm))},zd=e=>fe({perm:e.perm})}),qs,Vs,Ls,Hs,Gs,Fs,js,Ks,Qs,Ys,Pe,Ad,Od,Rd,Bd,Dd,Md,Nd,Pd,Ud,Wd,gm=N(()=>{J(),re(),ie(),Ra(),ct(),qs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Vs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ls={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Hs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Gs=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Fs=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},js=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Ks=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Qs=(e,t)=>{let r=[];if(!Ks(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ys=(e,t,r,i,a,n,s)=>{let l=r[0].dims,d=z.size(n),p=z.size(s),f=R("_A",r[0].dataType,l),u=F("output",a,n),m=64;d===1&&(m=256);let _=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,b=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(f,u)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ls[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${qs[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${u.setByOffset("outputIndex",`${i==="mean"?`${u.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${u.type.storage}(${Hs[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},Pe=(e,t,r,i)=>{let a=e.inputs.length===1?r:ua(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,b)=>b));let s=z.normalizeAxes(n,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=Qs(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(Be(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=Gs(l.length,d.dims.length));let[f,u]=Fs(d.dims,l),m=f;a.keepDims&&(m=js(f,s)),e.compute(Ys(t,a.cacheKey,[d],i,e.inputs[0].dataType,m,u),{inputs:[d]})},Ad=(e,t)=>{Pe(e,"ReduceMeanShared",t,"mean")},Od=(e,t)=>{Pe(e,"ReduceL1Shared",t,"l1")},Rd=(e,t)=>{Pe(e,"ReduceL2Shared",t,"l2")},Bd=(e,t)=>{Pe(e,"ReduceLogSumExpShared",t,"logSumExp")},Dd=(e,t)=>{Pe(e,"ReduceMaxShared",t,"max")},Md=(e,t)=>{Pe(e,"ReduceMinShared",t,"min")},Nd=(e,t)=>{Pe(e,"ReduceProdShared",t,"prod")},Pd=(e,t)=>{Pe(e,"ReduceSumShared",t,"sum")},Ud=(e,t)=>{Pe(e,"ReduceSumSquareShared",t,"sumSquare")},Wd=(e,t)=>{Pe(e,"ReduceLogSumShared",t,"logSum")}}),Ue,Zs,Nr,ua,We,Xs,Js,eo,to,ro,io,ao,no,so,oo,qe,qd,Vd,Ld,Hd,Gd,Fd,jd,Kd,Qd,Yd,Ra=N(()=>{J(),re(),ve(),ie(),gm(),Ue=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zs=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Nr=(e,t,r,i,a,n,s=!1,l=!1)=>{let d=[],p=r[0].dims,f=p.length,u=z.normalizeAxes(a,f),m=!l&&u.length===0;p.forEach((y,x)=>{m||u.indexOf(x)>=0?s&&d.push(1):d.push(y)});let _=d.length,b=z.size(d);return{name:e,shaderCache:t,getShaderSource:y=>{let x=[],v=R("_A",r[0].dataType,f),$=F("output",n,_),k=i(v,$,u),S=k[2];for(let I=0,C=0;I<f;I++)m||u.indexOf(I)>=0?(s&&C++,S=`for(var j${I}: u32 = 0; j${I} < ${p[I]}; j${I}++) {
                  ${k[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${S}
                }`):(x.push(`${v.indicesSet("input_indices",I,$.indicesGet("output_indices",C))};`),C++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,$)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${S}
          ${k[3]}
          ${k.length===4?$.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...K(p,d)]})}},ua=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),fe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},We=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:ua(a,r);e.compute(Nr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Zs:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Xs=(e,t)=>{Ue(e.inputs),We(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Js=(e,t)=>{Ue(e.inputs),We(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},eo=(e,t)=>{Ue(e.inputs),We(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},to=(e,t)=>{Ue(e.inputs),We(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ro=(e,t)=>{Ue(e.inputs),We(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},io=(e,t)=>{Ue(e.inputs),We(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},ao=(e,t)=>{Ue(e.inputs),We(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},no=(e,t)=>{Ue(e.inputs),We(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},so=(e,t)=>{Ue(e.inputs),We(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},oo=(e,t)=>{Ue(e.inputs),We(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},qe=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},qd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Ad(e,t)},Vd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Js(e,t):Od(e,t)},Ld=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):Rd(e,t)},Hd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Bd(e,t)},Gd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Dd(e,t)},Fd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Md(e,t)},jd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Nd(e,t)},Kd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Pd(e,t)},Qd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Ud(e,t)},Yd=(e,t)=>{qe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xs(e,t):Wd(e,t)}}),Si,Zd,Xd,la,ym=N(()=>{J(),ve(),Ra(),Si=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Zd=(e,t)=>{Si(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Nr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Xd=(e,t)=>{Si(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Nr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},la=e=>fe(e)}),uo,xr,lo,po,ho,rr,co,Jd,Ba=N(()=>{J(),re(),Aa(),ie(),uo=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let u=a.dims[0]/3,m=u,_=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");u=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let b=p;if(u!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==u+m+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(m!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let x=b+y,v=-1,$=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:f,hiddenSize:u,vHiddenSize:_,headSize:Math.floor(u/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},xr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,lo=(e,t,r,i,a,n,s,l)=>{let d=$e(s?1:n),p=64,f=n/d;f<p&&(p=32);let u=Math.ceil(n/d/p),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:f},{type:12,data:u}],_=Te(e.dataType,d),b=Ce(1,d),y=["type"];s&&y.push("type"),l&&y.push("type");let x=v=>{let $=F("x",e.dataType,e.dims,d),k=[$],S=s?R("seq_lens",s.dataType,s.dims):void 0;S&&k.push(S);let I=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;I&&k.push(I);let C=Ce(e.dataType),E=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(E).declareVariables(...k)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${xr(S,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${b}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${b}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${b}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${b}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${_};${d}`,inputDependencies:y},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(n/p),y:a,z:t*r},programUniforms:m})}},po=(e,t,r,i,a,n,s,l,d)=>{let p=s+n.kvSequenceLength,f=[n.batchSize,n.numHeads,n.sequenceLength,p],u=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=u?[n.batchSize,m,p,n.headSize]:void 0,b=n.nReps?n.nReps:1,y=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=$e(n.headSize),v=n.headSize/x,$=12,k={x:Math.ceil(p/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},S=[{type:12,data:n.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:b}],I=u&&i&&z.size(i.dims)>0,C=["type","type"];I&&C.push("type"),a&&C.push("type"),l&&C.push("type"),d&&C.push("type");let E=[{dims:f,dataType:t.dataType,gpuDataType:0}];u&&E.push({dims:_,dataType:t.dataType,gpuDataType:0});let D=P=>{let G=R("q",t.dataType,t.dims,x),L=R("key",r.dataType,r.dims,x),ee=[G,L];if(I){let X=R("past_key",i.dataType,i.dims,x);ee.push(X)}a&&ee.push(R("attention_bias",a.dataType,a.dims));let U=l?R("seq_lens",l.dataType,l.dims):void 0;U&&ee.push(U);let Q=d?R("total_sequence_length_input",d.dataType,d.dims):void 0;Q&&ee.push(Q);let ae=F("output",t.dataType,f),V=[ae];u&&V.push(F("present_key",t.dataType,_,x));let te=Ce(1,x),ne=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${G.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${G.type.storage}, ${$*$}>;
  ${P.registerUniforms(ne).declareVariables(...ee,...V)}
  ${P.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${xr(U,Q,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&u?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${u?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${te}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&u?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${u?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${te}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${ae.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:E,dispatchGroup:k,programUniforms:S}),getShaderSource:D}},ho=(e,t,r,i,a,n,s=void 0,l=void 0)=>{let d=n+a.kvSequenceLength,p=a.nReps?a.nReps:1,f=a.vHiddenSize*p,u=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=u?[a.batchSize,m,d,a.headSize]:void 0,b=[a.batchSize,a.sequenceLength,f],y=12,x={x:Math.ceil(a.vHeadSize/y),y:Math.ceil(a.sequenceLength/y),z:a.batchSize*a.numHeads},v=[{type:12,data:a.sequenceLength},{type:12,data:d},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:f},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:p}],$=u&&i&&z.size(i.dims)>0,k=["type","type"];$&&k.push("type"),s&&k.push("type"),l&&k.push("type");let S=[{dims:b,dataType:t.dataType,gpuDataType:0}];u&&S.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=C=>{let E=R("probs",t.dataType,t.dims),D=R("v",r.dataType,r.dims),P=[E,D];$&&P.push(R("past_value",i.dataType,i.dims));let G=s?R("seq_lens",s.dataType,s.dims):void 0;s&&P.push(G);let L=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;l&&P.push(L);let ee=[F("output",t.dataType,b)];u&&ee.push(F("present_value",t.dataType,_));let U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${E.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${E.type.value}, ${y*y}>;
  ${C.registerUniforms(U).declareVariables(...P,...ee)}
  ${C.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${xr(G,L,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&u?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${u?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${E.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&u?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${u?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:S,dispatchGroup:x,programUniforms:v}),getShaderSource:I}},rr=(e,t,r,i,a,n,s,l,d,p,f=void 0,u=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),_=m>1?p.pastSequenceLength:0,b=_+p.kvSequenceLength,y=d&&z.size(d.dims)>0?d:void 0,x=[t,r];m>1&&s&&z.size(s.dims)>0&&x.push(s),y&&x.push(y),f&&x.push(f),u&&x.push(u);let v=e.compute(po(m,t,r,s,y,p,_,f,u),{inputs:x,outputs:m>1?[-1,1]:[-1]})[0];e.compute(lo(v,p.batchSize,p.numHeads,_,p.sequenceLength,b,f,u),{inputs:f&&u?[v,f,u]:[v],outputs:[]});let $=[v,i];m>1&&l&&z.size(l.dims)>0&&$.push(l),f&&$.push(f),u&&$.push(u),e.compute(ho(m,v,i,l,p,_,f,u),{inputs:$,outputs:m>1?[0,2]:[0]})},co=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=u=>{let m=F("output_q",d[0].dataType,r),_=F("output_k",d[0].dataType,r),b=F("output_v",d[0].dataType,r),y=R("input",d[0].dataType,d[0].dims),x=R("weight",d[1].dataType,d[1].dims),v=R("bias",d[2].dataType,d[2].dims),$=y.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${u.registerUniforms(k).declareVariables(y,x,v,m,_,b)}
  ${u.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:f},{inputs:d,outputs:[-1,-1,-1]})},Jd=(e,t)=>{let r=uo(e.inputs,t),[i,a,n]=co(e,r);return rr(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),fo,mo,go,ep,_m=N(()=>{He(),J(),re(),ve(),ie(),fo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((l,d)=>{if(l!==i[d])throw new Error(`${n}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},mo=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?$e(n[n.length-1]):1,l=a==="NHWC"&&n.length>1?s:1,d=z.size(n)/s,p=i,f=p?n.length:n,u=R("x",e[0].dataType,e[0].dims,s),m=R("scale",e[1].dataType,e[1].dims,l),_=R("bias",e[2].dataType,e[2].dims,l),b=R("inputMean",e[3].dataType,e[3].dims,l),y=R("inputVar",e[4].dataType,e[4].dims,l),x=F("y",e[0].dataType,f,s),v=()=>{let k="";if(i)k=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")k=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let S=1;S<m.rank;S++)k+=`cIndices[${S}] = outputIndices[${S}];`;k+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return k},$=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(u,m,_,b,y,x)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${u.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...K(n)]:[{type:12,data:d}]})}},go=e=>fe(e),ep=(e,t)=>{let{inputs:r,outputCount:i}=e,a=go({...t,outputCount:i});if(ye.webgpu.validateInputContent&&fo(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(mo(r,a))}}),yo,_o,tp,bm=N(()=>{re(),ie(),yo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_o=e=>{let t=e[0].dims,r=e[0].dims[2],i=z.size(t)/4,a=e[0].dataType,n=R("input",a,t,4),s=R("bias",a,[r],4),l=R("residual",a,t,4),d=F("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},tp=e=>{yo(e.inputs),e.compute(_o(e.inputs))}}),bo,de,rp,ip,ap,np,sp,op,up,lp,dp,$o,pp,hp,cp,fp,Jt,mp,Ar,gp,yp,_p,bp,$p,wp,vp,xp,kp,Sp,Tp,Ip,Ep,Cp,zp,Ap,Ti,Op,da,pa,Rp,Bp,Dp,wo,vo,Mp,Da=N(()=>{J(),re(),ve(),ie(),bo=(e,t,r,i,a,n,s)=>{let l=Math.ceil(t/4),d="";typeof a=="string"?d=`${a}(a)`:d=a("a");let p=R("inputData",r,[l],4),f=F("outputData",i,[l],4),u=[{name:"vec_size",type:"u32"}];return s&&u.push(...s),`
      ${e.registerUniforms(u).declareVariables(p,f)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",d)}
  }`},de=(e,t,r,i,a,n=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>bo(p,z.size(e.dims),e.dataType,n,r,i,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(z.size(p[0].dims)/64/4)},programUniforms:d})}},rp=e=>{e.compute(de(e.inputs[0],"Abs","abs"))},ip=e=>{e.compute(de(e.inputs[0],"Acos","acos"))},ap=e=>{e.compute(de(e.inputs[0],"Acosh","acosh"))},np=e=>{e.compute(de(e.inputs[0],"Asin","asin"))},sp=e=>{e.compute(de(e.inputs[0],"Asinh","asinh"))},op=e=>{e.compute(de(e.inputs[0],"Atan","atan"))},up=e=>{e.compute(de(e.inputs[0],"Atanh","atanh"))},lp=e=>fe(e),dp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(de(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},$o=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return fe({min:t,max:r})},pp=(e,t)=>{let r=t||$o(e.inputs),i=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},hp=e=>{e.compute(de(e.inputs[0],"Ceil","ceil"))},cp=e=>{e.compute(de(e.inputs[0],"Cos","cos"))},fp=e=>{e.compute(de(e.inputs[0],"Cosh","cosh"))},Jt=e=>fe(e),mp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Ar=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,gp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ar(t)))},yp=e=>{e.compute(de(e.inputs[0],"Exp","exp"))},_p=e=>{e.compute(de(e.inputs[0],"Floor","floor"))},bp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ar(t)))},$p=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},wp=e=>{e.compute(de(e.inputs[0],"Not",t=>`!${t}`))},vp=e=>{e.compute(de(e.inputs[0],"Neg",t=>`-${t}`))},xp=e=>{e.compute(de(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},kp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Sp=e=>{e.compute(de(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Tp=e=>fe(e),Ip=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ep=e=>{e.compute(de(e.inputs[0],"Sin","sin"))},Cp=e=>{e.compute(de(e.inputs[0],"Sinh","sinh"))},zp=e=>{e.compute(de(e.inputs[0],"Sqrt","sqrt"))},Ap=e=>{e.compute(de(e.inputs[0],"Tan","tan"))},Ti=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Op=e=>{e.compute(de(e.inputs[0],"Tanh",Ti))},da=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ti("v")};
}
`,pa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Rp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"FastGelu",pa,da(t),void 0,e.inputs[0].dataType))},Bp=(e,t)=>{let r=Ce(e.inputs[0].dataType);return e.compute(de(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Dp=e=>{e.compute(de(e.inputs[0],"Log","log"))},wo=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,vo=e=>`quick_gelu_impl(${e})`,Mp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"QuickGelu",vo,wo(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),xo,ko,Np,$m=N(()=>{re(),ie(),Da(),xo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ko=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),i=R("bias",e[0].dataType,[e[0].dims[2]],4),a=F("output",e[0].dataType,t,4),n=z.size(t)/4,s=Te(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,a)}

  ${Ar(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Np=e=>{xo(e.inputs),e.compute(ko(e.inputs))}}),So,To,Ve,Pp,Up,Wp,qp,Vp,Lp,Hp,Gp,Fp,jp,wm=N(()=>{J(),re(),ie(),So=(e,t,r,i,a,n,s,l,d,p,f,u)=>{let m,_;typeof l=="string"?m=_=($,k)=>`${l}((${$}),(${k}))`:typeof l=="function"?m=_=l:(m=l.scalar,_=l.vector);let b=F("outputData",f,i.length,4),y=R("aData",d,t.length,4),x=R("bData",p,r.length,4),v;if(a)if(n){let $=z.size(t)===1,k=z.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;$||k?v=b.setByOffset("global_idx",_($?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),k?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",_(s||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=b.setByOffset("global_idx",_(y.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(k,S,I="")=>{let C=`aData[indexA${S}][componentA${S}]`,E=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${b.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,b)};
            let offsetB${S} = ${x.broadcastedIndicesToOffset(`outputIndices${S}`,b)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${k}[${S}] = ${I}(${m(C,E)});
          `};f===9?v=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,x,b)}

        ${u??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},To=(e,t,r,i,a,n,s=r.dataType)=>{let l=r.dims.map(y=>Number(y)??1),d=i.dims.map(y=>Number(y)??1),p=!z.areEqual(l,d),f=l,u=z.size(l),m=!1,_=!1,b=[p];if(p){let y=Dt.calcShape(l,d,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");f=y.slice(),u=z.size(f);let x=z.size(l)===1,v=z.size(d)===1,$=l.length>0&&l[l.length-1]%4===0,k=d.length>0&&d[d.length-1]%4===0;b.push(x),b.push(v),b.push($),b.push(k);let S=1;for(let I=1;I<f.length;I++){let C=l[l.length-I],E=d[d.length-I];if(C===E)S*=C;else break}S%4===0?(_=!0,m=!0):(x||v||$||k)&&(m=!0)}else m=!0;return b.push(m),{name:e,shaderCache:{hint:t+b.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>So(y,l,d,f,m,p,_,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(f)/4)},...K(l,d,f)]})}},Ve=(e,t,r,i,a,n)=>{e.compute(To(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Pp=e=>{Ve(e,"Add",(t,r)=>`${t}+${r}`)},Up=e=>{Ve(e,"Div",(t,r)=>`${t}/${r}`)},Wp=e=>{Ve(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},qp=e=>{Ve(e,"Mul",(t,r)=>`${t}*${r}`)},Vp=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ve(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Lp=e=>{Ve(e,"Sub",(t,r)=>`${t}-${r}`)},Hp=e=>{Ve(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Gp=e=>{Ve(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Fp=e=>{Ve(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},jp=e=>{Ve(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Io,Eo,Co,zo,Kp,Qp,vm=N(()=>{J(),re(),ve(),ie(),Io=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Eo=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Co=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},zo=(e,t,r,i)=>{let a=z.size(r),n=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],f=[{type:12,data:a}];for(let y=0;y<e.length;++y)l+=e[y].dims[t],n[y]=l,p.push(e[y].dims.length),s[y]=R(`input${y}`,i,p[y]),d.push("rank"),f.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)f.push(...K(e[y].dims));f.push(...K(r));let u=F("output",i,r.length),m=u.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),b=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)y.registerUniform(`sizeInConcatAxis${x}`,"u32");return y.declareVariables(...s,u)})()}

  ${Eo(n.length,_)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${u.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Co(s,u)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:b}},Kp=(e,t)=>{let r=e.inputs,i=r[0].dims,a=z.normalizeAxis(t.axis,i.length);Io(r,a);let n=i.slice();n[a]=r.reduce((l,d)=>l+(d.dims.length>a?d.dims[a]:0),0);let s=r.filter(l=>z.size(l.dims)>0);e.compute(zo(s,a,n,r[0].dataType),{inputs:s})},Qp=e=>fe({axis:e.axis})}),xt,kt,St,Ma,It=N(()=>{J(),re(),xt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},kt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},St=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ma=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Sd,Td];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ie,Yp,Na=N(()=>{Ie=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Yp=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Zp,xm=N(()=>{Zp=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),tr,Pa,Ua=N(()=>{J(),re(),ie(),It(),tr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${j(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,j(a,l+n,i))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Pa=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],f=s[s.length-1],u=$e(p),m=$e(f),_=$e(d),b=z.size(r)/u/_,y=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),v=[z.size(x),d,p],$=[{type:12,data:b},{type:12,data:d},{type:12,data:p},{type:12,data:f}];kt(t,$),$.push(...K(x,s,l)),y&&$.push(...K(e[2].dims)),$.push(...K(v));let k=S=>{let I=Oa("batch_dims",e[0].dataType,x.length),C=R("a",e[0].dataType,s.length,m),E=R("b",e[1].dataType,l.length,u),D=F("output",e[0].dataType,v.length,u),P=Te(D.type.tensor),G=xt(t,D.type.value,P),L=[C,E],ee="";if(y){let ae=a?u:1;L.push(R("bias",e[2].dataType,e[2].dims.length,ae)),ee=`${a?`value += bias[col / ${ae}];`:`value += ${D.type.value}(bias[row + i]);`}`}let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];St(t,U);let Q=()=>{let ae=`var a_data: ${C.type.value};`;for(let V=0;V<m;V++)ae+=`
              let b_data${V} = b[(b_offset + (k + ${V}) * uniforms.N + col) / ${u}];`;for(let V=0;V<_;V++){ae+=`a_data = a[(a_offset + (row + ${V}) * uniforms.K + k) / ${m}];`;for(let te=0;te<m;te++)ae+=`
            values[${V}] = fma(${E.type.value}(a_data${m===1?"":`[${te}]`}), b_data${te}, values[${V}]);
`}return ae};return`
  ${S.registerUniforms(U).registerInternalVariables(I).declareVariables(...L,D)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${u})) * ${u};
    var index1 = global_idx / (uniforms.N / ${u});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${tr("a_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${E.type.indices};
    ${tr("b_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("b_indices",E.rank-2,0)}
    ${E.indicesSet("b_indices",E.rank-1,0)}
    let b_offset = ${E.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${Q()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${ee}
      ${G}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${u}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${u};${m};${_};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:$}),getShaderSource:k}}}),Ao,Oo,ha,Ii,Ro,ca,Bo,Pr,Wa=N(()=>{J(),re(),ie(),It(),Ua(),Na(),Ao=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Oo=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ha=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],f=a?d:n,u=a?n:d,m=f/t[0],_=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&f%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${f/m}>, ${u}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ao(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Oo(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ii=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ro=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ca=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],u=a?p:n,m=a?n:p;if(!(m%t[1]===0&&u%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=m/t[1],b=u/t[0],y=n/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          ${Ii(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${b};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${b}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ii(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ro(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${u}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Bo=(e,t,r,i,a=!1)=>{let[n,s,l,d]=i,p=Te(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ie(e,p)} {
      var value = ${Ie(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${tr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Ie(e,p)} {
      var value = ${Ie(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${tr("bIndices",l,l.rank-2,n.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ie(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ie(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Pr=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),f=i?i.slice(0,-2):r.slice(0,-2),u=z.size(f),m=s[s.length-2],_=s[s.length-1],b=l[l.length-1],y=_%4===0&&b%4===0,x=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],$=[Math.ceil(b/v[0]/x[0]),Math.ceil(m/v[1]/x[1]),Math.ceil(u/v[2]/x[2])],k=y?4:1,S=[...d,m,_/k],I=S.length,C=[...p,_,b/k],E=C.length,D=[u,m,b/k],P=[{type:6,data:m},{type:6,data:b},{type:6,data:_}];kt(t,P),P.push(...K(f,S,C));let G=["rank","rank"],L=e.length>2;L&&(P.push(...K(e[2].dims)),G.push("rank")),P.push(...K(D));let ee=U=>{let Q=f.length,ae=Oa("batchDims",e[0].dataType,Q,1),V=Te(e[0].dataType),te=R("a",e[0].dataType,I,k),ne=R("b",e[1].dataType,E,k),X=F("result",e[0].dataType,D.length,k),ge=[te,ne];if(L){let ke=a?k:1;ge.push(R("bias",e[2].dataType,e[2].dims.length,ke))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];St(t,M);let q=Te(X.type.tensor),le=xt(t,X.type.value,q),ue=Bo(k,L,le,[ae,te,ne,X],a);return`
  ${U.registerUniforms(M).registerInternalVariables(ae).declareVariables(...ge,X)}
  ${ue}
  ${y?ha(x,v,V,ae):ca(x,v,V,ae)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${y};${a}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:P}),getShaderSource:ee}}}),Do,Xp,km=N(()=>{J(),rt(),ie(),It(),Na(),xm(),Wa(),Do=(e,t,r,i,a=!1,n,s=4,l=4,d=4,p="f32")=>{let f=P=>{switch(P){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},u=P=>{switch(P){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${P} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ie(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${y}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,k=e?t&&i?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ie(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ie(s,p)}(0.0);`,S=e?i&&r?u(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${u(l)}
    }
    return ${Ie(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${u(l)}
    }
    return ${Ie(l,p)}(0.0);`,I=Ie(d,p),C=Ie(e?s:l,p),E=Ie(e?l:s,p),D=xt(n,I,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?k:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Yp(a)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Xp=(e,t,r,i,a,n,s,l,d)=>{let p=t.format==="NHWC",f=p?e[0].dims[3]:e[0].dims[1],u=r[0],m=p?r[2]:r[3],_=p?r[1]:r[2],b=p?r[3]:r[1],y=p&&(f%4===0||f%3===0)&&b%4===0,x=p?b:m*_,v=p?m*_:b,$=[8,8,1],k=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(x/$[0]/k[0]),Math.ceil(v/$[1]/k[1]),Math.ceil(u/$[2]/k[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let I=y?p&&f%4!==0?3:4:1,C=$[1]*k[1],E=$[0]*k[0],D=Math.max($[0]*I,$[1]),P=i%C===0,G=a%E===0,L=n%D===0,ee=y?[I,4,4]:[1,1,1],U=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];kt(t,U),U.push(...K(e[0].dims,e[1].dims));let Q=["rank","rank"];s&&(U.push(...K(e[2].dims)),Q.push("rank")),U.push(...K(r));let ae=V=>{let te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];St(t,te);let ne=y?4:1,X=Te(e[0].dataType),ge=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${X}>`:X}) {
        result[flatIndex] = ${y?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,M=R("x",e[0].dataType,e[0].dims.length,I===3?1:I),q=R("w",e[1].dataType,e[1].dims.length,ne),le=[M,q],ue=F("result",e[0].dataType,r.length,ne);if(s){let ke=R("bias",e[2].dataType,e[2].dims.length,ne);le.push(ke),ge+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${X}>`:X} {
          return bias[coords.${p?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Zp("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(te).declareVariables(...le,ue)}
        ${ge}
        ${Do(p,P,G,L,s,t,ee[0],ee[1],ee[2],X)}
        ${y?ha(k,$,X,void 0,!p,D):ca(k,$,X,void 0,!p,D,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${y};${P};${G};${L};${C};${E};${D}`,inputDependencies:Q},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:U}),getShaderSource:ae}}}),Mo,Ei,Ht,No,Ci,Po,Jp,eh,Sm=N(()=>{J(),rt(),re(),ie(),It(),Na(),Mo=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ei=e=>typeof e=="number"?[e,e,e]:e,Ht=(e,t)=>t<=1?e:e+(e-1)*(t-1),No=(e,t,r,i=1)=>{let a=Ht(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Ci=(e,t,r,i,a)=>{a==null&&(a=No(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Po=(e,t,r,i,a,n,s,l,d,p)=>{let f,u,m,_;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Ci([t,r,i,1],[l,d,p],1,[a,n,s],e);u=b[0],m=b[1],_=b[2]}else if(Array.isArray(e)){if(!e.every((y,x,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Ci([t,r,i,1],[l,d,p],1,[a,n,s],e[0]);u=b[0],m=b[1],_=b[2]}else if(e==="SAME_UPPER"){u=Math.ceil(t/a),m=Math.ceil(r/n),_=Math.ceil(i/s);let b=(u-1)*a+l-t,y=(m-1)*n+d-r,x=(_-1)*s+p-i,v=Math.floor(b/2),$=b-v,k=Math.floor(y/2),S=y-k,I=Math.floor(x/2),C=x-I;f={top:k,bottom:S,left:I,right:C,front:v,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:u,outHeight:m,outWidth:_}},Jp=(e,t,r,i,a,n=!1,s="channelsLast")=>{let l,d,p,f,u;if(s==="channelsLast")[l,d,p,f,u]=e;else if(s==="channelsFirst")[l,u,d,p,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,_,b,y]=t,[x,v,$]=Ei(r),[k,S,I]=Ei(i),C=Ht(_,k),E=Ht(b,S),D=Ht(y,I),{padInfo:P,outDepth:G,outHeight:L,outWidth:ee}=Po(a,d,p,f,x,v,$,C,E,D),U=n?m*u:m,Q=[0,0,0,0,0];return s==="channelsFirst"?Q=[l,U,G,L,ee]:s==="channelsLast"&&(Q=[l,G,L,ee,U]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:f,inChannels:u,outDepth:G,outHeight:L,outWidth:ee,outChannels:U,padInfo:P,strideDepth:x,strideHeight:v,strideWidth:$,filterDepth:_,filterHeight:b,filterWidth:y,effectiveFilterDepth:C,effectiveFilterHeight:E,effectiveFilterWidth:D,dilationDepth:k,dilationHeight:S,dilationWidth:I,inShape:e,outShape:Q,filterShape:t}},eh=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((x,v)=>v)},p=[Math.ceil(Mo(d.x.map(x=>r[x]))/l[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let f=1,u=z.size(r),m=[{type:12,data:u},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];kt(t,m),m.push(...K(e[0].dims,e[1].dims));let _=["rank","rank"],b=e.length===3;b&&(m.push(...K(e[2].dims)),_.push("rank")),m.push(...K(r));let y=x=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];St(t,v);let $=1,k=Te(e[0].dataType),S=R("x",e[0].dataType,e[0].dims.length,f),I=R("W",e[1].dataType,e[1].dims.length,$),C=[S,I],E=F("result",e[0].dataType,r.length,$),D="";if(b){let L=R("bias",e[2].dataType,e[2].dims.length,$);C.push(L),D+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${s?j("coords",4,5):j("coords",1,5)}];
        }`}let P=Ie(f,k),G=xt(t,P,k);return`
            ${D}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${x.registerUniforms(v).declareVariables(...C,E)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${E.offsetToIndices("global_idx")};
              let batch = ${j("coords",0,S.rank)};
              let d2 = ${s?j("coords",S.rank-1,S.rank):j("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?j("coords",1,S.rank):j("coords",2,S.rank)},
              ${s?j("coords",2,S.rank):j("coords",3,S.rank)},
              ${s?j("coords",3,S.rank):j("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?j("uniforms.x_shape",1,S.rank):j("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?j("uniforms.x_shape",2,S.rank):j("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?j("uniforms.x_shape",3,S.rank):j("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?j("uniforms.x_shape",4,S.rank):j("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${b?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${b}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:m}),getShaderSource:y}}}),th,rh,Tm=N(()=>{J(),re(),ie(),It(),th=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],f=p/t.group,u=d&&f>=4?$e(p):1,m=z.size(r)/u,_=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];kt(t,_),_.push(...K(s,[l[0],l[1],l[2],l[3]/u]));let b=a?["rank","rank","rank"]:["rank","rank"];_.push(...K([r[0],r[1],r[2],r[3]/u]));let y=x=>{let v=F("output",e[0].dataType,r.length,u),$=Te(v.type.tensor),k=xt(t,v.type.value,$),S=R("x",e[0].dataType,s.length),I=R("w",e[1].dataType,l.length,u),C=[S,I];a&&C.push(R("b",e[2].dataType,e[2].dims,u));let E=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];St(t,E);let D=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(E).declareVariables(...C,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${u} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${D}
    ${n}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${u}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:y}},rh=(e,t,r,i)=>{let a=e.length>2,n=$e(r[3]),s=$e(r[2]),l=z.size(r)/n/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],f=[r[0],r[1],r[2],r[3]/n],u=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];kt(t,u),u.push(...K(d,p,f));let m=(s-1)*t.strides[1]+p[1],_=b=>{let y=F("output",e[0].dataType,f.length,n),x=Te(y.type.tensor),v=xt(t,y.type.value,x),$=R("x",e[0].dataType,d.length,n),k=R("w",e[1].dataType,p.length,n),S=[$,k];a&&S.push(R("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return St(t,C),`
  ${b.registerUniforms(C).declareVariables(...S,y)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${m}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:_}}}),Uo,kr,Wo,Sr,fa,zi,qo,Vo,ma,Im=N(()=>{re(),km(),Sm(),Wa(),Tm(),It(),Ua(),ct(),Uo=(e,t,r,i,a,n)=>{let s=e[0],l=e.slice(n?1:2,n?3:4),d=l.length,p=t[0],f=t.slice(2).map((m,_)=>m+(m-1)*(r[_]-1)),u=l.map((m,_)=>m+i[_]+i[_+d]).map((m,_)=>Math.floor((m-f[_]+a[_])/a[_]));return u.splice(0,0,s),u.splice(n?3:1,0,p),u},kr=[2,3,1,0],Wo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Sr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Mr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},fa=e=>{let t=Ma(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},zi=(e,t,r,i)=>{let a=r.format==="NHWC",n=Uo(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let C=[t[0]];if(a){let E=e.kernelCustomData.wT??e.compute(Be(t[1],kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E),C.push(E)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(rh(C,r,n,i),{inputs:C}):e.compute(th(C,r,n,i),{inputs:C});return}let s=t.length===3,l=t[0].dims[a?1:2],d=t[0].dims[a?2:3],p=t[0].dims[a?3:1],f=t[1].dims[2],u=t[1].dims[3],m=n[a?1:2],_=n[a?2:3],b=n[a?3:1],y=a&&f===l&&u===d&&r.pads[0]===0&&r.pads[1]===0;if(y||f===1&&u===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=n[0],E,D,P,G=[];if(a){let U=e.kernelCustomData.wT??e.compute(Be(t[1],kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),y){let Q=l*d*p;E=t[0].reshape([1,C,Q]),D=U.reshape([1,Q,b]),P=[1,C,b]}else E=t[0].reshape([C,l*d,p]),D=U.reshape([1,p,b]),P=[C,m*_,b];G.push(E),G.push(D)}else E=t[0].reshape([C,p,l*d]),D=t[1].reshape([1,b,p]),P=[C,b,m*_],G.push(D),G.push(E);s&&G.push(t[2]);let L=P[2],ee=G[0].dims[G[0].dims.length-1];L<8&&ee<8?e.compute(Pa(G,r,n,P,a,i),{inputs:G}):e.compute(Pr(G,r,n,P,a,i),{inputs:G});return}let x=!0,v=e.kernelCustomData.wT??e.compute(Be(t[1],kr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let $=[t[0],v];s&&$.push(t[2]);let k=a?m*_:b,S=a?b:m*_,I=f*u*p;e.compute(Xp($,r,n,k,S,I,s,x,i),{inputs:$})},qo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=Sr({...t,pads:a,strides:n,dilations:s,kernelShape:l},i);zi(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Vo=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Sr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Jp(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(eh(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},ma=(e,t)=>{if(Wo(e.inputs,t),e.inputs[0].dims.length===3)qo(e,t);else if(e.inputs[0].dims.length===5)Vo(e,e.inputs,t);else{let r=Sr(t,e.inputs);zi(e,e.inputs,r)}}}),ih,Em=N(()=>{J(),rt(),re(),ie(),ih=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,l=e[1].dims,d=l[2]/s,p=l[3],f=n?$e(d):1,u=n?$e(p):1,m=n?p===1?f:u:1,_=z.size(a)/u,b=[Math.ceil(_/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let y=["rank","rank"],x=[t.strides[0],t.strides[1]],v=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],$=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],S=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:_},{type:12,data:x},{type:12,data:v},{type:12,data:$},{type:12,data:k},{type:6,data:S},{type:12,data:d},{type:12,data:p},...K(e[0].dims,e[1].dims)];i&&(I.push(...K(e[2].dims)),y.push("rank")),I.push(...K(a));let C=E=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:x.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:S.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=Te(e[0].dataType),G=n?1:2,L=n?2:3,ee=n?3:1,U=R("W",e[1].dataType,e[1].dims.length,m),Q=R("Dy",e[0].dataType,e[0].dims.length,f),ae=[Q,U];i&&ae.push(R("bias",e[2].dataType,[a[ee]].length,u));let V=F("result",e[0].dataType,a.length,u),te=()=>{let X="";if(f===1)X+=`
        let w_offset = ${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${U.getByOffset(`w_offset / ${m}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)X+=`
          let wValue = ${U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${m}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ge=0;ge<f;ge++)X+=`
            let wValue${ge} = ${U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ge}, wOutChannel)`)} / ${m}`)};
            dotProd = dotProd + xValue[${ge}] * wValue${ge};`;return X},ne=`
            let outputIndices = ${V.offsetToIndices(`global_idx * ${u}`)};
            let batch = ${V.indicesGet("outputIndices",0)};
            let d1 = ${V.indicesGet("outputIndices",ee)};
            let r = ${V.indicesGet("outputIndices",G)};
            let c = ${V.indicesGet("outputIndices",L)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${V.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${P}(dyRCorner) + ${P}(wR)) / ${P}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${P}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${P}(dyCCorner) + ${P}(wC)) / ${P}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${P}(uniforms.Dy_shape[${L}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${n?Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):Q.get("batch","inputChannel","idyR","idyC")};
                  ${te()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${u}]`:""};
            ${V.setByOffset("global_idx","value")};
          `;return`
    ${E.registerUniforms(D).declareVariables(...ae,V)}
      ${E.mainStart()}
      ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ne}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${m}${u}${p===1}`,inputDependencies:y},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:C}}}),Lo,Ho,Go,Ai,ah,Fo,Oi,jo,nh,Cm=N(()=>{Em(),It(),ct(),Lo=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Ho=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Go=(e,t,r,i,a,n,s,l,d,p)=>{let f=e.length-2,u=p.length===0;d.length<f&&d.push(...Array(f-d.length).fill(0));let m=e[0],_=t[l?3:1]*a;for(let b=0,y=e.length-f-(l?1:0);b<f;++b,++y){let x=e[y],v=u?x*s[b]:p[b],$=Lo(x,s[b],n[b],t[y],r[b],v);Ho($,i,n,b,b+f),u&&p.push(s[b]*(x-1)+d[b]+(t[y]-1)*r[b]+1-n[b]-n[b+f])}p.splice(0,0,m),p.splice(l?3:1,0,_)},Ai=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((u,m)=>u*m,1)===0){r.length=0;for(let u=2;u<t[1].dims.length;++u)r.push(t[1].dims[u])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;d=new Array(u).fill(1)}let p=e.strides.slice();if(p.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;p=new Array(u).fill(1)}Go(l,r,d,e.autoPad,e.group,a,p,i,s,n);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:d,strides:p}),f},ah=e=>{let t=Ma(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),f=e.outputPadding,u=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:f,outputShape:u,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Fo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Oi=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Be(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(ih(n,r,i),{inputs:n})},jo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let d=t.outputPadding;d=[0].concat(d);let p=Ai({...t,pads:l,strides:s,dilations:n,kernelShape:a,outputPadding:d},i);Oi(e,i,p,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},nh=(e,t)=>{if(Fo(e.inputs,t),e.inputs[0].dims.length===3)jo(e,t);else{let r=Ai(t,e.inputs);Oi(e,e.inputs,r)}}}),Ko,sh,oh,zm=N(()=>{J(),re(),ve(),ie(),Ko=(e,t,r,i)=>{let a=z.size(t),n=t.length,s=R("input",e,n),l=F("output",e,n),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=z.normalizeAxis(d,n),f=u=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=j("uniforms.input_shape","uniforms.axis",n),b=i.reverse?m+(i.exclusive?" + 1":""):"0",y=i.reverse?_:m+(i.exclusive?"":" + 1");return`
                ${u.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${u.mainStart()}
                  ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...K(t,t)]}),getShaderSource:f}},sh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Ko(i,r,a,t),{inputs:[0]})},oh=e=>{let t=e.exclusive===1,r=e.reverse===1;return fe({exclusive:t,reverse:r})}}),Qo,Yo,Zo,uh,lh,Am=N(()=>{J(),re(),ve(),ie(),Qo=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Yo=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},Zo=(e,t)=>{let r,i,a,n,s,l,d=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";d?([r,i,a,n]=e.dims,s=f?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],l=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],l=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let u=e.reshape(s),m=u.dims.length,_=e.dataType,b=R("a",_,m),y=F("output",_,m),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(b,y)}

  ${Yo(l,m,b,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let $=d?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],k=z.size($),S=u.dims,I=z.sortBasedOnPerm(S,l);return{outputs:[{dims:$,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...K(S,I)]}},getShaderSource:x}},uh=(e,t)=>{Qo(e.inputs),e.compute(Zo(e.inputs[0],t))},lh=e=>fe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Tr,Gt,Ri,Xo,Jo,eu,tu,Bi,ru,dh,ph,Om=N(()=>{J(),re(),ve(),ie(),Tr="[a-zA-Z]|\\.\\.\\.",Gt="("+Tr+")+",Ri="^"+Gt+"$",Xo="("+Gt+",)*"+Gt,Jo="^"+Xo+"$",eu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},tu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Jo)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Ri)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,s,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Gt)))throw new Error("Invalid RHS");i.match(RegExp(Tr,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],l=0;if(!e.match(RegExp(Ri))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(Tr,"g")),p=new eu(i);return d?.forEach((f,u)=>{if(f==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-d.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let b=String.fromCharCode(48+_);p.addSymbol(b,u+_),this.addSymbol(b,r[l++],i)}}else p.addSymbol(f,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[l++],i)}),p}},Bi=e=>e+"_max",ru=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,f)=>R(`input${f}`,t,p)),n=z.size(i),s=F("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let f=[],u="var prod = 1.0;",m="var sum = 0.0;",_="sum += prod;",b=[],y=[],x=[],v=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,I)=>{if(r.rhs.symbolToIndices.has(I)){let C=r.rhs.symbolToIndices.get(I)?.[0];C!==void 0&&r.lhs.forEach((E,D)=>{if(S.inputIndices.includes(D)){let P=E.symbolToIndices.get(I);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(G=>{f.push(`${a[D].indicesSet(`input${D}Indices`,G,s.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,E)=>{if(S.inputIndices.includes(E)){let D=C.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(P=>{b.push(`${a[E].indicesSet(`input${E}Indices`,P,`${I}`)}`)}),v.push(`prod *= ${a[E].getByIndices(`input${E}Indices`)};`)}}),y.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Bi(I)}; ${I}++) {`),x.push("}")});let k=$?[...f,`let sum = ${a.map((S,I)=>S.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...f,m,...y,...b,u,...v,_,...x];return`
            ${p.registerUniforms(l.map(S=>({name:`${Bi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((S,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(u=>r.symbolToInfo.has(u)).map(u=>({type:12,data:r.symbolToInfo.get(u)?.dimValue||0}));p.push({type:12,data:n});let f=e.map((u,m)=>[...K(u)]).reduce((u,m)=>u.concat(m),p);return f.push(...K(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}},getShaderSource:d}},dh=(e,t)=>{let r=new tu(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(ru(a,e.inputs[0].dataType,r,i))},ph=e=>{let t=e.equation.replace(/\s+/g,"");return fe({equation:t})}}),iu,Di,au,nu,hh,Rm=N(()=>{J(),re(),ie(),iu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Di=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},au=(e,t)=>e.length>t.length?Di(e,t):Di(t,e),nu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=au(t,r),a=e[0].dataType,n=a===9||z.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,l=n||i.length>0&&i[i.length-1]%4===0?4:1,d=Math.ceil(z.size(i)/l),p=u=>{let m=R("input",a,t.length,s),_=F("output",a,i.length,l),b;if(a===9){let y=(x,v,$="")=>`
          let outputIndices${v} = ${_.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${m.broadcastedIndicesToOffset(`outputIndices${v}`,_)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${x}[${v}] = ${$}(${m.getByOffset(`index${v}`)}[component${v}]);
        `;b=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else b=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${u.registerUniform("vec_size","u32").declareVariables(m,_)}
    ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},f=[{type:12,data:d},...K(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f})}},hh=e=>{iu(e.inputs),e.compute(nu(e.inputs),{inputs:[0]})}}),su,ch,Bm=N(()=>{J(),re(),ie(),Da(),su=e=>{let t=e[0].dataType,r=z.size(e[0].dims),i=z.size(e[1].dims),a=i%4===0,n=s=>{let l=R("x",t,[1],4),d=R("bias",t,[1],4),p=F("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${d.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,m=a?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(l,d,p)}

    ${da(Ce(t))}

    ${s.mainStart(Mt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",pa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Mt/4)}})}},ch=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?Rp(e):e.compute(su(e.inputs))}}),ou,uu,fh,mh,Dm=N(()=>{J(),re(),ve(),ie(),ou=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},uu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=z.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let l=r[n],d=e[0].dataType===9?4:1,p=Math.ceil(z.size(s)/d),f=[{type:12,data:p},{type:6,data:l},{type:12,data:n},...K(e[0].dims,e[1].dims,s)],u=m=>{let _=R("data",e[0].dataType,e[0].dims.length,d),b=R("inputIndices",e[1].dataType,e[1].dims.length),y=F("output",e[0].dataType,s.length,d),x=$=>{let k=i.length,S=`var indicesIndices${$}  = ${b.type.indices}(0);`;for(let I=0;I<k;I++)S+=`${k>1?`indicesIndices${$}[${I}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${I}]`:`outputIndices${$}`};`;S+=`
          var idx${$} = ${b.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${_.type.indices};
        `;for(let I=0,C=0;I<a;I++)I===n?(S+=`${a>1?`dataIndices${$}[${I}]`:`dataIndices${$}`} = u32(idx${$});`,C+=k):(S+=`${a>1?`dataIndices${$}[${I}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${C}]`:`outputIndices${$}`};`,C++);return S},v;if(e[0].dataType===9){let $=(k,S,I="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${x(S)};
          let offset${S} = ${_.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${k}[${S}] = ${I}(${_.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${_.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,b,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:u}},fh=e=>fe({axis:e.axis}),mh=(e,t)=>{let r=e.inputs;ou(r),e.compute(uu(e.inputs,t))}}),lu,gh,yh,Mm=N(()=>{J(),re(),ie(),lu=(e,t,r,i,a,n,s,l,d)=>{let p=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:d}],f=[n];p.push(...K(t.dims,f));let u=m=>{let _=R("indices_data",t.dataType,t.dims.length),b=F("input_slice_offsets_data",12,1,1),y=[_,b],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(x).declareVariables(...y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:u},{inputs:[t],outputs:[-1]})[0]},gh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],l=z.sizeToDimension(n,n.length-1),d=z.sizeFromDimension(i,t.batchDims+s),p=z.sizeToDimension(i,t.batchDims),f=z.sizeFromDimension(i,t.batchDims),u=l/p,m=new Array(s),_=d;for(let S=0;S<s;++S)m[s-1-S]=_,_*=i[t.batchDims+s-1-S];let b=lu(e,r[1],m,t.batchDims,i,l,u,f,s),y=t.batchDims+s;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(y)),v=z.size(x),$=[{type:12,data:v},{type:12,data:d},...K(r[0].dims,b.dims,x)],k=S=>{let I=R("data",r[0].dataType,r[0].dims.length),C=R("slice_offsets",12,b.dims.length),E=F("output",r[0].dataType,x.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,C,E)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:$}),getShaderSource:k},{inputs:[r[0],b]})},yh=e=>({batchDims:e.batch_dims,cacheKey:""})}),du,pu,_h,bh,Nm=N(()=>{J(),re(),ve(),ie(),du=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((l,d)=>d===r?Math.ceil(l/i)===n.dims[d]:l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((l,d)=>l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},pu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=z.normalizeAxis(t.gatherAxis,a),s=z.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(n,1,...i);let d=z.size(l),p=e[2].dataType,f=e[0].dataType===22,u=[{type:12,data:d},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...K(...e.map((_,b)=>_.dims),l)],m=_=>{let b=R("data",e[0].dataType,e[0].dims.length),y=R("inputIndices",e[1].dataType,e[1].dims.length),x=R("scales",e[2].dataType,e[2].dims.length),v=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=F("output",p,l.length),k=[b,y,x];v&&k.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(S).declareVariables(...k,$)}
        ${_.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${b.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${b.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${b.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ce(p)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,b)=>b!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,b)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:u}),getShaderSource:m}},_h=(e,t)=>{let r=e.inputs;du(r,t),e.compute(pu(e.inputs,t))},bh=e=>fe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hu,cu,$h,wh,Pm=N(()=>{J(),re(),ve(),ie(),hu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},cu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,l=z.normalizeAxis(t.axis,a),d=r[l],p=n.slice(0),f=z.size(p),u=R("input",i,a),m=R("indicesInput",s,n.length),_=F("output",i,p.length),b=[{type:12,data:f},{type:6,data:d},{type:12,data:l}];return b.push(...K(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:b}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(u,m,_)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${u.type.indices}(outputIndices);
      ${u.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${u.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},$h=e=>fe({axis:e.axis}),wh=(e,t)=>{let r=e.inputs;hu(r),e.compute(cu(e.inputs,t))}}),fu,mu,vh,xh,Um=N(()=>{J(),re(),ie(),fu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},mu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=kd.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[a,n];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(n/d),f=Math.ceil(a/d),u=!0,m=z.size(l),_=[{type:12,data:u?p:m},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&(_.push(...K(e[2].dims)),b.push("rank")),_.push(...K(l));let y=v=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",S=R("a",e[0].dataType,e[0].dims),I=R("b",e[1].dataType,e[1].dims),C=S.type.value,E=null,D=[S,I];e.length===3&&(E=R("c",e[2].dataType,e[2].dims.length),D.push(E));let P=F("output",e[0].dataType,l.length);D.push(P);let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(G).declareVariables(...D)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${k}
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${C}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=v=>{let $=R("a",e[0].dataType,e[0].dims),k=R("b",e[1].dataType,e[1].dims),S=null,I=[$,k];e.length===3&&(S=R("c",e[2].dataType,e[2].dims.length),I.push(S));let C=F("output",e[0].dataType,l.length);I.push(C);let E=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",P="";t.transA&&t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(P=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(P=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let G=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(E).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${P}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${G}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return u?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*f},programUniforms:_}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:y}},vh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},xh=(e,t)=>{fu(e.inputs),e.compute(mu(e.inputs,t))}}),Qe,tt,yt,_t,gu,yu,_u,bu,$u,wu,vu,xu,kh,Sh,Wm=N(()=>{J(),re(),ve(),ie(),[Qe,tt,yt,_t]=[0,1,2,3],gu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},yu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,_u=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,bu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,$u=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,wu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Qe}] = batch;
     indices[${tt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${yt}] = u32(r);
            indices[${_t}] = u32(c);
          }
        `;case"border":return`
          indices[${yt}] = u32(clamp(r, 0, H - 1));
          indices[${_t}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${yt}] = gs_reflect(r, border[1], border[3]);
          indices[${_t}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,vu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Qe}], indices[${tt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Qe}], indices[${tt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Qe}], indices[${tt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Qe}], indices[${tt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Qe}], indices[${tt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Qe}], indices[${tt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,xu=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=R("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Qe,tt,yt,_t]=[0,3,1,2]);let s=F("output",e[0].dataType,n.length),l=r.type.value,d=z.size(n),p=[{type:12,data:d},...K(e[0].dims,i,n)],f=u=>`
  ${u.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${yu}
  ${_u(l)}
  ${bu(t)}
  ${$u(t)}
  ${wu(r,l,t)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${yt}]);
      let W_in = i32(uniforms.x_shape[${_t}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Qe}], indices[${yt}], indices[${_t}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${vu(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:u=>{let m=z.size(n);return{outputs:[{dims:n,dataType:u[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:p}},getShaderSource:f}},kh=(e,t)=>{gu(e.inputs),e.compute(xu(e.inputs,t))},Sh=e=>fe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,ku,Th,Mi,Su,er,Ih,Eh=N(()=>{J(),re(),ve(),Aa(),Ba(),ie(),ct(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,ku=(e,t)=>{let r=e[0],i=ze(e,1),a=ze(e,2),n=ze(e,3),s=ze(e,4),l=ze(e,5),d=ze(e,6),p=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],u=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=u,b=0,y=0,x=Math.floor(m/t.numHeads);if(d&&p&&z.size(d.dims)&&z.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=d.dims[2],y=d.dims[2]}else if(d&&z.size(d.dims)||p&&z.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&z.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&z.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=b+_,k=0;if(s&&z.size(s.dims)>0){k=8;let E=s.dims;throw E.length===1?E[0]===f?k=1:E[0]===3*f+2&&(k=3):E.length===2&&E[0]===f&&E[1]===$&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,I=m;if(a&&z.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],S=!0}}let C=!1;if(s&&z.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&z.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[2]!==u||l.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:u,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:$,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:m,vHiddenSize:I,headSize:x,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:C,passPastInKv:S,qkvFormat:v}},Th=e=>fe({...e}),Mi=fe({perm:[0,2,1,3]}),Su=(e,t,r,i,a,n,s)=>{let l=[i,a,n],d=z.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:n}],f=u=>{let m=F("qkv_with_bias",t.dataType,l),_=R("qkv",t.dataType,l),b=R("bias",r.dataType,l),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${u.registerUniforms(y).declareVariables(_,b,m)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},er=(e,t,r,i,a,n,s,l)=>{let d=n;if(s&&z.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=Su(e,n,s,t,i,r*a,l),d=d.reshape([t,i,r,a]),r===1||i===1?d:e.compute(Be(d,Mi.perm),{inputs:[d],outputs:[-1]})[0]}else return n.dims.length===3&&(d=n.reshape([t,i,r,a])),r===1||i===1?d:e.compute(Be(d,Mi.perm),{inputs:[d],outputs:[-1]})[0]},Ih=(e,t)=>{let r=ku(e.inputs,t),i=e.inputs[0],a=ze(e.inputs,1),n=ze(e.inputs,2),s=ze(e.inputs,3),l=ze(e.inputs,4),d=ze(e.inputs,5),p=ze(e.inputs,6),f=ze(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let u=a&&n&&a.dims.length===4&&n.dims.length===4,m=er(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(u)return rr(e,m,a,n,l,void 0,p,f,d,r);if(!a||!n)throw new Error("key and value must be provided");let _=er(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),b=er(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);rr(e,m,_,b,l,void 0,p,f,d,r)}}),Tu,Iu,Eu,Cu,ga,Ch,zh,Ah=N(()=>{J(),re(),ve(),ie(),Tu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Iu=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),fe({numOutputs:i,axis:t.axis,splitSizes:r})},Eu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Cu=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ga=(e,t)=>{let r=e[0].dims,i=z.size(r),a=e[0].dataType,n=z.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=R("input",a,r.length),d=new Array(t.numOutputs),p=[],f=[],u=0,m=[{type:12,data:i}];for(let b=0;b<t.numOutputs;b++){u+=t.splitSizes[b],d[b]=u;let y=r.slice();y[n]=t.splitSizes[b],f.push(y),s[b]=F(`output${b}`,a,y.length),p.push({dims:f[b],dataType:e[0].dataType})}m.push({type:12,data:d},...K(r,...f));let _=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${Eu(d.length)}
  ${Cu(s)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},Ch=(e,t)=>{Tu(e.inputs);let r=e.inputs.length===1?t:Iu(e.inputs,t);e.compute(ga(e.inputs,r),{inputs:[0]})},zh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return fe({axis:t,numOutputs:i,splitSizes:r})}}),zu,Au,Ni,Oh,qm=N(()=>{ve(),Ba(),Eh(),Ah(),ct(),zu=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],f=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],u=p,m=0,_=!i||i.dims.length===0,b=Math.floor(_?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);_&&(f=b*t.numHeads);let y=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(y&&n.dims.length===4&&n.dims[0]===d&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[2]}else if(y||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');u=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');u=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');u=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let $=0,k=!1,S=t.kvNumHeads?b*t.kvNumHeads:f;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(u!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(u!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],k=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:S,headSize:b,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Au=fe({perm:[0,2,1,3]}),Ni=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Be(i,Au.perm),{inputs:[i],outputs:[-1]})[0]),i},Oh=(e,t)=>{let r=zu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,u=fe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[m,_,b]=!a&&!n?e.compute(ga([i],u),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],y=er(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,m,void 0,0);rr(e,y,Ni(e,_,r),Ni(e,b,r),void 0,void 0,s,l,void 0,r,d,p)}}),Pi,Ou,Ru,Rh,Vm=N(()=>{J(),re(),ct(),ie(),Pi=(e,t,r,i,a,n,s,l)=>{let d=$e(n),p=d===1?"f32":`vec${d}f`,f=d===1?"vec2f":`mat2x${d}f`,u=a*s,m=64;u===1&&(m=256);let _=[a,s,n/d],b=[a,s,2],y=["rank","type","type"],x=[];x.push(...K(_,b));let v=$=>{let k=R("x",t.dataType,3,d),S=R("scale",r.dataType,r.dims),I=R("bias",i.dataType,i.dims),C=F("output",1,3,2),E=[k,S,I,C];return`
  var<workgroup> workgroup_shared : array<${f}, ${m}>;
  const workgroup_size = ${m}u;
  ${$.declareVariables(...E)}
  ${$.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ht("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${ht("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:u},programUniforms:x}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Ou=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],l=i[1],d=z.sizeFromDimension(i,n),p=$e(d),f=z.size(a)/p,u=Pi(e,t[0],t[1],t[2],s,d,l,r.epsilon),m=[s,l,d/p],_=[s,l],b=["type","none"],y=x=>{let v=R("x",t[0].dataType,m.length,p),$=R("scale_shift",1,_.length,2),k=F("output",t[0].dataType,m.length,p),S=[v,$,k];return`
  ${x.registerUniform("output_size","u32").declareVariables(...S)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...K(m,_,m)]}),getShaderSource:y},{inputs:[t[0],u]})},Ru=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],l=z.sizeFromDimension(i,1)/s,d=$e(s),p=z.size(a)/d,f=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],u=["type","type"],m=!1,_=[0,i.length-1];for(let v=0;v<i.length-2;v++)m=m||i[v+1]!==1,_.push(v+1);m=m&&i[i.length-1]!==1;let b=m?e.compute(Be(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,$)=>i[_[$]])),y=Pi(e,b,t[1],t[2],n,l,s,r.epsilon),x=v=>{let $=Te(t[0].dataType),k=d===1?"vec2f":`mat${d}x2f`,S=E=>{let D=E===0?"x":"y",P=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${$}(${P}(scale.${D}))`;case 2:return`vec2<${$}>(${P}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${$}>(${P}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=R("input",t[0].dataType,t[0].dims,d),C=F("output",t[0].dataType,a,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:x},{inputs:[t[0],y]})},Rh=(e,t)=>{t.format==="NHWC"?Ru(e,e.inputs,t):Ou(e,e.inputs,t)}}),Bu,Du,Bh,Lm=N(()=>{J(),re(),ie(),Bu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Du=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],l=a,d=z.normalizeAxis(t.axis,a.length),p=z.sizeToDimension(a,d),f=z.sizeFromDimension(a,d),u=z.size(n.dims),m=s?z.size(s.dims):0;if(u!==f||s&&m!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${u} and bias size of ${m}`);let _=[];for(let I=0;I<a.length;++I)I<d?_.push(a[I]):_.push(1);let b=$e(f),y=["type","type"],x=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/b)},{type:1,data:t.epsilon}];s&&y.push("type");let v=r>1,$=r>2,k=I=>{let C=Te(e[0].dataType),E=[R("x",e[0].dataType,e[0].dims,b),R("scale",n.dataType,n.dims,b)];s&&E.push(R("bias",s.dataType,s.dims,b)),E.push(F("output",e[0].dataType,l,b)),v&&E.push(F("mean_data_output",1,_)),$&&E.push(F("inv_std_output",1,_));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(D).declareVariables(...E)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${oa("f32",b)};
    var mean_square_vector = ${oa("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Bt(C,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ht("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ht("mean_square_vector",b)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Bt(C,b,"x[j + offset]")};
      let f32scale = ${Bt(C,b,"scale[j]")};
      output[j + offset] = ${E[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Bt(C,b,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:l,dataType:e[0].dataType}];return v&&S.push({dims:_,dataType:1}),$&&S.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:k}},Bh=(e,t)=>{Bu(e.inputs),e.compute(Du(e.inputs,t,e.outputCount))}}),Mu,Dh,Hm=N(()=>{re(),Ua(),Wa(),Mu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Dh=e=>{Mu(e.inputs);let t=Dt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Pa(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=z.size(e.inputs[0].dims.slice(0,-2)),s=z.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let l=e.inputs[0].reshape([1,n,i]),d=e.inputs[1].reshape([1,i,r]),p=[1,n,r],f=[l,d];e.compute(Pr(f,{activation:""},t,p),{inputs:f})}else e.compute(Pr(e.inputs,{activation:""},t))}}}),Nu,Pu,Uu,Mh,Nh,Gm=N(()=>{J(),re(),ve(),ie(),Nu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!z.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(z.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(z.size(d)!==p)throw new Error("zeroPoints input size error.")}},Pu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=z.size(l),p=e[1].dims[2]/4,f=e[0].dataType,u=$e(t.k),m=$e(p),_=$e(s),b=l.concat([a,s]),y=a>1&&s/_%2===0?2:1,x=z.size(b)/_/y,v=64,$=[],k=[d,a,n/u],S=z.convertShape(e[1].dims).slice();S.splice(-1,1,p/m),$.push(...K(k)),$.push(...K(S)),$.push(...K(e[2].dims)),e.length===4&&$.push(...K(z.convertShape(e[3].dims)));let I=[d,a,s/_];$.push(...K(I));let C=E=>{let D=k.length,P=R("a",e[0].dataType,D,u),G=R("b",12,S.length,m),L=R("scales",e[2].dataType,e[2].dims.length),ee=[P,G,L],U=e.length===4?R("zero_points",12,e[3].dims.length):void 0;U&&ee.push(U);let Q=I.length,ae=F("output",e[0].dataType,Q,_),V=Te(e[0].dataType),te=(()=>{switch(u){case 1:return`array<${V}, 8>`;case 2:return`mat4x2<${V}>`;case 4:return`mat2x4<${V}>`;default:throw new Error(`${u}-component is not supported.`)}})(),ne=()=>{let M=`
          // reuse a data
            var input_offset = ${P.indicesToOffset(`${P.type.indices}(batch, row, word_offset)`)};
            var a_data: ${te};
            for (var j: u32 = 0; j < ${8/u}; j++) {
              a_data[j] = ${P.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let q=0;q<_*y;q++)M+=`
            b_value = ${m===1?`b${q}_data`:`b${q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${te}(${Array.from({length:4},(le,ue)=>`${V}(b_value_lower[${ue}]), ${V}(b_value_upper[${ue}])`).join(", ")});
            b_dequantized_values = ${u===1?`${te}(${Array.from({length:8},(le,ue)=>`(b_quantized_values[${ue}] - ${U?`zero_point${q}`:"zero_point"}) * scale${q}`).join(", ")});`:`(b_quantized_values - ${te}(${Array(8).fill(`${U?`zero_point${q}`:"zero_point"}`).join(",")})) * scale${q};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(q/_)}]${_>1?`[${q%_}]`:""} += ${Array.from({length:8/u},(le,ue)=>`${u===1?`a_data[${ue}] * b_dequantized_values[${ue}]`:`dot(a_data[${ue}], b_dequantized_values[${ue}])`}`).join(" + ")};
          `;return M},X=()=>{let M=`
            var col_index = col * ${_};
            ${U?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${V}(8);`}
            `;for(let q=0;q<_*y;q++)M+=`
            let scale${q} = ${L.getByOffset("col_index * nBlocksPerCol + block")};
            ${U?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${q} = ${V}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return M},ge=()=>{let M=`col_index = col * ${_};`;for(let q=0;q<_*y;q++)M+=`
            let b${q}_data = ${G.getByIndices(`${G.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return M+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${te};
            var b_dequantized_values: ${te};`,M};return`
        var<workgroup> workgroup_shared: array<${ae.type.value}, ${y*v}>;
        ${E.declareVariables(...ee,ae)}
        ${E.mainStart([v,1,1])}
          let output_indices = ${ae.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/u};
            ${X()}
            for (var word: u32 = 0; word < ${p}; word += ${m}) {
              ${ge()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${ne()}
                word_offset += ${8/u};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${u};${m};${_};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:f}],dispatchGroup:{x},programUniforms:$}),getShaderSource:C}},Uu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=z.size(l),p=e[1].dims[2]/4,f=e[0].dataType,u=$e(t.k),m=$e(p),_=l.concat([a,s]),b=128,y=s%8===0?8:s%4===0?4:1,x=b/y,v=x*m*8,$=v/u,k=v/t.blockSize,S=z.size(_)/y,I=[],C=[d,a,n/u],E=z.convertShape(e[1].dims).slice();E.splice(-1,1,p/m),I.push(...K(C)),I.push(...K(E)),I.push(...K(e[2].dims)),e.length===4&&I.push(...K(z.convertShape(e[3].dims)));let D=[d,a,s];I.push(...K(D));let P=G=>{let L=C.length,ee=R("a",e[0].dataType,L,u),U=R("b",12,E.length,m),Q=R("scales",e[2].dataType,e[2].dims.length),ae=[ee,U,Q],V=e.length===4?R("zero_points",12,e[3].dims.length):void 0;V&&ae.push(V);let te=D.length,ne=F("output",e[0].dataType,te),X=Te(e[0].dataType),ge=()=>{switch(u){case 1:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${u}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${ne.type.value}, ${x}>, ${y}>;
        ${G.declareVariables(...ae,ne)}
        ${G.mainStart([x,y,1])}
          let output_indices = ${ne.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${b})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${V?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${X}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            let scale = ${Q.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${U.getByIndices(`${U.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/u};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${ge()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${X}>(${Array.from({length:4},(M,q)=>`${X}(b_value_lower[${q}]), ${X}(b_value_upper[${q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${X}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(M,q)=>`${`dot(a_data${q}, b_dequantized_values[${q}])`}`).join(" + ")};
              word_offset += ${8/u};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${ne.type.value} = ${ne.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ne.setByIndices(`${ne.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${u};${m};${x};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:S},programUniforms:I}),getShaderSource:P}},Mh=(e,t)=>{Nu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Uu(e.inputs,t)):e.compute(Pu(e.inputs,t))},Nh=e=>fe(e)}),Wu,qu,Vu,Lu,Hu,Gu,Fu,ju,Ph,Fm=N(()=>{J(),re(),ie(),Wu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${j("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${j("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Vu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${j("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${j("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Lu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${j("uniforms.x_shape",a,t)})) {
                  k = i32(${j("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Hu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${j("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${j("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${j("uniforms.x_shape",a,t)})) {
                  k -= i32(${j("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${j("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Gu=(e,t,r)=>{switch(r.mode){case 0:return qu(e,t,r.pads.length);case 1:return Vu(e,t,r.pads.length);case 2:return Lu(e,t,r.pads.length);case 3:return Hu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Fu=(e,t)=>{let r=z.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=z.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...K(e[0].dims,r));let l=["rank"],d=p=>{let f=F("output",e[0].dataType,r.length),u=R("x",e[0].dataType,i.length),m=u.type.value,_=Gu(f,i.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:s?m:"f32"}),`
            ${p.registerUniforms(b).declareVariables(u,f)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(r)/64)},programUniforms:n}),getShaderSource:d}},ju=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)n[Number(l[d])]=Number(r[d]),n[Number(l[d])+a]=Number(r[d+l.length])}else r.forEach((l,d)=>n[Number(d)]=Number(l));let s=[];return n.forEach(l=>s.push(l)),{mode:t.mode,value:i,pads:s}}else return t},Ph=(e,t)=>{Wu(e.inputs);let r=ju(e.inputs,t);e.compute(Fu(e.inputs,r),{inputs:[0]})}}),Ft,Ui,Wi,qi,Vi,Ku,Qu,Li,Hi,Uh,Wh,Gi,qh,Vh,Fi,Lh,Hh,Gh,Fh,jm=N(()=>{He(),J(),re(),ie(),Ft=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ui=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=n?t.dilations.slice():[],p=t.pads.slice();Mr.adjustPoolAttributes(r,a,s,l,d,p);let f=Mr.computePoolOutputShape(r,a,l,d,s,p,t.autoPad),u=Object.assign({},t);n?Object.assign(u,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let m=f.slice();return m.push(m.splice(1,1)[0]),[u,i?m:f]},Wi=(e,t)=>{let r=t.format==="NHWC",i=z.size(e),a=z.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],u=!!(p+f);n.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(y+x),n.push({type:12,data:_},{type:12,data:b},{type:12,data:y},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,u,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=z.computeStrides(t.kernelShape);n.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,f)=>p+f);return[n,s,!!d,!1,!1]}},qi=(e,t,r,i,a,n,s,l,d,p,f,u)=>{let m=a.format==="NHWC",_=t.type.value,b=F("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",x="",v="",$=r-(m?2:1);if(f?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let k=r-(m?3:2);u?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${_}(${l});
              var pad = 0;
              ${x}
              ${y}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,x=a.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(d).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${_}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${j("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${j("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${j("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${j("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Vi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Ku=e=>`${Vi(e)};${e.countIncludePad}`,Qu=e=>`${Vi(e)};${e.storageOrder};${e.dilations}`,Li=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Hi=(e,t,r,i)=>{let[a,n]=Ui(t,i,r),s=R("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";a.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[f,u,m,_,b]=Wi(n,a);f.push(...K(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${_};${b}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:f}),getShaderSource:x=>qi(x,s,t.dims.length,n.length,a,d,p,0,u,m,_,b)}},Uh=e=>{let t=e.count_include_pad!==0,r=Li(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Ku(i)}},Wh=(e,t)=>{Ft(e.inputs),e.compute(Hi("AveragePool",e.inputs[0],!1,t))},Gi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},qh=e=>{let t=e.format;return{format:t,...Gi,cacheKey:t}},Vh=(e,t)=>{Ft(e.inputs),e.compute(Hi("GlobalAveragePool",e.inputs[0],!0,t))},Fi=(e,t,r,i)=>{let[a,n]=Ui(t,i,r),s=`
      value = max(x_val, value);
    `,l="",d=R("x",t.dataType,t.dims.length),p=["rank"],[f,u,m,_,b]=Wi(n,a);return f.push(...K(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${_};${b}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:f}),getShaderSource:y=>qi(y,d,t.dims.length,n.length,a,s,l,t.dataType===10?-65504:-1e5,u,m,_,b)}},Lh=(e,t)=>{Ft(e.inputs),e.compute(Fi("MaxPool",e.inputs[0],!1,t))},Hh=e=>{let t=e.storage_order,r=e.dilations,i=Li(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Qu(a)}},Gh=e=>{let t=e.format;return{format:t,...Gi,cacheKey:t}},Fh=(e,t)=>{Ft(e.inputs),e.compute(Fi("GlobalMaxPool",e.inputs[0],!0,t))}}),Yu,Zu,jh,Kh,Km=N(()=>{J(),re(),ve(),ie(),Yu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Zu=(e,t)=>{let r=z.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,l=z.size(n),d=i===3||i===2,p=d?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,u=e.length>2?e[2]:void 0,m=u?d?[Math.ceil(z.size(u.dims)/4)]:u.dims:void 0,_=f.length===0||f.length===1&&f[0]===1,b=_===!1&&f.length===1,y=$e(l),x=_&&(!d||y===4),v=x?y:1,$=x&&!d?y:1,k=R("input",d?12:i,p.length,$),S=R("scale",s,f.length),I=u?R("zero_point",d?12:i,m.length):void 0,C=F("output",s,n.length,v),E=[k,S];I&&E.push(I);let D=[p,f];u&&D.push(m);let P=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...K(...D,n)],G=L=>{let ee=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${L.registerUniforms(ee).declareVariables(...E,C)}
      ${L.mainStart()}
          ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${S.getByOffset("0")}`:b?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:b?d?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?a?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:G,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:P})}},jh=(e,t)=>{Yu(e.inputs,t),e.compute(Zu(e.inputs,t))},Kh=e=>fe({axis:e.axis,blockSize:e.blockSize})}),Xu,Ju,Qh,Qm=N(()=>{He(),J(),ie(),Xu=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Ju=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,l=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...K(n)],d=p=>{let f=F("output",i,n.length),u=f.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:u},{name:"delta",type:u}];return`
        ${p.registerUniforms(m).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${u}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},Qh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&Xu(t,r,i),e.compute(Ju(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),el,tl,Yh,Zh,Ym=N(()=>{J(),re(),ve(),ie(),el=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},tl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(z.size(i)/n),l=i[i.length-1],d=z.sizeFromDimension(r,l),p=[{type:12,data:s},{type:12,data:l},{type:12,data:d},...K(e[1].dims,e[2].dims,a)],f=u=>{let m=R("indices",e[1].dataType,e[1].dims.length),_=R("updates",e[2].dataType,e[2].dims.length,n),b=t.reduction!=="none"&&t.reduction!==""?Id("output",e[0].dataType,a.length):F("output",e[0].dataType,a.length,n);return`
      ${u.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,_,b)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${el(t.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:f}},Yh=e=>fe({reduction:e.reduction}),Zh=(e,t)=>{e.compute(tl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),rl,il,al,ji,nl,sl,ol,ul,ll,dl,pl,hl,Ki,cl,fl,ml,gl,yl,Xh,Jh,Zm=N(()=>{J(),re(),ve(),ie(),rl=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},il=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},al=(e,t,r,i,a,n)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>n.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(f=>i.push(f)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");rl(i,t),t.axes.length>0&&il(i,t.axes,p).forEach((f,u)=>i[u]=f)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},ji=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,nl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ji("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ji("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",sl=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ol=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},ul=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},ll=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},dl=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${j("uniforms.scales","i",i)};
        var roi_low = ${j("uniforms.roi","i",a)};
        var roi_hi = ${j("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${j("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,pl=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${j("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${j("uniforms.roi","i",n)};
          var roi_hi = ${j("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${j("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,hl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${j("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ki=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",cl=(e,t,r,i,a)=>{let[n,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Ki(e,d,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},fl=(e,t,r,i,a,n,s,l,d,p)=>{let f=r.length===2,[u,m]=f?[0,1]:[2,3],_=e.type.value,b=y=>{let x=y===u?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${_} = originalIdx + ${_}(i);
          if (${x} < 0 || ${x} >= ${r[y]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${x} = max(0, min(${x}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${x})`)};
          data[i + 1] = ${y===u?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${b(u)};
    ${b(m)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ml=(e,t,r,i,a)=>{let[n,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Ki(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${l}];
      var width:${f} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},gl=(e,t,r,i,a,n)=>{let s=e.dims,l=ol(n,t.axes,s.length),d=ul(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map(($,k)=>$===0?1:d[k]/$),t.keepAspectRatioPolicy!=="stretch"&&(d=ll(s,p,t)));let f=F("output",e.dataType,d.length),u=R("input",e.dataType,s.length),m=z.size(d),_=s.length===d.length&&s.every(($,k)=>$===d[k]),b=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,x=u.type.value,v=$=>`
      ${_?"":`
      ${nl(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${hl(u,s)};
              ${sl(t.nearestMode,r,x)};
              ${pl(u,f,s,d,p.length,l.length,b)};
              `;case"linear":return`
              ${dl(f,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${cl(u,f,s,b,y)}`;if(s.length===3||s.length===5)return`${ml(u,f,s,b,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${fl(u,f,s,d,p,l,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(u,f)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${u.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${u.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${a.length>0?a:""}|${l.length>0?l:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:p},{type:1,data:l},...K(s,d)]})}},yl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Xh=(e,t)=>{let r=[],i=[],a=[],n=yl(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");al(e.inputs,t,n,r,i,a),e.compute(gl(e.inputs[0],t,n,r,i,a),{inputs:[0]})},Jh=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return fe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),_l,bl,ec,Xm=N(()=>{J(),re(),ve(),ie(),_l=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!z.areEqual(i.dims,[])&&!z.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!z.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],f=a.dims[0],u=z.sizeFromDimension(r.dims,1)/p,m=l===0?a.dims[1]*2:u/s;if(l>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},bl=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],l=z.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,f=e[2].dims[1],u=a===0?f*2:p/i,m=new Array(s,d,p/u,u-f),_=z.computeStrides(m),b=[{type:1,data:n},{type:12,data:m},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[l,p,u,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,u,d*u,1]}):[],...K(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=x=>{let v=R("input",e[0].dataType,e[0].dims.length),$=R("position_ids",e[1].dataType,e[1].dims.length),k=R("cos_cache",e[2].dataType,e[2].dims.length),S=R("sin_cache",e[3].dataType,e[3].dims.length),I=F("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${x.declareVariables(v,$,k,S,I)}

        ${x.mainStart(Mt)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",F("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:fe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(m)/Mt)},programUniforms:b})}},ec=(e,t)=>{_l(e.inputs,t),e.compute(bl(e.inputs,t))}}),$l,wl,tc,Jm=N(()=>{J(),re(),ie(),$l=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},wl=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=z.size(n),l=n,d=s,p=n.slice(-1)[0],f=i?n.slice(0,-1).concat(1):[],u=!a&&e.length>3,m=e.length>4,_=i&&r>1,b=i&&r>2,y=r>3,x=64,v=$e(p),$=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],k=I=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],E=[R("x",e[0].dataType,e[0].dims,v),R("skip",e[1].dataType,e[1].dims,v),R("gamma",e[2].dataType,e[2].dims,v)];u&&E.push(R("beta",e[3].dataType,e[3].dims,v)),m&&E.push(R("bias",e[4].dataType,e[4].dims,v)),E.push(F("output",e[0].dataType,l,v)),_&&E.push(F("mean_output",1,f)),b&&E.push(F("inv_std_output",1,f)),y&&E.push(F("input_skip_bias_sum",e[0].dataType,l,v));let D=Te(e[0].dataType),P=Te(1,v);return`

      ${I.registerUniforms(C).declareVariables(...E)}
      var<workgroup> sum_shared : array<${P}, ${x}>;
      var<workgroup> sum_squared_shared : array<${P}, ${x}>;

      ${I.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Bt(D,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ht("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ht("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${u?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:l,dataType:e[0].dataType}];return r>1&&S.push({dims:f,dataType:1}),r>2&&S.push({dims:f,dataType:1}),r>3&&S.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${_};${b};${y}`,inputDependencies:e.map((I,C)=>"type")},getShaderSource:k,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:$})}},tc=(e,t)=>{$l(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(wl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),vl,jt,xl,Qi,kl,Sl,rc,ic,eg=N(()=>{J(),re(),ve(),ie(),vl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},jt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},xl=(e,t)=>{if(e.length>1){let r=jt(e,1),i=jt(e,2),a=jt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),fe({starts:r,ends:i,axes:a})}else return t},Qi=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},kl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${j("uniforms.input_shape","i",r.length)};
            let steps_i = ${j("uniforms.steps","i",r.length)};
            let signs_i = ${j("uniforms.signs","i",r.length)};
            let starts_i = ${j("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Sl=(e,t)=>{let r=e[0].dims,i=z.size(r),a=t.axes.length>0?z.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=jt(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,$)=>Qi(v,$,r,a,n)),l=t.ends.map((v,$)=>Qi(v,$,r,a,n));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),l.splice(v,0,r[v]),n.splice(v,0,1));let d=n.map(v=>Math.sign(v));n.forEach((v,$,k)=>{if(v<0){let S=(l[$]-s[$])/v,I=s[$],C=I+S*n[$];s[$]=C,l[$]=I,k[$]=-v}});let p=r.slice(0);a.forEach((v,$)=>{p[v]=Math.ceil((l[v]-s[v])/n[v])});let f={dims:p,dataType:e[0].dataType},u=F("output",e[0].dataType,p.length),m=R("input",e[0].dataType,e[0].dims.length),_=z.size(p),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:_},{type:12,data:s},{type:6,data:d},{type:12,data:n},...K(e[0].dims,p)],x=v=>`
      ${v.registerUniforms(b).declareVariables(m,u)}
        ${kl(m,u,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${u.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${u.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},rc=(e,t)=>{vl(e.inputs,t);let r=xl(e.inputs,t);e.compute(Sl(e.inputs,r),{inputs:[0]})},ic=e=>{let t=e.starts,r=e.ends,i=e.axes;return fe({starts:t,ends:r,axes:i})}}),Tl,Il,ac,nc,tg=N(()=>{J(),re(),ve(),ct(),ie(),Tl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Il=(e,t)=>{let r=e.inputs[0],i=r.dims,a=z.size(i),n=i.length,s=z.normalizeAxis(t.axis,n),l=s<i.length-1,d,p=[];l?(p=Array.from({length:n},(E,D)=>D),p[s]=n-1,p[n-1]=s,d=e.compute(Be(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let f=d.dims,u=f[n-1],m=a/u,_=$e(u),b=u/_,y=64;m===1&&(y=256);let x=(E,D)=>D===4?`max(max(${E}.x, ${E}.y), max(${E}.z, ${E}.w))`:D===2?`max(${E}.x, ${E}.y)`:D===3?`max(max(${E}.x, ${E}.y), ${E}.z)`:E,v=R("x",d.dataType,d.dims,_),$=F("result",d.dataType,d.dims,_),k=v.type.value,S=Te(d.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,I=E=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${E.registerUniform("packedCols","i32").declareVariables(v,$)}
      ${E.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${x("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${ht("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${_};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:d.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:b}]}),getShaderSource:I},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(Be(C,p),{inputs:[C]})},ac=(e,t)=>{Tl(e.inputs),Il(e,t)},nc=e=>fe({axis:e.axis})}),Yi,El,Cl,zl,sc,rg=N(()=>{J(),re(),ie(),Yi=e=>Array.from(e.getBigInt64Array(),Number),El=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Yi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Cl=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},zl=(e,t)=>{let r=e[0].dims,i=t??Yi(e[1]),a=Cl(r,i),n=z.size(a),s=e[0].dataType,l=R("input",s,r.length),d=F("output",s,a.length),p=f=>`
      const inputShape = ${l.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(l,d)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...K(e[0].dims,a)]}),getShaderSource:p}},sc=e=>{El(e.inputs),e.compute(zl(e.inputs),{inputs:[0]})}}),Al,Ol,oc,ig=N(()=>{J(),re(),ie(),Al=(e,t,r,i,a)=>{let n=F("output_data",a,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),l=R("b_data",t[2].dataType,t[2].dims.length,4),d=R("c_data",t[0].dataType,t[0].dims.length,4),p,f=(u,m,_)=>`select(${m}, ${u}, ${_})`;if(!i)p=n.setByOffset("global_idx",f(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let u=(m,_,b="")=>{let y=`a_data[index_a${_}][component_a${_}]`,x=`b_data[index_b${_}][component_b${_}]`,v=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${n.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_b${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_c${_} = ${d.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${m}[${_}] = ${b}(${f(y,x,v)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${u("data",0,"u32")}
            ${u("data",1,"u32")}
            ${u("data",2,"u32")}
            ${u("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${u("output_data[global_idx]",0)}
            ${u("output_data[global_idx]",1)}
            ${u("output_data[global_idx]",2)}
            ${u("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Ol=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(z.areEqual(t,r)&&z.areEqual(r,i)),s=t,l=z.size(t);if(n){let p=Dt.calcShape(Dt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=z.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Al(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...K(i,t,r,s)]})}},oc=e=>{e.compute(Ol(e.inputs))}}),uc,ag=N(()=>{ym(),Ba(),_m(),bm(),$m(),wm(),vm(),Im(),Cm(),zm(),Am(),Om(),Rm(),Bm(),Dm(),Mm(),Nm(),Pm(),Um(),Wm(),qm(),Vm(),Lm(),Hm(),Gm(),Eh(),Fm(),jm(),Km(),Qm(),Ym(),Ra(),Zm(),Xm(),Jm(),eg(),tg(),Ah(),rg(),ct(),Da(),ig(),uc=new Map([["Abs",[rp]],["Acos",[ip]],["Acosh",[ap]],["Add",[Pp]],["ArgMax",[Xd,la]],["ArgMin",[Zd,la]],["Asin",[np]],["Asinh",[sp]],["Atan",[op]],["Atanh",[up]],["Attention",[Jd]],["AveragePool",[Wh,Uh]],["BatchNormalization",[ep]],["BiasAdd",[tp]],["BiasSplitGelu",[Np]],["Cast",[dp,lp]],["Ceil",[hp]],["Clip",[pp]],["Concat",[Kp,Qp]],["Conv",[ma,fa]],["ConvTranspose",[nh,ah]],["Cos",[cp]],["Cosh",[fp]],["CumSum",[sh,oh]],["DepthToSpace",[uh,lh]],["DequantizeLinear",[jh,Kh]],["Div",[Up]],["Einsum",[dh,ph]],["Elu",[mp,Jt]],["Equal",[Wp]],["Erf",[gp]],["Exp",[yp]],["Expand",[hh]],["FastGelu",[ch]],["Floor",[_p]],["FusedConv",[ma,fa]],["Gather",[mh,fh]],["GatherElements",[wh,$h]],["GatherBlockQuantized",[_h,bh]],["GatherND",[gh,yh]],["Gelu",[bp]],["Gemm",[xh,vh]],["GlobalAveragePool",[Vh,qh]],["GlobalMaxPool",[Fh,Gh]],["Greater",[Hp]],["GreaterOrEqual",[Fp]],["GridSample",[kh,Sh]],["GroupQueryAttention",[Oh]],["HardSigmoid",[Ip,Tp]],["InstanceNormalization",[Rh]],["LayerNormalization",[Bh]],["LeakyRelu",[$p,Jt]],["Less",[Gp]],["LessOrEqual",[jp]],["Log",[Dp]],["MatMul",[Dh]],["MatMulNBits",[Mh,Nh]],["MaxPool",[Lh,Hh]],["Mul",[qp]],["MultiHeadAttention",[Ih,Th]],["Neg",[vp]],["Not",[wp]],["Pad",[Ph]],["Pow",[Vp]],["QuickGelu",[Mp,Jt]],["Range",[Qh]],["Reciprocal",[xp]],["ReduceMin",[Fd]],["ReduceMean",[qd]],["ReduceMax",[Gd]],["ReduceSum",[Kd]],["ReduceProd",[jd]],["ReduceL1",[Vd]],["ReduceL2",[Ld]],["ReduceLogSum",[Yd]],["ReduceLogSumExp",[Hd]],["ReduceSumSquare",[Qd]],["Relu",[kp]],["Resize",[Xh,Jh]],["RotaryEmbedding",[ec]],["ScatterND",[Zh,Yh]],["Sigmoid",[Sp]],["Sin",[Ep]],["Sinh",[Cp]],["Slice",[rc,ic]],["SkipLayerNormalization",[tc]],["Split",[Ch,zh]],["Sqrt",[zp]],["Softmax",[ac,nc]],["Sub",[Lp]],["Tan",[Ap]],["Tanh",[Op]],["ThresholdedRelu",[Bp,Jt]],["Tile",[sc]],["Transpose",[Cd,zd]],["Where",[oc]]])}),lc,ng=N(()=>{He(),rt(),ie(),lc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Ze(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});a&&l.push({binding:l.length,resource:a});let d=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Le(e.programInfo.name)}dispose(){}build(e,t){Ze(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let a=Ed(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,l=r.createShaderModule({code:s,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Le(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Rl,Bl,Dl,Ml,dc,sg=N(()=>{He(),J(),rt(),vd(),mm(),ag(),ng(),Rl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Bl=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Rl(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Dl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ml=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},dc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups")&&a("subgroups-f16"),this.device=await t.requestDevice(i),this.deviceInfo=new Ml(this.device),this.adapterInfo=new Dl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=xd(this),this.programManager=new lc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ca(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ze(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),l=s.kernelType,d=s.kernelName,p=a.programName,f=a.inputTensorViews,u=a.outputTensorViews,m=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),y=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(x=>({dims:x.dims,dataType:vt(x.dataType)})),outputsMetadata:u.map(x=>({dims:x.dims,dataType:vt(x.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:p,startTime:b,endTime:y});else{let x="";f.forEach(($,k)=>{x+=`input[${k}]: [${$.dims}] | ${vt($.dataType)}, `});let v="";u.forEach(($,k)=>{v+=`output[${k}]: [${$.dims}] | ${vt($.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${d}|${p}" ${x}${v}execution time: ${y-b} ns`)}Rr("GPU",`${p}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Le()}run(e,t,r,i,a,n){Ze(e.name);let s=[];for(let $=0;$<t.length;++$){let k=t[$].data;if(k===0)continue;let S=this.gpuDataManager.get(k);if(!S)throw new Error(`no GPU data for input: ${k}`);s.push(S)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),f=r.length===0?l.map(($,k)=>k):r;if(f.length!==l.length)throw new Error(`Output size ${f.length} must be equal to ${l.length}.`);let u=[],m=[];for(let $=0;$<l.length;++$){if(!Number.isInteger(f[$])||f[$]<-3||f[$]>=n)throw new Error(`Invalid output index: ${f[$]}`);if(f[$]===-3)continue;let k=f[$]===-1,S=f[$]===-2,I=k||S?a(l[$].dataType,l[$].dims):i(f[$],l[$].dataType,l[$].dims);if(u.push(I),I.data===0)continue;let C=this.gpuDataManager.get(I.data);if(!C)throw new Error(`no GPU data for output: ${I.data}`);if(k&&this.temporaryData.push(C),S){let E=this.kernelPersistentData.get(this.currentKernelId);E||(E=[],this.kernelPersistentData.set(this.currentKernelId,E)),E.push(C)}m.push(C)}if(s.length!==t.length||m.length!==u.length){if(m.length===0)return Le(e.name),u;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(p){let $=0,k=[];p.forEach(E=>{let D=typeof E.data=="number"?[E.data]:E.data;if(D.length===0)return;let P=E.type===10?2:4,G,L;E.type===10?(L=D.length>4?16:D.length>2?8:D.length*P,G=D.length>4?16:P*D.length):(L=D.length<=2?D.length*P:16,G=16),$=Math.ceil($/L)*L,k.push($);let ee=E.type===10?8:4;$+=D.length>4?Math.ceil(D.length/ee)*G:D.length*P});let S=16;$=Math.ceil($/S)*S;let I=new ArrayBuffer($);p.forEach((E,D)=>{let P=k[D],G=typeof E.data=="number"?[E.data]:E.data;if(E.type===6)new Int32Array(I,P,G.length).set(G);else if(E.type===12)new Uint32Array(I,P,G.length).set(G);else if(E.type===10)new Uint16Array(I,P,G.length).set(G);else if(E.type===1)new Float32Array(I,P,G.length).set(G);else throw new Error(`Unsupported uniform type: ${vt(E.type)}`)});let C=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,I,0,$),this.gpuDataManager.release(C.id),_={offset:0,size:$,buffer:C.buffer}}let b=this.programManager.normalizeDispatchGroupSize(d),y=b[1]===1&&b[2]===1,x=Bl(e,t,y),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,b),this.programManager.setArtifact(x,v),ce("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let $=0;$<p.length;$++){let k=p[$],S=k.type,I=typeof k.data=="number"?1:k.data.length,[C,E]=v.uniformVariablesInfo[$];if(S!==C||I!==E)throw new Error(`Uniform variable ${$} mismatch: expect type ${C} with size ${E}, got type ${S} with size ${I} in program "${v.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:u};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(v,s,m,b,_),Le(e.name),u}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=uc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await sa(this,e,t);return za(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Nl,Zi,Pl,Xi,Ji,ea,Ul,pc,og=N(()=>{rt(),Nl=1,Zi=()=>Nl++,Pl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Xi=(e,t)=>{let r=Pl.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Ji=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Xi(this.dataType,this.tensorShape)}destroy(){ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}},ea=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Xi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,a,!0,!0),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ul=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=Zi();return this.tensorTrackersById.set(e,new ea(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(e);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(this.backend.currentContext,t,r,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=Zi(),n=new Ji({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new ea(this,n)),this.externalTensors.add(n),a}async getCachedTensor(e,t,r,i,a){let n=this.backend.currentSessionId,s=this.backend.currentContext;for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(s,e,t)){ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=n,f}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let l=await s.createTensor({dataType:e,shape:t,dimensions:t,usage:r,writable:i,readable:a});return new Ji({sessionId:n,context:s,tensor:l,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},pc=(...e)=>new Ul(...e)}),ta,Wl,hc,ug=N(()=>{J(),Tt(),vd(),og(),rt(),ta=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Wl=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},hc=class{constructor(e){this.tensorManager=pc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],Ca(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Wl(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i){let a=ta.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,a,r,i)}uploadTensor(e,t){if(!Se().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return za(r,t)}}registerMLTensor(e,t,r){let i=ta.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(this.currentContext,e,i,r);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,a,n){if(!n)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=n.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(a.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}}`),i.constant(a,p)}flush(){}}}),cc={};ir(cc,{init:()=>fc});var Ir,ql,fc,lg=N(()=>{J(),sg(),rt(),re(),ug(),Ir=class mc{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(z.size(t)!==z.size(this.dims))throw new Error("Invalid new shape");return new mc(this.module,this.dataType,this.data,t)}},ql=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let l=[];for(let d=0;d<s;d++){let p=Number(e.getValue(i*a++,n)),f=Number(e.getValue(i*a++,"*")),u=Number(e.getValue(i*a++,n)),m=[];for(let _=0;_<u;_++)m.push(Number(e.getValue(i*a++,n)));l.push(new Ir(e,p,f,m))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,l,d)=>new Ir(this.module,l,this.output(s,d),d),n=(s,l)=>{let d=Rt(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new Ir(this.module,s,p,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},fc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new dc;await n.initialize(r,i),a("webgpu",[n,s=>n.alloc(Number(s)),s=>n.free(s),(s,l,d,p=!1)=>{if(p)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(d)}`),n.memcpy(Number(s),Number(l));else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));n.upload(Number(l),f)}},async(s,l,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await n.download(Number(s),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(s,l,d)=>n.createKernel(s,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),s=>n.releaseKernel(s),(s,l,d,p)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let f=new ql(t,n,Number(l));return n.computeKernel(Number(s),f,p)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let n=new hc(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,l,d,p)=>n.ensureTensor(s,l,d,p),(s,l)=>{n.uploadTensor(s,l)},async(s,l)=>n.downloadTensor(s,l)])}}}),Vl,qa,Va,dt,Ll,Ur,La,Ha,ra,Ga,Fa,ja,gc=N(()=>{cm(),fm(),J(),Tt(),ka(),wd(),Vl=(e,t)=>{Se()._OrtInit(e,t)!==0&&pe("Can't initialize onnxruntime.")},qa=async e=>{Vl(e.wasm.numThreads,Dr(e.logLevel))},Va=async(e,t)=>{{let r=(lg(),Or(cc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Se(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Se(),e)}}},dt=new Map,Ll=e=>{let t=Se(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&pe("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Ur=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},La=async(e,t)=>{let r,i,a=Se();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Ur(e);let n=0,s=0,l=0,d=[],p=[],f=[];try{if([s,d]=$d(t),t?.externalData&&a.mountExternalData){let $=[];for(let k of t.externalData){let S=typeof k=="string"?k:k.path;$.push(Ea(typeof k=="string"?k:k.data).then(I=>{a.mountExternalData(S,I)}))}await Promise.all($)}for(let $ of t?.executionProviders??[])if((typeof $=="string"?$:$.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof $!="string"){let k=$,S=k?.context,I=k?.gpuDevice,C=k?.deviceType,E=k?.powerPreference;S?a.currentContext=S:I?a.currentContext=await a.jsepCreateMLContext(I):a.currentContext=await a.jsepCreateMLContext({deviceType:C,powerPreference:E})}else a.currentContext=await a.jsepCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),n===0&&pe("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.jsepRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[u,m]=Ll(n),_=!!t?.enableGraphCapture,b=[],y=[],x=[];for(let $=0;$<u;$++){let k=a._OrtGetInputName(n,$);k===0&&pe("Can't get an input name."),p.push(k),b.push(a.UTF8ToString(k))}for(let $=0;$<m;$++){let k=a._OrtGetOutputName(n,$);k===0&&pe("Can't get an output name."),f.push(k);let S=a.UTF8ToString(k);y.push(S);{if(_&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[S]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(_&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(I)}}let v=null;return x.some($=>$==="gpu-buffer"||$==="ml-tensor")&&(l=a._OrtCreateBinding(n),l===0&&pe("Can't create IO binding."),v={handle:l,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map($=>na($))}),dt.set(n,[n,p,f,v,_,!1]),[n,b,y]}catch(u){throw p.forEach(m=>a._OrtFree(m)),f.forEach(m=>a._OrtFree(m)),l!==0&&a._OrtReleaseBinding(l)!==0&&pe("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&pe("Can't release session."),u}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&pe("Can't release session options."),d.forEach(u=>a._free(u)),a.unmountExternalData?.()}},Ha=e=>{let t=Se(),r=dt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&pe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&pe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),a.forEach(d=>t._OrtFree(d)),n.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(i)!==0&&pe("Can't release session."),dt.delete(e)},ra=(e,t,r,i,a,n=!1)=>{if(!e){t.push(0);return}let s=Se(),l=s.PTR_SIZE,d=e[0],p=e[1],f=e[3],u,m;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let y=e[2].gpuBuffer;m=Rt(Zt(d),p);let x=s.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');u=x(i,a,y,m)}else if(f==="ml-tensor"){let y=e[2].mlTensor;m=Rt(Zt(d),p);let x=s.jsepRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');u=x(y,Zt(d),p)}else{let y=e[2];if(Array.isArray(y)){m=l*y.length,u=s._malloc(m),r.push(u);for(let x=0;x<y.length;x++){if(typeof y[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.setValue(u+x*l,Ee(y[x],r),"*")}}else m=y.byteLength,u=s._malloc(m),r.push(u),s.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,m),u)}let _=s.stackSave(),b=s.stackAlloc(4*p.length);try{p.forEach((x,v)=>s.setValue(b+v*l,x,l===4?"i32":"i64"));let y=s._OrtCreateTensor(Zt(d),u,m,b,p.length,na(f));y===0&&pe(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(y)}finally{s.stackRestore(_)}},Ga=async(e,t,r,i,a,n)=>{let s=Se(),l=s.PTR_SIZE,d=dt.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],f=d[1],u=d[2],m=d[3],_=d[4],b=d[5],y=t.length,x=i.length,v=0,$=[],k=[],S=[],I=[],C=s.stackSave(),E=s.stackAlloc(y*l),D=s.stackAlloc(y*l),P=s.stackAlloc(x*l),G=s.stackAlloc(x*l);try{s.jsepOnRunStart?.(p),[v,$]=bd(n);for(let U=0;U<y;U++)ra(r[U],k,I,e,t[U],_);for(let U=0;U<x;U++)ra(a[U],S,I,e,y+i[U],_);for(let U=0;U<y;U++)s.setValue(E+U*l,k[U],"*"),s.setValue(D+U*l,f[t[U]],"*");for(let U=0;U<x;U++)s.setValue(P+U*l,S[U],"*"),s.setValue(G+U*l,u[i[U]],"*");if(m&&!b){let{handle:U,outputPreferredLocations:Q,outputPreferredLocationsEncoded:ae}=m;if(f.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${f.length}).`);for(let V=0;V<y;V++){let te=t[V];await s._OrtBindInput(U,f[te],k[V])!==0&&pe(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<x;V++){let te=i[V];a[V]?.[3]?s._OrtBindOutput(U,u[te],S[V],0)!==0&&pe(`Can't bind pre-allocated output[${V}] for session=${e}.`):s._OrtBindOutput(U,u[te],0,ae[te])!==0&&pe(`Can't bind output[${V}] to ${Q[V]} for session=${e}.`)}dt.set(e,[p,f,u,m,_,!0])}let L;m?L=await s._OrtRunWithBinding(p,m.handle,x,P,v):L=await s._OrtRun(p,D,E,y,G,x,P,v),L!==0&&pe("failed to call OrtRun().");let ee=[];for(let U=0;U<x;U++){let Q=Number(s.getValue(P+U*l,"*"));if(Q===S[U]){ee.push(a[U]);continue}let ae=s.stackSave(),V=s.stackAlloc(4*l),te=!1,ne,X=0;try{s._OrtGetTensorData(Q,V,V+l,V+2*l,V+3*l)!==0&&pe(`Can't access output tensor data on index ${U}.`);let ge=l===4?"i32":"i64",M=Number(s.getValue(V,ge));X=s.getValue(V+l,"*");let q=s.getValue(V+l*2,"*"),le=Number(s.getValue(V+l*3,ge)),ue=[];for(let _e=0;_e<le;_e++)ue.push(Number(s.getValue(q+_e*l,ge)));s._OrtFree(q)!==0&&pe("Can't free memory for tensor dims.");let ke=ue.reduce((_e,me)=>_e*me,1);ne=vt(M);let Xe=m?.outputPreferredLocations[i[U]];if(ne==="string"){if(Xe==="gpu-buffer"||Xe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let me=0;me<ke;me++){let it=s.getValue(X+me*l,"*"),Nt=s.getValue(X+(me+1)*l,"*"),Wr=me===ke-1?void 0:Nt-it;_e.push(s.UTF8ToString(it,Wr))}ee.push([ne,ue,_e,"cpu"])}else if(Xe==="gpu-buffer"&&ke>0){let _e=s.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let me=_e(X),it=Rt(M,ke);if(it===void 0||!Ta(ne))throw new Error(`Unsupported data type: ${ne}`);te=!0,ee.push([ne,ue,{gpuBuffer:me,download:s.jsepCreateDownloader(me,it,ne),dispose:()=>{s._OrtReleaseTensor(Q)!==0&&pe("Can't release tensor.")}},"gpu-buffer"])}else if(Xe==="ml-tensor"&&ke>0){let _e=s.jsepEnsureTensor;if(!_e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Rt(M,ke)===void 0||!Ia(ne))throw new Error(`Unsupported data type: ${ne}`);let me=await _e(X,M,ue,!1);te=!0,ee.push([ne,ue,{mlTensor:me,download:s.jsepCreateMLTensorDownloader(X,ne),dispose:()=>{s.jsepReleaseTensorId(X),s._OrtReleaseTensor(Q)}},"ml-tensor"])}else{let _e=Sa(ne),me=new _e(ke);new Uint8Array(me.buffer,me.byteOffset,me.byteLength).set(s.HEAPU8.subarray(X,X+me.byteLength)),ee.push([ne,ue,me,"cpu"])}}finally{s.stackRestore(ae),ne==="string"&&X&&s._free(X),te||s._OrtReleaseTensor(Q)}}return m&&!_&&(s._OrtClearBoundOutputs(m.handle)!==0&&pe("Can't clear bound outputs."),dt.set(e,[p,f,u,m,_,!1])),ee}finally{s.stackRestore(C),k.forEach(L=>s._OrtReleaseTensor(L)),S.forEach(L=>s._OrtReleaseTensor(L)),I.forEach(L=>s._free(L)),v!==0&&s._OrtReleaseRunOptions(v),$.forEach(L=>s._free(L))}},Fa=e=>{let t=Se(),r=dt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&pe("Can't get an profile file name."),t._OrtFree(a)},ja=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),pt,Me,At,Kt,Qt,Er,ia,Cr,bt,$t,Hl,yc,_c,bc,$c,wc,vc,xc,kc=N(()=>{He(),gc(),Tt(),va(),pt=()=>!!ye.wasm.proxy&&typeof document<"u",At=!1,Kt=!1,Qt=!1,Cr=new Map,bt=(e,t)=>{let r=Cr.get(e);r?r.push(t):Cr.set(e,[t])},$t=()=>{if(At||!Kt||Qt||!Me)throw new Error("worker not ready")},Hl=e=>{switch(e.data.type){case"init-wasm":At=!1,e.data.err?(Qt=!0,ia[1](e.data.err)):(Kt=!0,ia[0]()),Er&&(URL.revokeObjectURL(Er),Er=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Cr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},yc=async()=>{if(!Kt){if(At)throw new Error("multiple calls to 'initWasm()' detected.");if(Qt)throw new Error("previous call to 'initWasm()' failed.");if(At=!0,pt())return new Promise((e,t)=>{Me?.terminate(),yd().then(([r,i])=>{try{Me=i,Me.onerror=n=>t(n),Me.onmessage=Hl,ia=[e,t];let a={type:"init-wasm",in:ye};!a.in.wasm.wasmPaths&&(r||import.meta.url?.startsWith("file:"))&&(a.in.wasm.wasmPaths={wasm:new URL("/chitra/assets/ort-wasm-simd-threaded.jsep-Y7jqkEt_.wasm",import.meta.url).href}),Me.postMessage(a),Er=r}catch(a){t(a)}},t)});try{await xa(ye.wasm),await qa(ye),Kt=!0}catch(e){throw Qt=!0,e}finally{At=!1}}},_c=async e=>{if(pt())return $t(),new Promise((t,r)=>{bt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ye}};Me.postMessage(i)});await Va(ye,e)},bc=async e=>pt()?($t(),new Promise((t,r)=>{bt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Me.postMessage(i,[e.buffer])})):Ur(e),$c=async(e,t)=>{if(pt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return $t(),new Promise((r,i)=>{bt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Me.postMessage(a,n)})}else return La(e,t)},wc=async e=>{if(pt())return $t(),new Promise((t,r)=>{bt("release",[t,r]);let i={type:"release",in:e};Me.postMessage(i)});Ha(e)},vc=async(e,t,r,i,a,n)=>{if(pt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return $t(),new Promise((s,l)=>{bt("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:n}};Me.postMessage(p,ja(d))})}else return Ga(e,t,r,i,a,n)},xc=async e=>{if(pt())return $t(),new Promise((t,r)=>{bt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Me.postMessage(i)});Fa(e)}}),aa,Gl,Sc,dg=N(()=>{He(),kc(),J(),wa(),wd(),aa=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Gl=e=>{switch(e[3]){case"cpu":return new Ye(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ta(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Ye.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ia(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Ye.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Sc=class{async fetchModelAndCopyToWasmMemory(e){return bc(await Ea(e))}async loadModel(e,t){Ze();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await $c(r,t),Le()}async dispose(){return wc(this.sessionId)}async run(e,t,r){Ze();let i=[],a=[];Object.entries(e).forEach(u=>{let m=u[0],_=u[1],b=this.inputNames.indexOf(m);if(b===-1)throw new Error(`invalid input '${m}'`);i.push(_),a.push(b)});let n=[],s=[];Object.entries(t).forEach(u=>{let m=u[0],_=u[1],b=this.outputNames.indexOf(m);if(b===-1)throw new Error(`invalid output '${m}'`);n.push(_),s.push(b)});let l=i.map((u,m)=>aa(u,()=>`input "${this.inputNames[a[m]]}"`)),d=n.map((u,m)=>u?aa(u,()=>`output "${this.outputNames[s[m]]}"`):null),p=await vc(this.sessionId,a,l,s,d,r),f={};for(let u=0;u<p.length;u++)f[this.outputNames[s[u]]]=n[u]??Gl(p[u]);return Le(),f}startProfiling(){}endProfiling(){xc(this.sessionId)}}}),Tc={};ir(Tc,{OnnxruntimeWebAssemblyBackend:()=>_a,initializeFlags:()=>ya,wasmBackend:()=>Ic});var ya,_a,Ic,pg=N(()=>{He(),kc(),dg(),ya=()=>{if((typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0),ye.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let e=typeof navigator>"u"?Yf("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},_a=class{async init(e){ya(),await yc(),await _c(e)}async createInferenceSessionHandler(e,t){let r=new Sc;return await r.loadModel(e,t),Promise.resolve(r)}},Ic=new _a});He();He();He();var hg="1.21.0-dev.20250206-d981b153d3",cg=pd;{let e=(pg(),Or(Tc)).wasmBackend;Ot("webgpu",e,5),Ot("webnn",e,5),Ot("cpu",e,10),Ot("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:hg,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */export{dd as InferenceSession,Rr as TRACE,Ze as TRACE_FUNC_BEGIN,Le as TRACE_FUNC_END,Ye as Tensor,cg as default,ye as env,Ot as registerBackend};
