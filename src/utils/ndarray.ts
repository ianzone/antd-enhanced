// 辅助类型：用于处理维度的减少
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class NdArray<T, D extends number = 1> extends Array<D extends 1 ? T : NdArray<T, Prev[D]>> {
  readonly shape: number[];

  constructor(shape: number[], fill: T) {
    super();
    this.shape = shape;
    const [size, ...restDim] = shape;
    if (restDim.length === 0) {
      for (let i = 0; i < size; i++) {
        this.push(fill as any);
      }
    } else {
      for (let i = 0; i < size; i++) {
        this.push(new NdArray<T, Prev[D]>(restDim, fill) as any);
      }
    }
  }
}
