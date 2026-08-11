export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string;
  learned?: string;
}

export const projects: Project[] = [
  {
    slug: "kaaryab",
    title: "KaarYab Afghanistan",
    description:
      "An opportunity finder platform designed to help people discover jobs, scholarships, remote work, and volunteering opportunities.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/projects/kaaryab.png",
    liveUrl: "",
    githubUrl: "",
    problem:
      "Finding relevant opportunities can be difficult when jobs, scholarships, remote work, and volunteering opportunities are scattered across different platforms.",
    solution:
      "KaarYab organizes opportunities into a searchable and accessible platform so users can discover relevant opportunities more easily.",
    features: [
      "Opportunity discovery",
      "Search and filtering",
      "Opportunity categories",
      "Responsive interface",
      "Reusable React components",
    ],
    challenges:
      "Designing a clear interface while keeping the platform scalable and easy to maintain.",
    learned:
      "I improved my understanding of Next.js App Router, reusable components, data-driven UI, and responsive design.",
  },

  {
    slug: "fikfinder",
    title: "FikFinder",
    description:
      "A web application that analyzes fuel characteristics and provides an estimated fuel authenticity result and risk level.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/images/projects/fikfinder.png",
    liveUrl: "https://dejla3333.github.io/fikfinder./",
    githubUrl: "",
    problem:
      "It can be difficult for customers to distinguish between higher-quality and potentially adulterated fuel.",
    solution:
      "FikFinder collects observable fuel characteristics and provides an estimated result to help users understand the sample.",
    features: [
      "Fuel characteristic input",
      "Fuel type selection",
      "Estimated authenticity result",
      "Risk-level feedback",
      "Simple responsive interface",
    ],
    challenges:
      "Designing a simple interface that could communicate a technical result without overwhelming the user.",
    learned:
      "I learned more about JavaScript logic, form handling, UI feedback, and building a practical application around a real-world problem.",
  },

  {
    slug: "password-checker",
    title: "Smart Password Security Checker",
    description:
      "A modern interface for analyzing password security and communicating security recommendations clearly.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/projects/password-checker.png",
    liveUrl: "",
    githubUrl: "",
    problem:
      "Many users do not know what makes a password strong or what security improvements they should make.",
    solution:
      "The application provides a simple interface for evaluating password characteristics and presenting useful security feedback.",
    features: [
      "Password analysis",
      "Security feedback",
      "Responsive dashboard",
      "Modern UI",
      "Accessible interface",
    ],
    challenges:
      "Creating a security-focused interface that remains understandable and visually minimal.",
    learned:
      "I strengthened my skills with Next.js, TypeScript, Tailwind CSS, component architecture, and UI state management.",
  },

  {
    slug: "world-explorer",
    title: "World Explorer",
    description:
      "An interactive country exploration application that allows users to discover information about countries around the world.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "REST API",
    ],
    image: "/images/projects/world-explorer.png",
    liveUrl: "",
    githubUrl: "",
    problem:
      "Country information can be difficult to explore when data is spread across multiple sources.",
    solution:
      "World Explorer presents country information through a clean interface powered by external API data.",
    features: [
      "Country discovery",
      "API integration",
      "Country information",
      "Responsive layout",
      "Dynamic pages",
    ],
    challenges:
      "Working with asynchronous API data and handling loading, errors, and dynamic content.",
    learned:
      "I learned more about API integration, asynchronous data fetching, Next.js routing, and handling external data.",
  },

  {
    slug: "heart-ai",
    title: "Heart Disease Prediction AI",
    description:
      "A machine learning application that demonstrates how a trained model can be integrated into a web application.",
    technologies: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Next.js",
      "Joblib",
    ],
    image: "/images/projects/heart-ai.png",
    liveUrl: "",
    githubUrl: "",
    problem:
      "Machine learning models can be difficult for non-technical users to interact with directly.",
    solution:
      "The project connects a machine learning model to a web interface through a FastAPI backend, allowing users to interact with the model through a structured interface.",
    features: [
      "Machine learning model",
      "Python backend",
      "FastAPI API",
      "Next.js frontend",
      "Model integration",
    ],
    challenges:
      "Connecting the trained Scikit-learn model with a FastAPI backend and then integrating that backend with a Next.js frontend.",
    learned:
      "I learned more about machine learning workflows, model serialization, APIs, CORS, FastAPI, and connecting frontend applications to Python backends.",
  },

  {
    slug: "movie-watchlist",
    title: "Movie Watchlist",
    description:
      "A movie discovery and watchlist application built with React and JavaScript.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
      "CSS",
    ],
    image: "/images/projects/movie-watchlist.png",
    liveUrl: "",
    githubUrl: "",
    problem:
      "Users need a simple way to discover movies and keep track of movies they want to watch.",
    solution:
      "The application combines movie discovery with a personal watchlist interface.",
    features: [
      "Movie discovery",
      "API integration",
      "Watchlist management",
      "Responsive design",
      "Interactive React components",
    ],
    challenges:
      "Managing application state while keeping the interface responsive and easy to use.",
    learned:
      "I strengthened my React fundamentals, JavaScript skills, API integration, and state management.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}