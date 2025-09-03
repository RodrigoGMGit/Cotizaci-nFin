import { CheckCircle2, CalendarClock, FileText, LineChart, PencilRuler, Rocket, ShieldCheck, Users, CircleDot, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "rodrigotec15@gmail.com";

const STRINGS = {
  proyecto: "Proyecto Hogares Seguros",
  cotizacion_para: "Cotización para Fin de la Esclavitud",
  hero_title: "Cotización para Fin de la Esclavitud",
  hero_subtitle: "Mediante este micrositio les quiero dar a conocer la propuesta, entender las fases, ver los entregables y cómo cada etapa nos acerca a la meta: llevar este contenido a las familias de forma clara y útil.",
  duracion_estimada: "Duración estimada: 15 días hábiles",
  tecnologia_compatible: "Tecnología: compatible con su sitio actual",
  ver_fases: "Ver fases",
  hablar_ahora: "Hablar ahora",
  como_navegar: "Cómo navegar esta propuesta",
  navegar_1: "Revisa el objetivo y cómo mediremos el impacto.",
  navegar_2: "Explora cada fase con su lista de entregables y criterios de aceptación.",
  navegar_3: "Consulta el cronograma y el plan de pagos.",
  navegar_4: "Al aprobar, este micrositio mostrará el avance en vivo.",
  objetivo_eyebrow: "Por qué este proyecto",
  objetivo_title: "Objetivo y resultado esperado",
  meta_title: "Meta",
  meta_text: "Diseñar una experiencia digital que impacte a madres, padres y cuidadores, con contenidos prácticos para proteger a sus hijas e hijos frente a los riesgos de la trata de personas en entornos digitales.",
  como_lo_haremos_title: "Cómo lo haremos",
  como_lo_haremos_text: "Cuestionarios breves para conocer su situación y que nos conozcan, y una experiencia didáctica digital —clara y paso a paso— que transmita el contenido y guíe a la acción.",
  como_mediremos_title: "Cómo mediremos",
  como_mediremos_text: "Utilizaremos herramientas de analítica para registrar eventos clave (por ejemplo, inicio y fin de cuestionarios, descargas y solicitudes de apoyo), evaluar el éxito de la iniciativa y comprender mejor a nuestra audiencia.",
  fases_eyebrow: "Cotización para Fin de la Esclavitud",
  fases_title: "Fases del trabajo",
  entregables_eyebrow: "Paquete de entregables",
  entregables_title: "Qué recibirás",
  cronograma_eyebrow: "De inicio a lanzamiento",
  cronograma_title: "Cronograma estimado",
  cronograma_text: "Las fechas exactas se confirman al inicio y se irán actualizando aquí mismo.",
  contacto_eyebrow: "Siguiente paso",
  contacto_title: "¿Listos para comenzar?",
  contacto_text: "Con tu confirmación iniciamos de inmediato y compartimos el plan de arranque y el acceso al tablero de avances.",
  reunion_inicial: "Reunión inicial: 60–90 min",
  canales: "Canales: Email y WhatsApp",
  entrega: "Entrega: Roadmap vivo",
  descargar_propuesta: "Descargar propuesta (PDF)",
  exportar_pdf: "Exportar como PDF",
  presupuesto_eyebrow: "Información económica",
  presupuesto_title: "Presupuesto y condiciones",
  total_descuentos: "Total con descuentos (IVA incluido)",
  total_descuentos_valor: "$35,000 MXN",
  costo_base: "Costo base",
  costo_base_valor: "$50,000 MXN",
  descuento: "Descuento Cassandra Murillo (10%)",
  descuento_valor: "- $5,000 MXN",
  donacion: "Donación",
  donacion_valor: "- $10,000 MXN",
  total: "Total",
  total_valor: "$35,000 MXN",
  incluye: "Incluye todas las fases y una ronda de ajustes por fase. El hospedaje del sitio no está incluido.",
  aceptar_contactar: "Aceptar y contactar",
  hitos_pago_title: "Hitos de pago",
  hitos_pago_1: "50% al concluir la construcción (Fase 3)",
  hitos_pago_2: "50% al publicar (Fase 4)",
  servicios_adicionales: "Servicios adicionales (iteraciones extra, videos, SMS/WhatsApp) se cotizan por separado.",
  alcances_supuestos_title: "Alcances y supuestos",
  alcances_supuestos_1: "Textos e imágenes provistos por el cliente (con apoyo editorial ligero)",
  alcances_supuestos_2: "Soporte correctivo 30 días después del lanzamiento",
  alcances_supuestos_3: "Acceso y propiedad de Google Analytics y del código fuente",
  footer_text: "© {new Date().getFullYear()} Proyecto Hogares Seguros — Propuesta de cotización",
  volver_arriba: "Volver arriba",
};
import NavLink from "./components/NavLink";
import Tag from "./components/Tag";
import Card from "./components/Card";
import Section from "./components/Section";
import Phase from "./components/Phase";
import EntregablesCard from "./components/EntregablesCard";

const entregables = {
  "Conocer a la audiencia": [
    "Retrato claro de la audiencia (3–5 perfiles)",
    "Qué ha funcionado: ejemplos y razones",
    "Objetivos de aprendizaje priorizados",
  ],
  "Estrategia y diseño de contenidos": [
    "Esquema del sitio y orden de los temas",
    "Bocetos navegables (móvil y computadora)",
    "Guía visual y ejemplos de pantallas",
  ],
  "Construcción del sitio": [
    "Sitio de prueba",
    "Cuestionarios funcionando y materiales descargables",
    "Medición con analítica (eventos y avances)",
  ],
};

const fases = [
  {
    num: 1,
    title: "Conocer a la audiencia",
    icon: Users,
    summary:
      "Investigamos quiénes son las madres, padres y cuidadores; qué les preocupa sobre la trata de personas en espacios digitales, qué saben y qué les impide actuar.",
    deliverables: [
      "Retrato claro de la audiencia (3–5 perfiles con necesidades y hábitos).",
      "Qué ha funcionado: ejemplos de proyectos similares y por qué dieron resultado.",
      "Objetivos de aprendizaje priorizados (qué deben saber, sentir y hacer).",
      "Recorrido simple: desde que llegan al sitio hasta que toman una acción.",
    ],
    impact:
      "Asegura que el contenido y el tono conecten con las familias correctas y motiven acciones de protección.",
    success:
      "3 perfiles validados; 5–7 objetivos priorizados; recorrido inicial aprobado.",
    needs: [
      "Contactos para 5 entrevistas o encuesta corta.",
      "Revisión de objetivos.",
      "Visto bueno del resumen de iniciativas.",
    ],
  },
  {
    num: 2,
    title: "Estrategia y diseño de contenidos",
    icon: PencilRuler,
    summary:
      "Ordenamos los temas, el tono y el estilo visual; convertimos los objetivos en materiales fáciles de leer y aplicar.",
    deliverables: [
      "Esquema del sitio y orden de los temas.",
      "Bocetos navegables (móvil y computadora).",
      "Guía visual y ejemplos de pantallas.",
      "Criterios de legibilidad y accesibilidad.",
    ],
    impact:
      "Traduce el aprendizaje de Fase 1 en una experiencia clara, rápida y orientada a la acción.",
    success:
      "Mapa del sitio aprobado; 3–6 pantallas clave listas; checklist de accesibilidad definido.",
    needs: [
      "Logos/identidad si existe.",
      "Comentarios sobre los bocetos.",
      "Aprobación del estilo.",
    ],
  },
  {
    num: 3,
    title: "Construcción del sitio",
    icon: FileText,
    summary:
      "Creamos las páginas y los componentes interactivos (cuestionarios, autoevaluación, descargas) y preparamos la medición.",
    deliverables: [
      "Sitio de prueba.",
      "Cuestionarios funcionando y materiales descargables.",
      "Medición con analítica (eventos de cuestionarios, descargas y avances).",
      "Guía para publicar y hacer copias de seguridad.",
    ],
    impact:
      "Convierte los diseños en una herramienta viva que facilita aprender y actuar.",
    success:
      "Todas las secciones operativas; eventos de analítica capturando datos; rendimiento móvil correcto.",
    needs: [
      "Textos/imágenes finales.",
      "Acceso a su cuenta de analítica.",
      "Revisión del ambiente de prueba.",
    ],
  },
  {
    num: 4,
    title: "Pruebas, capacitación y lanzamiento",
    icon: ShieldCheck,
    summary:
      "Probamos con familias reales, corregimos detalles, capacitamos y publicamos el sitio.",
    deliverables: [
      "Informe de pruebas con mejoras aplicadas.",
      "Guía para administrar el sitio + video corto.",
      "Acta de liberación (sitio listo para uso).",
    ],
    impact:
      "Asegura que el sitio sea claro, confiable y listo para operar desde el día uno.",
    success:
      "Tareas clave completadas por usuarios de prueba; administración sin dudas; publicación sin errores.",
    needs: [
      "Participantes para pruebas.",
      "Responsable de contenidos para la capacitación.",
      "Confirmación de fecha de salida.",
    ],
  },
  {
    num: 5,
    title: "Seguimiento y mejora (30 días)",
    icon: LineChart,
    summary:
      "Medimos el impacto y priorizamos mejoras para la siguiente iteración.",
    deliverables: [
      "Tablero de métricas compartido.",
      "Reporte a 30 días con resultados y recomendaciones.",
      "Lista priorizada de mejoras.",
    ],
    impact:
      "Permite aprender de los datos y ajustar rápido para lograr más protección efectiva.",
    success:
      "Métricas clave disponibles; 2–3 mejoras rápidas ejecutables; plan de siguiente ciclo acordado.",
    needs: [
      "Acceso continuo a métricas.",
      "Comentarios del equipo.",
      "Prioridad de mejoras.",
    ],
  },
];

const pagos = [
  { label: "Al concluir la construcción (Fase 3)", value: "50%" },
  { label: "Al publicar (Fase 4)", value: "50%" },
];

export default function MicrositioCotizacionCliente() {



  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="no-print sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600" />
            <span className="font-semibold text-slate-900">{STRINGS.proyecto}</span>
          </div>
          <nav className="hidden md:flex items-center gap-5">
            <NavLink to="inicio">Inicio</NavLink>
            <NavLink to="objetivo">Objetivo</NavLink>
            <NavLink to="fases">Fases</NavLink>
            <NavLink to="entregables">Entregables</NavLink>
            <NavLink to="cronograma">Cronograma</NavLink>
            <NavLink to="contacto">Contacto</NavLink>
            <NavLink to="presupuesto">Presupuesto</NavLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_80%_-20%,rgba(99,102,241,0.15),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                {STRINGS.hero_title}
              </motion.h1>
              <p className="mt-4 text-lg text-slate-700">
                {STRINGS.hero_subtitle}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Tag>{STRINGS.duracion_estimada}</Tag>
                <Tag>{STRINGS.tecnologia_compatible}</Tag>
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href="#fases"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("fases");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  {STRINGS.ver_fases} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <Card className="p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{STRINGS.como_navegar}</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CircleDot className="w-5 h-5 text-indigo-600 mt-0.5" /><span>{STRINGS.navegar_1}</span></li>
                <li className="flex gap-3"><CircleDot className="w-5 h-5 text-indigo-600 mt-0.5" /><span>{STRINGS.navegar_2}</span></li>
                <li className="flex gap-3"><CircleDot className="w-5 h-5 text-indigo-600 mt-0.5" /><span>{STRINGS.navegar_3}</span></li>
                <li className="flex gap-3"><CircleDot className="w-5 h-5 text-indigo-600 mt-0.5" /><span>{STRINGS.navegar_4}</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <Section id="objetivo" title={STRINGS.objetivo_title} eyebrow={STRINGS.objetivo_eyebrow}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3"><Rocket className="w-5 h-5 text-indigo-600" /><h4 className="font-semibold">{STRINGS.meta_title}</h4></div>
            <p className="text-slate-600">{STRINGS.meta_text}</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3"><ShieldCheck className="w-5 h-5 text-indigo-600" /><h4 className="font-semibold">{STRINGS.como_lo_haremos_title}</h4></div>
            <p className="text-slate-600">{STRINGS.como_lo_haremos_text}</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3"><LineChart className="w-5 h-5 text-indigo-600" /><h4 className="font-semibold">{STRINGS.como_mediremos_title}</h4></div>
            <p className="text-slate-600">{STRINGS.como_mediremos_text}</p>
          </Card>
        </div>
      </Section>

      {/* Fases */}
      <Section id="fases" title={STRINGS.fases_title} eyebrow={STRINGS.fases_eyebrow}>
        <div className="grid md:grid-cols-2 gap-6">
          {fases.map((f) => (
            <Phase key={f.num} {...f} />
          ))}
        </div>
      </Section>

      <Section id="entregables" title={STRINGS.entregables_title} eyebrow={STRINGS.entregables_eyebrow}>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(entregables).map(([title, items]) => (
            <EntregablesCard key={title} title={title} items={items} />
          ))}
        </div>
      </Section>

      {/* Cronograma */}
      <Section id="cronograma" title={STRINGS.cronograma_title} eyebrow={STRINGS.cronograma_eyebrow}>
        <Card className="p-6">
          <div className="grid md:grid-cols-5 gap-6">
            <div>
              <div className="font-semibold">Fase 1</div>
              <p className="text-sm text-slate-600">Conocer a las familias</p>
            </div>
            <div>
              <div className="font-semibold">Fase 2</div>
              <p className="text-sm text-slate-600">Estrategia y diseño</p>
            </div>
            <div>
              <div className="font-semibold">Fase 3</div>
              <p className="text-sm text-slate-600">Construcción del sitio</p>
            </div>
            <div>
              <div className="font-semibold">Fase 4</div>
              <p className="text-sm text-slate-600">Pruebas y lanzamiento</p>
            </div>
            <div>
              
              <div className="font-semibold">Fase 5</div>
              <p className="text-sm text-slate-600">Seguimiento y reporte</p>
            </div>
          </div>
        </Card>
        <p className="mt-4 text-sm text-slate-500">{STRINGS.cronograma_text}</p>
      </Section>

      {/* Contacto (antes del precio) */}
      <Section id="contacto" title={STRINGS.contacto_title} eyebrow={STRINGS.contacto_eyebrow}>
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-700">{STRINGS.contacto_text}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Tag>{STRINGS.reunion_inicial}</Tag>
                <Tag>{STRINGS.canales}</Tag>
                <Tag>{STRINGS.entrega}</Tag>
              </div>
            </div>
            <div className="space-y-3 no-print">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700" href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="w-4 h-4"/> {CONTACT_EMAIL}
              </a>
              <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50">
                <FileText className="w-4 h-4"/> {STRINGS.exportar_pdf}
              </button>
            </div>
          </div>
        </Card>
      </Section>

      {/* Presupuesto (al final) */}
      <Section id="presupuesto" title={STRINGS.presupuesto_title} eyebrow={STRINGS.presupuesto_eyebrow}>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <Card className="p-6 flex flex-col">
            <div className="text-sm text-slate-500">{STRINGS.total_descuentos}</div>
            <div className="text-3xl font-extrabold text-slate-900 mt-1">{STRINGS.total_descuentos_valor}</div>
            <div className="mt-3 text-sm text-slate-700 space-y-1">
              <div className="flex items-center justify-between"><span>{STRINGS.costo_base}</span><span>{STRINGS.costo_base_valor}</span></div>
              <div className="flex items-center justify-between text-emerald-700"><span>{STRINGS.descuento}</span><span>{STRINGS.descuento_valor}</span></div>
              <div className="flex items-center justify-between text-emerald-700"><span>{STRINGS.donacion}</span><span>{STRINGS.donacion_valor}</span></div>
              <div className="flex items-center justify-between font-semibold border-t border-slate-200 pt-2"><span>{STRINGS.total}</span><span>{STRINGS.total_valor}</span></div>
            </div>
            <p className="text-slate-600 mt-3">{STRINGS.incluye}</p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {pagos.map((p) => (
                <div key={p.label} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
                  <span className="text-slate-700">{p.label}</span>
                  <span className="font-semibold text-slate-900">{p.value}</span>
                </div>
              ))}
            </div>
            
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2"><CalendarClock className="w-5 h-5 text-indigo-600"/><h4 className="font-semibold">{STRINGS.hitos_pago_title}</h4></div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600"/>{STRINGS.hitos_pago_1}</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600"/>{STRINGS.hitos_pago_2}</li>
            </ul>
            <div className="mt-4 text-sm text-slate-500">{STRINGS.servicios_adicionales}</div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2"><ShieldCheck className="w-5 h-5 text-indigo-600"/><h4 className="font-semibold">{STRINGS.alcances_supuestos_title}</h4></div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600"/>{STRINGS.alcances_supuestos_1}</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600"/>{STRINGS.alcances_supuestos_2}</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-1 text-emerald-600"/>{STRINGS.alcances_supuestos_3}</li>
            </ul>
          </Card>
        </div>
      </Section>

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>{STRINGS.footer_text.replace("{new Date().getFullYear()}", new Date().getFullYear().toString())}</div>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-slate-700">{STRINGS.volver_arriba}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
