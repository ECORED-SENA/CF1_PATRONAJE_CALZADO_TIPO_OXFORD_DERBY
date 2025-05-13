<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-9
            .row
              .col-lg-2
                figure
                  img(src='@/assets/curso/intro/3.png', alt='')
              .col-lg-10
                p.mb-5 El patronaje de calzado es un proceso fundamental en la fabricación de zapatos, ya que permite transformar un diseño en patrones precisos que servirán de base para su producción. Comprender los aspectos técnicos del patronaje es esencial para garantizar la calidad, comodidad y funcionalidad del calzado, asegurando un ajuste adecuado al pie y optimizando el proceso de fabricación.
            .bg-color-1.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/intro/1.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Este componente formativo proporciona conocimientos detallados sobre la estructura del calzado, los tipos de patrones, los materiales utilizados y las normas de diseño. Además, aborda la relación entre la anatomía del pie y la ergonomía del calzado, aspectos clave para lograr productos que se adapten a las necesidades del usuario.
            
            
            p(data-aos="fade-left") También se estudian los sistemas de medidas y las adaptaciones requeridas para garantizar un correcto ajuste. A lo largo del componente, se explorarán las distintas fases de la fabricación del calzado, desde el diseño y corte hasta el ensamblaje y acabado final. Esto permitirá a los aprendices desarrollar competencias en la creación y modelado de patrones, comprendiendo cada etapa del proceso productivo y aplicando criterios técnicos para la elaboración de calzado de calidad.
          .col-lg-3.d-none.d-sm-block
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    

</template>

<script>
export default {
  name: 'Introduccion',
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
