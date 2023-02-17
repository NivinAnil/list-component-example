import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

type Props = {
  id: any;
  name: String;
  createdBy: String;
  type: String;
  maxScore: Number;
  minScore: Number;
};

const AssessmentCard = (props: Props) => {
  return (
    <Card
      id={props.id}
      sx={{
        m: '10px',
        pl: '10px',
        ':hover': { opacity: '90%' },
      }}
    >
      <div
        style={{
          padding: '5px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '300px',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography
              variant='h6'
              sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              {props.name}
            </Typography>
            <Typography variant='body1'>{props.createdBy}</Typography>
          </div>
          <Typography variant='body1' sx={{ p: '5px' }}>
            {`Type : ${props.type}`}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Typography variant='body1'>
            {`Max Score : ${props.maxScore}`}
          </Typography>
          <Typography variant='body1'>
            {`Min Score : ${props.minScore}`}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default AssessmentCard;
