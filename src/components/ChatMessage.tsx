import { User, Bot } from 'lucide-react';
import zebraAvatar from '@/assets/zebra-avatar.jpg';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={`flex gap-4 p-6 ${isUser ? 'bg-background' : 'bg-chat-bot'}`}>
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shadow-sm">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm">
            <img 
              src={zebraAvatar} 
              alt="Zebra AI Assistant" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">
            {isUser ? 'You' : 'Zebra AI'}
          </span>
          <span className="text-xs text-muted-foreground">
            {timestamp}
          </span>
        </div>
        
        <div className="prose prose-sm max-w-none">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;