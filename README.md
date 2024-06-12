<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">CLINICAL-REPORTING</h1>
</p>
<p align="center">
    <h1 align="center">Hackathon Hack4Heart</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/last-commit/AyushGakre/Clinical-reporting?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/AyushGakre/Clinical-reporting?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/AyushGakre/Clinical-reporting?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/OpenAI-412991.svg?style=flat&logo=OpenAI&logoColor=white" alt="OpenAI">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Recording

https://github.com/AyushGakre/Clinical-reporting/assets/122914231/3b6963ff-7b7e-42dd-b50e-f85c355d6fe3


##  Overview

`Clinical reporting` involves doctors and nurses dictating clinical findings and diagnostic results verbally to save time. Digital transcription of these verbal reports enhances efficiency and convenience for later referrals and follow-ups. It is crucial for the transcriptions to be accurate to ensure reliable medical records and effective patient care.


---

##  Features
`Speed`: Rapid transcription process to save time for healthcare providers.
<br/>
<br/>
`Integration`: Seamless integration with electronic health records (EHR) systems for easy access and management.
<br/>
<br/>
`Voice Recognition`: Advanced voice recognition technology to convert speech to text efficiently.
<br/>
<br/>
`Data Security`: Robust security measures to protect patient information and maintain confidentiality.
<br/>
<br/>
`Accessibility`: Easy access to transcribed reports for all authorized healthcare providers.
<br/>
<br/>
`Editing and Review`: Features for reviewing and editing transcriptions to correct any errors.
<br/>
<br/>
`User-Friendly Interface`: Intuitive interface for ease of use by medical staff.
<br/>
<br/>
`Multilingual Support`: Capability to transcribe in multiple languages.

---

##  Repository Structure

```sh
└── Clinical-reporting/
    ├── backend
    │   ├── .gitignore
    │   ├── database.js
    │   ├── index.js
    │   ├── package-lock.json
    │   ├── package.json
    │   └── routes
    │       ├── Id.js
    │       ├── details.js
    │       ├── genai.js
    │       ├── transcript.js
    │       └── translate.js
    └── client
        ├── .eslintrc.cjs
        ├── .gitignore
        ├── README.md
        ├── components.json
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── public
        │   └── vite.svg
        ├── src
        │   ├── App.css
        │   ├── App.jsx
        │   ├── components
        │   │   ├── Dashboard.jsx
        │   │   ├── Dictate.jsx
        │   │   ├── Fetchdetails.jsx
        │   │   ├── Genai.jsx
        │   │   ├── Login.jsx
        │   │   ├── Navbar.jsx
        │   │   └── Translate.jsx
        │   ├── index.css
        │   └── main.jsx
        ├── tailwind.config.js
        └── vite.config.js
```


---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the Clinical-reporting repository:

```sh
git clone https://github.com/AyushGakre/Clinical-reporting
```

2. Change to the project directory:

```sh
cd Clinical-reporting
```

3. Install the dependencies:

```sh
npm install
```

###  Running Clinical-reporting

Use the following command to run Clinical-reporting:

```sh
cd backend
node index.js
```

###  Tests

To execute tests, run:

```sh
cd client
npm run dev
```


---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/AyushGakre/Clinical-reporting/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/AyushGakre/Clinical-reporting/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/AyushGakre/Clinical-reporting/issues)**: Submit bugs found or log feature requests for Clinical-reporting.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/AyushGakre/Clinical-reporting
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

