import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  LinearProgress,
  Box,
  Collapse,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { supabase } from '../supabase/supabaseClient';
import { Topic } from '../types/supabase';

interface TopicsListProps {
  certificationId: number;
}

const TopicsList: React.FC<TopicsListProps> = ({ certificationId }) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  useEffect(() => {
    fetchTopics();
  }, [certificationId]);

  const fetchTopics = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('topics')
        .select('*')
        .eq('certification_id', certificationId)
        .order('percentage', { ascending: false });

      if (error) {
        throw error;
      }

      setTopics(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch topics');
    } finally {
      setLoading(false);
    }
  };

  const handleTopicClick = (topicId: number) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Paper elevation={0} sx={{ mt: 2 }}>
      <List>
        {topics.map((topic) => (
          <React.Fragment key={topic.id}>
            <ListItem
              button
              onClick={() => handleTopicClick(topic.id)}
              sx={{
                borderRadius: 1,
                mb: 1,
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="subtitle1" component="span">
                      {topic.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        ml: 2,
                      }}
                    >
                      {topic.percentage}%
                    </Typography>
                  </Box>
                }
              />
              <IconButton edge="end" size="small">
                {expandedTopic === topic.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </ListItem>
            <Collapse in={expandedTopic === topic.id} timeout="auto" unmountOnExit>
              <Box sx={{ px: 2, pb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {topic.description}
                </Typography>
              </Box>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TopicsList; 