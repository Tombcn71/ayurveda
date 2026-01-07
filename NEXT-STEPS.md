# Próximos Pasos - Configuración de Homepage

## ✅ Lo que ya está hecho:
1. Schema de Homepage creado en Sanity
2. Query y función fetch añadidas
3. Schema visible en Sanity Studio como "🏠 Página de Inicio"

## 📝 Lo que debes hacer ahora:

### Paso 1: Llenar contenido en Sanity Studio

1. **Ve a Sanity Studio:**
   - http://localhost:3000/admin
   - Haz clic en **"🏠 Página de Inicio"** en el menú izquierdo

2. **Crea un documento de homepage:**
   - Haz clic en **"Create"** (arriba a la derecha)
   - Dale un nombre: **"Homepage Principal"**
   - Haz clic en **"Create"**

3. **Llena las secciones:**

   **Sección Hero (Principal):**
   - Título Principal: "El Arte Milenario del Bienestar"
   - Subtítulo: "Medicina Tradicional India"
   - Descripción: "Descubre el equilibrio perfecto entre cuerpo, mente y espíritu a través de la sabiduría ancestral del Ayurveda."
   - Imagen de Fondo: Sube una imagen
   - Botón Principal:
     - Texto: "Reservar Consulta"
     - Enlace: "/consultas"
   - Botón Secundario (opcional):
     - Texto: "Ver Video"
     - Enlace: [dejar vacío o poner link]
   - Estadísticas: Agrega 3
     - Valor: "20+", Etiqueta: "Años de Experiencia"
     - Valor: "5000+", Etiqueta: "Pacientes Atendidos"
     - Valor: "100%", Etiqueta: "Productos Naturales"

   **Sección de Servicios:**
   - Mostrar Sección: ✓ (marcar la casilla)
   - Título de la Sección: "Qué Ofrecemos"
   - Subtítulo: [opcional]
   - Descripción: [opcional]
   - Servicios Destacados: Selecciona servicios (si ya los tienes creados)

   **Sección de Productos:**
   - Mostrar Sección: ✓
   - Título de la Sección: "Productos Seleccionados"
   - Badge de Promoción:
     - Mostrar Badge: ✓
     - Texto: "20% de Descuento en productos seleccionados"
   - Productos Destacados: Selecciona productos (si ya los tienes creados)

   **Sección Sobre Nosotros:**
   - Mostrar Sección: ✓
   - Título de la Sección: "La Ciencia de la Vida"
   - Descripción Principal: [usa el editor de texto]
   - Principios: Agrega lista
     - "Equilibrio de los tres doshas: Vata, Pitta y Kapha"
     - "Alimentación según tu constitución individual"
     - etc.
   - Logros: Agrega 3
     - Valor: "Certificación", Etiqueta: "Internacional Ayurveda"
     - Valor: "Formación", Etiqueta: "en India y España"
     - Valor: "Comunidad", Etiqueta: "de practicantes"
   - Cita:
     - Texto: "Cuando la dieta es incorrecta, la medicina no sirve de nada. Cuando la dieta es correcta, la medicina no es necesaria."
     - Autor: "Proverbio Ayurvédico"

   **Sección de Contacto:**
   - Mostrar Sección: ✓
   - Título de la Sección: "Comienza tu Viaje"
   - Descripción: [opcional]
   - Información de Contacto: Agrega 4
     - Tipo: "Teléfono", Etiqueta: "Teléfono", Valor: "+34 91 XXX XX XX"
     - Tipo: "Email", Etiqueta: "Email", Valor: "info@ayurvedasalud.com"
     - Tipo: "Ubicación", Etiqueta: "Ubicación", Valor: "Madrid, España"
     - Tipo: "Horario", Etiqueta: "Horario", Valor: "Lun - Vie: 9:00 - 19:00"

4. **Publicar:**
   - Haz clic en **"Publish"** (arriba a la derecha) para guardar

### Paso 2: Ajustar componente de Homepage

Después de que hayas llenado el contenido, ajustaré el componente de homepage para obtener datos de Sanity en lugar de contenido hardcodeado.

**¡Avísame cuando termines el Paso 1!**

## 🎯 Resultado:

Después del Paso 2, tu homepage:
- ✅ Obtendrá contenido de Sanity
- ✅ Será dinámica (editable sin código)
- ✅ Todas las secciones serán editables desde Sanity Studio
- ✅ SEO/Schema/OpenGraph permanecerán hardcodeados (como querías)

