// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit copy, links, and projects here — every component reads from this file.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Raymond Abiola",
  firstName: "Raymond",
  title: "Blockchain Developer",
  // Rotating words used in the hero typewriter
  roles: [
    "Smart Contract Engineer",
    "Solidity Developer",
    "DeFi Builder",
    "dApp Engineer",
    "Security Enthusiast",
  ],
  tagline:
    "I design and ship secure, gas-efficient EVM smart contracts and the dApps around them. ",
  location: "Lagos, Nigeria",
  availability: "Open to blockchain engineering roles",
  resumeUrl: "/Raymond-Abiola-Resume.pdf", // drop your latest PDF into /public with this name
  portraitLight: "/portrait.png", // your colour photo (dark mode applies a monochrome filter via CSS)
  portraitDark: "/portrait.png", // same file; dark mode applies a monochrome filter via CSS
} as const;

export const about = {
  // Headline stats shown beside the bio
  stats: [
    { value: "4+", label: "Years in blockchain" },
    { value: "2+", label: "Years building dApps & contracts" },
    { value: "10+", label: "Smart-contract projects" },
    { value: "2", label: "Hackathons led" },
  ],
  specialties: [
    "DeFi protocols",
    "Smart contracts",
    "NFTs",
    "dApp frontends",
    "Security best practices",
    "Gas optimization",
    "Smart contract auditing",
  ],
  paragraphs: [
    "I'm a Solidity developer with hands-on experience building smart contracts and full-fledged EVM-based systems using tools like Hardhat, Foundry, OpenZeppelin, and TypeScript.",
    "Over time, I've designed and developed several blockchain projects that reflect both technical depth and real-world logic. What sets me apart is not just technical ability, but an engineer's mindset: I break problems into smart, testable units and build with maintainability and clarity in mind. I also reason deeply about protocol design, user safety, and gas efficiency.",
    "My journey began on the non-technical side, four years in the blockchain space, including a community role on the youves DeFi protocol where I tested pre-release smart contracts on the Tezos ecosystem. That exposure to real protocol mechanics is what pulled me into engineering, and for the past two years I've focused entirely on building.",
    "I'm now looking to bring that mindset to a serious blockchain team, one that values thoughtful engineering, curiosity, and clean architecture. Let's build something great.",
  ],
} as const;

