import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.anoswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.anoswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Your project',
    icon: 'PoolIcon',
    href: '/jungles',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: '/referral',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7-bsc',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/?token=0x1f546aD641B56b86fD9dCEAc473d1C7a357276B7',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/pancakeswap/pair-explorer/0xecc11a78490866e0073ebc4a4dcb6f75673c8685',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'NftIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x1f546ad641b56b86fd9dceac473d1c7a357276b7',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/pantherswap',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/pantherswap',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/price/PantherSwap-PANTHER',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/panther',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AnoSwap/',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@anoswap/s/anonymousswap-finance/whitepaper/',
      },
      {
        label: 'Blog',
        href: 'https://anoswap.medium.com/',
      },
      {
        label: 'Voting',
        href: '/comingsoon',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
