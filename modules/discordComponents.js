import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  window.$discordMessage = {
    profiles: {
      suggestions: {
        author: 'Suggestions',
        avatar: 'https://cdn.discordapp.com/avatars/474051954998509571/4be94ad8814f59502586974ee31efd21.png?size=4096',
        bot: true,
        verified: true,
        roleColor: '#ffd663',
        roleIcon: 'https://cdn.discordapp.com/role-icons/603776935222444043/589987092edffb957b7f5a9fa69407b9.webp'
      },
      anthony: {
        author: 'anthony',
        avatar:
          'https://cdn.discordapp.com/avatars/158063324699951104/d25a7deec7b308ddf8d4d152808f8058.png',
        roleColor: '#ffeaa7',
        roleIcon: '👔',
      },
    },
  };
}
