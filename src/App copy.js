
import {useState, useEffect}  from 'react';
// import useSound from 'use-sound';
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
import Data from './sounds'










const multiplier = 1
const size = 64 * multiplier
const boxSize = 300  * multiplier



const Pad = styled(Button)(({ theme }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  padding:0,
  margin: 'auto',
  fontSize: 16,
  fontWeight:700
  
}));







const gridParent = {
  margin:0, 
  // backgroundColor: '#dff4ff',
  width: boxSize,
  height: boxSize,
  borderRadius: 0,
  padding:0
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

const descBoxParent = {
  display: 'block',
  width: boxSize,
  height: 1/3 * boxSize,
  backgroundColor: '#dff4ff',
  borderRadius: 5,
  margin:'auto ',
  alignItems: 'center'
}








      


  
      function Tuts({obj, volume, power,setDescriptor}) {

        

        useEffect(()=>{
            document.addEventListener("keydown",handleKeyPress);
            document.addEventListener("keyup",handleKeyUp);
            document.addEventListener("mouseup",handleMouseUp);
            return () =>{
                document.removeEventListener("keydown",handleKeyPress);
                document.removeEventListener("keyup",handleKeyUp);
                document.removeEventListener("mouseup",handleMouseUp);
            }
        },[power,volume,setDescriptor])

        const handleKeyPress = (e)=>{
            if(e.keyCode==obj.code){
                console.log("power is ", power)
                if(power == true){
                  playSound()
                  
                }
            }
        }

        const handleKeyUp = (e) => {
          if(e.keyCode==obj.code){
            console.log("key released")
            setTimeout(()=>{setDescriptor("  ")}, 300)
            // 
          }
        }

        const handleMouseUp = (e) => {
          
            console.log("mouse released")
            setTimeout(()=>{setDescriptor("  ")}, 300)
        }

        const playSound = () => {
          const audio = document.getElementById(obj.id);
          audio.volume = volume/100;
          audio.currentTime = 0;
          audio.play();
          setDescriptor(obj.details)
        };
      
        return (
          <Grid onMouseDown={() => {power && playSound()}} key={obj.id} onMouseUp={ handleMouseUp } xs={4} display="flex" justifyContent="space-evenly" alignItems="center" className='drum-pad' id={obj.details} >
                
                <Pad  onMouseDown={() => {power && playSound()}} variant='contained'>
                   {obj.id}
                   <audio className="clip" id={obj.id} src={obj.url} />
                   </Pad>
              </Grid>
        );
      }

      

  


  


function ControlPanel({power,toggleChecked,volume,handleVolume,descriptor}){
  
  return (
    
 <Grid container xs={6} sx={{display:"flex",flexGrow:1}}  direction="column" rowSpacing={7} > 
<Grid className="1" sx={{width:'100%',display:"flex",justifyContent:"center"}}>
            <Stack spacing={0} margin={'auto'} > 
                  <Typography margin={"inherit"} sx={{color: '#1976d2'}} >Power</Typography>
                  <Stack direction="row" spacing={1}  >
                      <Typography sx={{color: '#1976d2'}}> Off</Typography>
                      <Switch margin={'auto'} checked={power} onChange={toggleChecked} defaultChecked color="primary" />
                      <Typography sx={{color: '#1976d2'}}>On</Typography>
                  </Stack>
                 
         
            </Stack>
            </Grid>


<Grid  className="2" sx={{width:'100%',display:"flex",flexGrow:1}}>
  <Stack direction="row"  spacing={2} margin={'auto'} >
    <VolumeDown/>
    <Slider style={{ width: 160 }}aria-label="Volume" value={volume} onChange={handleVolume} />
    <VolumeUp/>
    </Stack>
</Grid>  
<Grid  className="3"  sx={{width:'100%',display:"flex",justifyContent:"center",minHeight:88}} >
  <Typography sx={{color: '#1976d2',fontWeight:700}} variant='h6' id="display"> {descriptor}</Typography>
</Grid>  
 

   </Grid>


  )
}



function App() {
  const [power,setPower] = useState(true)

  const powerToggle = () => {
    setPower((prev) => !prev);
  };

  const [volume,setVolume] = useState(30)

  const handleChange = (event, newVolume) => {
    setVolume(newVolume);
  };
  

  const [descriptor,setDescriptor] = useState('  ')

  

 

  return (
     <Container className='MegaCont' fixed id="drum-machine" sx={{
      display: 'flex',
      alignItems: 'flex-start',
      bgcolor: 'background.paper',
      height: '100vh',
      borderRadius: 1,
    }}>


      
      <Grid  container sx={grandParent} >
      {/* <Cobex volume = {volume} power={power}/> */}
        <Grid container xs={6}  display="flex" justifyContent="center" alignItems="center" sx={gridParent} columns={12} > 
                  {Data.map((obj) => (
                  <Tuts key={obj.id} obj={obj} volume={volume} power={power} setDescriptor={setDescriptor} />
                  ))}
                
                </Grid>
        <ControlPanel power={power} toggleChecked={powerToggle} volume={volume} handleVolume={handleChange} descriptor={descriptor}/>



      </Grid>
      
    


      
        
     </Container>
   
   
  );
}

export default App;
