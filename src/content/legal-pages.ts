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
    title: 'Privacy Policy | TEENet OpenClaw Wallet',
    description: 'How TEENet OpenClaw Wallet handles your data — what we collect, what we don\'t, and how your keys are protected.',
  },
  backLink: '← Back to Home',
  title: 'Privacy Policy',
  effectiveDate: 'Effective: April 15, 2026',
  sections: [
    {
      heading: '1. Who We Are',
      paragraphs: [
        'TEENet OpenClaw Wallet ("the Wallet") is operated by TEENet Technology (Hong Kong) Limited, registered in Hong Kong. This policy describes how we handle your data when you use the Wallet.',
        'Contact: contact@teenet.io',
      ],
    },
    {
      heading: '2. What We Collect',
      paragraphs: [
        'During the Beta period, we collect only:',
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
        'During the Beta period, private keys cannot be exported from the TEE. This is a security decision, not a restriction on your assets.',
        'This design ensures that your keys are never exposed to software, operators, or network attacks — even in a compromised environment. It is the foundation of the Wallet\'s security model.',
        'Your on-chain assets remain fully under your control. You can transfer your assets to any external wallet address at any time, without restriction.',
        'We will revisit this policy based on community feedback and security assessments as the platform evolves.',
      ],
    },
    {
      heading: '5. How We Use Your Data',
      paragraphs: [
        'We use your email and Passkey credentials solely for:',
        '• Authenticating your identity when you use the Wallet',
        '• Sending essential service communications (e.g. security alerts, Beta updates)',
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
        'If you wish to delete your account and associated data, contact us at contact@teenet.io. Please transfer your on-chain assets to an external address before requesting deletion, as key material will be permanently removed.',
      ],
    },
    {
      heading: '8. Your Rights',
      paragraphs: [
        'You have the right to:',
        '• Request access to the personal data we hold about you',
        '• Request correction of inaccurate data',
        '• Request deletion of your data',
        '• Withdraw from the Beta at any time',
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
    title: '隐私政策 | TEENet OpenClaw Wallet',
    description: 'TEENet OpenClaw Wallet 如何处理你的数据——我们收集什么、不收集什么，以及你的密钥如何受到保护。',
  },
  backLink: '← 返回首页',
  title: '隐私政策',
  effectiveDate: '生效日期：2026 年 4 月 15 日',
  sections: [
    {
      heading: '1. 我们是谁',
      paragraphs: [
        'TEENet OpenClaw Wallet（"本钱包"）由 TEENet Technology (Hong Kong) Limited 运营，该公司在香港注册。本政策描述了我们在您使用本钱包时如何处理您的数据。',
        '联系方式：contact@teenet.io',
      ],
    },
    {
      heading: '2. 我们收集什么',
      paragraphs: [
        '在 Beta 期间，我们仅收集以下信息：',
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
        '在 Beta 期间，私钥无法从 TEE 中导出。这是一项安全决策，而非对您资产的限制。',
        '此设计确保您的密钥永远不会暴露给软件、运营方或网络攻击——即使在被入侵的环境中也是如此。这是本钱包安全模型的基础。',
        '您的链上资产始终完全由您控制。您可以随时将资产转移到任何外部钱包地址，没有任何限制。',
        '随着平台的发展，我们将根据社区反馈和安全评估重新审视此政策。',
      ],
    },
    {
      heading: '5. 我们如何使用您的数据',
      paragraphs: [
        '我们仅将您的邮箱和 Passkey 凭证用于：',
        '• 在您使用本钱包时验证您的身份',
        '• 发送必要的服务通信（如安全警报、Beta 更新）',
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
        '如果您希望删除账户及相关数据，请联系 contact@teenet.io。请在请求删除前将您的链上资产转移到外部地址，因为密钥材料将被永久移除。',
      ],
    },
    {
      heading: '8. 您的权利',
      paragraphs: [
        '您有权：',
        '• 请求访问我们持有的关于您的个人数据',
        '• 请求更正不准确的数据',
        '• 请求删除您的数据',
        '• 随时退出 Beta',
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
    title: 'Terms of Service | TEENet OpenClaw Wallet',
    description: 'Terms of Service for TEENet OpenClaw Wallet — Beta status, key custody, user responsibilities, and governing law.',
  },
  backLink: '← Back to Home',
  title: 'Terms of Service',
  effectiveDate: 'Effective: April 15, 2026',
  sections: [
    {
      heading: '1. Acceptance',
      paragraphs: [
        'By using TEENet OpenClaw Wallet ("the Wallet"), you agree to these Terms. If you do not agree, do not use the Wallet.',
      ],
    },
    {
      heading: '2. Beta Status',
      paragraphs: [
        'The Wallet is currently in Beta. This means:',
        '• Features may change, be added, or be removed without prior notice.',
        '• The service may experience interruptions or downtime.',
        '• While we take security seriously and protect your keys with hardware-level isolation, no system is guaranteed to be free of all risks during a Beta period.',
        'We recommend using the Wallet with amounts you are comfortable exposing to Beta-stage software.',
      ],
    },
    {
      heading: '3. What the Wallet Does',
      paragraphs: [
        'The Wallet allows you to manage digital assets through an AI agent interface, with hardware-enforced security controls including transfer limits, contract allowlists, and Passkey-based approval flows.',
        'The Wallet is a tool. It does not provide financial advice, investment recommendations, or asset management services.',
      ],
    },
    {
      heading: '4. Key Custody and Non-Exportability',
      paragraphs: [
        'Private keys are generated and stored inside hardware-protected Trusted Execution Environments (TEEs). During the Beta period, keys cannot be exported from the TEE. This is a deliberate security decision to protect your assets while the platform matures.',
        'You maintain control over your on-chain assets at all times. You may transfer assets to any external address without restriction.',
        'You acknowledge that if you lose access to your account and cannot verify your identity through the registered Passkey, recovery of key access may not be possible. Ensure you can transfer your assets before such a situation arises.',
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
        '• We are not liable for any losses arising from service interruptions during the Beta period.',
        '• Our total liability shall not exceed the amount you paid to use the Wallet (which during the free Beta is zero).',
      ],
    },
    {
      heading: '8. Service Changes and Termination',
      paragraphs: [
        'We reserve the right to:',
        '• Modify, suspend, or discontinue any part of the Wallet at any time',
        '• Terminate your access if you violate these Terms',
        'If we discontinue the service, we will provide reasonable notice and a window for you to transfer your on-chain assets to external addresses.',
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
    title: '服务条款 | TEENet OpenClaw Wallet',
    description: 'TEENet OpenClaw Wallet 服务条款——Beta 状态、密钥托管、用户责任和适用法律。',
  },
  backLink: '← 返回首页',
  title: '服务条款',
  effectiveDate: '生效日期：2026 年 4 月 15 日',
  sections: [
    {
      heading: '1. 接受条款',
      paragraphs: [
        '使用 TEENet OpenClaw Wallet（"本钱包"）即表示您同意本条款。如果您不同意，请勿使用本钱包。',
      ],
    },
    {
      heading: '2. Beta 状态',
      paragraphs: [
        '本钱包目前处于 Beta 阶段。这意味着：',
        '• 功能可能会在无事先通知的情况下更改、新增或移除。',
        '• 服务可能会出现中断或停机。',
        '• 虽然我们非常重视安全，并通过硬件级隔离保护您的密钥，但没有任何系统能在 Beta 阶段保证完全没有风险。',
        '我们建议使用您能够承受 Beta 阶段软件风险的金额来使用本钱包。',
      ],
    },
    {
      heading: '3. 钱包的功能',
      paragraphs: [
        '本钱包允许您通过 AI Agent 界面管理数字资产，具有硬件强制执行的安全控制，包括转账限额、合约白名单和基于 Passkey 的审批流程。',
        '本钱包是一个工具。它不提供财务建议、投资推荐或资产管理服务。',
      ],
    },
    {
      heading: '4. 密钥托管与不可导出性',
      paragraphs: [
        '私钥在硬件保护的可信执行环境（TEE）内生成和存储。在 Beta 期间，密钥无法从 TEE 中导出。这是一项在平台成熟过程中保护您资产的安全决策。',
        '您始终保持对链上资产的控制。您可以随时将资产转移到任何外部地址，没有限制。',
        '您确认，如果您丧失了账户访问权限且无法通过注册的 Passkey 验证身份，可能无法恢复密钥访问。请确保在这种情况发生前转移您的资产。',
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
        '• 我们不对 Beta 期间服务中断造成的任何损失承担责任。',
        '• 我们的总责任不超过您使用本钱包所支付的金额（在免费 Beta 期间为零）。',
      ],
    },
    {
      heading: '8. 服务变更与终止',
      paragraphs: [
        '我们保留以下权利：',
        '• 随时修改、暂停或终止本钱包的任何部分',
        '• 如果您违反本条款，终止您的访问权限',
        '如果我们停止服务，我们将提供合理的通知和时间窗口，以便您将链上资产转移到外部地址。',
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
