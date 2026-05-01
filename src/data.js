export const profile = {
  name: 'Pratheesha ',
  title: 'Full Stack Developer',
  tagline: 'Building scalable, enterprise-grade web applications',
  email: 'pratheesha1925@gmail.com',
  phone: '+91 9042181904',
  location: 'Bangalore, Karnataka',
  github: 'https://github.com/pratheeshabenedict',
  linkedin: 'https://www.linkedin.com/in/pratheesha-b-667562225/',
  portfolio: 'https://myportfolio-6eztzo4bz-pratheesha1925-1681s-projects.vercel.app/',
  summary:
    'Results-driven Application Developer with hands-on experience building scalable, enterprise-grade applications using Java, Node.js, and MERN stack technologies. Demonstrated ability to boost application performance by 45%, reduce security vulnerabilities by 90%, and maintain 99.9% API uptime across production systems.',
  stats: [
    { value: '45%', label: 'Performance Boost' },
    { value: '90%', label: 'Vulnerabilities Reduced' },
    { value: '99.9%', label: 'API Uptime' },
    { value: '30+', label: 'Production Modules' },
  ],
};

export const experience = [
  {
    company: 'Arbeit AI',
    role: 'Full Stack Developer',
    period: 'Apr 2025 – Present',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: '#00E5CC',
    highlights: [
      'Architected 30+ production-ready frontend modules for an AI-powered platform using React.js and Node.js, applying enterprise SDLC practices.',
      'Improved application performance by 45% using code splitting, lazy loading, and memoization; achieved 100% SEO health score via Lighthouse audits.',
      'Implemented AES encryption, HTTP-only cookies, and JWT-based authentication, reducing security vulnerabilities by 90% - aligned with OWASP standards.',
      'Designed and maintained RESTful API endpoints with 99.9% uptime and sub-200ms response times, ensuring enterprise-grade reliability.',
      'Applied dependency injection patterns and modular architecture principles to ensure maintainable, scalable codebases.',
    ],
    tags: ['React.js', 'Node.js', 'JWT', 'AES Encryption', 'SDLC', 'RESTful APIs'],
  },
  {
    company: 'Checkpoint Systems',
    role: 'Frontend Developer Intern',
    period: 'Jan 2025 – May 2025',
    location: 'Remote',
    type: 'Internship',
    color: '#7FFFF0',
    highlights: [
      'Built inventory management UI serving 500+ retail locations using React.js and Tailwind CSS, achieving 98% cross-browser compatibility.',
      'Reduced page load time by 40% through memoization and virtualization techniques; cut data inconsistencies by 85% using Redux Toolkit.',
      'Collaborated in Agile sprints, contributing to sprint planning, code reviews, and iterative delivery - gaining practical SDLC experience.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Agile', 'Performance'],
  },
];

