function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');
  
  rows.forEach(row => {
    const statusCell = row.cells[3];
    const ageCell = row.cells[1];
    const genderCell = row.cells[2];
    
    if (statusCell && statusCell.hasAttribute('data-available')) {
      const available = statusCell.getAttribute('data-available');
      if (available === 'true') {
        row.classList.add('available');
      } else if (available === 'false') {
        row.classList.add('unavailable');
      }
    } else {
      row.hidden = true;
    }
    
    if (genderCell) {
      const gender = genderCell.textContent.trim();
      if (gender === 'm') {
        row.classList.add('male');
      } else if (gender === 'f') {
        row.classList.add('female');
      }
    }
    
    if (ageCell) {
      const age = parseInt(ageCell.textContent, 10);
      if (!isNaN(age) && age < 18) {
        row.style.textDecoration = 'line-through';
      }
    }
  });
}