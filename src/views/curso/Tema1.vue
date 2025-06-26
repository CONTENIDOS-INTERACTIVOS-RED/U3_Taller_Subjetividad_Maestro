<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Situaciones de maltrato infantil en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Al iniciar este recorrido formativo, la propuesta es explorar una realidad compleja y dolorosa: las situaciones de maltrato infantil en Colombia. Comprender esta problemática resulta esencial para quien se forma como profesional en educación infantil, dado que implica asumir una postura crítica, ética y comprometida, frente a las vulneraciones que afectan a niños y niñas en diferentes contextos sociales y familiares.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El abordaje de este tema no busca generar temor, sino abrir espacios para la reflexión consciente y la sensibilización. Se invita a observar con atención, las distintas formas de maltrato, desde las más evidentes hasta aquellas que se encuentran normalizadas o invisibilizadas en la vida cotidiana. Reconocerlas es el primer paso para prevenir, actuar y transformar.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2-1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") A través de datos actuales, testimonios significativos y marcos legales vigentes, se orienta la comprensión profunda de esta problemática. Este conocimiento permitirá fortalecer una mirada protectora y respetuosa de la infancia, así como desarrollar herramientas para acompañar a niños y niñas desde el afecto, la escucha activa y el ejercicio pleno de sus derechos.
    
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 Al finalizar este tema, se espera que se cuente con una base sólida para identificar situaciones de maltrato, analizar sus implicaciones y contribuir, desde el rol educativo, a entornos más seguros, amorosos y justos para la niñez.


    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y tipos de maltrato infantil
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 ¿Cómo se transforma la vida de una niña o un niño, cuando quienes deberían cuidarle lo hieren con palabras, gestos o actos que dejan huellas invisibles y profundas?
        p(data-aos="fade-left") Esta es una pregunta difícil, incómoda quizá, pero absolutamente necesaria. Comprender el maltrato infantil va más allá de conocer un concepto: implica abrir los ojos y el corazón para reconocer aquellas prácticas que dañan el alma de la infancia, incluso cuando han sido disfrazadas de “corrección” o “buena educación” (Santana, Sánchez y Herrera, 1998).
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Primero" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Primero
            p Al hablar de maltrato infantil, no se hace referencia únicamente a los golpes, sino también a las palabras que humillan, al silencio que ignora, a la indiferencia que abandona (Martín, 2019). Es necesario detenerse, mirar con atención, y asumir el papel que corresponde como futuro educador o educadora: ser voz protectora, mirada atenta y presencia transformadora.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Segundo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Segundo
            p El maltrato infantil puede definirse como cualquier acción u omisión que cause daño físico, emocional o psicológico a un niño o una niña, ya sea de manera intencional o por negligencia. Este daño puede ser visible, como una herida en la piel, o invisible, como una herida en el alma. El Instituto Colombiano de Bienestar Familiar (ICBF, 2022), explica que el maltrato infantil incluye todas aquellas formas de violencia o descuido que impiden el desarrollo integral y vulneran los derechos fundamentales de la niñez.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Tercero" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Tercero
            p Detrás de cada forma de maltrato, suele haber una historia de dolor, ignorancia, miedo o tradición mal entendida. Por eso, resulta fundamental aprender a reconocer sus tipos, no para etiquetar, sino para comprender y actuar desde el cuidado y la reparación. 
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
    p.mb-4 Durante el encuentro del Grupo de Consulta Regional sobre Maltrato Infantil, llevado a cabo en Brasil en julio de 1992, se caracterizó esta problemática como cualquier acción o comportamiento ejercido por un adulto que afecte de manera negativa el desarrollo físico, psicológico o sexual de un niño o niña (Pérez y González, 1995). Asimismo, se reconoció que el maltrato infantil puede presentarse en múltiples formas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Maltrato físico
              p Según Aracena (2005), se manifiesta cuando un adulto utiliza la fuerza corporal para corregir, castigar o controlar a un niño o una niña, provocando dolor o lesiones. Incluye golpes, jalones, empujones, bofetadas o cualquier otro acto que cause daño físico.
              p <b>Ejemplo.</b> Castigar con correa, empujar por las escaleras, apretar con fuerza los brazos al reprender.
              p <b>Reflexión.</b> A veces, quien agrede lo hace convencido de que “es por su bien”. Pero ningún dolor enseña con amor. El cuerpo de la infancia no debe ser lugar de castigo, sino de protección.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Maltrato emocional o psicológico
              p Este tipo de maltrato, aunque no deja huellas en la piel, puede marcar la vida entera. Gritos, amenazas, humillaciones, indiferencia, burlas o comparaciones destructivas, son formas cotidianas que afectan profundamente la autoestima y el bienestar emocional de un niño o niña.
              p <b>Ejemplo.</b> Decir “usted es un inútil”, ridiculizar frente a otros, o hacer sentir que nunca se es suficiente.
              p <b>Reflexión.</b> Las palabras construyen o destruyen. Un niño o una niña que crece entre gritos y descalificaciones, difícilmente se siente merecedor de amor o de respeto. Educar también es cuidar el lenguaje.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Abuso sexual
              p Se refiere a cualquier acción con contenido sexual hacia una persona menor de edad, sin su comprensión ni consentimiento. Puede involucrar contacto físico (como tocamientos) o no (como exhibicionismo o exposición a pornografía).
              p <b>Ejemplo.</b> Manipulación de genitales, forzar a guardar secretos inapropiados, mostrar imágenes sexuales.
              p <b>Reflexión.</b> El abuso sexual suele ocurrir en silencio, en secreto, muchas veces dentro del círculo familiar o de confianza. La prevención requiere hablar sin miedo, educar sobre el cuerpo, y estar disponibles para escuchar sin juzgar.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Negligencia o abandono
              p Sucede cuando los adultos responsables no satisfacen las necesidades básicas de alimentación, salud, educación, protección o afecto. No siempre es un acto malintencionado, pero sí representa una forma grave de descuido (Moreno, 2006).
              p <b>Ejemplo.</b> Dejar a un niño solo durante largos periodos, no llevarlo al médico, no mostrar interés por su escuela o por su bienestar.
              p <b>Reflexión.</b> La ausencia también duele. Un niño o una niña no solo necesita abrigo y comida, sino también presencia amorosa, atención y tiempo compartido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Explotación laboral o económica
              p Se presenta cuando se obliga a un niño o una niña a trabajar en condiciones que ponen en riesgo su salud, su educación o su desarrollo emocional. Aunque en algunos contextos se justifica como “ayuda”, esta práctica vulnera sus derechos.
              p <b>Ejemplo.</b> Vender dulces en la calle todo el día, trabajar en actividades agrícolas sin protección, cuidar hermanos en lugar de asistir a clase
              p <b>Reflexión.</b> La infancia no está hecha para cargar responsabilidades que no le corresponden. El trabajo infantil no es ayuda: es una forma de abandono que normaliza la desigualdad.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-5.mb-3(data-aos="fade-left")
          p.mb-0 <b>Reflexionemos.</b> Cuando se observa con atención, se comprende que el maltrato infantil no es solo un problema individual, sino también cultural y estructural. Muchas de sus expresiones están tan arraigadas, que cuesta reconocerlas como violencia. Sin embargo, cada vez que se justifica el castigo, cada vez que se ignora un llanto, o se minimiza una agresión, se perpetúa el daño.
        p(data-aos="fade-left") Como educador o educadora en formación, se está llamado a cuestionar, desaprender y construir nuevas formas de acompañar a la niñez. Formar no es imponer, sino cuidar. Educar no es castigar, sino abrir caminos de confianza y respeto mutuos.
    
        
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Realidad del maltrato infantil en Colombia
    
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h5 ¿Qué sucede cuando la infancia se desarrolla entre gritos, golpes, abandono o miedo?
        p(data-aos="fade-left") Esta es una pregunta que nos mueve a reflexionar sobre lo que realmente ocurre en una sociedad cuando los niños y las niñas crecen en ambientes de violencia y desprotección. Más allá de las estadísticas o los titulares sensacionalistas, se trata de vidas humanas, de historias que se ven truncadas desde sus primeros años. 
    
        .bg-color-4.p-5.mb-3(data-aos="fade-left")
          p.mb-0 En Colombia, el maltrato infantil es una realidad que afecta a miles de niños y niñas, y no se trata solo de un problema aislado, sino de un fenómeno complejo que tiene profundas raíces en nuestra historia social, cultural y económica (Sánchez, 2019).
        p Como futuros profesionales de la educación infantil, resulta fundamental no solo conocer las cifras, sino también comprender qué hay detrás de ellas. 
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 ¿Cómo se forma esta realidad? 

          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 ¿Cómo podemos contribuir desde nuestra labor a transformar esta situación? 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Reflexionar sobre estas preguntas es el primer paso para involucrarse de manera activa en la defensa de los derechos de la infancia y para reconocer el impacto que este fenómeno tiene en el desarrollo de los niños y las niñas.
        p El maltrato infantil en Colombia, no es algo nuevo, ni aislado. Aunque los esfuerzos para erradicarlo son constantes, las estadísticas siguen siendo alarmantes. Según el Instituto Nacional de Medicina Legal y Ciencias Forenses (2023), en el primer semestre del año se registraron más de 12.000 casos de maltrato infantil, solo en su modalidad más visible. Sin embargo, muchos casos no son reportados o quedan ocultos bajo el silencio de las familias, lo que hace aún más difícil dimensionar la magnitud del problema.
    
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 Lo que sucede es que el maltrato no tiene una sola cara: se manifiesta de diversas maneras, desde el castigo físico, que algunos consideran como "corrección", hasta el abandono emocional, que puede ser igualmente destructivo. En hogares de diferentes condiciones socioeconómicas, en ciudades y en zonas rurales, niños y niñas sufren diferentes tipos de abuso, y lo peor es que en muchos casos, estas prácticas se ven como normales, casi aceptadas por la sociedad.
    
    h2(data-aos="fade-left") ¿Qué perpetúa el maltrato infantil?
    p.mb-5 Para entender por qué el maltrato infantil sigue siendo tan frecuente, debemos analizar varios factores que lo sostienen en la sociedad colombiana:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Cultura de la violencia como forma de crianza")
            p En muchos hogares, el castigo físico sigue siendo considerado una forma legítima de educar. La frase "la letra con sangre entra" o "un buen correazo a tiempo evita males mayores" son ideas que se han transmitido de generación en generación. El problema es que estas creencias no solo dañan el cuerpo del niño o niña, sino que también afectan su desarrollo emocional y psicológico.
    
          .div(titulo="Desigualdad y pobreza")
            p La pobreza y la falta de oportunidades económicas, tienen un impacto directo en el bienestar de los niños. La falta de recursos, el estrés constante, el desempleo y la falta de acceso a servicios básicos pueden aumentar el riesgo de maltrato. En estos contextos, las necesidades emocionales de los niños a menudo quedan relegadas, dado que los cuidadores están luchando por sobrevivir.
    
          .div(titulo="Falta de apoyo y orientación")
            p En muchas familias, especialmente en las más vulnerables, la crianza se lleva a cabo en un entorno de soledad. Sin el acompañamiento adecuado de redes sociales, familiares o institucionales, los cuidadores a menudo repiten los mismos patrones de violencia que vivieron en su propia infancia, sin saber que existen alternativas más saludables.
    
          .div(titulo="Desconfianza hacia las instituciones")
            p Aunque existen rutas de protección para las víctimas de maltrato, muchas personas desconocen cómo activarlas, o temen represalias por denunciar. Esta desconfianza limita las oportunidades de intervención a tiempo y, en consecuencia, muchas víctimas no reciben la ayuda que necesitan.
    
    h2(data-aos="fade-left") ¿Qué consecuencias tiene el maltrato infantil?
    p.mb-5 El maltrato no es solo un daño momentáneo, sino que deja huellas profundas en el desarrollo de los niños y niñas. Las consecuencias pueden ser físicas, emocionales y psicológicas:

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/17.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="16.5%" y="66.5%" numero="+")
                h5 Problemas emocionales
                p La falta de cariño y el abuso físico o psicológico afectan el sentido de seguridad emocional de los niños, lo que puede dar lugar a problemas de autoestima, ansiedad y depresión.
    
              .bg-color-white.box-shadow.p-3(x="97%" y="49%" numero="+")
                h5 Dificultades de aprendizaje
                p Los niños que crecen en ambientes violentos suelen presentar problemas en su rendimiento escolar, puesto que el estrés y la angustia dificultan su capacidad para concentrarse, aprender y relacionarse con sus compañeros.
    
              .bg-color-white.box-shadow.p-3(x="3%" y="50%" numero="+")
                h5 Relaciones sociales conflictivas
                p Los niños maltratados suelen tener dificultades para establecer relaciones saludables. La desconfianza, la agresividad y la dificultad para regular las emociones son algunos de los efectos secundarios del maltrato.
    
    h2(data-aos="fade-left") ¿Cómo contribuir desde la educación infantil?
    p.mb-5 Como futuros educadores, el papel que juegan en la protección de los niños y las niñas, es clave. Aunque no podemos reemplazar a las autoridades ni intervenir directamente en todos los casos, sí podemos contribuir de manera significativa en la creación de entornos seguros, afectivos y protectores. Algunas acciones concretas incluyen:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Crear un entorno seguro en el aula
              p El aula debe ser un lugar donde los niños se sientan respetados, valorados y escuchados. Es fundamental que puedan expresarse libremente y sentir que sus emociones y necesidades son atendidas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Promover la crianza positiva en las familias
              p A través de talleres, charlas y orientaciones, los educadores pueden ofrecer a las familias herramientas para educar desde el amor y el respeto, alejándose de la violencia como medio para corregir.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Detectar señales de maltrato
              p Los educadores deben estar alertas a las señales de abuso o negligencia, y saber cómo actuar, según los protocolos establecidos para proteger a los niños y las niñas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fomentar el trabajo en red
              p Colaborar con otras instituciones como el ICBF o organizaciones comunitarias para garantizar que los niños reciban la atención necesaria y que se logre una respuesta integral ante el maltrato.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-5.mb-3(data-aos="fade-left")
          p.mb-0 <b>Reflexionemos.</b> Hablar del maltrato infantil en Colombia, no es fácil. Las estadísticas nos muestran una realidad dura, pero lo que verdaderamente importa es lo que podemos hacer con esa información. Como educadores, tienen el poder de marcar la diferencia en la vida de un niño o una niña. Cada acción, cada gesto, cada palabra puede ser un paso más hacia un mundo donde los niños crezcan en paz, seguros y rodeados de amor.
        p(data-aos="fade-left") Transformar la realidad del maltrato infantil requiere de todos nosotros. No es solo una cuestión de intervención, sino de prevención, de generar conciencia y de actuar con amor, respeto y compromiso. Porque cada niño y niña que protege un educador, cada aula que se convierte en un refugio, es una semilla que crece para cambiar el mundo (Ramos, 2018).
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Narrativas y casos significativos  
    
    p.mb-4 La reflexión sobre el uso del castigo en la infancia permite cuestionar prácticas educativas arraigadas y proponer alternativas más respetuosas y empáticas.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Narrativas y casos significativos
            p.mb-4(data-aos="fade-right") En el PDF <b>Narrativas y casos significativos</b>, se analizan historias reales que evidencian el impacto negativo del castigo en el desarrollo emocional de los niños, así como estrategias educativas basadas en la disciplina positiva, la educación emocional y el diálogo, que fortalecen vínculos y promueven una convivencia más saludable. Este enfoque invita a repensar el rol del educador como guía sensible y consciente del bienestar infantil.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Narrativas y casos significativos.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/23.png', alt='')
    
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Marco legal sobre el maltrato infantil en Colombia 
    
    p.mb-4 La comprensión del maltrato infantil desde una perspectiva legal es esencial para avanzar hacia una crianza respetuosa y libre de violencia.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Marco legal sobre el maltrato infantil en Colombia
            p.mb-4(data-aos="fade-right") En el PDF <b>Marco legal sobre el maltrato infantil en Colombia</b>, se examina cómo el marco normativo colombiano, especialmente el Código de Infancia y Adolescencia, establece medidas de protección integral para los niños y prohíbe expresamente el uso del castigo físico. A través de esta lectura, se invita a reflexionar sobre el papel transformador de la ley en la cultura de la crianza y la importancia de promover prácticas educativas basadas en el respeto, la empatía y el bienestar infantil.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Marco legal sobre el maltrato infantil en Colombia.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/24.png', alt='')
     



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/43441 " target="_blank" rel="noopener noreferrer") Sánchez Sánchez, T. (2014). Maltrato de género, infantil y de ancianos: ( ed.). Universidad Pontificia de Salamanca. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/78972 " target="_blank" rel="noopener noreferrer") Jofré, G. D. (2017). Niñas y niños en la justicia: abuso sexual en la infancia: ( ed.). Editorial Maipue. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/112799 " target="_blank" rel="noopener noreferrer") Pérez Galdós, S. (Comp.) & Utrilla, M. (Comp.). (2013). Figuras de la violencia en la sociedad actual: violencia de género, acoso laboral, maltrato infantil: ( ed.). Biblioteca Nueva. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://scielo.sld.cu/scielo.php?pid=S0864-21252003000100009&script=sci_arttext " target="_blank" rel="noopener noreferrer") Francia Reyes, M. E. (2003). Maltrato infantil: Un problema de todos. Revista Cubana de Medicina General Integral, 19(1), 0-0. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?pid=S1657-92672010000300016&script=sci_arttext" target="_blank" rel="noopener noreferrer") Carreño, C. I., & Rey, A. (2010). Reflexiones en torno a la comprensión del maltrato infantil. Universitas Psychologica, 9(3), 807-822.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=usP3JJBM-RY  " target="_blank" rel="noopener noreferrer") Periódico desdeabajo. (2020, 4 de septiembre). La violencia sistémica contra niños y niñas no para en Colombia [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GgIZb9Eu1bI" target="_blank" rel="noopener noreferrer") Cecilio Cean. (2023, 26 de abril). Hablemos del maltrato infantil [Video]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rYmixOihmr0 " target="_blank" rel="noopener noreferrer") SOM Salud Mental 360. (2022, 15 de junio). La prevención del maltrato infantil en las escuelas [Video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