export const projects = [
  {
    name: 'ProTasker',
    description:
      'Full-stack MERN task management app with JWT auth & RBAC supporting 1,000+ concurrent users. RESTful APIs with 99.9% uptime & sub-200ms response times.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS'],
    highlights: ['1,000+ concurrent users', '99.9% API uptime', 'Sub-200ms response', 'RBAC'],
    featured: true,
    color: '#00E5CC',
    icon: '📋',
    github: 'https://github.com/pratheeshabenedict',

    // ── System Design ──────────────────────────────────────────
    stats: [
      { val: '1,000+', lbl: 'Concurrent Users' },
      { val: '99.9%', lbl: 'API Uptime' },
      { val: '<200ms', lbl: 'Response Time' },
      { val: 'RBAC', lbl: 'Access Control' },
    ],
    archLayers: [
      {
        label: 'Client Layer',
        nodes: [{ cls: 'client', text: 'React.js + Redux' }],
      },
      {
        label: 'API Gateway',
        nodes: [
          { cls: 'auth', text: 'JWT Middleware' },
          { cls: 'api', text: 'Express Router' },
        ],
      },
      {
        label: 'Business Logic',
        nodes: [
          { cls: 'api', text: 'Task Service' },
          { cls: 'api', text: 'User Service' },
          { cls: 'api', text: 'Auth Service' },
        ],
      },
      {
        label: 'Data Layer',
        nodes: [
          { cls: 'db', text: 'MongoDB Atlas' },
          { cls: 'cache', text: 'In-memory Cache' },
        ],
      },
    ],
    flowSteps: [
      {
        title: 'User Request',
        desc: 'Client dispatches Redux action, React component fires API call via Axios with JWT token in Authorization header.',
        code: 'Authorization: Bearer <jwt_token>',
      },
      {
        title: 'JWT Middleware Validation',
        desc: 'Express middleware verifies token signature, extracts userId and role. Invalid tokens return 401 immediately.',
        code: 'jwt.verify(token, SECRET) → { userId, role }',
      },
      {
        title: 'RBAC Check',
        desc: 'Role-Based Access Control middleware checks user role against required permission for the route (admin, manager, member).',
        code: "if (!roles.includes(req.user.role)) → 403",
      },
      {
        title: 'Controller → Service',
        desc: 'Route controller delegates to service layer. Business logic is decoupled from HTTP concerns.',
        code: 'TaskController → TaskService.create(payload)',
      },
      {
        title: 'MongoDB Query',
        desc: 'Mongoose model executes indexed query. Tasks are scoped to the user/org for data isolation.',
        code: 'Task.find({ orgId, assignee: userId }).lean()',
      },
      {
        title: 'Response',
        desc: 'Service returns DTO, controller sends JSON. Redux store updates, UI re-renders reactively.',
        code: 'res.json({ success: true, data: tasks })',
      },
    ],
  },

  {
    name: 'Personal Note App',
    description:
      'Multi-provider OAuth 2.0 (Google/GitHub), cookie-based token rotation cutting DB calls by 90%; 100% unauthorized access prevention.',
    stack: ['React.js', 'Node.js', 'Passport.js', 'OAuth 2.0', 'MongoDB'],
    highlights: ['OAuth 2.0', '90% fewer DB calls', '100% access control', 'Token rotation'],
    featured: true,
    color: '#7FFFF0',
    icon: '📝',
    github: 'https://github.com/pratheeshabenedict',

    stats: [
      { val: '2', lbl: 'OAuth Providers' },
      { val: '90%', lbl: 'DB Calls Reduced' },
      { val: '100%', lbl: 'Access Secured' },
      { val: 'HTTP-only', lbl: 'Cookie Strategy' },
    ],
    archLayers: [
      {
        label: 'Client Layer',
        nodes: [{ cls: 'client', text: 'React.js SPA' }],
      },
      {
        label: 'Auth Providers',
        nodes: [
          { cls: 'auth', text: 'Google OAuth 2.0' },
          { cls: 'auth', text: 'GitHub OAuth 2.0' },
        ],
      },
      {
        label: 'Auth Middleware',
        nodes: [
          { cls: 'api', text: 'Passport.js' },
          { cls: 'cache', text: 'Session Cache' },
        ],
      },
      {
        label: 'Data Layer',
        nodes: [{ cls: 'db', text: 'MongoDB' }],
      },
    ],
    flowSteps: [
      {
        title: 'OAuth Initiation',
        desc: 'User clicks "Sign in with Google/GitHub". Client redirects to provider authorization URL with client_id, scope, and state param.',
        code: 'GET /auth/google → accounts.google.com/o/oauth2/auth',
      },
      {
        title: 'Provider Callback',
        desc: 'Provider redirects back with authorization code. Passport.js intercepts the callback route and exchanges code for access token.',
        code: 'GET /auth/google/callback?code=xxx',
      },
      {
        title: 'Token Exchange & Upsert',
        desc: 'Passport exchanges code for access + refresh tokens. User profile is fetched and upserted into MongoDB (findOrCreate pattern).',
        code: 'User.findOneAndUpdate({ providerId }, profile, { upsert: true })',
      },
      {
        title: 'HTTP-only Cookie Issuance',
        desc: 'Server sets HTTP-only, Secure, SameSite=Strict cookie with session ID. No token is ever exposed to JavaScript - XSS-safe.',
        code: 'Set-Cookie: session=<id>; HttpOnly; Secure; SameSite=Strict',
      },
      {
        title: 'Token Rotation (Cache Layer)',
        desc: 'On each authenticated request, session is refreshed in-memory. DB is only hit on cache miss - reducing DB calls by 90%.',
        code: 'if (!sessionCache.has(id)) → DB lookup + cache.set()',
      },
      {
        title: 'Scoped Data Access',
        desc: 'Middleware checks session on every protected route. Notes are always scoped to the authenticated user ID - no cross-user data leakage.',
        code: 'Note.find({ userId: req.session.userId })',
      },
    ],
  },

  {
    name: 'Real-Time Chat App',
    description:
      'Scalable messaging platform with Socket.io supporting 200+ concurrent WebSocket connections with live presence & typing indicators.',
    stack: ['React.js', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB'],
    highlights: ['200+ WebSocket connections', 'Live presence', 'Typing indicators', 'Scalable'],
    featured: true,
    color: '#00B5A0',
    icon: '💬',
    github: 'https://github.com/pratheeshabenedict',

    stats: [
      { val: '200+', lbl: 'Concurrent WS' },
      { val: '<50ms', lbl: 'Message Latency' },
      { val: 'Rooms', lbl: 'Namespace Isolation' },
      { val: 'Live', lbl: 'Presence System' },
    ],
    archLayers: [
      {
        label: 'Client Layer',
        nodes: [
          { cls: 'client', text: 'React.js' },
          { cls: 'ws', text: 'Socket.io-client' },
        ],
      },
      {
        label: 'Transport Layer',
        nodes: [
          { cls: 'ws', text: 'WebSocket' },
          { cls: 'api', text: 'HTTP Fallback' },
        ],
      },
      {
        label: 'Server Layer',
        nodes: [
          { cls: 'api', text: 'Express.js' },
          { cls: 'ws', text: 'Socket.io Server' },
        ],
      },
      {
        label: 'Data Layer',
        nodes: [
          { cls: 'db', text: 'MongoDB' },
          { cls: 'cache', text: 'In-memory Rooms' },
        ],
      },
    ],
    flowSteps: [
      {
        title: 'WebSocket Handshake',
        desc: 'Client initiates Socket.io connection. Upgrades from HTTP polling to full WebSocket if supported. Handshake carries JWT for auth.',
        code: "io.connect(URL, { auth: { token } })",
      },
      {
        title: 'Server Auth & Room Join',
        desc: 'Socket.io middleware verifies JWT on every new connection. Authenticated socket joins user-specific and room-specific channels.',
        code: 'socket.join(roomId);\nsocket.join(`user:${userId}`)',
      },
      {
        title: 'Message Emit & Broadcast',
        desc: 'Sender emits "message" event with payload. Server receives, validates, persists to MongoDB, then broadcasts to all room members.',
        code: 'socket.to(roomId).emit("message", payload)',
      },
      {
        title: 'Presence System',
        desc: 'On connect/disconnect, server emits "presence" event to the room. Connected user IDs are tracked in an in-memory Map for O(1) lookups.',
        code: 'onlineUsers.set(userId, socketId)',
      },
      {
        title: 'Typing Indicators',
        desc: 'Client emits "typing:start" on keypress, "typing:stop" after debounce timeout. Server relays to room excluding the sender.',
        code: 'socket.to(roomId).emit("typing", { userId, isTyping })',
      },
      {
        title: 'Message Persistence & History',
        desc: 'All messages stored in MongoDB with roomId, senderId, timestamp. On room open, last N messages are loaded via REST for history.',
        code: 'GET /api/rooms/:id/messages?limit=50',
      },
    ],
  },
];

