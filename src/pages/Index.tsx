import { useNavigate } from 'react-router-dom';
import { MessageCircle, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import zebraAvatar from '@/assets/zebra-avatar.jpg';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={zebraAvatar} alt="Zebra AI" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-semibold">Zebra AI</h1>
          </div>
          <Button onClick={() => navigate('/chat')} className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Start Chat
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
            <img src={zebraAvatar} alt="Zebra AI" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Meet Zebra AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your intelligent assistant powered by advanced AI. Clean, minimal, and designed for seamless conversations.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/chat')}
            className="gap-2 text-lg px-8 py-6"
          >
            <MessageCircle className="h-5 w-5" />
            Start Chatting
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Quick responses with minimal design for maximum productivity
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground text-sm">
                Your conversations are protected with enterprise-grade security
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Intuitive Interface</h3>
              <p className="text-muted-foreground text-sm">
                Clean, Instagram-inspired design that feels familiar and natural
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
