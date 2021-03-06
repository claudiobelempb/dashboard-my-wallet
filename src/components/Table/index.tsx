import React from 'react';
import { TableContainer } from './style';

interface ITableProps {
  title?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;
}

export const Table: React.FC<ITableProps> = ({
  title,
  subtitle,
  tagcolor,
  amount
}: ITableProps) => {
  return (
    <>
      <TableContainer tagcolor={tagcolor}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td>R$ 12.000,00</td>
          <td>Venda</td>
          <td>13/04/2021</td>
          <td>Editar</td>
        </tr>
        <tr>
          <td>Hambúrguer</td>
          <td>- R$ 59,00</td>
          <td>Alimentação</td>
          <td>10/04/2021</td>
          <td>Editar</td>
        </tr>
        <tr>
          <td>Aluguel do apartamento</td>
          <td>- R$ 1.200,00</td>
          <td>Casa</td>
          <td>27/03/2021</td>
          <td>Editar</td>
        </tr>
        <tr>
          <td>Computador</td>
          <td>R$ 5.400,00</td>
          <td>Venda</td>
          <td>15/03/2021</td>
          <td>Editar</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Título</td>
          <td>Preço</td>
          <td>Categoria</td>
          <td>Data</td>
          <td>Ações</td>
        </tr>
      </tfoot>
    </TableContainer>
    </>
  );
}
