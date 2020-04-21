export default [
  {
    slug: 'regions-ghg-emissions',
    path: '/:locale/regions/:region/regions-ghg-emissions',
    exact: true,
    province: true,
    default: true,
    member: 'ID.PB'
  },
  {
    slug: 'sectoral-circumstances',
    path: '/:locale/regions/:region/sectoral-circumstances',
    province: true
  },
  {
    slug: 'vulnerability-adaptivity',
    path: '/:locale/regions/:region/vulnerability-adaptivity',
    province: true
  },
  {
    slug: 'climate-sectoral-plan',
    path: '/:locale/regions/:region/sectoral-plan',
    province: true
  },
  {
    slug: 'economy',
    path: '/:locale/regions/:region/economy',
    member: 'ID.PB',
  },
  {
    slug: 'region-population',
    path: '/:locale/regions/:region/region-population',
    member: 'ID.PB'
  },
  {
    slug: 'social',
    path: '/:locale/regions/:region/social',
    member: 'ID.PB'
  },
  {
    slug: 'policy',
    path: '/:locale/regions/:region/policy',
    member: 'ID.PB'
  }
];
