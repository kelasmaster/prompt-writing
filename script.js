// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const generatePromptBtn = document.getElementById('generatePromptBtn');
const submitFormBtn = document.getElementById('submitFormBtn');
const wordCountInput = document.getElementById('wordCount');
const wordCountValue = document.getElementById('wordCountValue');
const promptDisplay = document.getElementById('promptDisplay');
const generatedPrompt = document.getElementById('generatedPrompt');
const savePromptBtn = document.getElementById('savePromptBtn');
const savedPromptsSection = document.getElementById('savedPromptsSection');
const savedPromptsList = document.getElementById('savedPromptsList');

// Event Listeners
darkModeToggle.addEventListener('click', toggleDarkMode);
generatePromptBtn.addEventListener('click', showForm);
submitFormBtn.addEventListener('click', generatePrompt);
savePromptBtn.addEventListener('click', savePrompt);
wordCountInput.addEventListener('input', updateWordCount);

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Show Form
function showForm() {
  document.getElementById('promptForm').classList.remove('hidden');
}

// Update Word Count
function updateWordCount() {
  wordCountValue.textContent = wordCountInput.value;
}

// Generate Prompt (Simulated AI Logic)
function generatePrompt() {
  const genre = document.getElementById('genre').value;
  const tone = document.getElementById('tone').value;
  const wordCount = wordCountInput.value;

  // Simulate AI-generated prompt
  const prompts = {
    fiction: {
      serious: "Write about a protagonist who must confront their deepest fears in a dystopian world.",
      humorous: "Create a story where aliens misunderstand human customs and hilarity ensues.",
      dark: "A cursed object brings misfortune to anyone who possesses it.",
      light: "Describe a magical journey through a whimsical forest."
    },
    poetry: {
      serious: "Compose a poem about the fleeting nature of time.",
      humorous: "Write a lighthearted ode to your favorite snack.",
      dark: "Explore themes of loss and despair in free verse.",
      light: "Craft a joyful haiku about springtime."
    }
  };

  const promptText = prompts[genre][tone] || "Your creativity knows no bounds!";
  generatedPrompt.textContent = `${promptText} (Word Count: ${wordCount})`;

  promptDisplay.classList.remove('hidden');
}

// Save Prompt
function savePrompt() {
  const promptText = generatedPrompt.textContent;
  if (promptText) {
    const listItem = document.createElement('li');
    listItem.textContent = promptText;
    savedPromptsList.appendChild(listItem);
    savedPromptsSection.classList.remove('hidden');
  }
}
