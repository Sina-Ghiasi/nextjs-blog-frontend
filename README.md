# Next.js Blog Frontend 🚀

![GitHub Stars](https://img.shields.io/github/stars/Sina-Ghiasi/nextjs-blog-frontend?style=flat&color=brightgreen)
![GitHub Issues](https://img.shields.io/github/issues/Sina-Ghiasi/nextjs-blog-frontend?style=flat&color=blue)
![GitHub License](https://img.shields.io/github/license/Sina-Ghiasi/nextjs-blog-frontend?style=flat&color=orange)
![GitHub Repo Size](https://img.shields.io/github/repo-size/Sina-Ghiasi/nextjs-blog-frontend?style=flat&color=purple)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Sina-Ghiasi/nextjs-blog-frontend?style=flat&color=cyan)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

A dynamic and modern blog frontend built with **Next.js**, **TypeScript**, and **Tailwind CSS**, integrated with a custom API. This project is designed for developers who want to create a feature-rich blog with user authentication, post search, bookmarking, and liking capabilities. Currently in development, it’s a perfect starting point for building a personalized blogging platform! ✨

> **Note:** This project is a **frontend-only** implementation. It requires a backend API to handle requests for data such as blog posts, user authentication, or other dynamic content.

## Table of Contents 📑

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction 🌟

Welcome to the **Next.js Blog Frontend**, a powerful and flexible blog template powered by Next.js and TypeScript. This project connects to a custom API to deliver a rich user experience, including user authentication, post searching, bookmarking, and liking posts. Styled with Tailwind CSS, it offers a responsive and modern UI. Whether you’re building a personal blog or a content platform, this project provides a solid foundation for your next web adventure! 🎉

## Features ✨

- 🔐 **User Authentication**: Secure login and registration system via the custom API.
- 🔍 **Post Search**: Easily search for blog posts with real-time results.
- 📑 **Bookmark Posts**: Save your favorite posts for later reading.
- ❤️ **Like Posts**: Engage with content by liking posts.
- ⚡️ **Static Site Generation (SSG)**: Fast page loads with Next.js pre-rendering.
- 🎨 **Responsive Design**: Mobile-friendly UI styled with Tailwind CSS.
- 🛠️ **TypeScript**: Type-safe development for better code quality.

## Tech Stack 🛠️

- **[Next.js](https://nextjs.org/)**: React framework for server-side rendering and static site generation.
- **[TypeScript](https://www.typescriptlang.org/)**: For type-safe JavaScript development.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI styling.
- **[ESLint](https://eslint.org/)** : For code linting.
- **Custom API**: Backend API for managing posts, users, bookmarks, and likes.

## Getting Started 🏁

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Version 18 or higher.
- **pnpm**: Recommended package manager (or use npm/yarn).
- **Git**: To clone the repository.
- **Custom API**: Ensure the backend API is running at `http://localhost:5000/api` (or your specified URL).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Sina-Ghiasi/nextjs-blog-frontend.git
   cd nextjs-blog-frontend
   ```

2. **Install Dependencies**:

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the API URL:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Run the Development Server**:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog in action! 🎉

## Deployment 🚀

The project is not yet deployed, but you can easily host it on [Vercel](https://vercel.com), the recommended platform for Next.js apps.

1. **Push to GitHub**:
   Ensure your repository is pushed to GitHub.

2. **Import to Vercel**:

   - Go to [Vercel Dashboard](https://vercel.com).
   - Click "New Project" and import your repository.
   - Set the `NEXT_PUBLIC_API_URL` environment variable to your production API URL.

3. **Deploy**:
   Vercel will build and deploy your app, providing a live URL.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing 🤝

We welcome contributions to make this project even better! To contribute:

1. **Fork the Repository**:
   Click the "Fork" button on GitHub.

2. **Create a Branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make Changes**:
   Add your feature or fix a bug.

4. **Submit a Pull Request**:
   Open a PR with a clear description of your changes.

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
