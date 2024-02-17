export abstract class Entity<T> {
  protected _id: number;
  public props: T;

  constructor(props: T, id?: number) {
    this.props = props;
    this._id = id!;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
