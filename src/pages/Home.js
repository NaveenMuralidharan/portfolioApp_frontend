import React, {useState} from "react";
import {Link} from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import RouteIcon from '@mui/icons-material/Route';
import IconButton from '@mui/material/IconButton';
import SchoolIcon from '@mui/icons-material/School';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ComputerIcon from '@mui/icons-material/Computer';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

  const theme = createTheme();
  theme.typography.h5 = {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
  };

const Home = (props)=> {

    return <Box sx={{ bgcolor: '#fcfbfa'}}>
            <AppBar sx={{bgcolor: '#fa750f', color: '#fcf8f5'}} position= 'static'>
                <Toolbar sx={{width: "100%"}}>
                    Business Driven IT<br></br>

                    <Tooltip title="About Naveen"> 
                        <IconButton 
                            component={Link} to="/about"
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Projects">
                        <IconButton
                            component={Link} to="/projects"
                        >
                            <EngineeringIcon />
                        </IconButton>
                    </Tooltip>

  
                </Toolbar>
            </AppBar>
        <Container sx={{ height: '600px'}} maxWidth="sm">
            

        
        
        
          <Container sx={{bgcolor: '#fcfbfa'}} maxWidth="sm">
            <br></br>
            
            <Box sx={{
                    display: 'flex', 
                    flex: 'wrap',
                    padding: 2  
                }}>

                <Stack>   
                <Paper elevation={3} sx={{padding:3}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5" component="div">
                        Welcome, my name is Naveen Muralidharan. <br></br>
                        With a strong background in microbiology and pharmaceutical manufacturing, coupled with experience in sales, management, and IT, Naveen is a versatile problem-solver who consistently drives efficiency and profitability for businesses.



                        </Typography>
                    </ThemeProvider>
                    
                </Paper>
                <br></br>
                <Paper elevation={3} sx={{padding:3}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5" component="div">
                        <SchoolIcon></SchoolIcon> <br></br>Masters of Microbial Biotechnology - NC State University (Wolfpack '12)
                        <br></br>
                        <br></br>
                        <WorkspacePremiumIcon></WorkspacePremiumIcon> <br></br>General Assembly Software Engineering Certification ('23)<br></br>
                        <br></br>
                        <br></br>
                        <ComputerIcon> </ComputerIcon><br></br>
                        HTML, CSS, vanilla JS, JSX, Bootstrap, Material UI <br></br> 
                        MongoDB, Express, React JS, Node JS (MEAN) <br></br>
                        Python, PostgreSQL, SQLlite, Django <br></br>
                        Git workflow, Markup, Deployment - Netlify, Render, Vercel
                        
                        <br></br>
                        <br></br>
                        <Stack direction = "row" spacing={3}>
                            <GitHubIcon></GitHubIcon>
                                <a href="https://github.com/NaveenMuralidharan">Github Profile</a>
                            
                            <LinkedInIcon></LinkedInIcon>
                                <a href="https://www.linkedin.com/in/naveenmuralidharan/">Linkedin Profile</a>
                        
                        </Stack>
                        </Typography>
                    </ThemeProvider>
                </Paper>
                <br></br>
                {/* <Paper elevation={3} sx={{padding:3}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h5" component="div">
                        <GitHubIcon></GitHubIcon>
                            <a href="https://github.com/NaveenMuralidharan">Github</a>
                        <br></br>
                        <LinkedInIcon></LinkedInIcon>
                            <a href="https://github.com/NaveenMuralidharan">Linkedin</a>
                        
                        </Typography>
                    </ThemeProvider>
                </Paper> */}
                

                </Stack> 
            </Box>
            </Container>
                
                PROJECTS:
                
                <Box sx={{
                    display: 'flex', padding: 4, bgColor: '#fcfbfa'
                }}>
                
                    <Stack direction="column" spacing={2}>
                        <Paper sx={{padding: 2, color: '#d17d2a'}} elevation={3}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h5" component="div">
                                    Decision App
                                    
                                    <hr></hr> 
                                    <br></br>
                                    
                                    Ennables management of regulatory disciplinary decisions data for insurance brokers in  Canada.
                                    <br></br>
                                    <br></br>
                                    <a href="https://main--decisionsapp.netlify.app/">View Site</a>
                                    <hr></hr>
                                    <br></br>
                                    
                                    Full CRUD / RESTful routes<br></br>
                                    SQLite, Python, Django, React JS <br></br>
                                    Deploy (Render+Netlify) 
                                    <br></br>
                                    {/* <hr></hr> */}
                                    <br></br>
                                    <GitHubIcon></GitHubIcon>
                                    <br></br>
                                    <a href="https://github.com/NaveenMuralidharan/Proj_4_Decisionsapp_Backend">Backend Github Repo</a>
                                    <br></br>
                                    <a href="https://github.com/NaveenMuralidharan/Proj_4_Decisionsapp_Frontend">Frontend Github Repo</a>
                                </Typography>
                            </ThemeProvider>        
                        </Paper>
                        
                        <Paper sx={{padding: 2, color: '#d17d2a'}} elevation={3}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h5" component="div">
                                    Knowledge Management App
                                                                      
                                    <hr></hr> 
                                    <br></br>

                                    Enables organizations to document SOPs 
                                    for all their business processes  in a simple, secure and sustainaible manner.
                                    <br></br>
                                    <br></br>
                                    <a href="https://bluedental-km-v1.onrender.com/">View Site</a>
                                    <hr></hr>
                                    <br></br>
                                    Full CRUD/REST/AUTH <br></br>
                                    MongoDB, EJX, Express, NodeJS, bcryptJS<br></br>
                                    Deploy Render
                                    <br></br>
                                    {/* <hr></hr> */}
                                    <br></br>
                                    <GitHubIcon></GitHubIcon>
                                    <br></br>
                                    <a href="https://github.com/NaveenMuralidharan/KM_App_V3">Github Repo</a>
                                    <br></br>
                                    
                                </Typography>
                            </ThemeProvider>        
                        </Paper>
                    
                    
                    
                        <Paper sx={{padding: 2, color: '#d17d2a'}} elevation={3}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h5" component="div">
                                    Process Mapper
                                                                      
                                    <hr></hr> 
                                    <br></br>
                                    Welcome to Process Mapper - the ultimate process mapping tool.
                                    Visualize and understand your business processes end to end,
                                    Train new hires, and secure your company's knowledge with ease.

                                    
                                    <br></br>
                                    <br></br>
                                    <a href="https://main--bespoke-smakager-1f8774.netlify.app/">View Site</a>
                                    <hr></hr>
                                    <br></br>
                                    Full CRUD/REST <br></br>
                                    MongoDB, Express, React JS, Mermaid JS, NodeJS<br></br>
                                    Deploy Render
                                    <br></br>
                                    {/* <hr></hr> */}
                                    <br></br>
                                    <GitHubIcon></GitHubIcon>
                                    <br></br>
                                    <a href="https://github.com/NaveenMuralidharan/Map-O">Backend Github Repo</a>
                                    <br></br>
                                    
                                    <a href="https://github.com/NaveenMuralidharan/map-o_frontend">Frontend Github Repo</a>
                                    <br></br>
                                    
                                </Typography>
                            </ThemeProvider>        
                        </Paper>
                    </Stack>
                    

                </Box>
                   
            
        
        </Container>
        </Box>
        
   

    
}

export default Home