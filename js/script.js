/* ===== EDIT HERE ===== */
const CONTACT_EMAIL = "nandhinidhakshanapt2004@gmail.com";         // set to enable the mail-app handoff; no backend is configured
const mainNav = ["home","about","education","skills","contact"];   // shown in the header row, in this order
const nav = [["home","Home",'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>'],
  ["about","About Me",'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'],
  ["education","Education",'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>'],
  ["skills","Skills",'<path d="M3 12h4l3-8 4 16 3-8h4"/>'],
  ["work","Professional Experience",'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>'],
  ["experience","Clinical Internships & Training Postings",'<path d="M4 21V7l8-4 8 4v14"/><path d="M12 8v6M9 11h6M9 21v-3h6v3"/>'],
  ["specializations","Areas of Specialization",'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'],
  ["techniques","Treatment Techniques",'<circle cx="12" cy="12" r="4"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>'],
  ["equipment","Equipment & Tools",'<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>'],
  ["achievements","Clinical Achievements",'<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 21l5-3 5 3-1.5-7"/>'],
  ["contact","Contact",'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>']];
const about = [["Professional introduction","Briefly introduce yourself and your professional focus."],["Interest in physiotherapy","Describe what drew you to physiotherapy and rehabilitation."],["Treatment philosophy","Patient-centered care that respects each person's goals and pace."],["Commitment","Supporting mobility, functional independence, and recovery."],["Goals","Add your personal and professional goals."]];
const job = {place:"Emerging Fit Physiotherapy & Rehab Center",city:"Chennai",role:"Physiotherapist",years:"3 Years of Experience",
  stats:[[95,"Assessment accuracy"],[90,"Exercise-programme adherence"],[85,"Cases with improved function"],[98,"Documentation accuracy"]],
  points:["Provided **physiotherapy treatment and rehabilitation**, supporting improvements in patient mobility and functional recovery.",
    "Conducted **patient assessments**, including ROM, muscle strength, and posture evaluation, with 95% assessment accuracy.",
    "Developed **individualized treatment plans**, achieving 90% patient adherence to prescribed exercise programs.",
    "Delivered **therapeutic exercises, muscle strengthening, and mobility training** to support patient recovery.",
    "Monitored **patient progress**, contributing to improved functional outcomes in 85% of monitored cases.",
    "Educated patients on **posture correction, injury prevention, and home exercise programs**, achieving 90% patient education compliance.",
    "Maintained **patient records** with 98% documentation accuracy and followed clinical care standards."]};
