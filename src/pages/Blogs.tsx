import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blog1 from "@/assets/Blog_1.jpg";
import blog2 from "@/assets/Blog_2.jpg";
import blog3 from "@/assets/Blog_3.jpg";
import blog4 from "@/assets/Blog_4.jpg";
import blog5 from "@/assets/Blog_5.jpg";
import blog6 from "@/assets/Blog_6.jpg";
import blog7 from "@/assets/Blog_7.jpg";
import blog8 from "@/assets/Blog_8.jpg";
import blogshero from "@/assets/blogshero.jpg";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// --- Icon Components ---
const ArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowLeft = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// --- Blog Post Data (Full Content from Galaxy Note 1-8) ---
const mockPosts = [
  {
    id: 1,
    title: "AI Will Create More Millionaires Than Any Technology Before It",
    slug: "galaxy-note-1-ai-millionaires",
    category: "Wealth Creation",
    excerpt:
      "For the first time in human history, wealth creation is no longer controlled by capital or connections. AI gives ordinary people extraordinary leverage.",
    author: "10x Galaxy Team",
    date: "Oct 12, 2025",
    imageUrl: blog1,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">For the first time in human history, wealth creation is no longer controlled by capital, connections, or geography. AI has become the first technology that gives ordinary people extraordinary leverage — and this shift will create more millionaires in the next 10 years than the last 50 combined.</p>
      
      <p class="mb-8">AI doesn’t just speed up work — it removes barriers.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. AI Removes the Skill Barrier</h3>
      <p class="mb-4">Previously, turning an idea into a product required:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Coding skills</li>
        <li>Technical teams</li>
        <li>Large budgets</li>
        <li>Long development cycles</li>
      </ul>
      <p class="mb-4">Today, a single person can build websites, mobile apps, SaaS tools, automation systems, and complete digital products using AI tools like <strong>PerfectCode.ai</strong>.</p>
      <blockquote class="border-l-4 border-black pl-4 italic my-6 text-gray-700">What once cost $200,000+ and a team of developers can now be built by one founder in days.</blockquote>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. AI Multiplies Human Productivity (10× to 100×)</h3>
      <p class="mb-4">AI doesn’t replace humans — it amplifies them. A solo founder can now operate like an entire startup team covering:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Design</li>
        <li>Development</li>
        <li>Marketing</li>
        <li>Sales copy</li>
        <li>Customer support</li>
        <li>Analytics</li>
        <li>Content creation</li>
      </ul>
      <p class="mb-4">One person performs the work of 20 people. Small teams now operate like tech giants.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Wealth Creation Becomes Global</h3>
      <p class="mb-4">AI doesn’t care where you live. You can build from anywhere — Dhaka, Manila, Nairobi, São Paulo, Istanbul — with just:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>A laptop</li>
        <li>Internet</li>
        <li>Consistency</li>
      </ul>
      <p class="mb-4">This is why AI will create the first truly global wave of new millionaires.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. Tiny AI-Powered Ideas Can Earn Big Money</h3>
      <p class="mb-4">Small, automated AI-driven systems now generate massive revenue:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Micro SaaS tools</li>
        <li>AI automation agencies</li>
        <li>Niche content engines</li>
        <li>AI photo/video services</li>
        <li>AI story generators</li>
        <li>AI-driven e-commerce</li>
        <li>GPT-powered support bots</li>
      </ul>
      <p class="mb-4">A simple AI tool can earn <strong>$5,000–$50,000/month</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. AI Creates Entirely New Industries</h3>
      <p class="mb-4">AI isn’t improving old markets — it’s creating new ones:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Synthetic media</li>
        <li>AI agents</li>
        <li>Autonomous workflows</li>
        <li>Instant product builders</li>
        <li>Automated SaaS</li>
        <li>Digital clones</li>
        <li>Cognitive automation</li>
      </ul>
      <p class="mb-4">These industries didn’t exist 3 years ago. Early builders will own the future.</p>

      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h4 class="font-bold text-lg mb-2">The Big Truth: AI Gives Normal People Superpowers</h4>
        <p>AI transforms the equation: <strong>Idea → AI Execution → Global Reach → Income → Wealth</strong>. You no longer need permission from investors, developers, or gatekeepers. AI lets you build, launch, and scale independently.</p>
      </div>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">AI is not taking jobs. AI is taking excuses.</p>
      <p class="mb-4">The winners will be those who:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Learn AI tools</li>
        <li>Build small things fast</li>
        <li>Automate everything</li>
        <li>Think like owners</li>
        <li>Start early</li>
      </ul>
      <p>We are living in the greatest opportunity window of modern history.</p>
    `,
  },
  {
    id: 2,
    title: "How Tiny Teams Are Building Billion-Dollar AI Products",
    slug: "galaxy-note-2-tiny-teams",
    category: "Startups",
    excerpt:
      "The question is no longer: 'How big is your team?' It is now: 'How intelligently does your team use AI?'",
    author: "10x Galaxy Team",
    date: "Feb 10, 2025",
    imageUrl: blog2,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">For the first time in history, a team of just <strong>2–5 people</strong> can build a global company that competes with giants — not because they work harder, but because they work with <strong>AI as a force multiplier</strong>.</p>
      <p class="mb-8">The world has shifted. The question is no longer: "How big is your team?" It is now: "How intelligently does your team use AI?"</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. AI Has Collapsed the Cost of Building a Startup</h3>
      <p class="mb-4">Only a few years ago, building a serious tech product required:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Multiple developers</li>
        <li>Designers</li>
        <li>Project managers</li>
        <li>Support teams</li>
      </ul>
      <p class="mb-4">Today, a tiny team can build everything using AI tools like:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>PerfectCode.ai</strong> → Product building</li>
        <li><strong>Dialogsy.ai</strong> → Support automation</li>
        <li><strong>StoryMaster.ai</strong> → Content</li>
        <li><strong>Photo360.ai</strong> → Visuals</li>
        <li><strong>AI agents</strong> → Workflows & automation</li>
      </ul>
      <p class="mb-4">AI has collapsed the cost of creating — and scaling — new products.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Tiny Teams Move Faster Than Large Organizations</h3>
      <p class="mb-4">Large teams face meetings, approvals, layers of management, and slow communication. Tiny teams move with:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Speed</li>
        <li>Clarity</li>
        <li>Instant decision-making</li>
        <li>Rapid iteration</li>
      </ul>
      <p class="mb-4">With AI taking over manual tasks, small teams focus on <strong>quality, experimentation, and innovation</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. AI Gives Small Teams Superhuman Capability</h3>
      <p class="mb-4">One small AI-powered team can perform the work of an entire company:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>AI-driven design</li>
        <li>AI development assistants</li>
        <li>Automated marketing engines</li>
        <li>AI writers & editors</li>
        <li>AI customer agents</li>
        <li>AI analytics</li>
        <li>AI automation pipelines</li>
      </ul>
      <p class="mb-4">One person can now perform 10–20 roles. A micro-team can operate like a full-scale tech company.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. Real Small Teams That Became Billion-Dollar Companies</h3>
      <p class="mb-4">Even before modern AI existed, tiny teams built massive empires:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Instagram:</strong> 13 people → acquired for $1B</li>
        <li><strong>WhatsApp:</strong> 55 people → acquired for $19B</li>
        <li><strong>Notion:</strong> 4 people → now $10B+ valuation</li>
        <li><strong>Minecraft:</strong> Built by 1 person → acquired for $2.5B</li>
        <li><strong>Shutterstock:</strong> 1 founder → multi-billion public company</li>
        <li><strong>GitHub:</strong> Small team → acquired for $7.5B</li>
      </ul>
      <p>Now imagine what tiny teams can do <strong>with modern AI</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. The Formula Tiny Teams Use to Win</h3>
      <p class="mb-4">Every successful micro-team follows three core principles:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Simple Ideas</li>
        <li>Relentless Speed</li>
        <li>AI Leverage</li>
      </ol>
      <p class="mb-4">This is the foundation of the <strong>10x Galaxy philosophy</strong>: small teams, massive outcomes, infinite speed.</p>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">The world is shifting from: <strong>Big teams vs Small teams</strong> → <strong>AI-accelerated teams vs Outdated teams</strong>.</p>
      <p class="mb-4">Size no longer wins. Speed wins. AI wins.</p>
      <p>Tiny AI-powered teams are building the future — and the next billion-dollar products will come from <strong>unstoppable micro-teams</strong> that move at the speed of AI.</p>
    `,
  },
  {
    id: 3,
    title: "Why Every Business Will Use an AI Agent Soon",
    slug: "galaxy-note-3-ai-agents",
    category: "Automation",
    excerpt:
      "An AI agent is not a tool. It is a digital employee — working 24/7, never getting tired, never forgetting anything.",
    author: "10x Galaxy Team",
    date: "Nov 08, 2024",
    imageUrl: blog3,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">Ten years ago, every business needed a website. Five years ago, every business needed social media. Today, every business — no matter the size — will need an <strong>AI agent</strong>.</p>
      <p class="mb-4">Not because it’s trendy, but because it will be impossible to compete without one. An AI agent is not a tool. It is <strong>a digital employee</strong> — working 24/7, never getting tired, never forgetting anything.</p>
      <p class="mb-8">Businesses that adopt AI agents will scale. Businesses that don’t… will fall behind.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. AI Agents Work 24/7 Without Salary or Breaks</h3>
      <p class="mb-4">Businesses lose customers every day because:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>No one responded fast enough</li>
        <li>No one followed up</li>
        <li>No one answered questions on time</li>
      </ul>
      <p class="mb-4">AI agents can reply instantly, qualify leads, guide customers, collect data, book appointments, and solve issues. All <strong>24/7, 365 days a year</strong>, without breaks or burnout.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. Customers Expect Instant Replies</h3>
      <p class="mb-4">Modern customers don’t want to wait, fill forms, call support, or email back and forth. They want answers <strong>now</strong>.</p>
      <p class="mb-4">If you're slow, your competitor isn’t. This is why businesses are switching to AI-powered systems like <strong>Dialogsy.ai</strong> to deliver instant responses.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. AI Agents Handle 70–90% of Customer Conversations</h3>
      <p class="mb-4">Most customer questions are repetitive: pricing, features, delivery, refund steps, product recommendations, troubleshooting. AI can handle most of these. Humans step in only when needed — reducing workload dramatically.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. AI Agents Increase Sales Automatically</h3>
      <p class="mb-4">AI agents follow up, recover abandoned carts, nurture leads, send offers, convert cold leads, and provide real-time assistance.</p>
      <p class="mb-4">Businesses often see <strong>20–40% more sales</strong> and <strong>30–70% better retention</strong>, with lower acquisition costs. All automated.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. AI Agents Learn Your Business Automatically</h3>
      <p class="mb-4">Modern AI agents learn from your website, documents, product pages, and chat history. They become smarter weekly — like a trained employee. Except they never get tired, never forget, and never need retraining again.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">6. Small Businesses Benefit the Most</h3>
      <p class="mb-4">AI agents help e-commerce stores, freelancers, coaches, real estate agents, SaaS founders, agencies, and local businesses. They gain more time, more sales, and less workload. Usually within days.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">7. The Future: Every Business Has an AI Team</h3>
      <p class="mb-4">Soon, businesses will not have just one AI agent — they will have many:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>AI support agent</li>
        <li>AI sales agent</li>
        <li>AI research agent</li>
        <li>AI content agent</li>
        <li>AI scheduling agent</li>
      </ul>
      <p class="mb-4">A business with <strong>5 AI agents</strong> will outperform a business with <strong>5 human employees</strong>.</p>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">The era of manual operations is ending. The future belongs to businesses that use AI agents as teammates — always available, always improving, always working.</p>
      <p>Every business will use an AI agent. The only question is: when?</p>
    `,
  },
  {
    id: 4,
    title: "The Rise of AI Product Builders",
    slug: "galaxy-note-4-product-builders",
    category: "Development",
    excerpt:
      "A decade ago, building software demanded developers. Today, AI Product Builders turn ideas directly into working software.",
    author: "10x Galaxy Team",
    date: "Sep 05, 2024",
    imageUrl: blog4,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">A decade ago, building software demanded developers, designers, testers, funding, and months of planning. Today, <strong>AI Product Builders</strong> have collapsed that entire process — turning ideas directly into working software.</p>
      <p class="mb-8">AI Product Builders don’t just write code. They <strong>design</strong>, <strong>structure</strong>, <strong>assemble</strong>, and often <strong>deploy</strong> entire products automatically. This is one of the biggest shifts in technology and entrepreneurship.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. From Coding to Describing: The Big Shift</h3>
      <p class="mb-4">The old way: "Write the code."<br>The new way: "Describe what you want."</p>
      <p class="mb-4">With AI Product Builders:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Describe a dashboard → It generates the UI</li>
        <li>Describe logic → It generates the backend</li>
        <li>Describe login → It configures authentication</li>
        <li>Describe pages → It builds layouts</li>
      </ul>
      <p class="mb-4">The gap between idea and execution is collapsing.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. AI Reduces Development Time by 80–90%</h3>
      <p class="mb-4">A feature that took <strong>3 weeks</strong> now takes <strong>2 hours</strong>. A system that took <strong>2 months</strong> now takes <strong>a few days</strong>.</p>
      <p class="mb-4">AI handles repetitive work: boilerplate code, UI components, API setup, database connections, routing, testing, and deployment configs. Humans now focus only on vision and creativity.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. What AI Product Builders Can Build Today</h3>
      <p class="mb-4">Modern AI builders can already generate:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Landing pages</li>
        <li>Full web applications</li>
        <li>Dashboards</li>
        <li>Admin panels</li>
        <li>Onboarding flows</li>
        <li>SaaS features</li>
        <li>APIs & databases</li>
        <li>Automation systems</li>
      </ul>
      <p class="mb-4">Tools like <strong>PerfectCode.ai (V2)</strong> represent a new generation of co-builders — AI that builds alongside you.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. A New Type of Founder Is Emerging</h3>
      <p class="mb-4">Previously, founders needed coding skills, funding, technical co-founders, and large teams. Not anymore.</p>
      <p class="mb-4"><strong>AI-first founders</strong> can build prototypes, test ideas, pivot instantly, and launch globally. This is the greatest opportunity window in startup history.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. Why AI Product Builders Are the Future</h3>
      <p class="mb-4">Several forces guarantee their rise:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Demand for software is exploding</li>
        <li>Global developer shortage</li>
        <li>AI models improving monthly</li>
        <li>Businesses require faster cycles</li>
        <li>Cost reduction: 90% cheaper</li>
      </ul>
      <p class="mb-4">A project that once cost <strong>$80,000</strong> can now cost <strong>under $5,000</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">6. The PerfectCode.ai Example</h3>
      <p class="mb-4">PerfectCode V2 can read your idea, create a product blueprint, generate UI & backend, build a deployment pipeline, and allow scalable editing. It works as a creative collaborator — turning ideas into products in a fraction of the time.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">7. Industries That Will Transform First</h3>
      <p class="mb-4">AI Product Builders will reshape SaaS, e-commerce, healthcare, finance, education, real estate, and logistics. Companies that adopt AI builders will innovate <strong>10× faster</strong>.</p>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">AI Product Builders are not replacing developers — they’re removing bottlenecks.</p>
      <p class="mb-4">The next global startups will be built by solo founders, small squads, and AI-first companies.</p>
      <p>We are entering an era of instant creation, powered by AI Product Builders.</p>
    `,
  },
  {
    id: 5,
    title: "Synthetic AI: How Machines Think Differently Than Humans",
    slug: "galaxy-note-5-synthetic-ai",
    category: "Intelligence",
    excerpt:
      "Synthetic AI is not just faster than humans. It thinks differently. Humans think biologically; AI thinks computationally.",
    author: "10x Galaxy Team",
    date: "Jul 01, 2024",
    imageUrl: blog5,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">Synthetic AI is not just faster than humans. It doesn’t simply automate tasks. It <strong>thinks differently</strong>.</p>
      <p class="mb-4">Humans think biologically. AI thinks computationally. This difference is creating a new class of intelligence — one that does not replace humans but operates in a completely different dimension of <strong>reasoning, speed, and creativity</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. Human Thinking vs Synthetic Thinking</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 class="font-bold">Human thinking is:</h4>
          <ul class="list-disc pl-6 space-y-1">
            <li>Emotional</li>
            <li>Slow</li>
            <li>Sequential</li>
            <li>Limited by memory</li>
            <li>Influenced by personal bias</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold">Synthetic AI thinking is:</h4>
          <ul class="list-disc pl-6 space-y-1">
            <li>Emotionless</li>
            <li>Instant</li>
            <li>Parallel</li>
            <li>Unlimited in memory</li>
            <li>Free from personal bias</li>
          </ul>
        </div>
      </div>
      <p class="mb-4">AI does not “understand” the way humans do — it predicts patterns at superhuman scale.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. AI Sees Patterns Humans Can’t</h3>
      <p class="mb-4">Humans see patterns <strong>linearly</strong>. AI see patterns <strong>across billions of data points instantly</strong>.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Detects medical anomalies invisible to specialists</li>
        <li>Predicts customer behavior with extreme precision</li>
        <li>Forecasts financial trends better than analysts</li>
      </ul>
      <p class="mb-4">AI identifies relationships that look unrelated to the human mind.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. AI Doesn’t Get Tired, Emotional, or Distracted</h3>
      <p class="mb-4">Human thinking declines due to fatigue, stress, hunger, multitasking, and emotions. Synthetic AI maintains <strong>100% performance</strong>, regardless of time, workload, emotion, or pressure. This creates a new category of <strong>always-on intelligence</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. AI Has a Different Form of Creativity</h3>
      <p class="mb-4">Human creativity comes from experiences, emotions, memories, dreams, and culture. AI creativity comes from pattern recognition, data synthesis, model training, and constraints.</p>
      <p class="mb-4">This is why AI can invent art styles that don’t exist, generate synthetic music, and design products beyond human imagination. AI doesn’t feel creativity — it <strong>computes</strong> creativity.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. Synthetic AI Learns Continuously</h3>
      <p class="mb-4">Humans learn slowly through repetition. AI learns instantly through data. Every new input updates the model, improves predictions, and enhances accuracy. This creates <strong>compound intelligence</strong> — the more AI works, the smarter it becomes.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">6. Humans + AI = Hybrid Intelligence</h3>
      <p class="mb-4">The future is not <strong>Humans vs AI</strong>. The future is <strong>Humans + AI</strong>.</p>
      <p class="mb-4">Humans bring vision, ethics, strategy, emotional depth, and creative direction. AI brings speed, scale, precision, automation, and unlimited pattern recognition.</p>
      <p class="mb-4">Together, they form <strong>hybrid intelligence</strong> — more powerful than either alone.</p>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">Synthetic AI does not think like us — and that’s the point.</p>
      <p class="mb-4">Human intuition + Synthetic reasoning = The future of innovation.</p>
      <p class="mb-4">Businesses, creators, and founders who understand this partnership will lead the next decade. The world now belongs to those who know how to <strong>think with AI</strong>, not against it.</p>
    `,
  },
  {
    id: 6,
    title: "The Story Behind 10x Galaxy",
    slug: "galaxy-note-6-story",
    category: "Company Vision",
    excerpt:
      "10x Galaxy did not begin as a company. It began as a realization that the world was shifting.",
    author: "10x Galaxy Team",
    date: "Jun 28, 2024",
    imageUrl: blog6,
    content: `
      <h3 class="text-2xl font-bold mt-8 mb-4">1. The Real Beginning</h3>
      <p class="mb-4">10x Galaxy did not begin as a company. It began as a realization.</p>
      <p class="mb-4">The world was shifting:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>AI could build faster than humans</li>
        <li>Small teams could outperform corporations</li>
        <li>Ideas could become products almost instantly</li>
      </ul>
      <p class="mb-4">This opened a once-in-a-generation opportunity: to build AI and AGI products at 10× speed with global potential. 10x Galaxy emerged from this insight.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. The Vision</h3>
      <p class="mb-4">While most companies build a single product, 10x Galaxy was created to build <strong>an entire ecosystem</strong> — a <strong>galaxy of AI platforms</strong> orbiting around founders, creators, and modern businesses.</p>
      <p class="mb-4">The cosmic theme symbolizes:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Stars</strong> → Ideas</li>
        <li><strong>Planets</strong> → Products</li>
        <li><strong>Galaxies</strong> → The full ecosystem</li>
      </ul>
      <p class="mb-4">10x Galaxy is not a company; it is a universe of AI tools built for the new era.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. Why the Name “10x Galaxy”</h3>
      <p class="mb-4">The name holds three layers of meaning:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>10× Speed</strong> → AI-first product development</li>
        <li><strong>10× Impact</strong> → Massively accelerating human productivity</li>
        <li><strong>Galaxy</strong> → A universe of interconnected AI platforms</li>
      </ul>
      <p class="mb-4">It represents a future where ideas turn into products at exponential speed.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. Idea → Interstellar</h3>
      <p class="mb-4">The core philosophy behind 10x Galaxy: <strong>Turn ideas into interstellar realities.</strong></p>
      <p class="mb-4">The launch journey mirrors a rocket mission:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Ignition</strong> → Idea</li>
        <li><strong>Lift-Off</strong> → MVP</li>
        <li><strong>Orbit</strong> → Early traction</li>
        <li><strong>Interstellar</strong> → Global scale</li>
      </ul>
      <p class="mb-4">This roadmap guides every product inside the ecosystem.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. Product Universe</h3>
      <p class="mb-4">10x Galaxy has already launched multiple AI platforms:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>PerfectCode.ai</strong> — AI code engine + product builder</li>
        <li><strong>Dialogsy.ai</strong> — AI conversation automation</li>
        <li><strong>Photo360.ai & MonaLisaX.ai</strong> — AI creative tools</li>
        <li><strong>StoryMaster.ai</strong> — AI storytelling and book creation</li>
      </ul>
      <p class="mb-4">Additional products include MeetingPilot.ai, FunnelBee, SalesBeeCRM, and others. Each product is a new <strong>planet</strong> in the 10x Galaxy universe — different worlds, same mission.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">6. Small Teams, Big Outcomes</h3>
      <p class="mb-4">AI enables <strong>3–5 people to build what once required 50</strong>.</p>
      <p class="mb-4">Old model: 1 product every 1–2 years.<br>New model: 5–10 products per year using AI-first development.</p>
      <p class="mb-4">This efficiency is the foundation of the <strong>10x Galaxy venture studio model</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">7. The Mission</h3>
      <p class="mb-4">The mission is bold and clear: <strong>Build → Launch → Scale → Flip</strong>.</p>
      <p class="mb-4">10x Galaxy aims to:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Launch 10+ AI SaaS platforms</li>
        <li>Reach $100K–$1M valuations per product</li>
        <li>Create a premium AI ecosystem</li>
        <li>Empower global founders</li>
        <li>Lead innovation in the AGI era</li>
      </ul>
      <p class="mb-4">It is a venture studio engineered for exponential creation.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">8. The Future</h3>
      <p class="mb-4">10x Galaxy is evolving into a <strong>global AI Venture Studio</strong>, creating the next generation of intelligent platforms.</p>
      <p class="mb-4">The coming era will include AGI tools, autonomous agents, micro-SaaS systems, and auto-building AI platforms. 10x Galaxy is positioned not just to participate in this new age — but to <strong>lead it</strong>.</p>
    `,
  },
  {
    id: 7,
    title: "Why AI Will Never Fully Replace Human Creativity",
    slug: "galaxy-note-7-human-creativity",
    category: "Philosophy",
    excerpt:
      "AI can generate music and paintings, but it cannot replicate the full depth of the human soul expressed through ideas.",
    author: "10x Galaxy Team",
    date: "May 25, 2024",
    imageUrl: blog7,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">AI can generate music, paintings, stories, designs — even entire products. But no matter how advanced it becomes, AI will never <strong>fully replace</strong> human creativity.</p>
      <p class="mb-4">Why? Because creativity is not just the process of producing something new. Creativity is <strong>emotion, intention, context, memory, experience, intuition, and the human soul</strong> expressed through ideas.</p>
      <p class="mb-8">AI can assist. AI can amplify. AI can accelerate. But AI cannot replicate the full depth of the human creative engine.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. AI Predicts — Humans Imagine</h3>
      <p class="mb-4">AI creativity is pattern-based. It analyzes data and predicts the next most probable result.</p>
      <p class="mb-4">Human creativity is <strong>imagination-based</strong>. Humans create what has never existed — not because of data, but because of vision.</p>
      <p class="mb-4">AI recombines. Humans invent. This is the core difference.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. AI Has No Lived Experience</h3>
      <p class="mb-4">Every human idea comes from childhood memories, emotions, failures, relationships, culture, pain, joy, and curiosity.</p>
      <p class="mb-4">AI has <strong>none of these</strong>. It does not feel heartbreak, awe, fear, love, or wonder. But human creativity is born from these emotional moments. This emotional depth cannot be synthesized.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. AI Has No Intent or Meaning</h3>
      <p class="mb-4">Humans create with <strong>purpose</strong>: a painting may express grief, a poem may reflect healing, a product may solve a personal struggle. AI does not create with intention. It generates outputs without meaning, values, or motives. Only humans can attach meaning to ideas.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. Human Creativity Breaks Rules — AI Follows Them</h3>
      <p class="mb-4">AI follows patterns. Humans break them.</p>
      <p class="mb-4">Everything revolutionary in human history — from abstract art to jazz, from film to architecture, from startups to scientific breakthroughs — came from someone who did <strong>what had never been done before</strong>.</p>
      <p class="mb-4">AI can only remix what exists. Humans can break the pattern and invent the impossible.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. Creativity Is Chaos, and AI Is Structure</h3>
      <p class="mb-4">Human creativity comes from randomness, intuition, irrational thought, and spontaneous connections. AI is structured: logical, predictable, pattern-dependent, controlled.</p>
      <p class="mb-4">The most powerful ideas often come from human chaos — the kind AI cannot replicate.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">6. The Future Is Human + AI, Not Human vs AI</h3>
      <p class="mb-4">AI won’t replace creative humans. AI will replace <strong>non-creative routines</strong> inside creative work.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>AI can draft a design, but the designer chooses the emotion.</li>
        <li>AI can write variations, but the writer chooses the message.</li>
        <li>AI can compose melodies, but the musician chooses the soul.</li>
        <li>AI can generate product ideas, but the founder chooses the vision.</li>
      </ul>
      <p class="mb-4">The future belongs to those who know how to <strong>use AI as a creative amplifier</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">7. Creativity Requires Risk and Courage</h3>
      <p class="mb-4">AI cannot take risks. AI cannot rebel. AI cannot dream of something that breaks its own training. Humans can. Every breakthrough requires <strong>courage</strong>, something AI does not possess.</p>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">AI is powerful, but creativity is human. AI may produce faster, but humans create deeper. AI may generate ideas, but humans give them meaning.</p>
      <p class="mb-4">The future of creativity is not competition. It is <strong>collaboration</strong>.</p>
      <p>Humans will imagine. AI will accelerate. Together, they will build the next era of innovation.</p>
    `,
  },
  {
    id: 8,
    title: "How AI Can Make Solo Entrepreneurs Billionaires",
    slug: "galaxy-note-8-solo-billionaires",
    category: "Wealth Creation",
    excerpt:
      "The billionaire equation has changed. A single person can now build what once required factories, offices, and supply chains.",
    author: "10x Galaxy Team",
    date: "Apr 20, 2024",
    imageUrl: blog8,
    content: `
      <p class="text-xl leading-relaxed font-light text-gray-600 mb-8">For the first time in history, a <strong>single person</strong> can build what once required a full development team, a marketing department, a customer support center, and a finance and operations unit.</p>
      <p class="mb-4">AI transforms solo entrepreneurs into <strong>full-scale companies</strong>, operating with the power of 20–50 employees — without hiring anyone.</p>
      <p class="mb-8">This shift doesn’t just increase income. It makes it possible for individuals to reach <strong>massive wealth</strong>, even billionaire-level outcomes.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">1. AI Removes the Need for Large Teams</h3>
      <p class="mb-4">Previously, building a world-class product required engineers, designers, marketers, salespeople, writers, and operators.</p>
      <p class="mb-4">AI now handles:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Coding (PerfectCode.ai)</li>
        <li>Design & branding</li>
        <li>Content creation</li>
        <li>Automation workflows</li>
        <li>Marketing & funnels</li>
        <li>Customer support via agents</li>
        <li>Analytics & optimization</li>
      </ul>
      <p class="mb-4">This means <strong>one person can do the work of an entire startup team</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">2. AI Eliminates 90% of Startup Costs</h3>
      <p class="mb-4">Traditional startup cost: $50,000–$500,000+. <br>AI startup cost today: $0–$200/month.</p>
      <p class="mb-4">AI reduces costs in development, infrastructure, design, content, HR, marketing, and operations. Because of this dramatic cost collapse, solo founders can launch businesses that previously required VC funding.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">3. AI Lets You Launch Multiple Income Streams</h3>
      <p class="mb-4">A modern solo entrepreneur can run <strong>5–20 micro businesses</strong> at the same time:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Micro-SaaS tools</li>
        <li>AI automation agencies</li>
        <li>Digital products</li>
        <li>Subscription communities</li>
        <li>AI-driven content engines</li>
        <li>Niche GPT tools</li>
        <li>Online courses</li>
        <li>Landing page funnels</li>
      </ul>
      <p class="mb-4">This diversification creates compound income — the secret to scaling toward millionaire and billionaire levels.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">4. Distribution Is Now AI-Powered</h3>
      <p class="mb-4">In the past, distribution required money, networks, or big teams. Today, AI handles SEO, video creation, social posting, ads optimization, email campaigns, and automated lead generation. A solo founder can reach millions of people <strong>without spending huge budgets</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">5. AI Creates New Markets With Massive Potential</h3>
      <p class="mb-4">AI is not just improving existing industries. It is creating new ones:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>AI agents</li>
        <li>Autonomous workflows</li>
        <li>AI SaaS builders</li>
        <li>Synthetic media</li>
        <li>Digital clones</li>
        <li>Instant product generators</li>
        <li>Automated consulting tools</li>
        <li>Personal AI assistants</li>
      </ul>
      <p class="mb-4">These markets will produce the next <strong>billion-dollar solo entrepreneurs</strong>.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">6. One Person Can Now Build Exponential Products</h3>
      <p class="mb-4">A solo entrepreneur with AI can build products, iterate fast, scale globally, automate everything, and sell or license systems.</p>
      <p class="mb-4">This exponential loop increases revenue, valuation, and exit potential. Many of today’s AI founders already run multi-million dollar companies <strong>alone</strong>. This is just the beginning.</p>

      <h3 class="text-2xl font-bold mt-8 mb-4">7. The Billionaire Equation Has Changed</h3>
      <p class="mb-4">The old billionaire equation required: Teams + Factories + Offices + Investors + Supply Chains.</p>
      <p class="mb-4">The new equation: <strong>AI + Distribution + Speed + Consistency = Extreme Wealth</strong>.</p>
      <p class="mb-4">A single person can now build:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>10 AI tools → each earning $10K/month</li>
        <li>3 automation agencies → earning $30K/month</li>
        <li>1 AI SaaS → scaling to $100K/month</li>
      </ul>
      <p class="mb-4">This compounds into life-changing wealth.</p>

      <p class="font-bold mt-8 text-xl">Final Thought</p>
      <p class="mb-4">AI is the greatest equalizer of our time. It gives individuals the leverage that only corporations once had.</p>
      <p class="mb-4">Solo entrepreneurs who learn to use AI, launch fast, automate, and scale globally will create the next generation of <strong>self-made millionaires and billionaires</strong>.</p>
      <p>The future belongs to the individuals who build at <strong>10× speed</strong> in the AI era.</p>
    `,
  },
];

