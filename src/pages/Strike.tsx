
import { Link } from 'react-router-dom';

const Strike = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16 px-8 pb-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/portfolio" className="text-foreground hover:text-muted-foreground underline mb-8 inline-block">
          ← Back
        </Link>
        <h1 className="text-4xl font-bold mb-6 pb-4 text-center flex items-center justify-center border-b">
          Strike Network
          <img src="/STRIKELOGO.png" alt="Strike Logo" className="h-16 w-auto ml-4" />
        </h1>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">The NIL Opportunity</h3>
          <div className="text-muted-foreground">
            <p className="mb-4">
              The NIL market is expected to surpass $2.5 billion in revenue by 2026. With over 520,000 student athletes at over 1,100 schools participating in one of the fastest growing industries that is uniquely tailored to our generation's interests, I felt that I needed to leave my mark on this space. I have been playing sports since I was just a little kid. Starting with Judo at age 6, swimming at age 9, soccer at age 13, powerlifting at age 16, and boxing since 19, I have trained in a wide variety of athletic activities, both in terms of their physical demands and culture. Through the years, I have witnessed talent in these sports at some of the highest levels, with one problem being glaringly obvious: there was no way for this talent to reach out and be noticed by the rest of the world. Imagine if Lionel Messi never got scouted in his village in Argentina, or LeBron James never got the support he needed in high school, or Tom Brady never got his second chance at football - we might have never seen the incredible talent that these individuals hold, blossom to their fullest potential. Every day, we walk past a potential world-class athlete that might never reach their potential. However, with the exposure, support, and freedom to grow that NIL deals provide to athletes, Strike might be to increase the amount of world–class athletes we do walk by.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mb-16">
            <img src="/4.jpg" alt="Testimonial 1" className="max-w-[32%] rounded-lg" />
            <img src="/1.jpg" alt="Testimonial 2" className="max-w-[32%] rounded-lg" />
            <img src="/6.jpg" alt="Testimonial 3" className="max-w-[32%] rounded-lg" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Building the Platform</h3>
          <div className="text-muted-foreground">
            <p className="mb-4">
              At Strike, we asked the question "what if we removed the intermediaries and gave athletes the tools to negotiate, collaborate, and tap into brand deals with complete transparency?". We thought about it a little, and then we built it. With my team of 3, that consists of every partner being an entrepreneur, athlete, and student, we architected a platform built for college athletes, by college athletes. A platform that can be utilized by any business, because we understand the difficulties of getting your name out there. We began by first envisioning what Strike would look like, from the color scheme down to the features it would hold. We used Notion to stay organized, Figma to draw up wireframes of how all the different pages would look like, Zoom to stay in contact with each other on weekly meetings, and finally our shared passion to muster up the motivation to build. After 2 months of ideating and filtering through concepts, we released word about our vision. Although it may have been preemptive, and possibly a dangerous idea considering someone could just steal, we had confidence in our execution. For 6 months after that, my software engineering partner and I worked tirelessly to code up our vision. We utilized emerging AI technologies in Stable Diffusion Art to prototype our UI, Agentic Coding assistants to build out the scaffolding for our backend systems, and battle-tested software services to fortify our security and database needs. At this point in time, new AI coding models were coming out on a bi-weekly basis, each one exponentially better than the last. Given that we were only a team of 2 guys building out a a full-stack application, both us doing this for the first time and learning as we go, we made a lot of mistakes. Weeks of work had to be deleted if a fatal mistake became apparent, entire integrations had to be refactored if the functionality was off, and dozens of frontend web-pages had to be restyled as we curated the aesthetic of our brand. We build out secure authentication, real-time messaging, live data updates, payment processing, deliverable tracking, and dynamically scaling database systems to handle every athlete and business that would want to experience the future of NIL.
            </p>
          </div>
          
          <div className="flex justify-center mt-4 mb-16">
            <img src="/render.png" alt="Strike Network Platform" className="max-w-[70%] rounded-lg" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Launch and Growth</h3>
          <div className="text-muted-foreground">
            <p>
            Finally, on July 26th, 2025, Strike Network was officially released to the public. After 9 months of hard work, we revealed our vision to the world. LinkedIn posts were made, marketing videos were published, waitlist participants were notified, and every single family-member was called to give our platform a shot. And honestly, launch day went a lot better than we expected. The website didn't crash, we didn't get hacked, and people had positive words to say, which I consider an absolute win. That launch was almost 4 months ago, and I've learned so much since then. With over 350 athletes and 60 businesses currently active on Strike, we have been able to gather invaluable feedback which we will leverage to make our website the biggest NIL platform in the world. With a mobile app coming soon, and lots of new features on the horizon, we won't stop until every college athlete has a deal, and every business can find generational talent, all in one place. We are building the future, the future is <a href="https://strikentwrk.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline font-semibold">strikentwrk.com</a>
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link to="/" className="text-foreground hover:text-muted-foreground underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Strike;

