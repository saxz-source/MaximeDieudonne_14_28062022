
/**
 * Convert a date to a frech date string
 * @param {Date} standardDate a date
 * @returns {string} a date like "dd/mm/yyyy"
 */
 export function getFrenchSlashDate(standardDate: Date): string {

    

    const formatedDate = standardDate.toLocaleString('fr-FR', {
        day: "2-digit",
        year: "numeric",
        month: "2-digit"
    })
    return formatedDate
}




