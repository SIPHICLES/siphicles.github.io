function handleNavbarScroll(){const header=document.querySelector(".navbar");window.onscroll=function(){const top=window.scrollY;if(top>=100){header.classList.add("navbarDark")}else{header.classList.remove("navbarDark")}}}
const nav=document.querySelector(".navbarScroll");function toggleNav(){const s=window.scrollY>40;nav.classList.toggle("scrolled",s);nav.classList.toggle("navbar-dark",s);nav.classList.toggle("navbar-light",!s);nav.classList.toggle("navbarDark",s)}
window.addEventListener("load",toggleNav);window.addEventListener("scroll",toggleNav);function handleNavbarCollapse(){const navLinks=document.querySelectorAll(".nav-item");const menuToggle=document.getElementById("navbarSupportedContent");navLinks.forEach((link)=>{link.addEventListener("click",()=>{new bootstrap.Collapse(menuToggle).toggle()})})}
function createSkillsFromJSON(){const container=document.querySelector("#skills .container");let row=document.createElement("div");row.classList.add("row");fetch("data/skills.json").then((response)=>response.json()).then((data)=>{data.forEach((item,index)=>{const card=document.createElement("div");card.classList.add("col-lg-4","mt-4");card.innerHTML=`
                    <div class="card skillsText">
                        <div class="card-body">
                            <img class="card-img-skill" src="images/${item.image}" style="width:100%" alt="img_${item.title}">
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;row.appendChild(card);if((index+1)%3===0||index===data.length-1){container.appendChild(row);row=document.createElement("div");row.classList.add("row")}})})}
function createProjectFromJSON(){const container=document.querySelector("#project .container");let row=document.createElement("div");row.classList.add("row");fetch("data/project.json").then((response)=>response.json()).then((data)=>{data.forEach((item,index)=>{const card=document.createElement("div");card.classList.add("col-lg-4","mt-4");card.innerHTML=`
                    <div class="card projectText">
                        <div class="card-body">
                            <img class="card-img-projet" src="images/${item.image}" style="width:100%" alt="img_${item.title}">
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;row.appendChild(card);if((index+1)%3===0||index===data.length-1){container.appendChild(row);row=document.createElement("div");row.classList.add("row")}})})}
handleNavbarScroll();handleNavbarCollapse();createSkillsFromJSON();createProjectFromJSON();document.addEventListener("DOMContentLoaded",()=>{const form=document.querySelector('form[data-cy="form-contact"]');const status=document.getElementById("form-status");const btn=document.getElementById("button_envoie");if(!form)return;const ENDPOINT="https://formspree.io/f/xpwyndnk";form.addEventListener("submit",async(e)=>{e.preventDefault();const hp=form.querySelector('input[name="website"]');if(hp&&hp.value){status?.classList.remove("sr-only");status.textContent="Merci, votre message a été envoyé ✅";form.reset();return}
btn?.setAttribute("disabled","true");if(status){status.classList.remove("sr-only");status.textContent="Envoi en cours…"}
try{const res=await fetch(ENDPOINT,{method:"POST",body:new FormData(form),headers:{Accept:"application/json"},});if(res.ok){status.textContent="Merci, votre message a été envoyé ✅";form.reset()}else{const data=await res.json().catch(()=>null);status.textContent=(data&&data.errors?.[0]?.message)||"Erreur lors de l’envoi."}}catch{status.textContent="Erreur réseau. Réessayez plus tard."}finally{btn?.removeAttribute("disabled")}})});document.addEventListener("DOMContentLoaded",()=>{const modal=document.getElementById("exp-modal");const content=document.getElementById("exp-modal-content");const closeBtn=modal.querySelector(".modal-close");let lastFocused=null;document.querySelectorAll(".exp-trigger").forEach((btn)=>{btn.addEventListener("click",()=>{const sel=btn.getAttribute("data-template");const tpl=document.querySelector(sel);if(!tpl)return;content.innerHTML="";content.appendChild(tpl.content.cloneNode(!0));lastFocused=document.activeElement;modal.showModal();closeBtn.focus()})});closeBtn.addEventListener("click",()=>modal.close());modal.addEventListener("click",(e)=>{if(e.target===modal)modal.close();});modal.addEventListener("close",()=>{content.innerHTML="";if(lastFocused)lastFocused.focus();})})
