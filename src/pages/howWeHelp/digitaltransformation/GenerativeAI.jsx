import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

import RevolutionImg from '../../../assets/images/howWeHelp/GenAI/revolution.png';
import ImpactImg from '../../../assets/images/howWeHelp/GenAI/impact.png';
import NewyorkImg from '../../../assets/images/howWeHelp/GenAI/newyork.png';
import InfographicImg from '../../../assets/images/howWeHelp/GenAI/infographic.png';
import BKImg from '../../../assets/images/howWeHelp/GenAI/bk.png';
import TechEvolveImg from '../../../assets/images/howWeHelp/GenAI/techevolve.png';
import ThinkImg from '../../../assets/images/howWeHelp/GenAI/think.png';
import DeepDiveImg from '../../../assets/images/howWeHelp/GenAI/deepdive.png';
import ArticleImg from '../../../assets/images/howWeHelp/GenAI/article.png';
import MultiAgentImg from '../../../assets/images/howWeHelp/GenAI/multiagent.png';
import JobImg from '../../../assets/images/howWeHelp/GenAI/job.png';
import HinderImg from '../../../assets/images/howWeHelp/GenAI/hinder.png';
import FutureImg from '../../../assets/images/howWeHelp/GenAI/future.png';
import RethinkImg from '../../../assets/images/howWeHelp/GenAI/rethink.png';
import ConsumerImg from '../../../assets/images/howWeHelp/GenAI/consumer.png';
import PublicFacImg from '../../../assets/images/howWeHelp/GenAI/publicfac.png';

const sections = [
  {
    title: "The generative AI revolution",
    text: "Dive into our latest thought leadership to uncover gen AI's wide-ranging impacts across industries—and its transformative potential.",
    image: RevolutionImg,
    type: "Insight"
  },
  {
    title: "The global impact of generative AI",
    text: "Here's a comprehensive look at macroeconomic and societal implications of gen AI and how it will impact productivity on a global scale.",
    tag: "INTERACTIVE REPORT",
    image: ImpactImg,
    type: "Report"
  },
  {
    title: "New work, new world",
    text: "Gen AI could deliver more than $1 trillion in annual growth by 2032, while disrupting up to 90% of jobs. Navigate this upheaval by investing in people.",
    tag: "INTERACTIVE REPORT",
    cta: "Read the interactive report",
    image: NewyorkImg,
    link: "https://www.cognizant.com/us/en/gen-ai-economic-model-oxford-economics",
    type: "Report"
  },
  {
    title: "Gen AI momentum: accelerators and inhibitors",
    text: "By understanding the biggest barriers inhibiting gen AI adoption, businesses can continue to generate momentum and realize the powerful productivity gains it has to offer.",
    tag: "DEEP DIVE",
    image: DeepDiveImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/gen-ai-strategy-wf2851465",
    type: "DeepDive"
  },
  {
    title: "What businesses need to know",
    text: "Take a look into the near future of orchestrated AI, when AI agents begin to talk to each other. Learn how to get your business started.",
    tag: "INTERACTIVE REPORT",
    cta: "Know more",
    image: BKImg,
    link: "https://www.cognizant.com/us/en/generative-ai-future-of-work",
    type: "Report"
  },
  {
    title: "Tech evolution",
    text: "Gen AI creates business opportunities in unprecedented ways. But tech teams must see things in a completely new light to seize the prospects.",
    tag: "INTERACTIVE REPORT",
    image: TechEvolveImg,
    type: "Report"
  },
  {
    title: "Think like an AI native",
    text: "Existing businesses can't become AI natives themselves, but they need to stay vigilant as these AI upstarts seize new market opportunities. By actively studying how AI-native businesses put AI into the core of their operations and technology, established companies can reap the benefits of thinking and acting like their newest competitors.",
    tag: "INTERACTIVE REPORT",
    cta: "Know more",
    image: ThinkImg,
    link: "https://www.cognizant.com/us/en/ai-native-business",
    type: "Report"
  },
  {
    title: "AI integration strategies for modern tech stacks",
    text: "Remain competitive within an AI-native world with four integration strategies that can help transform processes and create innovative product offerings.",
    tag: "INFOGRAPHIC",
    cta: "Know more",
    image: InfographicImg,
    link: "https://www.cognizant.com/en_us/insights/documents/cognizant-ai-integration-strategies-for-modern-tech-stacks.pdf",
    type: "Infographic"
  },
  {
    title: "Technology lessons from AI natives",
    text: "Learn how traditional businesses can compete with emerging AI-native businesses.",
    tag: "ARTICLE",
    cta: "Know more",
    image: ArticleImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/businesses-prepare-for-ai-natives-wf2777725",
    type: "Article"
  },
  {
    title: "Multi-agent AI is set to revolutionize enterprise operations",
    text: "AI's killer function is coming, and it could transform business operations sooner than you think. Uncover how AI agents are breaking down silos and connecting disparate software to create a single-interface enterprise operations platform.",
    cta: "Know more",
    image: MultiAgentImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/multi-agent-ai-to-revolutionize-enterprise-operations",
    type: "Article"
  },
  {
    title: "Jobs and skilling",
    text: "Gen AI is set to shake up the job market, displacing some and prompting others to reskill.",
    tag: "ARTICLE",
    image: JobImg,
    type: "Article"
  },
  {
    title: "Will gen AI help or hinder women?",
    text: "The skewed impact of gen AI on women in the workplace cannot be ignored. Businesses must implement actions now to address this imbalance.",
    tag: "ARTICLE",
    cta: "Know more",
    image: HinderImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/gen-ai-impact-on-women-in-the-workplace-wf2458851",
    type: "Article"
  },
  {
    title: "Future of human skills",
    text: "HR leaders face a mammoth task in guiding their people through a period of adjustment—helping to work with gen AI and not against it.",
    tag: "ARTICLE",
    cta: "Know more",
    image: FutureImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/the-people-who-will-thrive-as-ai-transforms-the-enterprise-wf2233399",
    type: "Article"
  },
  {
    title: "Generative AI requires a skills rethink",
    text: "Gen AI is reshaping workforce skills, shining a spotlight on critical thinking, communication and decision-making.",
    tag: "ARTICLE",
    cta: "Know more",
    image: RethinkImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/generative-ai-in-the-workforce-wf2343510",
    type: "Article"
  },
  {
    title: "Building consumer trust in AI",
    text: "Only a third of consumers trust gen AI. But with the right approach, businesses can build strategies to win their hearts and minds.",
    tag: "DEEP DIVE",
    image: ConsumerImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/building-consumer-trust-in-ai-wf2729750",
    cta: "Know more",
    type: "DeepDive"
  },
  {
    title: "Public-facing gen AI: Five tips to overcome skepticism",
    text: "Businesses must work to build a solid foundation of trust for their customers—from the very start of their AI adoption journey.",
    image: PublicFacImg,
    link: "https://www.cognizant.com/us/en/insights/insights-blog/5-tips-to-overcome-public-skepticism-of-gen-ai-wf2501119",
    type: "Article"
  },
];

