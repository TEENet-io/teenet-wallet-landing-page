export interface LegalSection {
  heading: string
  paragraphs: string[]
}

export interface LegalPageContent {
  meta: {
    title: string
    description: string
  }
  backLink: string
  title: string
  effectiveDate: string
  sections: LegalSection[]
}

// ─── Privacy Policy ───

export const privacyPageEn: LegalPageContent = {
  meta: {
    title: 'Privacy Policy | TEENet Wallet',
    description: 'How TEENet Wallet handles your data — what we collect, what we don\'t, and how your keys are protected.',
  },
  backLink: '← Back to Home',
  title: 'Privacy Policy',
  effectiveDate: 'Effective: April 15, 2026',
  sections: [
    {
      heading: '1. Who We Are',
      paragraphs: [
        'TEENet Wallet ("the Wallet") is operated by TEENet Technology (Hong Kong) Limited, registered in Hong Kong. This policy describes how we handle your data when you use the Wallet.',
        'Contact: contact@teenet.io',
      ],
    },
    {
      heading: '2. What We Collect',
      paragraphs: [
        'During the Alpha period, we collect only:',
        '• Email address: provided at registration, used for account identification and essential communications.',
        '• Passkey credentials: public key material used to verify your identity during approval flows. Your biometric data (fingerprint, face) never leaves your device — we only receive the cryptographic proof.',
        'We do not collect wallet balances, transaction history, browsing behavior, or device fingerprints. We do not use third-party analytics or tracking tools.',
      ],
    },
    {
      heading: '3. What We Do NOT Have Access To',
      paragraphs: [
        'Private keys generated within the Wallet are created and stored exclusively inside hardware-protected Trusted Execution Environments (TEEs). They are sharded across multiple independent nodes using threshold cryptography.',
        'No one — including TEENet operators, cloud providers, or application code — can access, export, or reconstruct your private keys. This is enforced by hardware, not by policy.',
      ],
    },
    {
      heading: '4. Key Non-Exportability',
      paragraphs: [
        'During the Alpha period, wallet keys cannot be exported from the TEE. This is a security decision for the testnet-only developer trial, not a restriction on production assets.',
        'This design ensures that your keys are never exposed to software, operators, or network attacks — even in a compromised environment. It is the foundation of the Wallet\'s security model.',
        'The current Alpha is limited to testnet use. Testnet balances and transactions have no monetary value and are provided only for developer evaluation.',
        'We will revisit this policy based on community feedback and security assessments as the platform evolves.',
      ],
    },
    {
      heading: '5. How We Use Your Data',
      paragraphs: [
        'We use your email and Passkey credentials solely for:',
        '• Authenticating your identity when you use the Wallet',
        '• Sending essential service communications (e.g. security alerts, Alpha updates)',
        'We will never sell, rent, or share your data with third parties for marketing purposes.',
      ],
    },
    {
      heading: '6. Data Storage and Security',
      paragraphs: [
        'Your registration data (email and Passkey public key) is stored in secured infrastructure. Access is restricted to essential operations only.',
        'All sensitive wallet operations — including signing, rule enforcement, and key management — occur inside hardware-isolated TEEs, separate from our application infrastructure.',
      ],
    },
    {
      heading: '7. Data Retention and Deletion',
      paragraphs: [
        'We retain your registration data for as long as your account is active.',
        'If you wish to delete your account and associated data, contact us at contact@teenet.io. Deletion will permanently remove associated wallet key material and any related testnet wallet state.',
      ],
    },
    {
      heading: '8. Your Rights',
      paragraphs: [
        'You have the right to:',
        '• Request access to the personal data we hold about you',
        '• Request correction of inaccurate data',
        '• Request deletion of your data',
        '• Withdraw from the Alpha at any time',
        'To exercise any of these rights, contact us at contact@teenet.io.',
      ],
    },
    {
      heading: '9. Changes to This Policy',
      paragraphs: [
        'We may update this policy as the product evolves. Material changes will be communicated via email. Continued use of the Wallet after changes take effect constitutes acceptance.',
      ],
    },
    {
      heading: '10. Contact',
      paragraphs: [
        'For any questions about this policy or your data:',
        'contact@teenet.io',
      ],
    },
  ],
}

