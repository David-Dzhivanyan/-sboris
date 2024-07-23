module.exports = ({ cls } = {}) => [
  {block: 'logo', cls, attrs: {id: 'about'}, content: [
      {elem: 'info', content: [
          {elem: 'title', cls: 'h1', content: '$boris <br> on ton cto'},
          {elem: 'description', content: 'Boris is a degen bear with russian soul, he\'s asking only for your support and some love. Spread the Boris name - spread the love.'},
          {elem: 'nav', content: [
              {elem: 'link-wrapper', mods: {tg: true}, content: [
                  {elem: 'link', cls: 'a', tag: 'a', attrs: {href: 'https://t.me/boris_cto'}, content: [
                      {block: 'fi', mods: {icon: 'tg'}}
                    ]},
                ]},
              {elem: 'link-wrapper', mods: {x: true}, content: [
                  {elem: 'link', cls: 'a', tag: 'a', attrs: {href: 'https://x.com/boris_cto'}, content: [
                      {block: 'fi', mods: {icon: 'x'}}
                    ]},
                ]},
              {elem: 'link-wrapper', mods: {eagle: true}, content: [
                  {elem: 'link', cls: 'a', tag: 'a', attrs: {href: 'https://dexscreener.com/ton/eqdvbfekdjbqz3dac5wbhsms1iffqvkyygh8du2mbakqxtx7'}, content: [
                      {block: 'fi', mods: {icon: 'eagle'}}
                    ]},
                ]},
              {elem: 'link-wrapper', mods: {dex: true}, content: [
                  {elem: 'link', cls: 'a', tag: 'a', attrs: {href: 'https://www.dextools.io/app/ru/ton/pair-explorer/EQDvBFeKDjBqz3DAc5wbHsMs1IFfQVKYYGH8Du2MbAkqXtx7?t=1720715394035'}, content: [
                      {block: 'fi', mods: {icon: 'dex'}}
                    ]},
                ]},
              {elem: 'link-wrapper', mods: {cube: true}, content: [
                  {elem: 'link', cls: 'a', tag: 'a', attrs: {href: 'https://dedust.io/swap/TON/EQC_Br9_cFIywrKoAGR3C5EBnrMrWueU0zqQ-0OsldqoADyW'}, content: [
                      {block: 'img', src: './images/logo/cube.svg'}
                    ]},
                ]},
            ]},
          {elem: 'btn-group', content: [
              {block: 'btn', attrs: {href: 'https://dedust.io/swap/TON/EQC_Br9_cFIywrKoAGR3C5EBnrMrWueU0zqQ-0OsldqoADyW?amount=50000000000'}, content: 'buy now'},
              {block: 'btn', cls: 'btn-outline', attrs: {href: '#borisnomics'}, content: 'borisnomics'}
            ]}
        ]},
      {elem: 'image', content: [
          {block: 'img', src: './images/logo/big-logo.png'}
        ]}
    ]}
];