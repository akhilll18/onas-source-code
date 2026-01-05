// Site info
export const SITE = {
  name: 'ONAS',
  tagline: 'Empowering Enterprises with Technology & Talent',
  copyright: `© ${new Date().getFullYear()} ONAS Global Services Pvt Ltd | All rights reserved.`,
};

// Navigation links
export const NAV_LINKS = [
  {
    label: 'Services',
    path: '/how-we-help',
    children: [
      {
        category: 'Enterprise Resource Planning',
        items: [
          { label: 'SAP', path: '/how-we-help/erp/sap' },
          { label: 'Oracle', path: 'https://www.onasit.com/	' },
          { label: 'Salesforce', path: '/how-we-help/erp/salesforce' },
          { label: 'Netsuite', path: '/how-we-help/erp/netsuite' },
          { label: 'Service Now', path: '/how-we-help/erp/servicenow' },
          { label: 'Workday', path: '/how-we-help/erp/workday' },
        ],
      },
      {
        category: 'Digital Transformation',
        items: [
          { label: 'AI & ML', path: '/how-we-help/digital-transformation/ai-ml' },
          { label: 'Cloud Migration & Integration', path: '/how-we-help/digital-transformation/cloud-integ' },
          { label: 'Data Engineering & Analytics', path: '/how-we-help/digital-transformation/data-eng-ana' },
          { label: 'IoT Services', path: '/how-we-help/digital-transformation/iot-services' },
          { label: 'Product Engineering', path: '/how-we-help/digital-transformation/product-eng' },
          { label: 'Testing & Automation', path: '/how-we-help/digital-transformation/test-automation' },
          { label: 'Governance, Risk & Compliance (GRC)', path: '/how-we-help/digital-transformation/grc' },
          { label: 'IT Asset Management Solutions', path: '/how-we-help/digital-transformation/it-asset-management' },
          { label: 'GenAI Solutions', path: '/how-we-help/digital-transformation/genai' },
          { label: 'DevOps & Infra Automation', path: '/how-we-help/digital-transformation/devops' },
        ],
      },
      {
        category: 'Managed IT and Operations',
        items: [
          { label: 'Application Maintenance Services', path: '/how-we-help/managed-it-operations/app-maintenance' },
          { label: 'Cloud Support', path: '/how-we-help/managed-it-operations/cloud-support' },
          { label: 'Cybersecurity', path: '/how-we-help/managed-it-operations/cybersecurity' },
          { label: 'IT Infrastructure Services', path: '/how-we-help/managed-it-operations/it-infra' },
          { label: 'Network Support', path: '/how-we-help/managed-it-operations/network-support' },
          { label: '24x7 Helpdesk', path: '/how-we-help/managed-it-operations/helpdesk' },
        ],
      },
      {
        category: 'Other Services',
        items: [
          { label: 'Web Designing & Development', path: '/how-we-help/other-services/web-dev' },
          { label: 'Search Engine Optimization', path: '/how-we-help/other-services/seo' },
          { label: 'Social Media Marketing', path: '/how-we-help/other-services/social-media' },
          { label: 'Content Marketing', path: '/how-we-help/other-services/content-marketing' },
          { label: 'Email Marketing', path: '/how-we-help/other-services/email-marketing' },
          { label: 'PPC Advertising', path: '/how-we-help/other-services/ppc' },
        ],
      },
    ],
  },

  {
    label: 'Industries',
    path: '/who-we-help',
    children: [
      {
        category: 'Industries',
        items: [
          { label: 'Banking', path: '/who-we-help/industries#banking' },
          { label: 'Life Sciences', path: '/who-we-help/industries#life-sciences' },
          { label: 'Information Technology', path: '/who-we-help/industries#information-technology' },
          { label: 'Communication, Media & Info Services', path: '/who-we-help/industries#communication-media-info' },
          { label: 'Public Services', path: '/who-we-help/industries#public-services' },
          { label: 'Oil, Gas & Energy', path: '/who-we-help/industries#oil-gas-energy' },
          { label: 'Education', path: '/who-we-help/industries#education' },
          { label: 'Travel & Logistics', path: '/who-we-help/industries#travel-logistics' },
          { label: 'Consumer Electronics & Packaged Goods', path: '/who-we-help/industries#consumer-electronics-packaged-goods' },
          { label: 'Healthcare', path: '/who-we-help/industries#healthcare' },
          { label: 'Retail', path: '/who-we-help/industries#retail' },
          { label: 'Natural Resources', path: '/who-we-help/industries#natural-resources' },
          { label: 'Insurance', path: '/who-we-help/industries#insurance' },
          { label: 'Energy, Resources & Utilities', path: '/who-we-help/industries#energy-resources-utilities' },
          { label: 'Professional Services', path: '/who-we-help/industries#professional-services' },
          { label: 'Manufacturing', path: '/who-we-help/industries#manufacturing' },
          { label: 'Hi Tech', path: '/who-we-help/industries#hi-tech' },
        ],

      },
    ],
  },

  {
    label: 'Why ONAS',
    path: '/why-onas',
    children: [
      { label: 'Who we are', path: '/why-onas/about-us/' },
      { label: 'Company', path: '/why-onas/company/' },
      { label: 'Mission & Principles', path: '/why-onas/mission-principles' },
      { label: 'Leadership', path: '/why-onas/leadership/' },
      { label: 'Culture & Benefits', path: '/why-onas/culture-benefits' },
      { label: 'Employees', path: '/why-onas/employees' },
      { label: 'Investors', path: '/why-onas/investors/' },
      { label: 'Life @ ONAS', path: '/why-onas/life' },
    ],
  },

  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Media', path: '/resources/media' },
      { label: 'Ideas That Matter', path: '/resources/ideas' },
      { label: 'Awards & Recognition', path: '/resources/awards' },
      { label: 'Blogs', path: '/resources/blogs' },
      { label: 'Contact', path: '/resources/contact-us/' },
      { label: 'Careers', path: '/resources/careers/' },
      { label: 'Case Studies', path: '/resources/case-studies/' },
      { label: 'News Room', path: '/resources/newsroom/' },
    ],
  },

  {
    label: 'Staffing',
    path: '/staffing',
    children: [
      {
        category: 'Submit a Vacancy',
        items: [
          { label: 'Request Call Back', path: '/staffing/submit-a-vacancy/request-a-call-back/' },
        ],
      },
      {
        category: 'IT Consulting',
        items: [
          { label: 'Banking Finance Sales', path: '/staffing/it-consulting#banking-finance' },
          { label: 'Finance & Accounting', path: '/staffing/it-consulting#finance-accounting' },
          { label: 'HR & Support', path: '/staffing/it-consulting#hr-support' },
          { label: 'Legal & Compliance', path: '/staffing/it-consulting#legal-compliance' },
          { label: 'Pharma, Healthcare & Life Sciences', path: '/staffing/it-consulting#pharma-healthcare-lifesciences' },
          { label: 'Sales & Trade Marketing', path: '/staffing/it-consulting#sales-trade-marketing' },
          { label: 'Wholesale & Retail', path: '/staffing/it-consulting#wholesale-retail' },
        ],
      },
      {
        category: 'Professional Services',
        items: [
          { label: 'Managed IT & Resource Services', path: '/staffing/professional-services#managed-it' },
          { label: 'Staff Augmentation Services', path: '/staffing/professional-services#staff-augmentation' },
          { label: 'Temporary / Contract Staffing', path: '/staffing/professional-services#temporary-contract' },
          { label: 'Permanent Staffing / Executive Placement', path: '/staffing/professional-services#permanent-executive' },
          { label: 'Contract To Hire Staffing', path: '/staffing/professional-services#contract-to-hire' },
          { label: 'Remote / Virtual Staffing', path: '/staffing/professional-services#remote-virtual' },
          { label: 'Offshore Staffing', path: '/staffing/professional-services#offshore-staffing' },
          { label: 'RPO Services', path: '/staffing/professional-services#rpo-services' },
          { label: 'BPO Services', path: '/staffing/professional-services#bpo-services' },
          { label: 'Hire our Recruiters', path: '/staffing/professional-services#hire-recruiters' },
          { label: 'Technical Support Services', path: '/staffing/professional-services#technical-support' },
        ],
      },
      {
        category: 'EdTech Services',
        items: [
          { label: 'EdTech Solutions', path: 'https://www.m2msoftsolutions.com/' },
        ],
      },
    ],
  },
];

