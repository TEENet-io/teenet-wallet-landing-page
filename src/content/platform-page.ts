export interface PainPoint {
  title: string
  description: string
}

export interface Solution {
  title: string
  description: string
}

export interface GetStartedPath {
  title: string
  description: string
  links?: { label: string; href: string }[]
  inlineLink?: { label: string; href: string }
}

export interface PlatformDiagram {
  platformLabel: string
  appLabel: string
  appSublabel: string
  sdkLabel: string
  custodyLabel: string
  custodyCapabilities: string[]
  hardwareLabel: string
  hardwarePlatforms: string
  attestationNote: string
}

export interface PlatformPageContent {
  meta: {
    title: string
    description: string
  }
  backLink: string
  title: string
  fromWallet: {
    title: string
    body: string[]
  }
  problems: {
    title: string
    painPoints: PainPoint[]
  }
  solutions: {
    title: string
    items: Solution[]
  }
  diagram: PlatformDiagram
  whyPlatform: {
    title: string
    body: string[]
  }
  getStarted: {
    title: string
    description: string
    paths: GetStartedPath[]
  }
  contact: {
    title: string
    body: string[]
    email: string
    followLabel: string
    socialLinks: { label: string; href: string }[]
  }
}

export const platformPageEn: PlatformPageContent = {
  meta: {
    title: 'TEENet Platform | TEENet Wallet',
    description:
      'The builder-facing platform behind TEENet Wallet. Hardware-isolated execution, key custody, and policy enforcement for agentic applications.',
  },
  backLink: '← Back to Home',
  title: 'TEENet Platform',

  fromWallet: {
    title: 'Start with the wallet, build beyond it',
    body: [
      'TEENet Wallet is an alpha reference app: an agent can manage testnet assets without ever holding a private key.',
      'The same model applies anywhere your application handles secrets, signs requests, or needs approval policies. TEENet is the control layer underneath.',
    ],
  },

  problems: {
    title: 'Three problems builders hit first',
    painPoints: [
      {
        title: 'Secrets sit in your infrastructure',
        description:
          'Private keys, API keys, and OAuth tokens end up in env files, databases, or ordinary server memory.',
      },
      {
        title: 'Policy checks are soft',
        description:
          'Allowlists, limits, and approval rules live in normal backend code and can be bypassed by anyone who controls the server.',
      },
      {
        title: 'You cannot prove operator limits',
        description:
          'Users still have to trust that you, your cloud provider, or a compromised node cannot read or misuse their secrets.',
      },
    ],
  },

  solutions: {
    title: 'What TEENet gives you',
    items: [
      {
        title: 'Hardware-isolated execution',
        description:
          'Sensitive logic runs inside Trusted Execution Environments instead of ordinary backend memory.',
      },
      {
        title: 'Managed custody and policy enforcement',
        description:
          'Keys are created inside the TEE, stay there, and only sign when the policy you defined allows it.',
      },
      {
        title: 'Attested distributed signing',
        description:
          'Keys are sharded across independent nodes, and every node has to prove its code before it can participate.',
      },
    ],
  },

  diagram: {
    platformLabel: 'TEENet Platform',
    appLabel: 'Your application',
    appSublabel: 'wallet, agentic app, oracle',
    sdkLabel: 'SDK',
    custodyLabel: 'Key Custody',
    custodyCapabilities: ['generation', 'storage', 'signing', 'access control'],
    hardwareLabel: 'Hardware TEE layer',
    hardwarePlatforms: 'Intel TDX  |  AMD SEV',
    attestationNote: 'with mutual attestation',
  },

  whyPlatform: {
    title: 'Why a platform, not a toolkit',
    body: [
      'You could spin up your own TEE instance with Intel TDX or AMD SEV. But going from a single enclave to a production system means solving key sharding, multi-party signing, mutual attestation, and node failover on your own.',
      'TEENet handles all of this so you can focus on your application \u2014 the security of a distributed TEE network with the convenience of a managed service.',
    ],
  },

  getStarted: {
    title: 'Start building',
    description:
      'The platform is still early. The best way in today is through the wallet reference app, the docs, and the SDK.',
    paths: [
      {
        title: 'Explore the wallet reference app',
        description:
          'Read the open-source wallet, inspect the approval flow, or compare it with the live alpha app.',
        links: [
          { label: 'Wallet on GitHub', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: 'Wallet Documentation', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: 'Live Alpha App', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: 'Read docs and SDK',
        description: 'Use the platform docs and SDK reference as the builder entry point.',
        links: [
          { label: 'Platform Docs', href: 'https://teenet-io.github.io' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
        ],
      },
      {
        title: 'Talk with us early',
        description: 'If you are building an agentic application and need custody or policy primitives, reach out early.',
        links: [
          { label: 'Email Us', href: 'mailto:contact@teenet.io' },
          { label: 'TEENet GitHub', href: 'https://github.com/TEENet-io' },
        ],
      },
    ],
  },

  contact: {
    title: 'Get in touch',
    body: ['Have questions about the platform, the SDK, or early access?'],
    email: 'contact@teenet.io',
    followLabel: 'Follow our progress:',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/TEENet-io' },
      { label: 'Twitter', href: 'https://x.com/AiTeenet' },
    ],
  },
}

export const platformPageZh: PlatformPageContent = {
  meta: {
    title: 'TEENet 平台 | TEENet Wallet',
    description:
      '面向 builder 的 TEENet 平台介绍。为 Agent 应用提供硬件隔离执行、密钥保管和策略控制。',
  },
  backLink: '← 返回首页',
  title: 'TEENet 平台',

  fromWallet: {
    title: '先从钱包开始，再往更广的应用走',
    body: [
      'TEENet Wallet 是一个 Alpha 参考应用：Agent 可以管理测试网资产，但整个过程中都拿不到私钥。',
      '只要你的应用会处理秘密、发起签名，或者需要审批策略，这套模型都成立。TEENet 就是它底下的控制层。',
    ],
  },

  problems: {
    title: 'Builder 最先撞上的三个问题',
    painPoints: [
      {
        title: '秘密仍然放在你的基础设施里',
        description:
          '私钥、API key 和 OAuth token 最终还是会落在 .env、数据库或普通服务器内存里。',
      },
      {
        title: '策略检查其实很软',
        description:
          '白名单、限额和审批规则都写在普通后端代码里，只要有人控制服务器，就能绕过它们。',
      },
      {
        title: '你无法证明运营方的边界',
        description:
          '用户仍然只能相信你、云厂商，或被攻破的节点不会读取和滥用这些秘密。',
      },
    ],
  },

  solutions: {
    title: 'TEENet 提供什么',
    items: [
      {
        title: '硬件隔离执行',
        description:
          '敏感逻辑在 TEE 内运行，而不是在普通后端内存中运行。',
      },
      {
        title: '托管式密钥保管与策略执行',
        description:
          '密钥在 TEE 内生成并留在那里，只有满足你定义的策略时才会参与签名。',
      },
      {
        title: '可证明的分布式签名',
        description:
          '密钥被分片到多个独立节点上，而且每个节点都必须先证明自己运行的是预期代码。',
      },
    ],
  },

  diagram: {
    platformLabel: 'TEENet 平台',
    appLabel: '你的应用',
    appSublabel: '钱包、Agent 应用、预言机',
    sdkLabel: 'SDK',
    custodyLabel: '密钥托管',
    custodyCapabilities: ['生成', '存储', '签名', '访问控制'],
    hardwareLabel: '硬件 TEE 层',
    hardwarePlatforms: 'Intel TDX  |  AMD SEV',
    attestationNote: '具备相互证明',
  },

  whyPlatform: {
    title: '为什么是平台，而不是工具包',
    body: [
      '你当然可以自己用 Intel TDX 或 AMD SEV 启动一个 TEE 实例。但从单个 enclave 走向生产系统，意味着你要独自解决密钥分片、多方签名、相互证明以及节点故障切换等难题。',
      'TEENet 已经替你把这些全部处理好，让你能够专注在自己的应用上——分布式 TEE 网络的安全特性，以及托管服务的便利。',
    ],
  },

  getStarted: {
    title: '开始构建',
    description:
      '平台目前还很早期。现阶段最好的入口是钱包参考实现、文档和 SDK。',
    paths: [
      {
        title: '先看钱包参考实现',
        description:
          '阅读开源钱包、理解审批流，或者和线上 Alpha App 对照着看。',
        links: [
          { label: '钱包 (GitHub)', href: 'https://github.com/TEENet-io/teenet-wallet' },
          { label: '钱包文档', href: 'https://teenet-io.github.io/teenet-wallet/' },
          { label: '线上 Alpha App', href: 'https://wallet.teenet.app' },
        ],
      },
      {
        title: '查看文档和 SDK',
        description: '从平台文档和 SDK 参考开始，了解集成方式。',
        links: [
          { label: '平台文档', href: 'https://teenet-io.github.io' },
          { label: 'TEENet SDK', href: 'https://github.com/TEENet-io/teenet-sdk' },
        ],
      },
      {
        title: '尽早和我们沟通',
        description: '如果你正在构建需要托管密钥或策略控制的 Agent 应用，欢迎尽早联系。',
        links: [
          { label: '发送邮件', href: 'mailto:contact@teenet.io' },
          { label: 'TEENet GitHub', href: 'https://github.com/TEENet-io' },
        ],
      },
    ],
  },

  contact: {
    title: '联系我们',
    body: ['对平台、SDK 或早期访问有疑问？'],
    email: 'contact@teenet.io',
    followLabel: '关注我们的进展：',
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/TEENet-io' },
      { label: 'Twitter', href: 'https://x.com/AiTeenet' },
    ],
  },
}

export function getPlatformPageContent(locale: string): PlatformPageContent {
  return locale === 'zh' ? platformPageZh : platformPageEn
}
