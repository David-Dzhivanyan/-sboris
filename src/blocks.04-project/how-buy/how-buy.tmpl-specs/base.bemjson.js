module.exports = ({cls} = {}) => [
  {block: 'how-buy', cls, attrs: {id: 'howtobuy'}, content: [
      {cls: 'container', content: [
          {elem: 'title', content: 'how to buy $boris'},
          {elem: 'steps', content: [
              {elem: 'step-item', content: [
                  {elem: 'step-title', content: 'step 1:'},
                  {elem: 'description', content: 'have ton in your wallet to switch to$boris. if you don’t have any ton, you can buy ton from an exchange orcross chain swap and send it to your wallet.'}
                ]},
              {elem: 'step-item', content: [
                  {elem: 'step-title', content: 'step 2:'},
                  {elem: 'description', content: 'download tonkeeper or your wallet ofchoice from the app store or google play store for free. dekstop users, downloadthe google chrome extension by going to tonkeeper app.'}
                ]},
              {elem: 'step-item', content: [
                  {elem: 'step-title', content: 'step 3:'},
                  {elem: 'description', content: 'connect to <a class="a" href="https://dedust.io/">dedust.io</a> in your browser or mobile app.connect your wallet. paste the $boris token address into dedust and confirm the swap. when tonkeeperprompts you for a wallet signature, sign'}
                ]},
              {elem: 'step-item', content: [
                  {elem: 'step-title', content: 'step 4:'},
                  {elem: 'description', content: 'switch TON for $boris - take a shotof vodka and boom you’re a part of our community<br><br><span class="link-here">Or just click the <a href="https://dedust.io/swap/TON/EQC_Br9_cFIywrKoAGR3C5EBnrMrWueU0zqQ-0OsldqoADyW">link</a></span>'}
                ]},
            ]}
        ]},
    ]}
];