module.exports = {
  block: 'page',
  title: '$boris',
  content: [
    require('../blocks.04-project/header/header.tmpl-specs/base.bemjson')(),
    {block: 'main', content: [
        {cls: 'container', content: [
            require('../blocks.04-project/logo/logo.tmpl-specs/base.bemjson')(),
          ]},
        require('../blocks.04-project/copy/copy.bemjson.js/base.bemjson')(),
        {cls: 'container', content: [
            require('../blocks.04-project/grid/grid.tmpl-specs/base.bemjson')(),
          ]},
        require('../blocks.04-project/borisnomics/borisnomics.tmpl-specs/base.bemjson')(),
        require('../blocks.04-project/how-buy/how-buy.tmpl-specs/base.bemjson')(),
        require('../blocks.04-project/infographics/infographics.tmpl-specs/base.bemjson')(),
        require('../blocks.04-project/footer/footer.tmpl-specs/base.bemjson')()
      ]},
    ],
};