export const privacyPageZh: LegalPageContent = {
  meta: {
    title: '隐私政策 | TEENet Wallet',
    description: 'TEENet Wallet 如何处理你的数据——我们收集什么、不收集什么，以及你的密钥如何受到保护。',
  },
  backLink: '← 返回首页',
  title: '隐私政策',
  effectiveDate: '生效日期：2026 年 4 月 15 日',
  sections: [
    {
      heading: '1. 我们是谁',
      paragraphs: [
        'TEENet Wallet（"本钱包"）由 TEENet Technology (Hong Kong) Limited 运营，该公司在香港注册。本政策描述了我们在您使用本钱包时如何处理您的数据。',
        '联系方式：contact@teenet.io',
      ],
    },
    {
      heading: '2. 我们收集什么',
      paragraphs: [
        '在 Alpha 期间，我们仅收集以下信息：',
        '• 邮箱地址：注册时提供，用于账户识别和必要的服务通信。',
        '• Passkey 凭证：用于在审批流程中验证您身份的公钥材料。您的生物识别数据（指纹、面部）永远不会离开您的设备——我们只接收加密证明。',
        '我们不收集钱包余额、交易历史、浏览行为或设备指纹。我们不使用第三方分析或追踪工具。',
      ],
    },
    {
      heading: '3. 我们无法访问什么',
      paragraphs: [
        '在本钱包内生成的私钥完全在硬件保护的可信执行环境（TEE）内创建和存储。它们通过门限密码学分片到多个独立节点。',
        '任何人——包括 TEENet 运营方、云服务商或应用代码——都无法访问、导出或重建您的私钥。这由硬件强制执行，而非仅靠政策约束。',
      ],
    },
    {
      heading: '4. 密钥不可导出性',
      paragraphs: [
        '在 Alpha 期间，钱包密钥无法从 TEE 中导出。这是针对仅限测试网的开发者试用所做的安全决策，而非对生产资产的限制。',
        '此设计确保您的密钥永远不会暴露给软件、运营方或网络攻击——即使在被入侵的环境中也是如此。这是本钱包安全模型的基础。',
        '当前 Alpha 仅限测试网使用。测试网余额和交易不具有货币价值，仅用于开发者评估。',
        '随着平台的发展，我们将根据社区反馈和安全评估重新审视此政策。',
      ],
    },
    {
      heading: '5. 我们如何使用您的数据',
      paragraphs: [
        '我们仅将您的邮箱和 Passkey 凭证用于：',
        '• 在您使用本钱包时验证您的身份',
        '• 发送必要的服务通信（如安全警报、Alpha 更新）',
        '我们绝不会出于营销目的将您的数据出售、出租或分享给第三方。',
      ],
    },
    {
      heading: '6. 数据存储与安全',
      paragraphs: [
        '您的注册数据（邮箱和 Passkey 公钥）存储在安全的基础设施中。访问权限仅限于必要操作。',
        '所有敏感钱包操作——包括签名、规则执行和密钥管理——都在硬件隔离的 TEE 内进行，与我们的应用基础设施分离。',
      ],
    },
    {
      heading: '7. 数据保留与删除',
      paragraphs: [
        '我们在您的账户处于活跃状态期间保留您的注册数据。',
        '如果您希望删除账户及相关数据，请联系 contact@teenet.io。删除将永久移除关联的钱包密钥材料以及相关的测试网钱包状态。',
      ],
    },
    {
      heading: '8. 您的权利',
      paragraphs: [
        '您有权：',
        '• 请求访问我们持有的关于您的个人数据',
        '• 请求更正不准确的数据',
        '• 请求删除您的数据',
        '• 随时退出 Alpha',
        '如需行使上述任何权利，请联系 contact@teenet.io。',
      ],
    },
    {
      heading: '9. 本政策的变更',
      paragraphs: [
        '随着产品的发展，我们可能会更新本政策。重大变更将通过邮件通知。变更生效后继续使用本钱包即表示接受。',
      ],
    },
    {
      heading: '10. 联系方式',
      paragraphs: [
        '如对本政策或您的数据有任何问题：',
        'contact@teenet.io',
      ],
    },
  ],
}

// ─── Terms of Service ───

