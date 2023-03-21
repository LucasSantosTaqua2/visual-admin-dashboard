Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}">${order.shipping}</td>
                            <td class="primary">Details</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});