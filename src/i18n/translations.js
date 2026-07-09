export const translations = {
  en: {
    nav: {
      services: 'Services',
      estimate: 'Get an Estimate',
      reviews: 'Reviews',
      hours: 'Hours & Location',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    header: {
      call: '(786) 474-1311',
    },
    hero: {
      badge: "4.0 out of 5 (39 Google reviews) — Little Havana's trusted repair shop",
      headline: 'We show you the problem. We quote you one price. That’s it.',
      body: "Brakes, tune-ups, oil changes and general repairs in Little Havana — done at a fair price, explained in plain English, by the same guy who answers the phone. No surprise charges at pickup, ever.",
      callCta: 'Call (786) 474-1311',
      estimateCta: 'Get a Free Estimate',
      hoursLine: 'Mon–Fri 8am–7pm · Call for weekend availability · Walk-ins welcome',
    },
    trust: {
      title: 'No surprises. Ever.',
      subtitle: "We know what it feels like to get quoted one price and charged another. That's not how we run this shop.",
      photoAlt: 'Multiser Versailles mechanics working on a car in the shop',
      items: [
        {
          title: 'The price we quote is the price you pay',
          body: "We show you the worn part and write the number down before we touch your car. What's on the slip at pickup matches what we told you at drop-off. No exceptions.",
        },
        {
          title: 'Plain English, not sales talk',
          body: "Miguel walks you through what's actually wrong — not what sounds expensive. If it doesn't need fixing, we tell you that too.",
        },
        {
          title: 'Accessible, easy to work with',
          body: 'Walk-ins welcome, wheelchair-accessible shop, and we accept all major credit and debit cards.',
        },
      ],
    },
    // ⚠️ PLACEHOLDER PRICING — priceRange values below (and SERVICE_PRICES in
    // EstimateCalculator.jsx) are AI-estimated, not real prices from the shop.
    // Confirm actual ranges with Miguel before this site goes live — wrong
    // prices directly undercut the site's "no surprise charges" promise.
    services: {
      title: 'What we work on',
      subtitle: 'Straightforward pricing ranges so you know roughly what to expect before you even walk in.',
      items: [
        {
          name: 'Brake Inspection & Repair',
          desc: 'Pads, rotors, and full brake system checks — the noise gets diagnosed and shown to you, not just billed.',
          priceRange: '$120–$420',
        },
        {
          name: 'Tune-Ups & Routine Maintenance',
          desc: 'Keep small issues from becoming expensive ones with regular scheduled maintenance.',
          priceRange: '$90–$280',
        },
        {
          name: 'Oil Changes',
          desc: 'Fast, no-appointment-needed oil changes while you wait.',
          priceRange: '$45–$95',
        },
        {
          name: 'Diagnostics & General Repairs',
          desc: 'Check-engine lights, strange sounds, and everything in between — explained in plain terms.',
          priceRange: 'Free with repair',
        },
        {
          name: 'Multi-Service Repair',
          desc: 'Full-service mechanical work for whatever else your car needs, all under one roof.',
          priceRange: 'Varies',
        },
      ],
    },
    estimate: {
      title: 'Know the range before you drive over',
      subtitle: "A real, honest estimate — not a teaser number that changes once you're in the chair.",
      serviceLabel: 'What does your car need?',
      serviceOptions: [
        { id: 'brakes-front', label: 'Brake Repair (front)' },
        { id: 'brakes-full', label: 'Brake Repair (front + rear)' },
        { id: 'tune-up', label: 'Tune-Up' },
        { id: 'oil-change', label: 'Oil Change' },
        { id: 'diagnostic', label: 'Check-Engine Diagnostic' },
      ],
      vehicleLabel: 'Vehicle type',
      vehicleOptions: [
        { id: 'compact', label: 'Compact / Sedan' },
        { id: 'suv', label: 'SUV / Crossover' },
        { id: 'truck', label: 'Truck / Van' },
      ],
      rangeLabel: 'Estimated range',
      rangeNote: 'Final price confirmed in person before any work starts — never changes after.',
      sampleNote: 'Sample pricing for this preview — real ranges to be confirmed with the shop.',
      ctaButton: 'Hold this estimate — call to book',
      confirmedText: 'Give us a call at (786) 474-1311 to lock in this estimate',
    },
    // Real reviews pulled from the Google Places Details API for this exact
    // listing (place_id ChIJkzc0pBy32YgRvoeWLIUeCgw) — 4.0/5 from 39 reviews
    // at time of pulling. These 3 are genuine 5-star reviews, lightly
    // trimmed with "…" (no wording changed). A real 1-star complaint also
    // exists and is intentionally not featured here — same as any business
    // review section — but the aggregate score above is the real one.
    testimonials: {
      title: '4.0 out of 5 from 39 Google reviews',
      reviews: [
        {
          quote: "I cannot express enough gratitude for the outstanding service provided by Multiser Versailles and its owner, Miguel. On Christmas Day, my family member mistakenly fueled my gasoline car with diesel, and we were in a desperate situation. Thankfully, Miguel's shop was open, and he went above and beyond to assist us. Miguel swiftly organized a tow truck to bring the car in, took the time to thoroughly explain the issue and the necessary repairs, and then efficiently fixed the problem within 3-4 hours on Christmas Day.",
          name: 'Yao G. — Google review',
        },
        {
          quote: "Best auto repair shop in Miami. Expert mechanics, great customer service, fast service. These folks will go out of their way to fix your car at the cheapest possible cost. The owner is the chief mechanic and he is always on site to offer free consultation advice or future diagnostic… Any misunderstandings or problems are taken care of immediately by Miguel the owner.",
          name: 'Ben B. — Google review',
        },
        {
          quote: 'Me and my husband went today without an appointment and they greeted us very friendly and took care of us very professionally and right away. The place was clean. They provided great service.',
          name: 'Noemí R. — Google review',
        },
      ],
      prevAria: 'Previous review',
      nextAria: 'Next review',
    },
    hoursContact: {
      hoursTitle: 'Hours',
      days: [
        // TODO(owner): only Mon–Fri hours were confirmed in research notes.
        // Add Saturday/Sunday rows here once Miguel confirms weekend hours.
        { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
      ],
      walkins: 'Walk-ins welcome — no appointment needed. Call ahead for weekend hours.',
      visitTitle: 'Visit or Call',
      address: '3231 SW 8th St, Miami, FL 33135',
      addressNote: 'Little Havana, wheelchair-accessible entrance',
      directions: 'Get Directions',
      cardsNote: 'All major credit & debit cards accepted',
    },
    footer: {
      copyright: 'Multiser Versailles',
    },
    stickyCall: {
      label: 'Call Now — (786) 474-1311',
    },
    languageToggle: {
      switchTo: 'Español',
      aria: 'Switch to Spanish',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      estimate: 'Pide un Estimado',
      reviews: 'Reseñas',
      hours: 'Horario y Ubicación',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    header: {
      call: '(786) 474-1311',
    },
    hero: {
      badge: '4.0 de 5 (39 reseñas en Google) — El taller de confianza de la Pequeña Habana',
      headline: 'Te mostramos el problema. Te damos un solo precio. Así de simple.',
      body: 'Frenos, afinaciones, cambios de aceite y reparaciones generales en la Pequeña Habana — a precio justo, explicado en palabras claras, por la misma persona que contesta el teléfono. Sin cargos sorpresa al recoger tu carro, nunca.',
      callCta: 'Llama al (786) 474-1311',
      estimateCta: 'Pide un Estimado Gratis',
      hoursLine: 'Lun–Vie 8am–7pm · Llama para horario de fin de semana · Se aceptan walk-ins',
    },
    trust: {
      title: 'Sin sorpresas. Nunca.',
      subtitle: 'Sabemos lo que se siente que te den un precio y te cobren otro. Así no trabajamos en este taller.',
      photoAlt: 'Mecánicos de Multiser Versailles trabajando en un carro en el taller',
      items: [
        {
          title: 'El precio que te damos es el precio que pagas',
          body: 'Te mostramos la pieza gastada y anotamos el número antes de tocar tu carro. Lo que dice el recibo cuando recoges el carro es lo mismo que te dijimos al dejarlo. Sin excepciones.',
        },
        {
          title: 'Te hablamos claro, no como vendedor',
          body: 'Miguel te explica lo que realmente está mal — no lo que suena más caro. Si no hace falta arreglarlo, también te lo decimos.',
        },
        {
          title: 'Fácil de visitar, fácil de trabajar contigo',
          body: 'Aceptamos walk-ins, el taller es accesible para sillas de ruedas, y aceptamos todas las tarjetas de crédito y débito principales.',
        },
      ],
    },
    services: {
      title: 'En qué trabajamos',
      subtitle: 'Rangos de precio claros para que sepas más o menos qué esperar antes de venir.',
      items: [
        {
          name: 'Inspección y Reparación de Frenos',
          desc: 'Pastillas, rotores y revisión completa del sistema de frenos — el ruido se diagnostica y se te muestra, no solo se factura.',
          priceRange: '$120–$420',
        },
        {
          name: 'Afinaciones y Mantenimiento de Rutina',
          desc: 'Evita que problemas pequeños se conviertan en reparaciones caras con mantenimiento regular.',
          priceRange: '$90–$280',
        },
        {
          name: 'Cambios de Aceite',
          desc: 'Cambios de aceite rápidos, sin necesidad de cita, mientras esperas.',
          priceRange: '$45–$95',
        },
        {
          name: 'Diagnósticos y Reparaciones Generales',
          desc: 'Luces de check-engine, ruidos extraños y todo lo demás — explicado en palabras sencillas.',
          priceRange: 'Gratis con la reparación',
        },
        {
          name: 'Reparación Multi-Servicio',
          desc: 'Servicio mecánico completo para lo que tu carro necesite, todo bajo un mismo techo.',
          priceRange: 'Varía',
        },
      ],
    },
    estimate: {
      title: 'Conoce el rango antes de venir',
      subtitle: 'Un estimado real y honesto — no un número gancho que cambia cuando ya estás sentado.',
      serviceLabel: '¿Qué necesita tu carro?',
      serviceOptions: [
        { id: 'brakes-front', label: 'Reparación de Frenos (delanteros)' },
        { id: 'brakes-full', label: 'Reparación de Frenos (delanteros + traseros)' },
        { id: 'tune-up', label: 'Afinación' },
        { id: 'oil-change', label: 'Cambio de Aceite' },
        { id: 'diagnostic', label: 'Diagnóstico de Check-Engine' },
      ],
      vehicleLabel: 'Tipo de vehículo',
      vehicleOptions: [
        { id: 'compact', label: 'Compacto / Sedán' },
        { id: 'suv', label: 'SUV / Crossover' },
        { id: 'truck', label: 'Camioneta / Van' },
      ],
      rangeLabel: 'Rango estimado',
      rangeNote: 'El precio final se confirma en persona antes de empezar cualquier trabajo — y no cambia después.',
      ctaButton: 'Reservar este estimado — llama para agendar',
      confirmedText: 'Llámanos al (786) 474-1311 para confirmar este estimado',
    },
    // Real Google reviews (see English block for source/place_id), translated
    // from the original English — same pattern Google's own review UI uses.
    testimonials: {
      title: '4.0 de 5 según 39 reseñas en Google',
      translationNote: 'Reseñas reales de Google, traducidas del inglés.',
      reviews: [
        {
          quote: "No puedo expresar suficiente gratitud por el excelente servicio que nos brindaron Multiser Versailles y su dueño, Miguel. El día de Navidad, un familiar mío puso diésel por error en mi carro de gasolina, y estábamos en una situación desesperada. Por suerte, el taller de Miguel estaba abierto, y él hizo mucho más de lo esperado para ayudarnos. Organizó rápidamente una grúa para traer el carro, se tomó el tiempo de explicar bien el problema y las reparaciones necesarias, y arregló todo en 3 a 4 horas ese mismo día de Navidad.",
          name: 'Yao G. — reseña en Google',
        },
        {
          quote: 'El mejor taller de mecánica en Miami. Mecánicos expertos, excelente servicio al cliente, servicio rápido. Hacen lo posible por arreglar tu carro al precio más bajo posible. El dueño es el mecánico principal y siempre está presente para ofrecer consultas o diagnósticos gratis… Cualquier malentendido o problema lo resuelve de inmediato Miguel, el dueño.',
          name: 'Ben B. — reseña en Google',
        },
        {
          quote: 'Mi esposo y yo fuimos hoy sin cita y nos recibieron muy amablemente, atendiéndonos de forma muy profesional y de inmediato. El lugar estaba limpio. Nos dieron un excelente servicio.',
          name: 'Noemí R. — reseña en Google',
        },
      ],
      prevAria: 'Reseña anterior',
      nextAria: 'Siguiente reseña',
    },
    hoursContact: {
      hoursTitle: 'Horario',
      days: [
        // TODO(owner): only Mon–Fri hours were confirmed in research notes.
        { day: 'Lunes – Viernes', time: '8:00 a.m. – 7:00 p.m.' },
      ],
      walkins: 'Se aceptan walk-ins — no necesitas cita. Llama para confirmar horario de fin de semana.',
      visitTitle: 'Visítanos o Llama',
      address: '3231 SW 8th St, Miami, FL 33135',
      addressNote: 'Pequeña Habana, entrada accesible para sillas de ruedas',
      directions: 'Cómo Llegar',
      cardsNote: 'Aceptamos todas las tarjetas de crédito y débito principales',
    },
    footer: {
      copyright: 'Multiser Versailles',
    },
    stickyCall: {
      label: 'Llama Ahora — (786) 474-1311',
    },
    languageToggle: {
      switchTo: 'English',
      aria: 'Cambiar a inglés',
    },
  },
}
