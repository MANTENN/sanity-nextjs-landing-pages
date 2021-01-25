export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '600e31b8d04e2ff355127779',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ze2j2teu',
                  apiId: '6aed6223-c2a5-4ffb-af35-227911b463f4'
                },
                {
                  buildHookId: '600e31b880b2bfc9e78c11f5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t7n5obdb',
                  apiId: 'de7d4f70-8bba-40ed-9a02-6a45c1593210'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MANTENN/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t7n5obdb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
