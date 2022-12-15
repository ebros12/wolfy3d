import {StlViewer} from "react-stl-viewer";

const url = "https://ebros.cl/wolfy/stl/ppv.stl"

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

export const VisorStl = () => {
    return (
        <StlViewer
            style={style}
            orbitControls
            shadows
            url={url}
        />
    );
}
