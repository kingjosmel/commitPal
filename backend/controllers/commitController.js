const groqClient = require("../utils/groqClients");

exports.generateCommit = async (req, res) => {
  try {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const commitMessage = await groqClient.generateCommitMessage(description);

    res.json({ commitMessage });
  } catch (error) {
    console.error("Error generating commit:", error);
    res.status(500).json({ error: "Failed to generate commit message" });
  }
};
