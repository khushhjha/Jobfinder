# Job Finder

A modern React.js application for searching jobs by keyword and location with interactive styling.

## Features

- 🔍 Search jobs by keyword and location
- 🎨 Interactive and responsive design
- 📱 Mobile-friendly interface
- ⚡ Real-time search results
- 💼 Job details with salary information
- 🌐 API integration ready (Adzuna API)

## Technologies Used

- React.js 18
- HTML5 & CSS3
- Axios for API calls
- Modern CSS animations and transitions
- Responsive grid layout

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Integration

The app is configured to work with the Adzuna API. To use real job data:

1. Sign up for a free account at [Adzuna Developer](https://developer.adzuna.com/)
2. Get your `app_id` and `app_key`
3. Replace the placeholder values in `src/components/SearchForm.js`:
   ```javascript
   app_id: 'your_actual_app_id',
   app_key: 'your_actual_app_key'
   ```

## Project Structure

```
src/
├── components/
│   ├── SearchForm.js      # Search form component
│   ├── SearchForm.css     # Search form styles
│   ├── JobList.js         # Job list container
│   ├── JobList.css        # Job list styles
│   ├── JobCard.js         # Individual job card
│   └── JobCard.css        # Job card styles
├── App.js                 # Main app component
├── App.css               # App-level styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## Features Implemented

✅ Job search by keyword and location  
✅ Clean, modular, and commented code  
✅ Interactive styling with hover effects  
✅ Responsive design for all devices  
✅ Loading states and error handling  
✅ Modern gradient backgrounds  
✅ Smooth animations and transitions  
✅ API integration structure  

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## License

This project is open source and available under the MIT License.