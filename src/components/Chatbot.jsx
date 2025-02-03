import React, { useState, useRef } from "react";
import "./Chatbot.css";

const chatbotData = {
  intents: [
    {
      intent: "salutation",
      patterns: ["Bonjour", "Salut", "Hey", "Coucou", "Hello", "Yo"],
      responses: [
        "Bonjour ! Bienvenue sur mon portfolio.",
        "Salut ! Comment puis-je vous aider ?",
        "Hello ! Vous souhaitez en savoir plus sur moi ?",
      ],
    },
    {
      intent: "qui_es_tu",
      patterns: ["Qui es-tu ?", "Tu fais quoi ?", "Quel est ton rôle ?", "Présente-toi"],
      responses: [
        "Je suis un chatbot développé par Said Meziani pour son portfolio. Je peux vous présenter ses compétences, projets et formations.",
      ],
    },
    {
      intent: "competences",
      patterns: ["Quelles sont tes compétences ?", "Que sais-tu faire ?", "Quelles technologies maîtrises-tu ?"],
      responses: [
        "Said Meziani est spécialisé en développement de chatbots et intelligence artificielle. Il maîtrise HTML, CSS, SASS, JavaScript, ReactJS, FastAPI, MongoDB (NoSQL), API REST, NLP et Machine Learning (Text Mining, RNN, LSTM, Transformers).",
      ],
    },
    {
      intent: "formation",
      patterns: ["Quelle est ta formation ?", "Où as-tu étudié ?", "Quel est ton parcours académique ?"],
      responses: [
        "Said Meziani est étudiant à la Cité des Métiers et Compétences de Rabat (2023-2025) en intelligence artificielle et développement de chatbots. Il a étudié les mathématiques et l'informatique appliquée à l'Université Moulay Ismail Meknès (2022-2023) et a obtenu un Baccalauréat Scientifique en 2022.",
      ],
    },
  ],
};

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");

  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const findResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    for (let intent of chatbotData.intents) {
      for (let pattern of intent.patterns) {
        if (lowerCaseMessage.includes(pattern.toLowerCase())) {
          return intent.responses[Math.floor(Math.random() * intent.responses.length)];
        }
      }
    }

    return "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?";
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    const botResponse = { sender: "bot", text: findResponse(input) };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleChatbot}>
        <img className="pic" src="/images/oipp.jpg" alt="Chatbot Icon" />
      </button>

      <div className={`chatbot ${visible ? "show" : "hide"}`} ref={chatbotRef}>
        <header>
          <h2> Said's Bot</h2>
        </header>
        <ul className="conversation">
          {messages.map((msg, index) => (
            <li key={index} className={`chat ${msg.sender}`}>
              <p>{msg.text}</p>
            </li>
          ))}
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Entrez un message..."
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <span className="material-symbols-outlined" onClick={handleSendMessage}>
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
