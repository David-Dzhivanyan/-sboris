module.exports = ({cls} = {}) => [
  {block: 'grid', cls, attrs: {id: 'memes'}, content: [
      {elem: 'title', content: '$boris memes'},
      {elem: 'tiles', tag: 'a', attrs: {href: 'https://t.me/+DbhQcSbuy5I1MjZi'}, content: [...new Array(16)].map((_, index) => [
          {block: 'img', src: './images/grid/' + (index + 1) + '.jpg'},
        ])}
    ]}
];