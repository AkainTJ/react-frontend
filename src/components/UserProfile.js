import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography, Paper } from '@mui/material';
import { PaidOutlined } from '@mui/icons-material';

const UserProfile = ()  => {

    const user = {
        name : 'AKAIN THEWMAKA',
        school : 'NALANDA COLLEGE, Colombo',
         BIRTH : '2010-4-27',
        email : 'Akaintj@gmail.com',
        description : 'I am a programming enthusiast!',
        hobby : ' Reading books',
        hometown : 'Pelawatta',
        age : '13',
        phone : '0718187324',
        ambition : 'Doctor'
    };

    return (
        
       <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3} style={{ marginTop : "64px"}}>
            <Paper style={{padding : 20 , textAlign : 'center' , alignItems : 'center', display : 'flex', justifyContent : 'center', flexDirection: 'column'}}>
                <Avatar 
                alt="My Image"
                src="https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"
                sx={{width : 120 , height : 120}} />
                <Typography variant="subtitle1">
                    {user.name}
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9} style={{ marginTop : "64px"}}>
            <Paper style={{ padding : 20 }}>
                <Typography variant="subtitle1">
                    <strong>School : </strong> {user.school}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Date of Birth : </strong> {user.dob}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Email : </strong> {user.email}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>Description : </strong> {user.description}
                </Typography>
            </Paper>
            <center>
            <img src='https://img1.picmix.com/output/pic/normal/7/6/2/8/10118267_b50de.gif'/>
            </center>
        </Grid>


       </Grid>
    );
}
export default UserProfile;