# Popular Movie App - Next.js Application

This is a simple movie listing app built using **Next.js 15**, **React 19**, and **Tailwind CSS 3.4**. It demonstrates a static site generation (SSG) with client-side rendering (CSR) for fetching additional movie details. The app fetches movie data from **The Movie Database (TMDb) API**.

Live version of the app: [https://popular-movies-site.vercel.app/](https://popular-movies-site.vercel.app/)

## Features

- **TypeScript Typing**: To simplify the example, I have assumed that the movie list is an array of `Movie` type objects.
- **SSG + CSR**:
  - On the homepage, the list of movies is statically generated using **Static Site Generation (SSG)**. The data is fetched on the server side.
  - In the movie **Dialog (Modal)**, additional movie details (such as description and rating) are fetched client-side using **Client-Side Rendering (CSR)**.
  - Although the required data is already present in the movie list, I’ve used CSR for the modal to demonstrate its usage.
- **API Key**: I’ve excluded the local `.env` file from Git for security reasons, but you can find a sample in `.env.example` for running the app locally.
- **Figma Design**: I’ve aimed to implement the design based on the provided Figma file with pixel-perfect precision. However, I mainly utilized the design ratios used by Tailwind.
- **Typography**: I could not find a free version of the font Akkurat used in the design. Therefore, I’ve left the default system font stack (`Arial, Helvetica, sans-serif`).

## Possible Improvements

**Dark Theme**:

- The app can automatically switch to a dark theme if the user prefers it based on their system settings. This can be achieved using the `prefers-color-scheme` CSS media query.

**Web Accessibility**:

- The app could be improved to support better keyboard navigation and structure by adding proper ARIA roles and semantic HTML tags. This would enhance the experience for screen readers and improve overall accessibility.

**Mobile Responsiveness**:

- While the basic mobile responsiveness (RWD) is in place, the design for mobile devices could be improved for better readability. Currently, the poster may take up too much space on smaller screens etc.

**Error Handling**:

- Provide more specific error messages like "Unable to load details" or "Network issue, try again."

**UX Improvements**:

- **Loading**: Add skeleton / spinner loaders for posters and text while data is loading.
- **Error Feedback**: Display error toasts or banners on data fetch failure.

## Getting Started

To get the app running locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up your environment variables**:

   - Copy `.env.example` to `.env` and replace the `API_KEY` with your own valid key:

   ```bash
   cp .env.example .env
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Visit the app at `http://localhost:3000`.

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute. All contributions are welcome!
