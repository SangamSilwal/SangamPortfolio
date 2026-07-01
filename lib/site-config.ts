// -----------------------------------------------------------------------------
// EDIT ME: This is your personal info. Change anything here and it updates the
// whole site. No coding knowledge needed — just replace the text in quotes.
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: "Sangam Silwal",
  role: "Electronics, Information and Communication Engineering Student",
  university: "IOE Pulchowk Campus",
  location: "Kathmandu, Nepal",

  // Short one-liner shown in the hero section.
  tagline:
    "I build intelligent assistants that combine NLP, retrieval, and reasoning.",

  // A slightly longer intro shown in the About section.
  about:
    "I'm an AI enthusiast and engineering student passionate about Machine Learning, Deep Learning, and Natural Language Processing. I enjoy building intelligent systems using Large Language Models, Generative AI, and modern AI frameworks, while continuously exploring the latest research and turning ideas into practical applications",

  // Your contact + social links. Leave a value empty ("") to hide that link.
  email: "sangamsilwal2062@gmail.com",
  links: {
    github: "https://github.com/SangamSilwal",
    linkedin: "https://linkedin.com/in/yourusername",
    // To enable the "Download CV" button, put your PDF in the `public` folder
    // (e.g. public/cv.pdf) and set this to "/cv.pdf". Leave "" to hide it.
    resume: "/Sangam-Silwal-Pcampus-CV.pdf",
  },

  // Skills / areas of focus. Add or remove freely.
  skills: [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Large Language Models (LLMs)",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Transformers",
  "LangChain",
  "LangGraph",
  "Retrieval-Augmented Generation (RAG)",
  "FastAPI",
  "SQL",
  "Git",
],

  avatar: "/profile.png",
}

export type SiteConfig = typeof siteConfig
