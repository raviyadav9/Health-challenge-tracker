let users = [];

document.getElementById('add-user-btn').addEventListener('click', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value;
  let workoutType = document.getElementById('workout-type').value;
  let minutes = document.getElementById('minutes').value;
  users.push({ username, workoutType, minutes });
  document.getElementById('username').value = '';
  document.getElementById('workout-type').value = '';
  document.getElementById('minutes').value = '';
  renderUsers();
});

document.getElementById('search-username').addEventListener('input', () => {
  let searchUsername = document.getElementById('search-username').value.toLowerCase();
  let filteredUsers = users.filter((user) => user.username.toLowerCase().includes(searchUsername));
  renderUsers(filteredUsers);
});

document.getElementById('filter-workout-type').addEventListener('change', () => {
  let filterWorkoutType = document.getElementById('filter-workout-type').value;
  let filteredUsers = users.filter((user) => user.workoutType === filterWorkoutType);
  renderUsers(filteredUsers);
});

function renderUsers(usersToRender = users) {
  let userTableBody = document.getElementById('user-table-body');
  userTableBody.innerHTML = '';
  usersToRender.forEach((user) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.workoutType}</td>
      <td>${user.minutes}</td>
    `;
    userTableBody.appendChild(row);
  });
}

renderUsers();