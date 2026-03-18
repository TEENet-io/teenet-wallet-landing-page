import { ContentData } from './types'

export const en: ContentData = {
  locale: 'en',
  meta: {
    title: 'A Trusted Wallet for OpenClaw | TEENet Secure Wallet',
    description: 'Create and use on-chain wallets through chat, set rules for sensitive actions, and approve risk with Passkey — powered by TEENet trusted execution.',
    ogLocale: 'en_US',
  },
  header: {
    brandName: 'TEENet Secure Wallet',
    nav: [
      { label: 'Product', href: '#product' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Security', href: '#security' },
      { label: 'Developers', href: '#developers' },
      { label: 'FAQ', href: '#faq' },
    ],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
  },
  hero: {
    eyebrow: 'For OpenClaw users, developers, and builders',
    headline: 'A Wallet Your Agent Can Use\n— Without Putting Your Assets at Risk',
    subheadline: 'Let your agent act. Keep approval for what matters.',
    chips: ['Keys stay protected', 'Your agent follows your rules', 'Sensitive actions need approval', 'Passkey confirmation'],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
    supporting: 'Handle routine actions with your agent. Keep approval for the ones that matter.',
    trustLine: 'Built for OpenClaw. Secured by TEENet.',
  },
  whyThisMatters: {
    transition: 'You want your agent to help — not to take over.',
    title: 'Why you\'d actually want this wallet',
    subtitle: 'Because giving an agent wallet access should feel useful, controlled, and natural.',
    cards: [
      { title: 'Let your agent do real work', description: 'Check balances, prepare transactions, and handle routine actions — without doing everything yourself.' },
      { title: 'Stay in control', description: 'Your agent acts within the rules you set, so transfers, contract interactions, and other sensitive actions don\'t happen unchecked.' },
      { title: 'Step in when it matters', description: 'When something needs your sign-off, confirm it with a familiar Passkey flow that keeps security simple.' },
    ],
    passkey: {
      tooltipTitle: 'Why Passkey for approval?',
      tooltipBody: 'Security best practices recommend human approval for high-risk agent actions. Passkeys are a phishing-resistant way to make that approval simple and strong.',
      tooltipRef: 'Based on guidance from OWASP, NIST, and FIDO.',
    },
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        title: 'Chat to Transact',
        description: 'Create wallets on supported chains like Ethereum or Solana. Check balances, review transaction history, initiate transfers and contract calls — all through conversation.',
      },
      {
        title: 'Set the Rules',
        description: 'Define transfer thresholds that require approval, specify allowed contract addresses, flag sensitive actions for confirmation, and optionally require authorization for rule changes themselves.',
      },
      {
        title: 'Approve with Passkey',
        description: 'When an action triggers a rule, you receive an approval link in chat. Open the approval page, verify with Passkey or biometrics, and the action proceeds only after successful approval.',
      },
    ],
  },
  coreFeatures: {
    title: 'Built for Agent-Driven Transactions',
    features: [
      {
        title: 'Chat-Native',
        description: 'Create wallets, check balances and history, initiate transfers and contract calls — all through natural conversation with OpenClaw.',
      },
      {
        title: 'Policy-Enforced',
        description: 'Transfer thresholds, contract allowlists, and high-risk action restrictions form the default execution boundary. Policy is enforced, not suggested.',
      },
      {
        title: 'Independent Approval',
        description: 'Sensitive actions generate an approval link leading to a dedicated approval page. Verification uses Passkey — execution proceeds only after approval.',
      },
      {
        title: 'Trusted Runtime',
        description: "Sensitive wallet logic runs on TEENet's trusted runtime. Authorization and execution are tied together at the infrastructure level, not layered on as a UI flow.",
      },
    ],
  },
  builtOnTEENet: {
    title: 'Powered by TEENet',
    points: [
      'This is a wallet application built on TEENet — not a fully open-source wallet stack.',
      'It provides wallet capabilities to OpenClaw at the application layer.',
      'Sensitive approval flows use Passkey for user verification.',
      "Execution relies on TEENet's trusted runtime and policy capabilities.",
    ],
    closingPhrase: 'Open integration, trusted execution.',
    learnMoreText: 'Learn more about TEENet trust and security',
  },
  developerSection: {
    title: 'Developer Integration',
    description: 'Skills and integration surfaces are available for developers to integrate wallet interactions, rule controls, and approval flows. TEENet runtime itself is not open source, but application-facing integration is open and straightforward.',
    ctaPrimary: 'Developer Preview',
    ctaSecondary: 'Request Access',
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is this product?',
        answer: "TEENet Secure Wallet is a wallet application for OpenClaw that lets users create and manage on-chain wallets through chat, set rules for execution, and approve sensitive actions with Passkey. It runs on TEENet's trusted runtime.",
      },
      {
        question: 'How is it different from a regular wallet?',
        answer: 'Unlike a regular wallet, TEENet Secure Wallet enforces execution boundaries through rules and requires independent Passkey approval for sensitive actions. The wallet logic runs inside a trusted execution environment, not a standard backend.',
      },
      {
        question: 'Does every action require approval?',
        answer: 'No. Routine actions within predefined rules execute without interruption. Only actions that exceed thresholds or interact with contracts outside the allowlist trigger approval.',
      },
      {
        question: 'How does approval work?',
        answer: 'When a sensitive action is triggered, you receive an approval link in chat. You open the approval page and verify with Passkey or biometrics. The action proceeds only after successful verification.',
      },
      {
        question: 'Why is this approval flow trustworthy?',
        answer: 'Approval is not a chat reply — it is an independent verification step using Passkey. Rules define real execution boundaries, not UI hints. And the wallet logic runs on TEENet, a hardware-protected trusted execution environment where trust is verifiable.',
      },
      {
        question: 'Is it fully open source?',
        answer: 'The application integration layer is open. TEENet runtime itself is not open source. The product provides trusted execution capabilities without requiring the full stack to be open.',
      },
    ],
  },
  finalCTA: {
    headline: 'More Power. Same Control.',
    body: [
      'Use chat to manage wallets.',
      'Use rules to control risk.',
      'Use Passkey to approve critical actions.',
    ],
    ctaPrimary: 'Join Beta',
    ctaSecondary: 'Watch Demo',
    supporting: 'Built for OpenClaw. Powered by TEENet trusted execution.',
  },
  footer: {
    brandLine: 'TEENet Secure Wallet',
    linkGroups: [
      {
        title: 'Product',
        links: [
          { label: 'Product', href: '#product' },
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Security', href: '#security' },
        ],
      },
      {
        title: 'Developers',
        links: [
          { label: 'Developers', href: '#developers' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
    ],
    bottomLine: 'Built for OpenClaw. Powered by TEENet.',
  },
  betaForm: {
    title: 'Join the Beta',
    placeholder: 'Enter your email',
    submit: 'Sign Up',
    success: "Thanks! We'll be in touch.",
    error: 'Please enter a valid email address.',
    close: 'Close',
  },
}
