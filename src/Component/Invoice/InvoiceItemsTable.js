import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './TableContent/InvoiceTableHeader'
import InvoiceTableRow from './TableContent/InvoiceTableRow'
import InvoiceTableBlankSpace from './TableContent/InvoiceTableBlankSpace'
import InvoiceTableFooter from './TableContent/InvoiceTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

  const InvoiceItemsTable = ({ invoice }) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        {console.log(invoice)}
        <InvoiceTableRow items={invoice.items} />
        <InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.items.length} />
        <InvoiceTableFooter balance={invoice.balance} />
    </View>
  );
  
  export default InvoiceItemsTable