const POSTS_PER_PAGE = 6;

// --- 2. Blog Hero Section ---
const BlogHeroSection = () => (
  <motion.section
    className="relative bg-black text-white py-24 sm:py-32 lg:py-40 flex items-center justify-center overflow-hidden"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${blogshero})`, // filter: "blur(6px) brightness(0.7)",
        filter: "brightness(0.7)",
        transform: "scale(1.05)",
      }}
    ></div>
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tighter"
        variants={itemVariants}
      >
        Galaxy Notes
      </motion.h1>
      {/* <motion.p
        className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Our thoughts on AI, product, and building 10x ventures.
      </motion.p> */}
    </div>
  </motion.section>
);

// --- 3. Blog List Section ---
const BlogListSection = ({ onPostClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockPosts.length / POSTS_PER_PAGE);

  // Get posts for the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = mockPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Boundary check
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <motion.section
      className="bg-[#F2F2F2] text-black py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={currentPage} // Add key to force re-animation on page change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              onClick={() => onPostClick(post)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={post.imageUrl}
                  alt={`Featured image for ${post.title}`}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400/F2F2F2/000000?text=Image+Error";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold bg-gradient-to-br from-[#22D2E0] to-[#85249F] bg-clip-text text-transparent uppercase tracking-wider mb-2">
                  {post.category}
                </p>
                <h3
                  className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:bg-gradient-to-br group-hover:from-[#22D2E0] group-hover:to-[#85249F]
             group-hover:bg-clip-text group-hover:text-transparent transition-colors"
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-black group-hover:translate-x-1 transition-transform">
                  Read Note
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Pagination Controls --- */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white text-black border border-gray-200 hover:bg-gray-100 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Prev
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-white text-black border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white text-black border border-gray-200 hover:bg-gray-100 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

// --- 4. Blog Post Page Component ---
const BlogPostPage = ({ post, onBackClick }) => (
  <main className="bg-white min-h-screen">
    {/* Post Header */}
    <motion.section
      className="bg-black text-white pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(${post.imageUrl})`,
          //   filter: "blur(20px)",
        }}
      ></div>
      {/* <div className="absolute inset-0 bg-black opacity-60"></div>{" "} */}
      {/* Overlay */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants}>
          <button
            onClick={onBackClick}
            className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-8 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Notes
          </button>
        </motion.div>

        <motion.span
          className="inline-block px-3 py-1 rounded text-xs font-bold bg-blue-600 text-white uppercase tracking-wider mb-6"
          variants={itemVariants}
        >
          {post.category}
        </motion.span>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
          variants={itemVariants}
        >
          {post.title}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center space-x-4 text-gray-300 text-sm md:text-base"
          variants={itemVariants}
        >
          <span className="font-medium text-white">{post.author}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <span>5 min read</span>
        </motion.div>
      </div>
    </motion.section>

    {/* Post Content */}
    <motion.section
      className="relative -mt-10 z-20 pb-24"
      initial="hidden"
      whileInView="visible"
      //   viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-br from-[#22D2E0] to-[#85249F] rounded-2xl shadow-2xl p-0.5"
          variants={itemVariants}
        >
          <div className="bg-white  rounded-2xl">
            {" "}
            {/* Article Content */}
            <div
              className="p-8 md:p-12 prose prose-lg prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-a:text-blue-600 prose-blockquote:border-l-black prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-li:text-gray-600 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {/* Footer / Share / Back */}
            <div className="rounded-b-xl mt-16 p-8 md:p-12 border-t border-gray-100 flex justify-between items-center bg-gradient-to-br from-[#22D2E0] to-[#85249F]">
              <button
                onClick={onBackClick}
                className="text-white hover:text-gray-300 font-semibold flex items-center transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all notes
              </button>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-foreground cursor-pointer transition-colors">
                  {/* <svg
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
								</svg> */}
                  <FaXTwitter />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-foreground hover:text-white cursor-pointer transition-colors">
                  {/* <svg
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg> */}
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  </main>
);

// --- Main App Component ---
export default function Blogs() {
  const [view, setView] = useState("list"); // 'list' or 'post'
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setView("post");
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
    setView("list");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white font-sans antialiased">
      {view === "list" && (
        <main>
          <BlogHeroSection />
          <BlogListSection onPostClick={handlePostClick} />
        </main>
      )}

      {view === "post" && (
        <BlogPostPage post={selectedPost} onBackClick={handleBackClick} />
      )}
    </div>
  );
}