const edu = [["Bachelor of Physiotherapy (BPT)","Mohamed Sathak A.J. College of Physiotherapy","🎓"],["School Education","Dr. Natarajan Matriculation High School, Nemili, Ranipet District","🏫"]];
const exp = [["Gericare Hospital","Chennai","images/hospitals/gericare-hospital.jpg"],["Prasanth Super Speciality Hospital","Chennai","images/hospitals/prasanth-super-speciality-hospital.jpg"],["Venkateshwara Multi-speciality Hospital","Chennai","images/hospitals/venkateshwara-multi-speciality-hospital.jpg"]];
const intern = [["St. Thomas Hospital","Defence Colony, Chennai","images/hospitals/st-thomas-hospital.jpg"],["SIMS Multi Speciality Hospital","Chennai","images/hospitals/sims-multi-speciality-hospital.jpg"],["Vijaya Hospital","Chennai","images/hospitals/vijaya-hospital.jpg"],["BRS Hospital","Chennai","images/hospitals/brs-hospital.jpg","logo"],["Kidscare Rehab Center and Physiotherapy","Chennai","images/hospitals/kidscare-rehab-center-and-physiotherapy.jpg","logo"],["Synergy Health Care and Wellness Clinic","Chennai","images/hospitals/synergy-health-care-and-wellness-clinic.png","logo"]];
const skills = [["🦴","Musculoskeletal Assessment","Structured evaluation of muscles, joints, and movement."],["📐","Range of Motion Assessment","Measuring joint movement to guide care."],["💪","Muscle Strength Assessment","Grading strength to plan progression."],["🚶","Posture and Gait Analysis","Observing alignment and walking patterns."],["📋","Therapeutic Exercise Planning","Building exercise programs around goals."],["🧍","Mobility and Functional Training","Practicing everyday movements safely."],["🗣️","Patient Education","Explaining conditions, exercises, and self-care."],["🗂️","Rehabilitation Planning","Setting stages and goals for recovery."],["📝","Clinical Documentation","Clear, accurate records of care."],["💬","Patient Communication","Listening well and explaining clearly."]];
const spec = [["🦴","Orthopedic Physiotherapy","Musculoskeletal rehabilitation and movement improvement."],["🧠","Neurological Physiotherapy","Functional mobility, balance, and movement training."],["🏃","Sports Physiotherapy","Injury rehabilitation and return-to-activity support."],["🧓","Geriatric Physiotherapy","Mobility, balance, and functional independence for older adults."],["🧒","Pediatric Physiotherapy","Age-appropriate movement and developmental support."],["🫁","Cardiopulmonary Physiotherapy","Breathing exercises, endurance, and functional rehabilitation."]];
const tech = [["🏋️","Therapeutic Exercises","Targeted movements that restore function."],["🔄","Range of Motion Exercises","Gentle movement to maintain or improve joint motion."],["💪","Strengthening Exercises","Progressive loading to build muscle support."],["🤸","Stretching and Flexibility Training","Lengthening tissues to ease tightness."],["⚖️","Balance and Coordination Training","Challenges that improve stability."],["🚶","Gait Training","Practice for safer, more efficient walking."],["🧍","Posture Correction","Awareness and exercises for better alignment."],["🤲","Manual Therapy","Hands-on techniques, chosen after assessment."],["🌬️","Breathing Exercises","Techniques that support lung function and endurance."],["🪑","Functional Mobility Training","Transfers, standing, and daily-task practice."]];
const equip = [["Resistance Bands",'<rect x="2" y="7" width="3" height="10" rx="1.5"/><rect x="19" y="7" width="3" height="10" rx="1.5"/><path d="M5 9c4-3 10-3 14 0M5 15c4 3 10 3 14 0"/>',"Elastic bands of varying tension.","Progressive strengthening"],
  ["Therapy Exercise Ball",'<circle cx="12" cy="12" r="9"/><path d="M3.6 9.5c5 2 11.8 2 16.8 0M5 17c4-1.5 10-1.5 14 0"/>',"Large inflatable stability ball.","Core control, balance"],
  ["Foam Roller",'<ellipse cx="5.5" cy="12" rx="2.5" ry="5"/><path d="M5.5 7h13a2.5 5 0 0 1 0 10h-13"/><path d="M10 7.2v9.6M14.5 7.2v9.6"/>',"Cylindrical foam tube.","Myofascial release, mobility"],
  ["Dumbbells and Ankle Weights",'<path d="M6 7v10M18 7v10M3 9.5v5M21 9.5v5M6 12h12"/>',"Light, adjustable weights.","Resistance training"],
  ["Parallel Bars",'<path d="M2 8h20M2 13h20M5 8v12M19 8v12"/>',"Two sturdy rails at waist height.","Standing and gait training"],
  ["Walking Aid / Walker",'<path d="M7 4h10M7 4v16M17 4v16M7 11h10M5 20h4M15 20h4"/>',"Frame or cane for support.","Safe mobility, weight bearing"],
  ["Goniometer",'<path d="M12 18L4.5 8.5M12 18l7.5-9.5"/><path d="M6.8 11.5a7.5 7.5 0 0 1 10.4 0"/><circle cx="12" cy="18" r="1.6"/>',"Instrument with two arms and a scale.","Measuring joint range of motion"],
  ["Handheld Dynamometer",'<circle cx="12" cy="13.5" r="7"/><path d="M12 13.5l3.2-3.2M12 6.5V3.5M9.5 3.5h5"/>',"Portable force-measuring device.","Objective muscle strength testing"],
  ["TENS / Electrotherapy Unit",'<rect x="4" y="3" width="12" height="18" rx="2.5"/><path d="M11 7l-3 5h4l-3 5"/><path d="M16 9h3a2 2 0 0 1 2 2v6"/>',"Device delivering low-level electrical stimulation.","Pain management, muscle stimulation"],
  ["Ultrasound Therapy Equipment",'<path d="M4 20l6-6"/><rect x="9.5" y="6.5" width="6" height="9" rx="2" transform="rotate(45 12.5 11)"/><path d="M17.5 3.8a5 5 0 0 1 2.7 2.7M17 1.5a8 8 0 0 1 5.5 5.5"/>',"Applicator producing sound waves.","Soft-tissue therapy"],
  ["Balance Board",'<path d="M3 12h18"/><path d="M7 12a5 5 0 0 0 10 0"/><path d="M5 9l2-2M19 9l-2-2"/>',"Unstable standing platform.","Balance and proprioception"],
  ["Exercise Mat",'<path d="M4 18h12a4 4 0 0 0 0-8H8a3 3 0 0 0 0 6h7"/><path d="M4 18V9"/>',"Cushioned floor mat.","Floor exercises, stretching"],
  ["Shoulder Wheel",'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.5"/><path d="M12 4v6.5M12 13.5V20M4 12h6.5M13.5 12H20M17.7 6.3l2.3-2.3"/>',"Wall-mounted wheel with a handle.","Shoulder range of motion"],
  ["Cervical Traction Equipment",'<path d="M3 18h18M5 18v-4h14v4"/><circle cx="7.5" cy="10.5" r="2"/><path d="M9.5 10.5H17l3-4"/>',"Device applying gentle neck traction.","Neck rehabilitation"]].map(e=>({name:e[0],icon:e[1],d:e[2],use:e[3]}));
