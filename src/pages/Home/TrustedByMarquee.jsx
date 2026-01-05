import React from "react";
import Marquee from "react-fast-marquee";
import { Box, colors, Typography } from "@mui/material";
import Sap from "../../assets/images/trustedByMarquee/sap.png";
import Oracle from "../../assets/images/trustedByMarquee/oracle.png";
import Salesforce from "../../assets/images/trustedByMarquee/salesforce.svg";
import Netsuite from "../../assets/images/trustedByMarquee/netsuite.png";
import Servicenow from "../../assets/images/trustedByMarquee/servicenow.png";
import Workday from "../../assets/images/trustedByMarquee/workday.png";
// import WDD from "../../assets/images/trustedByMarquee/webdev.png";
// import SEO from "../../assets/images/trustedByMarquee/seo.png";
// import SocialMark from "../../assets/images/trustedByMarquee/socialmm.png";
// import ContentMark from "../../assets/images/trustedByMarquee/content.png";
// import EmailMark from "../../assets/images/trustedByMarquee/email.png";
// import PPCAdv from "../../assets/images/trustedByMarquee/ppc.png";



const companies = [
  { name: "SAP", logo: Sap },
  { name: "Oracle", logo: Oracle },
  { name: "Salesforce", logo: Salesforce },
  { name: "Netsuite", logo: Netsuite },
  { name: "Servicenow", logo: Servicenow },
  { name: "Workday", logo: Workday },
  // { name: "Web Design & Devlopment", logo: WDD },
  // { name: "Search Engine Optimization", logo: SEO },
  // { name: "Social Marketing", logo: SocialMark },
  // { name: "Content Marketing", logo: ContentMark },
  // { name: "Email Marketing", logo: EmailMark },
  // { name: "PPC Adevertising", logo: PPCAdv },
];

export default function TrustedByMarquee() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, overflow: "hidden" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
          background:
            "linear-gradient(135deg, #003C43 0%, #121f07ff 50%, #000000 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Trusted by industry leaders worldwide

      </Typography>

      <Marquee gradient={false} speed={40} pauseOnHover direction="left">
        {[...companies, ...companies].map((company, i) => (
          <Box
            key={i}
            sx={{ 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7 }, 
              transition: "transform 0.3s, filter 0.3s",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.15)", filter: "brightness(1.2)" },
            }}
          >
            <Box
              component="img"
              src={company.logo}
              alt={company.name}
              sx={{
                height: {
                  xs: 30,   // mobile
                  sm: 40,   // small tablet
                  md: 50,   // tablet / small laptop
                  lg: 60,   // large laptop
                  xl: 70,   // desktop
                  xxl: 80,  // large screen / TV
                },
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Marquee>



    </Box>
  );
}
