import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Chip,
    Button,
    Container,
    alpha,
    Paper,
    Stack,
    useMediaQuery,
    useTheme,
    Tabs,
    Tab,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Fade,
    Grow
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BoltIcon from '@mui/icons-material/Bolt';

// Color palette based on provided colors
const COLORS = {
    primary: '#0B4C74', // Dark Blue
    secondary: '#F2F3F4', // Light Gray
    accent: '#2E8BC0', // Medium Blue
    accentLight: '#64B5F6', // Light Blue
    success: '#4CAF50',
    warning: '#FF9800',
    textPrimary: '#212121',
    textSecondary: '#757575',
};

const expertiseData = [
    {
            id: 1,
            category: 'ERP Services',
            icon: <CloudIcon />,
            description: 'Future-proofing your enterprise with AI-augmented ERP implementation and dynamic optimization for continuous excellence.',
            examples: [
                { label: 'SAP Implementation', link: 'https://onasglobal.com/how-we-help/erp/sap' },
                { label: 'Oracle Cloud Solutions', link: 'https://www.onasit.com/', external: true },
                { label: 'Salesforce CRM', link: 'https://onasglobal.com/how-we-help/erp/salesforce' },
                { label: 'Workday Integration', link: 'https://onasglobal.com/how-we-help/erp/workday' },
                { label: 'Service Now', link: 'https://onasglobal.com/how-we-help/erp/servicenow' },
                { label: 'Netsuite', link: 'https://onasglobal.com/how-we-help/erp/netsuite' },
            ],
            stats: '6+ ERP Systems',
            color: COLORS.accentLight,
            bgColor: alpha(COLORS.accentLight, 0.08),
            benefits: ['Streamlined Operations', 'Real-time Insights', 'Enhanced Collaboration']
        },

    {
        id: 2,
        category: 'IT Consulting',
        icon: <BusinessIcon />,
        description: 'Strategic IT consulting to transform operations and drive digital excellence.',
        examples: [
            { label: 'Digital Transformation Strategy', link: 'https://onasglobal.com/staffing/it-consulting#transformation' },
            { label: 'Technology Roadmapping', link: 'https://onasglobal.com/staffing/it-consulting#roadmapping' },
            { label: 'Business Process Optimization', link: 'https://onasglobal.com/staffing/it-consulting#optimization' },
            { label: 'IT Infrastructure Planning', link: 'https://onasglobal.com/staffing/it-consulting#infrastructure' },
            { label: 'Banking Finance Sales', link: 'https://onasglobal.com/staffing/it-consulting#banking-finance' },
            { label: 'Finance & Accounting', link: 'https://onasglobal.com/staffing/it-consulting#finance-accounting' },
            { label: 'HR & Support', link: 'https://onasglobal.com/staffing/it-consulting#hr-support' },
            { label: 'Legal & Compliance', link: 'https://onasglobal.com/staffing/it-consulting#legal-compliance' },
             { label: 'Pharma, Healthcare & Life Sciences', link: 'https://onasglobal.com/staffing/it-consulting#pharma-healthcare-lifesciences' },
        ],
        stats: '95% Client Satisfaction',
        color: COLORS.primary,
        bgColor: alpha(COLORS.primary, 0.08),
        benefits: ['Cost Reduction', 'Improved Efficiency', 'Scalable Solutions']
    },
    {
        id: 3,
        category: 'Professional Services',
        icon: <GroupsIcon />,
        description: 'Elite staffing solutions with top-tier professionals for your business needs.',
        examples: [
            { label: 'Managed IT Services', link: 'https://onasglobal.com/staffing/professional-services#managed-it' },
            { label: 'Expert Staff Augmentation', link: 'https://onasglobal.com/staffing/professional-services#staff-augmentation' },
            { label: 'Contract Staffing Solutions', link: 'https://onasglobal.com/staffing/professional-services#temporary-contract' },
            { label: 'Executive Placement', link: 'https://onasglobal.com/staffing/professional-services#permanent-executive' },
             { label: 'Contract To Hire Staffing', link: 'https://onasglobal.com/staffing/professional-services#contract-to-hire' },
             { label: 'Remote / Virtual Staffing', link: 'https://onasglobal.com/staffing/professional-services#remote-virtual' },
        ],
        stats: '500+ Professionals Placed',
        color: COLORS.accent,
        bgColor: alpha(COLORS.accent, 0.08),
        benefits: ['Access to Top Talent', 'Flexible Staffing', 'Reduced Overhead']
    },

    {
        id: 4,
        category: 'Digital Solutions',
        icon: <CodeIcon />,
        description: 'Cutting-edge web and digital solutions to amplify your online presence.',
        examples: [
            { label: 'Custom Web Development', link: 'https://onasglobal.com/how-we-help/other-services/web-dev' },
            { label: 'SEO & Digital Marketing', link: 'https://onasglobal.com/how-we-help/other-services/seo' },
            { label: 'Mobile App Development', link: 'https://onasglobal.com/digital/mobile-apps' },
            { label: 'UI/UX Design Excellence', link: 'https://onasglobal.com/digital/ui-ux' },
            { label: 'Social Media Marketing', link: 'https://onasglobal.com/how-we-help/other-services/social-media' },
            { label: 'Content Marketing', link: 'https://onasglobal.com/how-we-help/other-services/content-marketing' },
        ],
        stats: '25+ Projects Delivered',
        color: COLORS.warning,
        bgColor: alpha(COLORS.warning, 0.08),
        benefits: ['Enhanced User Experience', 'Increased Conversions', 'Brand Visibility']
    },
    {
        id: 5,
        category: 'EdTech Services',
        icon: <SchoolIcon />,
        description: 'Innovative educational technology solutions for modern learning ecosystems.',
        examples: [
            { label: 'LMS Implementation', link: 'https://www.m2msoftsolutions.com/', external: true },
            { label: 'E-Learning Platform Development', link: 'https://www.m2msoftsolutions.com/', external: true },
            { label: 'Educational Analytics', link: 'https://www.m2msoftsolutions.com/', external: true },
            { label: 'Virtual Classroom Solutions', link: 'https://www.m2msoftsolutions.com/', external: true },
        ],
        stats: '50+ Educational Institutions',
        color: COLORS.success,
        bgColor: alpha(COLORS.success, 0.08),
        benefits: ['Enhanced Learning Outcomes', 'Scalable Education', 'Modern Learning Tools']
    },
    {
        id: 6,
        category: 'Cybersecurity',
        icon: <SecurityIcon />,
        description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
        examples: [
            { label: 'Security Risk Assessment', link: 'https://onasglobal.com/security/audits' },
            { label: 'Network Security Solutions', link: 'https://onasglobal.com/security/network' },
            { label: 'Data Protection & Privacy', link: 'https://onasglobal.com/security/data' },
            { label: 'Compliance Management', link: 'https://onasglobal.com/security/compliance' },
        ],
        stats: '99.9% Security Uptime',
        color: '#9C27B0',
        bgColor: alpha('#9C27B0', 0.08),
        benefits: ['Data Protection', 'Regulatory Compliance', 'Threat Prevention']
    },
];

