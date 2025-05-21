import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  LinearProgress,
  IconButton,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Database } from '../types/supabase';
import { supabase } from '../supabase/supabaseClient';

type Certification = Database['public']['Tables']['certifications']['Row'];
type Topic = Database['public']['Tables']['topics']['Row'];

interface CertificationDetailsProps {
  certification: Certification;
  onBack: () => void;
}

export default function CertificationDetails({ certification, onBack }: CertificationDetailsProps) {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const { data, error } = await supabase
          .from('topics')
          .select('*')
          .eq('certification_id', certification.id)
          .order('percentage', { ascending: false });

        if (error) throw error;

        setTopics(data || []);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    }

    fetchTopics();
  }, [certification.id]);

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={onBack} sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          {certification.name}
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Certification Details
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Code: {certification.code}
        </Typography>
        <Typography variant="body1">
          {certification.description}
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Exam Topics
        </Typography>
        {loading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <List>
            {topics.map((topic, index) => (
              <Box key={topic.id}>
                {index > 0 && <Divider />}
                <ListItem>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="subtitle1">
                          {topic.title}
                        </Typography>
                        <Typography variant="subtitle2" color="primary">
                          {topic.percentage}%
                        </Typography>
                      </Box>
                    }
                    secondary={topic.description}
                  />
                </ListItem>
              </Box>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
} 