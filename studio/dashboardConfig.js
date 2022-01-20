export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e9d9c8c3c57b135978bfda',
                  title: 'Sanity Studio',
                  name: 'books-blog-studio',
                  apiId: '292ace1d-6c63-4022-b229-2432c5b66769'
                },
                {
                  buildHookId: '61e9d9c717513d1af2d22160',
                  title: 'Blog Website',
                  name: 'books-blog',
                  apiId: 'ff0fa557-ed92-43bb-a00d-a2f41ee7a6d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gkimothi/books-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://books-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
