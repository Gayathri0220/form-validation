document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;
    const form = event.target;

    // Name validation
    const name = form.querySelector('#name');
    if (name.value.length < 2 || name.value.length > 30) {
        alert('Name must be between 2 and 30 characters.');
        valid = false;
    }

    // Text area validation
    const text = form.querySelector('#text');
    if (text.value.length < 10 || text.value.length > 300) {
        alert('Text must be between 10 and 300 characters.');
        valid = false;
    }

    // Range validation
    const range = form.querySelector('#range');
    if (range.value < 0 || range.value > 100) {
        alert('Range must be between 0 and 100.');
        valid = false;
    }

    // Password validation
    const password = form.querySelector('#password');
    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        valid = false;
    }

    // File validation
    const file = form.querySelector('#file');
    if (file.files.length === 0) {
        alert('Please select a file.');
        valid = false;
    } else {
        // Check file type (optional)
        const fileType = file.files[0].type;
        if (!['image/jpeg', 'image/png'].includes(fileType)) {
            alert('Only JPEG and PNG files are allowed.');
            valid = false;
        }
    }

    // Number validation
    const number = form.querySelector('#number');
    if (number.value < 1 || number.value > 100) {
        alert('Number must be between 1 and 100.');
        valid = false;
    }

    // If validation fails, prevent form submission
    if (!valid) {
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});
