import "./message.css";

export const Message = ({ message, right }) => {
  const formattedTime = formatTimestamp(message.timestamp);

  return (
    <div className={right ? "message right" : "message"}>
      {message.text}
      <div className="message-time">
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return formattedTime;
}
