import app from './app';
const PORT = 4001;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
} 

app.listen(PORT, handleListening);