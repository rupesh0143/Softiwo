// Application Development Portfolio Data

export const projects = [
  {
    id: 1,
    name: "E-Commerce Web Platform",
    type: "Web Application",
    status: "Completed",
    budget: "$15,000",
    duration: "3 months",
    startDate: "2024-03-01",
    endDate: "2024-06-01",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "P&H by Priyanshu",
    description: "Full-featured e-commerce platform with payment processing, inventory management, and admin dashboard."
  },
  {
    id: 2,
    name: "Fitness Tracking Mobile App",
    type: "Android & iOS",
    status: "In Development",
    budget: "$25,000",
    duration: "4 months",
    startDate: "2024-07-01",
    endDate: "2024-11-01",
    technologies: ["React Native", "Firebase", "Redux", "Maps API"],
    client: "Softiwo",
    description: "Cross-platform mobile app for fitness tracking, workout planning, and social features."
  },
  {
    id: 3,
    name: "Inventory Management System",
    type: "Desktop Application",
    status: "Completed",
    budget: "$12,000",
    duration: "2 months",
    startDate: "2024-04-15",
    endDate: "2024-06-15",
    technologies: ["Electron", "React", "SQLite", "Chart.js"],
    client: "Matsya Enterprises",
    description: "Desktop application for inventory management with real-time tracking and reporting."
  },
  {
    id: 4,
    name: "Restaurant Management App",
    type: "iOS Application",
    status: "Completed",
    budget: "$18,000",
    duration: "3.5 months",
    startDate: "2024-02-01",
    endDate: "2024-05-15",
    technologies: ["Swift", "Core Data", "CloudKit", "Push Notifications"],
    client: "Foodie's Hub",
    description: "Native iOS app for restaurant order management, table booking, and customer loyalty program."
  }
];

export const portfolio = {
  overview: {
    totalProjects: 15,
    activeProjects: 8,
    completedProjects: 39,
    totalRevenue: "$45,000",
    clientSatisfaction: "98%",
    averageDuration: "2.5 months"
  },
  chartData: [
    { name: "Jan", webApps: 3, mobileApps: 2, desktopApps: 1 },
    { name: "Feb", webApps: 4, mobileApps: 3, desktopApps: 2 },
    { name: "Mar", webApps: 5, mobileApps: 4, desktopApps: 1 },
    { name: "Apr", webApps: 3, mobileApps: 5, desktopApps: 3 },
    { name: "May", webApps: 6, mobileApps: 3, desktopApps: 2 },
    { name: "Jun", webApps: 4, mobileApps: 6, desktopApps: 4 }
  ],
  projectTypes: [
    { name: "Web Applications", value: 45, color: "#3B82F6" },
    { name: "Mobile Apps", value: 35, color: "#10B981" },
    { name: "Desktop Apps", value: 15, color: "#8B5CF6" },
    { name: "UI/UX Design", value: 5, color: "#F59E0B" }
  ]
};

export const testimonials = [
  {
    name: "David Miller",
    company: "TechStart Inc",
    content: "The web application they built for us exceeded all expectations. The performance is outstanding and the UI is incredibly user-friendly.",
    avatar: "DM"
  },
  {
    name: "Sarah Chen",
    company: "RetailTech Corp",
    content: "Our e-commerce platform generated 250% more sales after the redesign. The team's expertise in modern web technologies is impressive.",
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    company: "FitLife Solutions", 
    content: "The mobile app development process was smooth and transparent. They delivered a high-quality cross-platform app on time and within budget.",
    avatar: "MR"
  },
  {
    name: "Lisa Thompson",
    company: "Manufacturing Plus",
    content: "The desktop application streamlined our entire inventory process. We've saved countless hours and improved our accuracy significantly.",
    avatar: "LT"
  }
];

export const services = [
  {
    title: "Web Applications",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for scalable business solutions.",
    icon: "Globe",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    color: "blue"
  },
  {
    title: "Android Development",
    description: "Native and hybrid Android applications with modern UI/UX design and optimal performance.",
    icon: "Smartphone", 
    technologies: ["Kotlin", "Java", "React Native", "Flutter", "Firebase", "SQLite"],
    color: "green"
  },
  {
    title: "iOS Development",
    description: "Beautiful and functional iOS applications built with Swift and modern iOS development practices.",
    icon: "Apple",
    technologies: ["Swift", "SwiftUI", "Objective-C", "Core Data", "CloudKit", "Xcode"],
    color: "purple"
  },
  {
    title: "Desktop Applications",
    description: "Cross-platform desktop applications for Windows, macOS, and Linux using modern technologies.",
    icon: "Monitor",
    technologies: ["Electron", "Tauri", "Qt", "C++", "Python", "Rust"],
    color: "orange"
  },
  {
    title: "UI/UX Design",
    description: "Professional user interface and experience design that converts visitors into customers.",
    icon: "Palette",
    technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS", "Material Design", "Human Interface"],
    color: "pink"
  },
  {
    title: "DevOps & Deployment",
    description: "Complete deployment solutions with CI/CD, cloud hosting, and performance monitoring.",
    icon: "Cloud",
    technologies: ["Docker", "AWS", "Vercel", "GitHub Actions", "Kubernetes", "Nginx"],
    color: "indigo"
  }
];

export const technologies = {
  frontend: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
  desktop: ["Electron", "Tauri", "Qt", "WPF", "JavaFX", "Tkinter"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite", "Redis"],
  cloud: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "Digital Ocean"]
};

// Aliases for backward compatibility
export const campaigns = projects;
export const analytics = portfolio;