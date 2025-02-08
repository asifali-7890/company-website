import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import {
    Alert,
    Stack,
    Box,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Paper,
    Typography,
    Container,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

// Styled container for the file drop area
const DropzoneContainer = styled.div`
  border: 2px dashed #d9d9d9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #fafafa;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  &:hover {
    border-color: #1976d2;
    background-color: #f0f0f0;
  }
`;

// Yup validation schema
const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
        .required('Phone number is required'),
    resume: Yup.mixed().required('Resume/CV is required'),
    coverLetter: Yup.string(),
    agreed: Yup.boolean().oneOf([true], 'You must agree to the privacy policy'),
});

const Careers = () => {
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Clear the submission message after 3 seconds
    useEffect(() => {
        if (submissionStatus) {
            const timer = setTimeout(() => setSubmissionStatus(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [submissionStatus]);

    const handleSubmit = async (values, { resetForm }) => {
        setIsLoading(true);
        const formDataToSend = new FormData();
        Object.keys(values).forEach((key) => {
            formDataToSend.append(key, values[key]);
        });

        try {
            const response = await fetch('/api/career', {
                method: 'POST',
                body: formDataToSend,
            });
            if (!response.ok) throw new Error('Submission failed');

            resetForm();
            setSubmissionStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box
            component="section"
            sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 12 }}
        >
            <Container maxWidth="md">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}
                    >
                        Join Our Team
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                        sx={{ mb: 4 }}
                    >
                        Help shape the future of digital innovation with BlueNext Technologies
                    </Typography>
                </motion.div>

                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Application Form
                        </Typography>

                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                phone: '',
                                resume: null,
                                coverLetter: '',
                                agreed: false,
                                subscribe: false,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue, values, errors, touched }) => (
                                <Form>
                                    {/* Full Name */}
                                    <Field name="fullName">
                                        {({ field, meta }) => (
                                            <TextField
                                                {...field}
                                                label="Full Name"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                error={meta.touched && Boolean(meta.error)}
                                                helperText={meta.touched && meta.error}
                                            />
                                        )}
                                    </Field>

                                    {/* Email Address */}
                                    <Field name="email">
                                        {({ field, meta }) => (
                                            <TextField
                                                {...field}
                                                label="Email Address"
                                                type="email"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                error={meta.touched && Boolean(meta.error)}
                                                helperText={meta.touched && meta.error}
                                            />
                                        )}
                                    </Field>

                                    {/* Phone Number */}
                                    <Field name="phone">
                                        {({ field, meta }) => (
                                            <TextField
                                                {...field}
                                                label="Phone Number"
                                                type="tel"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                error={meta.touched && Boolean(meta.error)}
                                                helperText={meta.touched && meta.error}
                                            />
                                        )}
                                    </Field>

                                    {/* Resume/CV */}
                                    <Box mt={2}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Resume/CV
                                        </Typography>
                                        <Dropzone
                                            onDrop={(acceptedFiles) =>
                                                setFieldValue('resume', acceptedFiles[0])
                                            }
                                            accept=".pdf,.doc,.docx"
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <DropzoneContainer {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    {values.resume ? (
                                                        <Typography variant="body2">
                                                            {values.resume.name}
                                                        </Typography>
                                                    ) : (
                                                        <Typography variant="body2">
                                                            Drag & drop a file here, or click to select one
                                                        </Typography>
                                                    )}
                                                </DropzoneContainer>
                                            )}
                                        </Dropzone>
                                        {errors.resume && touched.resume && (
                                            <Typography variant="caption" color="error">
                                                {errors.resume}
                                            </Typography>
                                        )}
                                    </Box>

                                    {/* Cover Letter */}
                                    <Field name="coverLetter">
                                        {({ field, meta }) => (
                                            <TextField
                                                {...field}
                                                label="Cover Letter"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                multiline
                                                rows={4}
                                                placeholder="Tell us why you're a great fit..."
                                                error={meta.touched && Boolean(meta.error)}
                                                helperText={meta.touched && meta.error}
                                            />
                                        )}
                                    </Field>

                                    {/* Checkboxes */}
                                    <Box mt={2}>
                                        <Field name="agreed">
                                            {({ field, form }) => (
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={field.value}
                                                            onChange={(e) =>
                                                                form.setFieldValue(field.name, e.target.checked)
                                                            }
                                                            color="primary"
                                                        />
                                                    }
                                                    label={
                                                        <Typography variant="body2">
                                                            I agree to the{' '}
                                                            <Link to="/privacypolicy">Privacy Policy</Link>
                                                        </Typography>
                                                    }
                                                />
                                            )}
                                        </Field>
                                        {errors.agreed && touched.agreed && (
                                            <Typography variant="caption" color="error">
                                                {errors.agreed}
                                            </Typography>
                                        )}
                                    </Box>

                                    <Box mt={1}>
                                        <Field name="subscribe">
                                            {({ field, form }) => (
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={field.value}
                                                            onChange={(e) =>
                                                                form.setFieldValue(field.name, e.target.checked)
                                                            }
                                                            color="primary"
                                                        />
                                                    }
                                                    label={
                                                        <Typography variant="body2">
                                                            Subscribe to our newsletter
                                                        </Typography>
                                                    }
                                                />
                                            )}
                                        </Field>
                                    </Box>

                                    {/* Submit Button */}
                                    <Box mt={3}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            disabled={!values.agreed || isLoading}
                                            startIcon={
                                                !isLoading ? (
                                                    <BriefcaseIcon className="w-5 h-5" />
                                                ) : null
                                            }
                                            sx={{
                                                py: 1.5,
                                                fontSize: '1rem',
                                                background: values.agreed
                                                    ? 'linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)'
                                                    : 'grey',
                                                color: 'white',
                                                '&:hover': {
                                                    boxShadow: values.agreed
                                                        ? '0 4px 10px rgba(0, 0, 0, 0.3)'
                                                        : 'none',
                                                },
                                            }}
                                        >
                                            {isLoading ? (
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <FaSpinner className="animate-spin mr-1" />
                                                    Submitting...
                                                </Box>
                                            ) : (
                                                'Submit Application'
                                            )}
                                        </Button>
                                    </Box>

                                    {submissionStatus && (
                                        <Stack spacing={2} sx={{ mt: 3 }}>
                                            <Alert
                                                severity={submissionStatus}
                                                variant="filled"
                                                sx={{ borderRadius: 2 }}
                                            >
                                                {submissionStatus === 'success'
                                                    ? 'Application submitted successfully!'
                                                    : 'Failed to submit application. Please try again.'}
                                            </Alert>
                                        </Stack>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </motion.div>
                </Paper>

                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        Questions?{' '}
                        <Link
                            to="mailto:careers@bluenexttech.com"
                            style={{ color: '#1976d2', textDecoration: 'underline' }}
                        >
                            careers@bluenexttech.com
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Careers;