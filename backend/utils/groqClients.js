require("dotenv").config();

const generateCommitMessage = async (description) => {
  const prompt = `Generate a concise Conventional Commit message for the following change: "${description}". The message must follow the format "(scope): short description" with no additional text, markdown, or explanations. Infer an appropriate scope based on the description (e.g., "auth" for login-related changes, "ui" for user interface changes). Example: "(auth): fix login bug"`;

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [{ role: "user", content: prompt }],
      }),
    }
  );

  const data = await response.json();
  let commitMessage = data.choices[0].message.content.trim();

  // Clean up any unexpected markdown or formatting
  commitMessage = commitMessage.replace(/```/g, "").replace(/\n/g, "").trim();

  // Ensure the message matches the format (scope): description
  const match = commitMessage.match(/^\(([^)]+)\): (.+)/);
  if (!match) {
    // Fallback: construct a basic commit message if the format is incorrect
    return `(general): ${description.toLowerCase()}`;
  }

  return commitMessage;
};

module.exports = { generateCommitMessage };
