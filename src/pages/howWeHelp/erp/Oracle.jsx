import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper
} from '@mui/material';
import {
  CloudUpload,
  CloudSync,
  TrendingUp,
  Security,
  CompareArrows,
  AutoFixHigh,
  Update,
  Architecture,
  Analytics,
  Business
} from '@mui/icons-material';

export default function OraclePage() {
  // High-volume transformation keywords
  const transformationKeywords = [
    "Oracle EBS to Fusion Cloud migration roadmap",
    "Cloud ERP business transformation strategy",
    "Oracle Cloud vs EBS TCO analysis",
    "Clean Core strategy for Oracle Fusion",
    "Oracle OCI Lift and Shift EBS",
    "Oracle Cloud Readiness Assessment"
  ];

  // Fusion Cloud modules with 2025 trends
  const fusionModules = [
    {
      title: "Oracle Fusion Financials",
      keywords: [
        "Intelligent Account Combination Defaulting",
        "Oracle Cloud ERP automated reconciliations",
        "Touchless Finance automation",
        "Oracle Fusion Financials 25C new features"
      ],
      color: "#0176D3"
    },
    {
      title: "Oracle Fusion HCM",
      keywords: [
        "Oracle Fusion HCM AI Agent Studio",
        "Oracle Redwood UX for HCM",
        "Oracle Dynamic Skills training",
        "Succession Planning in Oracle Cloud HCM"
      ],
      color: "#1B96FF"
    },
    {
      title: "Oracle Fusion SCM",
      keywords: [
        "Oracle Fusion SCM analytics KPIs",
        "Oracle Global Order Promising (GOP)",
        "Order-to-Cash bottlenecks Oracle Cloud",
        "Oracle SCM 25B release notes"
      ],
      color: "#0B5CAB"
    }
  ];

  // EBS lifecycle & migration
  const ebsKeywords = [
    {
      category: "Migration Strategy",
      items: [
        "EBS to Oracle Cloud migration steps",
        "Lift and Shift EBS to OCI benefits",
        "Oracle EBS end of life 2030 planning",
        "EBS customization vs Fusion configuration"
      ]
    },
    {
      category: "Technical Management",
      items: [
        "Oracle EBS 12.2.13 features",
        "Online Patching (ADOP) troubleshooting",
        "EBS performance tuning Database 19c",
        "Oracle EBS security patches 2025"
      ]
    }
  ];

  // AI & Automation trends
  const aiTrends = [
    "Oracle Fusion AI features",
    "Oracle Joule vs Oracle AI capabilities",
    "Automated financial reporting Oracle Fusion",
    "Oracle Redwood UX adoption guide"
  ];

  // Long-tail keywords for 2025
  const longTailKeywords = [
    "Oracle Fusion quarterly update testing automation",
    "How to reduce Oracle EBS maintenance costs",
    "Oracle Integration Cloud (OIC) for EBS integration",
    "Oracle Cloud ERP security best practices",
    "Oracle Cloud ERP Sustainability Green Ledger"
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      {/* Hero Section with High-Volume Keywords */}
      <Box sx={{ textAlign: 'center', mb: 8, py: 6, bgcolor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h1" sx={{ mb: 3, color: '#C74634', fontWeight: 700 }}>
          Oracle Cloud & EBS Solutions 2025
        </Typography>
        <Typography variant="h4" sx={{ mb: 4, color: '#0176D3' }}>
          Comprehensive Migration, Implementation & Optimization Strategies
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ mb: 4 }}>
          <Chip
            icon={<CompareArrows />}
            label="Oracle Fusion vs SAP S/4HANA"
            variant="outlined"
            sx={{ fontWeight: 600 }}
          />
          <Chip
            icon={<CloudUpload />}
            label="EBS to Fusion Migration"
            variant="outlined"
            sx={{ fontWeight: 600 }}
          />
          <Chip
            icon={<AutoFixHigh />}
            label="Oracle AI & Automation"
            variant="outlined"
            sx={{ fontWeight: 600 }}
          />
          <Chip
            icon={<Security />}
            label="Cloud ERP Security"
            variant="outlined"
            sx={{ fontWeight: 600 }}
          />
        </Stack>

        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Expert guidance on Oracle Fusion Cloud ERP implementation, EBS migration to OCI,
          and leveraging Oracle's AI capabilities including Joule and Redwood UX for business transformation.
        </Typography>
      </Box>

      {/* Transformation Keywords Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Business sx={{ color: '#C74634' }} />
          High-Volume Transformation Keywords
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Capture decision-makers planning the move from on-premise to cloud
        </Typography>

        <Grid container spacing={3}>
          {transformationKeywords.map((keyword, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card variant="outlined" sx={{ height: '100%', transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <CloudSync sx={{ color: '#0176D3', mt: 0.5 }} />
                    <Typography variant="h6">
                      {keyword}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Fusion Cloud Modules Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Analytics sx={{ color: '#C74634' }} />
          Oracle Fusion Cloud Modules (2025 Trends)
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Dominated by Quarterly Updates and Embedded AI (Joule/GenAI)
        </Typography>

        <Grid container spacing={4}>
          {fusionModules.map((module, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{
                height: '100%',
                borderTop: `4px solid ${module.color}`,
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
              }}>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 3, color: module.color, fontWeight: 600 }}>
                    {module.title}
                  </Typography>
                  <List dense>
                    {module.keywords.map((keyword, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <TrendingUp fontSize="small" sx={{ color: module.color }} />
                        </ListItemIcon>
                        <ListItemText primary={keyword} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" startIcon={<Update />}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* EBS Lifecycle & Migration Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Architecture sx={{ color: '#C74634' }} />
          Oracle EBS Keywords (Lifecycle & Migration)
        </Typography>

        <Grid container spacing={4}>
          {ebsKeywords.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 3, color: '#0176D3', fontWeight: 600 }}>
                  {category.category}
                </Typography>
                <List>
                  {category.items.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <ListItem sx={{ py: 1.5 }}>
                        <ListItemIcon sx={{ color: '#0176D3' }}>
                          <CloudUpload />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{ variant: 'body1', fontWeight: 500 }}
                        />
                      </ListItem>
                      {idx < category.items.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* AI & Automation Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Oracle AI & Automation Trends
        </Typography>
        <Grid container spacing={2}>
          {aiTrends.map((trend, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Chip
                label={trend}
                sx={{
                  height: 'auto',
                  py: 2,
                  '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'center' }
                }}
                color="primary"
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Long-Tail Keywords Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Emerging Long-Tail Search Trends for 2025
        </Typography>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {longTailKeywords.map((keyword, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{
                  p: 2,
                  bgcolor: '#f8f9fa',
                  borderRadius: 1,
                  borderLeft: '4px solid #C74634'
                }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {keyword}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      {/* SEO Checklist Section */}
      <Paper sx={{ p: 4, bgcolor: '#f0f7ff', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 3, color: '#0176D3', fontWeight: 600 }}>
          Oracle SEO Checklist for 2025
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CloudUpload sx={{ color: '#0176D3' }} />
            </ListItemIcon>
            <ListItemText
              primary="Focus on OCI: Capture 'EBS on OCI' searches for users not ready for full Fusion migration"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoFixHigh sx={{ color: '#0176D3' }} />
            </ListItemIcon>
            <ListItemText
              primary="Use 'Redwood': Optimize for Oracle's new design language trending in UX/UI searches"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Update sx={{ color: '#0176D3' }} />
            </ListItemIcon>
            <ListItemText
              primary="Update Quarterly: Create recurring content for Fusion updates (e.g., 'What's new in Oracle Fusion 25C')"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}