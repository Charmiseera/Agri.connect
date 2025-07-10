# Environment Variables for Deployment

## Required Environment Variables

### Server (.env in /server folder)

```bash
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/agri-connect

# Server Configuration
PORT=5000

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_EXPIRE=30d

# Cloudinary Configuration (for image uploads)
CLOUD=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Node Environment
NODE_ENV=production
```

### Client (.env in /client folder)

```bash
# OpenAI API Configuration
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
REACT_APP_OPENAI_BASE_URL=https://models.github.ai/inference
REACT_APP_OPENAI_MODEL=openai/gpt-4.1

# Chatbot API Keys
REACT_APP_ASSEMBLYAI_API_KEY=your_assemblyai_api_key_here
REACT_APP_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
REACT_APP_NEBIUS_API_KEY=your_nebius_api_key_here

# Backend API URL
REACT_APP_API_URL=https://your-backend-domain.com
```

## Setup Instructions

### 1. MongoDB Setup
- Create a MongoDB Atlas account at https://cloud.mongodb.com
- Create a new cluster
- Get your connection string and replace `MONGODB_URI`

### 2. Cloudinary Setup (for image uploads)
- Create account at https://cloudinary.com
- Get your cloud name, API key, and API secret from dashboard

### 3. API Keys Required
- **OpenAI API**: For AI features (https://platform.openai.com)
- **AssemblyAI**: For speech-to-text (https://www.assemblyai.com)
- **ElevenLabs**: For text-to-speech (https://elevenlabs.io)
- **Nebius**: For additional AI features

### 4. Google Cloud Setup
- Create a Google Cloud project
- Enable Speech-to-Text API
- Download credentials JSON file and place in server folder as `google-credentials.json`

### 5. JWT Secret
- Generate a strong random string for JWT_SECRET
- You can use: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`

## Deployment Platforms

### For Vercel (Frontend)
Add environment variables in Vercel dashboard under Settings > Environment Variables

### For Railway/Render/Heroku (Backend)
Add environment variables in your platform's dashboard

### For Manual Server
Create `.env` files as shown above in respective folders

## Security Notes
- Never commit `.env` files to Git
- Use different secrets for production vs development
- Store Google credentials file securely
- Use strong, unique JWT secrets
