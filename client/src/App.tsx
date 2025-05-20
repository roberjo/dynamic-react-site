import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="*" element={<div>404 - Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App; 