export const termsPageEn: LegalPageContent = {
  meta: {
    title: 'Terms of Service | TEENet Wallet',
    description: 'Terms of Service for TEENet Wallet — Alpha status, testnet-only use, key custody, user responsibilities, and governing law.',
  },
  backLink: '← Back to Home',
  title: 'Terms of Service',
  effectiveDate: 'Effective: April 15, 2026',
  sections: [
    {
      heading: '1. Acceptance',
      paragraphs: [
        'By using TEENet Wallet ("the Wallet"), you agree to these Terms. If you do not agree, do not use the Wallet.',
      ],
    },
    {
      heading: '2. Alpha Status',
      paragraphs: [
        'The Wallet is currently in Alpha and is available only for developer trials on testnet. This means:',
        '• Features may change, be added, or be removed without prior notice.',
        '• The service may experience interruptions or downtime.',
        '• While we take security seriously and protect your keys with hardware-level isolation, no system is guaranteed to be free of all risks during an Alpha period.',
        '• The Wallet does not currently support mainnet transactions or custody of production assets.',
      ],
    },
    {
      heading: '3. What the Wallet Does',
      paragraphs: [
        'The Wallet allows you to create and use testnet wallets through an AI agent interface, with hardware-enforced security controls including transfer limits, contract allowlists, and Passkey-based approval flows.',
        'The Wallet is a tool. It does not provide financial advice, investment recommendations, or asset management services.',
      ],
    },
    {
      heading: '4. Key Custody and Non-Exportability',
      paragraphs: [
        'Wallet keys are generated and stored inside hardware-protected Trusted Execution Environments (TEEs). During the Alpha period, keys cannot be exported from the TEE. This is a deliberate security decision for the testnet-only developer trial.',
        'The current Alpha does not support mainnet assets. Any balances or transactions shown in the Wallet are for testnet evaluation only and have no monetary value.',
        'You acknowledge that if you lose access to your account and cannot verify your identity through the registered Passkey, recovery of key access may not be possible.',
        'We will revisit this policy based on community feedback and security assessments as the platform evolves.',
      ],
    },
    {
      heading: '5. User Responsibilities',
      paragraphs: [
        'You agree to:',
        '• Provide accurate registration information',
        '• Maintain the security of your device and Passkey credentials',
        '• Not use the Wallet for illegal activities, money laundering, or sanctions evasion',
        '• Not attempt to reverse-engineer, exploit, or attack the Wallet or TEENet infrastructure',
        '• Comply with applicable laws in your jurisdiction',
      ],
    },
    {
      heading: '6. Prohibited Use',
      paragraphs: [
        'You may not use the Wallet:',
        '• In any jurisdiction where digital asset services are prohibited by law',
        '• To process transactions related to illegal goods or services',
        '• To circumvent sanctions or export controls',
        '• To conduct any form of market manipulation',
      ],
    },
    {
      heading: '7. Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by law:',
        '• The Wallet is provided "as is" without warranties of any kind, express or implied.',
        '• We are not liable for losses arising from market movements, blockchain network issues, smart contract bugs in third-party protocols, or user error.',
        '• We are not liable for any losses arising from service interruptions during the Alpha period.',
        '• Our total liability shall not exceed the amount you paid to use the Wallet (which during the free Alpha is zero).',
      ],
    },
    {
      heading: '8. Service Changes and Termination',
      paragraphs: [
        'We reserve the right to:',
        '• Modify, suspend, or discontinue any part of the Wallet at any time',
        '• Terminate your access if you violate these Terms',
        'If we discontinue the service, we may end access to the Alpha trial and remove associated testnet wallet state after reasonable notice.',
      ],
    },
    {
      heading: '9. Intellectual Property',
      paragraphs: [
        'The Wallet application integration layer is open source. The TEENet runtime and platform infrastructure are proprietary.',
        'You may use, fork, and modify the open source components under their respective licenses. You may not copy, reverse-engineer, or redistribute the proprietary TEENet platform components.',
      ],
    },
    {
      heading: '10. Governing Law',
      paragraphs: [
        'These Terms are governed by the laws of the Hong Kong Special Administrative Region. Any disputes shall be resolved in the courts of Hong Kong.',
      ],
    },
    {
      heading: '11. Changes to These Terms',
      paragraphs: [
        'We may update these Terms. Material changes will be communicated via email. Continued use after changes take effect constitutes acceptance.',
      ],
    },
    {
      heading: '12. Contact',
      paragraphs: [
        'For questions about these Terms:',
        'contact@teenet.io',
      ],
    },
  ],
}