export const skills = {
  Frontend: [
    { name: 'React.js', level: 95 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Redux Toolkit', level: 88 },
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'JavaScript ES6+', level: 93 },
    { name: 'Context API / Hooks', level: 90 },
  ],
  Backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 88 },
    { name: 'RESTful APIs', level: 92 },
    { name: 'JWT / OAuth 2.0', level: 85 },
    { name: 'WebSockets / Socket.io', level: 82 },
    { name: 'Passport.js', level: 80 },
  ],
  Database: [
    { name: 'MongoDB / Mongoose', level: 88 },
    { name: 'MySQL', level: 75 },
  ],
  Security: [
    { name: 'AES Encryption', level: 82 },
    { name: 'OWASP Practices', level: 85 },
    { name: 'bcrypt / RBAC', level: 83 },
    { name: 'HTTP-only Cookies', level: 88 },
  ],
  DevOps: [
    { name: 'Git', level: 90 },
    { name: 'Postman', level: 88 },
    { name: 'Agile / SDLC', level: 85 },
    { name: 'VS Code', level: 95 },
  ],
};

export const certifications = [
  { name: 'Full Stack Web Development', issuer: 'Udemy', icon: '🎓' },
  { name: 'React: The Complete Guide', issuer: 'Udemy', icon: '⚛️' },
  { name: 'Data Analysis using Excel', issuer: 'Great Learning', icon: '📊' },
];

export const education = {
  institution: 'Coimbatore Institute of Technology',
  degree: 'B.Tech in Information Technology',
  period: '2021 – 2025',
  cgpa: '8.3 / 10',
};