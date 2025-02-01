import { useAuth } from '@clerk/clerk-react';
import './dashboardPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in');
        }
    }, [isLoaded, userId, navigate]);

    if (!isLoaded) return 'Loading...';
    
    return <div className="dashboardPage">DashboardPage</div>;
};

export default DashboardPage;
