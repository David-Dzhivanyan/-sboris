module.exports = ({cls} = {}) => [
  {block: 'copy', cls, attrs: {id: 'contract'}, content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {elem: 'stick', mods: {left: true, white: true}},
              {elem: 'stick', mods: {left: true, blue: true}},
              {elem: 'logo', content: [
                  {block: 'img', src: './images/logo/middle-logo.png'}
                ]},
              {elem: 'text-wrapper', content: [
                  {elem: 'text', content: [
                      {content: 'contract: <br class="d-md-none"> eqc_br. . .9_cfiyw'},
                      {block: 'fi', mods: {icon: 'copy'}}
                    ]}
                ]},
              {elem: 'stick', mods: {right: true, blue: true}},
              {elem: 'stick', mods: {right: true, white: true}},
            ]},
        ]}
    ]}
];