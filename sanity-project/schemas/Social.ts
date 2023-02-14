export default {
  name: 'social',
  type: 'document',
  title: 'Social',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'logoUrl',
      type: 'image',
      title: 'Logo URL',
    },
  ],
}
