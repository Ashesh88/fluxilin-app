'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: '1',
  sender: 'bot',
  text: "Hi there! 👋 I'm Fluxi, your virtual assistant. How can I help you today?",
};

const FAQ_OPTIONS = [
  { text: 'What services do you offer?', reply: 'We offer influencer matchmaking, UGC content creation, full campaign management, and performance tracking.' },
  { text: 'How do I join as a creator?', reply: 'Awesome! You can apply using the "For Creators" button in the navigation bar to fill out our onboarding form.' },
  { text: 'What is your pricing?', reply: 'Our pricing is custom based on the campaign scale and deliverables. We recommend chatting with us on WhatsApp for a quick estimate!' },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Simulate bot thinking and replying
    setTimeout(() => {
      let botReplyText = "Thanks for reaching out! For detailed inquiries, we recommend connecting with us directly on WhatsApp.";
      
      // Check if it's an FAQ match
      const faqMatch = FAQ_OPTIONS.find(opt => opt.text.toLowerCase() === text.toLowerCase());
      if (faqMatch) {
        botReplyText = faqMatch.reply;
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: botReplyText };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-full shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105"
        aria-label="Open Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-h-[500px] flex flex-col bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#6366F1] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#A3E635] rounded-full animate-pulse" />
                <h3 className="font-semibold">Fluxilin Support</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base/50 min-h-[250px] max-h-[300px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#6366F1] text-white rounded-br-sm'
                        : 'bg-card text-main border border-border-subtle rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* FAQ Chips */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-xs text-muted font-medium mb-1">Suggested questions:</p>
                  {FAQ_OPTIONS.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(faq.text)}
                      className="text-left text-xs text-[#6366F1] hover:text-[#4F46E5] bg-[#6366F1]/10 hover:bg-[#6366F1]/20 px-3 py-2 rounded-lg transition-colors border border-[#6366F1]/20"
                    >
                      {faq.text}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input & WhatsApp Action Area */}
            <div className="p-3 bg-surface border-t border-border-subtle flex flex-col gap-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-card border border-border-subtle rounded-xl px-4 py-2 text-sm text-main placeholder-muted focus:outline-none focus:border-[#6366F1] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-[#6366F1] text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4F46E5] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/919214645840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-sm font-medium rounded-xl transition-colors border border-[#25D366]/20"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
