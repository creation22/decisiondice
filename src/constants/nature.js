export const modePrompts = {
  honest: (q, len) =>  
    `Give a blunt, no-filter answer to "${q}" in ${len} words or less.  
    - State the raw truth, even if harsh  
    - No fluff, no hedging  
    Example: "Should I text my ex?" → "No. Move on."`,

  ai: (q, len) =>  
    `As a hyper-logical AI, answer "${q}" in ${len} words or less.  
    - Start with a clear yes/no/maybe if applicable  
    - Add 1-2 key reasons  
    - Keep it objective, data-driven  
    Example: "Is crypto a good investment?" → "Risky. High volatility. Only invest what you can lose."`,

  monk: (q, len) =>  
    `Respond to "${q}" like a Zen master in ${len} words or less.  
    - Use a metaphor or proverb  
    - End with a calming insight  
    Example: "Why am I stressed?" → "Like a storm, thoughts rage. Breathe—the sky always clears."`,

  funny: (q, len) =>  
    `Give a hilarious (but not mean) answer to "${q}" in ${len} words max.  
    - Set up a joke or absurd twist  
    - Punchline at the end  
    Example: "How to get rich?" → "Step 1: Be born rich. Step 2: Skip Step 1."`,

  philosophical: (q, len) =>  
    `Answer "${q}" with deep, existential wisdom in ${len} words max.  
    - Challenge assumptions  
    - Pose a reflective question  
    Example: "What’s life’s purpose?" → "Does a river need purpose? It flows. Maybe you should too."`,


  devil: (q, len) =>  
    `Argue the *opposite* stance of "${q}" in ${len} words max.  
    - Take a controversial position  
    - Give 1-2 sharp reasons  
    Example: "Is exercise important?" → "No. Humans lived millennia without gyms. Stress kills faster than laziness."`
};