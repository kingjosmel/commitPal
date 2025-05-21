"use client";

import { useState } from "react";
import { generateCommit } from "../app/lib/api";

export default function CommitForm() {
  const [description, setDescription] = useState("");
  const [commitMessage, setCommitMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setCommitMessage("");

    try {
      const data = await generateCommit(description);
      setCommitMessage(data.commitMessage);
    } catch (err) {
      setError("Failed to generate commit message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commitMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Code Change Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="e.g., Fixed bug in login redirection"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
        >
          {isLoading ? "Generating..." : "Generate Commit"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {commitMessage && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <p className="font-mono text-sm">{commitMessage}</p>
          <button
            onClick={handleCopy}
            className={`mt-2 px-4 py-2 rounded-md text-white ${
              copied ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
            } transition-colors copy-button`}
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      )}
    </div>
  );
}
