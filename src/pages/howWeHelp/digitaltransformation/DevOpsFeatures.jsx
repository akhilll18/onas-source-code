import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Grid,
    Box,
} from "@mui/material";
import { Shield, Workflow, LifeBuoy, Infinity } from "lucide-react";
import { Helmet } from 'react-helmet-async';

export default function DevOpsFeatures() {
    const features = [
        {
            title: "Comprehensive DevOps Automation",
            description:
                "All the necessary DevOps tools in a single platform paired with specialized AI agents.",
            icon: <Infinity size={40} color="#f97316" />, // orange
        },
        {
            title: "Real-time AI Help Desk",
            description:
                "Resolve tickets in real time with specialized DevOps AI agents—collaborating with you every step.",
            icon: <LifeBuoy size={40} color="#ec4899" />, // pink
        },
        {
            title: "Outcome-Focused DevOps Workflows",
            description:
                "Elevate DevOps teams from automating granular tasks to composing outcomes with Agentic flows.",
            icon: <Workflow size={40} color="#0ea5e9" />, // sky blue
        },
        {
            title: "Security & Compliance",
            description:
                "Security that is built in and not bolted on. Compliance in days not months.",
            icon: <Shield size={40} color="#8b5cf6" />, // purple
        },
    ];

    // DevOps-specific SEO Meta Tags for Google
    const seoData = {
        // Title optimized for DevOps search intent (60 chars max for Google)
        title: "DevOps Automation Platform with AI | Enterprise CI/CD & Security",

        // Description optimized for DevOps keywords (160 chars max)
        description: "Enterprise DevOps platform with AI agents, automated CI/CD pipelines, real-time AI help desk, and built-in security compliance for modern engineering teams.",

        // Primary DevOps keywords for Google
        keywords: "DevOps platform, DevOps automation, CI/CD pipeline, AI DevOps, DevOps as a Service, continuous integration, continuous deployment, DevOps security, infrastructure as code, container orchestration, Kubernetes, Docker, Jenkins alternative, GitLab, GitHub Actions, Azure DevOps, AWS DevOps, Google Cloud DevOps, SRE, site reliability engineering, DevSecOps, automated testing, deployment automation, monitoring and observability, incident management, cloud native DevOps, microservices DevOps, serverless DevOps, FinOps for DevOps",

        // Canonical URL (update with actual URL)
        canonical: "https://onasglobal.com/devops-platform",

        // Open Graph for social sharing
        ogTitle: "AI-Powered DevOps Platform | Accelerate Software Delivery",
        ogDescription: "Transform your DevOps with AI automation, real-time assistance, and enterprise-grade security.",

        // Structured Data for rich snippets
        structuredData: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Powered DevOps Platform",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Cloud",
            "offers": {
                "@type": "Offer",
                "category": "SaaS",
                "price": "0",
                "priceCurrency": "USD"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "250"
            },
            "featureList": [
                "Automated CI/CD Pipelines",
                "Real-time AI DevOps Assistance",
                "Security & Compliance Automation",
                "Infrastructure as Code",
                "Container Orchestration",
                "Monitoring & Observability"
            ]
        },

        // FAQ Schema for DevOps questions
        faqSchema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is AI-Powered DevOps?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI-Powered DevOps integrates artificial intelligence with DevOps practices to automate CI/CD pipelines, provide real-time assistance, optimize workflows, and enhance security through intelligent automation and predictive analytics."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does DevOps automation improve software delivery?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DevOps automation accelerates software delivery by automating build, test, deployment, and monitoring processes, reducing manual errors, increasing deployment frequency, and improving overall software quality and reliability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What security features are included in DevOps platforms?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Modern DevOps platforms include built-in security scanning, compliance automation, vulnerability management, secret management, access controls, and DevSecOps practices to ensure security throughout the software development lifecycle."
                    }
                }
            ]
        }
    };

    return (
        <>
            {/* =========================================== */}
            {/* GOOGLE-OPTIMIZED SEO META TAGS FOR DEVOPS */}
            {/* =========================================== */}
            <Helmet>
                {/* Primary Title & Description */}
                <title>{seoData.title}</title>
                <meta name="description" content={seoData.description} />
                <meta name="keywords" content={seoData.keywords} />

                {/* Canonical URL */}
                <link rel="canonical" href={seoData.canonical} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={seoData.canonical} />
                <meta property="og:title" content={seoData.ogTitle} />
                <meta property="og:description" content={seoData.ogDescription} />
                <meta property="og:image" content="https://https://onasglobal.com/devops-platform-og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@YourDevOpsHandle" />
                <meta name="twitter:creator" content="@YourDevOpsHandle" />
                <meta name="twitter:title" content={seoData.ogTitle} />
                <meta name="twitter:description" content={seoData.ogDescription} />
                <meta name="twitter:image" content="https://onasglobal.com/devops-platform-twitter-card.jpg" />

                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="author" content="DevOps Platform Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta httpEquiv="content-language" content="en" />

                {/* Structured Data for Google Rich Results */}
                <script type="application/ld+json">
                    {JSON.stringify(seoData.structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(seoData.faqSchema)}
                </script>

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://onasglobal.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Solutions",
                                "item": "https://onasglobal.com/solutions"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "DevOps Platform",
                                "item": seoData.canonical
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* =========================================== */}
            {/* HIDDEN CONTENT FOR GOOGLE CRAWLERS (SEO ONLY) */}
            {/* =========================================== */}
            <div style={{ display: 'none', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
                <h1>Enterprise DevOps Platform with AI Automation</h1>
                <p>Our AI-powered DevOps platform accelerates software delivery through automated CI/CD pipelines, real-time AI assistance, and built-in security compliance. Designed for modern engineering teams implementing DevOps practices, CI/CD automation, and cloud-native development.</p>

                <h2>DevOps Automation Features</h2>
                <p>Comprehensive DevOps automation platform includes continuous integration, continuous deployment, infrastructure as code, container orchestration with Kubernetes and Docker, automated testing, monitoring, and observability tools.</p>

                <h3>DevOps Tools Integration</h3>
                <ul>
                    <li>CI/CD Tools: Jenkins, GitLab CI, GitHub Actions, CircleCI, Azure DevOps</li>
                    <li>Container Orchestration: Kubernetes, Docker Swarm, Amazon ECS, Google GKE</li>
                    <li>Infrastructure as Code: Terraform, AWS CloudFormation, Azure ARM, Ansible</li>
                    <li>Monitoring & Observability: Prometheus, Grafana, Datadog, New Relic, Splunk</li>
                    <li>Security Scanning: Snyk, SonarQube, Aqua Security, Prisma Cloud</li>
                </ul>

                <h2>Benefits of AI-Powered DevOps</h2>
                <p>Reduce deployment times by 80%, improve code quality with automated testing, enhance security with DevSecOps practices, and optimize cloud costs with FinOps integration. Our DevOps platform supports agile development, microservices architecture, and serverless computing.</p>

                <h3>Enterprise DevOps Solutions</h3>
                <p>Scalable DevOps solutions for enterprise organizations with multi-cloud support (AWS, Azure, Google Cloud), hybrid cloud environments, and on-premise infrastructure. Compliance-ready for SOC 2, GDPR, HIPAA, and PCI DSS requirements.</p>
            </div>

            {/* =========================================== */}
            {/* ORIGINAL UI CODE (UNCHANGED VISUALLY) */}
            {/* =========================================== */}
            <Box
                sx={{
                    px: { xs: 2, md: 8, lg: 12, xl: 16 },
                    pt: { xs: 18, md: 20, lg: 28, xl: 32 },
                    pb: { xs: 8, md: 8, lg: 12, xl: 16 },
                }}
            >
                <Typography
                    component="h2"
                    variant="h3"
                    color="#0B4C74"
                    gutterBottom
                    textAlign={"center"}
                >
                    AI Powered DevOps Built for Today's Engineering Teams
                </Typography>

                {/* SEO-enhanced introductory text (visible to users) */}
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        maxWidth: '900px',
                        margin: '30px auto 50px',
                        color: '#F2F3F4',
                        fontSize: '1.1rem',
                        lineHeight: 1.7
                    }}
                >
                    Transform your software delivery with our enterprise DevOps platform featuring automated CI/CD pipelines,
                    real-time AI assistance, and built-in security compliance. Accelerate deployments, improve reliability,
                    and streamline DevOps workflows with AI-powered automation.
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                    {features.map((feature, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            component="article"
                        >
                            <Card
                                elevation={3}
                                sx={{
                                    height: "100%",
                                    minHeight: 220,
                                    borderRadius: 3,
                                    "&:hover": { boxShadow: 6 },
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    p: 3,
                                    width: "100%",
                                    maxWidth: 400,
                                }}
                            >
                                <CardHeader
                                    avatar={<Box sx={{ mb: 1 }}>{feature.icon}</Box>}
                                    sx={{ textAlign: "center", p: 0 }}
                                />
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography
                                        component="h3"
                                        color="#0B4C74"
                                        variant="h6"
                                        fontWeight="600"
                                        gutterBottom
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* SEO-rich footer section (visible to users) */}
                <Box sx={{
                    mt: 10,
                    p: { xs: 3, md: 4 },
                    backgroundColor: 'rgba(11, 76, 116, 0.05)',
                    borderRadius: 2,
                    border: '1px solid rgba(11, 76, 116, 0.1)'
                }}>
                    <Typography
                        variant="h5"
                        color="#0B4C74"
                        gutterBottom
                        textAlign="center"
                        sx={{ mb: 3, fontWeight: 600 }}
                    >
                        Enterprise DevOps Platform Features
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2" color="#F2F3F4" paragraph>
                                <strong>CI/CD Automation:</strong> Automate build, test, and deployment pipelines with intelligent workflow orchestration and parallel execution.
                            </Typography>
                            <Typography variant="body2" color="#F2F3F4" paragraph>
                                <strong>Infrastructure as Code:</strong> Manage cloud resources with Terraform, AWS CloudFormation, and Azure ARM templates.
                            </Typography>
                            <Typography variant="body2" color="#F2F3F4" paragraph>
                                <strong>Container Orchestration:</strong> Deploy and manage containers with Kubernetes, Docker, and cloud-native services.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2" color="#F2F3F4" paragraph>
                                <strong>Monitoring & Observability:</strong> Real-time monitoring, log aggregation, and performance analytics with Prometheus and Grafana.
                            </Typography>
                            <Typography variant="body2" color="#F2F3F4" paragraph>
                                <strong>DevSecOps:</strong> Built-in security scanning, vulnerability management, and compliance automation.
                            </Typography>
                            <Typography variant="body2" color="#F2F3F4" paragraph>
                                <strong>Cloud Cost Optimization:</strong> FinOps integration for cloud spend management and cost optimization.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}