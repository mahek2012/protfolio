# Mahek's Professional Developer Portfolio

A modern, visually unique developer portfolio built with **React.js** and **Tailwind CSS (v4)**.

## 🚀 Features

- **Premium UI/UX**: Clean, minimal design inspired by modern SaaS websites.
- **Dark/Light Mode**: Persistent theme toggling.
- **Smooth Animations**: Powered by Framer Motion for scroll reveals and interactive elements.
- **Performance Optimized**: Lazy loaded images and clean architecture.
- **Case Study Modals**: Detailed project breakdowns directly in the UI.
- **Functional Contact Form**: Integrated with Web3Forms.

## 📁 Folder Structure

\`\`\`
src/
├── assets/      # Static assets (images, icons)
├── components/  # Reusable UI components
├── hooks/       # Custom React hooks
├── pages/       # Page-level components
├── utils/       # Helper functions
├── App.jsx      # Main application entry
└── main.jsx     # Vite rendering entry
\`\`\`

## 🛠️ Tech Stack

- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 💻 Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd Website-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Web3Forms Setup**
   - Get your free access key from [Web3Forms](https://web3forms.com/).
   - Open \`src/components/Contact.jsx\`.
   - Replace \`"YOUR_ACCESS_KEY_HERE"\` with your actual access key.

## 🌐 Deployment (Vercel)

This project is perfectly optimized for Vercel deployment:

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. Vercel will automatically detect Vite and set the build command to \`npm run build\` and output directory to \`dist\`.
5. Click **Deploy**.
