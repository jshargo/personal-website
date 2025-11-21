
import { Link } from 'react-router-dom';

const Dietbot = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16 px-8 pb-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/portfolio" className="text-foreground hover:text-muted-foreground underline mb-8 inline-block">
          ← Back
        </Link>
        <div className="mb-6 pb-4 text-center border-b">
          <h1 className="text-4xl font-bold">Dietitian Chatbot Research Project</h1>
          <p className="mt-2 text-xs text-muted-foreground italic">
            J. Shargo, C. Ortiz and N. Tomuro, "Enhancing Dynamic Personalization in Dietitian Agents with RAG and Medical Dialogue Fine-Tuning," 2025 IEEE International Conference on eScience (eScience), Chicago, IL, USA, 2025, pp. 359-360, doi: 10.1109/eScience65000.2025.00070.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">The Problem with Nutrition Access</h3>
          <div className="text-muted-foreground">
            <p className="mb-4">
            Keeping consistently good nutrition and healthy habits is the best way to avoid preventable diet-related diseases. In keeping a healthy mind, body, and soul, comes with keeping a healthy gut as well. This domain isn't just a small part of my life either. It shows up in family group chats, at doctor visits, and in friends asking for "just a simple meal plan" that actually fits their life. However, most people that want to lead a healthy lifestyle simply do not have the resources or knowledge necessary to get started. Registered dietitians can help, but getting in the door can sometimes <a href="https://pubmed.ncbi.nlm.nih.gov/37734749/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">take weeks</a>, and even then the time is short and scattered. Meanwhile, people turn to <a href="https://www.mdpi.com/2072-6643/16/4/469" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">chatbots</a> because they're always on... only to get advice that's vague, outdated, or oddly cold. I wanted to build something different: a nutrition assistant that's fast but careful, factual but human, and personal enough to feel like it actually knows you and remembers what you told it yesterday. So I set out to build an LLM system that doesn't just answer, but makes you feel like it's on your side
            </p>
          </div>
          
          <div className="flex justify-center mt-4 mb-16">
            <img src="/diagram.png" alt="Dietitian Chatbot System Architecture" className="max-w-[80%] rounded-lg" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Building an Agentic RAG System</h3>
          <div className="text-muted-foreground">
            <p className="mb-4">
            Plenty of smart folks have already pushed two big ideas. First, if you ground a model in a trustworthy knowledge base utilizing Retrieval Augmented Generation (RAG), you can tamp down hallucinations and keep answers tied to real sources. Second, if you fine-tune on empathetic conversations, the tone shifts from <a href="https://arxiv.org/abs/2507.02537" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">robotic to supportive</a>. Both are good starts, but when you stitch them together into an actual product people use day after day, you hit real-world frictions. Personalization falls through the cracks, the system forgets who it's talking to, and "summarize everything" prompts can make replies feel clipped and less caring. I, along with my AI Research team at DePaul University took those lessons, kept what worked, and refused to ship something that felt generic. We started by building a web-app that looks and feels like a familiar chat, but under the hood is an agentic system with clear jobs and boundaries. The main orchestrator (we call her "Ms. Potts") listens to what you ask and routes it to the right lane: Meal Logging, Meal Advice, Health Advice, or Education. For answers that should be grounded in evidence, "Jarvis" (our RAG backend) pulls from a curated knowledge base focused on verified nutritional guidelines, builds context, and hands back a clean, cited prompt to the model.
            </p>
          </div>
          
          <div className="flex justify-center mt-4 mb-16">
            <img src="/chat.png" alt="DietBot Chat Interface" className="max-w-full rounded-lg" />
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Implementation and Results</h3>
          <div className="text-muted-foreground">
            <p>
              The LLM we used is Google's Gemma-3 LLM, which we then fine-tuned on about two thousand real clinician–patient transcripts so the voice sounds like a helpful human, not a search engine readout. On top of that, we layered dynamic personalization: the system recognizes you at run time, keeps your preferences and restrictions in memory, tracks meals you log, and uses all of it to tailor suggestions. Guardrails were very important to us as well, so we made "I don't know" a feature, not a failure. If the knowledge base can't back an answer, the bot asks you to rephrase or narrows the question instead of hallucinating a response that only sounds correct. Essentially, that meant treating answerability like a small binary classification problem. We generated a 100-question test set (50 answerable, 50 unanswerable), tuned thresholds, and watched for when the system should pass or punt. We also kept the product pieces simple on purpose with a clean chat UI, a single orchestrator, explicit tools per intent, and a retrieval layer that's transparent. First, the guardrail test worked. On that 100-question set, the best configuration hit 0.76 accuracy at telling when to answer and when to step back, good enough that the bot feels trustworthy instead of overly cautious or recklessly confident. Second, we ran a head-to-head with a plain baseline and used an independent <a href="https://arxiv.org/abs/2406.18403" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">LLM as a judge</a>. Same questions in, different systems out, the judge scored each reply for factual accuracy and empathy. The version of DietBot without aggressive "TLDR" constraints did the best across the board: highest factual pass rate (about seventy-two percent), a stronger average fact-check score, and the warmest empathy score. It also hallucinated the least and delivered the <a href="https://pubmed.ncbi.nlm.nih.gov/39747685/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">"strongest"</a> responses that were both accurate and genuinely supportive. The takeaway surprised even us. Good retrieval doesn't just improve accuracy, but it actually boosts empathy as well, due to the model spending its words on you instead of just jargon. Meanwhile, forcing replies to be too short made them feel colder and, ironically, more error-prone. Some of our best answers are still a little verbose, so we're exploring supervised fine-tuning on labeled health Q&A to tighten phrasing without losing warmth. To sum up, we built a system that knows when to speak up, when to slow down, and how to talk to you like a person. All while providing accurate and personalized health advice, packaged up into a single response.
            </p>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-foreground mt-12">Conference Presentation</h3>
        <div className="text-muted-foreground">
            <p>
            Then, on September 16th, I had the pleasure of presenting this project as a research poster at the IEEE eScience 2025 Conference. I presented it along with my talented research team of Dr. Noriko Tomuro and Carlos Ortiz, marking my first ever research presentation. You can reference the full conference poster that I presented <a href="https://ieeexplore.ieee.org/document/11181516" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline">here</a>.
            </p>
          </div>
          
          <div className="flex justify-center mt-4">
            <img src="/photo.jpeg" alt="Conference Poster Presentation" className="max-w-full rounded-lg" />
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

export default Dietbot;

