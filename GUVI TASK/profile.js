const form = document.getElementById('update-form');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent the form from submitting

	// Get the form data
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const bio = document.getElementById('bio').value;

	// TODO: Validate the form data

	// TODO: Send the form data to the server using fetch() or XMLHttpRequest()
});
