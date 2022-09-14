export const uniqueDates = (task) => {
    const unique = []
    task.forEach(task => {
        if (!unique.includes(task.dateFormat)){ // si la fecha no existe agregar la fecha 
            unique.push(task.dateFormat)
        }
    
    });
    return unique
}

export const orderDates = (dates) =>{
    return  dates.sort((a,b) =>{
        const firstDate = moment(a,"DD/MM/YYY");
        const secondDate = moment(b,"DD/MM/YYY");
        return (firstDate - secondDate)

    })
}