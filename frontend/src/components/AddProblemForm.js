import React, { useState } from "react";
import axios from "axios";

const AddProblemForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [inputExample, setInputExample] = useState("");
  const [outputExample, setOutputExample] = useState("");
  const [constraints, setConstraints] = useState("");
  const [testCases, setTestCases] = useState([{ input: "", output: "" }]);

  const handleTestCaseChange = (index, event) => {
    const newTestCases = testCases.map((testCase, i) => {
      if (i === index) {
        return { ...testCase, [event.target.name]: event.target.value };
      }
      return testCase;
    });
    setTestCases(newTestCases);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: "", output: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const problem = {
      title,
      description,
      difficulty,
      inputExample,
      outputExample,
      constraints,
      testCases,
    };

    try {
      await axios.post("/api/problems", problem);
      alert("Problem added successfully");
    } catch (error) {
      alert("Error adding problem");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <input
        type="text"
        value={inputExample}
        onChange={(e) => setInputExample(e.target.value)}
        placeholder="Input Example"
        required
      />
      <input
        type="text"
        value={outputExample}
        onChange={(e) => setOutputExample(e.target.value)}
        placeholder="Output Example"
        required
      />
      <textarea
        value={constraints}
        onChange={(e) => setConstraints(e.target.value)}
        placeholder="Constraints"
        required
      />
      {testCases.map((testCase, index) => (
        <div key={index}>
          <input
            type="text"
            name="input"
            value={testCase.input}
            onChange={(e) => handleTestCaseChange(index, e)}
            placeholder="Test Case Input"
            required
          />
          <input
            type="text"
            name="output"
            value={testCase.output}
            onChange={(e) => handleTestCaseChange(index, e)}
            placeholder="Test Case Output"
            required
          />
        </div>
      ))}
      <button type="button" onClick={addTestCase}>
        Add Test Case
      </button>
      <button type="submit">Add Problem</button>
    </form>
  );
};

export default AddProblemForm;
