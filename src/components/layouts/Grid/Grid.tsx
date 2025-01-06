type GridProps = {
  rows: number;
  rowsHeight?: { [key: number]: string };
  cols: number;
  colsWidth?: { [key: number]: string };
  gap?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Grid(props: GridProps) {
  const { rows, rowsHeight, cols, colsWidth, gap, style, children } = props;
  let gridTemplateRows = '';
  let gridTemplateColumns = '';

  for (let i = 1; i <= rows; i++) {
    const rowHeight = rowsHeight?.[i];
    gridTemplateRows += rowHeight ? `${rowHeight} ` : '1fr ';
  }

  for (let i = 1; i <= cols; i++) {
    const colWidth = colsWidth?.[i];
    gridTemplateColumns += colWidth ? `${colWidth} ` : '1fr ';
  }

  return (
    <div
      style={{
        display: 'grid',
        height: '100%',
        gridTemplateRows: gridTemplateRows,
        gridTemplateColumns: gridTemplateColumns,
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
