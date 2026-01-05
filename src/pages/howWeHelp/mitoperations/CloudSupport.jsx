import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Cloud, BarChart3, Wrench, Zap, Shield, Layers, Database } from 'lucide-react';
import CloudHero from '../../../assets/images/howWeHelp/mitoper/cloudsupport.png';
import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/mitoper/cloudsupport/img4.jpg';

const CloudSupport = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/cloud-support`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'Cloud Support Services | 24/7 Cloud Management & Optimization 2024',
    description: 'Professional cloud support services: cloud monitoring, optimization, security, backup, IaC support for AWS, Azure, GCP. 24/7 cloud management and cost optimization.',
    keywords: 'cloud support services, cloud management, cloud optimization, cloud monitoring, AWS support, Azure support, Google Cloud support, cloud security, cloud backup, infrastructure as code, cloud cost optimization, multi-cloud support, hybrid cloud support, cloud consulting, cloud managed services, cloud infrastructure support, cloud operations, cloud performance optimization, cloud migration support, cloud governance, cloud compliance, cloud automation, cloud disaster recovery, cloud security services, cloud monitoring tools, cloud cost management, cloud support company',
    canonicalUrl: pageUrl,
    ogImage: CloudHero,
    twitterImage: CloudHero,
  };

  // Structured Data for Cloud Support Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Support Services",
    "description": "Professional cloud support and management services including monitoring, optimization, security, backup, and infrastructure as code support for AWS, Azure, and Google Cloud",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "Cloud Management",
      "Cloud Optimization",
      "Cloud Monitoring",
      "Cloud Security",
      "Cloud Backup",
      "Infrastructure as Code Support"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "offers": {
      "@type": "Offer",
      "category": "TechnologyServices",
      "availability": "https://schema.org/InStock"
    }
  };

  // FAQ Schema for Cloud Support
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are cloud support services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud support services include ongoing management, monitoring, optimization, security, and maintenance of cloud infrastructure and applications across AWS, Azure, Google Cloud, and hybrid environments to ensure performance, security, and cost-efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Which cloud platforms do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive support for AWS (Amazon Web Services), Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud, IBM Cloud, and hybrid cloud environments including on-premise integration."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in cloud optimization services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud optimization services include rightsizing resources, identifying and eliminating waste, implementing cost-saving measures, improving performance, automating processes, and implementing governance policies to reduce cloud spending by 30-50% while maintaining performance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide 24/7 cloud monitoring and support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 cloud monitoring, alerting, and support with guaranteed SLAs. Our services include proactive monitoring, incident response, performance optimization, security monitoring, and continuous improvement of your cloud environments."
        }
      }
    ]
  };

  // Breadcrumb Schema
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
        "name": "Services",
        "item": `${baseUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud Support",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const offerings = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'OS Management in Cloud',
      text: 'Proactive OS monitoring, patching, and configuration across cloud-based Linux, Windows, and container-based systems.',
      schemaType: "OperatingSystemService"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: 'Cloud Optimization Services',
      text: 'Identify underutilized assets, rightsize workloads, and reduce cloud waste through continuous assessment and governance.',
      schemaType: "OptimizationService"
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: 'Cloud Monitoring & Alerting',
      text: 'End-to-end visibility and real-time alerting across cloud infrastructure, applications, and services.',
      schemaType: "MonitoringService"
    },
    {
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: 'Access & Identity Management',
      text: 'Centralized user access, role-based controls, and policy enforcement to ensure secure cloud environments.',
      schemaType: "SecurityService"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: 'Cloud Backup & Recovery',
      text: 'Automated backup schedules, disaster recovery orchestration, and data redundancy strategies.',
      schemaType: "BackupService"
    },
    {
      icon: <Cloud className="w-12 h-12 text-teal-600" />,
      title: 'Infrastructure as Code Support',
      text: 'Support for Terraform, CloudFormation, and other IaC tools to standardize deployments.',
      schemaType: "SoftwareApplication"
    },
  ];

  const valueDelivery = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Proactive Support',
      text: 'Continuous monitoring, alerting, and incident resolution before issues impact operations.'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Compliance & Security',
      text: 'Governance, policies, and encryption enforced across cloud workloads.'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Multi-Cloud Agility',
      text: 'Seamless operations across AWS, Azure, GCP, and hybrid clouds.'
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: 'Cost Optimization',
      text: 'Identify and eliminate waste, rightsize resources, and improve ROI.'
    },
  ];

  return (
    <Box>
      {/* =========================================== */}
      {/* SEO META TAGS FOR GOOGLE & SOCIAL NETWORKS */}
      {/* =========================================== */}
      <Helmet>
        {/* Primary Meta Tags for Google */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="Cloud Support Services | Multi-Cloud Management & Optimization" />
        <meta property="og:description" content="Professional cloud support services for AWS, Azure, Google Cloud, and hybrid environments. 24/7 monitoring, optimization, and security." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Cloud Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Cloud Support Services | 24/7 Cloud Management" />
        <meta name="twitter:description" content="Comprehensive cloud support services for monitoring, optimization, security, and backup across cloud platforms." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Cloud Support Services" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="Cloud Support Services" />
        <meta property="linkedin:description" content="Enterprise cloud support services for AWS, Azure, GCP, and hybrid cloud environments." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Cloud Services" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
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
              "https://twitter.com/yourcompany",
              "https://linkedin.com/company/yourcompany",
              "https://github.com/yourcompany"
            ],
            "description": "Cloud support and management services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>Cloud Support and Management Services</h1>
        <p>Professional cloud support services for AWS, Azure, Google Cloud Platform, and hybrid environments. Our 24/7 cloud management ensures optimal performance, security, and cost-efficiency for your cloud infrastructure and applications.</p>

        <h2>Cloud Support Services Overview</h2>
        <p>Comprehensive cloud support including monitoring, optimization, security, backup, disaster recovery, and infrastructure as code (IaC) management across all major cloud platforms and hybrid environments.</p>

        <h3>Cloud Platforms We Support</h3>
        <ul>
          <li>AWS (Amazon Web Services) Support and Management</li>
          <li>Microsoft Azure Cloud Support Services</li>
          <li>Google Cloud Platform (GCP) Support</li>
          <li>Oracle Cloud Infrastructure Support</li>
          <li>IBM Cloud Support Services</li>
          <li>Multi-Cloud and Hybrid Cloud Support</li>
        </ul>

        <h4>Cloud Support Benefits</h4>
        <p>Reduce cloud costs by 30-50%, improve performance and reliability, enhance security and compliance, implement proactive monitoring and alerting, and optimize cloud resource utilization with our expert cloud support services.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="Cloud Support Services"
        description="Keep your cloud environment secure, scalable, and cost-efficient with expert cloud support services designed for multi-cloud, hybrid, and on-premises landscapes."
        images={[CloudHero, Image1, Image2, Image3, Image4]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* SEO Introduction Section */}
      <Box sx={{
        maxWidth: '1000px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 4,
        textAlign: 'center'
      }}>
        <Typography
          variant="h6"
          color="#0B4C74"
          sx={{
            fontWeight: 600,
            mb: 3,
            fontSize: { xs: '1.1rem', md: '1.3rem' }
          }}
        >
          Expert Cloud Support for AWS, Azure, Google Cloud, and Hybrid Environments
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Our cloud support services ensure your cloud infrastructure remains performant,
          secure, and cost-optimized. We provide comprehensive management including
          monitoring, optimization, security, backup, and infrastructure as code (IaC)
          support across all major cloud platforms.
        </Typography>
      </Box>

      {/* Offerings Section with enhanced SEO */}
      <Box sx={{
        py: 5,
        px: { xs: 2, md: 4 },
        backgroundColor: 'rgba(11, 76, 116, 0.02)',
        borderRadius: 2,
        mx: { xs: 1, md: 4 }
      }}>
        <Typography
          component="h2"
          variant="h3"
          color="#0B4C74"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.2rem' }
          }}
        >
          Our Cloud Support Offerings
        </Typography>

        {/* SEO Description */}
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.7
          }}
        >
          Comprehensive cloud support services designed to ensure cloud infrastructure
          reliability, performance, security, and cost-efficiency across AWS, Azure,
          Google Cloud, and hybrid environments.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid
              item xs={12} sm={6} md={4}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
              itemScope
              itemType={`https://schema.org/${item.schemaType}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    px: 3,
                    py: 4,
                    backgroundColor: '#fff',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 3,
                    boxShadow: 3,
                    maxWidth: 280,
                    height: '100%',
                    border: '1px solid rgba(11, 76, 116, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: i === 0 ? '#3b82f6' :
                                 i === 1 ? '#10b981' :
                                 i === 2 ? '#8b5cf6' :
                                 i === 3 ? '#f97316' :
                                 i === 4 ? '#ef4444' : '#0d9488'
                    }
                  }}
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: 16 }}
                  >
                    {item.icon}
                  </motion.div>
                  <Typography
                    color="#0B4C74"
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                    itemProp="name"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      flexGrow: 1
                    }}
                    itemProp="description"
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value Delivery Section */}
      <Box sx={{
        py: 5,
        px: { xs: 2, md: 4 },
        mt: 4
      }}>
        <Typography
          component="h2"
          variant="h3"
          color="#0B4C74"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.2rem' }
          }}
        >
          How We Deliver Long-Term Value
        </Typography>

        {/* SEO Description */}
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.7
          }}
        >
          Our cloud support approach focuses on delivering sustainable value through
          proactive management, cost optimization, security enhancement, and
          continuous improvement aligned with your business objectives.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {valueDelivery.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    px: 3,
                    py: 4,
                    backgroundColor: '#fff',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 3,
                    boxShadow: 3,
                    maxWidth: 250,
                    height: '100%',
                    border: '1px solid rgba(11, 76, 116, 0.1)'
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: 16 }}
                  >
                    {item.icon}
                  </motion.div>
                  <Typography
                    color="#0B4C74"
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      flexGrow: 1
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Cloud Support Benefits Section */}
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        mt: 4,
        backgroundColor: 'rgba(11, 76, 116, 0.05)',
        borderRadius: 2
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="#0B4C74"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Benefits of Professional Cloud Support
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              Our cloud support services deliver significant business benefits including
              reduced cloud costs, improved performance and reliability, enhanced security
              and compliance, proactive issue prevention, and optimized resource utilization.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              By implementing comprehensive cloud management strategies and leveraging
              automation and best practices, we help organizations maximize their cloud
              investment, ensure business continuity, and achieve digital transformation goals.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our expertise spans across various cloud platforms including AWS, Azure,
              Google Cloud, hybrid environments, and multi-cloud architectures across
              different industries and use cases.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: 'white',
              p: 3,
              borderRadius: 2,
              border: '1px solid rgba(11, 76, 116, 0.1)',
              boxShadow: 2
            }}>
              <Typography
                variant="h6"
                color="#0B4C74"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Cloud Support Impact Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Cost Reduction', value: '30-50%' },
                  { label: 'Uptime Improvement', value: '99.9%+' },
                  { label: 'Performance Gain', value: '40-60%' },
                  { label: 'Security Enhancement', value: '70-90%' },
                  { label: 'Incident Response', value: '50% Faster' },
                  { label: 'ROI on Cloud Spend', value: '2-3x' }
                ].map((metric, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Box sx={{
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: 'rgba(11, 76, 116, 0.08)',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <Typography variant="h6" color="#0B4C74" fontWeight="bold">
                        {metric.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {metric.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Cloud Technologies Section */}
      <Box sx={{
        backgroundColor: 'rgba(11, 76, 116, 0.08)',
        py: 6,
        mt: 4,
        textAlign: 'center'
      }}>
        <Typography
          variant="h5"
          color="#0B4C74"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          Cloud Platforms & Technologies We Support
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {[
            { category: 'Cloud Platforms', tech: 'AWS, Microsoft Azure, Google Cloud, Oracle Cloud, IBM Cloud' },
            { category: 'Infrastructure as Code', tech: 'Terraform, CloudFormation, ARM Templates, Ansible, Pulumi' },
            { category: 'Cloud Monitoring', tech: 'CloudWatch, Azure Monitor, Stackdriver, Datadog, New Relic' },
            { category: 'Cloud Security', tech: 'AWS IAM, Azure AD, Cloud Security Posture Management, WAF, DDoS' },
            { category: 'Container & Kubernetes', tech: 'EKS, AKS, GKE, Docker, Kubernetes, OpenShift' },
            { category: 'Cloud Databases', tech: 'RDS, Aurora, Cosmos DB, Cloud SQL, DynamoDB, MongoDB Atlas' }
          ].map((stack, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box sx={{
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 2,
                height: '100%'
              }}>
                <Typography variant="h6" color="#0B4C74" fontWeight="600" gutterBottom>
                  {stack.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stack.tech}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        maxWidth: '800px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        textAlign: 'center'
      }}>
        <Typography
          variant="h5"
          color="#0B4C74"
          gutterBottom
          sx={{ fontWeight: 700, mb: 3 }}
        >
          Optimize Your Cloud Environment with Expert Support
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Contact our cloud support experts to discuss your cloud management requirements,
          implement comprehensive support strategies, and ensure your cloud infrastructure
          remains secure, performant, and cost-optimized.
        </Typography>
        <Button
          variant="contained"
          href="/resources/contact-us"
          sx={{
            backgroundColor: '#0B4C74',
            color: 'white',
            px: 4,
            py: 1.5,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#093b5a'
            }
          }}
        >
          Request Cloud Support Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default CloudSupport;