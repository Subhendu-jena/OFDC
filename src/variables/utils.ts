export function formatDateToMMDDYYYY(date: Date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
  
    return `${month}-${day}-${year}`;
  }


 export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2); // Months are 0-indexed
  const day = (`0${date.getDate()}`).slice(-2);

  return `${day}-${month}-${year}`; // Format: DD-MM-YYYY
};