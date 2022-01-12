function superbowlWin(record) {
    const found = record.find(val => val.result === 'W');
    if (found === undefined) {
        return undefined;
    }
    return found.year
}

superbowlWin(result);