const ach = ["Clinical Learning Milestones","Professional Achievements","Academic Achievements","Rehabilitation Training Accomplishments"];
/* ===================== */

const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function Card({title,body,extra,img,cls}){return `<article class="card">${img?`<div class="tile ${cls||""}"${cls==="logo"?` style="background:#fff;height:150px"`:""}><img src="${esc(img)}" alt="${esc(title)}" loading="lazy"${cls==="logo"?` style="width:auto;max-width:100%;height:130px;object-fit:contain;padding:0"`:""}></div>`:""}<h3>${esc(title)}</h3>${body?`<p>${esc(body)}</p>`:""}${extra?`<p style="margin-top:8px;color:var(--p)"><strong>Common use:</strong> ${esc(extra)}</p>`:""}</article>`}
const put=(id,arr)=>$(id).innerHTML=arr.join("");
put("quick",mainNav.map(i=>`<li><a href="#${i}">${esc(nav.find(n=>n[0]===i)[1])}</a></li>`));
put("links",nav.map(([i,l,ico],n)=>`<li class="${mainNav.includes(i)?"main":""}" style="--i:${n}"><a href="#${i}"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24">${ico}</svg></span>${esc(l)}</a></li>`));
put("edu",edu.map((e,i)=>`<article class="card edu-item" style="--i:${i}"><span class="edu-ico" aria-hidden="true">${e[2]}</span><h3>${esc(e[0])}</h3><p class="school"><span>${esc(e[1])}</span></p></article>`));
$("job").innerHTML=`<article class="card job"><div class="job-head"><span class="job-ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg></span>
<div><h3>${esc(job.place)}</h3><p class="job-meta"><span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>${esc(job.role)}</span>
<span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>${esc(job.city)}</span></p></div>
<span class="job-dur">${esc(job.years)}</span></div>
<div class="job-stats">${job.stats.map(([v,l],i)=>`<div class="stat" style="--i:${i}"><p class="stat-num"><b data-to="${v}">${v}</b>%</p><small>${esc(l)}</small><span class="bar"><i style="--v:${v}%"></i></span></div>`).join("")}</div>
<ul class="job-list">${job.points.map((p,i)=>`<li style="--i:${i}"><span class="tick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><span>${esc(p).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}</span></li>`).join("")}</ul></article>`;
put("hosp",[...exp,...intern].map(([name,place,img,cls])=>`<article class="card hosp-card"><div class="tile ${cls||""}"><img src="${esc(img)}" alt="${esc(name)}" loading="lazy"></div><h3>${esc(name)}</h3><p class="loc"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>${esc(place)}</p></article>`));
put("skill-cards",skills.map(s=>Card({icon:s[0],title:s[1],body:s[2]})));
put("spec",spec.map(s=>Card({icon:s[0],title:s[1],body:s[2]})));
put("tech",tech.map(s=>Card({icon:s[0],title:s[1],body:s[2]})));
const eqCard=(e,dup)=>`<div class="eq"${dup?' aria-hidden="true"':""}><span class="eq-ico" aria-hidden="true"><svg viewBox="0 0 24 24">${e.icon}</svg></span><h3>${esc(e.name)}</h3><p>${esc(e.d)}</p><span class="eq-use">${esc(e.use)}</span></div>`;
put("equip",[equip.slice(0,7),equip.slice(7)].map(row=>`<div class="mq-row"><div class="mq-track">${row.map(e=>eqCard(e)).join("")}${row.map(e=>eqCard(e,1)).join("")}</div></div>`));
put("ach",ach.map(t=>Card({title:t,body:"Details to be added.",ph:1})));
$("yr").textContent=new Date().getFullYear();