const industries = [
    {
        name: 'Banking & Finance',
        icon: '🏦',
        color: COLORS.primary,
        link: 'https://onasglobal.com/industries/banking-finance'
    },
    {
        name: 'Healthcare',
        icon: '🏥',
        color: COLORS.success,
        link: 'https://onasglobal.com/industries/healthcare'
    },
    {
        name: 'Education',
        icon: '🎓',
        color: COLORS.warning,
        link: 'https://onasglobal.com/industries/education'
    },
    {
        name: 'Manufacturing',
        icon: '🏭',
        color: COLORS.accent,
        link: 'https://onasglobal.com/industries/manufacturing'
    },
    {
        name: 'Retail',
        icon: '🛒',
        color: '#E91E63',
        link: 'https://onasglobal.com/industries/retail'
    },
    {
        name: 'Insurance',
        icon: '🛡️',
        color: COLORS.primary,
        link: 'https://onasglobal.com/industries/insurance'
    },
    {
        name: 'Energy & Utilities',
        icon: '⚡',
        color: '#FFC107',
        link: 'https://onasglobal.com/industries/energy-utilities'
    },
    {
        name: 'Professional Services',
        icon: '💼',
        color: COLORS.textSecondary,
        link: 'https://onasglobal.com/industries/professional-services'
    },
    // New industries added below
    {
        name: 'Information Technology',
        icon: '💻',
        color: '#2196F3',
        link: 'https://onasglobal.com/industries/information-technology'
    },
    {
        name: 'Hi-Tech',
        icon: '🚀',
        color: '#9C27B0',
        link: 'https://onasglobal.com/industries/hi-tech'
    },
    {
        name: 'Energy Source & Utilities',
        icon: '🔋',
        color: '#FF9800',
        link: 'https://onasglobal.com/industries/energy-source-utilities'
    },
    {
        name: 'Communication Media & Information Services',
        icon: '📡',
        color: '#3F51B5',
        link: 'https://onasglobal.com/industries/communication-media'
    },
    {
        name: 'Engineering, Construction & Operations',
        icon: '🏗️',
        color: '#795548',
        link: 'https://onasglobal.com/industries/engineering-construction'
    },
    {
        name: 'Public Services',
        icon: '🏛️',
        color: '#607D8B',
        link: 'https://onasglobal.com/industries/public-services'
    },
    {
        name: 'Life Sciences & Pharma',
        icon: '🧬',
        color: '#4CAF50',
        link: 'https://onasglobal.com/industries/life-sciences-pharma'
    },
];

