import { CollectionConfig } from 'payload/types'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'geoLocation', 'publishedDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        description: 'URL amigable: ayurveda-madrid-estres',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Fecha de Publicación',
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'Pilar Franco de Sarabia',
      label: 'Autor',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Imagen Destacada',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 200,
      label: 'Extracto (resumen corto)',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenido del Blog',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoTitle',
              type: 'text',
              label: 'Título SEO',
              admin: {
                description: 'Opcional. Se usa el título principal si está vacío.',
              },
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              maxLength: 160,
              label: 'Meta Descripción',
              admin: {
                description: 'Máximo 160 caracteres para Google.',
              },
            },
            {
              name: 'keywords',
              type: 'text',
              label: 'Keywords (separadas por comas)',
              admin: {
                description: 'Ej: ayurveda madrid, consulta natural, tratamiento holístico',
              },
            },
          ],
        },
        {
          label: 'Geo-Targeting',
          fields: [
            {
              name: 'geoLocation',
              type: 'select',
              required: true,
              defaultValue: 'españa',
              label: 'Ubicación Geográfica',
              options: [
                { label: 'España (general)', value: 'españa' },
                { label: 'Madrid', value: 'madrid' },
                { label: 'Barcelona', value: 'barcelona' },
                { label: 'Valencia', value: 'valencia' },
                { label: 'Sevilla', value: 'sevilla' },
                { label: 'Online', value: 'online' },
              ],
            },
            {
              name: 'geoKeywords',
              type: 'array',
              label: 'Keywords Geo-específicos',
              fields: [
                {
                  name: 'keyword',
                  type: 'text',
                  label: 'Keyword',
                },
              ],
              admin: {
                description: 'Ej: "ayurveda madrid", "tratamiento natural españa"',
              },
            },
          ],
        },
        {
          label: 'Categorización',
          fields: [
            {
              name: 'category',
              type: 'select',
              required: true,
              label: 'Categoría',
              options: [
                { label: 'Ayurveda Básico', value: 'basico' },
                { label: 'Doshas', value: 'doshas' },
                { label: 'Tratamientos', value: 'tratamientos' },
                { label: 'Alimentación', value: 'alimentacion' },
                { label: 'Meditación', value: 'meditacion' },
                { label: 'Estilo de Vida', value: 'estilo-vida' },
              ],
            },
            {
              name: 'tags',
              type: 'text',
              label: 'Etiquetas (separadas por comas)',
              admin: {
                description: 'Ej: estrés, ansiedad, insomnio',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      label: 'Estado',
      options: [
        { label: 'Borrador', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
    },
  ],
}
