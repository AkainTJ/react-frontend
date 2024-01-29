import styled from '@emotion/styled';
import { Avatar, Card, CardContent, Grid, Paper, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';

const AnimatedCard = styled(Card)`
  transition : transform 0.3s ease-in-out;
  &:hover{
    transform : scale(1.05);
    background-color: #d775d5;
  }
  cursor : pointer;
  background-color: #efb7ee;
`;

function AboutMe(){
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center" alignContent="center">
            <Grid item>
            <Paper elevation={3} style={{backgroundColor : 'rgb(171 53 152)', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    About Myself
                </Typography>
            </Paper>
                <Slide direction="right" in={true} timeout={5}>
                    <AnimatedCard onClick={handleCardClick} 
                    style={{transform: expanded ? 'scale(1.25)' : 'scale(1)' }}>
                        <CardContent>
                            <Avatar alt="My Avatar"
                            src="https://lakeoktransport.ca/images/avataaars4.png"
                            sx={{width: 80, height: 80, marginBottom : 2}} />
                            <Typography variant="h6" gutterBottom>
                                Hello My Friends! Welcome to my Web App! <br></br>
                                MY name is Akain Thewmaka Jayawardana 
                            </Typography>
                            <Typography>
                                I am an enthusiastic Programmer. I hereby welcome you to my React Web Application.<br>
                                </br> I'm 13 years old <br></br> I like pizza <br></br> I have a pet dog <br></br> I have a brother <br></br> I like to play tenis  <br></br> I am a Sri lankan

                            </Typography>
                        </CardContent>
                    </AnimatedCard>
                </Slide>
            </Grid>

            <Grid item>

            <Paper elevation={3} style={{backgroundColor : '#3498DB', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    A List of my Friends 
                </Typography>
                <img src='https://th.bing.com/th/id/R.ceae38d4b783947aa3f096283aaa4285?rik=09qA3lEV9A3iMw&pid=ImgRaw&r=0' ></img>

            </Paper>
            <Card style={{backgroundColor : "#aecce5"}}>
            <CardContent>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars1.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Sawean Eragoda </Typography>
                        <Typography> Expertise : HTML, badminton  </Typography>
                        <Typography> Hi my name is Sawean Eragoda .My ambition is to be a doctor  . , I like to play badminton  </Typography>

                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars3.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Thejan Rahul Shakya </Typography>
                        <Typography > Expertise : table tenis ,biology  </Typography>
                        <Typography > Hi my name is  Thejan Rahul Shakya . I am a Software Developer. I like to play table tenis  </Typography>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://lakeoktransport.ca/images/avataaars4.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Yasiru Thilakarathna </Typography>
                        <Typography > Expertise : HTML, C#, Processing, React, python , javascript </Typography>
                        <Typography > Hi my name is Yasiru Thilakarathna . I am a Software Developer.  My ambition is to be a ethical hacker </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>

        </Grid>
    );

}

export default AboutMe;