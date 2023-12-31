let plugins = [
  '-lunr',
  '-sharing',
  '-search',
  '-favicon',
  'code',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts'
];
if (process.env.NODE_ENV == 'dev') {
  plugins.push('livereload');
}
module.exports = {
  title: '开发规范',
  author: '随风',
  lang: 'zh-cn',
  description: '开发规范',
  plugins,
  pluginsConfig: {
    'flexible-alerts': {
      style: 'flat',
      iconVisibility: 'hidden',
      labelVisibility: 'hidden'
    },
    code: {
      copyButtons: true,
    },
    'theme-lou': {
      color: '#2096FF',
      favicon: 'assets/favicon.ico',
      logo: 'assets/logo.png',
      autoNumber: 3,
      forbidCopy: false,
      'search-placeholder': '众里寻他千百度',
      'hide-elements': ['.summary .gitbook-link'],
      copyright: {
        author: 'GitBook',
      },
    },
  },
  variables: {
    themeLou: {
      // 顶部导航栏配置
      nav: [
        {
          target: '_blank',
          url: 'https://space.bilibili.com',
          name: 'B站',
        },
        {
          target: '_blank',
          url: 'https://ke.qq.com/course',
          name: '腾讯课堂',
        },
        {
          target: '_blank',
          url: 'https://github.com/p5sf',
          name: 'GitHub',
        },
      ],
    },
  },
};
