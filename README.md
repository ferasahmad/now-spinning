## 🚀 Overview

A starter template for integrating Spotify's Web API with a Next.js project, including authentication, data fetching, and some reusable components :)

This project uses the following frameworks:

- **Next.js**: `14.2.12`
- **NextAuth.js**: `4.24.7`
- **Tailwind CSS**: `3.4.1`

## 📝 Getting Started

Follow these steps to clone and run the repository locally:

1. **Clone the Repository:**
```bash
git clone https://github.com/ferasahmad/nextjs-spotify-starter.git your-project-name
```
```
cd nextjs-spotify-starter
```
2. **Install Dependencies:**
```
npm install
```
4. **Set Up Environment Variables:**
```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```
4. **Run the Development Server:**
```
npm run dev
```
5. **Access the App:**

Open http://localhost:3000 in your browser.

## 📚 Project Structure

```plaintext
src/
├── app/
│   ├── api/auth/[...nextauth]/   # NextAuth API route for Spotify authentication
│   ├── login/                   # Login page components and logic
│   ├── HomeClient.tsx           # Main client-side logic for the home page
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Main page entry
├── components/                  # Reusable React components
├── hoc/                         # Higher-order components (e.g., authentication wrappers)
├── hooks/                       # Custom React hooks
├── lib/spotify/                 # Spotify-specific API clients and utilities
│   ├── apiClient.ts             # Axios instance for Spotify API requests
│   ├── endpoints.ts             # Spotify API endpoint definitions
│   ├── utils.ts                 # Helper functions for Spotify API calls
```
