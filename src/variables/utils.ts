export function formatDateToMMDDYYYY(date: Date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
  
    return `${month}-${day}-${year}`;
  }