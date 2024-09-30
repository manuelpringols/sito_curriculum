import './polyfills.server.mjs';
import{A as H,B,C as G,D as z,E,F as C,G as P,H as T,K as R,O as Y,R as M,a as y,b as d,c as O,d as w,e as u,f as k,g as x,h as I,i as A,j as s,k as g,l as j,m as c,n as e,o as t,p as a,q as p,r as i,z as D}from"./chunk-KX5VN7J6.mjs";var q=[],h=class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=u({type:l});static \u0275inj=d({imports:[M.forRoot(q),M]})};var S=class l{constructor(r){this.platformId=r}IFrameAPI;loadSpotifyScript(){return new Promise((r,n)=>{if(typeof document<"u"&&!document.getElementById("spotify-iframe-api")){let o=document.createElement("script");o.id="spotify-iframe-api",o.src="https://open.spotify.com/embed-podcast/iframe-api/v1",o.async=!0,o.onload=()=>{window.onSpotifyIframeApiReady=m=>{r()}},o.onerror=()=>n("Errore nel caricamento dello script di Spotify"),document.body.appendChild(o)}else r()})}createSpotifyPlayer(r,n){this.loadSpotifyScript().then(()=>{let o=document.getElementById(r);if(o&&this.IFrameAPI){let m={uri:n};this.IFrameAPI.createController(o,m,F=>{console.log("Spotify Player Created")})}else console.error("IFrameAPI or element not found!")})}static \u0275fac=function(n){return new(n||l)(O(x))};static \u0275prov=y({token:l,factory:l.\u0275fac,providedIn:"root"})};var f=class l{constructor(r,n,o,m){this.spotifyService=r;this.platformId=n;this.el=o;this.renderer=m}isPlaying=!1;state="hidden";title="sito_curriculum";minHeight;trackId="7H7NyZ3G075GqPx2evsfeb";scrollToSection(r){let n=document.getElementById(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}ngAfterViewInit(){D(this.platformId)&&this.spotifyService.createSpotifyPlayer("embed-iframe","spotify:playlist:37i9dQZF1DXcBWIGoYBM5M")}onWindowScroll(){let r=this.el.nativeElement.offsetTop;window.pageYOffset+window.innerHeight>=r+50?this.state="visible":this.state="hidden"}static \u0275fac=function(n){return new(n||l)(g(S),g(x),g(k),g(j))};static \u0275cmp=w({type:l,selectors:[["app-root"]],hostBindings:function(n,o){n&1&&p("scroll",function(){return o.onWindowScroll()},!1,A)},decls:230,vars:6,consts:[[1,"navbar"],[1,"logo"],["title","Spotify Embed: Recommendation Playlist ","src",I`https://open.spotify.com/embed/playlist/32PxgMvUxrKixd4STHbdg7?utm_source=generator&theme=0`,"width","100%","height","100%","frameBorder","0","allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture","loading","lazy"],[1,"nav-links"],["href","#chi-sono"],["href","#competenze"],["href","#progetti"],["href","#esperienza"],["href","#contatti"],["ngxScrollReveal",`{
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  reset: false
}`,1,"main-content"],["autoplay","","loop","","muted","",1,"background-video"],["src","assets/alb_alienplan1001_1080p_24fps (1).mp4","type","video/mp4"],[1,"content"],[1,"bio"],[1,"card-container"],[1,"card","chi-sono",3,"click"],[1,"card","competenze",3,"click"],[1,"card","progetti",3,"click"],[1,"card","esperienza",3,"click"],[1,"card","contatti",3,"click"],["id","chi-sono",1,"section"],[1,"container"],[1,"profile-header"],[1,"section-title"],[1,"intro-text"],[1,"profile-content"],[1,"profile-item"],[1,"fas","fa-id-badge"],[1,"info-list"],[1,"fas","fa-graduation-cap"],[1,"fas","fa-briefcase"],[1,"fas","fa-tools"],[1,"skills-list"],[1,"fas","fa-certificate"],["id","competenze",1,"section"],[1,"skills-content"],[1,"skill-item"],[1,"fas","fa-leaf"],[1,"skill-list"],[1,"fab","fa-angular"],["id","progetti",1,"section"],[1,"project"],[1,"fas","fa-mobile-alt"],[1,"screenshot-container"],["src","assets/1.jpg","alt","Screenshot 1 di PinGo",1,"screenshot"],["src","assets/5.jpg","alt","Screenshot 2 di PinGo",1,"screenshot"],["src","assets/3.jpg","alt","Screenshot 3 di PinGo",1,"screenshot"],[1,"project-status"],[1,"fas","fa-tasks"],["id","esperienza",1,"section"],[1,"experience-content"],[1,"experience-item"],[1,"fas","fa-rocket"],["id","contatti",1,"section"],[1,"contact-links"],["href","mailto:manuelpringols@gmail.com",1,"contact-item"],[1,"fas","fa-envelope"],["href","https://www.linkedin.com/in/manuel-cerqua-66ab54273/","target","_blank",1,"contact-item"],[1,"fab","fa-linkedin"],["href","https://github.com/manuelpringols","target","_blank",1,"contact-item"],[1,"fab","fa-github"]],template:function(n,o){n&1&&(e(0,"nav",0)(1,"div",1),i(2,"Il Mio Portfolio"),t(),a(3,"iframe",2),e(4,"ul",3),a(5,"li"),e(6,"li")(7,"a",4),i(8,"Chi Sono"),t()(),e(9,"li")(10,"a",5),i(11,"Competenze"),t()(),e(12,"li")(13,"a",6),i(14,"Progetti"),t()(),e(15,"li")(16,"a",7),i(17,"Esperienza"),t()(),e(18,"li")(19,"a",8),i(20,"Contatti"),t()()()(),e(21,"section",9)(22,"video",10),a(23,"source",11),i(24," Your browser does not support the video tag. "),t(),e(25,"div",12)(26,"div",13)(27,"h1"),i(28,"Ciao, Sono Manuel Cerqua"),t(),e(29,"p"),i(30,"Backend Developer con esperienza in Spring Boot e Angular."),t()()()(),e(31,"section",14)(32,"div",15),p("click",function(){return o.scrollToSection("chi-sono")}),e(33,"h2"),i(34,"Chi Sono"),t(),e(35,"p"),i(36,"Aggiungi informazioni su di te qui."),t()(),e(37,"div",16),p("click",function(){return o.scrollToSection("competenze")}),e(38,"h2"),i(39,"Competenze"),t(),e(40,"p"),i(41,"Elenca le tue skill principali qui."),t()(),e(42,"div",17),p("click",function(){return o.scrollToSection("progetti")}),e(43,"h2"),i(44,"Progetti"),t(),e(45,"p"),i(46,"Descrivi alcuni progetti chiave su cui hai lavorato."),t()(),e(47,"div",18),p("click",function(){return o.scrollToSection("esperienza")}),e(48,"h2"),i(49,"Esperienza"),t(),e(50,"p"),i(51,"Aggiungi la tua esperienza lavorativa qui."),t()(),e(52,"div",19),p("click",function(){return o.scrollToSection("contatti")}),e(53,"h2"),i(54,"Contatti"),t(),e(55,"p"),i(56,"Inserisci i tuoi dettagli di contatto."),t()()(),e(57,"section",20)(58,"div",21)(59,"div",22)(60,"h2",23),i(61,"Chi Sono"),t(),e(62,"p",24),i(63," Sono Manuel Cerqua, un giovane appassionato con diversi anni di esperienza nel settore. Dedito al lavoro e con un forte desiderio di apprendere, ho sviluppato solide competenze in programmazione e ottimizzazione dei processi produttivi. "),t()(),e(64,"div",25)(65,"div",26)(66,"h3"),a(67,"i",27),i(68," Dettagli Personali"),t(),e(69,"ul",28)(70,"li")(71,"strong"),i(72,"Telefono:"),t(),i(73," 347-4895-348"),t(),e(74,"li")(75,"strong"),i(76,"Email:"),t(),i(77," manuelpringols@gmail.com"),t(),e(78,"li")(79,"strong"),i(80,"Indirizzo:"),t(),i(81," Via Innamorati 109, Giugliano (NA)"),t()()(),e(82,"div",26)(83,"h3"),a(84,"i",29),i(85," Istruzione"),t(),e(86,"p"),i(87,"Diploma di Perito Industriale presso ITS Galvani, Giugliano (NA), 2015 - 2020"),t()(),e(88,"div",26)(89,"h3"),a(90,"i",30),i(91," Esperienza Lavorativa"),t(),e(92,"p"),i(93," Operaio Specializzato presso Acciai Inox Srl, Giugliano (NA) dal 2019. Programmazione e utilizzo di macchine CNC per la lavorazione dell'acciaio inox. Collaboro con il team per ottimizzare i processi produttivi. "),t()(),e(94,"div",26)(95,"h3"),a(96,"i",31),i(97," Competenze Tecniche"),t(),e(98,"ul",32)(99,"li"),i(100,"Java, SQL, JavaScript, CSS, HTML"),t(),e(101,"li"),i(102,"Spring Boot, Angular"),t(),e(103,"li"),i(104,"Git"),t(),e(105,"li"),i(106,"Sviluppo di API REST"),t(),e(107,"li"),i(108,"Creazione e gestione di applicazioni web front-end e back-end"),t()()(),e(109,"div",26)(110,"h3"),a(111,"i",33),i(112," Certificazioni"),t(),e(113,"p"),i(114,"Attestato Java Oracle: Java Foundations Associate"),t()()()()(),e(115,"section",34)(116,"div",21)(117,"h2",23),i(118,"Competenze"),t(),e(119,"p",24),i(120," Sono particolarmente ferrato nell'implementazione di **API REST** utilizzando **Spring Boot** e nell\u2019uso dei concetti fondamentali di **Angular** per lo sviluppo di interfacce front-end. Amo costruire applicazioni che siano scalabili, performanti e che abbiano una struttura pulita e ben organizzata. "),t(),e(121,"div",35)(122,"div",36)(123,"h3"),a(124,"i",37),i(125," Spring Boot"),t(),e(126,"p"),i(127," Ho esperienza nell'utilizzo di Spring Boot per lo sviluppo di servizi RESTful, nella gestione di routing, e nell'integrazione con database tramite JPA. Conosco le principali funzionalit\xE0 del framework, tra cui: "),t(),e(128,"ul",38)(129,"li"),i(130,"Creazione di API REST"),t(),e(131,"li"),i(132,"Gestione dei controller e routing"),t(),e(133,"li"),i(134,"Integrazione con database (Spring Data JPA)"),t(),e(135,"li"),i(136,"Configurazione di sicurezza base con Spring Security"),t(),e(137,"li"),i(138,"Utilizzo di DevTools per un rapido sviluppo"),t()()(),e(139,"div",36)(140,"h3"),a(141,"i",39),i(142," Angular"),t(),e(143,"p"),i(144," Angular \xE8 il mio framework preferito per la gestione della parte front-end. Mi sento a mio agio nell'uso dei concetti base e nella creazione di componenti dinamici e modulari. Le mie competenze includono: "),t(),e(145,"ul",38)(146,"li"),i(147,"Creazione di componenti e direttive"),t(),e(148,"li"),i(149,"Utilizzo dei moduli e gestione del routing"),t(),e(150,"li"),i(151,"Gestione dei servizi e comunicazione HTTP"),t(),e(152,"li"),i(153,"Implementazione della reattivit\xE0 con RxJS"),t(),e(154,"li"),i(155,"Stilizzazione con CSS e Angular Material"),t()()()()()(),e(156,"section",40)(157,"div",21)(158,"h2",23),i(159,"Progetti"),t(),e(160,"p",24),i(161," Anche se non ho ancora portato a termine progetti completi utilizzabili pubblicamente, sto lavorando su alcuni progetti personali che rappresentano le mie competenze e la mia passione per lo sviluppo. Ecco i principali su cui sto concentrando le mie energie. "),t(),e(162,"div",41)(163,"h3"),a(164,"i",42),i(165," PinGo"),t(),e(166,"p")(167,"strong"),i(168,"PinGo"),t(),i(169," \xE8 un'app per dispositivi mobili a cui sto lavorando da circa un anno con alcuni amici. Il progetto \xE8 realizzato utilizzando **Ionic**, un framework che trasforma il codice Angular e HTML in linguaggio nativo (Java/Kotlin) per Android Studio. L'obiettivo di PinGo \xE8 fornire una soluzione di geolocalizzazione che consenta agli utenti di creare, condividere e visualizzare punti d'interesse sulla mappa, creando una community attiva e partecipativa. "),t(),e(170,"div",43),a(171,"img",44)(172,"img",45)(173,"img",46),t(),e(174,"p",47)(175,"strong"),i(176,"Stato del Progetto:"),t(),i(177," In fase di sviluppo. "),t()(),e(178,"div",41)(179,"h3"),a(180,"i",48),i(181," CRM per PinGo"),t(),e(182,"p"),i(183," Questo \xE8 un progetto interno, nato dall\u2019esigenza di gestire meglio le attivit\xE0 e le task del team che lavora su PinGo. Ho realizzato una sorta di **CRM** utilizzando tecnologie di front-end e back-end per monitorare le attivit\xE0 in corso, le task completate e quelle da assegnare. Questo strumento ci permette di mantenere una visione chiara sullo stato dei lavori e migliorare la produttivit\xE0. "),t(),e(184,"p",47)(185,"strong"),i(186,"Stato del Progetto:"),t(),i(187," In utilizzo nel team, ma ancora in fase di sviluppo per miglioramenti futuri. "),t()()()(),e(188,"section",49)(189,"div",21)(190,"h2",23),i(191,"Esperienza Lavorativa"),t(),e(192,"p",24),i(193," Anche se non ho ancora maturato esperienze professionali dirette nel settore IT, la mia determinazione e la passione per il mondo dello sviluppo mi hanno spinto a lavorare costantemente su progetti personali per accrescere le mie competenze. Sono convinto che la mia motivazione e la capacit\xE0 di apprendere rapidamente mi rendano pronto a mettere in pratica ci\xF2 che ho studiato e ad affrontare qualsiasi sfida professionale inerente alle tecnologie che padroneggio. "),t(),e(194,"div",50)(195,"div",51)(196,"h3"),a(197,"i",31),i(198," Progetti Personali"),t(),e(199,"p"),i(200," Durante gli ultimi anni, ho dedicato il mio tempo libero allo sviluppo di progetti personali, tra cui la creazione di un'applicazione mobile e di un sistema CRM. Questi progetti mi hanno permesso di acquisire esperienza pratica e comprendere le dinamiche di sviluppo in team e la gestione dei workflow. "),t()(),e(201,"div",51)(202,"h3"),a(203,"i",29),i(204," Formazione Autodidatta"),t(),e(205,"p"),i(206," Ho investito in formazione personale attraverso corsi online e tutorial, ampliando le mie competenze in linguaggi come **Java**, **JavaScript**, e tecnologie come **Spring Boot** e **Angular**. Questa dedizione mi ha fornito una solida base tecnica e la capacit\xE0 di adattarmi rapidamente a nuovi ambienti lavorativi. "),t()(),e(207,"div",51)(208,"h3"),a(209,"i",52),i(210," Pronto ad Accettare Nuove Sfide"),t(),e(211,"p"),i(212," Sono pronto ad accettare qualsiasi opportunit\xE0 nel mondo dello sviluppo software che mi permetta di crescere e applicare le mie conoscenze. Nonostante la mancanza di esperienza diretta, la mia caparbiet\xE0, unita alla curiosit\xE0 e all'intraprendenza, mi rendono entusiasta e motivato a iniziare un percorso professionale in questo campo. "),t()()()()(),e(213,"section",53)(214,"div",21)(215,"h2",23),i(216,"Contatti"),t(),e(217,"p",24),i(218," Se desideri metterti in contatto con me, sono sempre aperto a nuove opportunit\xE0 e collaborazioni. Puoi trovarmi su LinkedIn e GitHub o inviarmi un'email per discutere di progetti e idee. "),t(),e(219,"div",54)(220,"a",55),a(221,"i",56),i(222," Email "),t(),e(223,"a",57),a(224,"i",58),i(225," LinkedIn "),t(),e(226,"a",59),a(227,"i",60),i(228," GitHub "),t()()()(),a(229,"router-outlet")),n&2&&(s(31),c("@fadeIn",o.state),s(26),c("@fadeIn",o.state),s(58),c("@fadeIn",o.state),s(41),c("@fadeIn",o.state),s(32),c("@fadeIn",void 0),s(25),c("@fadeIn",void 0))},dependencies:[Y],styles:['.chi-sono[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)}.competenze[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)}.progetti[_ngcontent-%COMP%]{background-image:url(https://plus.unsplash.com/premium_photo-1666901328578-7fcbe821735e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)}.esperienza[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1532798369041-b33eb576ef16?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)}.contatti[_ngcontent-%COMP%]{background-image:url(https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)}video[_ngcontent-%COMP%]{z-index:100}.section-title[_ngcontent-%COMP%]{font-size:2.5em;text-align:center;margin-bottom:20px;border-bottom:2px solid #4ca1af;display:inline-block}.intro-text[_ngcontent-%COMP%]{font-size:1.2em;text-align:center;max-width:800px;margin:0 auto 40px;line-height:1.6}.profile-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.profile-item[_ngcontent-%COMP%]{background:#34495e;border-radius:10px;padding:20px;box-shadow:1px 4px 15px #30055871;transition:transform .3s ease;z-index:2}.profile-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.5em}.profile-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;color:#4ca1af}.profile-item[_ngcontent-%COMP%]:hover{transform:translateY(-5px);cursor:cell}.info-list[_ngcontent-%COMP%], .skills-list[_ngcontent-%COMP%]{list-style:none;padding-left:0}.info-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 0;font-size:1.1em}.profile-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bounce 2s infinite}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}section[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;background:url(https://www.transparenttextures.com/patterns/stardust.png);opacity:.8;z-index:1}.skill-item[_ngcontent-%COMP%]{background:#34495e;border-radius:10px;padding:20px;box-shadow:0 4px 15px #0000001a;transition:transform .3s ease;margin-bottom:5vh}.skill-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.5em}.skill-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;color:#4ca1af}.skill-item[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.skill-list[_ngcontent-%COMP%]{list-style:none;padding-left:0}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 0;font-size:1.1em}.project[_ngcontent-%COMP%]{background:#34495e;border-radius:10px;padding:30px;margin-bottom:40px;box-shadow:0 4px 15px #0003;transition:transform .3s ease}.project[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.8em;margin-bottom:15px}.project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1em;line-height:1.6}.project[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;color:#4ca1af}.screenshot-container[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin:20px 0;z-index:100}.screenshot[_ngcontent-%COMP%]{width:30%;height:65vh;border-radius:10px;box-shadow:0 4px 15px #0000004d;transition:transform .3s ease;z-index:100}.screenshot[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.project-status[_ngcontent-%COMP%]{font-weight:700;text-align:center;background:#2c3e50;padding:10px;border-radius:5px;color:#4ca1af;display:inline-block}.contact-links[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;z-index:2}.contact-links[_ngcontent-%COMP%]:hover{cursor:pointer}.contact-item[_ngcontent-%COMP%]{background:#4ca1af;color:#fff;padding:15px 25px;border-radius:5px;transition:background-color .3s ease,transform .3s ease;text-decoration:none;font-size:1.1em;box-shadow:0 4px 10px #0000004d;z-index:2}.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.contact-item[_ngcontent-%COMP%]:hover{background:#2c3e50;transform:translateY(-5px)}.contact-item[_ngcontent-%COMP%]:active{transform:translateY(0)}.experience-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.experience-item[_ngcontent-%COMP%]{background:#34495e;border-radius:10px;padding:30px;box-shadow:0 4px 15px #0003;transition:transform .3s ease}.experience-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.5em}.experience-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;color:#4ca1af}.experience-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1em;line-height:1.6}.experience-item[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}@media (max-width: 768px){.experience-content[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width: 768px){.screenshot-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.screenshot[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}}iframe[_ngcontent-%COMP%]{z-index:100;width:30vw;height:8vh}.music-player[_ngcontent-%COMP%]{z-index:100}@media (max-width: 768px){.contact-links[_ngcontent-%COMP%]{flex-direction:column;gap:10px}}'],data:{animation:[G("fadeIn",[C("hidden",E({opacity:0,transform:"translateY(20px)"})),C("visible",E({opacity:1,transform:"translateY(40px)"})),P("hidden => visible",z("1600ms ease-out")),P("visible => hidden",z("1600ms ease-out"))])]}})};var b=class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=u({type:l,bootstrap:[f]});static \u0275inj=d({providers:[B()],imports:[H,h,T]})};var _=class l{static \u0275fac=function(n){return new(n||l)};static \u0275mod=u({type:l,bootstrap:[f]});static \u0275inj=d({imports:[b,R]})};export{_ as a};