module.exports = ({cls} = {}) => [
  {block: 'borisnomics', cls, attrs: {id: 'borisnomics'}, content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {elem: 'stick', mods: {left: true, white: true}},
              {elem: 'stick', mods: {left: true, blue: true}},
              {elem: 'title', content: '$borisnomics'},
              {elem: 'items', content: [
                  {elem: 'item', content: [
                      {elem: 'img', content: [
                          {block: 'img', src: './images/borisnomics/boris.png'},
                          {block: 'img', src: './images/borisnomics/shadow.png'},
                        ]},
                      {elem: 'item-title', content: 'total supply'},
                      {content: '1 billion'}
                    ]},
                  {elem: 'item', content: [
                      {elem: 'img', content: [
                          {block: 'img', src: './images/borisnomics/boris.png'},
                          {block: 'img', src: './images/borisnomics/shadow.png'},
                        ]},
                      {elem: 'item-title', content: 'lp burned'},
                      {content: '100%'}
                    ]},
                  {elem: 'item', content: [
                      {elem: 'img', content: [
                          {block: 'img', src: './images/borisnomics/boris.png'},
                          {block: 'img', src: './images/borisnomics/shadow.png'},
                        ]},
                      {elem: 'item-title', content: 'tax'},
                      {content: '0%'}
                    ]},
                ]},
              {elem: 'stick', mods: {right: true, blue: true}},
              {elem: 'stick', mods: {right: true, white: true}},
            ]},
        ]},
    ]}
];