<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Anatomía del calzado
 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La anatomía del calzado se refiere a la estructura y las partes que componen un zapato, cada una con una función específica que influye en la comodidad, durabilidad y estética del producto. Comprender la anatomía del calzado es fundamental para su diseño y fabricación, ya que permite elegir materiales adecuados, definir procesos de ensamblaje y garantizar el ajuste correcto al pie del usuario.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Partes del calzado

    p.mb-5 El calzado está compuesto por diversas partes que cumplen funciones específicas para brindar comodidad, soporte y diseño. Cada elemento tiene un propósito particular, ya sea proteger el pie, mejorar el ajuste o garantizar la durabilidad del zapato. A continuación, se describen las principales partes del calzado y su importancia en la estructura y funcionalidad del mismo.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 1.
              span Partes estructurales de un zapato  
                  
            figure
              img(src='@/assets/curso/tema1/f1.png', alt='Diagrama estructural de un zapato desglosado en sus diferentes partes. Se identifican componentes como la lengüeta, la capellada, la cordonera, la entresuela, el cambrillón, la plantilla estructural, la suela, el tacón y la tapa, cada uno señalado con etiquetas descriptivas.', style='width: 820px;').mx-auto

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .div(titulo="Capellada")
            p Parte superior del calzado que cubre el pie y define su diseño. Puede estar hecha de cuero, tela o materiales sintéticos.
    
          .div(titulo="Cordonera")
            p Zona del calzado con ojales o perforaciones por donde pasan los cordones, permitiendo el ajuste al pie.
    
          .div(titulo="Lengüeta")
            p Ubicada debajo de los cordones, protege el pie del contacto con los ojales y ajustes.
    
          .div(titulo="Entresuela")
            p Capa intermedia entre la suela y la plantilla, diseñada para mejorar la amortiguación en ciertos tipos de calzado.

          .div(titulo="Plantilla estructural")
            p Pieza ubicada sobre la suela y debajo de la plantilla de confort, que aporta soporte, estabilidad y distribución del peso.
  

    .row.align-items-start.mb-5

      .col-lg-8
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .div(titulo="Cambrión")
            p Refuerzo en la parte media del calzado, entre la suela y la plantilla estructural, que mantiene la forma y resistencia del zapato.

          .div(titulo="Suela")
            p Parte inferior del calzado que entra en contacto con el suelo, fabricada con materiales resistentes para mayor durabilidad y tracción.

          .div(titulo="Tacón")
            p Parte trasera y elevada del calzado, fabricada con diversos materiales (madera, plástico, goma, etc.), que proporciona altura, soporte y estabilidad.

          .div(titulo="Tapa")
            p Parte inferior del tacón en contacto con el suelo, hecha de materiales resistentes a la fricción, como caucho o plástico, para evitar desgaste y mejorar la tracción.
      
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mt-4.mt-lg-0


    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        p.mb-5 El zapato se compone de diversas secciones que cumplen funciones específicas en términos de ajuste, comodidad y protección. A continuación, se presentan sus partes externas más relevantes:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2.
              span  Partes externas de un zapato
                  
            figure
              img(src='@/assets/curso/tema1/f2.png', alt='Diagrama de las partes externas de un zapato, donde se destacan componentes como la cordonera, la capellada, la puntera y el talón. Cada parte está señalada con etiquetas explicativas.', style='width: 820px;').mx-auto


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .div(titulo="Cordonera")
            p Zona del calzado con ojales o perforaciones por donde pasan los cordones, permitiendo el ajuste al pie.
    
          .div(titulo="Puntera")
            p Parte frontal del calzado que protege los dedos. Su diseño varía según el tipo de zapato, brindando diferentes niveles de protección, confort y estilo.
    
          .div(titulo="Talón")
            p Parte trasera del calzado que envuelve y protege la zona del talón del pie, proporcionando soporte y estabilidad.

    p.mb-5 Los zapatos pueden presentar variaciones en su diseño, especialmente en la capellada, lo que influye en su estética y funcionalidad. A continuación, se describen algunas partes clave en su construcción:

    .bg-full-width-2.bg-fondo-4.mb-5
      .px-4.px-md-5.pb-md-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span  Comparación de diseños en la capellada del calzado
              
        figure
          img(src='@/assets/curso/tema1/f3.png', alt='Ilustración comparativa de dos diseños de capellada en calzado. El primer diseño incluye elementos como la cordonera, la capellada y la bigotera, mientras que el segundo diseño resalta la capellada y la chapeta.', style='width: 1240px;').mx-auto


    .row.align-items-start.mb-5#aco-3

      .col-lg-8

        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .div(titulo="Capellada")
            p Corresponde a la parte superior del zapato que cubre el empeine y el dorso del pie. Su diseño puede variar según el tipo de calzado.

          .div(titulo="Bigotera")
            p Pieza de refuerzo ubicada en el empeine que proporciona soporte, mejora el ajuste y aporta diseño.

          .div(titulo="Chapeta")
            p Pieza ubicada en la parte superior del empeine, generalmente en la zona de la cordonera o lengüeta, que refuerza y mejora el ajuste.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mt-4.mt-lg-0


    .bg-full-width-2.bg-fondo-5.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 4.
              span  Partes principales de una bota
                  
            figure
              img(src='@/assets/curso/tema1/f4.png', alt='Diagrama de una bota que identifica sus partes principales. Se destacan la caña, ubicada en la parte superior; el talón, en la parte trasera inferior; y la capellada, en la zona frontal del calzado.', style='width: 610px;').mx-auto


    .row.align-items-start.mb-5#aco-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .div(titulo="Capellada")
            p Parte superior de la bota que cubre el pie y define su diseño. Puede estar hecha de cuero, tela o materiales sintéticos.
    
          .div(titulo="Caña")
            p Parte de la bota que cubre la pierna, brindando protección, soporte y diseño. Su altura varía según el tipo de bota.
    
          .div(titulo="Talón")
            p Parte trasera de la bota que envuelve y protege la zona del talón del pie, proporcionando soporte y estabilidad.

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Refuerzos y elementos de soporte


    p.mb-5 Algunas partes del calzado mejoran la estabilidad y durabilidad:


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .tarjeta.bg-color-2.h-100
          .bg-color-1.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Contrafuerte
          p.mb-0.p-4 Refuerzo en la parte trasera que proporciona estabilidad al talón.

      .col-lg-4
        .tarjeta.bg-color-4.h-100
          .bg-color-3.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Puntera
          p.mb-0.p-4 Refuerzo en la parte frontal que protege los dedos, especialmente en zapatos de seguridad.

      .col-lg-4
        .tarjeta.bg-color-2.h-100
          .bg-color-1.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Ojetes o pasadores
          p.mb-0.p-4 Aberturas para los cordones, que permiten ajustar el calzado al pie.

    p.mb-5 Estas partes pueden variar dependiendo del tipo de calzado (formal, deportivo, industrial, etc.).

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Función de cada parte en el diseño y confort

    p.mb-5 Cada componente del calzado tiene una función clave en la estructura y comodidad del zapato:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/7.svg"
            alt=""
            style="width: 90px"
          )
          h4.mb-4.text-center Diseño y estética
          p.mb-0.text-center La capellada define la apariencia visual del calzado.
    
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/8.svg"
            alt=""
            style="width: 90px"
          )
          h4.mb-4.text-center Soporte y estabilidad
          p.mb-0.text-center La suela y la entresuela proporcionan equilibrio y amortiguación.
    
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/9.svg"
            alt=""
            style="width: 90px"
          )
          h4.mb-4.text-center Protección
          p.mb-0.text-center Elementos como la plantilla estructural, puntera y contrafuerte evitan lesiones y refuerzan el calzado.
    
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        .tarjeta.bg-color-6.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/10.svg"
            alt=""
            style="width: 90px"
          )
          h4.mb-4.text-center Ajuste y comodidad
          p.mb-0.text-center El forro, la plantilla y la lengüeta reducen la fricción y mejoran la experiencia del usuario.

    //- Separador

    //- #t_1_3.titulo-segundo.color-acento-contenido
    //-   h2 1.3  Relación entre la anatomía del calzado y el pie

    //- p.mb-5 El calzado debe adaptarse a la estructura del pie para evitar molestias o problemas de salud. Para ello, es fundamental considerar:

    
    //- .row.justify-content-center.align-items-stretch.mb-5
    //-   .col-lg-4
    //-     .tarjeta.bg-color-8.h-100
    //-       .bg-color-7.px-4.px-lg-5.py-3.rounded-top
    //-         h4.mb-0.text-center Forma del pie
    //-       p.mb-0.p-4 Existen diferentes tipos de arcos (alto, medio y plano) que influyen en la elección del calzado.

    //-   .col-lg-4
    //-     .tarjeta.bg-color-10.h-100
    //-       .bg-color-9.px-4.px-lg-5.py-3.rounded-top
    //-         h4.mb-0.text-center Movilidad y presión
    //-       p.mb-0.p-4 El diseño de la suela y la entresuela debe distribuir la presión de manera uniforme.

    //-   .col-lg-4
    //-     .tarjeta.bg-color-2.h-100
    //-       .bg-color-1.px-4.px-lg-5.py-3.rounded-top
    //-         h4.mb-0.text-center Tamaño y ajuste
    //-       p.mb-0.p-4 Un calzado inadecuado puede generar ampollas, juanetes o fatiga muscular.
    

    //- p.mb-5 El estudio detallado de la anatomía del calzado es clave para la fabricación de productos que brinden comodidad, seguridad y funcionalidad, adaptándose a las necesidades del usuario, es por ello que es importante reconocer la estructura básica del pie.

    //- .bg-full-width-2.bg-fondo-6
    //-   .px-4.px-md-5.pb-md-3
    //-     .row.justify-content-center.align-items-center.mb-5.pb-4
    //-       .col-lg-6
    //-         figure
    //-           img(src="@/assets/curso/tema1/11.png", alt="").mx-auto.d-block
                  

    //-     .titulo-tres.mb-4(data-aos="flip-up")
    //-       h4(data-aos="fade-up") Clasificación según la forma del pie.

    //- p.mb-5 Los pies presentan variaciones en su forma y estructura, lo que permite clasificarlos según distintos criterios. Uno de los más utilizados es la longitud de los dedos, ya que influye en la distribución del peso y la estabilidad al caminar. A continuación, se describen las principales tipologías de pies según su forma.
    

    //- figure.mb-5.pb-4
    //-   .video
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    //- .titulo-tres.mb-4(data-aos="flip-up")
    //-   h4(data-aos="fade-up") Clasificación según el tipo de arco plantar

    //- p.mb-5 El arco plantar es la curvatura ubicada en la parte interna del pie y desempeña un papel clave en la distribución del peso y la absorción del impacto al caminar o correr.
    

    //- TabsC.color-acento-contenido.mb-5
    //-   .py-3.py-md-4(titulo="Pie normal o arco medio")
    //-     .row.align-items-center
    //-       .col-md-6
    //-         figure.p-4
    //-           img(src='@/assets/curso/tema1/12.png', alt='', style='max-width: 520px;').mx-auto
    //-       .col-md-6.mb-4.mb-md-0
    //-         h4 Pie normal o arco medio
    //-         p Presenta una curvatura moderada. Distribuye bien el peso y la presión al caminar.

    //-   .py-3.py-md-4(titulo="Pie plano (arco bajo)")
    //-     .row.align-items-center
    //-       .col-md-6.mb-4.mb-md-0
    //-         figure.p-4
    //-           img(src='@/assets/curso/tema1/13.png', alt='', style='max-width: 520px;')
    //-       .col-md-6
    //-         h4 Pie plano (arco bajo)
    //-         p La curvatura es mínima o inexistente, haciendo que casi toda la planta toque el suelo. Puede generar problemas de postura y dolor en pies o rodillas.

    //-   .py-3.py-md-4(titulo="Pie cavo (arco alto)")
    //-     .row.align-items-center
    //-       .col-md-6.mb-4.mb-md-0
    //-         figure.p-4
    //-           img(src='@/assets/curso/tema1/14.png', alt='', style='max-width: 520px;')
    //-       .col-md-6
    //-         h4 Pie cavo (arco alto)
    //-         p El arco es muy pronunciado, dejando un espacio elevado entre la planta y el suelo. Puede causar mayor presión en el talón y metatarso, generando dolor o problemas de estabilidad.

    //-   .py-3.py-md-4(titulo="<em>Hallux Valgus</em> (Juanete)")
    //-     .row.align-items-center
    //-       .col-md-6.mb-4.mb-md-0
    //-         figure.p-4
    //-           img(src='@/assets/curso/tema1/15.png', alt='', style='max-width: 520px;')
    //-       .col-md-6
    //-         h4 <em>Hallux Valgus</em> (Juanete)
    //-         p El dedo gordo se inclina hacia el segundo dedo, formando una protuberancia ósea en la base del dedo. Puede causar dolor, inflamación y enrojecimiento. También puede derivar en deformidades como dedos en garra o superposición de dedos.

    //- br
    //- .titulo-tres.mb-4(data-aos="flip-up")
    //-   h4(data-aos="fade-up") Clasificación según la pisada

    //- p La pisada se define por la forma en que el pie entra en contacto con el suelo al caminar o correr, influyendo en la estabilidad y distribución del peso.


    //- .row.justify-content-center.mb-5
    //-   .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
    //-     .tarjeta.crd_hover_txt(data-aos="flip-left")
    //-       .crd_hover_txt--img
    //-         figure3
    //-           img(src="@/assets/curso/tema1/16.png", alt="alt")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-white Pisada neutra
    //-         p.mb-0.text-white El peso se distribuye de manera equilibrada desde el talón hasta los dedos. Es la más eficiente y saludable.

    //-   .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
    //-     .tarjeta.crd_hover_txt(data-aos="flip-left")
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema1/17.png", alt="alt")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-white Pisada pronadora
    //-         p.mb-0.text-white El pie tiende a inclinarse hacia adentro al caminar. Es común en personas con pie plano y puede causar desgaste excesivo en la parte interna del calzado.

    //-   .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
    //-     .tarjeta.crd_hover_txt(data-aos="flip-left")
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema1/18.png", alt="alt")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-white Pisada supinadora
    //-         p.mb-0.text-white El pie se inclina hacia afuera al caminar. Es más frecuente en personas con pie cavo y puede generar problemas en tobillos y rodillas.


    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
