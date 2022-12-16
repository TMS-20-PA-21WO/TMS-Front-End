const itemPaket = (response) => `
    ${response.data.data.map((paket) => ` <option id="${paket.id}">${paket.package_name}</option>`).join('')}
    `;

export default itemPaket;
