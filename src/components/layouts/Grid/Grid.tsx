type GridProps = {
  rows: number;
  cols: number;
  gap?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Grid(props: GridProps) {
  const { rows, cols, gap, style, children } = props;

  return (
    <div
      style={{
        display: 'grid',
        height: '100%',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

type CellProps = {
  pin: [number, number];
  rows?: number;
  cols?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function GridCell({ pin, style, children, rows = 1, cols = 1 }: CellProps) {
  const [pinRow, pinCol] = pin;
  return (
    <div
      style={{
        gridArea: `${pinRow} / ${pinCol} / ${pinRow + rows} / ${pinCol + cols}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
