# Patria Ingeniería - sitio corporativo

Proyecto local en Next.js 15, React 19 y TypeScript. La navegación reúne **Quiénes somos, Soluciones, Portafolio, Proyectos, Noticias, Contáctanos y Vacantes**. El catálogo permite buscar, filtrar, ordenar y paginar con parámetros en la URL. Contacto y hojas de vida usan una API de correo; WhatsApp aparece al configurar un número confirmado. El aviso de cookies guarda la preferencia y se puede reabrir desde el pie de página.

El diseño combina una portada oscura con fotografía, tarjetas claras y los colores del logo de Patria. La portada muestra tres escenas que avanzan automáticamente cada 6,5 segundos y permite elegir una escena o pausar el movimiento. Al abrir el sitio se muestra la breve animación de carga con el símbolo de Patria; se omite si el dispositivo solicita movimiento reducido. El mapa ilustrativo animado incluye la dirección pública de Dromos como referencia visual, identificada claramente para no confundirla con una sede de Patria. La paleta de interfaz usa `#01557B`, `#4F565E`, `#CCD1D4`, `#000000` y el blanco del logo. La [guía de estilos](./styles/README.md) y el [muestrario](./styles/palette.svg) explican los colores y los archivos CSS.

## Iniciar

```bash
npm install
npm run dev
```

Abre la dirección que muestre la terminal, normalmente `http://localhost:3000`. Para comprobar la versión de producción:

```bash
npm run build
npm run start
```

## Configurar el correo

Los formularios de `/contacto` y `/vacantes` envían a `POST /api/messages`. La API valida campos, autorización y archivos; admite HV en PDF, DOC o DOCX de hasta 5 MB. El destinatario temporal es `flomestudio@gmail.com`. **El sitio solo muestra éxito cuando Resend acepta el envío.**

1. Crea una cuenta en [Resend](https://resend.com/docs/send-with-nextjs), añade un dominio remitente y completa sus registros DNS hasta que aparezca verificado.
2. Crea una API key con permiso para enviar correos. Copia `.env.example` a `.env.local`.
3. En `.env.local`, define `RESEND_API_KEY`, `EMAIL_FROM` con una dirección del dominio verificado y `MESSAGES_TO_EMAIL`. No pongas la clave en una variable `NEXT_PUBLIC_` ni subas `.env.local` a GitHub.
4. Reinicia el servidor de desarrollo. Envía un contacto de prueba y una HV de prueba; comprueba el buzón y la carpeta de spam.
5. En el hosting, configura las tres variables como secretos del proyecto y repite las pruebas en la URL pública.

Sin clave o remitente verificado, el servidor responde con error de configuración; no finge un envío. No se ha hecho una prueba de entrega real porque este proyecto no contiene esas credenciales.

## Configurar WhatsApp

1. Confirma con la empresa el número que **sí** tiene WhatsApp activo. Un teléfono publicado en un directorio no basta para asumirlo.
2. En `.env.local`, define `NEXT_PUBLIC_WHATSAPP_NUMBER` en formato internacional, solo dígitos: código de país + número, sin `+`, espacios ni guiones. Para Colombia, el formato empieza por `57`.
3. Reinicia `npm run dev`. Se mostrarán el acceso flotante, el enlace del pie y las acciones de Contacto. Prueba el enlace en móvil y en WhatsApp Web.
4. Añade la misma variable al hosting y vuelve a desplegar. Si está vacía o tiene un formato inválido, los accesos a WhatsApp se ocultan.

El enlace usa el formato oficial [`wa.me`](https://faq.whatsapp.com/5913398998672934) y abre un mensaje prellenado. No envía el mensaje automáticamente; el visitante decide si lo envía.

## Catálogo y parámetros de búsqueda

El portafolio está en `/portafolio`. Ejemplos:

```text
/portafolio?q=materiales
/portafolio?categoria=vial&orden=nombre-desc
/portafolio?categoria=materiales&pagina=2
```

Los parámetros `q`, `categoria`, `orden` y `pagina` se leen en el servidor y se preservan al navegar por categorías y páginas. La búsqueda ignora diferencias entre letras con y sin tilde. Cada línea tiene su propia ruta `/portafolio/[slug]`; el enlace de regreso conserva los filtros y la consulta a Contacto prellena el asunto. El contenido editable está en `lib/portfolio.ts` y la lógica de filtros en `lib/portfolio-search.ts`. Las fichas no contienen precios, existencias ni normas inventadas. Las imágenes del nuevo catálogo están descritas en [`public/images/portfolio/README.md`](./public/images/portfolio/README.md) y se sirven con `next/image`.

## Cookies

El aviso guarda `patria_cookie_consent` durante seis meses con `SameSite=Lax`. La elección se puede modificar desde **Configurar cookies** en el pie de página. Esta versión no carga analítica ni publicidad, independientemente de la preferencia. Si se añaden esas herramientas, hay que condicionarlas a la elección del usuario y actualizar `/politica-cookies` antes de publicar.

## Contenido real y datos pendientes

La razón social, Bucaramanga y las actividades económicas del texto institucional se basan en el [directorio empresarial de La República vinculado a RUES](https://empresas.larepublica.co/colombia/santander/bucaramanga/patria-ingenieria-pavimentos-y-agregados-s-a-s-901978990). La descripción comercial es una propuesta editorial. No se atribuyen a Patria años de experiencia, cifras de obra, certificaciones, productos específicos, inventario ni vacantes sin soportes. Las fotos son ilustrativas. La ubicación animada de la portada muestra como referencia el [Km 3.8, Zona Industrial Balsillas, Mosquera, de Dromos](https://dromos.co/); **no es una dirección verificada de Patria**. Antes de publicar el sitio oficial, reemplaza esta dirección y el enlace al mapa en `components/home/location-section.tsx`.

Antes de publicar como sitio oficial, solicita y reemplaza:

| Información | Archivo o lugar |
| --- | --- |
| Descripción, servicios y alcance aprobados | `app/quienes-somos/page.tsx`, `lib/content.ts` |
| Productos, fichas, fotografías y disponibilidad | `lib/portfolio.ts`, `public/images/` |
| Noticias y artículos reales | `lib/content.ts`, `app/noticias/` |
| Vacantes confirmadas | `lib/content.ts` |
| Número de WhatsApp | `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Correo corporativo definitivo | `config/site.ts`, `MESSAGES_TO_EMAIL` |
| Política de tratamiento de datos aprobada | `app/empresa/[section]/page.tsx` |

El envío de HV requiere especial cuidado con la política de datos y su periodo de conservación. Los adjuntos se transmiten por correo y no se guardan en una base de datos del proyecto. Antes de abrir el sitio al público, añade protección contra abuso y aprueba los textos legales con la empresa.

## Estructura

```text
app/                  Rutas de páginas y API de formularios
components/           Secciones y controles de interfaz
config/site.ts        Nombre, correo visible y navegación
lib/content.ts        Contenido editorial y vacantes
lib/portfolio.ts      Datos del catálogo y categorías
lib/portfolio-search.ts  Búsqueda, orden, paginación y URL del catálogo
lib/whatsapp.ts       Construcción y validación del enlace wa.me
styles/               Tokens, guía y hojas CSS
public/images/        Logos e imágenes ilustrativas
services/             Adaptador preparado para un CMS o API
types/                Modelos TypeScript
```

El portal de clientes no forma parte de esta versión. Un acceso privado futuro necesitaría autenticación, permisos y almacenamiento seguros. Las noticias están editadas en código; todavía no hay panel de Talento Humano.
