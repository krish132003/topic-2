const devices = JSON.parse(localStorage.getItem('devices')) || [];
devices.forEach(function(device) {
  $('#devices tbody').append(`
    <tr>
      <td>${device.user}</td>
      <td>${device.name}</td>
    </tr>`
  );
});
document.querySelector('#add-device').addEventListener('click', function() {
  const user = document.querySelector('#user').value;
  const name = document.querySelector('#name').value;
  devices.push({ user: user, name: name });
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = 'device-list.html';
});