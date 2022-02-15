export const getRandomDigit = () => Math.floor(Math.random() * 101 + 1);


export const checkSlotAvailability = (slotsList: { timeStart: Date, timeEnd: Date }[], slot: { timeStart: Date, timeEnd: Date }) => {
    const newSlotArr = []

    const filtered = slotsList.filter(elem=>elem.timeStart==slot.timeStart||elem.timeEnd==slot.timeEnd)

    if(Array.isArray(filtered)&&filtered.length){
        return newSlotArr;
    }

    if (slot.timeEnd < slotsList[0].timeStart) {
        newSlotArr.push(slot)
        newSlotArr.push(slotsList)
        return newSlotArr;
    }

    if (slot.timeStart > slotsList[slotsList.length - 1].timeEnd) {
        newSlotArr.push(slotsList)
        newSlotArr.push(slot)
        return newSlotArr;
    }

    for (let i = 1; i <= slotsList.length - 1; i++) {
        if (slot.timeEnd < slotsList[i].timeStart && slot.timeStart > slotsList[i - 1].timeEnd) {
            newSlotArr.push(slotsList[i - 1])
            newSlotArr.push(slot)
            for (let i = 1; i <= slotsList.length - 1; i++) {
                newSlotArr.push(slotsList[i])
            }
            break;
        }
    }

    return newSlotArr
}