export default function ExpertiseSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeCategory, setActiveCategory] = useState(expertiseData[0]);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setActiveCategory(expertiseData[newValue]);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <Box sx={{
            bgcolor: 'white',
            py: { xs: 4, md: 5 },
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${COLORS.secondary} 0%, white 30%, white 100%)`
        }}>
            {/* Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: `radial-gradient(circle at 10% 20%, ${alpha(COLORS.primary, 0.03)} 0%, transparent 40%),
                                radial-gradient(circle at 90% 80%, ${alpha(COLORS.accent, 0.03)} 0%, transparent 40%)`,
                    zIndex: 0
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Header with Gradient */}
                <Box sx={{
                    textAlign: 'center',
                    mb: { xs: 1, md: 3 },
                    position: 'relative'
                }}>
                    <Chip
                        icon={<StarIcon />}
                        label="Our Expertise"
                        sx={{
                            bgcolor: alpha(COLORS.primary, 0.1),
                            color: COLORS.primary,
                            fontWeight: 700,
                            px: 3,
                            py: 1.5,
                            mb: 3,
                            fontSize: '1.2rem',
                            border: `2px solid ${alpha(COLORS.primary, 0.2)}`,
                            '& .MuiChip-icon': { color: COLORS.primary }
                        }}
                    />

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: '1.0rem', md: '1.5rem' },
                            background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.accent} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            lineHeight: 1.1
                        }}
                    >
                        Transform Your Business
                        <br />
                        <Box component="span" sx={{ fontSize: '0.8em', fontWeight: 700 }}>
                            With Expert Solutions
                        </Box>
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            mb: 4,
                            color: COLORS.textSecondary,
                            maxWidth: 900,
                            mx: 'auto',
                            fontSize: { xs: '0.9rem', md: '1.2rem' },
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}
                    >
                        Partner with us for comprehensive IT services that drive innovation,
                        enhance productivity, and deliver measurable business outcomes across industries.
                    </Typography>

                    {/* Stats Banner */}
                    <Grow in={true} timeout={1000}>
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 3,
                            p: 2,
                            px: 4,
                            borderRadius: 3,
                            bgcolor: alpha(COLORS.primary, 0.05),
                            border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                            mb: 4
                        }}>
                            {[
                                { value: '6+', label: 'Years Experience' },
                                { value: '55+', label: 'Clients Served' },
                                { value: '98%', label: 'Satisfaction Rate' },
                            ].map((stat, idx) => (
                                <Box key={idx} sx={{ textAlign: 'center' }}>
                                    <Typography sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        color: COLORS.primary,
                                        lineHeight: 1
                                    }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '0.75rem',
                                        color: COLORS.textSecondary,
                                        fontWeight: 500
                                    }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grow>
                </Box>

                {/* Tabbed Navigation */}
                <Paper
                    elevation={0}
                    sx={{
                        mb: 6,
                        borderRadius: 3,
                        bgcolor: 'transparent',
                        borderBottom: `2px solid ${alpha(COLORS.primary, 0.1)}`
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                minHeight: 72,
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                color: COLORS.textSecondary,
                                borderBottom: '3px solid transparent',
                                '&.Mui-selected': {
                                    color: COLORS.primary,
                                },
                                '&:hover': {
                                    color: COLORS.primary,
                                    bgcolor: alpha(COLORS.primary, 0.05),
                                }
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: COLORS.primary,
                                height: 3,
                                borderRadius: 3
                            }
                        }}
                    >
                        {expertiseData.map((item, index) => (
                            <Tab
                                key={item.id}
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            color: activeTab === index ? item.color : COLORS.textSecondary,
                                            transition: 'color 0.3s'
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Typography sx={{ fontWeight: 600 }}>
                                            {item.category}
                                        </Typography>
                                    </Box>
                                }
                            />
                        ))}
                    </Tabs>
                </Paper>

                {/* Main Content */}
                <Grid container spacing={4} alignItems="stretch">
                    {/* Left Column - Service Details */}
                    <Grid item xs={12} lg={7}>
                        <motion.div
                            key={activeCategory.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                {/* Header with Gradient */}
                                <Box sx={{
                                    p: { xs: 3, md: 4 },
                                    background: `linear-gradient(135deg, ${activeCategory.bgColor} 0%, white 100%)`,
                                    borderBottom: `1px solid ${alpha(activeCategory.color, 0.2)}`
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                                        <Avatar
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                bgcolor: activeCategory.color,
                                                color: 'white',
                                                fontSize: '2rem'
                                            }}
                                        >
                                            {activeCategory.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontWeight: 800,
                                                    mb: 1,
                                                    color: activeCategory.color,
                                                    fontSize: { xs: '1.8rem', md: '2.2rem' }
                                                }}
                                            >
                                                {activeCategory.category}
                                            </Typography>
                                            <Chip
                                                icon={<TrendingUpIcon />}
                                                label={activeCategory.stats}
                                                sx={{
                                                    bgcolor: alpha(activeCategory.color, 0.1),
                                                    color: activeCategory.color,
                                                    fontWeight: 700,
                                                    fontSize: '0.9rem'
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: COLORS.textPrimary,
                                            lineHeight: 1.6,
                                            fontSize: '1.1rem',
                                            mb: 3
                                        }}
                                    >
                                        {activeCategory.description}
                                    </Typography>

                                    {/* Benefits */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {activeCategory.benefits?.map((benefit, idx) => (
                                            <Chip
                                                key={idx}
                                                icon={<BoltIcon sx={{ fontSize: 16 }} />}
                                                label={benefit}
                                                size="medium"
                                                sx={{
                                                    bgcolor: alpha(activeCategory.color, 0.05),
                                                    color: activeCategory.color,
                                                    border: `1px solid ${alpha(activeCategory.color, 0.2)}`,
                                                    fontWeight: 600,
                                                    fontSize: '0.85rem'
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>

                                {/* Services List */}
                                <Box sx={{ p: { xs: 0.5, md: 2 } }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 3,
                                            color: COLORS.textPrimary,
                                            fontSize: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <StarIcon sx={{ color: activeCategory.color, fontSize: 24 }} />
                                        Key Services
                                    </Typography>

                                    <Grid container spacing={2}>
                                        {activeCategory.examples.map((example, idx) => (
                                            <Grid item xs={10} sm={6} key={idx}>
                                                <Card
                                                    component="a"
                                                    href={example.link}
                                                    elevation={0}
                                                    sx={{
                                                        height: '100%',
                                                        borderRadius: 2,
                                                        bgcolor: COLORS.secondary,
                                                        border: `1px solid ${alpha(activeCategory.color, 0.1)}`,
                                                        textDecoration: 'none',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-4px)',
                                                            bgcolor: alpha(activeCategory.color, 0.05),
                                                            borderColor: activeCategory.color,
                                                            boxShadow: `0 8px 24px ${alpha(activeCategory.color, 0.15)}`,
                                                        }
                                                    }}
                                                >
                                                    <CardContent sx={{ p: 2.5 }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                            <Box sx={{
                                                                width: 8,
                                                                height: 6,
                                                                borderRadius: '50%',
                                                                bgcolor: activeCategory.color,
                                                                flexShrink: 0
                                                            }} />
                                                            <Typography
                                                                sx={{
                                                                    color: COLORS.textPrimary,
                                                                    fontWeight: 600,
                                                                    flex: 1,
                                                                    fontSize: '0.95rem'
                                                                }}
                                                            >
                                                                {example.label}
                                                            </Typography>
                                                            <ArrowForwardIcon
                                                                sx={{
                                                                    fontSize: 16,
                                                                    color: activeCategory.color,
                                                                    opacity: 0.7
                                                                }}
                                                            />
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>

                                    {/* Quick Stats */}
                                    <Box sx={{
                                        mt: 1,
                                        pt: 2,
                                        borderTop: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        textAlign: 'center'
                                    }}>
                                        {[
                                            { label: 'AI-Accelerated Deployment', value: 'Adaptive to scope complexity' },
                                            { label: 'Success Rate', value: '98%' },
                                            { label: 'Support', value: '24/7' },
                                        ].map((stat, idx) => (
                                            <Box key={idx}>
                                                <Typography sx={{
                                                    fontSize: '1.2rem',
                                                    fontWeight: 800,
                                                    color: activeCategory.color,
                                                    lineHeight: 1
                                                }}>
                                                    {stat.value}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: '0.75rem',
                                                    color: COLORS.textSecondary,
                                                    fontWeight: 500
                                                }}>
                                                    {stat.label}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Right Column - Industries & CTA */}
                    <Grid item xs={12} lg={5}>
                        <Stack spacing={4}>
                            {/* Industries Card */}
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                                    overflow: 'hidden'
                                }}
                            >
                                <Box sx={{
                                    p: { xs: 3, md: 2 },
                                    bgcolor: alpha(COLORS.primary, 0.03),
                                    borderBottom: `1px solid ${alpha(COLORS.primary, 0.1)}`
                                }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            color: COLORS.primary,
                                            fontSize: '1.5rem'
                                        }}
                                    >
                                        Industries We Serve
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: COLORS.textSecondary,
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        Tailored solutions for diverse sectors
                                    </Typography>
                                </Box>

                                <Box sx={{ p: { xs: 3, md: 4 } }}>
                                    <Grid container spacing={2}>
                                        {industries.map((industry, idx) => (
                                            <Grid item xs={6} sm={4} key={idx}>
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        borderRadius: 2,
                                                        bgcolor: alpha(industry.color, 0.05),
                                                        textAlign: 'center',
                                                        border: `1px solid ${alpha(industry.color, 0.1)}`,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-2px)',
                                                            bgcolor: alpha(industry.color, 0.1),
                                                            boxShadow: `0 4px 12px ${alpha(industry.color, 0.1)}`,
                                                        }
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '2rem', mb: 1 }}>
                                                        {industry.icon}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: industry.color,
                                                            fontWeight: 600,
                                                            fontSize: '0.75rem',
                                                            lineHeight: 1.3,
                                                            display: 'block'
                                                        }}
                                                    >
                                                        {industry.name}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Paper>

                            {/* CTA Card */}
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    bgcolor: COLORS.primary,
                                    color: 'white',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 4,
                                        background: `linear-gradient(90deg, ${COLORS.accent} 0%, ${COLORS.accentLight} 100%)`,
                                    }
                                }}
                            >
                                <Box sx={{ p: { xs: 3, md: 1 }, textAlign: 'center' }}>
                                    <StarIcon sx={{ fontSize: 48, color: 'white', opacity: 0.9, mb: 0.5 }} />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            mb: 2,
                                            fontSize: { xs: '1.5rem', md: '1.8rem' }
                                        }}
                                    >
                                        Ready to Transform?
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 1,
                                            opacity: 0.9,
                                            fontSize: '1rem',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        Let's discuss how we can help you achieve your business goals with tailored IT solutions.
                                    </Typography>

                                    <Stack spacing={2}>
                                        <Button
                                            component="a"
                                            href="http://localhost:5173/resources/contact-us/"
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                bgcolor: 'white',
                                                color: COLORS.primary,
                                                fontWeight: 700,
                                                py: 2,
                                                borderRadius: 2,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                '&:hover': {
                                                    bgcolor: COLORS.secondary,
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 8px 24px rgba(255,255,255,0.3)',
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Get Free Consultation
                                            <ArrowForwardIcon sx={{ ml: 1 }} />
                                        </Button>

                                       <Button
                                           component="a"
                                           href={activeCategory.category === 'ERP Services' ? 'https://www.onasglobal.com/' : `/services/${activeCategory.category.toLowerCase().replace(' ', '-')}`}
                                           target={activeCategory.category === 'ERP Services' ? '_blank' : '_self'}
                                           rel={activeCategory.category === 'ERP Services' ? 'noopener noreferrer' : undefined}
                                           variant="outlined"
                                           size="large"
                                           sx={{
                                               borderColor: 'white',
                                               color: 'white',
                                               fontWeight: 600,
                                               py: 1.5,
                                               borderRadius: 2,
                                               textTransform: 'none',
                                               fontSize: '0.9rem',
                                               '&:hover': {
                                                   bgcolor: 'rgba(255,255,255,0.1)',
                                                   borderColor: 'white',
                                               }
                                           }}
                                       >
                                            Explore {activeCategory.category} in Detail
                                        </Button>
                                    </Stack>
                                </Box>
                            </Paper>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Testimonial Banner */}
                <Fade in={true} timeout={1000}>
                    <Paper
                        elevation={0}
                        sx={{
                            mt: 8,
                            p: { xs: 3, md: 2 },
                            borderRadius: 3,
                            bgcolor: alpha(COLORS.primary, 0.05),
                            border: `1px solid ${alpha(COLORS.primary, 0.1)}`,
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 1,
                                color: COLORS.primary,
                                fontSize: { xs: '1.5rem', md: '1.8rem' }
                            }}
                        >
                            Trusted by Industry Leaders
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 3,
                                color: COLORS.textSecondary,
                                maxWidth: 600,
                                mx: 'auto',
                                fontSize: '1.1rem',
                                lineHeight: 1.6
                            }}
                        >
                            Align with forward-thinking innovators who have accelerated their digital evolution with our expertise.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                            {[
                                { value: '55+', label: 'Global Clients' },
                                { value: '+', label: 'Countries Served' },
                                { value: '98%', label: 'Client Retention' },
                                { value: '24/7', label: 'Support Coverage' },
                            ].map((stat, idx) => (
                                <Box key={idx} sx={{ textAlign: 'center', minWidth: 120 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            mb: 0.5,
                                            color: COLORS.primary,
                                            fontSize: { xs: '2rem', md: '2.5rem' },
                                            lineHeight: 1
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: COLORS.textSecondary,
                                            fontWeight: 500,
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Fade>
            </Container>
        </Box>
    );
}