<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fases del proceso productivo de calzado


    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fabricación de calzado es un proceso que involucra varias etapas, desde el diseño hasta el acabado final. Cada fase es crucial para garantizar un producto de calidad, cómodo y funcional. A continuación, se explican las principales etapas de la producción de calzado.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Diseño y desarrollo del producto

    p.mb-5 En esta primera fase del proceso se define la estética, funcionalidad y estructura del calzado. Este proceso incluye:

    .bg-full-width.bg-fondo-7
      .p-4.p-md-5
        .carousel-bg

          .row.justify-content-center.align-items-center.my-5

            .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")

              figure
                img(src='@/assets/curso/tema3/2.png', alt='', style="max-width: 300px").mx-auto
      
            .col-lg-8
      
              SlyderF.mb-5(columnas="col-lg-6")(data-aos="zoom-in-up")

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/3.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  .bg-color-8.d-inline-block.px-2.py-1.mb-3
                    h4.text-center.mb-0.text-color-black #[strong Registro en el ICA]
                  p.text-center Todos los alimentos, suplementos, sales mineralizadas, plaguicidas, fertilizantes e insumos agrícolas deben tener registro en el ICA.

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/4.svg', alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  .bg-color-8.d-inline-block.px-2.py-1.mb-3
                    h4.text-center.mb-0.text-color-black #[strong Bocetos]
                  p.text-center Se analizan modas, colores, materiales y necesidades del mercado.

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/5.svg', alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  .bg-color-8.d-inline-block.px-2.py-1.mb-3
                    h4.text-center.mb-0.text-color-black #[strong Elaboración de patrones]
                  p.text-center Se generan moldes en papel o software especializado, que servirán como base para el corte de materiales.

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/6.svg', alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  .bg-color-8.d-inline-block.px-2.py-1.mb-3
                    h4.text-center.mb-0.text-color-black #[strong Desarrollo de prototipos]
                  p.text-center Se elaboran prototipos para verificar que el calzado cumple con las especificaciones técnicas del producto y se ajustas de ser necesario.
                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/7.svg', alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  .bg-color-8.d-inline-block.px-2.py-1.mb-3
                    h4.text-center.mb-0.text-color-black #[strong Pruebas de ajuste y ergonomía]
                  p.text-center Se desarrollan muestras físicas para verificar la comodidad y el ajuste antes de la producción masiva.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Corte de materiales

    p.mb-5 El proceso de corte es la primera etapa en la fabricación del calzado, donde se obtienen las piezas que conformarán la parte superior (capellada) y otras secciones.

    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5       
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Cuero natural
                  p.mt-4 Material flexible, resistente y transpirable. Brinda durabilidad y un acabado elegante, común en calzado formal y de alta calidad.
              .col-lg-4
                img(src='@/assets/curso/tema3/8.png', style="max-width: 479px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Sintéticos (PU, PVC)
                  p.mt-4 Alternativas económicas y ecológicas al cuero. Son ligeros, fáciles de limpiar y resistentes al agua, ideales para calzado casual e industrial.
              .col-lg-4
                img(src='@/assets/curso/tema3/9.png', style="max-width: 479px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Textiles (lona, malla, microfibra)
                  p.mt-4 Materiales transpirables y ligeros, empleados en calzado deportivo y casual. Ofrecen comodidad y adaptabilidad al pie.
              .col-lg-4
                img(src='@/assets/curso/tema3/10.png', style="max-width: 479px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Espumas y refuerzos
                  p.mt-4 Proporcionan amortiguación, comodidad y estructura al calzado. Se utilizan en plantillas, suelas y refuerzos internos para mejorar la ergonomía.
              .col-lg-4
                img(src='@/assets/curso/tema3/11.png', style="max-width: 479px").mx-auto


    br
    .titulo-tres.mb-4(data-aos="flip-up")
      h4(data-aos="fade-up") Métodos de corte

    p.mb-5 Existen diversas técnicas para el corte de materiales en la fabricación de calzado. Cada método ofrece ventajas según el tipo de material y el nivel de precisión requerido.
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Manual")
        .row.align-items-center
          .col-md-6
            figure.p-4
              img(src='@/assets/curso/tema3/13.png', alt='', style='max-width: 520px;').mx-auto
          .col-md-6.mb-4.mb-md-0
            h4 Manual
            p Uso de tijeras o cuchillas para cortar piezas siguiendo plantillas de papel o cartón.

      .py-3.py-md-4(titulo="Troquelado")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure.p-4
              img(src='@/assets/curso/tema3/12.png', alt='', style='max-width: 520px;')
          .col-md-6
            h4 Troquelado
            p Empleo de moldes de acero afilados (troqueles) que, mediante presión, cortan las piezas con alta precisión.

      .py-3.py-md-4(titulo="Corte láser")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure.p-4
              img(src='@/assets/curso/tema3/14.png', alt='', style='max-width: 520px;')
          .col-md-6
            h4 Corte láser
            p Tecnología de precisión utilizada en materiales como cuero, sintéticos y textiles.

      .py-3.py-md-4(titulo="Corte automatizado")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure.p-4
              img(src='@/assets/curso/tema3/15.png', alt='', style='max-width: 520px;')
          .col-md-6
            h4 Corte automatizado
            p Corte programado con cuchilla oscilante que ofrece mayor precisión.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Desbaste

    p.mb-5 El desbaste es una etapa clave en la fabricación del calzado, ya que prepara las piezas para su ensamblaje y pegado. Este proceso consiste en rebajar, lijar o desgastar los bordes del cuero para mejorar la adherencia del pegamento y garantizar una unión firme entre las piezas.

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .div(titulo="Objetivos")
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Eliminar impurezas en los bordes del material.
              li 
                i.fas.fa-check
                | Reducir el grosor en zonas específicas para facilitar el ensamblaje.
              li 
                i.fas.fa-check
                | Mejorar la adhesión del pegamento o adhesivos.
              li 
                i.fas.fa-check
                | Asegurar una mejor calidad estética del producto final.
    
          .div(titulo="Proceso")
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | #[strong Selección de piezas:] Identificación de las áreas a desbastar, como la suela, el corte o las uniones.
              li 
                i.fas.fa-check
                | #[strong Control de presión y grosor:] Aplicación precisa de la presión para evitar daños en el material.
              li 
                i.fas.fa-check
                | #[strong Limpieza:] Eliminación de residuos generados antes de continuar con la fabricación.
    
          .div(titulo="Herramientas utilizadas")
            p Uso de maquinaria desbastadora y cuchillas para lograr un acabado preciso.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/16.png", alt="").mb-4.mb-lg-0
    
    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4  Armado del calzado

    p.mb-5 El armado es el proceso en el que se ensamblan las distintas partes de la capellada antes de la costura. Esta etapa es fundamental para garantizar la estabilidad y durabilidad del calzado.


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-8
        .row.align-items-center.justify-content-center
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3/17.png", alt="").mb-4.mb-lg-0
          .col-lg-6
            .row.justify-content-center.align-items-stretch.mb-4
              .col-lg
                .tarjeta.bg-color-13.h-100
                  .bg-color-12.px-4.px-lg-5.py-3.rounded-top
                    h4.mb-0.text-center Pegado provisional
                  p.mb-0.p-4 Se usa adhesivo temporal para posicionar las piezas antes de coserlas.
            
            .row.justify-content-center.align-items-stretch
              .col-lg
                .tarjeta.bg-color-8.h-100
                  .bg-color-7.px-4.px-lg-5.py-3.rounded-top
                    h4.mb-0.text-center Unión de refuerzos y forros
                  p.mb-0.p-4 Se agregan materiales internos para dar estructura y mejorar la durabilidad.

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5  Costura del calzado

    p.mb-5 La costura es una etapa esencial en la fabricación del calzado, ya que une las piezas de la capellada, proporcionando forma y resistencia. Existen diferentes tipos de costura según el material y la funcionalidad requerida.


    .bg-full-width.bg-fondo-8.mb-5
      .p-4.p-md-5
        .row.align-items-center.justify-content-center

          .col-lg-6
            .row.justify-content-center.align-items-stretch.mb-4
              .col-lg
                .tarjeta.bg-color-14.h-100.box-shadow
                  .bg-color-1.px-4.px-lg-5.py-3.rounded-top
                    h4.mb-0.text-center Costura simple
                  p.mb-0.p-4 Unión de dos piezas con una línea recta de puntadas, utilizada en estructuras básicas.
            
            .row.justify-content-center.align-items-stretch.mb-4
              .col-lg
                .tarjeta.bg-color-14.h-100.box-shadow
                  .bg-color-1.px-4.px-lg-5.py-3.rounded-top
                    h4.mb-0.text-center Costura doble (doble pespunte)
                  p.mb-0.p-4 Refuerzo adicional para unir materiales gruesos, mejorando la resistencia y durabilidad.

            .row.justify-content-center.align-items-stretch
              .col-lg
                .tarjeta.bg-color-14.h-100.box-shadow
                  .bg-color-1.px-4.px-lg-5.py-3.rounded-top
                    h4.mb-0.text-center Costura en zigzag
                  p.mb-0.p-4 Aporta mayor elasticidad en materiales sintéticos y textiles, evitando rupturas por tensión.


          .col-lg-4
            figure
              img(src="@/assets/curso/tema3/18.png", alt="").mb-4.mb-lg-0

    .titulo-tres.mb-4(data-aos="flip-up")
      h4(data-aos="fade-up") Máquinas de coses utilizadas

    p.mb-5 En la fabricación del calzado se emplean diferentes tipos de máquinas de coser, cada una diseñada para cumplir funciones específicas según la estructura y material del calzado.
    

    TabsC.color-acento-contenido.mb-5
      .p-3.p-md-4(titulo="Máquinas de codo")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Máquinas de codo
            p Facilitan la costura en zonas curvas del calzado, permitiendo un mejor ajuste en áreas difíciles de alcanzar.
          .col-md-6.order-1.d-none.d-md-block
            figure.p-4
              img(src='@/assets/curso/tema3/19.png', alt='Máquina de codo', style='max-width: 520px;')

      .p-3.p-md-4(titulo="Máquinas de columna o poste")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Máquinas de columna o poste
            p Brindan mayor maniobrabilidad en materiales rígidos, lo que facilita el ensamblaje en calzado estructurado.
          .col-md-6.order-1.d-none.d-md-block
            figure.p-4
              img(src='@/assets/curso/tema3/20.png', alt='Máquina de columna', style='max-width: 520px;')

      .p-3.p-md-4(titulo="Máquinas de doble aguja")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Máquinas de doble aguja
            p Generan costuras reforzadas, especialmente utilizadas en calzado industrial y deportivo para mayor resistencia.
          .col-md-6.order-1.d-none.d-md-block
            figure.p-4
              img(src='@/assets/curso/tema3/21.png', alt='Máquina de doble aguja', style='max-width: 520px;')
              figcaption.text-center Imagen tomada de: Maquina de poste dos agujas. (s. f.)

      .p-3.p-md-4(titulo="Máquina de costura sobrehilada")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0.order-2
            h4 Máquina de costura sobrehilada
            p Realiza costuras en zigzag o sobrehilado para unir la capellada con la plantilla o reforzar los bordes del corte mediante la inserción de un cordón o pita.
          .col-md-6.order-1.d-none.d-md-block
            figure.p-4
              img(src='@/assets/curso/tema3/22.png', alt='Máquina de costura sobrehilada', style='max-width: 520px;')
              figcaption.text-center Imagen tomada de: Maquina sobrehiladora. (s. f.)

    Separador

    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6  Montaje del calzado

    p.mb-5 El montaje es la fase en la que la capellada se ajusta a la horma para darle la forma final al zapato y unirla a la suela. Existen distintos métodos de montaje según el tipo de calzado y el nivel de flexibilidad requerido.

    

    #SliderA-2.bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5       
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Montaje Strobel
                  p.mt-4 Utilizado en calzado deportivo, consiste en coser la capellada a una plantilla flexible antes de añadir la suela, proporcionando mayor comodidad y flexibilidad.
              .col-lg-4
                img(src='@/assets/curso/tema3/23.png', style="max-width: 479px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Montaje String
                  p.mt-4 Variante del Strobel en la que la capellada se une a la plantilla mediante un cordón pasado a lo largo de su contorno, lo que otorga mayor resistencia y flexibilidad.
              .col-lg-4
                img(src='@/assets/curso/tema3/24.png', style="max-width: 479px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Montaje con pegado
                  p.mt-4 Se adhiere la capellada a la suela utilizando pegamento de alta resistencia, asegurando una fijación firme y duradera.
              .col-lg-4
                img(src='@/assets/curso/tema3/25.png', style="max-width: 479px").mx-auto

    .titulo-tres.mb-4(data-aos="flip-up")
      h4(data-aos="fade-up") Proceso de montaje paso a paso

    p.mb-5 El montaje del calzado sigue una serie de etapas que garantizan la correcta fijación de la capellada a la suela, asegurando la durabilidad y comodidad del producto.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3
        .bg-color-2.h-100
          .bg-color-11.px-4.px-lg-5.py-3
            h4.mb-0.text-center.text-white Colocación de <br>la horma
          p.mb-0.p-4 La capellada se ajusta a una horma con la forma deseada para darle estructura.

      .col-lg-3
        .bg-color-2.h-100
          .bg-color-11.px-4.px-lg-5.py-3
            h4.mb-0.text-center.text-white Tensado y <br>fijación
          p.mb-0.p-4 Se estiran las pieza para eliminar arrugas y se fijan con clavos o adhesivos.
      .col-lg-3
        .bg-color-2.h-100
          .bg-color-11.px-4.px-lg-5.py-3
            h4.mb-0.text-center.text-white Unión de <br>la suela
          p.mb-0.p-4 La suela se adhiere mediante pegado, costura o vulcanización, dependiendo del tipo de calzado.,

      .col-lg-3
        .bg-color-2.h-100
          .bg-color-11.px-4.px-lg-5.py-3
            h4.mb-0.text-center.text-white Prensado y moldeado final
          p.mb-0.p-4 Se aplica calor y presión para mejorar la adherencia y dar el acabado final,

    Separador

    #t_3_7.titulo-segundo.color-acento-contenido
      h2 3.7  Acabado y control de calidad

    p.mb-5 Esta fase final garantiza que el calzado cumpla con los estándares de calidad y tenga un acabado estético adecuado antes de su distribución.
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/26.png', alt='')
        .col-lg
          .p-4
          ul.lista-ul--color.color-secundario
              li 
                i.fas.fa-cut
                | #[strong Pulido y limpieza.] Eliminación de restos de pegamento e imperfecciones para mejorar la presentación. 
              li 
                i.fas.fa-cut
                | #[strong Verificación de costuras y adherencia.] Inspección de las uniones entre suela y capellada para evitar desprendimientos. 
              li 
                i.fas.fa-cut
                | #[strong Pruebas de flexión y resistencia.] Evaluación de la durabilidad del calzado simulando su uso real. 

              li 
                i.fas.fa-cut
                | #[strong Empaque y etiquetado.] Colocación de etiquetas y empaques antes del almacenamiento y distribución.

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
