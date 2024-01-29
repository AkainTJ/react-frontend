import { Card, CardContent, CardMedia, Grid, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';

const schoolImages = [
    "https://nalandacollege.lk/wp-content/uploads/2021/09/nalanda-college-2.jpg",
    "https://th.bing.com/th/id/R.47bb25494cb35e9e0075941e752b4081?rik=HAJWbti8lOK5qA&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f02%2f83%2f45%2f25_full.jpg&ehk=UPdft%2fzA4ObIbY7BmrGdDO%2bEZp98goO%2bE0B5Q4RQQo4%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.I6_h1uDRqQ9ChiS86nYC1QHaEK?rs=1&pid=ImgDetMain",
    "https://nalandacollege.lk/wp-content/uploads/2021/09/library.jpg",
    "https://th.bing.com/th/id/R.e183578e45a25f31e8bdfc4952a2a935?rik=riNR%2fUcbS4hcvw&riu=http%3a%2f%2fnalandaoba.lk%2fweb%2fassets%2fimages%2fslideshow%2fslide3.jpg&ehk=SxhuISW3%2bICkjcMt10mbJIu%2bUenlQQ3pHIqNqGgzY34%3d&risl=&pid=ImgRaw&r=0",
    
];
function MySchool(){
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    }
    return ( 
        
   <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h4" gutterBottom></Typography>
        <Slider value={sliderValue} onChange={handleSliderChange} min={0} max={schoolImages.length-1} step={1}
        marks valueLabelDisplay='auto' valueLabelFormat={(value)=> value+1} />
        <Card>
            <CardMedia component="img" alt={"School"} height="400" image={schoolImages[sliderValue]} />
            <CardContent>
                
                <Typography>School Details <br></br> MY SCHOOL IS NALANDA COLLEGE <br></br> IT IS LOCATED IN COLOMBO 10 <br></br>  IT IS A BIG SCHOOL <br></br> OUR PRINCIPAL IS MR U.D Iran Champika</Typography>
            </CardContent>
        </Card>
    </Grid>
   </Grid>
    );
}
export default MySchool;