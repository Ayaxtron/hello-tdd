exports.sum = (a, b) => {
    return { x: a.x + b.x, y: a.y + b.y};
}

exports.sub = (a, b) => {
    return { x: a.x - b.x, y: a.y - b.y};
}

exports.esc = (a, b) => {
    return { x: a.x * b.x, y: a.y * b.y};
}

exports.dot = (a, b) => {
    return { x: (a.x * b.x) + (a.y * b.y)};
}