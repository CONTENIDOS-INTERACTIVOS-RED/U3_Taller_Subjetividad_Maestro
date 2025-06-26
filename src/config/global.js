export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'El castigo en las relaciones familiares',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Situaciones de maltrato infantil en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y tipos de maltrato infantil',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Realidad del maltrato infantil en Colombia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Narrativas y casos significativos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Marco legal sobre el maltrato infantil en Colombia',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia del castigo en la infancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Orígenes culturales del castigo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Naturalización del castigo en la crianza',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Persistencia del castigo en la actualidad',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Discursos institucionales y religiosos sobre el castigo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alternativas formativas al castigo en la infancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Disciplina positiva y crianza respetuosa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Educación emocional en la infancia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Rol del adulto en la transformación de las prácticas de crianza',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Estrategias de mediación y resolución de conflictos en la infancia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Martín Hernández, J. (2019). Ideología y maltrato infantil: (ed.). Herder Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/118725',
    },
    {
      referencia:
        'Aracena, M. (2005). Resiliencia al maltrato físico infantil: variables que diferencian a los sujetos que maltratan y no maltratan físicamente a sus hijos en el presente y que tienen una historia de maltrato físico en el pasado: (ed.). Red Revista de Psicología.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/10789',
    },
    {
      referencia:
        'Ramos Ramos, P. (Coord.). (2018). Maltrato infantil: conocimiento y prevención: (2 ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106180',
    },
    {
      referencia:
        'Moreno Manso, J. M. (2006). Etiología del maltrato infantil: estilo educativo, prácticas de crianza y contexto social: (ed.). Red Psicología y Salud.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/18496',
    },
    {
      referencia:
        'Santana-Tavira, R., Sánchez-Ahedo, R., & Herrera-Basto, E. (1998). El maltrato infantil: un problema mundial. Salud pública de México, 40, 58-65.',
      link: 'https://www.scielosp.org/pdf/spm/1998.v40n1/58-65/es',
    },
    {
      referencia:
        'Pérez Fuentes, G., & González Pérez, J. (1995). Violencia en el niño. La Habana: Ponencia Taller de Violencia.',
      link: 'http://scielo.sld.cu/pdf/mgi/v17n1/mgi11101.pdf',
    },
    {
      referencia:
        'Sánchez Salas, D. F. (2019). Maltrato infantil en Colombia: una revisión desde el modelo sistémico.',
      link:
        'https://digitk.areandina.edu.co/bitstream/areandina/4338/1/Proyecto%20de%20grado.pdf',
    },
    {
      referencia:
        'Carrillo Urrego, A. (2020). Discursos y prácticas en torno a la aplicación de castigos disciplinarios en la crianza de las hijas y los hijos, en un sector popular de la Ciudad de México: (ed.). Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170524',
    },
    {
      referencia:
        'López, M. Á. N. (2016). Educación y renovación pedagógica en la antigua Roma. Tendencias pedagógicas, (27), 125-140.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5342031',
    },
    {
      referencia:
        'Londoño, J. V. E., Alzate, M. N. G., & Rueda, S. A. M. (2016). Mirada pedagógica a la concepción de infancia y prácticas de crianza como alternativa para refundar la educación infantil. Revista virtual universidad católica del norte, (47), 64-81.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7795668',
    },
    {
      referencia:
        'Bosch, A. C., Tornaría, M. D. L. G., Mels, C., & Navarrete, I. (2022). Castigo físico: argumentos y justificaciones de padres y madres para su utilización. Summa Psicológica UST, 19(2), 3.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9523315',
    },
    {
      referencia:
        'Campos, J. R. O. (2023). El humanismo en la era de los derechos humanos. Revista de la Facultad de Derecho de México, 73(287), 291-308.',
      link:
        'https://revistas.unam.mx/index.php/rfdm/article/download/87075/76283/265616',
    },
    {
      referencia:
        'Lassi, M. S. (2008). Maltrato infantil: uso efectivo del castigo como estrategia educativa. In XV Jornadas de Investigación y Cuarto Encuentro de Investigadores en Psicología del Mercosur. Facultad de Psicología-Universidad de Buenos Aires.',
      link: 'https://www.aacademica.org/000-032/452.pdf',
    },
    {
      referencia:
        'Guembe Mañer, P. & Goñi Zubieta, C. (2014). Educar sin castigar: qué hacer cuando mi hijo se porta mal: (ed.). Editorial Desclée de Brouwer.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/113695',
    },
    {
      referencia:
        'Huamán Niño, I. E., & Lariena Olazaba, A. (2022). Enfoque de la disciplina positiva en la primera infancia y su influencia en la educación (Doctoral dissertation, Escuela de Educación Superior Pedagógica Privada ITS Innova Teaching School).',
      link: 'https://repositorio.its.edu.pe/handle/20.500.14360/11',
    },
    {
      referencia:
        'Coto, M. G., & Cubillo, N. S. (2020). Crianza Respetuosa: Hacia una parentalidad centrada en las niñas y los niños. Revista Estilos de vida, 20(1), 428-450.',
      link: 'https://revistas.ucr.ac.cr/index.php/estilos/article/view/44887',
    },
    {
      referencia:
        'Leva, M. (2005). Neuropsicología de la emoción. Particularidades en la infancia. Revista Argentina de Neuropsicología, 6(1), 41-48.',
      link: 'https://www.aacademica.com/download/53773454/Paper_de_Emocion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abuso emocional',
      significado:
        'Forma de maltrato infantil que afecta la autoestima y el bienestar emocional de los niños mediante actitudes despectivas, humillantes o manipulativas.',
    },
    {
      termino: 'Castigo físico',
      significado:
        'Método de disciplina que implica el uso de la fuerza física para corregir la conducta de un niño, como golpes, bofetadas o cualquier tipo de agresión corporal.',
    },
    {
      termino: 'Castigo psicológico',
      significado:
        'Acción de infligir daño emocional a un niño, como humillaciones, amenazas o aislamiento, que afecta su bienestar emocional.',
    },
    {
      termino: 'Crianza respetuosa',
      significado:
        'Enfoque educativo que se basa en el respeto mutuo, la empatía y la comunicación positiva entre padres e hijos, evitando el uso de castigos físicos o humillantes.',
    },
    {
      termino: 'Disciplina positiva',
      significado:
        'Estrategias educativas que buscan enseñar a los niños y niñas a través del respeto y la empatía, sin recurrir a la violencia ni al castigo.',
    },
    {
      termino: 'Discriminación',
      significado:
        'Actitudes o comportamientos que marginan o rechazan a personas por su raza, género, discapacidad, entre otros, que pueden influir en el desarrollo emocional de los niños.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender y compartir los sentimientos de los demás, un elemento clave para el manejo adecuado de las emociones en la educación infantil.',
    },
    {
      termino: 'Maltrato infantil',
      significado:
        'Abuso físico, emocional o negligencia hacia un niño que afecta su desarrollo y bienestar. Puede incluir abuso sexual, físico y psicológico.',
    },
    {
      termino: 'Negligencia',
      significado:
        'Falta de cuidado y atención básica hacia un niño, como la omisión en la alimentación, la educación, la protección y el apoyo emocional.',
    },
    {
      termino: 'Pedagogía emocional',
      significado:
        'Método educativo que busca enseñar a los niños y niñas a reconocer, comprender y gestionar sus emociones, fomentando su bienestar emocional.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de los niños para superar situaciones adversas o traumáticas, como el maltrato, y desarrollarse de manera saludable pese a estas experiencias.',
    },
    {
      termino: 'Relación afectiva',
      significado:
        'Vínculo emocional y de confianza que se establece entre los niños y sus figuras de cuidado (padres, maestros) que favorece su desarrollo social y emocional.',
    },
    {
      termino: 'Vínculo familiar',
      significado:
        'La relación emocional y afectiva que se establece entre los miembros de una familia, fundamental para el desarrollo de los niños.',
    },
    {
      termino: 'Violencia intrafamiliar',
      significado:
        'Cualquier acto de violencia que ocurre dentro del núcleo familiar, que afecta a uno o más miembros, incluyendo a los niños y niñas.',
    },
  ],
}
