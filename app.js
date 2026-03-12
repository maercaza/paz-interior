/* ═══════ SVG ICONS ═══════ */
const IC={
incienso:`<svg viewBox="0 0 40 40"><line x1="20" y1="36" x2="20" y2="16"/><path d="M20 16c0-4 3-6 1-10"/><path d="M20 16c0-4-2-5-1-10" opacity=".5"/><ellipse cx="20" cy="37" rx="4" ry="1.5"/></svg>`,
vela:`<svg viewBox="0 0 40 40"><rect x="15" y="16" width="10" height="20" rx="1"/><path d="M20 16c0-3 3-5 0-8-3 3 0 5 0 8"/><line x1="20" y1="16" x2="20" y2="12"/><path d="M12 36h16" stroke-linecap="round"/></svg>`,
jabon:`<svg viewBox="0 0 40 40"><rect x="8" y="14" width="24" height="16" rx="3"/><path d="M12 14v-2a4 4 0 0 1 4-4h0"/><circle cx="30" cy="10" r="2"/><circle cx="33" cy="7" r="1.5"/><circle cx="28" cy="6" r="1"/></svg>`,
botella:`<svg viewBox="0 0 40 40"><path d="M16 14h8v-4h-8zM16 14c-2 2-4 4-4 8v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V22c0-4-2-6-4-8"/><line x1="14" y1="28" x2="26" y2="28" opacity=".4"/></svg>`,
gota:`<svg viewBox="0 0 40 40"><path d="M20 4c-6 10-10 16-10 22a10 10 0 0 0 20 0c0-6-4-12-10-22z"/></svg>`,
humo:`<svg viewBox="0 0 40 40"><path d="M14 36V28"/><path d="M26 36V28"/><path d="M10 28h20"/><path d="M14 28c0-8 6-6 6-14"/><path d="M20 14c0 8 6 6 6 14"/><path d="M17 6c2-3 6 0 4 3"/></svg>`,
bano:`<svg viewBox="0 0 40 40"><path d="M8 20h24"/><path d="M10 20v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-8"/><line x1="12" y1="8" x2="12" y2="20"/><circle cx="16" cy="14" r="1"/><circle cx="20" cy="12" r="1"/><circle cx="24" cy="15" r="1"/></svg>`,
perfume:`<svg viewBox="0 0 40 40"><rect x="14" y="16" width="12" height="18" rx="2"/><rect x="17" y="10" width="6" height="6" rx="1"/><line x1="16" y1="10" x2="24" y2="10"/><line x1="20" y1="10" x2="20" y2="6"/><line x1="17" y1="6" x2="23" y2="6"/><path d="M28 22c2-1 4 0 4 2s-2 3-4 2" opacity=".4"/></svg>`,
polvo:`<svg viewBox="0 0 40 40"><path d="M10 34l4-20h12l4 20z"/><line x1="14" y1="14" x2="26" y2="14"/><line x1="14" y1="14" x2="16" y2="10"/><line x1="26" y1="14" x2="24" y2="10"/><circle cx="20" cy="24" r="2"/></svg>`,
montaña:`<svg viewBox="0 0 40 40"><path d="M4 34L14 14l6 8 6-12 10 24z"/><path d="M14 14l3 4" opacity=".4"/><circle cx="30" cy="10" r="3"/></svg>`,
rosa:`<svg viewBox="0 0 40 40"><circle cx="20" cy="18" r="6"/><path d="M20 12c-1-2 1-4 3-3s2 3 0 4"/><path d="M20 12c1-2-1-4-3-3s-2 3 0 4"/><path d="M15 20c-2 1-4-1-3-3"/><path d="M25 20c2 1 4-1 3-3"/><line x1="20" y1="24" x2="20" y2="36"/><path d="M16 30c2-1 4 0 4 0s2-1 4 0"/></svg>`,
canela:`<svg viewBox="0 0 40 40"><path d="M10 14c0 12 2 16 10 16s10-4 10-16"/><path d="M10 14h20" stroke-linecap="round"/><line x1="15" y1="18" x2="15" y2="26" opacity=".3"/><line x1="20" y1="18" x2="20" y2="28" opacity=".3"/><line x1="25" y1="18" x2="25" y2="26" opacity=".3"/></svg>`,
luna:`<svg viewBox="0 0 40 40"><path d="M24 6a14 14 0 1 0 0 28 10 10 0 0 1 0-28z"/></svg>`,
rayo:`<svg viewBox="0 0 40 40"><polygon points="22,4 12,22 18,22 16,36 28,16 22,16"/></svg>`,
estrella:`<svg viewBox="0 0 40 40"><path d="M20 4l4 12h12l-10 8 4 12-10-8-10 8 4-12L4 16h12z"/></svg>`,
flecha:`<svg viewBox="0 0 16 16"><polyline points="10,3 5,8 10,13"/></svg>`,
};
const WA_SVG=`<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

/* ═══════ PRODUCT DATA ═══════ */
const PRODUCTS=[
{slug:'inciensos',name:'Inciensos Sagrados',icon:'incienso',price:'$120',pres:'Bulto 50 cajas · 6 paquetes c/u',
 desc:'Cada varilla de incienso ha sido seleccionada por su calidad y potencia aromática. Ideales para rituales de purificación, meditación y limpieza energética de hogares y negocios.',
 tagline:'50 cajas de poder aromático para tu tienda',
 shortDesc:'Bulto de 50 cajas, 6 paquetes cada una. Variedad de aromas sagrados.',
 uses:['Purificación de espacios y hogares','Meditación y conexión espiritual','Rituales de limpieza energética','Armonización de ambientes comerciales','Atraer prosperidad y buena energía']},
{slug:'velas-de-limpieza',name:'Velas de Limpieza',icon:'vela',price:'$5,99',pres:'Caja de 12 unidades',
 desc:'Velas especialmente preparadas para rituales de limpieza espiritual. Su llama purifica el ambiente y acompaña tus peticiones e intenciones de transformación.',
 tagline:'La llama que purifica y transforma',
 shortDesc:'Caja de 12 unidades. Ideales para rituales y limpiezas energéticas.',
 uses:['Rituales de limpieza espiritual','Peticiones y deseos','Purificación de ambientes','Meditación con intención','Acompañamiento en oraciones']},
{slug:'jabones-espirituales',name:'Jabones Espirituales',icon:'jabon',price:'$8,99',pres:'Caja de 12 unidades',
 desc:'Jabones artesanales formulados con ingredientes naturales para el cuidado espiritual del cuerpo. Cada baño se convierte en un ritual de renovación y florecimiento.',
 tagline:'Baños de renovación y florecimiento',
 shortDesc:'Caja de 12 unidades. Jabones artesanales para el cuidado espiritual.',
 uses:['Baños de florecimiento personal','Limpieza del aura y energía corporal','Rituales de amor y atracción','Protección espiritual diaria','Renovación energética']},
{slug:'colonias',name:'Colonias Espirituales',icon:'botella',price:'Desde $6',pres:'Por unidad · Caballito y Mar Azul',
 desc:'Las colonias espirituales Caballito y Mar Azul son fragancias tradicionales con décadas de uso en la cultura espiritual latinoamericana. Perfectas para riegos, limpiezas y uso personal.',
 tagline:'Fragancias tradicionales de poder',
 shortDesc:'Caballito y Mar Azul. Fragrancias tradicionales para la buena energía.',
 uses:['Riegos de limpieza en hogares','Baños espirituales','Atracción de buena energía','Uso personal diario','Rituales de protección']},
{slug:'agua-florida',name:'Agua Florida',icon:'gota',price:'Desde $49',pres:'Pequeña x72 / Grande x24 unidades',
 desc:'El Agua Florida es un clásico indispensable de las limpiezas espirituales. Se utiliza en riegos, baños y como elemento central en rituales de purificación desde hace generaciones.',
 tagline:'El clásico indispensable de las limpiezas',
 shortDesc:'Pequeña x72 / Grande x24 unidades. Esencial para limpiezas espirituales.',
 uses:['Riegos de limpieza energética','Baños de purificación','Limpiezas de espacios comerciales','Rituales tradicionales','Armonización del aura']},
{slug:'sahumerios',name:'Sahumerios',icon:'humo',price:'Desde $9,99',pres:'Palo Santo · 7 Sahumerios · Varias presentaciones',
 desc:'Los sahumerios de Palo Santo y la colección de 7 Sahumerios son herramientas ancestrales de purificación. Su humo sagrado limpia, protege y eleva la vibración de cualquier espacio.',
 tagline:'Purificación ancestral y profunda',
 shortDesc:'Palo Santo y 7 Sahumerios. Purificación profunda de espacios.',
 uses:['Purificación profunda de espacios','Limpieza de las 7 energías','Protección contra energías negativas','Elevación de vibración','Rituales de Palo Santo']},
{slug:'riegos-de-bano',name:'Riegos de Baño',icon:'bano',price:'$30',pres:'Caja y Botella x12 unidades',
 desc:'Los riegos de baño son una de las herramientas más poderosas del mundo espiritual. Se utilizan para limpieza profunda, atracción de prosperidad y rituales de florecimiento personal.',
 tagline:'Limpieza profunda y florecimiento',
 shortDesc:'Caja y Botella x12 unidades. Rituales de limpieza y florecimiento.',
 uses:['Limpieza profunda de malas energías','Atracción de amor y prosperidad','Rituales de florecimiento','Protección contra envidias','Renovación espiritual']},
{slug:'perfumes-esotericos',name:'Perfumes Esotéricos',icon:'perfume',price:'$21,99',pres:'x12 unidades por caja',
 desc:'Perfumes esotéricos exclusivos formulados para atraer aquello que deseas: amor, dinero, protección, éxito. Cada fragancia tiene un propósito espiritual definido.',
 tagline:'Esencias que atraen lo que deseas',
 shortDesc:'12 unidades por caja. Esencias exclusivas para atraer lo que deseas.',
 uses:['Atracción de amor y relaciones','Atracción de dinero y abundancia','Protección personal','Éxito en negocios','Apertura de caminos']},
{slug:'esencias-en-polvo',name:'Esencias en Polvo',icon:'polvo',price:'$6,50',pres:'x12 unidades por paquete',
 desc:'Esencias en polvo de uso espiritual para incorporar en baños, riegos y rituales diversos. Versátiles y con alta concentración aromática y energética.',
 tagline:'Concentración espiritual en cada grano',
 shortDesc:'12 unidades por paquete. Uso espiritual para baños y riegos.',
 uses:['Baños espirituales','Riegos de limpieza','Rituales de atracción','Complemento para limpiezas','Aromaterapia espiritual']},
{slug:'7-esencias-de-los-andes',name:'7 Esencias de los Andes',icon:'montaña',price:'$105',pres:'Caja de 48 unidades',
 desc:'Las 7 Esencias de los Andes son un producto exclusivo que recoge la sabiduría ancestral andina. Siete esencias naturales combinadas para la limpieza, protección y prosperidad integral.',
 tagline:'La sabiduría ancestral andina',
 shortDesc:'Caja de 48 unidades. La tradición andina en tu tienda.',
 uses:['Limpieza integral de 7 energías','Protección ancestral andina','Atracción de prosperidad','Conexión con la Pachamama','Rituales de armonización']}
];

const INCENSES=[
{name:'Rosa',icon:'rosa',use:'Amor y relaciones'},
{name:'Quita Sales',icon:'rayo',use:'Limpiar energías negativas'},
{name:'Buena Energía',icon:'estrella',use:'Atraer prosperidad'},
{name:'Canela',icon:'canela',use:'Abundancia y dinero'},
{name:'Palo Santo',icon:'luna',use:'Purificación profunda'},
{name:'7 Sahumerios',icon:'humo',use:'Limpieza de 7 energías'}
];

/* ═══════ ROUTER ═══════ */
function getRoute(){
  const h=location.hash||'#/';
  if(h.startsWith('#/producto/')){const s=h.replace('#/producto/','');return{page:'product',slug:s}}
  return{page:'home'};
}
function navigate(){
  const app=document.getElementById('app');
  const route=getRoute();
  app.innerHTML='';
  if(route.page==='product'){
    const p=PRODUCTS.find(x=>x.slug===route.slug);
    if(p){app.innerHTML=renderProduct(p)}else{location.hash='#/';return}
    document.getElementById('main-footer').style.display='block';
  }else{
    app.innerHTML=renderHome();
    document.getElementById('main-footer').style.display='block';
  }
  app.querySelector('.page-enter')||app.firstElementChild?.classList.add('page-enter');
  window.scrollTo({top:0,behavior:'auto'});
  setTimeout(initReveals,100);
}
window.addEventListener('hashchange',navigate);
window.addEventListener('DOMContentLoaded',()=>{navigate();initParticles();initNav()});

/* ═══════ HOME TEMPLATE ═══════ */
function renderHome(){
  const prodCards=PRODUCTS.map(p=>`
  <a href="#/producto/${p.slug}" class="prod-card reveal">
    <div class="prod-icon">${IC[p.icon]}</div>
    <h3 class="prod-name">${p.name}</h3>
    <p class="prod-desc">${p.shortDesc}</p>
    <div class="prod-price">${p.price}<small>${p.pres.split('·')[0].trim()}</small></div>
    <span class="prod-link">Ver Detalles →</span>
  </a>`).join('');

  const incCards=INCENSES.map(i=>`
  <div class="inc-card reveal">
    <div class="inc-icon">${IC[i.icon]}</div>
    <h4 class="inc-name">${i.name}</h4>
    <p class="inc-use">${i.use}</p>
  </div>`).join('');

  const tblRows=PRODUCTS.map(p=>`
  <tr><td><svg class="row-icon" viewBox="0 0 40 40">${IC[p.icon].replace(/<\/?svg[^>]*>/g,'')}</svg>${p.name}</td>
  <td>${p.pres}</td><td>${p.price}</td></tr>`).join('');

  return `<div class="page-enter">
  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-content">
      <div class="hero-deco-line"></div>
      <p class="hero-label">Tienda Esotérica Mayorista · Ecuador</p>
      <h1 class="hero-title">PAZ <span>INTERIOR</span></h1>
      <p class="hero-sub">Artículos espirituales al por mayor</p>
      <p class="hero-tagline">"La tranquilidad está en tu interior"</p>
      <a href="#productos" class="hero-cta">Explorar Catálogo</a>
    </div>
    <div class="hero-scroll"><span>Scroll</span><div class="scroll-ln"></div></div>
  </section>

  <!-- BAND -->
  <div class="ann-band">Precios Especiales para Mayoristas &nbsp;·&nbsp; Envíos a Todo el País &nbsp;·&nbsp; WhatsApp: 097 9807 504</div>

  <!-- INTRO -->
  <section class="section" id="mision">
    <div class="section-inner">
      <div class="intro-wrap reveal">
        <div class="intro-icon">${IC.vela}</div>
        <div class="section-header" style="margin-bottom:2rem">
          <p class="section-label">Nuestra Misión</p>
          <h2 class="section-title">Todo lo que tu tienda <span>espiritual</span> necesita</h2>
          <div class="gold-ln"></div>
        </div>
        <p>Somos <strong>distribuidores mayoristas</strong> de artículos esotéricos y espirituales en Ecuador. Ofrecemos los <strong>mejores precios del mercado</strong>, un amplio catálogo de productos de alta calidad y envíos a todo el país. Desde <strong>inciensos y velas</strong> hasta <strong>colonias, riegos y perfumes esotéricos</strong> — todo lo que tus clientes buscan, lo tenemos para ti.</p>
      </div>
    </div>
  </section>

  <!-- PRODUCTS -->
  <section class="section" id="productos" style="background:var(--bg2)">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-label">Catálogo Mayorista</p>
        <h2 class="section-title">Nuestros <span>Productos</span></h2>
        <p class="section-sub">Calidad, tradición y los mejores precios para tu negocio</p>
        <div class="gold-ln"></div>
      </div>
      <div class="prod-grid">${prodCards}</div>
    </div>
  </section>

  <!-- INCENSE -->
  <section class="section" id="inciensos">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-label">Aromas con Propósito</p>
        <h2 class="section-title">Inciensos <span>Sagrados</span></h2>
        <p class="section-sub">Cada aroma tiene un propósito espiritual</p>
        <div class="gold-ln"></div>
      </div>
      <div class="inc-grid">${incCards}</div>
    </div>
  </section>

  <!-- PRICING -->
  <section class="section" id="precios" style="background:var(--bg2)">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-label">Precios Exclusivos</p>
        <h2 class="section-title">Lista <span>Mayorista</span></h2>
        <p class="section-sub">Precios especiales para distribuidores y tiendas</p>
        <div class="gold-ln"></div>
      </div>
      <div class="price-wrap reveal">
        <table class="price-tbl"><thead><tr><th>Producto</th><th>Presentación</th><th>Precio</th></tr></thead>
        <tbody>${tblRows}</tbody></table>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section contact-sec" id="contacto">
    <div class="section-inner">
      <div class="section-header reveal">
        <p class="section-label">Pedidos Directos</p>
        <h2 class="section-title">Haz Tu <span>Pedido</span> Ahora</h2>
        <p class="section-sub">Atención personalizada · Envíos a todo el país</p>
        <div class="gold-ln"></div>
      </div>
      <div class="wa-btns reveal">
        <a href="https://wa.me/593979807504?text=${encodeURIComponent('Hola PAZ INTERIOR, me interesa hacer un pedido mayorista. ¿Podrían enviarme el catálogo?')}" target="_blank" class="wa-btn">${WA_SVG} 097 9807 504</a>
        <a href="https://wa.me/593983829181?text=${encodeURIComponent('Hola PAZ INTERIOR, me interesa hacer un pedido mayorista. ¿Podrían enviarme el catálogo?')}" target="_blank" class="wa-btn">${WA_SVG} 098 3829 181</a>
      </div>
      <p class="contact-nums reveal">Whatsapp: 097 9807 504 &nbsp;/&nbsp; 098 3829 181</p>
    </div>
  </section>
