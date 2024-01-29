import { Card, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyVillage = () => {

    const villageInfo = {
        name: "Galle",
        title: "My Hometown",
        description: "Galle (Sinhala: ගාල්ල, romanized: Gālla; Tamil: காலி, romanized: Kāli) (formerly French: Point de Galle) is a major city in Sri Lanka, situated on the southwestern tip, 119 km (74 mi) from Colombo. Galle is the provincial capital and largest city of Southern Province, Sri Lanka and is the capital of Galle District.Galle was known as Gimhathiththa[1] before the arrival of the Portuguese in the 16th century, when it was the main port on the island. Ibn Batuta, a Moroccan Berber Muslim traveller in the 14th century, referred to it as Qali.[2] Galle reached the height of its development in the 18th century, during the Dutch colonial period. Galle is the best example of a fortified city built by the Portuguese in South and Southeast Asia, showing the interaction between Portuguese architectural styles and native traditions. The city was extensively fortified by the Dutch during the 17th century from 1649 onwards. The Galle fort is a World Heritage Site and is the largest remaining fortress in Asia built by European occupiers. Other prominent landmarks in Galle include the city's natural harbour, the National Maritime Museum, St. Mary's Cathedral founded by Jesuit priests, one of the main Shiva temples on the island, and Amangalla, the historic luxury hotel. On 26 December 2004, the city was devastated by the massive tsunami caused by the 2004 Indian Ocean earthquake, which occurred off the coast of Indonesia a thousand miles away. Thousands were killed in the city alone. Galle is home to the Galle International Stadium, which is considered to be one of the most picturesque cricket grounds in the world.[3] The ground, which was severely damaged by the tsunami, was rebuilt and test matches resumed there on 18 December 2007.Important natural geographical features in Galle include Rumassala in Unawatuna, a large mound-like hill that forms the eastern protective barrier to Galle Harbour. Local tradition associates this hill with some events of Ramayana, one of the great Hindu epics. The major river in the area is the Gin Ganga, which begins from Gongala Kanda, passes villages such as Neluwa, Nagoda, Baddegama, Thelikada and Wakwella, and reaches the sea at Gintota. The river is bridged at Wakwella by the Wakwella Bridge.",
        gallery: [
            { id: 1, imageUrl: 'https://th.bing.com/th/id/R.f2125daa8ee76a51fa2ec1e6d0e57fbd?rik=MbqSIXij6oBQOw&riu=http%3a%2f%2fwww.adventurouskate.com%2fwp-content%2fuploads%2f2014%2f12%2fDSC_04102.jpg&ehk=eccfOiAXeXRvKhmd88GjoqzuItgfnWCC8VpLKusgQ%2bI%3d&risl=&pid=ImgRaw&r=0', caption: 'Beauty of Dehiwala' },
            { id: 2, imageUrl: 'https://img.lifeisoutside.com/getaways/2258/featured/result.jpg', caption: 'Welcome to Dehiwala' },
            { id: 3, imageUrl: 'https://th.bing.com/th/id/R.c808f33f32933a434998be37d48b9484?rik=GHhh7enwMuFp4w&pid=ImgRaw&r=0', caption: 'A Glance of Dehiwala' },
        ]
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        {villageInfo.title} is {villageInfo.name}
                    </Typography>
                    <Divider style={{ margin: '10px 0' }} />
                    <Typography variant="body1" >
                        {villageInfo.description}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: 20 }}>
                    <Typography variant="h5" gutterBottom>
                        Here is my location!
                    </Typography>
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.83754120017!2d80.17071123165118!3d6.055975343779761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1705507417239!5m2!1sen!2slk" width="400" height="300" allowfullscreen="" loading="lazy" ></iframe>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Image Gallery
                </Typography>
                <Grid container spacing={2}>
                    {villageInfo.gallery.map((image) => (
                        <Grid item xs={12} sm={6} md={4} key={image.id}>
                            <Card>
                                <CardMedia component="img" height="400" image={image.imageUrl} alt={image.caption} />
                                <CardContent>
                                    <Typography variant="caption" color="textSecondary">
                                        {image.caption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    );
};

export default MyVillage;