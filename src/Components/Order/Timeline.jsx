import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const getColor=(status)=>(status?'green':'gray');

export default function OrderStatusTimeline({orderStatus}) {
  return (
    <div className=''>
        <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {
        orderStatus.slice(0,3).map((data)=>
          <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
           <div className='w-[20vh] text-xs font-semibold pt-1'>{data.date}</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{backgroundColor:getColor(data.status)}} />
          <TimelineConnector sx={{backgroundColor:getColor(data.status)}} />
        </TimelineSeparator>
        <TimelineContent>
            <div className='w-[20vh] text-xs font-semibold pt-1'>{data.type}</div>
        </TimelineContent>
      </TimelineItem>)
      }

      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          <div className='w-[20vh] text-xs font-semibold pt-1'>{orderStatus[3].date}</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ backgroundColor:getColor(orderStatus[3].status), color: 'white' }} />
        </TimelineSeparator>
        <TimelineContent>
           <div className='w-[20vh] text-xs font-semibold pt-1'>{orderStatus[3].type}</div>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    </div>
  );
}
