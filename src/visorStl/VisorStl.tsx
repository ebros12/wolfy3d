import { useState } from "react";
import {StlViewer} from "react-stl-viewer";
import { HexColorPicker } from "react-colorful";
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardActionArea, CardMedia, Typography, CardContent,  ButtonGroup, Button} from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GradientIcon from '@mui/icons-material/Gradient';






const floorProps={
    gridWidth:200,
    gridLength:200
}

export const VisorStl =() => {
    const [rotateX, setrotateX] = useState(4.6)
    const [rotateY, setrotateY] = useState(0.3)
    const [positionY, setpositionY] = useState(-100)
    const [positionX, setpositionX] = useState(0)
    
    const [color, setColor] = useState("#4FA095");
    const [BGcolor, setBGColor] = useState("#c9c9c9");
    const [stlObj, setStlObj] = useState("ppv.stl")

    const [options, setoptions] = useState(false)
    const [options2, setoptions2] = useState(false)

    const style = {
        top: 0,
        left: 0,
        height: '85vh',
        boxShadow: '1px 2px 9px gray',
        borderRadius:'30px',
        background:BGcolor
    }


    const modelProps = {
        color:color,
        positionX:positionX,
        positionY:positionY,
        rotationY:rotateY,
        rotationX:rotateX,
        scale:1
      }

      
    return (
        <Grid container spacing={2}>
            <Grid xs={12} md={2} container spacing={2}>
            <Grid xs={12} md={12}>
                <Typography variant="h5">Opciones</Typography>
                <Button onClick={() => {setoptions(!options)}}><ColorLensIcon/></Button>
                <Button onClick={() => {setoptions2(!options2)}}><GradientIcon/></Button>
            </Grid>

                <Grid xs={6} md={12}>
                    
                    <Typography className={options?"":"invisible"}>Objeto</Typography>
                    <HexColorPicker className={options?"":"invisible"} style={{ marginBottom:'1rem' }} color={color} onChange={setColor} />
                </Grid>
                <Grid xs={6} md={12}>
                    
                    <Typography className={options2?"":"invisible"}>Fondo</Typography>
                    <HexColorPicker className={options2?"":"invisible"} color={BGcolor} onChange={setBGColor} />
                </Grid>
                
                
                
            </Grid>
            <Grid xs={12} md={10}>
{/*             <Button onClick={() => {setpositionX(positionX+100)}}>Position X+</Button>
            <Button onClick={() => {setpositionX(positionX-100)}}>Position X-</Button>
            <Button onClick={() => {setpositionY(positionY+100)}}>Position Y+</Button>
            <Button onClick={() => {setpositionY(positionY-100)}}>Position Y-</Button>
            <Button onClick={() => {setrotateY(rotateY+100)}}>Rotation Y+</Button>
            <Button onClick={() => {setrotateY(rotateY-100)}}>Rotation Y-</Button>
            <Button onClick={() => {setrotateX(rotateX+0.5)}}>Rotation X+</Button>
            <Button onClick={() => {setrotateX(rotateX-0.5)}}>Rotation X-</Button> */}
         

                <StlViewer
                className="App-logo"
                style={style}
                orbitControls
                shadows
                url={stlObj}
                modelProps={modelProps}
                />
            </Grid>
            <Grid spacing={2} container xs={12} md={10} >
            <Grid xs={12}> 
                <Typography variant="h5">Mas Dise??os</Typography>
            </Grid>
            
            <Card  onClick={() => { setStlObj("goku.stl") }} className="imgCard" sx={{ maxWidth: '35%',marginBottom:'25px' }}>
              
                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        height="140"
                        image="https://files.cults3d.com/uploaders/18182209/illustration-file/d32a852a-2bea-436a-8195-0d3f77f5ac82/image_2021-06-23_131254.png"
                        alt="Busto Spider-man"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Goku
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Modelo a una pieza
                        </Typography>
                        </CardContent>
                    </CardActionArea>
            </Card>
            <Card onClick={() => { setStlObj("zoro.stl") }} sx={{ maxWidth: '35%',marginBottom:'25px' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://files.cults3d.com/uploaders/18182209/illustration-file/cbd97095-7e50-4090-b180-94e788707f43/image_2021-06-23_125116.png"
                        alt="Zoro una pieza"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Zoro
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Modelo a una pieza
                        </Typography>
                        </CardContent>
                    </CardActionArea>
            </Card>
            </Grid>
            

            
        </Grid>

    );
}
