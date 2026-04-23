export interface Term {
  id: string;
  term: string;
  category: string;
  shortDef: string;
  definition: string;
  usage: string;
  example: string;
}

export const TERMS: Term[] = [
  // ── WEB DEVELOPMENT ─────────────────────────────────────────────────────
  {
    id: "api",
    term: "API",
    category: "Web Development",
    shortDef: "A set of rules that lets software talk to other software.",
    definition: "Application Programming Interface (API) is a contract between systems that defines how one piece of software requests data or actions from another. APIs hide internal complexity and expose only what's needed.",
    usage: "Use it when discussing integrations, data fetching, or building services that other developers will consume.",
    example: "\"Our payment system uses Stripe's API\" or \"We need to build a public API so partners can access our data.\""
  },
  {
    id: "rest",
    term: "REST",
    category: "Web Development",
    shortDef: "An architectural style for building web APIs using HTTP.",
    definition: "Representational State Transfer (REST) is an approach to web APIs where resources are identified by URLs and manipulated using standard HTTP methods: GET, POST, PUT, PATCH, DELETE. RESTful APIs are stateless — each request is self-contained.",
    usage: "Comes up when designing or evaluating how services communicate over the web.",
    example: "\"We're building a RESTful API where GET /users returns all users and DELETE /users/123 removes one.\""
  },
  {
    id: "graphql",
    term: "GraphQL",
    category: "Web Development",
    shortDef: "A query language for APIs that lets clients request exactly the data they need.",
    definition: "GraphQL is an alternative to REST APIs where the client specifies the exact shape of the data it needs in a single request. Instead of hitting multiple endpoints, you send one query to one endpoint and get back precisely what you asked for.",
    usage: "Mention it when REST APIs are returning too much or too little data, or when multiple teams need different data shapes from the same service.",
    example: "\"With GraphQL, our mobile app only fetches the 3 fields it needs instead of the full user object.\""
  },
  {
    id: "webhook",
    term: "Webhook",
    category: "Web Development",
    shortDef: "An automatic HTTP notification sent when an event happens.",
    definition: "A webhook is a URL you register with a service so it can push data to you when something occurs — rather than you polling repeatedly. When the event fires, the service makes an HTTP POST to your URL with relevant data.",
    usage: "Use it when explaining real-time event-driven integrations between systems.",
    example: "\"We set up a webhook so Stripe notifies us the moment a payment succeeds, instead of us checking every minute.\""
  },
  {
    id: "cdn",
    term: "CDN",
    category: "Web Development",
    shortDef: "A network of servers that delivers content from locations close to users.",
    definition: "A Content Delivery Network (CDN) is a geographically distributed group of servers that caches static content (images, JavaScript, CSS, video) and serves it from whichever server is closest to the end user, reducing latency and load on the origin.",
    usage: "Bring it up when discussing page load performance, global deployments, or reducing server costs.",
    example: "\"After adding a CDN, our Australian users stopped complaining about slow load times.\""
  },
  {
    id: "cors",
    term: "CORS",
    category: "Web Development",
    shortDef: "A browser security rule controlling which websites can talk to your API.",
    definition: "Cross-Origin Resource Sharing (CORS) is a browser-enforced security mechanism that blocks JavaScript on one domain from making requests to a different domain unless the server explicitly allows it via HTTP headers.",
    usage: "Comes up constantly when a frontend on one domain tries to call an API on another domain.",
    example: "\"The app broke in production because we forgot to add CORS headers allowing our frontend domain to call the API.\""
  },
  {
    id: "spa",
    term: "SPA",
    category: "Web Development",
    shortDef: "A web app that loads once and updates dynamically without full page reloads.",
    definition: "A Single-Page Application (SPA) loads a single HTML shell and then dynamically updates the content using JavaScript as the user navigates, communicating with APIs in the background. React, Angular, and Vue apps are typically SPAs.",
    usage: "Use when comparing web architectures or discussing frontend framework choices.",
    example: "\"Our dashboard is a React SPA — navigation is instant because we're not reloading the page each time.\""
  },
  {
    id: "ssr",
    term: "SSR",
    category: "Web Development",
    shortDef: "Rendering web pages on the server before sending them to the browser.",
    definition: "Server-Side Rendering (SSR) means the HTML for a page is generated on the server per-request and sent fully formed to the browser — as opposed to a blank shell that JavaScript fills in. Results in faster initial loads and better SEO.",
    usage: "Relevant when discussing SEO, first-contentful-paint performance, or frameworks like Next.js.",
    example: "\"We switched to SSR so search engines can index our content without running JavaScript.\""
  },
  {
    id: "cache",
    term: "Cache",
    category: "Web Development",
    shortDef: "A temporary store of data to speed up future requests.",
    definition: "A cache stores copies of data in a fast-access location so future requests for the same data can be served without repeating expensive computations or network calls. Caches exist at every level: browser, CDN, server, database.",
    usage: "Essential when discussing performance optimization, stale data problems, or scaling.",
    example: "\"We cache product listings for 5 minutes so the database isn't hit on every page load.\""
  },
  {
    id: "jwt",
    term: "JWT",
    category: "Web Development",
    shortDef: "A compact, self-contained token used to verify identity.",
    definition: "A JSON Web Token (JWT) is a signed, encoded string containing claims (user ID, roles, expiry) that a server issues after login. The client sends it on every request; the server verifies the signature without hitting a database — making auth stateless.",
    usage: "Comes up in any authentication discussion, especially with APIs and microservices.",
    example: "\"After login, we issue a JWT. The user sends it in the Authorization header on every API call.\""
  },

  // ── CLOUD & INFRASTRUCTURE ───────────────────────────────────────────────
  {
    id: "iaas",
    term: "IaaS",
    category: "Cloud",
    shortDef: "Renting raw computing infrastructure (servers, storage, networks) from a cloud provider.",
    definition: "Infrastructure as a Service provides virtualized computing resources over the internet. You manage the OS, runtime, and applications — the provider handles the physical hardware. AWS EC2, Google Compute Engine, and Azure VMs are IaaS.",
    usage: "Use when comparing cloud service models or discussing how much control vs. responsibility a team wants.",
    example: "\"We use IaaS for our database servers because we need full control over OS tuning.\""
  },
  {
    id: "paas",
    term: "PaaS",
    category: "Cloud",
    shortDef: "A cloud platform that lets you deploy apps without managing servers.",
    definition: "Platform as a Service abstracts away infrastructure management. You provide the code; the platform handles deployment, scaling, OS patching, and runtime. Heroku, Google App Engine, and Cloudflare Workers are PaaS examples.",
    usage: "Relevant when teams want to move fast without ops overhead.",
    example: "\"We moved our API to a PaaS so the team can deploy by pushing code, with zero server management.\""
  },
  {
    id: "saas",
    term: "SaaS",
    category: "Cloud",
    shortDef: "Software delivered over the internet — no installation needed.",
    definition: "Software as a Service is software hosted and managed by a vendor, accessed via a browser or API. The user pays for access, not infrastructure. Salesforce, Slack, Gmail, and GitHub are SaaS products.",
    usage: "Ubiquitous in business discussions — when evaluating tools, licensing, or build-vs-buy decisions.",
    example: "\"Instead of building our own ticketing system, we chose a SaaS solution to get to market faster.\""
  },
  {
    id: "serverless",
    term: "Serverless",
    category: "Cloud",
    shortDef: "Running code without managing or provisioning any servers.",
    definition: "Serverless computing lets you deploy individual functions that run on-demand in response to events. The cloud provider handles all infrastructure — you only pay per execution. AWS Lambda, Cloudflare Workers, and Azure Functions are serverless platforms.",
    usage: "Use when discussing cost efficiency, auto-scaling, or reducing operational complexity.",
    example: "\"We replaced our always-on server with a serverless function — costs dropped 80% because we only pay when it runs.\""
  },
  {
    id: "kubernetes",
    term: "Kubernetes",
    category: "Cloud",
    shortDef: "A system that automates deploying, scaling, and managing containerized apps.",
    definition: "Kubernetes (K8s) is an open-source container orchestration platform originally developed at Google. It automates deploying containers across a cluster of machines, handles load balancing, self-healing (restarting crashed containers), scaling, and rolling updates.",
    usage: "Comes up in any enterprise cloud, DevOps, or microservices conversation.",
    example: "\"Our Kubernetes cluster automatically scaled from 3 to 20 pods during Black Friday traffic.\""
  },
  {
    id: "docker",
    term: "Docker",
    category: "Cloud",
    shortDef: "A tool that packages applications into portable containers.",
    definition: "Docker is a platform for building, shipping, and running applications in containers — lightweight, isolated environments that include everything an app needs to run. Containers behave identically across development, staging, and production.",
    usage: "Essential in any DevOps, deployment, or microservices discussion.",
    example: "\"We Dockerized the app so it runs exactly the same on a developer's laptop and in production.\""
  },
  {
    id: "microservices",
    term: "Microservices",
    category: "Cloud",
    shortDef: "An architecture where an app is built as small, independent services.",
    definition: "Microservices architecture decomposes an application into small, independently deployable services that communicate over APIs. Each service owns its data and can be developed, deployed, and scaled independently — contrast with a monolith.",
    usage: "Comes up in architecture discussions, scaling problems, or team autonomy conversations.",
    example: "\"We split the monolith into microservices so the payments team can deploy independently without touching the user service.\""
  },
  {
    id: "monolith",
    term: "Monolith",
    category: "Cloud",
    shortDef: "A single unified application where all components are tightly coupled.",
    definition: "A monolithic architecture packages all functionality — UI, business logic, data access — into one deployable unit. Simple to develop early on but harder to scale and maintain as complexity grows. Often contrasted with microservices.",
    usage: "Useful in architecture strategy discussions — many teams deliberately stay monolith early.",
    example: "\"Our monolith is still serving us well at this scale — splitting into microservices would add complexity we don't need yet.\""
  },
  {
    id: "load-balancer",
    term: "Load Balancer",
    category: "Cloud",
    shortDef: "A system that distributes incoming traffic across multiple servers.",
    definition: "A load balancer sits in front of multiple servers and routes incoming requests across them to prevent any single server from becoming a bottleneck. It also handles health checks and reroutes traffic away from unhealthy instances.",
    usage: "Comes up in high-availability, scaling, and reliability discussions.",
    example: "\"We added a load balancer in front of our three API servers so traffic is distributed evenly and we don't go down if one fails.\""
  },
  {
    id: "vpc",
    term: "VPC",
    category: "Cloud",
    shortDef: "A private, isolated section of cloud network you control.",
    definition: "A Virtual Private Cloud (VPC) is a logically isolated network within a public cloud where you define IP ranges, subnets, routing tables, and access controls. Your resources inside a VPC are hidden from the public internet unless you explicitly expose them.",
    usage: "Relevant in any cloud security, networking, or architecture discussion.",
    example: "\"Our database sits inside a VPC with no public IP — only our application servers can reach it.\""
  },

  // ── AI & MACHINE LEARNING ────────────────────────────────────────────────
  {
    id: "llm",
    term: "LLM",
    category: "AI & ML",
    shortDef: "A large AI model trained to understand and generate human language.",
    definition: "A Large Language Model (LLM) is a deep learning model trained on massive text datasets to predict and generate text. LLMs like GPT-4, Claude, and Gemini can answer questions, summarize, translate, write code, and hold conversations.",
    usage: "Central to any AI product, automation, or generative AI discussion.",
    example: "\"We're using an LLM to auto-draft customer support replies — agents review and send them.\""
  },
  {
    id: "prompt-engineering",
    term: "Prompt Engineering",
    category: "AI & ML",
    shortDef: "Crafting inputs to an AI model to get better, more reliable outputs.",
    definition: "Prompt engineering is the practice of designing and refining the text you send to an AI model to improve the quality, accuracy, or format of the response. Techniques include role-setting, chain-of-thought instructions, few-shot examples, and output formatting constraints.",
    usage: "Use when discussing how to get better results from AI tools without fine-tuning the model.",
    example: "\"Our team spent a week on prompt engineering before the quality was good enough for production.\""
  },
  {
    id: "rag",
    term: "RAG",
    category: "AI & ML",
    shortDef: "Giving an AI model access to a knowledge base before generating a response.",
    definition: "Retrieval-Augmented Generation (RAG) combines a retrieval system (searching a database or documents) with a generative model. Relevant chunks are fetched first, then provided to the LLM as context, reducing hallucinations and keeping answers grounded in real data.",
    usage: "Key concept when building AI chatbots or Q&A systems over internal documents.",
    example: "\"We use RAG so the AI answers from our actual documentation instead of making things up.\""
  },
  {
    id: "fine-tuning",
    term: "Fine-tuning",
    category: "AI & ML",
    shortDef: "Training a pre-existing AI model further on your specific data.",
    definition: "Fine-tuning takes a pre-trained model and continues training it on a smaller, domain-specific dataset to specialize its behavior. It's cheaper than training from scratch and results in a model that performs better on your specific task.",
    usage: "Comes up when off-the-shelf models aren't accurate enough for a specialized domain.",
    example: "\"We fine-tuned the model on our legal contracts so it understands our specific clause language.\""
  },
  {
    id: "neural-network",
    term: "Neural Network",
    category: "AI & ML",
    shortDef: "A computing system loosely modeled on the human brain that learns from data.",
    definition: "A neural network is a machine learning architecture made of interconnected layers of nodes (neurons). Data flows through layers, each transforming it — the network learns by adjusting connection weights during training to minimize prediction error.",
    usage: "Foundational term when discussing how modern AI and deep learning systems work.",
    example: "\"The image recognition system uses a deep neural network trained on millions of labeled photos.\""
  },
  {
    id: "vector-database",
    term: "Vector Database",
    category: "AI & ML",
    shortDef: "A database that stores and searches data as mathematical embeddings.",
    definition: "A vector database stores data as high-dimensional numerical vectors (embeddings) and retrieves items based on semantic similarity rather than exact match. It's the backbone of RAG systems, semantic search, and recommendation engines.",
    usage: "Essential in modern AI application architecture discussions.",
    example: "\"We store our product descriptions as embeddings in a vector database so the AI can find semantically similar items.\""
  },
  {
    id: "hallucination",
    term: "Hallucination",
    category: "AI & ML",
    shortDef: "When an AI model generates confident but factually incorrect output.",
    definition: "AI hallucination refers to when a language model produces plausible-sounding but factually wrong, fabricated, or nonsensical content — often with misplaced confidence. It occurs because LLMs generate statistically likely text, not verified facts.",
    usage: "Critical to mention in any discussion about AI reliability, trust, or production deployment.",
    example: "\"The AI hallucinated a legal citation that doesn't exist — that's why we added human review before sending anything to clients.\""
  },
  {
    id: "inference",
    term: "Inference",
    category: "AI & ML",
    shortDef: "Running a trained AI model to generate predictions or outputs.",
    definition: "Inference is the deployment phase of a machine learning model — using it to make predictions on new data. As opposed to training (where the model learns), inference is the production step. Latency, cost, and throughput are the key concerns.",
    usage: "Use when discussing AI performance, cost at scale, or production architecture.",
    example: "\"Our inference costs shot up after we scaled — we moved to a cheaper model for low-stakes queries.\""
  },
  {
    id: "transformer",
    term: "Transformer",
    category: "AI & ML",
    shortDef: "The neural network architecture that powers most modern AI models.",
    definition: "The Transformer is a deep learning architecture introduced in the 2017 paper 'Attention Is All You Need.' It uses a mechanism called self-attention to process sequences in parallel, enabling the training of very large models. GPT, BERT, and Claude are all transformer-based.",
    usage: "Use when going deeper on AI architecture or explaining why modern AI is so capable.",
    example: "\"The reason LLMs are so good at context is the transformer architecture's attention mechanism.\""
  },

  // ── DEVOPS & CI/CD ───────────────────────────────────────────────────────
  {
    id: "cicd",
    term: "CI/CD",
    category: "DevOps",
    shortDef: "Automated pipelines that build, test, and deploy code on every change.",
    definition: "Continuous Integration (CI) automatically builds and tests code when a developer pushes changes. Continuous Deployment (CD) automatically deploys passing builds to production. Together they eliminate manual steps, catch bugs early, and enable multiple deployments per day.",
    usage: "Core concept in any software delivery, engineering velocity, or DevOps discussion.",
    example: "\"Our CI/CD pipeline runs 400 tests in 3 minutes and auto-deploys to production if they all pass.\""
  },
  {
    id: "devops",
    term: "DevOps",
    category: "DevOps",
    shortDef: "A culture and set of practices that unifies software development and IT operations.",
    definition: "DevOps is a philosophy and set of practices that bridges the gap between development (writing code) and operations (running it). It emphasizes automation, collaboration, short feedback loops, and shared responsibility for reliability.",
    usage: "Use when discussing team structure, deployment speed, or organizational change.",
    example: "\"We adopted DevOps practices — developers now own deployments and on-call rotations, not a separate ops team.\""
  },
  {
    id: "infrastructure-as-code",
    term: "Infrastructure as Code",
    category: "DevOps",
    shortDef: "Managing cloud infrastructure using code and version control instead of manual clicks.",
    definition: "Infrastructure as Code (IaC) means defining servers, networks, and cloud resources in machine-readable configuration files (Terraform, Pulumi, CloudFormation). These files are version-controlled, repeatable, and reviewable — treating infrastructure like software.",
    usage: "Bring up when discussing reproducibility, disaster recovery, or cloud governance.",
    example: "\"With IaC, spinning up a replica of our production environment takes 10 minutes, not 3 days.\""
  },
  {
    id: "observability",
    term: "Observability",
    category: "DevOps",
    shortDef: "The ability to understand what's happening inside a system from its outputs.",
    definition: "Observability is achieved through three pillars: logs (records of events), metrics (numerical measurements over time), and traces (request flows across services). A highly observable system lets engineers diagnose unknown problems without guessing.",
    usage: "Essential in any reliability, incident management, or platform engineering discussion.",
    example: "\"We invested in observability after a mystery outage — now we can trace exactly where a request failed.\""
  },
  {
    id: "sre",
    term: "SRE",
    category: "DevOps",
    shortDef: "A discipline applying software engineering to reliability and operations problems.",
    definition: "Site Reliability Engineering (SRE) was pioneered at Google. SREs write code to automate operations tasks, define SLOs (Service Level Objectives), manage error budgets, and ensure systems are reliable, scalable, and efficient.",
    usage: "Use when discussing reliability teams, production incidents, or platform ownership.",
    example: "\"Our SRE team sets SLOs for each service — if error budget is depleted, new features pause until reliability improves.\""
  },
  {
    id: "slo",
    term: "SLO",
    category: "DevOps",
    shortDef: "A target reliability level for a service, like '99.9% uptime'.",
    definition: "A Service Level Objective (SLO) is an internal reliability target — a specific measurable goal like 99.9% availability or p99 latency under 200ms. SLOs are measured against SLIs (indicators) and drive engineering prioritization through error budgets.",
    usage: "Use in conversations about reliability, prioritization, or engineering accountability.",
    example: "\"Our payment service has a 99.95% SLO — we only have 22 minutes of allowed downtime per month.\""
  },
  {
    id: "blue-green-deployment",
    term: "Blue-Green Deployment",
    category: "DevOps",
    shortDef: "A zero-downtime deployment strategy using two identical environments.",
    definition: "Blue-green deployment maintains two identical production environments — 'blue' (current) and 'green' (new). Traffic is switched from blue to green after testing. If green breaks, you instantly roll back by switching back to blue.",
    usage: "Bring up when discussing zero-downtime releases or deployment risk reduction.",
    example: "\"We use blue-green deployments so releasing new code never takes the site down.\""
  },

  // ── SECURITY ─────────────────────────────────────────────────────────────
  {
    id: "zero-trust",
    term: "Zero Trust",
    category: "Security",
    shortDef: "A security model that trusts nothing by default — every request must be verified.",
    definition: "Zero Trust is a security framework based on 'never trust, always verify.' No user, device, or network is trusted by default — even inside the corporate perimeter. Every access request is authenticated, authorized, and encrypted, regardless of source.",
    usage: "Use in any security architecture, remote work, or access control discussion.",
    example: "\"After moving to Zero Trust, employees need to verify identity for every application — being on the VPN isn't enough.\""
  },
  {
    id: "oauth",
    term: "OAuth",
    category: "Security",
    shortDef: "A standard for letting users grant apps access to their data without sharing passwords.",
    definition: "OAuth 2.0 is an authorization framework that allows a third-party application to access resources on behalf of a user without exposing credentials. 'Login with Google' and app permissions ('Allow this app to read your calendar') are OAuth flows.",
    usage: "Comes up in any user authentication, third-party integration, or API security discussion.",
    example: "\"We use OAuth so users can log in with their Google account — we never touch their password.\""
  },
  {
    id: "ddos",
    term: "DDoS",
    category: "Security",
    shortDef: "An attack that floods a service with traffic to make it unavailable.",
    definition: "A Distributed Denial of Service (DDoS) attack uses many compromised machines to overwhelm a target server with traffic — exhausting bandwidth, CPU, or memory until legitimate users can't reach the service.",
    usage: "Relevant in cloud infrastructure, security posture, and resilience discussions.",
    example: "\"We got hit with a DDoS attack that sent 50 million requests per minute — our CDN's DDoS protection absorbed it.\""
  },
  {
    id: "encryption",
    term: "Encryption",
    category: "Security",
    shortDef: "Scrambling data so only authorized parties can read it.",
    definition: "Encryption is the process of converting plaintext data into ciphertext using an algorithm and key. Only parties with the correct decryption key can read the original data. TLS encrypts data in transit; AES and RSA encrypt data at rest.",
    usage: "Foundational in any data security, privacy, or compliance conversation.",
    example: "\"All customer data is encrypted at rest with AES-256 — even if someone steals the disk, they can't read the data.\""
  },
  {
    id: "ssl-tls",
    term: "TLS / SSL",
    category: "Security",
    shortDef: "The protocol that encrypts data between a browser and a server (the 'S' in HTTPS).",
    definition: "Transport Layer Security (TLS) is the cryptographic protocol that secures internet communications. It authenticates the server (via certificates), encrypts the connection, and ensures data integrity. SSL is its older, now-deprecated predecessor.",
    usage: "Comes up in web security, compliance, and any HTTPS discussion.",
    example: "\"Before launch, make sure TLS is configured — users see a 'Not Secure' warning without it and browsers will block some features.\""
  },
  {
    id: "sql-injection",
    term: "SQL Injection",
    category: "Security",
    shortDef: "An attack where malicious SQL code is inserted into an input field.",
    definition: "SQL injection occurs when user input is not sanitized and gets interpreted as SQL commands. An attacker can bypass authentication, dump entire databases, or delete data by inserting SQL syntax into login forms, search boxes, or URLs.",
    usage: "Classic security vulnerability — relevant in code reviews, security audits, and developer education.",
    example: "\"The login form was vulnerable to SQL injection — entering ' OR '1'='1 bypassed authentication entirely.\""
  },
  {
    id: "penetration-testing",
    term: "Penetration Testing",
    category: "Security",
    shortDef: "Authorized simulated attacks to find security vulnerabilities before real attackers do.",
    definition: "Penetration testing (pen testing) is an authorized security assessment where ethical hackers simulate real attacks on systems, applications, or networks to discover exploitable vulnerabilities. Results are documented for remediation.",
    usage: "Comes up in compliance, enterprise security reviews, and pre-launch security assessments.",
    example: "\"Before going live, we hired a firm to do a penetration test — they found two critical vulnerabilities we patched before launch.\""
  },

  // ── NETWORKING ───────────────────────────────────────────────────────────
  {
    id: "dns",
    term: "DNS",
    category: "Networking",
    shortDef: "The internet's phone book — translates domain names into IP addresses.",
    definition: "The Domain Name System (DNS) is a hierarchical distributed database that maps human-readable domain names (google.com) to machine-readable IP addresses (142.250.80.46). Every internet request begins with a DNS lookup.",
    usage: "Comes up in deployments, domain setup, networking issues, and performance optimization.",
    example: "\"The site is down because the DNS records are pointing at the old server — we need to update the A record.\""
  },
  {
    id: "ip-address",
    term: "IP Address",
    category: "Networking",
    shortDef: "A unique numerical label assigned to every device on a network.",
    definition: "An IP address is a numerical identifier assigned to each device participating in a network. IPv4 addresses are 32-bit numbers written as four octets (192.168.1.1). IPv6 addresses are 128-bit to accommodate the explosion of connected devices.",
    usage: "Fundamental networking term — comes up in security rules, routing, diagnostics, and access control.",
    example: "\"We whitelist specific IP addresses in our firewall so only trusted offices can access the admin panel.\""
  },
  {
    id: "tcp-ip",
    term: "TCP/IP",
    category: "Networking",
    shortDef: "The foundational communication protocols of the internet.",
    definition: "TCP/IP is the suite of communication protocols that defines how data is addressed, transmitted, routed, and received over the internet. TCP (Transmission Control Protocol) ensures reliable, ordered delivery; IP (Internet Protocol) handles addressing and routing.",
    usage: "Foundational reference point in any deep networking, protocol, or infrastructure discussion.",
    example: "\"HTTP runs on top of TCP/IP — TCP handles reliable delivery, IP handles getting the packets to the right machine.\""
  },
  {
    id: "latency",
    term: "Latency",
    category: "Networking",
    shortDef: "The time it takes for data to travel from one point to another.",
    definition: "Latency is the delay between initiating a request and receiving the first response. Measured in milliseconds, it's affected by physical distance, network hops, congestion, and processing time. Low latency is critical for real-time applications.",
    usage: "Use in performance, UX, and infrastructure discussions — especially for global or real-time apps.",
    example: "\"Users in Tokyo had 400ms latency hitting our US server — we deployed an edge node in Asia to bring it under 20ms.\""
  },
  {
    id: "bandwidth",
    term: "Bandwidth",
    category: "Networking",
    shortDef: "The maximum rate of data transfer across a network.",
    definition: "Bandwidth refers to the capacity of a network connection — how much data can flow through it per unit of time, typically measured in Mbps or Gbps. Latency is about speed of individual packets; bandwidth is about total throughput capacity.",
    usage: "Relevant when discussing large file transfers, video streaming, data pipelines, or network planning.",
    example: "\"The video encoding pipeline is saturating our network bandwidth — we need to upgrade the connection or throttle uploads.\""
  },
  {
    id: "http2",
    term: "HTTP/2",
    category: "Networking",
    shortDef: "A faster version of HTTP that sends multiple requests over one connection.",
    definition: "HTTP/2 is the second major revision of the HTTP protocol. It introduces multiplexing (multiple requests over one TCP connection), header compression, and server push — significantly reducing page load times compared to HTTP/1.1.",
    usage: "Relevant in web performance optimization, infrastructure, and protocol discussions.",
    example: "\"Upgrading to HTTP/2 eliminated the waterfall effect — resources load in parallel instead of one at a time.\""
  },

  // ── DATA & DATABASES ─────────────────────────────────────────────────────
  {
    id: "sql",
    term: "SQL",
    category: "Data",
    shortDef: "The standard language for querying and manipulating relational databases.",
    definition: "Structured Query Language (SQL) is used to interact with relational databases. You write SQL to SELECT, INSERT, UPDATE, and DELETE data, JOIN tables, and define schema. Databases like PostgreSQL, MySQL, and SQLite all use SQL.",
    usage: "Universal data skill — comes up in any product, analytics, or backend engineering conversation.",
    example: "\"I wrote a SQL query to find all users who signed up last month but never completed a purchase.\""
  },
  {
    id: "nosql",
    term: "NoSQL",
    category: "Data",
    shortDef: "Databases that store data in formats other than structured relational tables.",
    definition: "NoSQL databases (like MongoDB, Cassandra, Redis, DynamoDB) store data as documents, key-value pairs, graphs, or wide columns. They trade strict consistency and relational capabilities for flexibility, scale, and speed at specific access patterns.",
    usage: "Use when discussing data modeling choices, scale requirements, or flexible schema.",
    example: "\"We use a NoSQL document database for user profiles because the schema varies between user types.\""
  },
  {
    id: "data-pipeline",
    term: "Data Pipeline",
    category: "Data",
    shortDef: "An automated sequence that moves and transforms data from one place to another.",
    definition: "A data pipeline is a series of processes that ingests raw data from source systems, transforms it (cleaning, enriching, aggregating), and loads it into a destination like a data warehouse or analytics tool. ETL (Extract, Transform, Load) pipelines are the classic form.",
    usage: "Central to any data engineering, analytics, or BI discussion.",
    example: "\"Our data pipeline ingests raw events from the app, transforms them into clean analytics records, and loads them into our warehouse every hour.\""
  },
  {
    id: "data-warehouse",
    term: "Data Warehouse",
    category: "Data",
    shortDef: "A central repository optimized for analyzing large amounts of historical data.",
    definition: "A data warehouse is a database designed for analytical queries (OLAP) rather than transactional workloads (OLTP). Data from multiple sources is cleaned and consolidated here for BI, reporting, and data science. Snowflake, BigQuery, and Redshift are popular examples.",
    usage: "Key term in data strategy, BI tooling, and analytics architecture discussions.",
    example: "\"All our product, marketing, and finance data flows into the data warehouse — leadership runs dashboards from there.\""
  },
  {
    id: "etl",
    term: "ETL",
    category: "Data",
    shortDef: "Extract, Transform, Load — the process of moving and preparing data for analysis.",
    definition: "ETL is a data integration pattern: Extract data from source systems, Transform it (clean, normalize, enrich, join), and Load it into a destination. It's the standard pattern for populating data warehouses and analytical databases.",
    usage: "Use in data engineering, analytics infrastructure, and system integration conversations.",
    example: "\"Our ETL process runs nightly — it extracts from 12 source systems, normalizes everything to a common schema, and loads into Snowflake.\""
  },
  {
    id: "acid",
    term: "ACID",
    category: "Data",
    shortDef: "Four properties that guarantee reliable database transactions.",
    definition: "ACID stands for Atomicity (transactions fully complete or fully fail), Consistency (data always remains valid), Isolation (concurrent transactions don't interfere), and Durability (committed transactions survive crashes). ACID compliance is the standard for relational databases.",
    usage: "Comes up in database selection, data integrity requirements, and transaction design discussions.",
    example: "\"We need ACID compliance for the financial transactions — we can't have money debited without the corresponding credit.\""
  },
  {
    id: "schema",
    term: "Schema",
    category: "Data",
    shortDef: "The structure that defines how data is organized in a database.",
    definition: "A database schema defines the tables, columns, data types, relationships, and constraints in a database. It's the blueprint for how data is stored. Schema changes (migrations) must be carefully managed to avoid breaking applications.",
    usage: "Comes up in database design, migrations, onboarding, and API design discussions.",
    example: "\"Before adding the new feature, we need to update the schema — add a 'subscription_tier' column to the users table.\""
  },

  // ── MOBILE DEVELOPMENT ───────────────────────────────────────────────────
  {
    id: "native-app",
    term: "Native App",
    category: "Mobile",
    shortDef: "An app built specifically for one platform (iOS or Android) using platform-native tools.",
    definition: "A native mobile app is built using the platform's preferred language and tools — Swift/Objective-C for iOS, Kotlin/Java for Android. Native apps have full access to device hardware and APIs and typically deliver the best performance and UX.",
    usage: "Use in mobile architecture discussions, build-vs-buy decisions, or platform strategy.",
    example: "\"We went native for our fintech app because we need biometric authentication and the performance has to be flawless.\""
  },
  {
    id: "react-native",
    term: "React Native",
    category: "Mobile",
    shortDef: "A framework for building native mobile apps using JavaScript and React.",
    definition: "React Native lets developers write mobile apps in JavaScript/TypeScript using React components. The framework compiles to truly native UI components — not a web view — so it delivers near-native performance while sharing code between iOS and Android.",
    usage: "Relevant when discussing cross-platform mobile development or team capability.",
    example: "\"We use React Native so our web team can build the mobile app — we share about 70% of the business logic code.\""
  },
  {
    id: "pwa",
    term: "PWA",
    category: "Mobile",
    shortDef: "A web app that behaves like a native mobile app — installable, offline-capable.",
    definition: "A Progressive Web App (PWA) is a web application enhanced with modern browser APIs to behave like a native app: it can be installed to the home screen, work offline via service workers, send push notifications, and access device hardware.",
    usage: "Comes up when weighing a web-first approach vs. building separate native apps.",
    example: "\"We shipped a PWA instead of a native app — users can install it from the browser and use it offline without going through the App Store.\""
  },
  {
    id: "push-notification",
    term: "Push Notification",
    category: "Mobile",
    shortDef: "A message sent to a user's device from a server without the user opening the app.",
    definition: "Push notifications are messages delivered to a user's device proactively by a remote server via platform notification services (APNs for iOS, FCM for Android). They appear in the notification tray even when the app isn't open.",
    usage: "Comes up in user engagement, retention, and mobile product strategy conversations.",
    example: "\"We send a push notification when an order ships — open rates are 5x higher than email for time-sensitive updates.\""
  },

  // ── HARDWARE & EMBEDDED ──────────────────────────────────────────────────
  {
    id: "iot",
    term: "IoT",
    category: "Hardware",
    shortDef: "Physical devices connected to the internet that collect and exchange data.",
    definition: "The Internet of Things (IoT) refers to the network of physical objects — sensors, appliances, vehicles, industrial machines — embedded with computing and networking capabilities to collect and exchange data. Examples range from smart thermostats to factory sensors.",
    usage: "Relevant in hardware product, industrial tech, smart home, and data collection discussions.",
    example: "\"Our factory IoT sensors send temperature and pressure readings to the cloud every second — we catch equipment failures before they happen.\""
  },
  {
    id: "cpu",
    term: "CPU",
    category: "Hardware",
    shortDef: "The main processor that executes instructions in a computer.",
    definition: "The Central Processing Unit (CPU) is the primary processor of a computer, executing instructions from programs. CPUs excel at sequential, general-purpose computation. Clock speed (GHz) and core count determine performance. Distinct from GPUs, which handle parallel workloads.",
    usage: "Fundamental term when discussing compute resource allocation, performance profiling, or infrastructure costs.",
    example: "\"Our API servers are CPU-bound — the bottleneck is processing time, not memory or network.\""
  },
  {
    id: "gpu",
    term: "GPU",
    category: "Hardware",
    shortDef: "A processor designed for parallel computations — essential for AI and graphics.",
    definition: "A Graphics Processing Unit (GPU) contains thousands of smaller cores designed to handle many operations in parallel. Originally for rendering graphics, GPUs became critical for AI training and inference because matrix math (the core of neural networks) maps perfectly to parallel execution.",
    usage: "Central in AI infrastructure, gaming, and high-performance computing discussions.",
    example: "\"Training the model on a CPU would take weeks — on GPUs it takes 8 hours.\""
  },
  {
    id: "firmware",
    term: "Firmware",
    category: "Hardware",
    shortDef: "Permanent software embedded in hardware to control it.",
    definition: "Firmware is low-level software stored in non-volatile memory on hardware devices. It provides basic control and instructions for the hardware's specific functions — from a router's operating system to a printer's control logic. Unlike software, firmware is tightly bound to specific hardware.",
    usage: "Comes up in hardware product, embedded systems, and IoT discussions.",
    example: "\"The security vulnerability was in the router's firmware — users need to apply the manufacturer's update to be protected.\""
  },

  // ── PRODUCT & AGILE ──────────────────────────────────────────────────────
  {
    id: "agile",
    term: "Agile",
    category: "Product & Process",
    shortDef: "A software development philosophy that values iteration, collaboration, and adaptability.",
    definition: "Agile is a set of values and principles for software development emphasizing iterative delivery, close collaboration between developers and stakeholders, responsiveness to change over rigid planning, and working software over comprehensive documentation.",
    usage: "Almost universal in tech teams — comes up in process, planning, and org discussions.",
    example: "\"We switched to Agile two years ago — instead of big quarterly releases, we ship something meaningful every two weeks.\""
  },
  {
    id: "scrum",
    term: "Scrum",
    category: "Product & Process",
    shortDef: "An Agile framework using short work cycles called sprints.",
    definition: "Scrum is a popular Agile framework organizing work into time-boxed iterations called sprints (usually 2 weeks). Teams hold daily standups, plan sprint work from a prioritized backlog, and review/retrospect at sprint end. Roles include Product Owner, Scrum Master, and Development Team.",
    usage: "Standard in software teams — relevant in planning, team org, and delivery discussions.",
    example: "\"In our sprint review, we demo everything completed this sprint to stakeholders and get feedback before the next sprint starts.\""
  },
  {
    id: "mvp",
    term: "MVP",
    category: "Product & Process",
    shortDef: "The simplest version of a product that delivers value and enables learning.",
    definition: "A Minimum Viable Product (MVP) is the smallest version of a product that can be released to real users to validate assumptions and learn. The goal is not minimal quality — it's minimal scope while still delivering core value. Popular in lean startup methodology.",
    usage: "Key product strategy term — use in scope, prioritization, or launch timeline discussions.",
    example: "\"Our MVP had just one feature — the core job-to-be-done — but it was enough to get our first 100 paying customers.\""
  },
  {
    id: "technical-debt",
    term: "Technical Debt",
    category: "Product & Process",
    shortDef: "The accumulated cost of shortcuts taken in code that will need fixing later.",
    definition: "Technical debt is the implied future cost of rework caused by choosing a quick or easy solution now instead of a better approach that would take longer. Like financial debt, small amounts are manageable but large amounts slow everything down and compound over time.",
    usage: "Essential term for conversations about engineering bandwidth, quality, and long-term velocity.",
    example: "\"We're slowing down because of technical debt — every new feature takes 3x longer than it should because of shortcuts we took in year one.\""
  },
  {
    id: "sprint",
    term: "Sprint",
    category: "Product & Process",
    shortDef: "A fixed time period (usually 2 weeks) in which a team completes a set of work.",
    definition: "A sprint is a short, time-boxed iteration in Scrum during which a team works to complete a specific set of items from the product backlog. The output should be a potentially shippable increment of the product.",
    usage: "Daily vocabulary in Agile teams — used in planning, tracking, and capacity discussions.",
    example: "\"We're not adding that feature to this sprint — the backlog is full. Let's slot it in next sprint.\""
  },
  {
    id: "product-roadmap",
    term: "Product Roadmap",
    category: "Product & Process",
    shortDef: "A strategic plan showing where a product is going and why.",
    definition: "A product roadmap is a high-level visual plan that communicates the vision, direction, priorities, and planned work for a product over time. It aligns stakeholders, helps teams prioritize, and communicates progress — without being a commitment to exact dates.",
    usage: "Universal in product and engineering planning — use in strategy, alignment, and prioritization discussions.",
    example: "\"The roadmap shows AI features in Q3, but if this customer deal closes, we may need to reprioritize.\""
  },

  // ── BLOCKCHAIN & WEB3 ────────────────────────────────────────────────────
  {
    id: "blockchain",
    term: "Blockchain",
    category: "Blockchain & Web3",
    shortDef: "A distributed, immutable ledger of transactions shared across a network.",
    definition: "A blockchain is a chain of blocks, each containing data and a cryptographic hash of the previous block, stored across a decentralized network. No single party controls it; altering history requires recomputing all subsequent blocks across the majority of the network — making it tamper-resistant.",
    usage: "Use in discussions about decentralized systems, supply chain, digital ownership, or financial technology.",
    example: "\"We use blockchain to record supply chain events — every party can verify the product's journey without trusting a central authority.\""
  },
  {
    id: "smart-contract",
    term: "Smart Contract",
    category: "Blockchain & Web3",
    shortDef: "Self-executing code stored on a blockchain that automatically enforces rules.",
    definition: "A smart contract is code deployed on a blockchain (like Ethereum) that executes automatically when predefined conditions are met — no intermediary needed. They're used for DeFi, NFT minting, DAOs, and automated escrow.",
    usage: "Key term when discussing blockchain applications, DeFi, or automated agreements.",
    example: "\"The smart contract releases funds to the seller automatically once the buyer confirms delivery — no need for a third-party escrow service.\""
  },
  {
    id: "nft",
    term: "NFT",
    category: "Blockchain & Web3",
    shortDef: "A unique digital asset whose ownership is recorded on a blockchain.",
    definition: "A Non-Fungible Token (NFT) is a unique, indivisible digital token on a blockchain that represents ownership of a specific asset — digital art, music, collectibles, or real-world items. Unlike cryptocurrency, each NFT is unique and not interchangeable with another.",
    usage: "Use in discussions about digital ownership, creator economy, or tokenization.",
    example: "\"The artist sold the NFT for $2M — the buyer owns the blockchain record proving they hold the original.\""
  },

  // ── TESTING ──────────────────────────────────────────────────────────────
  {
    id: "unit-test",
    term: "Unit Test",
    category: "Testing",
    shortDef: "An automated test that checks one small piece of code in isolation.",
    definition: "A unit test verifies a single function or component in isolation, mocking all external dependencies. Fast to run and narrowly scoped, unit tests form the base of the testing pyramid. They answer: 'Does this specific function do what I expect?'",
    usage: "Standard in any engineering quality discussion — use in code review, CI/CD, or testing strategy.",
    example: "\"We have 800 unit tests that run in 4 seconds — any broken function is caught immediately before it ships.\""
  },
  {
    id: "integration-test",
    term: "Integration Test",
    category: "Testing",
    shortDef: "A test that checks how multiple components work together.",
    definition: "Integration tests verify that separate pieces of a system work correctly when combined — for example, that the API correctly reads from and writes to the database. They're slower than unit tests but catch bugs at the seams between components.",
    usage: "Comes up in testing strategy, CI/CD pipeline design, and reliability discussions.",
    example: "\"The unit tests all passed but the integration tests caught that the database schema migration broke the user creation flow.\""
  },
  {
    id: "ab-testing",
    term: "A/B Testing",
    category: "Testing",
    shortDef: "Showing two different versions to users and measuring which performs better.",
    definition: "A/B testing (split testing) is a controlled experiment where two variants (A and B) are shown to different segments of users and their behavior is measured against a success metric. It's used to make data-driven product decisions.",
    usage: "Key term in product, growth, and UX discussions.",
    example: "\"We A/B tested two checkout flows — the simplified version increased conversions by 12% so we rolled it out to everyone.\""
  },

  // ── GENERAL COMPUTING ────────────────────────────────────────────────────
  {
    id: "algorithm",
    term: "Algorithm",
    category: "Computing",
    shortDef: "A step-by-step procedure for solving a problem.",
    definition: "An algorithm is a finite set of well-defined instructions for solving a problem or performing a computation. In computer science, algorithm efficiency is measured by time complexity (how execution time grows with input size) and space complexity (memory usage).",
    usage: "Foundational term — use in technical design, code review, system design, and performance discussions.",
    example: "\"The search algorithm was O(n²) — we replaced it with a hash map approach and it became O(n), cutting lookup time by 99%.\""
  },
  {
    id: "open-source",
    term: "Open Source",
    category: "Computing",
    shortDef: "Software whose source code is publicly available for anyone to use, modify, and distribute.",
    definition: "Open source software is developed in public, with source code freely available under a license that permits use, modification, and redistribution. Projects like Linux, React, and Kubernetes are open source. The model enables community collaboration, transparency, and innovation.",
    usage: "Universal — comes up in licensing, build-vs-buy, security review, and contribution discussions.",
    example: "\"We use open source libraries for 80% of the stack — we contribute fixes back when we find bugs.\""
  },
  {
    id: "refactoring",
    term: "Refactoring",
    category: "Computing",
    shortDef: "Improving the internal structure of existing code without changing its behavior.",
    definition: "Refactoring is the process of restructuring existing code — improving readability, reducing complexity, removing duplication — without changing what the code does externally. It's essential maintenance that prevents technical debt from accumulating.",
    usage: "Core engineering concept — relevant in code quality, velocity, and technical debt discussions.",
    example: "\"We're spending this sprint refactoring the authentication module — it works but it's become unmaintainable.\""
  },
  {
    id: "version-control",
    term: "Version Control",
    category: "Computing",
    shortDef: "A system for tracking changes to code over time and enabling collaboration.",
    definition: "Version control (source control) systems record every change made to code, who made it, and when. They enable teams to work on the same codebase simultaneously, roll back mistakes, and maintain branches for different features. Git is the dominant version control system.",
    usage: "Universal in software development — foundational to any team engineering discussion.",
    example: "\"We use Git for version control — every change has a commit message, author, and can be reverted if it causes issues.\""
  },
  {
    id: "debugging",
    term: "Debugging",
    category: "Computing",
    shortDef: "The process of finding and fixing errors in code.",
    definition: "Debugging is the systematic process of identifying, isolating, and resolving bugs in software. Techniques include step-through debugging (pausing execution line by line), logging, rubber duck debugging, and binary search (bisect) to narrow down the source of a problem.",
    usage: "Universal engineering skill — use in incident response, code review, and process discussions.",
    example: "\"I spent three hours debugging and the issue was a missing semicolon — added structured logging to catch this faster next time.\""
  },
  {
    id: "scalability",
    term: "Scalability",
    category: "Computing",
    shortDef: "A system's ability to handle increased load by adding resources.",
    definition: "Scalability is how well a system handles growth. Horizontal scaling adds more machines (scale out); vertical scaling adds more power to existing machines (scale up). A scalable system maintains performance as demand increases without requiring a complete redesign.",
    usage: "Critical in architecture, infrastructure, and startup growth discussions.",
    example: "\"The system handled 10K users fine, but isn't scalable — at 1M users it will fall over. We need to rearchitect before we grow.\""
  },
  {
    id: "deprecation",
    term: "Deprecation",
    category: "Computing",
    shortDef: "Marking a feature as outdated with plans to eventually remove it.",
    definition: "Deprecation signals that a feature, API, or library version is no longer recommended and will eventually be removed in a future version. Deprecated items still work but developers are warned to migrate to newer alternatives before removal.",
    usage: "Comes up in API versioning, dependency management, and platform communication.",
    example: "\"The v1 API is deprecated — we're giving customers 12 months to migrate to v2 before we turn it off.\""
  },
  {
    id: "abstraction",
    term: "Abstraction",
    category: "Computing",
    shortDef: "Hiding complex details behind a simpler interface.",
    definition: "Abstraction is a fundamental programming principle where complex implementation details are hidden behind a clean, simplified interface. Users of an abstraction don't need to know how it works internally — they just interact with the exposed surface.",
    usage: "Core software engineering concept — relevant in architecture, API design, and code quality discussions.",
    example: "\"We built an abstraction layer over three different payment providers — the rest of the app doesn't know or care which one is being used.\""
  },
  {
    id: "dependency",
    term: "Dependency",
    category: "Computing",
    shortDef: "An external library or package that your code relies on.",
    definition: "A dependency is a piece of external code (library, package, module, service) that your software requires to function. Managing dependencies — keeping them updated, secure, and compatible — is a critical part of software maintenance.",
    usage: "Comes up in security audits, build failures, onboarding, and supply chain risk discussions.",
    example: "\"That security vulnerability is in a transitive dependency — we don't import it directly, but a library we use does.\""
  },
  {
    id: "runtime",
    term: "Runtime",
    category: "Computing",
    shortDef: "The environment in which a program executes.",
    definition: "Runtime refers both to the period when a program is executing (vs. compile time) and to the runtime environment — the software infrastructure that executes code, manages memory, and provides standard library functions. Node.js is the JavaScript runtime; JVM is Java's.",
    usage: "Use when discussing language environments, execution errors, or deployment configuration.",
    example: "\"The bug only occurs at runtime when certain user input hits an edge case — it compiled fine but failed in production.\""
  },
  {
    id: "ide",
    term: "IDE",
    category: "Computing",
    shortDef: "A software application that bundles code editor, debugger, and build tools.",
    definition: "An Integrated Development Environment (IDE) is a comprehensive application for software development. It typically includes a code editor with syntax highlighting and autocomplete, a debugger, build tools, and version control integration. VS Code, IntelliJ, and Xcode are common examples.",
    usage: "Foundational developer tool — relevant in onboarding, productivity, and tooling discussions.",
    example: "\"The team standardized on VS Code as the IDE — we share a common set of extensions and settings in the repo.\""
  },
  {
    id: "framework",
    term: "Framework",
    category: "Computing",
    shortDef: "A reusable foundation of code that provides structure for building applications.",
    definition: "A framework is a pre-written, opinionated code structure that provides a skeleton for building applications. Unlike a library (which you call), a framework calls your code — you fill in the blanks. React, Django, Rails, and Spring Boot are frameworks.",
    usage: "Universal in tech discussions — use when evaluating tech stacks, hiring, or architectural decisions.",
    example: "\"We chose Next.js as our framework because it handles routing, SSR, and optimization out of the box.\""
  },
  {
    id: "repository",
    term: "Repository",
    category: "Computing",
    shortDef: "A storage location for a project's code and its entire version history.",
    definition: "A code repository (repo) is where a project's source code and entire change history are stored, typically managed by Git. Repositories can be local or hosted on platforms like GitHub, GitLab, or Bitbucket. They're the central collaboration point for engineering teams.",
    usage: "Universal in software development — use in onboarding, CI/CD, and engineering process discussions.",
    example: "\"The new engineer's first task is to clone the repository and get the local dev environment running.\""
  },

  // ── ANALYTICS & GROWTH ───────────────────────────────────────────────────
  {
    id: "kpi",
    term: "KPI",
    category: "Analytics",
    shortDef: "A measurable value that shows how effectively a goal is being achieved.",
    definition: "Key Performance Indicators (KPIs) are specific, measurable metrics used to evaluate success against objectives. In tech, KPIs might include uptime, monthly active users, conversion rate, churn rate, or feature adoption — depending on what matters to the business.",
    usage: "Universal in business and technical discussions — use when aligning teams on what success looks like.",
    example: "\"Our KPI for the new onboarding flow is completion rate — we want to get it from 40% to 70% in Q3.\""
  },
  {
    id: "conversion-rate",
    term: "Conversion Rate",
    category: "Analytics",
    shortDef: "The percentage of users who take a desired action.",
    definition: "Conversion rate is the ratio of users who complete a target action (sign up, purchase, upgrade) to the total number who could have. It's a core growth and product metric that connects user behavior to business outcomes.",
    usage: "Central to growth, product, and marketing discussions.",
    example: "\"We improved the landing page conversion rate from 2% to 4% — same traffic, double the signups.\""
  },
  {
    id: "churn",
    term: "Churn",
    category: "Analytics",
    shortDef: "The rate at which customers stop using a product or cancel a subscription.",
    definition: "Churn rate measures how many customers leave over a given period. High churn erodes revenue and makes growth harder — you're filling a leaky bucket. Reducing churn is often more cost-effective than acquiring new customers.",
    usage: "Critical in SaaS, subscription, and product health discussions.",
    example: "\"We hit our growth targets but churn is 8% monthly — we're acquiring customers faster than we're losing them, barely.\""
  },
  {
    id: "dau-mau",
    term: "DAU / MAU",
    category: "Analytics",
    shortDef: "Daily and Monthly Active Users — measures of how many people actively use a product.",
    definition: "Daily Active Users (DAU) and Monthly Active Users (MAU) measure engagement breadth. The DAU/MAU ratio (stickiness) shows what fraction of monthly users return each day — a high ratio means users find the product indispensable.",
    usage: "Core product health metrics in any consumer or B2B product discussion.",
    example: "\"Our DAU/MAU is 0.4 — 40% of monthly users come back every day. That's strong stickiness for this type of app.\""
  },

  // ── PROGRAMMING CONCEPTS ─────────────────────────────────────────────────
  {
    id: "object-oriented",
    term: "Object-Oriented Programming",
    category: "Programming",
    shortDef: "A programming paradigm that organizes code around objects and classes.",
    definition: "Object-Oriented Programming (OOP) structures code around objects — instances of classes that bundle data (properties) and behavior (methods). Core principles: Encapsulation (hiding internals), Inheritance (extending classes), Polymorphism (same interface, different behavior), Abstraction.",
    usage: "Foundational programming paradigm — use in code design, code review, and architecture discussions.",
    example: "\"We refactored to OOP — each payment method is its own class with a shared interface, so adding a new provider is just adding a new class.\""
  },
  {
    id: "functional-programming",
    term: "Functional Programming",
    category: "Programming",
    shortDef: "A programming paradigm that treats computation as evaluating pure functions.",
    definition: "Functional programming (FP) treats computation as applying mathematical functions, avoiding shared state and mutable data. Key concepts: pure functions (no side effects), immutability, first-class functions, and composition. Languages: Haskell, Clojure, Erlang; concepts adopted in JS, Python, Scala.",
    usage: "Increasingly relevant in modern JavaScript and data processing discussions.",
    example: "\"We switched to functional programming patterns for data transformation — pure functions make testing trivial and bugs easier to trace.\""
  },
  {
    id: "async",
    term: "Asynchronous Programming",
    category: "Programming",
    shortDef: "Running tasks without blocking execution while waiting for them to complete.",
    definition: "Asynchronous programming allows a program to initiate a task (like a network request) and continue executing other code without waiting for it to finish. When the task completes, a callback, promise, or async/await handler processes the result.",
    usage: "Fundamental in JavaScript, web development, and any I/O-heavy system discussion.",
    example: "\"The UI is unresponsive because we're making synchronous API calls — switching to async will let the UI stay interactive while data loads.\""
  },
  {
    id: "recursion",
    term: "Recursion",
    category: "Programming",
    shortDef: "A function that calls itself to solve a problem by breaking it into smaller cases.",
    definition: "Recursion is a programming technique where a function solves a problem by calling itself with a smaller input, until it reaches a base case that stops the recursion. It's elegant for tree traversal, sorting algorithms, and divide-and-conquer problems.",
    usage: "Classic CS concept — comes up in algorithm interviews, code review, and design discussions.",
    example: "\"We used recursion to traverse the file system tree — the function calls itself on each subdirectory until it reaches leaf files.\""
  },
  {
    id: "concurrency",
    term: "Concurrency",
    category: "Programming",
    shortDef: "Handling multiple tasks that overlap in time, possibly in parallel.",
    definition: "Concurrency is about dealing with multiple things happening at once. It doesn't require multiple CPUs — a single-core system can be concurrent by interleaving tasks. Parallelism is true simultaneous execution on multiple cores. Concurrency introduces race conditions, deadlocks, and synchronization challenges.",
    usage: "Critical in performance, distributed systems, and backend architecture discussions.",
    example: "\"The bug is a race condition — two concurrent requests both read the same value, decrement it, and write back, losing one update.\""
  },
  {
    id: "design-pattern",
    term: "Design Pattern",
    category: "Programming",
    shortDef: "A reusable solution template for a commonly occurring software design problem.",
    definition: "Design patterns are proven, reusable solutions to recurring design problems in software. The GoF (Gang of Four) catalog includes creational (Factory, Singleton), structural (Adapter, Decorator), and behavioral (Observer, Strategy) patterns. They're a shared vocabulary for engineers.",
    usage: "Use in code review, architecture discussions, and technical interviews.",
    example: "\"We implemented the Observer pattern — the UI components subscribe to state changes and update automatically.\""
  },

  // ── EDGE & EMERGING ──────────────────────────────────────────────────────
  {
    id: "edge-computing",
    term: "Edge Computing",
    category: "Emerging Tech",
    shortDef: "Running computation close to where data is generated, rather than in a central data center.",
    definition: "Edge computing moves processing and storage closer to the source of data — at the 'edge' of the network — rather than sending everything to a central cloud. This reduces latency, bandwidth use, and dependence on connectivity. Cloudflare Workers run at the edge.",
    usage: "Increasingly relevant in IoT, real-time systems, global apps, and latency-sensitive discussions.",
    example: "\"We moved authentication logic to edge computing — tokens are validated in the city closest to the user instead of pinging a server across the country.\""
  },
  {
    id: "web3",
    term: "Web3",
    category: "Emerging Tech",
    shortDef: "A vision for a decentralized internet built on blockchain technology.",
    definition: "Web3 is a vision for the next iteration of the internet where ownership and control are distributed via blockchain, tokens, and smart contracts — instead of controlled by centralized platforms. It encompasses DeFi, NFTs, DAOs, and decentralized applications (dApps).",
    usage: "Relevant in digital ownership, decentralization, and technology philosophy discussions.",
    example: "\"Web3 promises users own their data and digital assets — but the UX challenges have slowed mainstream adoption.\""
  },
  {
    id: "quantum-computing",
    term: "Quantum Computing",
    category: "Emerging Tech",
    shortDef: "Computing using quantum mechanical phenomena to solve problems infeasible for classical computers.",
    definition: "Quantum computers use qubits that can be in superposition (0 and 1 simultaneously) and entanglement to perform certain calculations exponentially faster than classical computers. Current applications include cryptography breaking, optimization, and molecular simulation.",
    usage: "Relevant in long-term security strategy, cryptography, and cutting-edge tech discussions.",
    example: "\"Quantum computing threatens current RSA encryption — organizations are starting to adopt post-quantum cryptographic standards now.\""
  },
  {
    id: "augmented-reality",
    term: "Augmented Reality",
    category: "Emerging Tech",
    shortDef: "Overlaying digital information on the real world.",
    definition: "Augmented Reality (AR) superimposes computer-generated content (images, data, 3D models) onto a user's view of the real world, typically through a phone camera or AR glasses. Unlike VR which is fully virtual, AR enhances reality.",
    usage: "Relevant in product design, retail, training, and consumer tech discussions.",
    example: "\"We use AR in our furniture app — customers can see exactly how a sofa looks in their living room before buying.\""
  },

  // ── COLLABORATION & TOOLS ────────────────────────────────────────────────
  {
    id: "standup",
    term: "Daily Standup",
    category: "Product & Process",
    shortDef: "A short daily team meeting where everyone shares progress, plans, and blockers.",
    definition: "A daily standup (or daily scrum) is a brief synchronous check-in — typically 15 minutes — where each team member answers three questions: What did I do yesterday? What will I do today? What is blocking me? It keeps teams aligned without long meetings.",
    usage: "Standard in Agile/Scrum teams — universal vocabulary for team communication.",
    example: "\"In standup I flagged that the API integration is blocked waiting for credentials from the vendor — the PM reached out to unblock me same day.\""
  },
  {
    id: "pull-request",
    term: "Pull Request",
    category: "Product & Process",
    shortDef: "A proposal to merge code changes into a shared codebase, triggering review.",
    definition: "A pull request (PR) — or merge request in GitLab — is a mechanism for submitting code changes for review before merging. The author submits changes from a feature branch; reviewers examine the diff, leave comments, request changes, or approve. PRs enforce code quality standards.",
    usage: "Fundamental to collaborative software development — use in code review and engineering process discussions.",
    example: "\"Before anything ships, it needs a PR with at least one approval — no one pushes directly to main.\""
  },
  {
    id: "code-review",
    term: "Code Review",
    category: "Product & Process",
    shortDef: "A structured examination of code by colleagues before it's merged.",
    definition: "Code review is the practice of having peers examine proposed code changes before they're accepted. Goals include catching bugs, enforcing standards, sharing knowledge, and improving design. It's the most effective quality gate in software development.",
    usage: "Standard engineering practice — relevant in quality, knowledge sharing, and onboarding discussions.",
    example: "\"Code review caught a SQL injection vulnerability before it shipped — that's exactly what the process is for.\""
  },
  {
    id: "on-call",
    term: "On-Call",
    category: "DevOps",
    shortDef: "Being available to respond to production incidents outside normal hours.",
    definition: "On-call is a rotation where engineers are available to respond to production alerts and incidents when they're the primary responder for their shift. On-call engineers are paged when something breaks and are responsible for investigating and restoring service.",
    usage: "Comes up in SRE, operations, team structure, and engineering culture discussions.",
    example: "\"I got paged at 2am on-call — the database ran out of connections. I scaled up the pool and the alert resolved in 8 minutes.\""
  },

  // ── WEB3 & FINTECH EXTRA ─────────────────────────────────────────────────
  {
    id: "defi",
    term: "DeFi",
    category: "Blockchain & Web3",
    shortDef: "Financial services built on blockchain, with no banks or intermediaries.",
    definition: "Decentralized Finance (DeFi) uses smart contracts on blockchain networks to recreate financial instruments — lending, borrowing, trading, earning yield — without traditional banks or brokers. Users interact through protocols, retaining custody of their assets.",
    usage: "Use in fintech, blockchain, and digital finance discussions.",
    example: "\"Via DeFi, you can earn 5% yield on stablecoins by lending them directly to borrowers via protocol — no bank taking a cut.\""
  },
  {
    id: "api-gateway",
    term: "API Gateway",
    category: "Cloud",
    shortDef: "A server that acts as the entry point for all API requests, handling routing, auth, and rate limiting.",
    definition: "An API Gateway is a managed service that sits in front of microservices or backend APIs, handling cross-cutting concerns: authentication, rate limiting, SSL termination, request routing, logging, and transformations — so individual services don't have to.",
    usage: "Critical in microservices and enterprise API management discussions.",
    example: "\"All client requests go through the API gateway — it checks JWTs, rate limits per customer, and routes to the correct microservice.\""
  },
  {
    id: "message-queue",
    term: "Message Queue",
    category: "Cloud",
    shortDef: "A buffer that stores messages between services so they can communicate asynchronously.",
    definition: "A message queue decouples services by providing an intermediary buffer. The producer sends messages to the queue; the consumer reads them at its own pace. This enables async communication, absorbs traffic spikes, and prevents cascade failures. RabbitMQ, SQS, and Kafka are examples.",
    usage: "Use in distributed systems, reliability, and async processing architecture discussions.",
    example: "\"When an order is placed, we put a message in the queue — email, inventory, and analytics services each consume it independently.\""
  },
  {
    id: "event-driven",
    term: "Event-Driven Architecture",
    category: "Cloud",
    shortDef: "A design pattern where actions are triggered by events rather than direct calls.",
    definition: "Event-driven architecture (EDA) structures systems around the production, detection, and consumption of events. Services publish events when something happens; other services subscribe and react independently. This creates loose coupling and natural async processing.",
    usage: "Relevant in distributed systems, real-time applications, and scalable architecture discussions.",
    example: "\"We moved to event-driven architecture — when a user completes checkout, an event fires and 6 different services react independently without any one knowing about the others.\""
  },
  {
    id: "idempotency",
    term: "Idempotency",
    category: "Computing",
    shortDef: "A property where performing an operation multiple times has the same effect as doing it once.",
    definition: "An operation is idempotent if running it once or many times produces the same result. In APIs, idempotent endpoints (typically GET, PUT, DELETE) are safe to retry without unintended side effects. Critical for handling network failures and retries in distributed systems.",
    usage: "Important in API design, payment processing, and distributed systems reliability discussions.",
    example: "\"We made the payment API idempotent with idempotency keys — if a network error causes a retry, the payment only processes once.\""
  },
];

export const CATEGORIES = [...new Set(TERMS.map(t => t.category))].sort();
