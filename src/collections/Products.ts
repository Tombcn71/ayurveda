import { CollectionConfig } from 'payload/types'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'productType', 'price', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'productType',
      type: 'select',
      required: true,
      label: 'Tipo',
      options: [
        { label: 'Producto', value: 'producto' },
        { label: 'Programa', value: 'programa' },
        { label: 'Consulta', value: 'consulta' },
      ],
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'URL',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Precio',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      label: 'Estado',
      options: [
        { label: 'Publicado', value: 'published' },
        { label: 'Borrador', value: 'draft' },
      ],
    },
  ],
}
