// -----------------------------------------------------------------------------
// EDIT ME: Your projects live here. To add a project, copy one block ({ ... })
// and change the values. To remove one, delete its block. Order in this list =
// order on the site. Set "featured: true" to show it on the homepage.
// -----------------------------------------------------------------------------

export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  year: string
  featured?: boolean
  // Optional external links. Leave "" to hide.
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: "setu",
    title: "Setu – AI Legal Assistant for Nepal",
    summary:
      "An AI-powered legal assistance platform that simplifies access to legal documents, automates official letter generation, and analyzes legal text using NLP and Large Language Models.",
    tags: ["LLMs", "NLP", "RAG", "Generative AI", "Python"],
    year: "2025",
    featured: true,
    repo: "https://github.com/SangamSilwal/Setu",
    demo: "",
  },
  {
    slug: "text-classification-benchmark",
    title: "Text Classification Benchmark",
    summary:
      "Comprehensive benchmarking of text classification models, comparing traditional machine learning, deep learning, and Transformer-based architectures across multiple NLP datasets.",
    tags: ["NLP", "Transformers", "PyTorch", "Scikit-learn", "Python"],
    year: "2025",
    featured: true,
    repo: "https://github.com/SangamSilwal/TextClassificationBenchmark",
    demo: "",
  },
  {
    slug: "enne-nmt-transformer",
    title: "English–Nepali Neural Machine Translation",
    summary:
      "A Transformer-based Neural Machine Translation system for translating English to Nepali, demonstrating sequence-to-sequence learning and attention mechanisms.",
    tags: ["NLP", "Transformer", "Machine Translation", "PyTorch"],
    year: "2025",
    featured: true,
    repo: "https://github.com/SangamSilwal/EnNe-NMT-Transformer",
    demo: "",
  },
  {
    slug: "image-caption-lstm",
    title: "Image Caption Generation",
    summary:
      "Deep learning application that automatically generates natural language captions for uploaded images using CNN-based feature extraction and LSTM sequence generation.",
    tags: ["Computer Vision", "LSTM", "Deep Learning", "Python"],
    year: "2024",
    repo: "https://github.com/SangamSilwal/ImageCaption_LSTM",
    demo: "",
  },
  {
    slug: "rfid-payment-gateway",
    title: "RFID-Based Payment Gateway",
    summary:
      "A secure RFID-based digital payment prototype demonstrating contactless authentication and transaction processing using embedded hardware and Python.",
    tags: ["RFID", "IoT", "Python", "Embedded Systems"],
    year: "2024",
    repo: "https://github.com/SangamSilwal/RFID-Based-PaymentGateway",
    demo: "",
  },
  {
    slug: "lenet5-cnn",
    title: "LeNet-5 CNN from Scratch",
    summary:
      "Implementation of the classic LeNet-5 convolutional neural network for handwritten digit recognition, demonstrating CNN fundamentals and image classification.",
    tags: ["CNN", "Deep Learning", "PyTorch", "MNIST"],
    year: "2024",
    repo: "https://github.com/SangamSilwal/LeNet-5_CNN",
    demo: "",
  },
]
