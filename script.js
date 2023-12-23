let generatedPasswords = [];

function generatePassword() {
    const length = Math.floor(Math.random() * 11) + 5; // Random length between 5 and 15
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    for (let i = 4; i < length; i++) {
        const allChars = uppercase + lowercase + numbers + specialChars;
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    password = password.split('').sort(() => Math.random() - 0.5).join(''); // Shuffle the password

    const currentDate = new Date().toLocaleDateString();
    const finalPassword = `${password} - ${currentDate}`;

    // Check if the password is unique
    if (!generatedPasswords.includes(finalPassword)) {
        generatedPasswords.push(finalPassword);
        document.getElementById('password').textContent = `Generated Password: ${finalPassword}`;
    } else {
        generatePassword(); // Regenerate if not unique
    }
}

function exportToExcel() {
    const password = document.getElementById('password').textContent;
    const csvContent = `data:text/csv;charset=utf-8,${encodeURIComponent(password)}`;
    const link = document.createElement('a');
    link.href = csvContent;
    link.target = '_blank';
    link.download = 'password.csv';
    link.click();
}
