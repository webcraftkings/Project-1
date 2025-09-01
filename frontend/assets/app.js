document.getElementById('visaForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const responseDiv = document.getElementById('response');
    try {
        const res = await fetch('http://localhost:3000/api/submit', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if (res.ok) {
            responseDiv.textContent = 'Submission successful!';
        } else {
            responseDiv.textContent = 'Error: ' + (data.error || 'Submission failed.');
        }
    } catch (err) {
        responseDiv.textContent = 'Network error.';
    }
});