export const termsPageZh: LegalPageContent = {
  meta: {
    title: '服务条款 | TEENet Wallet',
    description: 'TEENet Wallet 服务条款——Alpha 状态、仅限测试网使用、密钥托管、用户责任和适用法律。',
  },
  backLink: '← 返回首页',
  title: '服务条款',
  effectiveDate: '生效日期：2026 年 4 月 15 日',
  sections: [
    {
      heading: '1. 接受条款',
      paragraphs: [
        '使用 TEENet Wallet（"本钱包"）即表示您同意本条款。如果您不同意，请勿使用本钱包。',
      ],
    },
    {
      heading: '2. Alpha 状态',
      paragraphs: [
        '本钱包目前处于 Alpha 阶段，且仅开放给开发者在测试网上试用。这意味着：',
        '• 功能可能会在无事先通知的情况下更改、新增或移除。',
        '• 服务可能会出现中断或停机。',
        '• 虽然我们非常重视安全，并通过硬件级隔离保护您的密钥，但没有任何系统能在 Alpha 阶段保证完全没有风险。',
        '• 本钱包当前不支持主网交易，也不托管生产资产。',
      ],
    },
    {
      heading: '3. 钱包的功能',
      paragraphs: [
        '本钱包允许您通过 AI Agent 界面创建和使用测试网钱包，具有硬件强制执行的安全控制，包括转账限额、合约白名单和基于 Passkey 的审批流程。',
        '本钱包是一个工具。它不提供财务建议、投资推荐或资产管理服务。',
      ],
    },
    {
      heading: '4. 密钥托管与不可导出性',
      paragraphs: [
        '钱包密钥在硬件保护的可信执行环境（TEE）内生成和存储。在 Alpha 期间，密钥无法从 TEE 中导出。这是针对仅限测试网的开发者试用所做的安全决策。',
        '当前 Alpha 不支持主网资产。钱包中显示的任何余额或交易都仅用于测试网评估，不具有货币价值。',
        '您确认，如果您丧失了账户访问权限且无法通过注册的 Passkey 验证身份，可能无法恢复密钥访问。',
        '随着平台的发展，我们将根据社区反馈和安全评估重新审视此政策。',
      ],
    },
    {
      heading: '5. 用户责任',
      paragraphs: [
        '您同意：',
        '• 提供准确的注册信息',
        '• 维护您的设备和 Passkey 凭证的安全',
        '• 不将本钱包用于非法活动、洗钱或逃避制裁',
        '• 不尝试逆向工程、利用漏洞或攻击本钱包或 TEENet 基础设施',
        '• 遵守您所在司法管辖区的适用法律',
      ],
    },
    {
      heading: '6. 禁止用途',
      paragraphs: [
        '您不得将本钱包用于：',
        '• 在法律禁止数字资产服务的任何司法管辖区使用',
        '• 处理与非法商品或服务相关的交易',
        '• 规避制裁或出口管制',
        '• 进行任何形式的市场操纵',
      ],
    },
    {
      heading: '7. 责任限制',
      paragraphs: [
        '在法律允许的最大范围内：',
        '• 本钱包按"原样"提供，不提供任何明示或暗示的保证。',
        '• 我们不对因市场波动、区块链网络问题、第三方协议中的智能合约漏洞或用户错误导致的损失承担责任。',
        '• 我们不对 Alpha 期间服务中断造成的任何损失承担责任。',
        '• 我们的总责任不超过您使用本钱包所支付的金额（在免费 Alpha 期间为零）。',
      ],
    },
    {
      heading: '8. 服务变更与终止',
      paragraphs: [
        '我们保留以下权利：',
        '• 随时修改、暂停或终止本钱包的任何部分',
        '• 如果您违反本条款，终止您的访问权限',
        '如果我们停止服务，我们可能会在合理通知后结束 Alpha 试用并移除相关的测试网钱包状态。',
      ],
    },
    {
      heading: '9. 知识产权',
      paragraphs: [
        '本钱包的应用集成层是开源的。TEENet 运行时和平台基础设施是专有的。',
        '您可以在相应的许可证下使用、fork 和修改开源组件。您不得复制、逆向工程或再分发专有的 TEENet 平台组件。',
      ],
    },
    {
      heading: '10. 适用法律',
      paragraphs: [
        '本条款受中华人民共和国香港特别行政区法律管辖。任何争议应在香港法院解决。',
      ],
    },
    {
      heading: '11. 条款变更',
      paragraphs: [
        '我们可能会更新本条款。重大变更将通过邮件通知。变更生效后继续使用即表示接受。',
      ],
    },
    {
      heading: '12. 联系方式',
      paragraphs: [
        '如对本条款有任何问题：',
        'contact@teenet.io',
      ],
    },
  ],
}

// ─── Getters ───

export function getPrivacyPageContent(locale: string): LegalPageContent {
  return locale === 'zh' ? privacyPageZh : privacyPageEn
}

export function getTermsPageContent(locale: string): LegalPageContent {
  return locale === 'zh' ? termsPageZh : termsPageEn
}
