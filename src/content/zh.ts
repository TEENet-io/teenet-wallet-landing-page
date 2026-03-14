import { ContentData } from './types'

export const zh: ContentData = {
  locale: 'zh',
  meta: {
    title: '给 OpenClaw 的可信安全钱包 | TEENet Secure Wallet',
    description: '通过对话创建和使用链上钱包，为敏感操作设置规则，并通过 Passkey 完成授权，由 TEENet 提供可信执行能力。',
    ogLocale: 'zh_CN',
  },
  header: {
    brandName: 'TEENet Secure Wallet',
    nav: [
      { label: '产品', href: '#product' },
      { label: '如何工作', href: '#how-it-works' },
      { label: '安全与授权', href: '#security' },
      { label: '开发者', href: '#developers' },
      { label: '常见问题', href: '#faq' },
    ],
    ctaPrimary: '申请试用',
    ctaSecondary: '查看 Demo',
  },
  hero: {
    headline: 'OpenClaw 可信钱包',
    subheadline: '对话管理链上钱包。设定执行规则。Passkey 授权敏感操作。',
    supporting: '运行在 TEENet 可信执行底座上的钱包应用',
    tags: ['对话创建钱包', '规则化执行', 'Passkey 授权', 'Built on TEENet'],
    ctaPrimary: '申请试用',
    ctaSecondary: '查看 Demo',
  },
  whyThisMatters: {
    title: '能用钱包 ≠ 无限权限',
    intro: '问题不是 Agent 能不能交易，而是谁来控制它能做什么。',
    items: [
      { title: '执行边界至关重要', description: '并非每个操作都应该自由执行。用户需要清晰地控制 Agent 对资产的操作权限。' },
      { title: '部分操作需要审批', description: '超过阈值的转账、与陌生合约的交互——这些应当需要用户明确确认。' },
      { title: '合约访问应受限制', description: '不是所有合约地址都应该被访问。白名单定义了 Agent 可以交互的范围。' },
      { title: '规则变更需要监督', description: '修改执行规则本身就是敏感操作。对阈值或白名单的变更可能需要独立授权。' },
    ],
  },
  howItWorks: {
    title: '如何使用',
    steps: [
      {
        title: '对话即交易',
        description: '在 Ethereum、Solana 等支持的链上创建钱包。查看余额、浏览交易历史、发起转账和合约调用——全部通过对话完成。',
      },
      {
        title: '设定规则',
        description: '定义需要审批的转账阈值、指定允许的合约地址、标记需要确认的敏感操作，规则变更本身也可以要求授权。',
      },
      {
        title: 'Passkey 授权',
        description: '当操作触发规则时，你会在聊天中收到授权链接。打开授权页面，通过 Passkey 或生物识别验证，操作才会继续执行。',
      },
    ],
  },
  coreFeatures: {
    title: '为 Agent 驱动的交易而生',
    features: [
      {
        title: '对话原生',
        description: '通过与 OpenClaw 的自然对话创建钱包、查看余额和历史、发起转账和合约调用。',
      },
      {
        title: '策略强制',
        description: '转账阈值、合约白名单、高风险操作限制构成默认执行边界。策略是强制执行的，不只是建议。',
      },
      {
        title: '独立授权',
        description: '敏感操作会生成授权链接，引导到独立的授权页面。验证使用 Passkey——只有完成授权后操作才会执行。',
      },
      {
        title: '可信硬件',
        description: '敏感钱包逻辑运行在 TEENet 可信执行底座上。授权与执行在基础设施层面绑定，而非仅作为 UI 流程叠加。',
      },
    ],
  },
  builtOnTEENet: {
    title: 'TEENet 驱动',
    points: [
      '这是一个构建在 TEENet 上的钱包应用——而非完全开源的钱包技术栈。',
      '它在应用层为 OpenClaw 提供钱包能力。',
      '敏感审批流程使用 Passkey 进行用户验证。',
      '执行依赖 TEENet 的可信运行时和策略能力。',
    ],
    closingPhrase: '开放的接入体验，可信的执行底座。',
    learnMoreText: '进一步了解 TEENet 的信任与安全机制',
  },
  developerSection: {
    title: '开发者集成',
    description: '开发者可以接入钱包交互、规则控制和审批流程等集成能力。TEENet 运行时本身不开源，但面向应用的集成接入是开放且直接的。',
    ctaPrimary: '开发者预览',
    ctaSecondary: '申请接入',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: '这是什么产品？',
        answer: 'TEENet Secure Wallet 是为 OpenClaw 打造的钱包应用，让用户通过对话创建和管理链上钱包、为执行设置规则、并通过 Passkey 授权敏感操作。它运行在 TEENet 可信执行底座上。',
      },
      {
        question: '它和普通钱包有什么区别？',
        answer: '与普通钱包不同，TEENet Secure Wallet 通过规则强制执行边界，并要求对敏感操作进行独立的 Passkey 授权。钱包逻辑运行在可信执行环境中，而非标准后端。',
      },
      {
        question: '每个操作都需要审批吗？',
        answer: '不需要。在预定义规则范围内的日常操作无需中断即可执行。只有超出阈值或与白名单外合约交互的操作才会触发审批。',
      },
      {
        question: '审批是怎么运作的？',
        answer: '当敏感操作被触发时，你会在聊天中收到授权链接。打开授权页面，通过 Passkey 或生物识别验证。只有验证成功后操作才会继续。',
      },
      {
        question: '为什么这套授权值得信任？',
        answer: '授权不是聊天回复——而是使用 Passkey 的独立验证步骤。规则定义的是真正的执行边界，不是 UI 提示。而且钱包逻辑运行在 TEENet 上，一个硬件保护的可信执行环境，信任是可验证的。',
      },
      {
        question: '它是完全开源的吗？',
        answer: '应用集成层是开放的。TEENet 运行时本身不开源。该产品提供可信执行能力，而不要求整个技术栈开源。',
      },
    ],
  },
  finalCTA: {
    headline: '更强能力，同等控制。',
    body: [
      '用对话管理钱包。',
      '用规则控制风险。',
      '用 Passkey 批准关键动作。',
    ],
    ctaPrimary: '申请试用',
    ctaSecondary: '查看 Demo',
    supporting: '为 OpenClaw 而生，由 TEENet 提供可信执行能力',
  },
  footer: {
    brandLine: 'TEENet Secure Wallet',
    linkGroups: [
      {
        title: '产品',
        links: [
          { label: '产品', href: '#product' },
          { label: '如何工作', href: '#how-it-works' },
          { label: '安全与授权', href: '#security' },
        ],
      },
      {
        title: '开发者',
        links: [
          { label: '开发者', href: '#developers' },
          { label: '常见问题', href: '#faq' },
        ],
      },
      {
        title: '法律',
        links: [
          { label: '隐私政策', href: '#' },
          { label: '使用条款', href: '#' },
          { label: '联系我们', href: '#' },
        ],
      },
    ],
    bottomLine: '为 OpenClaw 而生，由 TEENet 提供支持。',
  },
  betaForm: {
    title: '申请试用',
    placeholder: '请输入邮箱地址',
    submit: '提交',
    success: '感谢！我们会尽快联系您。',
    error: '请输入有效的邮箱地址。',
    close: '关闭',
  },
}
