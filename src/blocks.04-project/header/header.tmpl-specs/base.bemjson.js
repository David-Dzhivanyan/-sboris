module.exports = ({ cls } = {}) => [
  {block: 'header', cls, tag: 'header', content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {elem: 'logo', tag: 'a', attrs: {href: '#'}, content: [
                  {block: 'img', src: './images/logo/logo.png'},
                  {elem: 'title', content: '$boris'}
                ]},
              {elem: 'nav', content: [
                  {elem: 'link', content: [
                      {block: 'a', attrs: {href: '#about'}, content: 'about'},
                    ]},
                  {elem: 'link', content: [
                      {block: 'a', attrs: {href: '#contract'}, content: 'contract'},
                    ]},
                  {elem: 'link', content: [
                      {block: 'a', attrs: {href: '#memes'}, content: 'memes'},
                    ]},
                  {elem: 'link', content: [
                      {block: 'a', attrs: {href: '#borisnomics'}, content: 'borisnomics'},
                    ]},
                  {elem: 'link', content: [
                      {block: 'a', attrs: {href: '#howtobuy'}, content: 'how to buy'},
                    ]},
                ]}
            ]}
        ]},
    ]}
];