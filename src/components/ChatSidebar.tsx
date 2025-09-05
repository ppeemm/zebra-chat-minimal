import { useState } from 'react';
import { MessageSquare, Plus, MoreHorizontal, Trash2, Edit3, Home, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ChatHistory {
  id: string;
  title: string;
  timestamp: string;
  preview: string;
}

const ChatSidebar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('You');
  const [tempName, setTempName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const [chatHistory] = useState<ChatHistory[]>([
    {
      id: '1',
      title: 'Getting Started',
      timestamp: '2 hours ago',
      preview: 'How can I help you today?'
    },
    {
      id: '2', 
      title: 'Project Planning',
      timestamp: 'Yesterday',
      preview: 'Let me help you plan your project...'
    },
    {
      id: '3',
      title: 'Technical Questions',
      timestamp: '3 days ago', 
      preview: 'I can assist with technical questions...'
    }
  ]);

  const [activeChat, setActiveChat] = useState('1');

  const handleNameChange = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
      setTempName('');
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="w-64 h-full bg-sidebar-bg border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex gap-2 mb-3">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                {userName}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Change Your Name</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Input
                  placeholder="Enter your name"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNameChange()}
                />
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleNameChange}>
                    Save
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2 bg-background hover:bg-sidebar-hover transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Chat History */}
      <ScrollArea className="flex-1 px-2 py-2">
        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`group relative rounded-lg p-3 cursor-pointer transition-colors ${
                activeChat === chat.id 
                  ? 'bg-sidebar-hover' 
                  : 'hover:bg-sidebar-hover'
              }`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                    <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mb-1">
                    {chat.preview}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {chat.timestamp}
                  </span>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit3 className="h-3 w-3 mr-2" />
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-3 w-3 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;