export default function GenerativeAI() {
  const [expanded, setExpanded] = useState({});
  const baseUrl = window.location.origin;

  // Generate structured data for all articles
  const articleStructuredData = sections.map((article, index) => ({
    "@type": "Article",
    "headline": article.title,
    "description": article.text,
    "image": article.image,
    "datePublished": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "ONAS",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.link || `${baseUrl}/generative-ai#article-${index}`
    }
  }));

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Generative AI and how is it different from traditional AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generative AI creates new content (text, images, code) while traditional AI analyzes and classifies existing data. Generative models like GPT-4, DALL-E, and Midjourney can produce original outputs based on patterns learned from training data."
        }
      },
      {
        "@type": "Question",
        "name": "How is Generative AI impacting businesses and industries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generative AI is transforming businesses by automating content creation, enhancing customer experiences, accelerating R&D, optimizing operations, and creating new business models across healthcare, finance, retail, manufacturing, and technology sectors."
        }
      },
      {
        "@type": "Question",
        "name": "What are the risks and challenges of implementing Generative AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key challenges include data privacy concerns, model bias, intellectual property issues, security vulnerabilities, ethical considerations, implementation costs, and the need for specialized talent and infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "How can businesses prepare for AI-native transformation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Businesses should develop AI strategies aligned with business goals, invest in data infrastructure, upskill employees, implement AI governance frameworks, start with pilot projects, and build partnerships with AI experts and solution providers."
        }
      }
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": `${baseUrl}/insights`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Generative AI",
        "item": `${baseUrl}/insights/generative-ai`
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Generative AI Insights & Research | Latest AI Trends & Business Impact 2024</title>
        <meta name="description" content="Explore comprehensive Generative AI insights, research reports, and industry analysis. Discover AI trends, business impact, implementation strategies, and future predictions for enterprise transformation." />
        <meta name="keywords" content="Generative AI, AI insights, ChatGPT, GPT-4, AI research, artificial intelligence, machine learning, AI business impact, AI implementation, AI strategy, enterprise AI, AI transformation, AI trends 2024, AI applications, AI ethics, AI governance, prompt engineering, large language models, LLMs, multimodal AI, AI agents, AI automation, AI workforce, AI productivity, AI innovation" />

        {/* Canonical */}
        <link rel="canonical" href={`${baseUrl}/insights/generative-ai`} />

        {/* Open Graph */}
        <meta property="og:title" content="Generative AI Insights & Research | Latest AI Trends & Business Impact 2024" />
        <meta property="og:description" content="Comprehensive Generative AI insights, research reports, and industry analysis for business leaders and AI practitioners." />
        <meta property="og:image" content={RevolutionImg} />
        <meta property="og:url" content={`${baseUrl}/insights/generative-ai`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ONAS Insights" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generative AI Insights & Research | Latest AI Trends" />
        <meta name="twitter:description" content="Explore comprehensive Generative AI insights and research for enterprise transformation." />
        <meta name="twitter:image" content={RevolutionImg} />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS AI Research Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Generative AI Insights Collection",
            "description": "Comprehensive collection of Generative AI research, reports, articles, and insights",
            "url": `${baseUrl}/insights/generative-ai`,
            "hasPart": articleStructuredData.slice(0, 5) // Limit to first 5 articles
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ONAS",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "sameAs": [
              "https://twitter.com/onasai",
              "https://linkedin.com/company/onas",
              "https://github.com/onas-ai"
            ],
            "description": "Leading AI research and consulting firm specializing in Generative AI solutions"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for better indexing */}
      <div style={{ display: 'none' }}>
        <h1>Generative AI Insights & Research</h1>
        <p>Comprehensive collection of Generative AI research, insights, reports, and articles covering AI trends, business impact, implementation strategies, and future predictions for enterprise transformation. Our Generative AI research includes analysis of large language models (LLMs), multimodal AI, AI agents, and practical applications across industries.</p>

        <h2>Generative AI Topics Covered</h2>
        <ul>
          <li>AI Business Strategy and Implementation</li>
          <li>Generative AI Economic Impact and ROI</li>
          <li>AI Workforce Transformation and Skills Development</li>
          <li>Ethical AI and Governance Frameworks</li>
          <li>AI-native Business Models and Competitive Advantage</li>
          <li>Multimodal AI and Advanced AI Applications</li>
          <li>AI Integration with Modern Technology Stacks</li>
          <li>Future of AI and Emerging AI Trends</li>
        </ul>

        <h3>Generative AI Technologies and Models</h3>
        <p>Our research covers leading Generative AI technologies including OpenAI GPT models, Google Gemini, Anthropic Claude, Meta Llama, Midjourney, Stable Diffusion, and enterprise AI solutions from Microsoft, Amazon, and Google Cloud.</p>
      </div>

      <Box
        sx={{
          px: { xs: 2, md: 8, lg: 12, xl: 16 },
          pt: { xs: 18, md: 20, lg: 28, xl: 32 },
          pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        }}
      >
        {/* Enhanced header with better semantic structure */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography component="h1" variant="h2" color="#0B4C74" sx={{
            mb: 3,
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' },
            background: 'linear-gradient(45deg, #0B4C74 30%, #2196f3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Generative AI Insights & Research
          </Typography>
          <Typography variant="h6" sx={{
               color: '#F2F3F4',
               maxWidth: '800px',
               mx: 'auto',
               mb: 2,
               fontSize: { xs: '1rem', md: '1.2rem' }
           }}>
               Comprehensive analysis of Generative AI trends, business impact, implementation strategies, and future predictions
           </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            maxWidth: '900px',
            color: '#F2F3F4',
            mx: 'auto',
            fontSize: '0.95rem'
          }}>
            Explore our collection of research reports, articles, deep dives, and interactive content on Generative AI transformation
          </Typography>
        </Box>

        {/* Stats section for better engagement */}
        <Grid container spacing={2} sx={{ mb: 6, justifyContent: 'center' }}>
          <Grid item xs={6} sm={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h4" color="#0B4C74" fontWeight="bold">15+</Typography>
              <Typography variant="body2" color="#F2F3F4" >AI Research Reports</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h4" color="#0B4C74" fontWeight="bold">$1T+</Typography>
              <Typography variant="body2" color="#F2F3F4" >Economic Impact</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h4" color="#0B4C74" fontWeight="bold">90%</Typography>
              <Typography variant="body2" color="#F2F3F4" >Jobs Impacted</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h4" color="#0B4C74" fontWeight="bold">2025</Typography>
              <Typography variant="body2" color="#F2F3F4" >Latest Research</Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {sections.map((sec, i) => (
            <Grid item xs="auto" sm={6} md={4} key={i} sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                itemScope
                itemType="http://schema.org/Article"
              >
                <Card sx={{
                  height: { xs: 'auto', sm: 550 },
                  width: { xs: '100%', sm: 345 },
                  borderRadius: 3,
                  boxShadow: 4,
                  display: "flex",
                  flexDirection: "column",
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 6
                  }
                }}>
                  {sec.image && (
                    <CardMedia
                      component="img"
                      height="160"
                      image={sec.image}
                      alt={`Generative AI insights: ${sec.title}`}
                      title={sec.title}
                      sx={{ objectFit: "cover" }}
                      itemProp="image"
                    />
                  )}

                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ minHeight: 24, mb: 1 }}>
                      {sec.tag && (
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 600,
                            color: sec.type === 'Report' ? "#673ab7" :
                                   sec.type === 'Article' ? "#4caf50" :
                                   sec.type === 'DeepDive' ? "#ff9800" : "#2196f3",
                            backgroundColor: 'rgba(103, 58, 183, 0.1)',
                            px: 1,
                            py: 0.5,
                            borderRadius: 1
                          }}
                          itemProp="articleSection"
                        >
                          {sec.tag}
                        </Typography>
                      )}
                    </Box>

                    <Typography
                      color="#0B4C74"
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 1 }}
                      itemProp="headline"
                    >
                      {sec.title}
                    </Typography>

                    <TruncatedText
                      text={sec.text}
                      isExpanded={expanded[i]}
                      toggleExpand={() => toggleExpand(i)}
                      itemProp="description"
                    />

                    <Box sx={{ mt: 'auto', pt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {sec.cta && (
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            borderRadius: 2,
                            textTransform: "none",
                            borderColor: '#0B4C74',
                            color: '#0B4C74',
                            '&:hover': {
                              backgroundColor: '#0B4C74',
                              color: 'white'
                            }
                          }}
                          onClick={() => {
                            if (sec.link?.startsWith("http")) window.open(sec.link, "_blank");
                          }}
                          aria-label={`Read more about ${sec.title}`}
                        >
                          {sec.cta}
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* SEO footer section */}
        <Box sx={{
          mt: 10,
          p: { xs: 3, md: 4 },
          backgroundColor: 'rgba(11, 76, 116, 0.05)',
          borderRadius: 3,
          border: '1px solid rgba(11, 76, 116, 0.1)',
          textAlign: 'center'
        }}>
          <Typography
            variant="h5"
            color="#0B4C74"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3 }}
          >
            About Our Generative AI Research
          </Typography>
          <Typography variant="body1" color="#F2F3F4" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}>
            Our Generative AI research provides data-driven insights and analysis on AI transformation, business impact,
            and implementation strategies. We cover the latest developments in large language models (LLMs),
            multimodal AI, AI agents, and enterprise AI adoption across industries including healthcare, finance,
            retail, and manufacturing.
          </Typography>
          <Typography variant="body2" color="#F2F3F4" sx={{ fontStyle: 'italic' }}>
            Stay updated with the latest Generative AI trends, research, and insights for informed decision-making
            and strategic AI implementation.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

// Responsive TruncatedText Component
export function TruncatedText({ text, isExpanded, toggleExpand, itemProp }) {
  const textRef = useRef();
  const [textExceedsLimit, setTextExceedsLimit] = useState(false);
  const [maxLines, setMaxLines] = useState(3);

  // Update maxLines based on screen width
  useEffect(() => {
    const updateLines = () => {
      if (window.innerWidth < 600) setMaxLines(4); // mobile
      else if (window.innerWidth < 900) setMaxLines(3); // tablet
      else setMaxLines(4); // desktop
    };
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextExceedsLimit(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [text, maxLines]);

  return (
    <Box>
      <Typography
        ref={textRef}
        variant="body2"
        itemProp={itemProp}
        sx={{
          color: "text.secondary",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? 'none' : maxLines,
          WebkitBoxOrient: "vertical",
          lineHeight: 1.6
        }}
      >
        {text}
      </Typography>

      {textExceedsLimit && (
        <Button
          size="small"
          variant="text"
          sx={{ textTransform: "none", p: 0, mt: 1, color: '#0B4C74' }}
          onClick={toggleExpand}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </Box>
  );
}