import chat from '../styles/Chat.module.css';

export const Chat = () => {

    
    const HandelMessage = (e) => {
        e.preventDefault();
    }
    return (
        <div className={chat.root}>
            <form>
                <div className={chat.bar}>
                    <input className={chat.input} autoComplete="off"></input>
                    <button className={chat.button} type="submit" onClick={HandelMessage}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Chat;