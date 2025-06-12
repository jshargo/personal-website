
import { useState, useEffect } from 'react';

interface TerminalLoaderProps {
  onComplete: () => void;
}

const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    'Initializing connection...',
    'Authenticating user...',,
    'Routing...',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < lines.length - 1) {
        setCurrentLine(currentLine + 1);
      } else {
        setTimeout(() => {
          setShowCursor(false);
          onComplete();
        }, 400);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentLine, lines.length, onComplete]);

  return (
    <div className="terminal-flash fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-left space-y-2">
        <div className="text-red-500 mb-4">$ accessing_profile.sh</div>
        {lines.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="text-foreground">
            {line}
          </div>
        ))}
        {showCursor && (
          <span className="terminal-cursor text-red-500">█</span>
        )}
      </div>
    </div>
  );
};

export default TerminalLoader;
