# Guía de estilos — Patria Ingeniería

Esta carpeta reúne la información visual del sitio. Los valores editables de marca están en [`tokens.css`](./tokens.css); [`patria-brand.css`](./patria-brand.css) aplica esos valores a los componentes existentes. Las otras hojas conservan la composición y las animaciones del croquis.

## Paleta

| Token | Color | Origen y uso |
| --- | --- | --- |
| `--brand-blue` | `#01557B` | Azul del símbolo. Color principal confirmado por la captura enviada. |
| `--brand-graphite` | `#4F565E` | Gris oscuro del símbolo. Color confirmado por la captura enviada. |
| `--brand-silver` | `#CCD1D4` | Gris claro del símbolo. Color confirmado por la captura enviada. |
| `--brand-black` | `#000000` | Negro de marca solicitado para texto y fondos oscuros. |
| `--brand-blue-deep` | `#000000` | Alias para fondos oscuros dentro de la paleta aprobada. |
| `--brand-blue-light` | `#CCD1D4` | Alias para acentos claros dentro de la paleta aprobada. |
| `--brand-white` | `#FFFFFF` | Fondo y texto en superficies oscuras. |
| `--brand-canvas` | `#FFFFFF` | Fondo claro de la interfaz. |
| `--brand-border` | `#CCD1D4` | Bordes y separadores; comparte el gris claro. |

Los cuatro colores principales vienen de las capturas de selección de color que enviaste. El blanco aparece en el fondo del logo y se usa para las superficies. La interfaz actual no introduce otros tonos de acento. El borde naranja visible en la captura no se consideró parte del emblema. Ver también [muestrario visual](./palette.svg) y [paleta legible por herramientas](./palette.json).

## Tipografía y jerarquía

- **Space Grotesk:** titulares y rótulos de impacto.
- **Manrope:** párrafos, formularios y navegación secundaria.
- **DM Mono:** etiquetas, números, fechas y controles breves.
- Los titulares usan peso alto y espaciado cerrado; los párrafos mantienen interlineado amplio para lectura.
- El logo horizontal se usa en la cabecera y el pie. Sobre fondo oscuro, la versión transparente se muestra en blanco mediante CSS. El favicon y la animación inicial usan el símbolo circular.

## Archivos de estilos

| Archivo | Responsabilidad |
| --- | --- |
| `tokens.css` | Variables de color de marca. |
| `patria-brand.css` | Aplicación de la marca a los componentes. |
| `patria-refresh.css` | Primera capa de navegación, portada, Quiénes somos, contacto y cookies. |
| `modern-minimal.css` | Jerarquía, superficies y contraste de la versión actual. |
| `agency-direction.css` | Dirección visual actual: cabecera, portada con diapositivas, secciones, páginas internas y animación inicial. |
| `portfolio-v2.css` | Catálogo y fichas del portafolio. |
| `responsive.css`, `layout-fixes.css` | Adaptación a móvil y tamaños intermedios. |
| `dynamic-experience.css` | Transiciones, entradas y estados de interacción. |
| `hero-ticker.css` | Cinta animada de la portada. |
| `certification-marquee.css`, `certification-finish.css` | Carrusel de distintivos y distribución. |
| `location-motion.css` | Mapa ilustrativo y movimiento de la ruta. |
| `section-polish.css`, `final-polish.css` | Tarjetas, contacto, artículos y soluciones. |

Los estilos base que venían del croquis están en `app/globals.css`, `app/interactive.css`, `app/contact.css` y `app/assets.css`. `app/layout.tsx` importa todo en un orden deliberado; los tokens se cargan después de los estilos base y `agency-direction.css` se carga al final para definir el diseño actual. `portfolio-v2.css` conserva la estructura y los controles del catálogo.

## Composición, movimiento y tamaños

- Las secciones principales usan márgenes laterales de `5.6vw` en escritorio y `20px` cerca de 760 px o menos.
- Los títulos grandes usan `clamp()` para escalar según el ancho de la pantalla. Las tarjetas pasan de varias columnas a una en móvil.
- La portada avanza automáticamente cada 6,5 segundos y ofrece botones de navegación y pausa. El carrusel de certificaciones también avanza automáticamente. Ambos respetan `prefers-reduced-motion`.
- La animación de carga aparece al entrar al sitio y dura aproximadamente 1,1 segundos. Se omite cuando el usuario prefiere movimiento reducido.
- Las entradas suaves dependen de `[data-reveal]` y sus clases visibles. Se respeta `prefers-reduced-motion` en las reglas de movimiento.
- Los puntos de ajuste más utilizados son 1180, 1050, 760 y 420 px. Comprueba cada página también a 390, 768 y 1440 px.

## Cómo modificar la marca

1. Cambia los colores en `tokens.css`.
2. Revisa las reglas de `patria-brand.css`, especialmente contrastes sobre azul y sobre negro.
3. Si sustituyes el logo, cambia los archivos de `public/images/brand/` y el icono `app/icon.png`.
4. Comprueba portada, Contacto, Vacantes, Noticias, cabecera y pie a 390, 768 y 1440 px de ancho.
5. Ejecuta `npm run build` antes de generar el ZIP o publicar.

Al añadir un estilo nuevo, busca primero la clase con `rg` para evitar otra sobrescritura. El texto real, dirección, vacantes y certificaciones se editan en los archivos indicados en el README principal; no forman parte de esta paleta.
