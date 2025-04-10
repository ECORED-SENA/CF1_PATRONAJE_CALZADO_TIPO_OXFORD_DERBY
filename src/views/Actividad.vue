<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje de Calzado Oxford y Derby',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los aspectos técnicos del patronaje de calzado, incluyendo su anatomía, materiales, procesos de fabricación y diferencias entre modelos, con base en la información presentada en el documento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal de la capellada en el calzado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Protege la parte inferior del pie.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Brinda soporte en la zona del talón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cubre el pie y define el diseño del calzado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Absorbe los impactos al caminar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica distingue a los zapatos Oxford de los Derby?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los Oxford tienen una estructura cerrada con cordones internos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Los Derby tienen una estructura cerrada con cordones internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los Oxford carecen de cordones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los Derby son de fabricación completamente sintética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes materiales es utilizado comúnmente en la fabricación de calzado por su resistencia y durabilidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuero natural.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Espuma de poliuretano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tela de lino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Caucho sintético.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿En qué etapa del proceso productivo del calzado se realiza la unión de las piezas de la capellada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Corte de materiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costura del calzado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Montaje del calzado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes métodos de corte se emplea por su alta precisión en materiales como cuero y sintéticos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Corte láser.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Troquelado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Corte con tijera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la principal función del cambrión en un zapato?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Amortiguar impactos en la suela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar el ajuste al pie.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la flexibilidad del calzado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener la forma y resistencia del zapato.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de montaje es más común en el calzado deportivo por su flexibilidad y comodidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pegado directo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Montaje Strobel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Montaje con refuerzo metálico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Montaje con costura lateral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes opciones describe correctamente la función de la entresuela en el calzado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Brindar amortiguación y soporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Proteger los cordones de la fricción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir el diseño estético del zapato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que el pie resbale dentro del calzado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La horma es un molde con la forma del pie que se usa en la fabricación de calzado para garantizar un ajuste adecuado.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Los zapatos Derby tienen una estructura cerrada con cordones internos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La suela es la parte del calzado que cubre la parte superior del pie.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La bigotera es una pieza ubicada en el talón del calzado para brindar estabilidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En el desbaste del calzado se busca eliminar impurezas y mejorar la adherencia del pegamento.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El calzado industrial suele fabricarse con materiales resistentes como cuero, caucho y acero para brindar mayor protección.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El montaje con pegado es un método común para unir la capellada a la suela utilizando adhesivos de alta resistencia.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
