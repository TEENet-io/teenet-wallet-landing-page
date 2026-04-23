import { ContentData } from './types'

export const en: ContentData = {
  locale: 'en',
  meta: {
    title: 'A Trusted Wallet for Agentic Applications | TEENet Wallet',
    description: 'An open-source alpha wallet reference app for agentic applications. Explore the code or try the limited testnet alpha at wallet.teenet.app.',
    ogLocale: 'en_US',
  },
  header: {
    brandName: 'TEENet Wallet',
    nav: [
      { label: 'Wallet', href: '#product' },
      { label: 'Developers', href: '#developers' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Security', href: '#security' },
      { label: 'TEENet', href: '#teenet' },
    ],
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Open Alpha App',
  },
  hero: {
    eyebrow: 'For developers building agentic applications',
    headline: 'An Open-Source Wallet\nfor Agentic Applications',
    subheadline: 'Study the alpha reference app, fork the flow, or try it on testnet. TEENet keeps high-risk actions behind hardware-enforced rules and Passkey approval.',
    badges: ['Open source', 'Alpha', 'Testnet only', 'Limited registration: first 500 users'],
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Open Alpha App',
    tagline: 'Limited testnet alpha now open at wallet.teenet.app.',
    flowDiagram: {
      nodes: [
        { title: 'Agent acts', subtitle: 'Send 0.8 tETH' },
        { title: 'Rules check', subtitle: 'Exceeds 0.1 tETH limit' },
        { title: 'You approve', subtitle: 'Passkey confirmed' },
      ],
    },
  },
  whyThisMatters: {
    transition: 'What changes when your agent has a wallet',
    title: 'Why you\'d actually want this wallet',
    subtitle: 'Your agent handles the routine. You handle what matters. Here\'s what that looks like in the current alpha.',
    cards: [
      { title: 'Let your agent do real work', description: 'Balances, transfers, activity checks — your agent handles day-to-day wallet tasks so you don\'t have to.' },
      { title: 'Stay in control', description: 'Set transfer limits, restrict which contracts your agent can interact with, and require approval for rule changes — all configurable by you.' },
      { title: 'Step in when it matters', description: 'When an action exceeds your rules, you get a clear review prompt. One Passkey confirmation and it\'s done — no gas fees, no multisig coordination.' },
    ],
    passkey: {
      tooltipTitle: 'Why Passkey for approval?',
      tooltipBody: 'Security best practices recommend human approval for high-risk agent actions. Passkeys are a phishing-resistant way to make that approval simple and strong.',
      tooltipRef: 'Based on guidance from OWASP, NIST, and FIDO.',
    },
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'A testnet transaction, start to finish',
    subtitle: 'Your agent prepares a testnet transfer. The wallet checks it against your rules. You confirm with Passkey.',
    steps: [
      {
        title: 'You ask, your agent prepares',
        description: 'Describe what you need in plain language. Your agent handles the blockchain interaction.',
      },
      {
        title: 'Rules are checked inside the TEE',
        description: 'Before anything is signed, your rules are enforced inside a hardware-protected environment — not by the agent.',
      },
      {
        title: 'You confirm with Passkey — or reject',
        description: 'Actions that exceed your limits need your approval. Routine actions within limits go through automatically.',
      },
    ],
  },
  whyTrustIt: {
    eyebrow: 'Why you can trust it',
    title: 'A control layer that stays outside the app',
    subtitle: 'Rules, keys, and approval checks sit inside TEENet\'s protected control layer — not in ordinary backend code.',
    learnMoreText: 'Learn more about TEENet',
    cards: [
      {
        title: 'Wallet logic runs inside TEEs',
        description: 'Rule checks, authorization, and signing execute inside hardware-protected enclaves instead of normal server memory.',
      },
      {
        title: 'Keys stay sharded',
        description: 'Private keys are created inside TEEs, never exported, and split across independent nodes with threshold cryptography.',
      },
      {
        title: 'Every node must attest first',
        description: 'Before a node can join signing, it has to prove through hardware attestation that the expected code is running.',
      },
      {
        title: 'No one signs alone',
        description: 'Multiple attested nodes must cooperate, so no single operator, cloud provider, or compromised server can sign on its own.',
      },
    ],
  },
  developers: {
    eyebrow: 'For developers and builders',
    title: 'Open source. Built to be forked.',
    subtitle: 'Start with the wallet app, approval flow, and agent skills. Use the alpha repo as a reference app or as the base for your own build.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Read the docs',
    points: [
      { title: 'App structure', description: 'Inspect wallet actions, approval flows, and Passkey integration without reverse-engineering the stack.' },
      { title: 'Agent skills', description: 'Reuse the built-in skills for transfers, balance checks, and contract calls, or replace them with your own.' },
      { title: 'Fork and build', description: 'Swap the UI, change the rules, and connect your own agent without starting from scratch.' },
    ],
  },
  beyondWallet: {
    eyebrow: 'BEYOND THE WALLET',
    title: 'The wallet is the first app. TEENet is the platform.',
    description: 'TEENet provides the hardware-isolated runtime, managed key custody, and rule enforcement underneath the wallet. The same control layer can power other agentic applications that need to protect secrets and gate sensitive actions.',
    tags: ['Hardware-isolated runtime', 'Managed key custody', 'Hardware-enforced access control'],
    cta: 'Explore TEENet Platform',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions you may still have',
    subtitle: 'About the wallet, approvals, and building on TEENet.',
    items: [
      {
        question: 'What makes this different from a regular wallet?',
        answer: 'Most wallets either give your agent full access or no access. This wallet lets your agent handle routine actions while enforcing transfer limits, contract allowlists, and approval requirements inside a hardware-protected environment — not just in application code.',
      },
      {
        question: 'Does every action require approval?',
        answer: 'No. Routine actions can move through normally. Approval is only required when an action crosses a rule you\'ve set, such as a transfer limit or another sensitive condition.',
      },
      {
        question: 'Can the agent move funds on its own?',
        answer: 'The agent can only act within the rules and approval requirements attached to the wallet. It does not get unlimited authority.',
      },
      {
        question: 'How does approval work?',
        answer: 'When an action needs your sign-off, you review it and confirm it with Passkey in a dedicated approval flow.',
      },
      {
        question: 'Why use Passkey here?',
        answer: 'Passkey makes important approvals feel familiar and simple, while keeping them tied to a stronger, user-controlled confirmation step.',
      },
      {
        question: 'Is this built for developers too?',
        answer: 'Yes. Developers and builders can explore the wallet app and skills on GitHub, then adapt the flow for their own agentic applications.',
      },
      {
        question: 'Why is approval more trustworthy here?',
        answer: 'Because approval is not enforced only by the wallet app itself. Sensitive actions are verified in TEENet\'s protected control layer, so a normal app or backend cannot approve them on its own.',
      },
      {
        question: 'How do I get started?',
        answer: 'You can open the limited alpha app on testnet at wallet.teenet.app, or go to GitHub if you want to study the implementation and build on top of it.',
      },
      {
        question: 'Can I build my own agent app on TEENet?',
        answer: 'Yes. TEENet is a general-purpose platform for agentic applications that need hardware-isolated execution, managed key custody, and configurable approval policies. The wallet is one example — you can build any AI agent application that needs secure key management and rule enforcement. Start with the SDK at github.com/TEENet-io/teenet-sdk.',
      },
      {
        question: 'Can I export my private keys?',
        answer: 'Not during the alpha. Wallet keys are generated and stored exclusively inside hardware-protected environments and cannot be exported. The current alpha is limited to developer trials on testnet and does not support mainnet assets. We will revisit this policy based on community feedback and security assessments as the platform evolves.',
      },
    ],
    ctaBridge: 'Ready to try it — or build with it?',
  },
  finalCTA: {
    title: 'Start with the wallet. Keep TEENet in view.',
    subtitle: 'Read the code, try the limited alpha app, then dig into the platform behind it.',
    ctaPrimary: 'View on GitHub',
    ctaSecondary: 'Open Alpha App',
    ctaTertiary: 'Read the docs',
    ctaPlatform: 'Explore TEENet Platform',
    supporting: 'Limited alpha registration now open for the first 500 testnet users.',
  },
  footer: {
    brandName: 'TEENet Wallet',
    brandLine: 'Open-source alpha wallet and reference app for agentic applications. Testnet only.',
    linkGroups: [
      {
        title: 'Wallet',
        links: [
          { label: 'Wallet', href: '#product' },
          { label: 'How it works', href: '#how-it-works' },
          { label: 'Security', href: '#security' },
          { label: 'Open alpha app', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: 'Docs', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
          { label: 'TEENet Platform', href: '/en/platform' },
          { label: 'TEENet', href: 'https://github.com/TEENet-io' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/en/privacy' },
          { label: 'Terms', href: '/en/terms' },
          { label: 'Contact', href: 'mailto:contact@teenet.io' },
        ],
      },
    ],
    copyright: '\u00a9 2026 TEENet Wallet',
  },
  betaForm: {
    title: 'Create Wallet Account',
    placeholder: 'Enter your email',
    submit: 'Continue',
    success: 'Thanks! Continue your registration in the wallet app.',
    error: 'Please enter a valid email address.',
    close: 'Close',
  },
}
