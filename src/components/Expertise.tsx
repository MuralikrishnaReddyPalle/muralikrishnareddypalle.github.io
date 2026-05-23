import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faEye,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "LangChain",
  "LangGraph",
  "OpenAI",
  "Hugging Face",
  "LamaIndex",
  "ChromaDB",
  "FAISS",
  "Reinforcement Learning",
  "Crew AI",
  "Anthropic",
  "Azure OpenAI"
];

const labelsSecond = [
  "PyTorch",
  "TensorFlow",
  "OpenCV",
  "MediaPipe",
  "ResNet",
  "EfficientNet",
  "YOLO",
  "RCNN",
  "FastAPI",
  "NVIDIA NeMo",
  "Conv-TasNet",
  "LEAF",
  "SincNet",
  "SoX",
  "ONNX",
  "TorchScript",
  "Torchaudio",
  "Research"
];

const labelsThird = [
  "Git",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Selenium",
  "SQL",
  "PostgreSQL",
  "Postman",
  "FastAPI",
  "Streamlit",
  "MongoDB",
  "Supabase",
  "Airflow DAG"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>GenAI & LLMs</h3>
            <p>I specialize in building language systems using foundation models and generative AI workflows. My work spans prompt engineering, RAG, embedding-based search, and transformer-based reasoning. I create LLM-powered applications with vector databases, agentic frameworks, and reinforcement strategies for dynamic, multi-turn interactions across diverse domains.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faEye} size="3x" />
            <h3>CV & Audio ML</h3>
            <p>I work on deep learning for computer vision, audio, and multimodal understanding. I build models that process visual and auditory signals using CNNs, transformers, and hybrid encoders. My focus lies in integrating cross-modal inputs like images, landmarks, and waveforms to develop perceptual systems for real-world recognition and interpretation tasks.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>AI / MLOps</h3>
            <p>I design and deploy scalable AI systems using optimized pipelines and automation tools. My expertise includes containerization with Docker, model optimization with ONNX and TorchScript, CI/CD with GitHub Actions, and inference APIs with FastAPI. I streamline training, deployment, and monitoring workflows for reliable, production-ready AI solutions.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
