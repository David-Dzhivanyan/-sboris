module.exports = ({cls} = {}) => [
  {block: 'infographics', cls, content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {tag: 'iframe', attrs: {id: 'dextools-widget',
                  title: 'DEXTools Trading Chart',
                  width: '700',
                  height:'400',
                  src: 'https://www.dextools.io/widget-chart/ru/ton/pe-light/EQDvBFeKDjBqz3DAc5wbHsMs1IFfQVKYYGH8Du2MbAkqXtx7?theme=light&chartType=2&chartResolution=30&drawingToolbars=false'}
              }
            ]},
        ]},
    ]}
];