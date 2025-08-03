import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { modePrompts } from "./constants/nature";

// Function to call Pollinations API
const fetchPollinationsResponse = async (prompt) => {
  const res = await fetch("https://text.pollinations.ai/api/response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }), // model: 'gpt-4' optional
  });

  if (!res.ok) throw new Error("Pollinations API failed");
  const data = await res.json();
  return data.text;
};

const Prompt = () => {
  const location = useLocation();
  const { question, length, selectedModes } = location.state || {};

  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!question || !selectedModes || selectedModes.length === 0) {
      setError("Missing data. Please go back and enter your question.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchAnswers() {
      try {
        const results = {};

        for (const mode of selectedModes) {
          const buildPrompt = modePrompts[mode];
          if (!buildPrompt) continue;

          const prompt = buildPrompt(question, length);
          const response = await fetchPollinationsResponse(prompt);
          results[mode] = response;
        }

        setAnswers(results);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchAnswers();
    return () => controller.abort();
  }, [question, length, selectedModes]);

  if (loading) return <div className="p-4 text-xl">Generating answers...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Your Question:</h1>
      <p className="text-lg italic">"{question}"</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {selectedModes.map((mode) => (
          <div
            key={mode}
            className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold capitalize mb-2">
              {mode} Perspective
            </h2>
            <p className="text-gray-800 whitespace-pre-line">
              {answers[mode] || "Loading..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prompt;
