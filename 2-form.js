import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const a="feedback-form-state",o=document.querySelector(".feedback-form"),m=document.querySelector(".email"),l=document.querySelector(".message");function r(){localStorage.setItem(a,JSON.stringify(e))}function n(t){e[t.target.name]=t.target.value,r()}function s(){const t=localStorage.getItem(a);t&&(e=JSON.parse(t),m.value=e.email||"",l.value=e.message||"")}function i(t){if(t.preventDefault(),e.email=m.value.trim(),e.message=l.value.trim(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Submitted form data:",e),localStorage.removeItem(a),e={email:"",message:""},o.reset()}o.addEventListener("input",n);o.addEventListener("submit",i);document.addEventListener("DOMContentLoaded",s);
//# sourceMappingURL=2-form.js.map