import React, { useState } from 'react';

const Questionbox = () => {
  const [question, setQuestion] = useState('');
  const [length, setLength] = useState('medium');
  const [selectedModes, setSelectedModes] = useState([]);

  function handleModeToggle(mode) {
    setSelectedModes((prev) =>
      prev.includes(mode)
        ? prev.filter((m) => m !== mode)
        : [...prev, mode]
    );
  }

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
          <label>
            <input
              type="radio"
              name="length"
              value="short"
              checked={length === 'short'}
              onChange={(e) => setLength(e.target.value)}
            />{' '}
            Short
          </label>
          <label>
            <input
              type="radio"
              name="length"
              value="medium"
              checked={length === 'medium'}
              onChange={(e) => setLength(e.target.value)}
            />{' '}
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="length"
              value="long"
              checked={length === 'long'}
              onChange={(e) => setLength(e.target.value)}
            />{' '}
            Long
          </label>
        </div>

        <label className="block font-semibold">🧠 Select mode(s)</label>
        <div className="grid grid-cols-2 gap-2">
          <label>
            <input
              type="checkbox"
              checked={selectedModes.includes('honest')}
              onChange={() => handleModeToggle('honest')}
            />{' '}
            ❤️ Honest
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedModes.includes('ai')}
              onChange={() => handleModeToggle('ai')}
            />{' '}
            🤖 AI-like
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedModes.includes('monk')}
              onChange={() => handleModeToggle('monk')}
            />{' '}
            🧘 Monk-like
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedModes.includes('funny')}
              onChange={() => handleModeToggle('funny')}
            />{' '}
            🤡 Funny
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedModes.includes('philosophical')}
              onChange={() => handleModeToggle('philosophical')}
            />{' '}
            🔮 Philosophical
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedModes.includes('devil')}
              onChange={() => handleModeToggle('Devil')}
            />{' '}
            😈 Devil 
          </label>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all">
          🎲 Generate Answers
        </button>
      </div>
    </div>
  );
};

export default Questionbox;
