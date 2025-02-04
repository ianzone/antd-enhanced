type CellProps = {
  rowIndex: number;
  colIndex: number;
  zIndex?: number;
  rows?: number;
  cols?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function GridCell({
  rowIndex,
  colIndex,
  zIndex,
  style,
  children,
  rows = 1,
  cols = 1,
}: CellProps) {
  return (
    <div
      style={{
        zIndex,
        gridArea: `${rowIndex} / ${colIndex} / ${rowIndex + rows} / ${colIndex + cols}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
