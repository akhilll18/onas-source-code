import { Helmet } from 'react-helmet-async';
import { SEO } from '../config/seo';
import { useLocation } from 'react-router-dom';

export default function SEOWrapper() {
  const location = useLocation();
  const meta = SEO[location.pathname] || { 
    title: 'ONAS Global Services | Accelerating Your Digital Future with AI & Data Intelligence',
    description: 'ONAS Global Services is the architect of your Intelligent Enterprise. We deliver AI-accelerated IT solutions across Cloud infrastructure, optimized ERP/CRM platforms, real-time Data Analytics, and resilient Managed Services. Power your growth with our strategy and execution expertise..',
    keywords: 'ONAS, Global Services, IT Solutions, Cloud Solutions, ERP, CRM, Data Analytics, Managed Services, IT Consulting, Technology Consulting, Business Consulting, Software Development, Digital Transformation, Cloud Consulting, IT Strategy, IT Support',
  };

  return (
    <Helmet key={location.pathname}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
    </Helmet>
  );
}

