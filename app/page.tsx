import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { CTAButton } from './components/CTAButton'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckLeafIcon,
  CircleIcon,
  LeafIcon
} from './components/Icons'
import { Section } from './components/Section'
import { Stat } from './components/Stat'
import { TierCard } from './components/TierCard'

export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-b from-sand to-white'>
      <main className='w-full'>
        {/* Decorative squares at the very top */}
        <div className='flex w-full items-center justify-center border-b border-sand/60 bg-white/70'>
          <div className='flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-10'>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-sm bg-forest/80' />
              <div className='h-3 w-3 rounded-sm bg-sap/80' />
              <div className='h-3 w-3 rounded-sm bg-sage/80' />
              <div className='h-3 w-3 rounded-sm bg-sand' />
            </div>
            <div className='text-[11px] font-medium text-slate/70'>
              Bienestar con evidencia • NOM-035/036/037
            </div>
          </div>
        </div>

        {/* Hero split with gradient orb */}
        <section className='relative isolate w-full overflow-hidden'>
          <div className='mx-auto grid max-w-6xl w-full grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 sm:px-10 sm:py-24'>
            <div className='flex flex-col gap-4 w-full sm:col-span-2'>
              <p className='text-xs font-semibold tracking-widest text-sap uppercase'>
                Lidera • Inspira • Valora
              </p>
              <h1 className='text-4xl font-extrabold leading-tight text-slate sm:text-5xl'>
                Bienestar para tu gente, poder para tu empresa.
              </h1>
              <p className='text-base text-slate/80 sm:text-lg'>
                Consultoría integral en salud ocupacional, bienestar mental y
                cultura organizacional.
              </p>
              <div className='flex flex-wrap items-center gap-4'>
                <CTAButton
                  href='#contacto'
                  ariaLabel='Solicitar diagnóstico LIV'
                >
                  Solicita tu diagnóstico LIV
                </CTAButton>
                <CTAButton
                  href='#metodologia'
                  variant='secondary'
                >
                  Conoce nuestra metodología
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* KPIs / Resultados clave */}
        <section className='mx-auto max-w-6xl px-6 sm:px-10'>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
            <Stat
              label='Reducción de ausentismo'
              value=''
              hint='Medido en 9–12 meses'
            />
            <Stat
              label='Riesgos psicosociales'
              value=''
              hint='NOM-035: prevalencia mod/alta'
            />
            <Stat
              label='Cumplimiento normativo'
              value=''
              hint='NOM-035/036/037'
            />
            <Stat
              label='Retorno/Valor'
              value=''
              hint='Salud y productividad'
            />
          </div>
        </section>

        {/* Sobre LIV */}
        <Section
          id='sobre'
          overline='Sobre LIV'
          title='Equilibrio, ciencia y humanidad'
          subtitle='LIV nació para integrar la salud física, mental, social y espiritual en el corazón de las empresas. Nuestro propósito es elevar el bienestar integral con tecnología, métricas y acompañamiento humano.'
        >
          <div className='grid gap-8 sm:grid-cols-3'>
            <div>
              <h3 className='text-base font-semibold text-slate'>Misión</h3>
              <p className='mt-2 text-sm text-slate/80'>
                Diseñar e implementar soluciones de bienestar físico, mental,
                social y espiritual, alineadas a la normativa mexicana y mejores
                prácticas internacionales, que mejoren la salud, la retención de
                talento y la productividad.
              </p>
            </div>
            <div>
              <h3 className='text-base font-semibold text-slate'>
                Visión (2030)
              </h3>
              <p className='mt-2 text-sm text-slate/80'>
                Ser referente en México y LATAM en programas integrales de
                bienestar con resultados clínicos y de negocio demostrables.
              </p>
            </div>
            <div>
              <h3 className='text-base font-semibold text-slate'>Valores</h3>
              <ul className='mt-2 space-y-1 text-sm text-slate/80'>
                <li>• Evidencia científica</li>
                <li>• Ética y confidencialidad</li>
                <li>• Diversidad e inclusión</li>
                <li>• Impacto medible</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Servicios */}
        <Section
          id='servicios'
          overline='Servicios'
          title='Tres niveles para necesidades reales'
          subtitle='Cumplimiento legal, hábitos saludables, clima laboral y liderazgo sostenible.'
        >
          <div className='grid gap-6 sm:grid-cols-3'>
            <TierCard
              level='LITE'
              title='LITE'
              description=''
              benefits={[]}
              icon={<LeafIcon className='text-forest' />}
              ctaHref='#contacto'
              ctaLabel='Agenda cotización'
            />
            <TierCard
              level='CORE'
              title='CORE'
              description=''
              benefits={[]}
              icon={<CircleIcon className='text-sap' />}
              featured
              ctaHref='#contacto'
              ctaLabel='Agenda cotización'
            />
            <TierCard
              level='PLUS'
              title='PLUS'
              description=''
              benefits={[]}
              icon={<CheckLeafIcon className='text-sage' />}
              ctaHref='#contacto'
              ctaLabel='Agenda cotización'
            />
          </div>
          <p className='pt-3 text-center text-[11px] text-slate/70 sm:text-left'>
            Personalizada conforme a objetivo, tamaño y presupuesto de tu
            empresa.
          </p>
        </Section>

        {/* Sectores */}
        <Section
          id='sectores'
          overline='Sectores que transformamos'
          title='Donde el bienestar acelera el desempeño'
        >
          <div className='grid gap-6 sm:grid-cols-3'>
            <div className='rounded-xl border border-sand bg-white/70 p-5'>
              <h4 className='font-semibold text-slate'>Universidades</h4>
              <p className='mt-1 text-sm text-slate/80'>
                Bienestar estudiantil y docente
              </p>
            </div>
            <div className='rounded-xl border border-sand bg-white/70 p-5'>
              <h4 className='font-semibold text-slate'>Hospitales</h4>
              <p className='mt-1 text-sm text-slate/80'>
                Burnout, turnos, ergonomía clínica
              </p>
            </div>
            <div className='rounded-xl border border-sand bg-white/70 p-5'>
              <h4 className='font-semibold text-slate'>
                Empresas de servicios
              </h4>
              <p className='mt-1 text-sm text-slate/80'>
                Estrés operativo y rendimiento
              </p>
            </div>
          </div>
        </Section>

        {/* Metodología timeline (polished horizontal stepper) */}
        <Section
          id='metodologia'
          overline='Metodología'
          title='Modelo LIV: Diagnóstico • Intervención • Medición continua'
          subtitle='Combinamos ciencia médica, psicología organizacional y analítica de datos para lograr resultados reales.'
        >
          <ol className='flex w-full flex-col items-stretch justify-between gap-6 sm:flex-row'>
            {[
              {
                num: '1',
                title: 'Diagnóstico',
                text: 'Evaluaciones NOM-035/036/037, cuestionarios de bienestar general, estrés, depresión, ansiedad, nutrición y compromiso laboral.'
              },
              {
                num: '2',
                title: 'Intervención',
                text: 'Programas basados en evidencia científica, liderazgo y hábitos saludables personalizados a las necesidades de tus colaboradores.'
              },
              {
                num: '3',
                title: 'Medición',
                text: 'Seguimiento continuo y evaluación de indicadores de éxito'
              }
            ].map(({ num, title, text }, i, arr) => (
              <li
                key={num}
                className='flex flex-1 items-center gap-4'
              >
                <div className='flex items-center gap-4'>
                  <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sap text-xs font-bold text-white ring-4 ring-sand'>
                    {num}
                  </span>
                </div>
                <div className='flex flex-1 flex-col gap-1'>
                  <div className='text-sm font-semibold text-slate'>
                    {title}
                  </div>
                  <div className='text-sm text-slate/80'>{text}</div>
                </div>
                {i < arr.length - 1 && (
                  <>
                    <div className='hidden h-px flex-1 bg-sand sm:block' />
                    <div className='block w-px self-stretch bg-sand sm:hidden' />
                  </>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {/* Resultados */}
        <Section
          id='resultados'
          overline='Resultados y tableros'
          title='El bienestar como dato estratégico'
          subtitle='Medimos ROI, ausentismo, presentismo, rotación, siniestralidad y primas IMSS, clima laboral y biomarcadores para decisiones informadas.'
        >
          <div className='grid items-stretch gap-6 sm:grid-cols-[1.25fr_1fr]'>
            <Card>
              <CardHeader>
                <CardTitle>Vista general (demo)</CardTitle>
                <CardDescription>
                  Indicadores clave de bienestar y desempeño
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sand/70 text-forest'>
                      <ArrowDownIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Ausentismo
                      </span>
                      <span className='text-xs text-slate/70'>
                        Días perdidos y costo
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sand/70 text-forest'>
                      <ArrowDownIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Presentismo
                      </span>
                      <span className='text-xs text-slate/70'>
                        Baja productividad por salud
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sand/70 text-forest'>
                      <ArrowDownIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Rotación
                      </span>
                      <span className='text-xs text-slate/70'>
                        Retención y compromiso
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sand/70 text-forest'>
                      <ArrowDownIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Siniestralidad y primas IMSS
                      </span>
                      <span className='text-xs text-slate/70'>
                        Costos asociados
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4 sm:col-span-2'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/60 text-forest'>
                      <ArrowUpIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Productividad Percibida
                      </span>
                      <span className='text-xs text-slate/70'>
                        Encuestas y tableros
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className='h-full'>
              <CardHeader className='items-center text-center'>
                <CardTitle>Insights</CardTitle>
                <CardDescription>ROI, cohortes y cumplimiento</CardDescription>
              </CardHeader>
              <CardContent className='flex h-full flex-col items-center justify-center gap-3'>
                <div className='grid w-full grid-cols-1 gap-3'>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/60 text-forest'>
                      <CheckLeafIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        ROI/VOI asociado
                      </span>
                      <span className='text-xs text-slate/70'>
                        Por iniciativa y cohorte
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/60 text-forest'>
                      <CheckLeafIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Comparativas avanzadas
                      </span>
                      <span className='text-xs text-slate/70'>
                        Por unidad, turno y líderes
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/60 text-forest'>
                      <CheckLeafIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Cumplimiento y calidad
                      </span>
                      <span className='text-xs text-slate/70'>
                        NOM-035/036/037, ISO 45001/45003
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 rounded-xl border border-sand bg-white/70 p-4'>
                    <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/60 text-forest'>
                      <CheckLeafIcon />
                    </span>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold text-slate'>
                        Privacidad y ética
                      </span>
                      <span className='text-xs text-slate/70'>
                        Confidencialidad y lineamientos
                      </span>
                    </div>
                  </div>
                </div>
                <div className='mt-2 flex justify-center'>
                  <CTAButton href='#contacto'>Ver demo de tableros</CTAButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Productos y tecnología */}
        <Section
          id='productos'
          overline='Productos y desarrollo tecnológico'
          title='Del contenido al software de salud'
          subtitle='LIV diseña, produce y comercializa soluciones de bienestar —desde contenidos educativos y dispositivos médicos, hasta suplementos y software de salud— todo con aval científico y cumplimiento regulatorio.'
        >
          <div className='grid gap-6 sm:grid-cols-3'>
            <div className='rounded-xl border border-sand bg-white/70 p-5'>
              <h5 className='font-semibold text-slate'>
                Contenidos & Formación
              </h5>
              <p className='mt-1 text-sm text-slate/80'>
                Cursos, microlearning y academias corporativas.
              </p>
            </div>
            <div className='rounded-xl border border-sand bg-white/70 p-5'>
              <h5 className='font-semibold text-slate'>
                Dispositivos & Suplementos
              </h5>
              <p className='mt-1 text-sm text-slate/80'>
                Protocolos con soporte científico.
              </p>
            </div>
            <div className='rounded-xl border border-sand bg-white/70 p-5'>
              <h5 className='font-semibold text-slate'>Software & Tableros</h5>
              <p className='mt-1 text-sm text-slate/80'>
                Plataformas de analítica y seguimiento.
              </p>
            </div>
          </div>
          <p className='pt-3 text-center text-[11px] text-slate/70 sm:text-left'>
            Atención de médicos especialistas conforme a necesidades
            particulares
          </p>
        </Section>

        {/* Equipo */}
        <Section
          id='equipo'
          overline='Equipo'
          title='Salud integral con enfoque multidisciplinario'
          subtitle='Medicina preventiva, nutrición, psicología, ergonomía, psiquiatría y ejercicio.'
        />

        {/* Redes sociales */}
        <Section
          id='social'
          overline='Redes sociales'
          title='Síguenos'
          subtitle='Conecta con nuestras novedades y contenido de bienestar.'
        >
          <div className='grid gap-6 sm:grid-cols-3'>
            <a
              href='https://instagram.com/livwell.care'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram @livwell.care'
              className='rounded-xl border border-sand bg-white/70 p-5 transition-colors hover:bg-white'
            >
              <div className='flex items-center gap-3'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-sand/70 text-forest'>
                  <InstagramLogoIcon className='h-4 w-4' />
                </span>
                <div className='flex flex-col'>
                  <span className='font-semibold text-slate'>Instagram</span>
                  <span className='text-sm text-slate/80'>@livwell.care</span>
                </div>
              </div>
            </a>
          </div>
        </Section>

        {/* Contacto / Demo */}
        <Section
          id='contacto'
          overline='Contacto / Demo'
          title='Agenda tu diagnóstico sin costo'
        >
          <div className='grid gap-6 sm:grid-cols-[1fr_1.2fr]'>
            <div className='rounded-2xl border border-sand bg-white/70 p-6'>
              <div className='flex flex-col gap-4'>
                <h4 className='text-lg font-semibold text-slate'>Hablemos</h4>
                <p className='text-sm text-slate/80'>
                  Conoce cómo medir y elevar el bienestar en tu organización.
                </p>
                <div className='flex flex-wrap items-center gap-2'>
                  <span className='inline-flex items-center rounded-full bg-sand/70 px-2 py-1 text-[11px] font-semibold text-slate'>
                    Diagnóstico breve
                  </span>
                  <span className='inline-flex items-center rounded-full bg-sand/70 px-2 py-1 text-[11px] font-semibold text-slate'>
                    Sin compromiso
                  </span>
                  <span className='inline-flex items-center rounded-full bg-sand/70 px-2 py-1 text-[11px] font-semibold text-slate'>
                    30–45 min
                  </span>
                </div>
                <div className='flex flex-wrap items-center gap-3'>
                  <CTAButton href='mailto:contacto.livwell@gmail.com'>
                    Solicitar reunión
                  </CTAButton>
                  <CTAButton
                    href='#resultados'
                    variant='secondary'
                  >
                    Ver tableros
                  </CTAButton>
                </div>
                <p className='text-[11px] text-slate/60'>
                  Protegemos la confidencialidad de tu información.
                </p>
              </div>
            </div>
            <div className='rounded-2xl border border-sand bg-white/70 p-6'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-start gap-3 rounded-xl bg-sand/40 p-3'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-sap/20 text-forest'>
                    <CircleIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-slate'>
                      Cumplimiento
                    </span>
                    <span className='text-xs text-slate/70'>
                      NOM-035/036/037 y certificaciones internacionales de
                      calidad
                    </span>
                  </div>
                </div>
                <div className='flex items-start gap-3 rounded-xl bg-sand/40 p-3'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-sap/20 text-forest'>
                    <CircleIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-slate'>
                      Especialistas
                    </span>
                    <span className='text-xs text-slate/70'>
                      Medicina, psicología, ergonomía, nutrición y ejercicio
                    </span>
                  </div>
                </div>
                <div className='flex items-start gap-3 rounded-xl bg-sand/40 p-3'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-sap/20 text-forest'>
                    <CircleIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-slate'>
                      Tecnología
                    </span>
                    <span className='text-xs text-slate/70'>
                      Software, analítica y contenidos con aval científico
                    </span>
                  </div>
                </div>
                <div className='flex items-start gap-3 rounded-xl bg-sand/40 p-3'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-sap/20 text-forest'>
                    <CircleIcon />
                  </span>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold text-slate'>
                      Cobertura
                    </span>
                    <span className='text-xs text-slate/70'>
                      México y LATAM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      {/* Footer now in RootLayout */}
    </div>
  )
}
