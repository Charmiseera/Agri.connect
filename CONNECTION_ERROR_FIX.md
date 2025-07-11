# 🚨 Connection Error Fix Guide

## Problem: "Unable to connect to server, please check your internet connection"

This error means your frontend can't reach the backend API. The issue is likely that the `REACT_APP_API_URL` environment variable is not set in your deployment platform.

## 🔧 **Quick Fix:**

### For Netlify:
1. Go to your Netlify dashboard
2. Select your deployed site
3. Go to **Site settings** → **Environment variables**
4. Add this variable:
   ```
   Key: REACT_APP_API_URL
   Value: https://agri-connect-1-1ubj.onrender.com
   ```
5. **Important**: Redeploy your site after adding the variable

### For Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   ```
   Name: REACT_APP_API_URL
   Value: https://agri-connect-1-1ubj.onrender.com
   ```
5. **Important**: Redeploy after adding the variable

## 🔍 **How to Verify:**

1. After redeployment, open your site
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Look for these logs:
   ```
   Environment Variables Debug:
   REACT_APP_API_URL: https://agri-connect-1-1ubj.onrender.com
   Axios Base URL set to: https://agri-connect-1-1ubj.onrender.com
   ```

## 🎯 **Alternative Quick Fix:**

If environment variables don't work, I can hardcode the API URL temporarily:

### Option 1: Update index.js directly
Replace in `client/src/index.js`:
```javascript
// From:
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://agri-connect-1-1ubj.onrender.com';

// To:
axios.defaults.baseURL = 'https://agri-connect-1-1ubj.onrender.com';
```

## 🚀 **Step-by-Step Solution:**

1. **Set environment variable** in your deployment platform
2. **Redeploy** the site (this is crucial!)
3. **Test registration** again
4. **Check console** for the debug logs

## 📋 **Environment Variables Needed:**

For **Netlify** or **Vercel**, set these:
```
REACT_APP_API_URL=https://agri-connect-1-1ubj.onrender.com
NODE_OPTIONS=--openssl-legacy-provider
```

## ⚡ **Immediate Test:**

Try this in your browser console (F12 → Console):
```javascript
console.log('Current API URL:', window.location.origin);
console.log('Expected API URL:', 'https://agri-connect-1-1ubj.onrender.com');
```

The connection error should be fixed once the environment variable is properly set! 🎯
