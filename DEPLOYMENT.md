# Deployment Guide - Separate Frontend & Backend

## Backend Deployment Options

### Option 1: Railway (Recommended)
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select the `server` folder as the source
4. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: 5000 (or leave default)
5. Deploy and get your backend URL (e.g., `https://your-app.railway.app`)

### Option 2: Render
1. Go to [Render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. The `render.yaml` file will automatically configure:
   - Root directory: `server`
   - Build command: `npm install`
   - Start command: `npm start`
   - Environment variables (you'll need to set `MONGODB_URI` and `JWT_SECRET` in the dashboard)
5. Set environment variables in Render dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
6. Deploy and get your backend URL

### Option 3: Vercel (Backend only)
1. Go to [Vercel.com](https://vercel.com)
2. Import your repository
3. Set root directory to `server`
4. Set build command: `npm install`
5. Set environment variables
6. Deploy and get your backend URL

## Frontend Deployment

### Vercel (Recommended)
1. Go to [Vercel.com](https://vercel.com)
2. Import your repository
3. Set root directory to `client`
4. Set build command: `npm run build`
5. Set output directory: `build`
6. Add environment variable:
   - `REACT_APP_API_URL`: Your backend URL + `/api` (e.g., `https://your-app.railway.app/api`)
7. Deploy

### Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `cd client && npm run build`
4. Set publish directory: `client/build`
5. Add environment variable: `REACT_APP_API_URL`
6. Deploy

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secret-key
PORT=5000
```

### Frontend (Vercel/Netlify Environment Variables)
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## Testing Deployment

1. **Test Backend**: Visit your backend URL directly
   - Should show: `{"message": "Welcome to TechFarm API"}`

2. **Test Frontend**: Visit your frontend URL
   - Should load without errors
   - Login/Register should work
   - API calls should succeed

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Backend CORS is configured to allow all origins
2. **API URL Issues**: Make sure `REACT_APP_API_URL` includes `/api` at the end
3. **Database Connection**: Ensure MongoDB URI is correct and accessible
4. **Environment Variables**: Double-check all environment variables are set

### Debug Steps:
1. Check browser console for errors
2. Check backend logs for errors
3. Test API endpoints directly (e.g., `https://your-backend.com/api/auth/signin`)
4. Verify environment variables are loaded correctly 