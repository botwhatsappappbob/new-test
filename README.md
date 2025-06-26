# MirrorVerse

![MirrorVerse Logo](https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1200)

## Overview

MirrorVerse is a unique, socially impactful mobile application designed to address global cultural division and lack of empathy. The app allows users to experience versions of themselves in different countries and environments, fostering understanding and connection across diverse cultures.

Through AI-generated simulations, users can see how their lives might be different if they were born in another part of the world, with different economic, social, and cultural circumstances. This immersive experience helps build empathy and appreciation for diverse perspectives.

## Features

### 🌍 Daily Cultural Mirror Experience
- Experience a new cultural perspective every day
- Detailed narratives about your "mirror self" in different countries
- Learn about local customs, daily routines, and cultural nuances

### 👥 Real-Time Cultural Matchmaking
- Connect with users from across the globe who share similar interests
- Engage in meaningful conversations with automatic translation
- Build relationships that bridge cultural divides

### 🏆 Gamified Empathy System
- Earn empathy points for engaging with content and connecting with others
- Track your progress on the global empathy leaderboard
- Unlock new "mirror worlds" based on your engagement level

### 🧠 Personalized Cultural Insights
- AI-generated stories tailored to your personality and preferences
- Interactive challenges to deepen your understanding of different cultures
- Voice-narrated versions of "you in another world"

## Screenshots

### Mirror Experience
![Mirror Tab](https://images.pexels.com/photos/161283/temple-kyoto-japan-architecture-161283.jpeg?auto=compress&cs=tinysrgb&w=800)

### Connect with Others
![Connect Tab](https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=800)

### Impact Leaderboard
![Impact Tab](https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800)

## Technology Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router
- **UI Components**: Custom components with React Native
- **Animations**: React Native Reanimated
- **Styling**: StyleSheet API
- **Icons**: Lucide React Native

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mirrorverse-app.git
cd mirrorverse-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the app:
   - Web: Open the URL displayed in your terminal
   - iOS/Android: Scan the QR code with the Expo Go app

## Project Structure

```
mirrorverse-app/
├── app/                  # Main application code (Expo Router)
│   ├── _layout.tsx       # Root layout component
│   ├── +not-found.tsx    # 404 page
│   └── (tabs)/           # Tab-based navigation
│       ├── _layout.tsx   # Tab configuration
│       ├── index.tsx     # Mirror tab
│       ├── connect.tsx   # Connect tab
│       ├── leaderboard.tsx # Impact tab
│       └── profile.tsx   # Profile tab
├── assets/               # Static assets
│   └── images/           # Image files
├── components/           # Reusable components
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── package.json          # Project dependencies
```

## Development

### Running on Different Platforms

- **Web**: `npm run dev`
- **iOS**: `npm run ios`
- **Android**: `npm run android`

### Building for Production

```bash
npm run build:web
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All images used in the app are from [Pexels](https://www.pexels.com/)
- Icons provided by [Lucide](https://lucide.dev/)