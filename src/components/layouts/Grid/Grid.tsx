type GridProps = {
  rows: number;
  rowHeights?: { [rowIndex: number]: string };
  cols: number;
  colWidths?: { [colIndex: number]: string };
  gap?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Grid(props: GridProps) {
  const { rows, rowHeights, cols, colWidths, gap, style, children } = props;
  let gridTemplateRows = '';
  let gridTemplateColumns = '';

  for (let i = 0; i < rows; i++) {
    const rowHeight = rowHeights?.[i];
    gridTemplateRows += rowHeight ? `${rowHeight} ` : '1fr ';
  }

  for (let i = 0; i < cols; i++) {
    const colWidth = colWidths?.[i];
    gridTemplateColumns += colWidth ? `${colWidth} ` : '1fr ';
  }

  return (
    <div
      style={{
        display: 'grid',
        height: '100%',
        gridTemplateRows,
        gridTemplateColumns,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
