import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className='footer' sx={{ width: '100%'}} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} 
        style={{backgroundColor: "#07055c", padding: "1px"}}
      >
        <Typography style={{color: "white", fontSize:"27px", textAlign:"left"}} >&copy; Q-Fund</Typography>
        {/* <Typography style={{color: "white", fontSize:"27px", textAlign:"left"}}> Q-Fund Team</Typography> */}
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} style={{color: "white"}} /> */}
        {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} style={{color: "white"}}/> */}
        {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} style={{color: "white"}}/> */}
      </BottomNavigation>
    </Box>
  );
}







// import { Container, Row, Col } from 'react-bootstrap';
// import { GiHeartBattery, GiCoffeeMug } from 'react-icons/gi';
// // import IconBar from './IconBar';

// const Footer = () => {
//     return(
//         <>
//             {/* <footer fixed="bottom">
//                 {/* <hr className="mx-4 mt-5" /> */}
//                 <Container fluid className="d-none d-md-block" >
//                     <Row className="my-4 ">
//                         <Col md={3}>
//                             &copy; Q-Fund
//                         </Col>
//                         {/* <Col md={5} className="ml-lg-5 pl-5">
//                             madeWith = (<GiHeartBattery /> , <GiCoffeeMug />) =&gt; &#123;<span style={{"fontStyle": "italic"}}>Q-Fund Team</span>&#125;
//                         </Col> */}
//                         {/* <Col>
//                             <IconBar />
//                         </Col> */}
//                     </Row>
//                 </Container>
//                 <Container fluid className="d-md-none mb-3">
//                     {/* <Row>
//                         <div className="mx-auto mt-1">
//                             &copy;Q-2022 
//                         </div>
//                     </Row> */}
//                     <Row>
//                         <div className="mx-auto my-3">
//                             madeWith = (<GiHeartBattery /> , <GiCoffeeMug />) =&gt; &#123;<span style={{ "fontStyle": "italic" }}>Q-Fund Team</span>&#125;
//                         </div>
//                     </Row>
//                     <Row>
//                         <div className="mx-auto">
//                             {/* <IconBar /> */}
//                         </div>
//                     </Row>
//                 </Container>
//             </footer> */}
//         </>
//     )
// }

// export default Footer;