</div>`;
}

/* ═══════ PRODUCT DETAIL TEMPLATE ═══════ */
function renderProduct(p){
  const usesHTML=p.uses.map(u=>`<li>${u}</li>`).join('');
  const waMsg=encodeURIComponent(`Hola PAZ INTERIOR, me interesa el producto: ${p.name}. ¿Podrían darme más información?`);
  return `<div class="page-enter">
  <section class="section" style="padding-top:8rem">
    <div class="section-inner">
      <a href="#/" class="pd-back">${IC.flecha} Volver al catálogo</a>
      <div class="pd-layout">
        <div class="pd-visual reveal">${IC[p.icon].replace('viewBox="0 0 40 40"','viewBox="0 0 40 40" style="width:120px;height:120px"')}</div>
        <div class="pd-info reveal">
          <h1>${p.name}</h1>
          <p class="pd-tagline">${p.tagline}</p>
          <p class="pd-desc">${p.desc}</p>
          <div class="pd-price-box">
            <div class="pd-price">${p.price}</div>
            <p class="pd-pres">${p.pres}</p>
          </div>
          <div class="pd-uses">
            <h3>Usos Espirituales</h3>
            <ul>${usesHTML}</ul>
          </div>
          <a href="https://wa.me/593979807504?text=${waMsg}" target="_blank" class="pd-order-btn">${WA_SVG} Pedir por WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
</div>`;
}

/* ═══════ PARTICLES ═══════ */
function initParticles(){
  const c=document.getElementById('particles-container');
  for(let i=0;i<25;i++){
    const p=document.createElement('div');p.className='particle';
    p.style.left=Math.random()*100+'%';
    const s=Math.random()*2+1;p.style.width=p.style.height=s+'px';
    p.style.animationDuration=(Math.random()*14+10)+'s';
    p.style.animationDelay=(Math.random()*12)+'s';
    c.appendChild(p);
  }
}

/* ═══════ NAVBAR ═══════ */
function initNav(){
  const nb=document.getElementById('navbar');
  window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',window.scrollY>80));
}
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('active');
}
function closeMenu(){
  document.getElementById('navLinks').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');
}

/* ═══════ SCROLL REVEAL ═══════ */
function initReveals(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}
