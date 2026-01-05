import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, FormGroup, FormControlLabel, Checkbox, FormHelperText, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import RequestImage from '../../../assets/images/staffing/submitVacancy/vacancy.png';
import axios from 'axios';

const industries = ['IT', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other'];
const services = ['Consulting', 'Staffing', 'Training', 'Software Development', 'Other'];
const heardFromOptions = ['Instagram', 'YouTube', 'LinkedIn', 'Referral', 'Other'];

export default function RequestCallback() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    industry: '',
    service: '',
    jobFile: null,
    notes: '',
    heardFrom: [],
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  const handleChange = (e) => {
    const { name, files, type, checked, value } = e.target;
    if (files) {
      const file = files[0];
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (file && !allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, jobFile: 'Only PDF, DOC, or DOCX files are allowed' }));
        setFormData(prev => ({ ...prev, jobFile: null }));
      } else {
        setErrors(prev => ({ ...prev, jobFile: '' }));
        setFormData(prev => ({ ...prev, jobFile: file }));
      }


    } else if (type === 'checkbox' && name === 'terms') {
      setFormData({ ...formData, terms: checked });
    } else if (type === 'checkbox' && name === 'heardFrom') {
      const updatedArray = checked
        ? [...formData.heardFrom, value]
        : formData.heardFrom.filter(item => item !== value);
      setFormData({ ...formData, heardFrom: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validation update
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.company) newErrors.company = 'Required';
    if (!formData.designation) newErrors.designation = 'Required';
    if (!formData.industry) newErrors.industry = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.jobFile) newErrors.jobFile = 'Please upload a file (PDF, DOC, DOCX)';
    if (!formData.terms) newErrors.terms = 'You must accept terms and conditions';
    return newErrors;
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("RequestCallback Form Data:", formData);
      try {
        const formDataToSend = new FormData();

        // Append text fields
        Object.keys(formData).forEach((key) => {
          if (key === 'heardFrom') {
            formData.heardFrom.forEach((item) => formDataToSend.append('heardFrom[]', item));
          } else if (key === 'jobFile' && formData.jobFile) {
            formDataToSend.append('resume', formData.jobFile); // must match backend field name
          } else {
            formDataToSend.append(key, formData[key]);
          }
        });

        // Send request
        const response = await axios.post('/api/vacancy.php', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          setSnackbarOpen(true);
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            designation: '',
            industry: '',
            service: '',
            jobFile: null,
            notes: '',
            heardFrom: [],
            terms: false,
          });
          document.querySelector('input[type="file"]').value = '';
          setErrors({});
        } else {
          alert(response.data.message || 'Failed to submit. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('Error submitting form. Please try again later.');
      }
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 20, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      gap: 6,
      maxWidth: 1400, 
      mx: 'auto',
    }}
    >
      {/* Left - Image */}
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flex: 1 }}>
        <Box component="img" src={RequestImage} alt="Request Callback" sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }} />
      </motion.div>

      {/* Right - Form */}
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flex: 1 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#fff', p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>Submit a Vacancy</Typography>

          <TextField name="firstName" label="First Name" variant="outlined" fullWidth required onChange={handleChange} value={formData.firstName} error={!!errors.firstName} helperText={errors.firstName} />
          <TextField name="lastName" label="Last Name" variant="outlined" fullWidth required onChange={handleChange} value={formData.lastName} error={!!errors.lastName} helperText={errors.lastName} />
          <TextField name="email" label="Business Email" variant="outlined" fullWidth required onChange={handleChange} value={formData.email} error={!!errors.email} helperText={errors.email} />
          <TextField name="phone" label="Phone Number" variant="outlined" fullWidth required onChange={handleChange} value={formData.phone} error={!!errors.phone} helperText={errors.phone} />
          <TextField name="company" label="Company Name" variant="outlined" fullWidth required onChange={handleChange} value={formData.company} error={!!errors.company} helperText={errors.company} />
          <TextField name="designation" label="Designation" variant="outlined" fullWidth required onChange={handleChange} value={formData.designation} error={!!errors.designation} helperText={errors.designation} />

          <TextField
            name="industry"
            label="Industry"
            select
            fullWidth
            required
            value={formData.industry}
            onChange={handleChange}
            error={!!errors.industry}
            helperText={errors.industry}
          >
            <MenuItem value="">Please Select</MenuItem>
            {industries.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
          </TextField>

          <TextField
            name="service"
            label="Need Your Services In"
            select
            fullWidth
            required
            value={formData.service}
            onChange={handleChange}
            error={!!errors.service}
            helperText={errors.service}
          >
            <MenuItem value="">Please Select</MenuItem>
            {services.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
          </TextField>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
            {/* Upload Button */}
            <Button
              variant="outlined"
              component="label"
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                py: 1.5,
                fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
              }}
            >
              Upload Job Description / Profile / Role Details
              <input
                type="file"
                name="jobFile"
                hidden
                onChange={handleChange}
                accept=".pdf,.doc,.docx" // restrict file types
              />
            </Button>

            {/* Display selected file */}
            {formData.jobFile && (
              <Box
                sx={{
                  mt: 1,
                  px: 1.5,
                  py: 0.8,
                  border: '1px solid',
                  borderColor: 'grey.400',
                  borderRadius: 1,
                  display: 'inline-block',
                  backgroundColor: 'grey.100',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
                >
                  Selected File: <strong>{formData.jobFile.name}</strong>
                </Typography>
              </Box>
            )}

            {errors.jobFile && <FormHelperText error>{errors.jobFile}</FormHelperText>}
          </Box>

          <TextField
            name="notes"
            label="Point of Discussion / Additional Notes"
            multiline
            rows={4}
            fullWidth
            onChange={handleChange}
            value={formData.notes}
          />

          {/* Where did you hear from */}
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Where did you hear about us?</Typography>
            <FormGroup row>
              {heardFromOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox value={option} checked={formData.heardFrom.includes(option)} onChange={handleChange} name="heardFrom" />}
                  label={option}
                />
              ))}
            </FormGroup>
          </Box>

          {/* Terms & Conditions */}
          <FormControlLabel
            control={<Checkbox checked={formData.terms} onChange={handleChange} name="terms" />}
            label="I agree to the Terms and Conditions"
          />
          {errors.terms && <FormHelperText error>{errors.terms}</FormHelperText>}

          <Button type="submit" variant="contained" color="primary" size="large" sx={{ borderRadius: 2, mt: 2 }}>
            Submit
          </Button>
        </Box>
      </motion.div>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

