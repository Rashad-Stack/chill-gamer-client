# Chill Gamer

Chill Gamer is a user-friendly game review application designed to provide a platform where users can explore and share game reviews. The application features user authentication and review management to enhance the user experience. It has a clean and responsive UI, focusing on simplicity and functionality to provide a "chill" experience.

## Features

- User authentication (email/password, Google login)
- Add, update, and delete game reviews
- View all reviews and individual review details
- Add games to a personal watchlist
- Responsive design for mobile, tablet, and desktop views
- Dark/light theme toggle
- Sorting and filtering reviews by rating, year, and genre

## Live Site

[Chill Gamer Live](https://chill-gamer-rashad-stack.netlify.app)
[Chill Gamer Server](b10-a10-server-side-rashad-stack.vercel.app/api)
[Chill Gamer Api Documentation](https://github.com/programming-hero-web-course2/b10-a10-server-side-Rashad-Stack/blob/main/README.md)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/chill-gamer.git
```

2. Navigate to the project directory:

```bash
cd chill-gamer
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## Deployment

The client-side deployed using Netlify, and the server-side deployed using Vercel.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License.
