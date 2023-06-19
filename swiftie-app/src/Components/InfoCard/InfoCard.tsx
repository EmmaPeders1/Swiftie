import React from 'react';
import { FC, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';

interface infoCardProps {
  album_id: string;
  title: string;
  release_date: string;
}

const InfoCard: FC<infoCardProps> = ({ album_id, title, release_date,  }) => {

  return (
    <Card
      aria-label="info card"
      sx={{
        width: 200,
        height: 200,
      }}
      id={album_id}
    >
      {/* Header with the title (which is big due to some long titles) */}
      <CardHeader
        aria-label={"album id: " + album_id + ", album title: " + title + "release date: " + release_date }
        title={title}
        subheader={release_date}
        sx={{
          minHeight: 50,
        }}
      />
      <CardActions disableSpacing>
        <Button>Read more</Button>
      </CardActions>
    </Card>
  );
}

export default InfoCard;
