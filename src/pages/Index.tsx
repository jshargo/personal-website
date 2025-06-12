
import { useState } from 'react';
import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react';
import TerminalLoader from '@/components/TerminalLoader';
import SocialLink from '@/components/SocialLink';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && (
        <TerminalLoader onComplete={() => setShowContent(true)} />
      )}
      
      {showContent && (
        <div className="min-h-screen bg-background text-foreground pt-16 px-8 pb-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-12 opacity-0 fade-in-up">
              <h1 className="text-3xl font-bold mb-6 text-foreground">
                Josh Shargo
              </h1>
              
              <div className="mb-8">
                <p className="text-foreground mb-4">Currently building:</p>
                <div className="space-y-1 text-muted-foreground">
                  <p>&gt; AI agents for healthcare</p>
                  <p>&gt; Social media platforms for NIL</p>
                  <p>&gt; Machine learning models for sports predictions</p>
                </div>
              </div>

              <p className="text-foreground mb-4">
                If any of these initiatives resonate with you, reach me at: <a href="mailto:joshshargo@gmail.com" className="text-blue-500 hover:text-blue-400 underline font-semibold">joshshargo@gmail.com</a>
              </p>

              <hr className="my-6 border-muted-foreground/50" />

              <p className="text-foreground">
                You can checkout my other links here <ArrowDown className="inline-block w-5 h-5 ml-1 animate-bounce text-foreground" /> 
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4 mb-12">
              <SocialLink
                title="GitHub"
                description="My projects and contributions"
                href="https://github.com/jshargo"
                icon={<Github className="w-6 h-6" />}
                delay="delay-1"
              />
              
              <SocialLink
                title="LinkedIn"
                description="Connect with me here"
                href="https://linkedin.com/in/joshuashargo"
                icon={<Linkedin className="w-6 h-6" />}
                delay="delay-2"
              />
              
              <SocialLink
                title="Resume"
                description="My resume as of April 2025"
                href="/resume.pdf"
                icon={<FileText className="w-6 h-6" />}
                delay="delay-3"
              />
            </div>


            <div className="text-center mt-24 pt-8 border-t border-muted-foreground/20">
              <p className="text-xs text-muted-foreground opacity-60">
                &copy; {new Date().getFullYear()} Josh Shargo. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
