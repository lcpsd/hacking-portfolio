export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'reports',
      type: 'number',
      title: 'Reports Number',
    },
    {
      name: 'ctfs',
      type: 'number',
      title: 'CTFs Number',
    },
    {
      name: 'highlight',
      type: 'array',
      title: 'High Light Content',
      of: [{type: 'string'}],
    },
  ],
}
