
document.getElementById('visitorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Collect action plans data from the table
    const actionPlans = [];
    const rows = document.querySelectorAll('#actionPlansTable tbody tr');
    rows.forEach(row => {
        const actionPlan = row.querySelector('input[name="actionPlan"]').value;
        const responsibility = row.querySelector('select[name="responsibility"]').value;
        const targetDate = row.querySelector('input[name="targetDate"]').value;
        actionPlans.push({ actionPlan, responsibility, targetDate });
    });

    formData.append('actionPlans', JSON.stringify(actionPlans));

    console.log([...formData.entries()]); // Log the form data to the console

    fetch('https://script.google.com/macros/s/AKfycbz9le5iUEJ2LPlguDVB0xJKFzFZoP7F0aYRpxSoKcVPrW0b64tln5zGNEbra-7prkcfgA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('Form submitted successfully');
            document.getElementById('visitorForm').reset(); // Clear the form fields
        } else {
            alert('Form submission failed');
            console.error('Error:', data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Form submission failed');
    });
});

function addActionRow() {
    const tableBody = document.querySelector('#actionPlansTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" name="actionPlan" required></td>
        <td>
            <select name="responsibility" required>
                <option value="">Select</option>
                <option value="Vikash">Vikash</option>
                <option value="Aman">Aman</option>
                <option value="Ishaan Sarine">Ishaan Sarine</option>
                <option value="President">Nagesh Marwaha</option>
                <option value="Lalit Kapoor">Lalit Kapoor</option>
                <option value="Adarsh Soni">Adarsh Soni</option>
                <option value="Trilok Chand Bansal">Trilok Chand Bansal</option>
                <option value="Joshender Virk">Joshender Virk</option>
                <option value="D. Dey">D. Dey</option>
                <option value="Manu Batra">Manu Batra</option>
                <option value="Arun Saraswat">Arun Saraswat</option>
                <option value="Kirti Ranjan Das">Kirti Ranjan Das</option>
                <option value="Sandeep Jangra">Sandeep Jangra</option>
                <option value="Kapil Kaushik">Kapil Kaushik</option>
                <option value="Varun Jain">Varun Jain</option>
                <option value="Vinod Dayma">Vinod Dayma</option>
                <option value="Arun Dev">Arun Dev</option>
                <option value="Eniyan">Eniyan</option>
                <option value="Priyanka Tanwar">Priyanka Tanwar</option>
                <option value="Pratiksha Yagnik">Pratiksha Yagnik</option>
                <option value="Vishnu Dixit">Vishnu Dixit</option>
                <option value="Avnie Kapoor">Avnie Kapoor</option>
                <option value="Neeraj Malik">Neeraj Malik</option>
                <option value="Parul Gupta">Parul Gupta</option>
                <option value="Lalit Mittal">Lalit Mittal</option>
                <option value="Iftekhar Alam">Iftekhar Alam</option>
                <option value="Subhash Gupta">Subhash Gupta</option>
                <option value="Surinder Saini">Surinder Saini</option>
                <option value="Jitender Kumar">Jitender Kumar</option>
                <option value="Raju Admane">Raju Admane</option>
                <option value="Siddharth Khedkar">Siddharth Khedkar</option>
                <option value="Bhawna Chauhan">Bhawna Chauhan</option>
                <option value="Kanika Bansal">Kanika Bansal</option>
                <option value="Pankaj Bajaj">Pankaj Bajaj</option>
                <option value="Sanjeet">Sanjeet</option>
                <option value="Pankaj Garg">Pankaj Garg</option>
                <option value="SL Dagar">SL Dagar</option>
                <option value="Pankaj Singh">Pankaj Singh</option>
                
            </select>
        </td>
        <td><input type="date" name="targetDate" required></td>
        <td><button type="button" onclick="removeRow(this)">Remove</button></td>
    `;

    tableBody.appendChild(newRow);
}

function removeRow(button) {
    const row = button.closest('tr');
    row.remove();
}
