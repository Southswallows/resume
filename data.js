var date = new Date();

module.exports = {
  // 输出友好格式的HTML
  pretty: true,

  // 基本信息
  cn_name: '郑燕南',
  en_name: 'brucezheng',
  avatar: 'http://7xkeeu.com1.z0.glb.clouddn.com/QQ截图20150716115233.png',
  motto: 'Stay Hungry, Stay foolish',
  desc: '郑燕南，来自江苏南京（六合），目前就读于东南大学机械学院，研究生二年级，爱说会笑，学习Coding中。',

  // 页面代码的GitHub地址
  code: 'https://github.com/Southswallows/resume',
  // banner背景图片
  bg: 'http://7xkeeu.com1.z0.glb.clouddn.com/1.jpg',
  // 页面最后更新时间
  update: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),

  // 求职意向
  city_image: 'http://7xkeeu.com1.z0.glb.clouddn.com/shanghai.gif',
  expectations: [
    '城市：上海',
    '岗位：产品经理',
    '公司产品的价值观与个人价值观没有严重分歧',
    '有神一样的队友，能够得到快速成长',
    '开明、活跃、默契的团队氛围',
    '符合行业水平的薪酬'
  ],

  // 联系方式
  contacts: [
    {
      title: 'Blog',
      link: 'http://yannan.me/',
      image: 'http://7xkeeu.com1.z0.glb.clouddn.com/blog.png'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/Southswallows',
      image: 'http://7xkeeu.com1.z0.glb.clouddn.com/github.png'
    },
    // {
    //   title: 'V2EX',
    //   link: 'https://www.v2ex.com/member/hustlzp',
    //   image: 'http://hustlzp-resume.qiniudn.com/v2ex.png'
    // },
    // {
    //   title: '豆瓣',
    //   link: 'http://www.douban.com/people/hustlzp',
    //   image: 'http://hustlzp-resume.qiniudn.com/douban.png'
    // },
    {
      title: 'Southswallows@gmail.com',
      image: 'http://7xkeeu.com1.z0.glb.clouddn.com/email.png'
    }
  ],

  // 作品
  projects: [
    {
      title: '乐创',
      desc: '3D打印团队“乐创”官网。',
      link: 'http://www.thu3d.com',
      image: 'http://hustlzp-resume.qiniudn.com/lemaker.jpg',
      tec: 'Flask / MySQL / Redis'
    },
    {
      title: '西窗烛',
      desc: '品味传统文学之美。',
      link: 'http://www.xichuangzhu.com',
      image: 'http://hustlzp-resume.qiniudn.com/xcz.jpg',
      tec: 'Flask / MySQL',
      source: 'https://github.com/hustlzp/xichuangzhu'
    },
    {
      title: 'Transy',
      desc: '中英翻译助手。',
      link: 'http://www.transy.org',
      image: 'http://hustlzp-resume.qiniudn.com/transy.png',
      tec: 'NodeJS / MongoDB',
      source: 'https://github.com/hustlzp/transy'
    },
    {
      title: 'Optico',
      desc: 'Website for Optico Company.',
      link: 'http://www.optico.com.cn',
      image: 'http://hustlzp-resume.qiniudn.com/optico.png',
      tec: 'Flask / MySQL',
      source: 'https://github.com/hustlzp/optico'
    },
    {
      title: 'YProgrammer',
      desc: '分享优质Web开发资源。',
      link: 'http://www.yprogrammer.com',
      image: 'http://hustlzp-resume.qiniudn.com/yp.png',
      tec: 'Django / MySQL',
      source: 'https://github.com/hustlzp/yprogrammer'
    },
    {
      title: 'AOD',
      desc: 'Demo for AOD Company.',
      link: 'http://hustlzp.github.io/aod',
      image: 'http://hustlzp-resume.qiniudn.com/aod.png',
      tec: 'HTML / CSS / JavaScript',
      source: 'https://github.com/hustlzp/aod/tree/gh-pages'
    }
  ],

  // 技能
  skills: [
    {
      name: 'Python',
      degree: '55'
    },
    {
      name: 'NodeJS',
      degree: '40'
    },
    {
      name: 'JavaScript',
      degree: '45'
    },
    {
      name: 'HTML / CSS',
      degree: '55'
    },
    {
      name: 'Ruby on Rails',
      degree: '20'
    },
    {
      name: 'MySQL / MongoDB / Redis',
      degree: '30'
    }
  ],

  // 阅读
  books: [
    {
      title: '小王子',
      image: 'http://hustlzp-resume.qiniudn.com/prince.jpg',
      link: 'http://book.douban.com/subject/2278402',
      quote: '因为我倾听过她的怨艾和自诩，甚至有时我聆听着她的沉默。因为她是我的玫瑰。'
    },
    {
      title: '禅者的初心',
      image: 'http://hustlzp-resume.qiniudn.com/zen.jpg',
      link: 'http://book.douban.com/subject/4898627',
      quote: '初学者的心空空如也，不受各种习性的羁绊。'
    },
    {
      title: '黑客与画家',
      image: 'http://hustlzp-resume.qiniudn.com/hp.jpg',
      link: 'http://book.douban.com/subject/6021440',
      quote: '非常严格的品味，再加上实现这种品味的能力。'
    },
    {
      title: '白领：美国的中产阶级',
      image: 'http://hustlzp-resume.qiniudn.com/white-collar.jpg',
      link: 'http://book.douban.com/subject/1860946',
      quote: '在像手工艺一类的工作中，游戏的质朴的自我表现和工作的未来价值的创造是融合在一起的。'
    },
    {
      title: '设计中的设计',
      image: 'http://hustlzp-resume.qiniudn.com/design.jpg',
      link: 'http://book.douban.com/subject/4230237',
      quote: '不是“这个好”，而是“这样就好”。'
    }
  ],

  // 教育
  educations: [
    {
      period: '2013.9 - 至今',
      title: '东南大学，机械学院 机械电子工程，硕士'
    },
    {
      period: '2009.9 - 2013.6',
      title: '浙江工业大学，机械学院 机械工程及自动化工程，学士'
    }
  ]
};