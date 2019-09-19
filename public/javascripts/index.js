/* eslint-disable no-console */

document.getElementById('deleteButton').addEventListener('click', () => {
  const idInput = document.getElementById('idInput');
  const id = idInput.value;
  console.log(`Adding id ${id} to url`);
  window.location.href = `http://localhost:3000/deletesnippet/${id}`;
});

/* function buttonHandler() {
        window.location.href = 'http://localhost:3000/deletesnippet/' + document.getElementById("idInput").value;
    } */
