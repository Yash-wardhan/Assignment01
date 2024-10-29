const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

const routeData = [
    // From India Gate to Qutub Minar
    { "lat": 28.6139, "lng": 77.2295, "bearing": 0 }, // India Gate
    { "lat": 28.6100, "lng": 77.2250, "bearing": 10 },
    { "lat": 28.6050, "lng": 77.2200, "bearing": 20 },
    { "lat": 28.6000, "lng": 77.2150, "bearing": 30 },
    { "lat": 28.5941, "lng": 77.1855, "bearing": 40 }, // Qutub Minar

    // From Qutub Minar to Connaught Place
    { "lat": 28.5941, "lng": 77.1855, "bearing": 0 }, // Qutub Minar
    { "lat": 28.5900, "lng": 77.1870, "bearing": 10 },
    { "lat": 28.5850, "lng": 77.1900, "bearing": 20 },
    { "lat": 28.5800, "lng": 77.2000, "bearing": 30 },
    { "lat": 28.5750, "lng": 77.2100, "bearing": 40 },
    { "lat": 28.5700, "lng": 77.2150, "bearing": 50 },
    { "lat": 28.5650, "lng": 77.2200, "bearing": 60 },
    { "lat": 28.5700, "lng": 77.2250, "bearing": 70 },
    { "lat": 28.7041, "lng": 77.2184, "bearing": 80 }, // Connaught Place

    // From Connaught Place to Red Fort
    { "lat": 28.7041, "lng": 77.2184, "bearing": 0 }, // Connaught Place
    { "lat": 28.7020, "lng": 77.2210, "bearing": 10 },
    { "lat": 28.7000, "lng": 77.2240, "bearing": 20 },
    { "lat": 28.6950, "lng": 77.2290, "bearing": 30 },
    { "lat": 28.6900, "lng": 77.2300, "bearing": 40 },
    { "lat": 28.6880, "lng": 77.2310, "bearing": 50 },
    { "lat": 28.6850, "lng": 77.2320, "bearing": 60 },
    { "lat": 28.5985, "lng": 77.2289, "bearing": 70 }, // Red Fort

    // From Red Fort to Lotus Temple
    { "lat": 28.5985, "lng": 77.2289, "bearing": 0 }, // Red Fort
    { "lat": 28.6000, "lng": 77.2320, "bearing": 10 },
    { "lat": 28.6050, "lng": 77.2380, "bearing": 20 },
    { "lat": 28.6100, "lng": 77.2400, "bearing": 30 },
    { "lat": 28.6110, "lng": 77.2450, "bearing": 40 },
    { "lat": 28.6115, "lng": 77.2500, "bearing": 50 },
    { "lat": 28.6120, "lng": 77.2550, "bearing": 60 },
    { "lat": 28.6118, "lng": 77.2588, "bearing": 70 }  // Lotus Temple
];

const stopData = {
    "total": 8,
    "data": [
        { "lat": 28.6139, "lng": 77.2295, "id": "stop1" }, // India Gate
        { "lat": 28.6100, "lng": 77.2250, "id": "stop1.1" }, // Stop between India Gate and Qutub Minar
        { "lat": 28.6070, "lng": 77.2100, "id": "stop1.2" }, // Another stop
        { "lat": 28.5941, "lng": 77.1855, "id": "stop2" }, // Qutub Minar
        { "lat": 28.5910, "lng": 77.1860, "id": "stop2.1" }, // Stop between Qutub Minar and Connaught Place
        { "lat": 28.7041, "lng": 77.2184, "id": "stop3" }, // Connaught Place
        { "lat": 28.6020, "lng": 77.2230, "id": "stop3.1" }, // Stop between Connaught Place and Red Fort
        { "lat": 28.5985, "lng": 77.2289, "id": "stop4" }, // Red Fort
        { "lat": 28.6050, "lng": 77.2300, "id": "stop4.1" }, // Stop between Red Fort and Lotus Temple
        { "lat": 28.6118, "lng": 77.2588, "id": "stop5" }  // Lotus Temple
    ]
};


// Endpoint to get route data
app.get('/api/route', (req, res) => {
    res.json(routeData);
});

// Endpoint to get stop data
app.get('/api/stop', (req, res) => {
    res.json(stopData);
});

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
