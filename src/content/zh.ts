import { ContentData } from './types'

export const zh: ContentData = {
  locale: 'zh',
  meta: {
    title: '面向 Agent 应用的可信钱包 | TEENet Wallet',
    description: '面向 Agent 应用的开源 Alpha 钱包参考实现。你可以直接研究代码，或前往 wallet.teenet.app 体验有限开放的测试网版本。',
    ogLocale: 'zh_CN',
  },
  header: {
    brandName: 'TEENet Wallet',
    nav: [
      { label: '钱包', href: '#product' },
      { label: '开发者', href: '#developers' },
      { label: '如何工作', href: '#how-it-works' },
      { label: '安全与授权', href: '#security' },
      { label: 'TEENet', href: '#teenet' },
    ],
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '试用 Alpha',
  },
  hero: {
    eyebrow: 'Fork 钱包，试跑流程',
    headline: '一个面向 Agent 应用的开源钱包参考实现',
    badges: ['开源', '测试网 Alpha', 'TEE 强制规则执行'],
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '试用 Alpha',
    tagline: '测试网 Alpha 限量开放给前 500 位用户。',
    flowDiagram: {
      nodes: [
        { title: 'Agent 发起操作', subtitle: '发送 0.8 tETH' },
        { title: '规则检查', subtitle: '超过 0.1 tETH 限额' },
        { title: '你来确认', subtitle: 'Passkey 已验证' },
      ],
    },
  },
  howItWorks: {
    eyebrow: '如何工作',
    title: '仓库里展示了什么',
    subtitle: '参考应用把 agent skills、策略检查和 Passkey 审批串成了一条钱包流程。',
    steps: [
      {
        title: 'Agent skills 调用钱包动作',
        description: '可以直接查看转账、余额查询和合约调用这些面向 Agent 的 skill。',
      },
      {
        title: '策略先拦住签名',
        description: '限额和审批规则会在请求进入签名前先执行。',
      },
      {
        title: 'Passkey 处理例外情况',
        description: '高风险操作转交用户确认，而不是把直接签名权交给 Agent。',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: '为什么可以信任它',
    title: '真正独立于应用层的控制层',
    subtitle: '规则、密钥和审批检查都放在 TEENet 的受保护控制层里，而不是普通后端代码里。',
    learnMoreText: '了解更多关于 TEENet',
    cards: [
      {
        title: '钱包逻辑运行在 TEE 内',
        description: '规则检查、授权和签名都在硬件保护的安全飞地里完成，而不是在普通服务器内存中执行。',
      },
      {
        title: '密钥始终保持分片状态',
        description: '私钥在 TEE 内生成、永不导出，并通过门限密码学分散到多个独立节点上。',
      },
      {
        title: '每个节点都先做硬件证明',
        description: '任何节点要参与签名，都必须先通过远程证明，确认运行的是预期代码。',
      },
      {
        title: '单个节点无法独自签名',
        description: '必须由多个已证明节点协同完成签名，因此单个被入侵节点无法独自放行。',
      },
    ],
  },
  developers: {
    eyebrow: '面向开发者与构建者',
    title: '从钱包仓库开始',
    subtitle: '从钱包应用、审批流和 agent skills 开始。你可以把这套仓库当作参考实现，也可以直接作为自己项目的起点。',
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '查看文档',
    points: [
      { title: '应用架构', description: '直接查看钱包操作、审批流程和 Passkey 集成，不必自己先拆解整套栈。' },
      { title: 'Agent Skills', description: '复用内置的转账、余额查询和合约调用 skills，也可以全部换成你自己的。' },
      { title: 'Fork 并构建', description: '把钱包作为起点，替换 UI、改规则、接入你自己的 Agent，而不是从零开始。' },
    ],
  },
  beyondWallet: {
    eyebrow: 'BEYOND THE WALLET',
    title: '钱包是第一个应用，TEENet 才是平台',
    description: 'TEENet 提供钱包底层的硬件隔离运行时、托管式密钥保管和规则执行能力。相同的控制层也可以支撑其他需要保护秘密、约束敏感操作的 Agent 应用。',
    tags: ['硬件隔离运行时', '托管密钥保管', '硬件强制访问控制'],
    cta: '探索 TEENet 平台',
  },
  finalCTA: {
    title: '先从钱包开始，再看背后的平台',
    subtitle: '先看代码，或直接试用有限开放的 Alpha App，然后再深入平台能力。',
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '试用 Alpha',
    ctaPlatform: '探索 TEENet 平台',
    supporting: '有限开放的测试网 Alpha 现已面向前 500 位用户开放注册。',
  },
  footer: {
    brandName: 'TEENet Wallet',
    brandLine: '面向 Agent 应用的开源 Alpha 钱包与参考实现，当前仅限测试网。',
    linkGroups: [
      {
        title: '钱包',
        links: [
          { label: '钱包', href: '#product' },
          { label: '如何工作', href: '#how-it-works' },
          { label: '安全性', href: '#security' },
          { label: '试用 Alpha', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: '开发者',
        links: [
          { label: 'GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: '文档', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
          { label: 'TEENet Platform', href: '/zh/platform' },
          { label: 'TEENet', href: 'https://github.com/TEENet-io' },
        ],
      },
      {
        title: '法务',
        links: [
          { label: '隐私', href: '/zh/privacy' },
          { label: '条款', href: '/zh/terms' },
          { label: '联系我们', href: 'mailto:contact@teenet.io' },
        ],
      },
    ],
    copyright: '\u00a9 2026 TEENet Wallet',
  },
}
