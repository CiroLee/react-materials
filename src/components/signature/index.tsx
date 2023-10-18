import { useEffect, useRef, FC } from 'react';
import cn from 'classnames';
import RButton from '../button';
import './style/index.scss';
interface SignatureProps {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

interface Position {
  x: number;
  y: number;
}
const defaultBg = '#f0f0f0';

const Signature: FC<SignatureProps> = (props) => {
  const { className, style, width = 300, height = 200 } = props;
  const startPos: Position = { x: 0, y: 0 };
  let isPainting = false;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const initCanvas = (canvas: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = true;
    ctx.scale(dpr, dpr);
  };

  const recordStartPos = (e: PointerEvent) => {
    startPos.x = e.offsetX;
    startPos.y = e.offsetY;
    isPainting = true;
  };

  const drawLine = (start: Position, end: Position) => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.lineCap = 'round';
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();

    startPos.x = end.x;
    startPos.y = end.y;
  };

  const endDrawLine = () => {
    isPainting = false;
    startPos.x = 0;
    startPos.y = 0;
  };

  const handleClear = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
  };

  const handleDownload = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const a = document.createElement('a');
    a.href = canvasRef.current?.toDataURL('image/png', 1) || ''; // base64
    console.log(a.href);
    a.download = 'signature.png';
    a.click();
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef.current);
    }
  }, [width, height]);

  useEffect(() => {
    canvasRef.current?.addEventListener('pointerdown', recordStartPos);
    canvasRef.current?.addEventListener('pointermove', (e: PointerEvent) => {
      if (isPainting) {
        const endPos: Position = { x: e.offsetX, y: e.offsetY };
        drawLine(startPos, endPos);
      }
    });
    canvasRef.current?.addEventListener('pointerup', endDrawLine);
    return () => {
      canvasRef.current?.removeEventListener('pointerdown', recordStartPos);
      canvasRef.current?.addEventListener('pointermove', (e: PointerEvent) => {
        if (isPainting) {
          const endPos: Position = { x: e.offsetX, y: e.offsetY };
          drawLine(startPos, endPos);
        }
      });
      canvasRef.current?.removeEventListener('pointerup', endDrawLine);
    };
  }, []);
  return (
    <div className={cn('signature', className)} style={style}>
      <canvas ref={canvasRef} style={{ backgroundColor: defaultBg }}></canvas>
      <div className="signature__operator">
        <RButton onClick={handleClear}>clear</RButton>
        <RButton onClick={handleDownload}>download</RButton>
      </div>
    </div>
  );
};

Signature.displayName = 'Signature';

export default Signature;
