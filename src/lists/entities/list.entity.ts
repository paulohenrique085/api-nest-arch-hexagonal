import { Column, Model, Table } from 'sequelize-typescript';

export type ListAtributes = {
  name: string;
};

@Table
export class List extends Model<ListAtributes> {
  @Column
  name: string;
}
