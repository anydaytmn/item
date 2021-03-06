import { of } from 'rxjs';

export const PageData = of([
  {
    name: 'IP Home',
    slug: 'home-page',
    path: '/',
    seo: null,
    programlists: [],
    blocks: [
      {
        slug: 'intro',
        name: 'Item Protocol Intro',
        title: 'A powerful <nobr/>in-game</nobr> marketplace solution',
        description: `Item protocol enables quick and easy deployment and integration of a blockchain-based in-game marketplace.`,
        content: `<p>Addressing game developers’ most pressing needs, we add blockchain’s economy, security
                    and transparency to the gaming domain.</p>`,
        convertListToObjectByName: true,
        convertLabelsToObjectByName: true,
        media: [],
        list: [],
        labels: [
          {
            name: 'button',
            text: 'Start free',
          },
          {
            name: 'button-link',
            text: 'https://airtable.com/shr8Z21VbnmoS8Q4c',
          },
          {
            name: 'link-caption',
            text: 'GitHub',
          },
          {
            name: 'link-url',
            text: 'https://item.sh/',
          },
        ],
      },
      {
        slug: 'header',
        name: 'Item Protocol Header',
        title: null,
        description: null,
        content: null,
        convertListToObjectByName: false,
        convertLabelsToObjectByName: true,
        media: [],
        list: [
          {
            title: 'Get started',
            description: null,
            content:
              '<p><a href="https://airtable.com/shr8Z21VbnmoS8Q4c" target="_blank">Get started</a></p>',
            index: null,
            name: 'start',
            json: null,
            link: null,
          },
          {
            title: 'Market',
            description: null,
            content: '<p><a href="#market">Market</a></p>',
            index: null,
            name: 'market',
            json: null,
            link: null,
          },
          {
            title: 'Documentation',
            description: null,
            content: '<p><a href="#documentation">Documentation</a></p>',
            index: null,
            name: 'documentation',
            json: {},
            link: null,
          },
          {
            title: 'Github',
            description: null,
            content:
              '<p><a href="https://github.com/wavesplatform/item" target="_blanck" rel="noopener noreferrer nofollow">Github</a></p>',
            index: null,
            name: 'github',
            json: null,
            link: null,
          },
        ],
        labels: [],
      },
      {
        slug: 'benefits',
        name: 'Item Protocol Benefits',
        title: 'Benefits',
        description: null,
        content: null,
        convertListToObjectByName: false,
        convertLabelsToObjectByName: true,
        media: [],
        list: [
          {
            title: null,
            description:
              '<h3>Quick integration</h3>\n<p>Developers can use an SDK, comprehensive documentation ' +
              'and the example of an operating store</p>',
            content:
              '<p><img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5fbcf9f8b3e84eb396eb385958efeaf6.svg"' +
              ' alt="text"></p>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: null,
            description:
              '<h3>A range of marketplace models</h3>\n<p>You can choose between an independent store. partial ' +
              'integration with Item Market and full integration, including the interface</p>',
            content:
              '<p><img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5fbcf9f8b3e84eb396eb385958efeaf6.svg" ' +
              'alt="text"></p>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: null,
            description:
              '<h3>Monetization</h3>\n<p>You have a range of monetization options, including collecting fees on NFT trading ' +
              'on the platform and sales of in-game items</p>',
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5fbcf9f8b3e84eb396eb385958efeaf6.svg" alt="text">' +
              '</p>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: null,
            description:
              '<h3>Cross-gaming economies</h3>' +
              '<p>You can create items that will be used in various games, building cross-gaming economies</p>',
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5fbcf9f8b3e84eb396eb385958efeaf6.svg" alt="text">' +
              '</p>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: null,
            description:
              '<h3>Fighting the grey market</h3>' +
              '<p>Tokenized items can be traded directly by players, without risk of fraud ' +
              'or theft by middlemen. There is no need to plug in payment processors or create your own marketplace.</p>',
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5fbcf9f8b3e84eb396eb385958efeaf6.svg" alt="text">' +
              '</p>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: null,
            description:
              '<h3>New game mechanics</h3>' +
              '<p>Tokenization offers new ways of interacting with and monetizing games, such as fair auctions and loot boxes.</p>',
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5fbcf9f8b3e84eb396eb385958efeaf6.svg" alt="text">' +
              '</p>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
        ],
        labels: [],
      },
      {
        slug: 'footer',
        name: 'Item Protocol Footer',
        title: null,
        description: null,
        content: null,
        convertListToObjectByName: false,
        convertLabelsToObjectByName: true,
        media: [
          {
            url:
              'https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/fec9bf17a5b946daad0f4e14dbfa9752.svg',
            name: 'item-protocol.svg',
            ext: '.svg',
          },
        ],
        list: [
          {
            title: null,
            description: null,
            content: null,
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: 'Market',
            description: null,
            content: null,
            index: null,
            name: 'market',
            json: null,
            link: '#market',
          },
          {
            title: 'Documentation',
            description: null,
            content: null,
            index: null,
            name: 'documentation',
            json: null,
            link: '#documentation',
          },
          {
            title: 'Terms of Service and User Agreement',
            description: null,
            content: null,
            index: null,
            name: 'terms',
            json: null,
            link:
              'https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/b2de4c185cf34e009e458e6f069669ef.pdf',
          },
          {
            title: 'Marketplace Privacy Policy',
            description: null,
            content: null,
            index: null,
            name: 'privacy-policy',
            json: null,
            link:
              'https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/e9df6615f7954e86bb0cd157d60ce20b.pdf',
          },
        ],
        labels: [
          {
            name: 'logo-link',
            text: 'https://item.sh',
          },
        ],
      },
      {
        slug: 'contacts',
        name: 'Item Protocol Contacts',
        title: 'Contact us',
        description: null,
        content: null,
        convertListToObjectByName: false,
        convertLabelsToObjectByName: true,
        media: [],
        list: [
          {
            title: 'Start free',
            description: null,
            content: null,
            index: null,
            name: 'button',
            json: null,
            link: 'https://airtable.com/shr8Z21VbnmoS8Q4c',
          },
          {
            title: 'For developers',
            description: null,
            content: null,
            index: null,
            name: 'button',
            json: null,
            link: 'https://discordapp.com/invite/ArJm2gm',
          },
        ],
        labels: [],
      },
      {
        slug: 'about',
        name: 'Item Protocol Market',
        title: 'Item Market',
        description: null,
        content:
          '<p>Check out a use case for Item Protocol:</p>' +
          '<p>' +
          '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/01e3c39fab6c410da2b3e702588d4670.png" alt="text">' +
          '</p>',
        convertListToObjectByName: true,
        convertLabelsToObjectByName: true,
        media: [],
        list: [
          {
            title: 'Liga',
            description: null,
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/38f89336bfc34096bdda8bbf64cec918.svg" alt="text">' +
              '</p>',
            index: null,
            name: 'link',
            json: null,
            link: 'https://ligatokens.io/',
          },
          {
            title: 'Nyan',
            description: null,
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/c56ae0f17d514b6c9d72dbd8a5074e75.svg" alt="text">' +
              '</p>',
            index: null,
            name: 'link',
            json: null,
            link: 'https://nyancat.io/',
          },
          {
            title: 'the Abyss',
            description: null,
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/4511ff33fc6c46b3ab6e55326b72836c.svg" alt="text">' +
              '</p>',
            index: null,
            name: 'link',
            json: null,
            link: 'https://www.theabyss.com',
          },
          {
            title: 'Shadow Era',
            description: null,
            content:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/6b309f11f45a42f094caff581b554424.svg" alt="text">' +
              '</p>',
            index: null,
            name: 'link',
            json: null,
            link: 'http://www.shadowera.com/',
          },
        ],
        labels: [
          {
            name: 'link-header',
            text: 'Projects that already use Item Protocol',
          },
        ],
      },
      {
        slug: 'products',
        name: 'Item Protocol Products ',
        title: 'Products',
        description: null,
        content: null,
        convertListToObjectByName: false,
        convertLabelsToObjectByName: true,
        media: [],
        list: [
          {
            title: 'Box solution',
            description:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/599b420fd5cb4999a3d1e714196932ff.svg" alt="text">' +
              '</p>',
            content:
              '<p>All you need to build blockchain games and and attract users. Start from scratch and be an early ' +
              'player in the lucrative blockchain gaming space</p>' +
              '<ul>\n<li>Open source</li>\n<li>Easy to tokenize</li>\n<li>Item Protocol with scalable contracts</li>\n</ul>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: 'SDK',
            description:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/5b11a06d666b4ec889e320f0b468707b.svg" alt="text">' +
              '</p>',
            content:
              '<p>A comprehensive set of tools for game development. Use it to build your first blockchain game!</p>' +
              '<ul>\n<li>Tools &amp; Libraries</li>\n<li>Customizable Inventory</li>\n<li>Easy to integrate</li>\n</ul>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
          {
            title: 'Store Instance',
            description:
              '<p>' +
              '<img src="https://s3.eu-central-1.amazonaws.com/dev.wavesplatform.com/fe27c6898b504d58a0a14647aa93ea9a.svg" alt="text">' +
              '</p>',
            content:
              '<p>A convenient online store for gaming products. Check out its features!</p>' +
              '<ul>\n<li>API on GraphQL</li>\n<li>Custom environment</li>\n<li>Easy to deploy</li>\n</ul>',
            index: null,
            name: null,
            json: null,
            link: null,
          },
        ],
        labels: [],
      },
      {
        slug: 'documentations',
        name: 'Item Protocol Documentations',
        title: 'Documentations',
        description: null,
        content: null,
        convertListToObjectByName: false,
        convertLabelsToObjectByName: true,
        media: [],
        list: [
          {
            title: 'Guides',
            description:
              '<p>' +
              '<img src="/assets/i/book.svg" alt="Guides icon">' +
              '</p>',
            content: null,
            index: null,
            name: null,
            json: null,
            link: 'https://docs.item.sh/guides',
          },
          {
            title: 'Protocol Concept',
            description:
              '<p>' +
              '<img src="/assets/i/protocol.svg" alt="Protocol concept icon">' +
              '</p>',
            content: null,
            index: null,
            name: null,
            json: null,
            link: 'http://docs.item.sh/protocol-concept',
          },
          {
            title: 'Tools/Libraries',
            description:
              '<p>' +
              '<img src="/assets/i/tools.svg" alt="Tools/Libraries icon">' +
              '</p>',
            content: null,
            index: null,
            name: null,
            json: null,
            link: 'http://docs.item.sh/tools-libs',
          },
          {
            title: 'API Reference',
            description:
              '<p>' +
              '<img src="/assets/i/api.svg" alt="Api Reference icon">' +
              '</p>',
            content: null,
            index: null,
            name: null,
            json: null,
            link: 'http://docs.item.sh/api',
          },
        ],
        labels: [],
      },
    ],
  },
]);
