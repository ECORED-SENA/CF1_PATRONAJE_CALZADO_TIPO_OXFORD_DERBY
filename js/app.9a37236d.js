(function(e){function a(a){for(var t,r,s=a[0],c=a[1],l=a[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);m&&m(a);while(u.length)u.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,a=0;a<i.length;a++){for(var o=i[a],t=!0,r=1;r<o.length;r++){var s=o[r];0!==n[s]&&(t=!1)}t&&(i.splice(a--,1),e=c(c.s=o[0]))}return e}var t={},r={app:0},n={app:0},i=[];function s(e){return c.p+"js/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"9647816b",intro:"a0f33789",sintesis:"77c499ac",tema1:"3a2b0a19",tema2:"1030c955",tema3:"9642c5e3",tema4:"20b90e9e",tema5:"4c25632f"}[e]+".js"}function c(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var a=[],o={actividad:1,tema2:1};r[e]?a.push(r[e]):0!==r[e]&&o[e]&&a.push(r[e]=new Promise((function(a,o){for(var t="css/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"9e7f8156",intro:"31d6cfe0",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"eea7045f",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",n=c.p+t,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===t||d===n))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===t||d===n)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var t=a&&a.target&&a.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=t,delete r[e],m.parentNode.removeChild(m),o(i)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var t=n[e];if(0!==t)if(t)a.push(t[2]);else{var i=new Promise((function(a,o){t=n[e]=[a,o]}));a.push(t[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=n[e];if(0!==o){if(o){var t=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",u.name="ChunkLoadError",u.type=t,u.request=r,o[1](u)}n[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=e,c.c=t,c.d=function(e,a,o){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)c.d(o,t,function(a){return e[a]}.bind(null,t));return o},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;i.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},1430:function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"2cad":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1.3186326f.png"},"56d7":function(e,a,o){"use strict";o.r(a);var t=o("2b0e"),r=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},n=[],i={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},s=i,c=o("2877"),l=Object(c["a"])(s,r,n,!1,null,null,null),d=l.exports,u=o("8c4f"),m=o("8237"),p=o("e844"),f=o("32d3"),g=o("b154"),b=o("0a9a"),h=o("58f7");t["a"].use(u["a"]);const v=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>o.e("intro").then(o.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>o.e("tema1").then(o.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>o.e("tema2").then(o.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>o.e("tema3").then(o.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>o.e("tema4").then(o.bind(null,"3eb5"))},{path:"tema5",name:"tema5",component:()=>o.e("tema5").then(o.bind(null,"5029"))}]},{path:"/actividad",name:"actividad",component:()=>o.e("actividad").then(o.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:f["a"]},{path:"/complementario",name:"complementario",component:h["a"]},{path:"/referencias",name:"referencias",component:g["a"]},{path:"/sintesis",name:"sintesis",component:()=>o.e("sintesis").then(o.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:b["a"]}],scrollBehavior(e,a){if(e.hash){const o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise(e=>{setTimeout(()=>{e(o)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var y=v,w=o("2f62");t["a"].use(w["a"]);var A=new w["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:e=>!!e.loading,isMenuOpen:e=>e.menuOpen},mutations:{toggleMenu(e,a){e.menuOpen=a},increment(e){e.loading++},decrease(e){e.loading--}},actions:{toggleMenu({commit:e},a){e("toggleMenu",a)},increment({commit:e}){e("increment")},decrease({commit:e}){e("decrease")}}}),C=o("9ea5"),z={global:{Name:"Aspectos técnicos para el patronaje de calzado",Description:"El componente formativo Aspectos técnicos para el patronaje de calzado, proporciona conocimientos sobre hormas, tipos de patrones, normas de diseño, materiales, estructura y partes del calzado, variaciones según parámetros técnicos, fases de fabricación, ubicación de líneas guía en la horma y estructura anatómica del pie. Se estudiarán sistemas de medidas y adaptaciones para comprender la elaboración de patrones.",imagenBannerPrincipal:o("65fa"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("2cad")},{clases:["banner-principal-decorativo-2"],imagen:o("f533")},{clases:["banner-principal-decorativo-3"],imagen:o("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Anatomía del calzado",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Partes del calzado",hash:"t_1_1"},{numero:"1.2",titulo:"Función de cada parte en el diseño y confort",hash:"t_1_2"},{numero:"1.3",titulo:"Relación entre la anatomía del calzado y el pie",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Tipologías de calzado: características y usos",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Clasificación del calzado según su uso",hash:"t_2_1"},{numero:"2.2",titulo:"Diferencias entre modelos de calzado",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Fases del proceso productivo de calzado",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Diseño y desarrollo del producto",hash:"t_3_1"},{numero:"3.2",titulo:"Corte de materiales",hash:"t_3_2"},{numero:"3.3",titulo:"Desbaste",hash:"t_3_3"},{numero:"3.4",titulo:"Armado del calzado",hash:"t_3_4"},{numero:"3.5",titulo:"Costura del calzado",hash:"t_3_5"},{numero:"3.6",titulo:"Montaje del calzado",hash:"t_3_6"},{numero:"3.7",titulo:" Acabado y control de calidad",hash:"t_3_7"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/dist.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Anatomía del calzado",referencia:"La Horma de tu Negocio (2022). Partes del Calzado. [Archivo de video] Youtube.",tipo:"Video",link:"https://www.youtube.com/watch?v=FaMKTkcDKbo"},{tema:"Tipologías de calzado",referencia:"Motawi, W. (2018). Cómo se hacen los zapatos: Una mirada al interior de una verdadera fábrica de calzado deportivo.",tipo:"Capítulo 1",link:"https://www.google.com.pe/books/edition/C%C3%B3mo_se_hacen_los_zapatos/yYwpEAAAQBAJ?hl=es-419&gbpv=0"},{tema:"Fases del proceso productivo de calzado",referencia:"Centrocalzado. (2012). Proceso para la fabricación del calzado",tipo:"Video",link:"https://www.youtube.com/watch?v=qY6Hl5Gx2HA"}],glosario:[{termino:"Cuero",significado:"material natural obtenido de la piel de animales, principalmente vacuno, que se somete a un proceso de curtido para hacerlo resistente y flexible. Se utiliza en la fabricación de calzado por su durabilidad, confort y capacidad de adaptarse a la forma del pie."},{termino:"Horma",significado:"molde con la forma del pie que se usa en la fabricación de calzado para darle estructura y garantizar un ajuste adecuado. Puede estar hecha de madera, plástico o metal y varía según el tipo de calzado y su finalidad."},{termino:"Patronaje",significado:"es el proceso de diseño y creación de patrones que sirven como base para cortar las piezas de un calzado. A través del patronaje, se definen las formas y dimensiones de los componentes que conformarán el zapato."},{termino:"Sintético",significado:"material artificial fabricado a partir de polímeros como el PVC o el poliuretano, diseñado para imitar características del cuero o de otros materiales naturales. Se usa en calzado por su costo accesible, variedad de diseños y facilidad de mantenimiento."},{termino:"Textil",significado:"material compuesto por fibras naturales (algodón, lino, lana) o sintéticas (poliéster, nylon) que se utiliza en la fabricación de calzado, especialmente en modelos deportivos y casuales, debido a su ligereza y transpirabilidad."}],referencias:[{referencia:"Arias Navarro, A., & Acevedo Ramírez, G. (1998). Patronaje, modelado y escalado de calzado.",link:""},{referencia:"Bossan, M. J. (2007). El arte del zapato (S. Caballero, Trad.). Edimat Libros.",link:""},{referencia:"García Macias, A. (1957). Arte y técnica del patronaje y modelaje del calzado. Editorial Dossat.",link:""},{referencia:"Motawi, W. M., & Motawi, A. M. (2021). Patronaje de calzado y diseño de hormas. Wade Motawi.",link:""},{referencia:"Vass, L., & Molnár, M. (1999). Zapatos de caballero hechos a mano. Konemann.",link:""},{referencia:"Zambrano, L. C. (1990). Bloque modular 1: Preparación de avíos para calzado. Módulo instruccional 1: Estructura del pie – Proporciones y medidas. CEFAD, Regional Bogotá.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Líder del Ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de Línea de Producción Huila",centro:"Dirección General"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Elkin Darío Fontecha Pard",cargo:"Experto temático",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Paola Alexandra Moya",cargo:"Evaluadora Instruccional",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Diana Milena Picón Rincón",cargo:"Diseñador de Contenidos Digitales",centro:"Regional Antioquia - Centro de Formación Centro de Servicios de Salud."},{nombre:"Cielo Damaris Angulo Rodriguez",cargo:"Desarrollador Fullstack",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Alejandro Delgado Acosta",cargo:"Intérprete Lenguaje de señas",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Cristhian Giovanni Gordillo Segura",cargo:"Intérprete Lenguaje de señas",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Daniela Muñoz Bedoya",cargo:"Animador y Productor Multimedia",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Andrés Felipe Guevara Ariza",cargo:"Locución",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."}]},{titulo:"GESTORES DE REPOSITORIO",autores:[{nombre:"Aixa Natalia Sendoya Fernández",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Jaime Hernán Tejada Llano",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Raúl Mosquera Serrano",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Regional Huila - Centro Agroempresarial y Desarrollo Pecuario."}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}};o("a3a0");const D=o("9224");t["a"].use(C["a"],{config:z,packageJson:D}),new t["a"]({router:y,store:A,render:e=>e(d)}).$mount("#app")},"5b70":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-3.a053c223.png"},"5ccd":function(e,a,o){e.exports=o.p+"img/audio.058779f0.svg"},"65fa":function(e,a,o){e.exports=o.p+"img/banner-principal.fac6c768.png"},"7a82":function(e,a,o){e.exports=o.p+"img/aumentar.4890ae42.svg"},9224:function(e){e.exports=JSON.parse('{"name":"SENA-2025","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^6.5.1","@popperjs/core":"^2.11.8","aos":"^2.3.4","bootstrap":"^5.3.2","font-awesome":"^4.7.0","ecored-pkg-fliz":"0.0.5","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a3a0:function(e,a,o){},a724:function(e,a,o){e.exports=o.p+"img/reducir.68fb49e8.svg"},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.61f8b530.png"},e1f5:function(e,a,o){e.exports=o.p+"img/creditos-cc.4836eb56.svg"},ef52:function(e,a,o){e.exports=o.p+"img/creditos-img.689712e2.svg"},f034:function(e,a,o){e.exports=o.p+"img/pause.8df843e4.svg"},f533:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-2.0d106894.png"},f5ad:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"}});
//# sourceMappingURL=app.9a37236d.js.map