export default {
  global: {
    Name: 'Aspectos técnicos para el patronaje de calzado',
    Description:
      'El componente formativo Aspectos técnicos para el patronaje de calzado, proporciona conocimientos sobre hormas, tipos de patrones, normas de diseño, materiales, estructura y partes del calzado, variaciones según parámetros técnicos, fases de fabricación, ubicación de líneas guía en la horma y estructura anatómica del pie. Se estudiarán sistemas de medidas y adaptaciones para comprender la elaboración de patrones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Anatomía del calzado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Partes del calzado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Función de cada parte en el diseño y confort',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipologías de calzado: características y usos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación del calzado según su uso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diferencias entre modelos de calzado',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Materiales e insumos para calzado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cueros',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sintéticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Textiles',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Suelas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fases del proceso productivo de calzado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diseño y desarrollo del producto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Corte de materiales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Desbaste',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Armado del calzado',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Costura del calzado',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Montaje del calzado',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: ' Acabado y control de calidad',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fichas técnicas de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de la ficha técnica de diseño',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Usos de la ficha técnica de diseño',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Anatomía del calzado',
      referencia:
        'La Horma de tu Negocio (2022). Partes del Calzado. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FaMKTkcDKbo',
    },
    {
      tema: 'Tipologías de calzado',
      referencia:
        'Motawi, W. (2018). Cómo se hacen los zapatos: Una mirada al interior de una verdadera fábrica de calzado deportivo.',
      tipo: 'Capítulo 1',
      link:
        'https://www.google.com.pe/books/edition/C%C3%B3mo_se_hacen_los_zapatos/yYwpEAAAQBAJ?hl=es-419&gbpv=0',
    },
    {
      tema: 'Fases del proceso productivo de calzado',
      referencia:
        'Centrocalzado. (2012). Proceso para la fabricación del calzado',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qY6Hl5Gx2HA',
    },
  ],
  glosario: [
    {
      termino: 'Cuero',
      significado:
        'material natural obtenido de la piel de animales, principalmente vacuno, que se somete a un proceso de curtido para hacerlo resistente y flexible. Se utiliza en la fabricación de calzado por su durabilidad, confort y capacidad de adaptarse a la forma del pie.',
    },
    {
      termino: 'Horma',
      significado:
        'molde con la forma del pie que se usa en la fabricación de calzado para darle estructura y garantizar un ajuste adecuado. Puede estar hecha de madera, plástico o metal y varía según el tipo de calzado y su finalidad.',
    },
    {
      termino: 'Patronaje',
      significado:
        'es el proceso de diseño y creación de patrones que sirven como base para cortar las piezas de un calzado. A través del patronaje, se definen las formas y dimensiones de los componentes que conformarán el zapato.',
    },
    {
      termino: 'Sintético',
      significado:
        'material artificial fabricado a partir de polímeros como el PVC o el poliuretano, diseñado para imitar características del cuero o de otros materiales naturales. Se usa en calzado por su costo accesible, variedad de diseños y facilidad de mantenimiento.',
    },
    {
      termino: 'Textil',
      significado:
        'material compuesto por fibras naturales (algodón, lino, lana) o sintéticas (poliéster, nylon) que se utiliza en la fabricación de calzado, especialmente en modelos deportivos y casuales, debido a su ligereza y transpirabilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias Navarro, A., & Acevedo Ramírez, G. (1998). Patronaje, modelado y escalado de calzado.',
      link: '',
    },
    {
      referencia:
        'Bossan, M. J. (2007). El arte del zapato (S. Caballero, Trad.). Edimat Libros.',
      link: '',
    },
    {
      referencia:
        'García Macias, A. (1957). Arte y técnica del patronaje y modelaje del calzado. Editorial Dossat.',
      link: '',
    },
    {
      referencia:
        'Motawi, W. M., & Motawi, A. M. (2021). Patronaje de calzado y diseño de hormas. Wade Motawi.',
      link: '',
    },
    {
      referencia:
        'Vass, L., & Molnár, M. (1999). Zapatos de caballero hechos a mano. Konemann.',
      link: '',
    },
    {
      referencia:
        'Zambrano, L. C. (1990). Bloque modular 1: Preparación de avíos para calzado. Módulo instruccional 1: Estructura del pie – Proporciones y medidas. CEFAD, Regional Bogotá.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elkin Darío Fontecha Pard',
          cargo: 'Experto temático',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picón Rincón',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Antioquia - Centro de Formación Centro de Servicios de Salud.',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Huila - Centro Agroempresarial y Desarrollo Pecuario.',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
