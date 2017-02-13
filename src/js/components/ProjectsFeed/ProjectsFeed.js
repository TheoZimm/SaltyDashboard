import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';

export default function ProjectsFeed(props) {
  return (
    <Columns masonry={false}
      size='medium'
      justify='center'>
      <Box align='center'
        pad='medium'
        margin='small'
        colorIndex='light-2'>
        <Card thumbnail='/img/carousel-1.png'
          label='Sample Label'
          heading='Sample Heading'
          description='Sample description providing more deta'
          />
      </Box>
      <Box align='center'
        pad='medium'
        margin='small'
        colorIndex='light-2'>
        <Card thumbnail='/img/carousel-1.png'
          label='Sample Label'
          heading='Sample Heading'
          description='Sample description providing more deta'
          />
      </Box>
      <Box align='center'
        pad='medium'
        margin='small'
        colorIndex='light-2'>
        <Card thumbnail='/img/carousel-1.png'
          label='Sample Label'
          heading='Sample Heading'
          description='Sample description providing more deta'
          />
      </Box>
    </Columns>
  );

};
