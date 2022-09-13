export const uniqueDates = (task) => {
    const unique = []
    task.forEach(task => {
        if (!unique.includes(task.dateFormat)){ // si la fecha no existe agregar la fecha 
            unique.push(task.dateFormat)
        }
    
    });
    return unique
}