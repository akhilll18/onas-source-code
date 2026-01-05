import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, FormHelperText, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';


const services = ['Consulting', 'Staffing', 'Training', 'Software Development', 'Other'];

const offices = [
  {
    name: 'Hyderabad Office',
    company: 'ONAS Consulting Services Pvt Ltd',
    address: 'Vasavi Sky City, 8th Floor, Quick Start-CoWorking, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.437211628847!2d78.36212117369062!3d17.438775801325626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ee44e40b52cf5e7%3A0xcb5f6c9932fd733e!2sONAS%20Consulting%20Services!5e0!3m2!1sen!2sus!4v1759363285471!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    name: 'Chennai Office',
    company: 'ONAS Global Services Pvt Ltd',
    address: 'GREETA TOWERS, Industrial Estate, 1st Floor, Thirumalai Nagar, Perungudi, Chennai, TN, India – 600096',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7776.57706122955!2d80.24336!3d12.95338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1ad4ff789f%3A0xc9efd3550dfc21c2!2s4th%20St%2C%20Manikkodi%20Srinivasan%20Nagar%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1759363488370!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },
  {
    name: 'USA Office',
    company: 'ONAS Global Services LLC',
    address: '701 Tillery Street Unit 12 #3338, Austin, TX 78702',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.123456789!2d-97.743060714858!3d30.264917591345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5bcecd5a2b1%3A0xabcdef123456!2s701%20Tillery%20St%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1695977104321!5m2!1sen!2sus'
  }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.company) newErrors.company = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.message) newErrors.message = 'Required';
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("📤 Contact Us Form Data:", formData);
      try {
        const response = await axios.post('/api/contact.php', formData);
        if (response.data.success) {
          setSnackbarOpen(true);
          setFormData({ firstName: '', lastName: '', email: '', company: '', service: '', message: '' });
        } else {
          alert(response.data.message || 'Failed to send request.');
        }
      } catch (err) {
        console.error(err);
        alert('Error sending request.');
      }
    }
  };


  return (
    <Box color="#0B4C74" sx={{
      px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 18, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      mx: 'auto', 
      maxWidth: 1600, 
    }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>Contact Us</Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
        {/* Left: Map & Contact Info */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 3 }}>
            <iframe
              src={offices[0].mapSrc}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen=""
              loading="lazy"
              title="Hyderabad Office"
            ></iframe>
          </Box>
          <Box sx={{ backgroundColor: '#0a3d62', color: '#fff', p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1">
              <strong>Email Us:</strong>{' '}
              <a href="mailto:sales@onasglobal.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                sales@onasglobal.com
              </a>
            </Typography>

            <Typography variant="subtitle1">
              <strong>Call Us:</strong>{' '}
              <a href="tel:+919087086777" style={{ textDecoration: 'none', color: 'inherit' }}>
                +91-9087086777
              </a>{' '}
              &{' '}
              <a href="tel:+12015898827" style={{ textDecoration: 'none', color: 'inherit' }}>
                +1 201-589-8827
              </a>
            </Typography>
            <Typography variant="subtitle1"><strong>Development center:</strong> {offices[0].address}</Typography>
          </Box>
        </Box>

        {/* Right: Form */}
        <Box sx={{ flex: 1 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
            <TextField name="firstName" label="First Name" fullWidth onChange={handleChange} value={formData.firstName} error={!!errors.firstName} helperText={errors.firstName} />
            <TextField name="lastName" label="Last Name" fullWidth onChange={handleChange} value={formData.lastName} error={!!errors.lastName} helperText={errors.lastName} />
            <TextField name="email" label="Email Address" fullWidth onChange={handleChange} value={formData.email} error={!!errors.email} helperText={errors.email} />
            <TextField name="company" label="Company Name" fullWidth onChange={handleChange} value={formData.company} error={!!errors.company} helperText={errors.company} />
            <TextField
              name="service"
              label="Looking For?"
              select
              fullWidth
              value={formData.service}
              onChange={handleChange}
              error={!!errors.service}
              helperText={errors.service}
            >
              <MenuItem value="">Select Service</MenuItem>
              {services.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}
            </TextField>
            <TextField name="message" label="How Can We Help You?" multiline rows={4} fullWidth onChange={handleChange} value={formData.message} error={!!errors.message} helperText={errors.message} />
            {/* TODO: Integrate reCAPTCHA here */}
            <Button type="submit" variant="contained" color="primary" size="large">Send Request</Button>
          </Box>
        </Box>
      </Box>

      {/* Global Offices */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 6 }}>
          Our Global Presence
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch', // all boxes same height
          }}
        >
          {offices.map((office, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                backgroundColor: '#0a3d62',
                color: '#fff',
                borderRadius: 2,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 400, // ensure same height
              }}
            >
              {/* Text Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {office.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {office.company}
                </Typography>
                <Typography variant="body2">{office.address}</Typography>
              </Box>

              {/* Iframe pushed to bottom */}
              <Box sx={{ mt: 'auto' }}>
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: 8 }}
                  allowFullScreen
                  loading="lazy"
                  title={office.name}
                ></iframe>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Request sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
