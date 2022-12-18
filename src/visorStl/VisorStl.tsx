import { useState } from "react";
import {StlViewer} from "react-stl-viewer";
import { HexColorPicker } from "react-colorful";
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardActionArea, CardMedia, Typography, CardContent,  ButtonGroup, Button} from '@mui/material';




const style = {
    top: 0,
    left: 0,
    height: '85vh',
    boxShadow: '1px 2px 9px gray',
    borderRadius:'30px'
    
}



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
    const [stlObj, setStlObj] = useState("ppv.stl")
    const modelProps = {
        color:color,
        positionX:positionX,
        positionY:positionY,
        rotationY:rotateY,
        rotationX:rotateX,
        scale:1
      }

      
    return (
        <Grid container spacing={10}>
            <Grid xs={12} md={2} sx={{ textAlign: "center",
display: "block ruby" }}>
                <HexColorPicker color={color} onChange={setColor} />
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
            <Grid xs={12} md={10}>
            <Card onClick={() => { setStlObj("https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl") }} sx={{ maxWidth: '100%' }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEWjH7J71UEE3qhdjzc90PbCrMRPdU_RCCw&usqp=CAU"
                        alt="Busto Spider-man"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            SpiderMan Busto
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            busto de spiderman
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            

            
        </Grid>

    );
}
