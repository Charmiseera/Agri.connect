# Environment Variables for Deployment

## Quick Start Guide for Client Environment Variables

### Step 1: Create Client .env File
1. Navigate to `/client` folder
2. Copy `.env.example` to `.env`
3. Fill in the API keys below

### Step 2: Get Free API Keys (Start with these)

#### 🆓 GitHub Models (Free OpenAI Alternative)
```bash
REACT_APP_OPENAI_API_KEY=github_pat_your_token_here
REACT_APP_OPENAI_BASE_URL=https://models.github.ai/inference
REACT_APP_OPENAI_MODEL=gpt-4o-mini
```
**How to get:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `read:user`, `user:email`
4. Copy the token

#### 🆓 AssemblyAI (Free Speech-to-Text)
```bash
REACT_APP_ASSEMBLYAI_API_KEY=your_assemblyai_key_here
```
**How to get:**
1. Go to https://www.assemblyai.com
2. Sign up with email
3. Verify email and login
4. Dashboard → Copy your API key
5. **Free tier**: 5 hours/month

#### 🆓 ElevenLabs (Free Text-to-Speech)
```bash
REACT_APP_ELEVENLABS_API_KEY=your_elevenlabs_key_here
```
**How to get:**
1. Go to https://elevenlabs.io
2. Sign up with email
3. Go to Profile → API Keys
4. Generate new key
5. **Free tier**: 10,000 characters/month

#### 📍 Backend URL
```bash
REACT_APP_API_URL=https://agri-connect-1-1ubj.onrender.com
```
✅ **Already configured!** Your backend is deployed on Render.

### Step 3: Optional APIs (Can skip initially)

#### Nebius API (Optional)
```bash
REACT_APP_NEBIUS_API_KEY=your_nebius_key_here
```
This is optional and can be left empty initially.

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

### Priority Order for APIs

#### ✅ **Essential (Free Tiers Available)**
1. **MongoDB Atlas** - Database (Required)
2. **Cloudinary** - Image uploads (Required)
3. **JWT Secret** - Authentication (Free to generate)

#### 🔶 **Important (Free Tiers Available)**
4. **AssemblyAI** - Speech-to-text (5 hours/month free)
5. **GitHub Models** - Free AI alternative to OpenAI

#### 🔸 **Optional (Paid/Limited Free)**
6. **OpenAI API** - Advanced AI features (paid after credits)
7. **ElevenLabs** - Text-to-speech (10k chars/month free)
8. **Nebius** - Alternative AI provider

#### ❌ **Skip for Now**
9. **Google Cloud Speech** - Requires billing setup

### 1. MongoDB Setup
- Create a MongoDB Atlas account at https://cloud.mongodb.com
- Create a new cluster
- Get your connection string and replace `MONGODB_URI`

### 2. Cloudinary Setup (for image uploads)
- Create account at https://cloudinary.com
- Get your cloud name, API key, and API secret from dashboard

### 3. Client API Keys Setup

#### 3.1 OpenAI API (For AI Chatbot & Carbon Calculator)
1. Go to https://platform.openai.com
2. Sign up or log in
3. Go to API Keys section
4. Click "Create new secret key"
5. Copy the key for `REACT_APP_OPENAI_API_KEY`
6. **Note**: OpenAI requires payment after free credits

#### 3.2 AssemblyAI (For Speech-to-Text)
1. Go to https://www.assemblyai.com
2. Sign up for free account
3. Go to Dashboard
4. Copy your API key for `REACT_APP_ASSEMBLYAI_API_KEY`
5. **Free tier**: 5 hours of audio per month

#### 3.3 ElevenLabs (For Text-to-Speech)
1. Go to https://elevenlabs.io
2. Sign up for free account
3. Go to Profile & API Keys
4. Generate new API key
5. Copy for `REACT_APP_ELEVENLABS_API_KEY`
6. **Free tier**: 10,000 characters per month

#### 3.4 Nebius API (Alternative AI Provider)
1. Go to https://studio.nebius.ai or https://nebius.com
2. Sign up for account
3. Navigate to API section
4. Generate API key for `REACT_APP_NEBIUS_API_KEY`
5. **Note**: This might be optional depending on usage

#### 3.5 Alternative: GitHub Models (Free OpenAI Alternative)
If you don't want to pay for OpenAI:
1. Go to https://github.com/marketplace/models
2. Get free access to AI models
3. Use `REACT_APP_OPENAI_BASE_URL=https://models.github.ai/inference`
4. Get GitHub Personal Access Token for `REACT_APP_OPENAI_API_KEY`

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
