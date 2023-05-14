import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import * as S from "./style";

function Paint() {
  const canvasRef = useRef(null);
  const [getCon, setGetCon] = useState(null);
  const [painting, setPainting] = useState(false);
  const [strokStyle, setStrokStyle] = useState("#000000");

  useEffect(() => {
    const canvas= canvasRef.current;
    const con = canvas.getContext("2d");
    con.lineJoin = "miter";
    con.lineWidth = 1;
    con.strokeStyle = strokStyle;
    setGetCon(con);
  }, [strokStyle]);

  const paintLine = (e) => {
    const X =  e.clientX - getCon.canvas.offsetLeft;
    const Y =  e.clientY - getCon.canvas.offsetTop;
    if (!painting) {
      getCon.beginPath();
      getCon.moveTo(X, Y);
    } else if(painting){
      getCon.lineTo(X, Y);
      getCon.stroke();
    }
  };

  return (
    <S.PaintContainer>
      <S.PaintBoard
        ref={canvasRef}
        onMouseMove={(e) => paintLine(e)}
        onMouseDown={() => setPainting(true)}
        onMouseUp={() => setPainting(false)}
        onMouseLeave={() => setPainting(false)}
      ></S.PaintBoard>
      <S.SelectColor>
        <S.ColorBtn color="red" onClick={()=>setStrokStyle("red")}></S.ColorBtn>
        <S.ColorBtn color="orange" onClick={()=>setStrokStyle("orange")}></S.ColorBtn>
        <S.ColorBtn color="yellow" onClick={()=>setStrokStyle("yellow")}></S.ColorBtn>
        <S.ColorBtn color="green" onClick={()=>setStrokStyle("green")}></S.ColorBtn>
        <S.ColorBtn color="blue" onClick={()=>setStrokStyle("blue")}></S.ColorBtn>
        <S.ColorBtn color="Indigo" onClick={()=>setStrokStyle("indigo")}></S.ColorBtn>
        <S.ColorBtn color="purple" onClick={()=>setStrokStyle("purple")}></S.ColorBtn>
      </S.SelectColor>
    </S.PaintContainer>
  );
}

export default Paint;
