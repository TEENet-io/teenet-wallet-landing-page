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
    ctaSecondary: '打开 Alpha App',
  },
  hero: {
    eyebrow: '面向正在构建 Agent 应用的开发者',
    headline: '一个面向 Agent 应用的\n开源钱包参考实现',
    subheadline: '你可以直接研究这套 Alpha 钱包、fork 这条交互流程，或者在测试网上亲自试用。TEENet 会把高风险操作留在硬件级规则和 Passkey 确认之后。',
    badges: ['开源', 'Alpha', '仅限测试网', '限量开放：前 500 位用户'],
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '打开 Alpha App',
    tagline: '有限开放的测试网 Alpha 现已上线：wallet.teenet.app。',
    flowDiagram: {
      nodes: [
        { title: 'Agent 发起操作', subtitle: '发送 0.8 tETH' },
        { title: '规则检查', subtitle: '超过 0.1 tETH 限额' },
        { title: '你来确认', subtitle: 'Passkey 已验证' },
      ],
    },
  },
  whyThisMatters: {
    transition: '当你的 Agent 有了钱包，会发生什么',
    title: '为什么你会真的想用这个钱包',
    subtitle: '日常操作交给 Agent，重要的事你来把关。下面是它在当前 Alpha 里的实际样子。',
    cards: [
      { title: '让 Agent 真正帮你做事', description: '查余额、转账、查看最近交易——日常钱包操作交给 Agent，你不用亲自动手。' },
      { title: '该管住的，始终管得住', description: '设定转账限额、限制 Agent 可以交互的合约、要求规则变更需审批——一切由你配置。' },
      { title: '重要的时候，你来确认', description: '当操作超出你设定的规则，你会收到清晰的审核提示。一次 Passkey 确认即可完成——不用付 gas 费，不用多签协调。' },
    ],
    passkey: {
      tooltipTitle: '为什么这里用 Passkey？',
      tooltipBody: '对于高风险的 Agent 操作，安全最佳实践强调由人来确认；而 Passkey 提供了更抗钓鱼、更自然的确认体验。',
      tooltipRef: '基于 OWASP、NIST 和 FIDO 的安全指引。',
    },
  },
  howItWorks: {
    eyebrow: '如何工作',
    title: '一笔测试网交易，从头到尾',
    subtitle: 'Agent 准备一笔测试网转账，钱包对照你的规则检查，你用 Passkey 确认。',
    steps: [
      {
        title: '你说，Agent 来准备',
        description: '用自然语言描述你的需求，Agent 负责处理区块链交互。',
      },
      {
        title: '规则在 TEE 内完成检查',
        description: '在任何签名发生之前，你的规则会在硬件保护的环境中被执行——而不是由 Agent 来执行。',
      },
      {
        title: '你用 Passkey 确认——或拒绝',
        description: '超出限额的操作需要你的批准。限额内的日常操作会自动通过。',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: '为什么可以信任它',
    title: '真正和应用层分开的控制层',
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
        title: '没有人可以单独签名',
        description: '必须由多个已证明的节点协同完成签名，所以单一运营方、云服务商或被入侵的服务器都无法单独放行。',
      },
    ],
  },
  developers: {
    eyebrow: '面向开发者与构建者',
    title: '开源，也就是拿来 fork 的。',
    subtitle: '从钱包应用、审批流和 agent skills 开始。你可以把这套 Alpha 仓库当作参考实现，也可以直接作为自己项目的起点。',
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
  faq: {
    eyebrow: 'FAQ',
    title: '你可能还会想问',
    subtitle: '关于钱包、审批，以及在 TEENet 上构建。',
    items: [
      {
        question: '它和普通钱包有什么不一样？',
        answer: '大多数钱包要么让 Agent 拥有完全访问权，要么完全没有。这个钱包让 Agent 处理日常操作，同时在硬件保护的环境中执行转账限额、合约白名单和审批要求——而不仅仅是在应用代码中。',
      },
      {
        question: '是不是每个操作都要批准？',
        answer: '不是。日常操作可以正常进行。只有当某个动作触发了你设定的规则，比如超出转账限额或属于敏感操作时，才需要你的批准。',
      },
      {
        question: 'Agent 可以自己转钱吗？',
        answer: 'Agent 只能在钱包绑定的规则和审批要求内行动，不会获得无限制的控制权。',
      },
      {
        question: '批准流程是怎么工作的？',
        answer: '当某个操作需要你点头时，你会先看到审核信息，然后通过独立的 Passkey 流程完成确认。',
      },
      {
        question: '为什么这里用 Passkey？',
        answer: '因为它能让重要确认更自然、更熟悉，同时把最终确认保留在用户自己手里。',
      },
      {
        question: '这也是给开发者做的吗？',
        answer: '是的。开发者和构建者可以在 GitHub 上查看钱包应用和 skills，并在此基础上扩展自己的 Agent 应用。',
      },
      {
        question: '为什么这里的批准流程更值得信任？',
        answer: '因为批准不是只靠钱包 App 自己来执行。敏感操作会在 TEENet 的受保护控制层中完成验证，所以普通 App 或后端不能自己把它放行。',
      },
      {
        question: '我该怎么开始？',
        answer: '你可以直接前往 wallet.teenet.app 注册并体验有限开放的测试网 Alpha，也可以去 GitHub 研究实现并开始构建。',
      },
      {
        question: '我可以在 TEENet 上构建自己的 Agent 应用吗？',
        answer: '可以。TEENet 是一个通用平台，适用于需要硬件隔离执行、托管密钥保管和可配置审批策略的 Agent 应用。钱包只是其中一个例子——你可以构建任何需要安全密钥管理和规则执行的 AI Agent 应用。从 github.com/TEENet-io/teenet-sdk 开始。',
      },
      {
        question: '我可以导出我的私钥吗？',
        answer: '当前 Alpha 阶段不可以。钱包密钥完全在硬件保护的环境内生成和存储，无法导出。当前 Alpha 仅开放开发者在测试网上试用，还不支持主网资产。随着平台的发展，我们将根据社区反馈和安全评估重新审视此政策。',
      },
    ],
    ctaBridge: '准备好试试看，或者直接开始构建了吗？',
  },
  finalCTA: {
    title: '先从钱包开始，再理解背后的 TEENet',
    subtitle: '先看代码，或直接试用有限开放的 Alpha App，然后再深入平台能力。',
    ctaPrimary: '前往 GitHub',
    ctaSecondary: '打开 Alpha App',
    ctaTertiary: '查看文档',
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
          { label: '打开 Alpha App', href: 'https://wallet.teenet.app' },
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
  betaForm: {
    title: '创建钱包账户',
    placeholder: '请输入邮箱地址',
    submit: '继续',
    success: '感谢！请继续在钱包应用中完成注册。',
    error: '请输入有效的邮箱地址。',
    close: '关闭',
  },
}
