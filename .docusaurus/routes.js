
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docusaurus-test/',
  component: ComponentCreator('/docusaurus-test/','906'),
  exact: true,
},
{
  path: '/docusaurus-test/blog',
  component: ComponentCreator('/docusaurus-test/blog','276'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/hello-world',
  component: ComponentCreator('/docusaurus-test/blog/hello-world','ca4'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/hola',
  component: ComponentCreator('/docusaurus-test/blog/hola','588'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/tags',
  component: ComponentCreator('/docusaurus-test/blog/tags','6a0'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/tags/docusaurus',
  component: ComponentCreator('/docusaurus-test/blog/tags/docusaurus','398'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/tags/facebook',
  component: ComponentCreator('/docusaurus-test/blog/tags/facebook','430'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/tags/hello',
  component: ComponentCreator('/docusaurus-test/blog/tags/hello','56a'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/tags/hola',
  component: ComponentCreator('/docusaurus-test/blog/tags/hola','049'),
  exact: true,
},
{
  path: '/docusaurus-test/blog/welcome',
  component: ComponentCreator('/docusaurus-test/blog/welcome','919'),
  exact: true,
},
{
  path: '/docusaurus-test/markdown-page',
  component: ComponentCreator('/docusaurus-test/markdown-page','416'),
  exact: true,
},
{
  path: '/docusaurus-test/docs',
  component: ComponentCreator('/docusaurus-test/docs','a7a'),
  
  routes: [
{
  path: '/docusaurus-test/docs/intro',
  component: ComponentCreator('/docusaurus-test/docs/intro','4c3'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/congratulations','8a0'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/create-a-blog-post','293'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/create-a-document','158'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/create-a-page','f1a'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/deploy-your-site','360'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-basics/markdown-features','470'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-extras/manage-docs-versions','997'),
  exact: true,
},
{
  path: '/docusaurus-test/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/docusaurus-test/docs/tutorial-extras/translate-your-site','e5b'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
