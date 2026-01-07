import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: '🏠 Página de Inicio',
  type: 'document',
  icon: () => '🏠',
  description: 'Configuración de la página de inicio. Solo necesitas crear UN documento aquí.',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Sección Hero (Principal)',
      type: 'object',
      description: 'La sección principal de la página de inicio',
      fields: [
        defineField({
          name: 'title',
          title: 'Título Principal',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Ejemplo: "El Arte Milenario del Bienestar"',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
          description: 'Texto pequeño arriba del título',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          validation: (Rule) => Rule.required(),
          description: 'Texto descriptivo debajo del título',
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
          ],
        }),
        defineField({
          name: 'primaryButton',
          title: 'Botón Principal',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texto del Botón',
              type: 'string',
              initialValue: 'Reservar Consulta',
            },
            {
              name: 'link',
              title: 'Enlace',
              type: 'string',
              initialValue: '/consultas',
            },
          ],
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Botón Secundario',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texto del Botón',
              type: 'string',
              initialValue: 'Ver Video',
            },
            {
              name: 'link',
              title: 'Enlace',
              type: 'string',
            },
          ],
        }),
        defineField({
          name: 'stats',
          title: 'Estadísticas',
          type: 'array',
          description: 'Las estadísticas que aparecen en el hero (ej: "20+ Años de Experiencia")',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Valor',
                  type: 'string',
                  description: 'Ejemplo: "20+" o "5000+"',
                },
                {
                  name: 'label',
                  title: 'Etiqueta',
                  type: 'string',
                  description: 'Ejemplo: "Años de Experiencia"',
                },
              ],
            },
          ],
        }),
      ],
    }),

    // Services Section
    defineField({
      name: 'services',
      title: 'Sección de Servicios',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Mostrar Sección',
          type: 'boolean',
          initialValue: true,
          description: 'Activa o desactiva esta sección',
        }),
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Qué Ofrecemos',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
        }),
        defineField({
          name: 'featuredServices',
          title: 'Servicios Destacados',
          type: 'array',
          description: 'Selecciona los servicios que quieres mostrar en la homepage',
          of: [
            {
              type: 'reference',
              to: { type: 'service' },
            },
          ],
          validation: (Rule) => Rule.max(6),
        }),
      ],
    }),

    // Products Section
    defineField({
      name: 'products',
      title: 'Sección de Productos',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Mostrar Sección',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Productos Seleccionados',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
        }),
        defineField({
          name: 'promoBadge',
          title: 'Badge de Promoción',
          type: 'object',
          fields: [
            {
              name: 'enabled',
              title: 'Mostrar Badge',
              type: 'boolean',
              initialValue: true,
            },
            {
              name: 'text',
              title: 'Texto del Badge',
              type: 'string',
              initialValue: '20% de Descuento en productos seleccionados',
            },
          ],
        }),
        defineField({
          name: 'featuredProducts',
          title: 'Productos Destacados',
          type: 'array',
          description: 'Selecciona los productos que quieres mostrar en la homepage',
          of: [
            {
              type: 'reference',
              to: { type: 'product' },
            },
          ],
          validation: (Rule) => Rule.max(8),
        }),
      ],
    }),

    // About Section
    defineField({
      name: 'about',
      title: 'Sección Sobre Nosotros',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Mostrar Sección',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'La Ciencia de la Vida',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción Principal',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'principles',
          title: 'Principios',
          type: 'array',
          description: 'Lista de principios (ej: "Equilibrio de los tres doshas")',
          of: [
            {
              type: 'string',
            },
          ],
        }),
        defineField({
          name: 'achievements',
          title: 'Logros',
          type: 'array',
          description: 'Los logros que aparecen en la sección',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Valor',
                  type: 'string',
                  description: 'Ejemplo: "Certificación"',
                },
                {
                  name: 'label',
                  title: 'Etiqueta',
                  type: 'string',
                  description: 'Ejemplo: "Internacional Ayurveda"',
                },
              ],
            },
          ],
        }),
        defineField({
          name: 'quote',
          title: 'Cita',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texto de la Cita',
              type: 'text',
            },
            {
              name: 'author',
              title: 'Autor',
              type: 'string',
            },
          ],
        }),
      ],
    }),

    // Contact Section
    defineField({
      name: 'contact',
      title: 'Sección de Contacto',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Mostrar Sección',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'title',
          title: 'Título de la Sección',
          type: 'string',
          initialValue: 'Comienza tu Viaje',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
        }),
        defineField({
          name: 'contactInfo',
          title: 'Información de Contacto',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'type',
                  title: 'Tipo',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Teléfono', value: 'phone' },
                      { title: 'Email', value: 'email' },
                      { title: 'Ubicación', value: 'location' },
                      { title: 'Horario', value: 'hours' },
                    ],
                  },
                },
                {
                  name: 'label',
                  title: 'Etiqueta',
                  type: 'string',
                  description: 'Ejemplo: "Teléfono"',
                },
                {
                  name: 'value',
                  title: 'Valor',
                  type: 'string',
                  description: 'Ejemplo: "+34 91 XXX XX XX"',
                },
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Página de Inicio',
        subtitle: 'Configuración de la página principal',
      }
    },
  },
})

