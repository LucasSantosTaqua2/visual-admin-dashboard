Customers.forEach(customer => {
    const tr = document.createElement('tr');
    const trContent = `
                            <td>${customer.customerName}</td>
                            <td>${customer.customerNumber}</td>
                            <td>${customer.customerBuy}</td>
                            <td>${customer.customerValue}</td>
                            <td class="${customer.customerClass === '#1' ? 'success' : customer.customerClass === '#2' ? 'danger' : customer.customerClass === '#3' ? 'warning' : 'primary'}">${customer.customerClass}</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});