const menu=$("menu"),bg=$("burger"),scrim=$("scrim");
const setMenu=(open,focus)=>{menu.classList.toggle("open",open);scrim.classList.toggle("show",open);bg.setAttribute("aria-expanded",open);bg.setAttribute("aria-label",open?"Close menu":"Open menu");
if(open&&focus)[...menu.querySelectorAll("a")].find(a=>a.offsetParent)?.focus({preventScroll:true})};
bg.onclick=e=>setMenu(!menu.classList.contains("open"),e.detail===0); // e.detail 0 = opened from the keyboard
scrim.onclick=()=>setMenu(false);
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menu.classList.contains("open")){setMenu(false);bg.focus()}});
const ls=[...document.querySelectorAll("#links a,.quick a")];
const mark=id=>ls.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id));mark("home");
addEventListener("scroll",()=>{const d=document.documentElement;if(d.scrollTop+d.clientHeight>=d.scrollHeight-4)mark("contact")},{passive:true});
if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)mark(en.target.id)}),{rootMargin:"-40% 0px -55% 0px"});document.querySelectorAll("main section").forEach(s=>io.observe(s))}


$("cf").addEventListener("submit",ev=>{ev.preventDefault();
const f=ev.target,v={n:f.name.value.trim(),e:f.email.value.trim(),s:f.subject.value.trim(),m:f.message.value.trim()};
const er={n:v.n?"":"Enter your name.",e:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.e)?"":"Enter a valid email address.",s:v.s?"":"Enter a subject.",m:v.m.length>=10?"":"Write a message of at least 10 characters."};
let bad=false;for(const k in er){$("e-"+k).textContent=er[k];$(k).setAttribute("aria-invalid",!!er[k]);if(er[k])bad=true}
const st=$("status");st.className="show";
if(bad){st.style.background="var(--errbg)";st.textContent="Please fix the highlighted fields and try again.";return}
if(!CONTACT_EMAIL){st.style.background="var(--errbg)";st.textContent="This form isn't connected to a backend yet, so your message was not sent. Please use the email shown above.";return}
st.style.background="";st.textContent="Opening your email app with this message. Press send there to deliver it.";
location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(v.s)}&body=${encodeURIComponent(v.m+"\n\n— "+v.n+" ("+v.e+")")}`;
});

/* scroll animations */
document.documentElement.classList.add("js");
(function(){const els=[...document.querySelectorAll("main section:not(.hero) h2, main section:not(.hero):not(#education) .card, .note, .lead, .marquee")];
els.forEach(el=>{el.classList.add("rv");const sib=[...el.parentNode.children].filter(c=>c.classList.contains("rv")||c.classList.contains("card"));el.style.setProperty("--d",Math.min(sib.indexOf(el),6)*0.08+"s")});
if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("in"));return}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}}),{threshold:.12});
els.forEach(e=>io.observe(e))})();
document.querySelectorAll(".hosp-card").forEach((c,i)=>c.style.setProperty("--d",(i%3)*0.14+"s"));

/* education: reveal school names when the Education link is clicked (or the section is scrolled into view) */
(function(){const tl=$("edu");let busy=false;
const play=()=>{tl.classList.remove("play");void tl.offsetWidth;tl.classList.add("play")};
const whenScrollStops=cb=>{let t,done=false;const go=()=>{if(done)return;done=true;clearTimeout(t);removeEventListener("scroll",onScroll);removeEventListener("scrollend",go);cb()};const arm=ms=>{clearTimeout(t);t=setTimeout(go,ms)};const onScroll=()=>arm(150);addEventListener("scroll",onScroll,{passive:true});addEventListener("scrollend",go);arm(300)};
document.addEventListener("click",e=>{if(!e.target.closest('a[href="#education"]'))return;
busy=true;tl.classList.remove("play");whenScrollStops(()=>{busy=false;play()})});
if(!("IntersectionObserver" in window)){tl.classList.add("play");return}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&!busy){if(!tl.classList.contains("play"))play();io.disconnect()}}),{threshold:.25});
io.observe(tl)})();

/* experience stats count up from 0 when the card comes into view */
(function(){const nums=[...document.querySelectorAll(".stat b[data-to]")];if(!nums.length)return;
if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
nums.forEach(n=>n.textContent="0");
const run=()=>{const t0=performance.now();(function f(now){const k=Math.min((now-t0)/1400,1),e=1-Math.pow(1-k,3);
nums.forEach(n=>n.textContent=Math.round(+n.dataset.to*e));if(k<1)requestAnimationFrame(f)})(t0)};
const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){io.disconnect();setTimeout(run,300)}},{threshold:.3});io.observe(document.querySelector(".job"))})();

/* equipment rows: glide right to left on their own; drag (mouse) or swipe (touch) to move them either way */
(function(){const still=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll(".mq-row").forEach((row,ri)=>{const track=row.querySelector(".mq-track");
let x=0,v=0,loop=0,drag=null,hover=false,on=false,last=0,raf=0;
const speed=ri?27:33;                                             // px per second, second row a little slower
const measure=()=>{const dup=track.querySelector('.eq[aria-hidden="true"]');loop=dup?dup.offsetLeft:0};  // first repeated card = one full loop
const wrap=()=>{if(loop){x%=loop;if(x>0)x-=loop}};
const paint=()=>{wrap();track.style.transform=`translate3d(${x}px,0,0)`};
const frame=now=>{const dt=Math.min((now-last)/1000,.05);last=now;
  if(!drag){if(Math.abs(v)>8){x+=v*dt;v*=Math.pow(.04,dt)}else{v=0;if(!hover&&!still)x-=speed*dt}}
  paint();raf=requestAnimationFrame(frame)};
const run=want=>{if(want===on)return;on=want;if(on){last=performance.now();raf=requestAnimationFrame(frame)}else cancelAnimationFrame(raf)};
measure();if(ri)x=-loop*.4;paint();addEventListener("resize",()=>{measure();paint()});
if("IntersectionObserver" in window)new IntersectionObserver(es=>run(es[0].isIntersecting)).observe(row);else run(true);
document.addEventListener("visibilitychange",()=>{if(document.hidden)run(false)});
row.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse")hover=true});
row.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse")hover=false});
row.addEventListener("pointerdown",e=>{if(e.button)return;drag={x:e.clientX,t:performance.now(),id:e.pointerId,moved:false};v=0});
row.addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-drag.x,now=performance.now();
  if(!drag.moved){if(Math.abs(dx)<5)return;drag.moved=true;row.setPointerCapture(drag.id);row.classList.add("dragging")}
  x+=dx;v=.8*v+.2*(dx/Math.max((now-drag.t)/1000,.008));drag.x=e.clientX;drag.t=now;if(!on)paint()});
const end=()=>{if(!drag)return;if(performance.now()-drag.t>90)v=0;v=Math.max(-2500,Math.min(2500,v));drag=null;row.classList.remove("dragging")};
row.addEventListener("pointerup",end);row.addEventListener("pointercancel",end);
row.addEventListener("dragstart",e=>e.preventDefault())})})();

/* dark mode switch: on = dark, off = normal; the choice is remembered on this device */
(function(){const t=$("themeToggle"),root=document.documentElement;
const set=(dark,anim)=>{if(anim){root.classList.add("theme-anim");setTimeout(()=>root.classList.remove("theme-anim"),500)}
if(dark)root.dataset.theme="dark";else delete root.dataset.theme;t.setAttribute("aria-checked",dark);
try{localStorage.setItem("theme",dark?"dark":"light")}catch(e){}};
set(root.dataset.theme==="dark");t.onclick=()=>set(t.getAttribute("aria-checked")!=="true",true)})();

/* theme customization: presets, color pickers and a live preview; Apply keeps it for this visit, Save keeps it on this device */
(function(){const root=document.documentElement,panel=$("themePanel"),scrim=$("tpScrim"),opener=$("openTheme"),toggle=$("themeToggle");
const FIELDS=[["primary","Primary"],["secondary","Secondary"],["bg","Background"],["card","Cards & containers"],["text","Text"],["button","Buttons & accents"]];
const DEFAULT={primary:"#0B7D71",secondary:"#3CC2AE",bg:"#F7FBFB",card:"#FFFFFF",text:"#0F2A33",button:"#0B7D71"};
const PRESETS=[["Teal (default)",DEFAULT],
  ["Purple & Black",{primary:"#A78BFA",secondary:"#7C3AED",bg:"#0B0A10",card:"#16141F",text:"#EDE9FE",button:"#8B5CF6"}],
  ["Blue & White",{primary:"#1D4ED8",secondary:"#60A5FA",bg:"#F5F8FF",card:"#FFFFFF",text:"#0F172A",button:"#2563EB"}],
  ["Green & Black",{primary:"#34D399",secondary:"#10B981",bg:"#090E0B",card:"#121A15",text:"#E7F5EE",button:"#22C55E"}],
  ["Pink & Black",{primary:"#F472B6",secondary:"#EC4899",bg:"#0E0A0D",card:"#1B1219",text:"#FCE7F3",button:"#DB2777"}],
  ["Orange & White",{primary:"#C2410C",secondary:"#FB923C",bg:"#FFF8F2",card:"#FFFFFF",text:"#1C1917",button:"#EA580C"}]];
const rgbOf=h=>{h=h.replace("#","");if(h.length===3)h=[...h].map(c=>c+c).join("");const n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255]};
const hexOf=a=>"#"+a.map(v=>Math.round(Math.max(0,Math.min(255,v))).toString(16).padStart(2,"0")).join("");
const mix=(a,b,t)=>{const x=rgbOf(a),y=rgbOf(b);return hexOf(x.map((v,i)=>v+(y[i]-v)*t))};
const lum=h=>{const c=rgbOf(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const ratio=(a,b)=>{const x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
// nudge a color toward black or white until it reads well on every given background
const readable=(fg,bgs,min)=>{const worst=c=>Math.min(...bgs.map(b=>ratio(c,b)));if(worst(fg)>=min)return fg;
  const to=lum(bgs[0])>.35?"#000000":"#ffffff";for(let k=1;k<=10;k++){const c=mix(fg,to,k/10);if(worst(c)>=min)return c}return to};
const onColor=h=>ratio("#ffffff",h)>=ratio("#111111",h)?"#ffffff":"#111111";
const derive=c=>{const dark=lum(c.bg)<.2,tx=readable(c.text,[c.bg,c.card],7),p=readable(c.primary,[c.card,c.bg],3.2),rgb=h=>rgbOf(h).join(",");
  const vars={"--p":p,"--t":c.secondary,"--bg":c.bg,"--card":c.card,"--tx":tx,"--tx2":readable(mix(tx,c.bg,.3),[c.bg,c.card],4.6),
    "--sec":mix(c.bg,tx,.045),"--mint":mix(c.card,p,dark?.2:.13),"--bd":mix(c.card,tx,dark?.16:.13),"--errbg":dark?"#3a2222":"#fdecea",
    "--p-rgb":rgb(p),"--t-rgb":rgb(c.secondary),"--p-tx":onColor(p),"--btn":c.button,"--btn-hi":mix(c.button,"#ffffff",.18),"--btn-lo":mix(c.button,"#000000",.2),
    "--btn-tx":onColor(c.button),"--btn-rgb":rgb(c.button),"--header-bg":`rgba(${rgb(c.bg)},.86)`,
    "--hero1":mix(c.bg,p,.05),"--hero2":mix(c.bg,p,.13),"--hero3":mix(c.bg,c.secondary,.12),
    "--gloss":dark?"linear-gradient(172deg,rgba(255,255,255,.085) 0%,rgba(255,255,255,.035) 40%,rgba(255,255,255,0) 62%,rgba(255,255,255,.03) 100%)"
                  :"linear-gradient(172deg,rgba(255,255,255,.9) 0%,rgba(255,255,255,.55) 40%,rgba(255,255,255,.2) 62%,rgba(255,255,255,.6) 100%)",
    "--gloss-edge":dark?"inset 0 1px 0 rgba(255,255,255,.09),inset 0 -1px 0 rgba(0,0,0,.3)":"inset 0 1px 0 rgba(255,255,255,.95),inset 0 -1px 0 rgba(0,0,0,.05)",
    "--sheen":dark?"rgba(255,255,255,.12)":"rgba(255,255,255,.65)"};
  return{vars,scheme:dark?"dark":"light",adjusted:tx.toLowerCase()!==c.text.toLowerCase()||p.toLowerCase()!==c.primary.toLowerCase()}};
let applied=null,draft=null,isOpen=false;
const paint=c=>{const d=derive(c);if(root.dataset.theme)delete root.dataset.theme;root.dataset.custom="";for(const k in d.vars)root.style.setProperty(k,d.vars[k]);root.style.colorScheme=d.scheme;toggle.setAttribute("aria-checked","false");return d};
const unpaint=()=>{delete root.dataset.custom;root.removeAttribute("style")};
const stored=()=>{try{return JSON.parse(localStorage.getItem("customTheme")||"null")}catch(e){return null}};
const st=stored();if(st&&st.colors)applied=st.colors;   // the head script already painted it
const toast=msg=>{const el=$("tpToast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("show"),2200)};
const same=(a,b)=>FIELDS.every(([k])=>a[k].toLowerCase()===b[k].toLowerCase());
const render=()=>{$("tpPresets").innerHTML=PRESETS.map(([n,c],i)=>`<button type="button" class="tp-preset" data-i="${i}" aria-pressed="${same(c,draft)}"><span class="sw">${[c.bg,c.card,c.primary,c.button].map(x=>`<i style="background:${x}"></i>`).join("")}</span>${n}</button>`).join("");
  $("tpColors").innerHTML=FIELDS.map(([k,l])=>`<div class="tp-row"><label for="tc-${k}">${l}</label><code id="tv-${k}">${draft[k].toUpperCase()}</code><input type="color" id="tc-${k}" data-k="${k}" value="${draft[k].toLowerCase()}"></div>`).join("")};
const preview=()=>{const d=paint(draft);$("tpNote").textContent=d.adjusted?"Some text or accent colors were adjusted slightly so they stay readable.":"";
  $("tpPresets").querySelectorAll(".tp-preset").forEach(b=>b.setAttribute("aria-pressed",same(PRESETS[b.dataset.i][1],draft)))};
const open=()=>{draft={...(applied||DEFAULT)};render();$("tpNote").textContent="";isOpen=true;panel.classList.add("open");scrim.classList.add("show");$("tpClose").focus()};
const close=keep=>{if(!isOpen)return;isOpen=false;panel.classList.remove("open");scrim.classList.remove("show");if(!keep){applied?paint(applied):unpaint()}opener.focus({preventScroll:true})};
opener.onclick=()=>{setMenu(false);open()};
$("tpClose").onclick=()=>close(false);scrim.onclick=()=>close(false);
$("tpPresets").addEventListener("click",e=>{const b=e.target.closest(".tp-preset");if(!b)return;draft={...PRESETS[b.dataset.i][1]};render();preview()});
$("tpColors").addEventListener("input",e=>{const k=e.target.dataset.k;if(!k)return;draft[k]=e.target.value;$("tv-"+k).textContent=e.target.value.toUpperCase();preview()});
$("tpApply").onclick=()=>{applied={...draft};paint(applied);close(true);toast("Theme applied for this visit")};
$("tpSave").onclick=()=>{applied={...draft};const d=paint(applied);try{localStorage.setItem("customTheme",JSON.stringify({colors:applied,vars:d.vars,scheme:d.scheme}));localStorage.setItem("theme","light")}catch(e){}close(true);toast("Theme saved")};
$("tpReset").onclick=()=>{applied=null;try{localStorage.removeItem("customTheme")}catch(e){}unpaint();draft={...DEFAULT};render();$("tpNote").textContent="";toast("Theme reset to default")};
document.addEventListener("keydown",e=>{if(!isOpen)return;if(e.key==="Escape"){close(false);return}
  if(e.key==="Tab"){const f=[...panel.querySelectorAll("button,input")].filter(x=>x.offsetParent);const a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
// the light/dark switch goes back to the standard theme
const sw=toggle.onclick;toggle.onclick=e=>{if(root.dataset.custom!==undefined){applied=null;try{localStorage.removeItem("customTheme")}catch(err){}unpaint()}sw.call(toggle,e)}})();

/* scroll progress bar */
(function(){const bar=$("progress");let ticking=false;
const upd=()=>{const d=document.documentElement;bar.style.setProperty("--sp",(d.scrollTop/((d.scrollHeight-d.clientHeight)||1)).toFixed(4));ticking=false};
addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(upd)}},{passive:true});upd()})();

/* subtle 3D tilt on the hero photo and grid cards (mouse only) */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
const tilt=(el,max)=>{el.addEventListener("pointermove",e=>{const b=el.getBoundingClientRect();el.style.setProperty("--ry",((e.clientX-b.left)/b.width-.5)*max+"deg");el.style.setProperty("--rx",(.5-(e.clientY-b.top)/b.height)*max+"deg")});
el.addEventListener("pointerleave",()=>{el.style.removeProperty("--rx");el.style.removeProperty("--ry")})};
tilt($("art"),12);document.querySelectorAll(".grid .card").forEach(c=>tilt(c,7))}
