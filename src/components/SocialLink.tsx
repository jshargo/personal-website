
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLinkProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  delay?: string;
}

const SocialLink = ({ title, description, href, icon, delay = '' }: SocialLinkProps) => {
  const isInternal = href.startsWith('/');

  const Component = isInternal ? Link : 'a';
  const props = isInternal 
    ? { to: href } 
    : { href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Component
      {...props}
      className={`group block p-6 bg-card border border-border rounded-lg hover:bg-accent transition-all duration-300 hover:border-foreground opacity-0 fade-in-up ${delay}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </Component>
  );
};

export default SocialLink;
