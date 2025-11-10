
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16 px-8 pb-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-foreground hover:text-muted-foreground underline mb-8 inline-block">
          ← Back
        </Link>
        <h1 className="text-4xl font-bold mb-12 text-center">Portfolio</h1>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground border-b pb-2">
            Dietitian Chatbot Research Project
          </h2>
          <div className="text-muted-foreground">
            <p className="mb-4">
            Keeping consistently good nutrition and healthy habits is the best way to avoid preventable diet-related diseases. In keeping a healthy mind, body, and soul, comes with keeping a healthy gut as well. This domain isn't just a small part of my life either. It shows up in family group chats, at doctor visits, and in friends asking for "just a simple meal plan" that actually fits their life. However, most people that want to lead a healthy lifestyle simply do not have the resources or knowledge necessary to get started. Registered dietitians can help, but getting in the door can sometimes <a href="https://pubmed.ncbi.nlm.nih.gov/37734749/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">take weeks</a>, and even then the time is short and scattered. Meanwhile, people turn to <a href="https://www.mdpi.com/2072-6643/16/4/469" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">chatbots</a> because they're always on... only to get advice that's vague, outdated, or oddly cold. I wanted to build something different: a nutrition assistant that's fast but careful, factual but human, and personal enough to feel like it actually knows you and remembers what you told it yesterday. So I set out to build an LLM system that doesn't just answer, but makes you feel like it's on your side
            </p>
          </div>
          
          <div className="flex justify-center mt-4 mb-16">
            <img src="/diagram.png" alt="Dietitian Chatbot System Architecture" className="max-w-[80%] rounded-lg" />
          </div>
          
          <div className="text-muted-foreground">
            <p className="mb-4">
            Plenty of smart folks have already pushed two big ideas. First, if you ground a model in a trustworthy knowledge base utilizing Retrieval Augmented Generation (RAG), you can tamp down hallucinations and keep answers tied to real sources. Second, if you fine-tune on empathetic conversations, the tone shifts from <a href="https://arxiv.org/abs/2507.02537" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">robotic to supportive</a>. Both are good starts, but when you stitch them together into an actual product people use day after day, you hit real-world frictions. Personalization falls through the cracks, the system forgets who it's talking to, and "summarize everything" prompts can make replies feel clipped and less caring. I, along with my AI Research team at DePaul University took those lessons, kept what worked, and refused to ship something that felt generic. We started by building a web-app that looks and feels like a familiar chat, but under the hood is an agentic system with clear jobs and boundaries. The main orchestrator (we call her "Ms. Potts") listens to what you ask and routes it to the right lane: Meal Logging, Meal Advice, Health Advice, or Education. For answers that should be grounded in evidence, "Jarvis" (our RAG backend) pulls from a curated knowledge base focused on verified nutritional guidelines, builds context, and hands back a clean, cited prompt to the model.
            </p>
          </div>
          
          <div className="flex justify-center mt-4 mb-16">
            <img src="/chat.png" alt="DietBot Chat Interface" className="max-w-full rounded-lg" />
          </div>
          
          <div className="text-muted-foreground">
            <p>
              The LLM we used is Google’s Gemma-3 LLM, which we then fine-tuned on about two thousand real clinician–patient transcripts so the voice sounds like a helpful human, not a search engine readout. On top of that, we layered dynamic personalization: the system recognizes you at run time, keeps your preferences and restrictions in memory, tracks meals you log, and uses all of it to tailor suggestions. Guardrails were very important to us as well, so we made “I don’t know” a feature, not a failure. If the knowledge base can’t back an answer, the bot asks you to rephrase or narrows the question instead of hallucinating a response that only sounds correct. Essentially, that meant treating answerability like a small binary classification problem. We generated a 100-question test set (50 answerable, 50 unanswerable), tuned thresholds, and watched for when the system should pass or punt. We also kept the product pieces simple on purpose with a clean chat UI, a single orchestrator, explicit tools per intent, and a retrieval layer that’s transparent. First, the guardrail test worked. On that 100-question set, the best configuration hit 0.76 accuracy at telling when to answer and when to step back, good enough that the bot feels trustworthy instead of overly cautious or recklessly confident. Second, we ran a head-to-head with a plain baseline and used an independent <a href="https://arxiv.org/abs/2406.18403" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">LLM as a judge</a>. Same questions in, different systems out, the judge scored each reply for factual accuracy and empathy. The version of DietBot without aggressive “TLDR” constraints did the best across the board: highest factual pass rate (about seventy-two percent), a stronger average fact-check score, and the warmest empathy score. It also hallucinated the least and delivered the <a href="https://pubmed.ncbi.nlm.nih.gov/39747685/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">"strongest"</a> responses that were both accurate and genuinely supportive. The takeaway surprised even us. Good retrieval doesn’t just improve accuracy, but it actually boosts empathy as well, due to the model spending its words on you instead of just jargon. Meanwhile, forcing replies to be too short made them feel colder and, ironically, more error-prone. Some of our best answers are still a little verbose, so we’re exploring supervised fine-tuning on labeled health Q&A to tighten phrasing without losing warmth. To sum up, we built a system that knows when to speak up, when to slow down, and how to talk to you like a person. All while providing accurate and personalized health advice, packaged up into a single response.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground border-b pb-2 flex items-center">
            Strike Network
            <img src="/STRIKELOGO.png" alt="Strike Logo" className="h-12 w-auto ml-4" />
          </h2>
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
          
          <div className="text-muted-foreground">
            <p className="mb-4">
              At Strike, we asked the question "what if we removed the intermediaries and gave athletes the tools to negotiate, collaborate, and tap into brand deals with complete transparency?". We thought about it a little, and then we built it. With my team of 3, that consists of every partner being an entrepreneur, athlete, and student, we architected a platform built for college athletes, by college athletes. A platform that can be utilized by any business, because we understand the difficulties of getting your name out there. We began by first envisioning what Strike would look like, from the color scheme down to the features it would hold. We used Notion to stay organized, Figma to draw up wireframes of how all the different pages would look like, Zoom to stay in contact with each other on weekly meetings, and finally our shared passion to muster up the motivation to build. After 2 months of ideating and filtering through concepts, we released word about our vision. Although it may have been preemptive, and possibly a dangerous idea considering someone could just steal, we had confidence in our execution. For 6 months after that, my software engineering partner and I worked tirelessly to code up our vision. We utilized emerging AI technologies in Stable Diffusion Art to prototype our UI, Agentic Coding assistants to build out the scaffolding for our backend systems, and battle-tested software services to fortify our security and database needs. At this point in time, new AI coding models were coming out on a bi-weekly basis, each one exponentially better than the last. Given that we were only a team of 2 guys building out a a full-stack application, both us doing this for the first time and learning as we go, we made a lot of mistakes. Weeks of work had to be deleted if a fatal mistake became apparent, entire integrations had to be refactored if the functionality was off, and dozens of frontend web-pages had to be restyled as we curated the aesthetic of our brand. We build out secure authentication, real-time messaging, live data updates, payment processing, deliverable tracking, and dynamically scaling database systems to handle every athlete and business that would want to experience the future of NIL.
            </p>
          </div>
          
          <div className="flex justify-center mt-4 mb-16">
            <img src="/render.png" alt="Strike Network Platform" className="max-w-[70%] rounded-lg" />
          </div>
          
          <div className="text-muted-foreground">
            <p>
            Finally, after 9 months of work, Strike Network was officially released to the public. LinkedIn posts were made, marketing videos were published, waitlist participants were notified, and every single family-member was called to give our platform a shot. And honestly, launch day went a lot better than we expected. The website didn't crash, we didn't get hacked, and people had positive words to say, which I consider an absolute win. That launch was almost 4 months ago, and I've learned so much since then. With over 350 athletes and 60 businesses currently active on Strike, we have been able to gather invaluable feedback which we will leverage to make our website the biggest NIL platform in the world. With a mobile app coming soon, and lots of new features on the horizon, we won't stop until every college athlete has a deal, and every business can find generational talent, all in one place. We are building the future, the future is <a href="https://strikentwrk.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline font-semibold">strikentwrk.com</a>
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

export default Portfolio;
