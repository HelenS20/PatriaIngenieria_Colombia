export function LocationSection() {
  return (
    <section className="mapBlock" data-reveal>
      <div className="locationMap" aria-label="Esquema ilustrativo de la ubicación de Patria Ingeniería en Mosquera">
        <div className="locationMapTop"><span>UBICACIÓN</span><span>MOSQUERA · CUNDINAMARCA</span></div>
        <svg className="locationMapDrawing" viewBox="0 0 700 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="location-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ccd1d4" strokeOpacity=".17" strokeWidth="1" /></pattern>
            <linearGradient id="location-route" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#ccd1d4" stopOpacity=".3"/><stop offset=".55" stopColor="#ccd1d4"/><stop offset="1" stopColor="#ccd1d4" stopOpacity=".5"/></linearGradient>
          </defs>
          <rect width="700" height="560" fill="url(#location-grid)" />
          <path className="mapTerrain" d="M-40 92 139 18 282 78 390 35 559 100 742 28V-30H-40ZM-40 420 142 380 232 450 389 397 533 463 742 408V600H-40Z" />
          <path className="mapMinorRoad" d="M-20 190C100 218 156 168 262 199S469 292 723 230M-18 375C115 344 215 367 344 336S514 342 724 356M114-20C148 106 176 210 148 333S151 484 190 590M533-20C523 125 484 215 543 332S579 474 575 590" />
          <path className="mapMainRoad" d="M-30 312C95 296 194 266 301 290S485 318 562 267 669 222 731 225" />
          <path className="mapRouteBase" d="M206 295C281 283 317 279 383 293S470 317 537 283" />
          <path className="mapRouteFlow" d="M206 295C281 283 317 279 383 293S470 317 537 283" />
          <circle className="mapTownDot" cx="538" cy="282" r="5" />
          <circle className="mapTownDot" cx="382" cy="293" r="4" />
          <circle className="mapPlantHalo" cx="205" cy="295" r="38" />
          <circle className="mapPlantRing" cx="205" cy="295" r="25" />
          <circle className="mapPlantDot" cx="205" cy="295" r="8" />
          <text className="mapLabel mapLabelStrong" x="170" y="250">PATRIA</text>
          <text className="mapLabel" x="175" y="267">MOSQUERA</text>
          <text className="mapLabel" x="340" y="265">SABANA</text>
          <text className="mapLabel" x="516" y="255">BOGOTÁ</text>
          <text className="mapRouteLabel" x="282" y="331">CORREDOR LOGÍSTICO</text>
        </svg>
        <div className="locationMapCard">
          <span>01 / UBICACIÓN</span>
          <p>Mosquera, Cundinamarca.<br />Zona industrial.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Mosquera+Cundinamarca+zona+industrial" target="_blank" rel="noopener noreferrer">VER EN MAPAS <span aria-hidden="true">↗</span></a>
        </div>
        <span className="locationMapNote">ESQUEMA ILUSTRATIVO · NO A ESCALA</span>
      </div>
      <div className="locationCopy">
        <p className="eyebrow">Nuestra operación</p>
        <h2>UN PUNTO<br /><i>DE PARTIDA.</i></h2>
        <p className="lede">Operamos desde Mosquera, Cundinamarca, con acceso al corredor logístico de la Sabana de Bogotá y conectividad regional para atender obras en todo el territorio.</p>
        <div className="locationFacts"><span><b>01</b> MOSQUERA · CUNDINAMARCA</span><span><b>02</b> CORREDOR LOGÍSTICO</span></div>
      </div>
    </section>
  );
}
