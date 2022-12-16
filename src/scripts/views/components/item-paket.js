import Paket from '../../service/api/paket';

const itemPaket = async () => {
  const responseData = await Paket.getAllPaket();
  const itemList = document.getElementById('paket');
  responseData.data.forEach((item) => {
    const paketList = document.createElement('option');
    paketList.value = item.id;
    paketList.innerHTML = 'test123';
    // itemList.innerHTML += `<p id="${item.id}">${item.package_name}</p>`;
    console.log(item);
    // console.log(item.package_name);
    itemList.appendChild(paketList);
  });
};

export default itemPaket;
