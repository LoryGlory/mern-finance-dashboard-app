import React from 'react';
import DashboardBox from '@/components/DashboardBox';
import {useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} from '@/state/api';
import {DataGrid, GridCellParams} from '@mui/x-data-grid';
import BoxHeader from '@/components/BoxHeader';
import {Box, useTheme} from '@mui/material';

const Row3 = () => {
  const {data: transactionData} = useGetTransactionsQuery();
  const {data: productData} = useGetProductsQuery();
  const {data: kpiData} = useGetKpisQuery();
  const {palette} = useTheme();

  const productColumns = [
    {
      field: '_id', // grab id from productData
      headerName: 'id', // label it as id
      flex: 1,
    },
    {
      field: 'expense',
      headerName: 'Expense',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`, // convert number to string with $
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`, // convert number to string with $
    },
  ];

  return (
    <>
      {/* first chart in third row*/}
      <DashboardBox gridArea='g'>
        <BoxHeader
          title='List of Products'
          sideText={`${productData?.length} products`} />
        {/* wrapper box for grid styling */}
        <Box
          mt='0.5rem'
          p='0 0 0.5rem'
          height='75%'
          sx={{
            '& .MuiDataGrid-root': {
              color: palette.grey[300],
              border: 'none',
              padding: '0.5rem',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            '& .MuiDataGrid-columnSeparator': {
              visibility: 'hidden',
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      {/* second chart */}
      <DashboardBox gridArea='h'></DashboardBox>
      {/* third chart */}
      <DashboardBox gridArea='i'></DashboardBox>
      {/* fourth chart */}
      <DashboardBox gridArea='j'></DashboardBox>
    </>
  );
};

export default Row3;