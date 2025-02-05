import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './chatList.css';

function ChatList() {
    const { isPending, error, data } = useQuery({
        queryKey: ['userChats'],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/userchats`,
                {
                    credentials: 'include',
                }
            );
            return res.json();
        },
    });
    return (
        <div className="chatList">
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard">Create new Chat</Link>
            <Link to="/">Explore Lama AI</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className="title">RECENT CHAT</span>
            <div className="list">
                {isPending
                    ? 'Loading...'
                    : error
                    ? 'Something went wrong!'
                    : data?.map((chat) => (
                          <Link
                              to={`/dashboard/chats/${chat._id}`}
                              key={chat._id}
                          >
                              {chat.title}
                          </Link>
                      ))}
            </div>
            <hr />
            <div className="upgrade">
                <img src="/logo.png" alt="" />
                <div className="texts">
                    <span>Upgrade to Lama AI Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    );
}

export default ChatList;
