import { Card, CardContent, Typography, Box, CardActionArea, Chip } from '@mui/material';
import { Database } from '../types/supabase';

type Certification = Database['public']['Tables']['certifications']['Row'];

interface CertificationCardProps {
  certification: Certification;
  onClick: () => void;
}

export default function CertificationCard({ certification, onClick }: CertificationCardProps) {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ height: '100%' }}>
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h2" 
            sx={{ 
              color: 'primary.main',
              fontWeight: 'bold',
              mb: 2
            }}
          >
            {certification.name}
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Chip
              label={certification.code}
              color="primary"
              size="small"
              sx={{
                fontWeight: 'medium',
                backgroundColor: (theme) => theme.palette.primary.main + '1A', // 10% opacity
                color: 'primary.main',
              }}
            />
          </Box>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              lineHeight: 1.5,
            }}
          >
            {certification.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}