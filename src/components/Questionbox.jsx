import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questionbox = () => {
  const [question, setQuestion] = useState('');
  const [length, setLength] = useState('medium');
  const [selectedModes, setSelectedModes] = useState([]);
  const navigate = useNavigate();

  function handleModeToggle(mode) {
    setSelectedModes((prev) =>
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );
  }

  const handleSubmit = () => {
    if (!question.trim() || selectedModes.length === 0) {
      alert('Please enter a question and select at least one mode.');
      return;
    }

    navigate('/nature', {
      state: {
        question,
        length,
        selectedModes,
      },
    });
  };

  return (
    <div>
      <div className="bg-white shadow-lg p-6 rounded-2xl space-y-4 w-full max-w-xl mx-auto">
        <label className="block font-semibold">📥 Enter your question</label>
        <textarea
          className="w-full p-3 rounded-lg border"
          rows="3"
          placeholder="What should I do about ..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label className="block font-semibold">📏 Choose answer length</label>
        <div className="flex gap-4">
          {['short', 'medium', 'long'].map((l) => (
            <label key={l}>
              <input
                type="radio"
                name="length"
                value={l}
                checked={length === l}
                onChange={(e) => setLength(e.target.value)}
              />{' '}
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </label>
          ))}
        </div>

        <label className="block font-semibold">🧠 Select mode(s)</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { key: 'honest', label: '❤️ Honest' },
            { key: 'ai', label: '🤖 AI-like' },
            { key: 'monk', label: '🧘 Monk-like' },
            { key: 'funny', label: '🤡 Funny' },
            { key: 'philosophical', label: '🔮 Philosophical' },
            { key: 'devil', label: '😈 Devil' },
          ].map((mode) => (
            <label key={mode.key}>
              <input
                type="checkbox"
                checked={selectedModes.includes(mode.key)}
                onChange={() => handleModeToggle(mode.key)}
              />{' '}
              {mode.label}
            </label>
          ))}
        </div>

        <button
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all"
          onClick={handleSubmit}
        >
          🎲 Generate Answers
        </button>
      </div>
    </div>
  );
};

export default Questionbox;
