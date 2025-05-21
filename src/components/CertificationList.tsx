import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import { supabase } from '../supabase/supabaseClient';
import { Database } from '../types/supabase';
import CertificationCard from './CertificationCard';
import CertificationDetails from './CertificationDetails';

type Certification = Database['public']['Tables']['certifications']['Row'];

const CertificationList: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const { data, error } = await supabase
          .from('certifications')
          .select('*');

        if (error) throw error;

        setCertifications(data || []);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    }

    fetchCertifications();
  }, []);

  const handleCertificationClick = (certification: Certification) => {
    setSelectedCertification(certification);
  };

  const handleBack = () => {
    setSelectedCertification(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (selectedCertification) {
    return (
      <CertificationDetails
        certification={selectedCertification}
        onBack={handleBack}
      />
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={3}>
        {certifications.map((cert) => (
          <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Box onClick={() => handleCertificationClick(cert)} sx={{ cursor: 'pointer' }}>
              <CertificationCard certification={cert} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CertificationList; 