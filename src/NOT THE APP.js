
import {useState, useEffect}  from 'react';
import useSound from 'use-sound';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import soundQ from './sounds/Q.mp3'
import soundW from './sounds/W.mp3'
import soundE from './sounds/E.mp3'
import soundA from './sounds/A.mp3'
import soundS from './sounds/S.mp3'
import soundD from './sounds/D.mp3'
import soundZ from './sounds/Z.mp3'
import soundX from './sounds/X.mp3'
import soundC from './sounds/C.mp3'











const multiplier = 1
const size = 64 * multiplier
const boxSize = 300  * multiplier


const Pad = styled(Button)(({ theme }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  padding:0,
  margin: 'auto',
  fontSize: 10,
  
}));


// const MyBox = styled(Box)(({ theme }) => ({
//   borderRadius: 10 ,
// }));

const gridParent = {
  margin:0, 
  // backgroundColor: '#dff4ff',
  width: boxSize,
  height: boxSize,
  borderRadius: 0,
  padding:0
}

const gridChild = {
  margin:'auto', 
  width: size *1.2,
  height: size *1.2,

}

const grandParent = {
  display:'flex',
  width: 2 * boxSize,
  height:  boxSize,
  backgroundColor: '#dff4ff',
  borderRadius: 5,
  margin:'auto ',
  alignItems: 'center'
 
}





function App() {

  let audio;
  const [volume,setVolume] = useState(0.30)

  const handleChange = (event, newVolume) => {
    setVolume(newVolume);
    console.log("volume is ", volume )
  };

  // const handleChange = (event, newVolume) => {
  //   setVolume(newVolume);
  // };


const Play = props => {
  audio = new Audio(props)
  volume = volume
}

function Plays(key){
  const [playSound] = useSound(key,{volume: volume})
  return playSound
}

const handleKeyPress = (e)=>{
    switch(e.keyCode){
      case 81:
      Play(soundQ) 
      audio.play()
      break;
      case 87:
      Play(soundW) 
      audio.play()
      break;
      case 69:
      Play(soundE) 
      audio.play()
      break;
      case 65:
      Play(soundA) 
      audio.play()
      break;
      case 83:
      Play(soundS) 
      audio.play()
      break;
      case 68:
      Play(soundD) 
      audio.play()
      break;
      case 90:
      Play(soundZ) 
      audio.play()
      break;
      case 88:
      Play(soundX) 
      audio.play()
      break;
      case 67:
      Play(soundC) 
      audio.play()
      break;
      default:
    }
}

useEffect(()=>{
  document.addEventListener("keydown",handleKeyPress);
  return () =>{
      document.removeEventListener("keydown",handleKeyPress);
  }
},[])
 
// onKeyPress={(e) => handler(e)}
  return (
     <Container  fixed  sx={{
      display: 'flex',
      alignItems: 'flex-start',
      bgcolor: 'background.paper',
      height: '100vh',
      borderRadius: 1,
    }}>
      
      <Grid  container sx={grandParent}>
        <Grid container rowSpacing={2} columnSpacing={1*multiplier} display="flex" justifyContent="center" alignItems="center" sx={gridParent} columns={12}>
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" >
            <Pad  variant='contained' > Q</Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad  variant='contained'> W </Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad  variant='contained'> E</Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad   variant='contained'>A </Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad  variant='contained'> S</Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad  variant='contained'>D </Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
           <Pad  variant='contained'> Z</Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad  variant='contained'>X </Pad>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="space-evenly" alignItems="center" >
            <Pad  variant='contained'> C</Pad>
          </Grid>
        </Grid>
        <Grid container  sx={gridParent}  alignItems= 'center'>
        
          <Grid xs={12} display="flex" justifyContent="space-evenly" alignItems={'center'}>
            <Stack> 
              <Typography sx={{color: '#1976d2'}} margin={'auto'}>Power</Typography>
            <Stack direction="row" spacing={0} alignItems="center">
              <Typography sx={{color: '#1976d2'}}> Off</Typography>
              <Switch  defaultChecked color="primary" />
              <Typography sx={{color: '#1976d2'}}>On</Typography>
            </Stack>
            </Stack>
          </Grid>

          <Grid xs={12}>
          <Box sx={{ width: 200,margin:'auto' }} alignItems='center' >
      <Stack spacing={2} direction="row" sx={{ mb: 1}} alignItems="center" >
        <VolumeDown sx={{fill:'#1976d2'}}/>
        <Slider aria-label="Volume" value={volume} onChange={handleChange} />
        <VolumeUp sx={{fill:'#1976d2'}}/>
      </Stack>
    </Box>
        
      
          </Grid>
        
        </Grid>
        </Grid>
      
    
      
      

     </Container>
   
  );
}

export default App;
