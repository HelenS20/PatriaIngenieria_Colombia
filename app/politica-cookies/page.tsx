import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de cookies | Patria Ingeniería" };

export default function CookiesPage() {
  return <article className="articlePage cookiePolicyPage"><p className="eyebrow">Privacidad</p><h1>POLÍTICA DE<br /><i>COOKIES.</i></h1><div className="articleBody"><p>Este sitio utiliza una cookie propia llamada <strong>patria_cookie_consent</strong> para recordar si elegiste aceptar todas las cookies o solo las necesarias. Dura hasta seis meses y puedes cambiar tu elección desde el enlace “Configurar cookies” en el pie de página.</p><p>En esta versión no se cargan servicios de análisis de tráfico ni publicidad, con independencia de la opción elegida. Si en el futuro se incorporan, deberán activarse únicamente según la preferencia registrada y actualizar esta política antes del lanzamiento.</p><p>Los formularios de contacto y hojas de vida funcionan sin cookies de seguimiento. Para información sobre el tratamiento de los datos enviados por formulario, consulta la página de tratamiento de datos y confirma su texto definitivo con la empresa.</p></div></article>;
}
