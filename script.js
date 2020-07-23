const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Vijay. I’m a 36 yr IT Devops Infrastructure Consultant currently living in UK. I have a burning passion towards techonlogy, particularly with Azure/AWS. I enjoy what i do!",
  skills:
    '<span class="code">Cloud Provider:</span> Azure, AWS <br><span class="code">Technologies:</span> Active Directory, ADFS, Exchange server, Office 365<br><span class="code">Containers & Orchestration</span> Docker, Kubernetes</br><span class="code">Pipeline/Configuration tool</span> Jenkins, Ansible<br>',
  education:
    "MS Software Systems, BITS Pilani, India<br> Computer Science Enginerring, Anna University, India",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "15+ yrs of Consulting/Managing/Designing Infrasturture.  I enjoy working with Developer and making their UAT/DEV/PROD deployment easy",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/vijay-ragavan-1a610515/' class='success link'>LinkedIn</a> ,<a href='https://itbigbang.co.uk/' class='success link'>Blog</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);