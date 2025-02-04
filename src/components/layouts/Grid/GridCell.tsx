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
  const rowLine = rowIndex + 1;
  const colLine = colIndex + 1;
  return (
    <div
      style={{
        zIndex,
        gridArea: `${rowLine} / ${colLine} / ${rowLine + rows} / ${colLine + cols}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
