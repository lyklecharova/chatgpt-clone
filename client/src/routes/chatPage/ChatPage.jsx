import './chatPage.css';
import NewPrompt from '../../components/newPrompt/NewPrompt';

const ChatPage = () => {
    return (
        <div className="chatPage"> 
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Test message from AI</div>
                    <div className="message user">
                        Test message from user Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Consequuntur rerum quo
                        mollitia incidunt, iste beatae aliquam atque autem velit
                        itaque temporibus perferendis. Eos suscipit,
                        voluptatibus laborum aliquid veritatis sit culpa?
                    </div>
                    <div className="message ">Test message from AI</div>
                    <div className="message user">Test message from user</div>

                    <div className="message">Test message from AI</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ">Test message from AI</div>
                    <div className="message user">Test message from user</div>

                    <div className="message">Test message from AI</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ">Test message from AI</div>
                    <div className="message user">Test message from user</div>

                    <div className="message">Test message from AI</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ">Test message from AI</div>
                    <div className="message user">Test message from user</div>
                    <NewPrompt/>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
