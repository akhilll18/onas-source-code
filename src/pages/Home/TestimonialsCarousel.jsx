import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Rating, Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Example logos
import Google from '../../assets/images/trustedByMarquee/google.png';
import Microsoft from '../../assets/images/trustedByMarquee/microsoft.png';
import Img1 from '../../assets/images/trustedByMarquee/google.png';

export default function TestimonialsCarousel({ fullWidth }) {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const cardWidth = isSm ? 200 : isMd ? 240 : 280;
    const containerPadding = isSm ? 8 : 16;
    const containerRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const testimonials = [
        {
            name: 'Christine McDannell',
            image: Img1,
            text: 'I just completed a session with Meg at ONAS to upgrade our non profit website. In one hour she worked miracles! This group is always willing to do their best for their clients. Highly recommend them.',
            date: '1 year ago',
            stars: 5,
            company: { name: 'Google', logo: Google },
        },
        {
            name: 'Sally Girgis',
            image: null,
            text: 'I highly recommend ONAS for anyone looking to create a professional website. From start to finish, they were a pleasure to work with.',
            date: '1 year ago',
            stars: 5,
            company: { name: 'Microsoft', logo: Microsoft },
        },
        {
            name: 'Marna Romanoff',
            image: null,
            text: 'ONAS are the best at what they do. Great style, communication and overall experience. They deliver on their mission.',
            date: '1 year ago',
            stars: 5,
            company: { name: 'Amazon', logo: null },
        },
        {
            name: 'John Doe',
            image: null,
            text: 'Amazing experience working with ONAS. They understood our needs perfectly and delivered a stunning website.',
            date: '2 years ago',
            stars: 5,
            company: { name: 'Apple', logo: null },
        },
        {
            name: 'Jane Smith',
            image: null,
            text: 'Very creative and professional team. They truly care about client success.',
            date: '2 years ago',
            stars: 5,
            company: { name: 'Meta', logo: null },
        },
        {
            name: 'Alex Johnson',
            image: null,
            text: 'Smooth process and excellent results. Highly recommended!',
            date: '2 years ago',
            stars: 5,
            company: { name: 'Netflix', logo: null },
        },
    ];

    // Duplicate items for smooth infinite scrolling
    const circularTestimonials = [...testimonials, ...testimonials, ...testimonials];

    const scrollStep = cardWidth + 16;

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    };

    // Auto-scroll
    useEffect(() => {
        const interval = setInterval(() => {
            if (!expandedIndex && containerRef.current) {
                containerRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [expandedIndex]);

    // Infinite scroll reset

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialize at middle set so both directions work immediately
        container.scrollLeft = scrollStep * testimonials.length;

        const handleScroll = () => {
            if (expandedIndex !== null) {
                setExpandedIndex(null); // collapse expanded card
            }

            const totalWidth = scrollStep * testimonials.length;

            // Scroll too far right → jump back
            if (container.scrollLeft >= totalWidth * 2) {
                container.scrollLeft -= totalWidth;
            }
            // Scroll too far left → jump forward
            else if (container.scrollLeft <= 0) {
                container.scrollLeft += totalWidth;
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollStep, testimonials.length]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(event.target)) {
                setExpandedIndex(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);



    return (
        <Box sx={{ py: { xs: 4, md: 6 }, overflow: 'hidden', position: 'relative' }}>
            <Box sx={{ maxWidth: fullWidth ? '100%' : 1200, mx: 'auto', px: 2 }}>
                <Typography variant="h3" align="center" sx={{mb: 2}}>
                    Our clients love us almost as much as we love them
                </Typography>
                <Typography variant="h4" align="center" sx={{mb: 4 }}>
                    Here’s what a few of them have to say
                </Typography>

                <Box sx={{ position: 'relative' }}>
                    {!isSm && (
                        <IconButton onClick={scrollLeft} sx={{ position: 'absolute', left: -16, top: '50%', zIndex: 2, color: '#FFD700' }}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    )}
                    {!isSm && (
                        <IconButton onClick={scrollRight} sx={{ position: 'absolute', right: -16, top: '50%', zIndex: 2, color: '#FFD700' }}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    )}

                    <Box
                        ref={containerRef}
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 2,
                            pb: 1,
                            scrollSnapType: 'x mandatory',
                            '&::-webkit-scrollbar': { display: 'none' },
                            paddingLeft: `${containerPadding}px`,
                            paddingRight: `${containerPadding}px`,
                        }}
                    >
                        {circularTestimonials.map((t, idx) => {
                            const isExpanded = expandedIndex === idx;
                            const previewText = t.text.split(' ').slice(0, 20).join(' ');
                            const hiddenText = t.text.split(' ').slice(20).join(' ');

                            return (
                                <Card key={idx} sx={{ flex: '0 0 auto', scrollSnapAlign: 'start', width: cardWidth, borderRadius: 3, bgcolor: '#045c5a', color: '#fff', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <CardContent sx={{ p: isSm ? 1 : 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            {t.image ? <Avatar src={t.image} sx={{ mr: 1, width: isSm ? 30 : 40, height: isSm ? 30 : 40 }} /> :
                                                <Avatar sx={{ mr: 1, width: isSm ? 30 : 40, height: isSm ? 30 : 40 }}>{t.name[0]}</Avatar>}
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontSize: isSm ? 12 : 14 }}>{t.name}</Typography>
                                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: isSm ? 10 : 12 }}>{t.date}</Typography>
                                            </Box>
                                        </Box>
                                        <Rating value={t.stars} readOnly size={isSm ? 'small' : 'medium'} sx={{ mb: 0.5 }} />
                                        <Typography variant="body2" sx={{ fontSize: isSm ? 12 : 13 }}>
                                            {previewText}{hiddenText && (isExpanded ? ' ' + hiddenText : '...')}
                                        </Typography>
                                        {hiddenText && (
                                            <Button size="small" onClick={() => setExpandedIndex(isExpanded ? null : idx)} sx={{ mt: 1, color: '#FFD700', textTransform: 'none', fontSize: isSm ? 12 : 13 }}>
                                                {isExpanded ? 'Show less' : 'Read more'}
                                            </Button>
                                        )}
                                    </CardContent>


                                    <Box sx={{ mt: 2, textAlign: 'center', flexShrink: 0 }}>
                                        {t.company.logo ? <img src={t.company.logo} alt={t.company.name} style={{ height: isSm ? 20 : 30, objectFit: 'contain', maxWidth: '80%' }} /> : <Typography sx={{ fontSize: isSm ? 12 : 14 }}>{t.company.name}</Typography>}
                                    </Box>

                                </Card>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