// ---------------------------------------------------------------------------
// Skills, grouped by category
// ---------------------------------------------------------------------------
export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Solidity", "TypeScript", "JavaScript"],
  },
  {
    category: "Contract Tooling",
    items: ["Foundry", "Hardhat", "OpenZeppelin", "Remix", "Forge", "Ignition"],
  },
  {
    category: "Web3 & Frontend",
    items: ["React", "Next.js", "ethers.js", "viem", "wagmi", "Reown AppKit", "RainbowKit", "Tailwind CSS", "React Hot Toast"],
  },
  {
    category: "Testing & Quality",
    items: ["Foundry Tests", "Mocha", "Chai", "Mainnet Forking", "Gas Profiling"],
  },
  {
    category: "Concepts",
    items: [
      "DeFi Mechanics",
      "Access Control",
      "Reentrancy Safety",
      "ERC-20 / ERC-721",
      "Tokenomics",
      "Security Auditing",
      "Merkle Trees",
      "Cryptographic Hashing",
      "Factory Patterns",
       "EVM-Opcodes" 
    ],
  },
  {
    category: "Workflow",
    items: ["Git", "GitHub", "Node.js", "IPFS / Pinata", "Etherscan Verification"],
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export type Experience = {
  role: string;
  org: string;
  type: string;
  period: string;
  location: string;
  url?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Smart Contract Developer — TrustWork (Capstone)",
    org: "Web3Bridge Bootcamp",
    type: "Team Member · 5 developers",
    period: "2026",
    location: "Onsite, Lagos",
    url: "https://github.com/orgs/trustwork-org/repositories",
    bullets: [
      "Built TrustWork, a decentralized freelancer escrow platform with milestone payments and DAO-arbitrated disputes, as the final project of the Web3Bridge bootcamp.",
      "Contributed to a four-contract system: milestone escrow, a staked arbitrator DAO, soulbound reputation NFTs, and a profile registry.",
      "Stack: Solidity 0.8.28, Foundry, OpenZeppelin v5, ERC-2771 meta-transactions, Next.js + wagmi, USDC on Lisk.",
    ],
  },
  {
    role: "Lead Developer — FedVote (Hackathon)",
    org: "Hedera Hackathon",
    type: "Team Lead · 5 developers",
    period: "2026",
    location: "Remote",
    url: "https://fed-vote.vercel.app/",
    bullets: [
      "Led a team of five developers to build FedVote, a decentralized national voting platform, end to end.",
      "Architected an 8-contract system with role-based access control, soul-bound NFT badges, and incentive mechanics.",
      "Stack: Solidity, Foundry, React, ethers.js, Reown AppKit, OpenZeppelin.",
    ],
  },
  {
    role: "Team Lead — SafeCircles (Hackathon)",
    org: "Monad 1-Day Hackathon",
    type: "Team Lead · 2 developers",
    period: "2026",
    location: "Remote",
    url: "https://safe-circles-p6df.vercel.app/",
    bullets: [
      "Led a two-person team to build SafeCircles, a peer-to-peer microinsurance protocol, during a one-day Monad hackathon.",
      "Implemented photo-evidenced claims with on-chain governance voting and a multi-layer fraud-prevention system.",
      "Stack: Solidity, Foundry, Next.js, wagmi, viem, Pinata IPFS, deployed to Monad testnet.",
    ],
  },
  {
    role: "Community Manager — youves DeFi Protocol",
    org: "Papers AG",
    type: "Contract · Remote",
    period: "Nov 2021 — Jun 2024 · 2 yrs 7 mos",
    location: "Zug, Switzerland",
    url: "https://papers.ch/",
    bullets: [
      "Worked in sync with the development team to push out product launches and releases on the youves DeFi protocol.",
      "Tested pre-release smart contracts and reported identified bugs and edge cases back to the dev team, improving launch safety.",
      "Ran Python scripts to generate weekly protocol statistics for the youves DeFi community.",
      "Translated technical updates into clear, user-friendly communication and relayed UX feedback to engineering.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export type Education = {
  program: string;
  org: string;
  period: string;
  location: string;
  note?: string;
  url?: string;
  urlLabel?: string;
};

export const education: Education[] = [
  {
    program: "Intensive Solidity & dApp Development (Onsite)",
    org: "Web3Bridge Africa",
    period: "Jan 2026 — May 2026",
    location: "Onsite",
    note: "4-month immersive program in smart-contract and full-stack dApp development.",
    url: "https://alumni.web3bridgeafrica.com/p/38",
    urlLabel: "View my alumni profile",
  },
  {
    program: "Solidity Foundation Bootcamp",
    org: "Encode Club",
    period: "Sep 2022 — Oct 2022",
    location: "Online",
  },
  {
    program: "Blockchain Developer Bootcamp",
    org: "EatTheBlocks",
    period: "Mar 2022 — May 2022",
    location: "Online",
  },
  {
    program: "B.Eng, Chemical Engineering",
    org: "University of Benin",
    period: "2011 — 2016",
    location: "Benin City, Nigeria",
  },
];

// ---------------------------------------------------------------------------
// Projects  (slug used for /projects/[slug] detail pages)
// ---------------------------------------------------------------------------
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  featured: boolean;
  accent: "lime" | "pink" | "blue" | "purple" | "amber";
  summary: string;
  overview: string[];
  highlights: string[];
  features: string[];
  stack: string[];
  meta: { label: string; value: string }[];
  links: { github?: string; demo?: string; explorer?: string };
};

export const projects: Project[] = [
  {
    slug: "trustwork",
    name: "TrustWork",
    tagline: "Decentralized freelancer escrow with DAO arbitration",
    category: "DeFi · Escrow",
    year: "2026",
    featured: true,
    accent: "lime",
    summary:
      "A decentralized freelancing platform that locks client payments in escrow, releases them per milestone, and resolves disputes through a staked, randomly-selected arbitrator DAO. This is my team's capstone project at the Web3Bridge bootcamp and we were a team of five.",
    overview: [
      "TrustWork solves the core trust problem in remote work: clients are reluctant to prepay, freelancers fear non-payment after delivery, and centralized platforms charge 10–20% with opaque dispute processes. TrustWork replaces that with transparent, code-enforced escrow.",
      "A client deposits USDC and posts a job with defined milestones. A freelancer is selected, and for each completed milestone they submit proof; on the client's approval the freelancer is paid instantly (92% of the milestone), with the platform fee handled in basis points. The whole job lifecycle (OPEN → ACTIVE → COMPLETED / DISPUTED / CANCELLED) lives on-chain.",
      "Disputes freeze funds and activate a DisputeDAO: three randomly-selected arbitrators — who have staked USDC — vote within a fixed window. The majority decides the outcome; minority and non-voting arbitrators are slashed, and majority voters split the arbitration fee. It's an incentive design that rewards honest voting and resists manipulation.",
      "Reputation is captured as soulbound (non-transferable) ERC-721 tier badges earned at job thresholds, alongside an on-chain flagging system where repeat dispute losses lead to a ban. I worked as part of a five-person team building the system end to end.",
    ],
    highlights: [
      "Four-contract system: EscrowPlatform (job & milestone lifecycle), DisputeDAO (staked arbitration), soulbound ReputationNFT, and a ProfileRegistry mapping wallets to IPFS profiles.",
      "Randomized arbitrator selection (Fisher-Yates shuffle seeded from block entropy) with stake-slashing for minority/non-voters — a neutral, manipulation-resistant court.",
      "Per-job balance isolation (jobBalance[jobId]) so funds can never leak across jobs; balances must zero out on completion or cancellation.",
      "ERC-2771 meta-transactions for gasless UX, with raw msg.sender enforced on sensitive paths to block forwarder impersonation.",
    ],
    features: [
      "Milestone-based escrow with instant payout on client approval",
      "DAO-arbitrated disputes with staked, randomly-assigned jurors and a fixed voting window",
      "Soulbound reputation tiers (Rising Talent → Legend) and a transparent 3-strike flag/ban system",
      "Job board across 14 categories with on-chain applications and selection",
      "ReentrancyGuard + SafeERC20 + checks-effects-interactions on every USDC movement; try/catch so reputation bugs never block payouts",
    ],
    stack: [
      "Solidity 0.8.28",
      "Foundry (via_ir, optimizer 200)",
      "OpenZeppelin v5",
      "ERC-2771 meta-tx",
      "Next.js + wagmi",
      "USDC on Lisk",
      "IPFS (Pinata)",
    ],
    meta: [
      { label: "Contracts", value: "4 core" },
      { label: "Test suites", value: "4" },
      { label: "Role", value: "Team Member" },
      { label: "Team", value: "5 developers" },
    ],
    links: {
      github: "https://github.com/orgs/trustwork-org/repositories",
      demo: "https://trust-work2323.vercel.app/",
    },
  },
  {
    slug: "fedvote",
    name: "FedVote",
    tagline: "Tamper-resistant on-chain national voting",
    category: "Governance · DeFi",
    year: "2026",
    featured: true,
    accent: "purple",
    summary:
      "A decentralized national voting platform that prevents double-voting through cryptographic identity hashing and rewards civic participation with tokens and soul-bound NFT badges. Built leading a team of five for the Hedera hackathon.",
    overview: [
      "FedVote reimagines national elections as transparent, verifiable, and incentive-aligned on-chain infrastructure. It tackles three real problems at once: double-voting, opacity of results, and low youth participation.",
      "Voter identities are abstracted via cryptographic hashing (national IDs are never stored in the clear), while a modular contract architecture keeps elections, party management, and incentives cleanly separated.",
      "I led a team of five developers, owning the contract architecture and reward mechanics from design through deployment.",
    ],
    highlights: [
      "8-contract system: NationalToken (ERC-20), Registry, NationalElectionBody, PoliticalPartiesManager (factory), Elections, VoterIncentives, and a soul-bound DemocracyBadge (ERC-721).",
      "Six distinct admin roles via OpenZeppelin AccessControl for granular, auditable permissions.",
      "Non-linear, streak-based rewards (1.3× multiplier across vote thresholds) that compound to encourage long-term participation.",
      "Soul-bound (non-transferable) NFT badges as on-chain proof of civic participation.",
    ],
    features: [
      "Cryptographic voter-identity masking to prevent double-voting without exposing personal data",
      "Factory pattern enabling multiple concurrent political-party hierarchies",
      "Reentrancy guards and the Checks-Effects-Interactions pattern on high-value operations",
      "Batch voter authorization for scalable registration",
      "7 Foundry test suites — one per contract — covering access control, state transitions and reward math",
    ],
    stack: [
      "Solidity ^0.8.30",
      "Foundry (via_ir, optimizer 200)",
      "OpenZeppelin",
      "React + Vite",
      "TypeScript",
      "ethers.js v6",
      "Reown AppKit",
      "Tailwind CSS",
    ],
    meta: [
      { label: "Contracts", value: "8" },
      { label: "Test suites", value: "7" },
      { label: "Role", value: "Lead Developer" },
      { label: "Team", value: "5 developers" },
    ],
    links: {
      github: "https://github.com/RaymondAbiola/FedVote",
      demo: "https://fed-vote.vercel.app/",
    },
  },
  {
    slug: "safecircle",
    name: "SafeCircles",
    tagline: "Peer-to-peer microinsurance for trusted groups",
    category: "DeFi · Insurance",
    year: "2026",
    featured: true,
    accent: "pink",
    summary:
      "A peer-to-peer microinsurance protocol where small trusted groups (5–30 members) pool weekly contributions, file photo-evidenced claims, and vote on payouts via on-chain governance. Built as team lead in a one-day Monad hackathon.",
    overview: [
      "SafeCircles brings affordable, community-run insurance to emerging markets where formal cover for phones, equipment, and property is out of reach.",
      "Members pool weekly contributions; when something goes wrong they file a claim backed by watermarked photo evidence, and the circle votes on the payout. Governance is fully on-chain.",
      "I led a two-person team during a one-day Monad hackathon, owning the contracts, the fraud-prevention model, and the mobile-first evidence flow.",
    ],
    highlights: [
      "3-contract system: SafeUSD (testnet ERC-20 with faucet cooldown), SafeCircleFactory (discovery/indexing), and the core SafeCircle logic.",
      "Six-layer fraud prevention: admin-gated joins, before/after photos, camera-only capture, automatic watermarking, multi-evidence timers, and reputation tracking.",
      "Democratic parameter governance — members propose and vote on contribution and claim limits.",
      "52-week cycle management with fund distribution or rollover, plus forfeiture rules that prevent payout-and-exit gaming.",
    ],
    features: [
      "Watermarked evidence (challenge code + timestamp + address burned into each image, unskippable)",
      "Two-stage claim resolution with quorum extension before approval or rejection",
      "Before/after photo comparison UI so voters judge claims fairly",
      "Mobile-first capture flow — desktop users are routed to mobile via QR code",
      "7-day admin ghost-rescue so applicants are never locked in by an absent admin",
    ],
    stack: [
      "Solidity 0.8.24",
      "Foundry (cancun, optimizer 200)",
      "OpenZeppelin",
      "Next.js (App Router)",
      "wagmi + viem",
      "Pinata IPFS",
      "Tailwind CSS",
      "Monad Testnet",
    ],
    meta: [
      { label: "Contracts", value: "3" },
      { label: "Role", value: "Team Lead" },
      { label: "Team", value: "2 developers" },
      { label: "Chain", value: "Monad Testnet" },
    ],
    links: {
      github: "https://github.com/RaymondAbiola/SafeCircles",
      demo: "https://safe-circles-p6df.vercel.app/",
    },
  },
  {
    slug: "judgetoken",
    name: "JudgeToken",
    tagline: "ERC-20 governance token with tiered staking",
    category: "DeFi · Tokenomics",
    year: "2025",
    featured: true,
    accent: "blue",
    summary:
      "A four-contract governance-token ecosystem with tiered staking, pro-rata quarterly rewards, early-withdrawal penalties, and role-based treasury management. Deployed and verified on Sepolia.",
    overview: [
      "JudgeToken is a complete staking and rewards ecosystem built to deepen my understanding of advanced reward accounting and treasury mechanics.",
      "The protocol mints a capped 500M-token supply, distributes base and bonus rewards on a quarterly cadence, and lets stakers choose lock-up periods with scaled early-exit penalties.",
      "It's the most reward-math-intensive project in my portfolio — the accounting handles stale quarters, bonus gating, and pro-rata distribution per block.",
    ],
    highlights: [
      "4-contract ecosystem: JudgeToken (ERC-20 + Burnable + Permit + Votes), JudgeTreasury, RewardsManager, and JudgeStaking.",
      "Pro-rata reward accounting via accJudgePerShare / accBonusJudgePerShare computed per block.",
      "Scaled early-withdrawal penalties (up to 20%) that reward longer lock-ups while preserving flexibility.",
      "Permissionless updatePool() that safely settles lagging quarters (capped at 4 per call to prevent DoS).",
    ],
    features: [
      "Capped 500M supply with quarterly reward blocks (~648,000 blocks ≈ 90 days)",
      "Bonus rewards gated behind base-reward settlement to prevent gaming",
      "Multi-token recovery system with bounded recovery fees for accidentally sent tokens",
      "Circular-dependency-safe deployment order with post-deploy role grants",
      "SafeERC20 + ReentrancyGuard + CEI throughout; storage layout captured for analysis",
    ],
    stack: [
      "Solidity ^0.8.20",
      "Foundry",
      "OpenZeppelin (SafeERC20, AccessControl, Math)",
      "Forge Script (deploy + verify)",
      "Sepolia Testnet",
    ],
    meta: [
      { label: "Contracts", value: "4" },
      { label: "Test suites", value: "4" },
      { label: "Max supply", value: "500M" },
      { label: "Status", value: "Verified on Sepolia" },
    ],
    links: {
      github: "https://github.com/RaymondAbiola/JUDGE-Token-Contract",
    },
  },
  {
    slug: "multisig-wallet",
    name: "MultiSig Wallet",
    tagline: "Configurable multi-signature wallet + factory",
    category: "Infrastructure · Security",
    year: "2025",
    featured: false,
    accent: "amber",
    summary:
      "A multi-signature transaction wallet with configurable quorum, role-based signer management, and a two-phase, time-locked signer-replacement mechanism. Deployable at scale via a factory.",
    overview: [
      "A from-scratch multi-sig wallet that enforces multi-party approval before any transaction executes — the backbone of secure treasury management.",
      "A factory contract deploys independent wallet instances and indexes them, while a two-phase signer-replacement flow guards against instant malicious key rotation.",
    ],
    highlights: [
      "Configurable quorum (minimum 2, bounded by signatory count) with O(1) signer validity lookups.",
      "Two-phase, time-locked signer replacement that blocks instant key-rotation attacks.",
      "hasSigned mapping that prevents double-signing per transaction.",
      "Factory pattern for deploying and indexing multiple independent wallet instances.",
    ],
    features: [
      "Descriptive custom errors (e.g. EnterAtLeastTwoQuorum) for cheaper, clearer reverts",
      "Role-based signer authorization via OpenZeppelin AccessControl",
      "Transaction struct tracking recipient, amount, signature count and execution status",
      "Maximum signer cap to prevent unbounded arrays",
    ],
    stack: [
      "Solidity ^0.8.28",
      "Hardhat (hardhat-toolbox)",
      "OpenZeppelin AccessControl",
      "TypeScript",
      "Hardhat Ignition",
    ],
    meta: [
      { label: "Contracts", value: "3 + NFT" },
      { label: "Quorum", value: "2 — N" },
      { label: "Tooling", value: "Hardhat" },
      { label: "Pattern", value: "Factory" },
    ],
    links: {
      github: "https://github.com/RaymondAbiola/MultiSig-Contract",
    },
  },
  {
    slug: "uniswap-v2-fork",
    name: "Uniswap V2 Mainnet Forking",
    tagline: "DEX swap integration tested against live liquidity",
    category: "DeFi · DEX",
    year: "2025",
    featured: false,
    accent: "pink",
    summary:
      "A swap-execution contract integrating the Uniswap V2 router with slippage protection, tested against real mainnet liquidity using Hardhat's forking at a pinned block.",
    overview: [
      "This project demonstrates real DEX integration: a wrapper around the Uniswap V2 router that executes token and ETH swaps with proper slippage bounds.",
      "Rather than mocking the DEX, tests run against a fork of Ethereum mainnet at block 19,000,000 — exercising the contract against real Uniswap V2 liquidity for deterministic, production-realistic results.",
    ],
    highlights: [
      "Supports multiple swap patterns: exact-input, exact-output, and ETH-to-token.",
      "Slippage protection via amountOutMin / amountInMax bounds on every swap.",
      "Mainnet forking at a pinned block for deterministic tests against real liquidity.",
      "Environment-driven RPC configuration — production-ready practice, no hard-coded secrets.",
    ],
    features: [
      "IUniswapV2Router interface integration for external DEX calls",
      "ERC-20 approval flow before swap execution",
      "On-chain usage counters (swapCount, liquidityCount) for analytics",
      "Custom Hardhat gas config for reliable forked testing",
    ],
    stack: [
      "Solidity ^0.8.24",
      "Hardhat + TypeScript",
      "Mainnet Forking",
      "OpenZeppelin",
      "Uniswap V2 Router",
    ],
    meta: [
      { label: "Fork block", value: "19,000,000" },
      { label: "Swap modes", value: "3" },
      { label: "Tooling", value: "Hardhat" },
      { label: "Network", value: "ETH Mainnet fork" },
    ],
    links: {
      github: "https://github.com/RaymondAbiola/Uniswap-V2-Mainnet-Forking",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// ---------------------------------------------------------------------------
// Contact / social links
// ---------------------------------------------------------------------------
// Cal.com booking — the "<username>/<event>" portion of your cal.com link.
// From https://cal.com/raymondabiola/30min  →  "raymondabiola/30min"
export const calLink = "raymondabiola/30min";

export const socials = {
  email: "raymondintell@gmail.com",
  github: "https://github.com/RaymondAbiola",
  twitter: "https://x.com/raymondintell",
  linkedin: "https://www.linkedin.com/in/raymondabiola",
  telegram: "https://t.me/raymondintell",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Book a Call", href: "#book" },
  { label: "Contact", href: "#contact" },
] as const;
