let Queue = require('./structures/queue');
/**
 * Given a bitmap where pixels are either black or white. 
 * The user selects a point on thebitmap and a color, and the program floodfills the bitmap outward from that point 
 * (up, down, left, right).
 * 
 */



/**
 *
 *
 * @param {*} bitmap 2D array representing a bitmap, where each pixel at (x,y) is either 0 (black) or 1 (white).
 * @param {*} x the x coordinate of the user's selection.
 * @param {*} y the y coordinate of the user's selection.
 * @param {*} color the color to transform INTO.
 */
function floodFill(bitmap, x, y, color) {

    // base case. If the cell is out of bounds or already the right color, we're done.
    if (bitmap[y] === undefined || bitmap[y][x] == undefined || bitmap[y][x] == color) return;

    // Set current cell to the color.
    bitmap[y][x] = color;

    // Recurse into adjacent cells if they are same color.
    floodFill(bitmap, x + 1, y, color);
    floodFill(bitmap, x - 1, y, color);
    floodFill(bitmap, x, y + 1, color);
    floodFill(bitmap, x, y - 1, color);

}

/**
 * This was a little trickier, as bad variable names made it so I was destructuring 
 * the start parameters when I didn't want to be.
 */
function floodFillIterative(bitmap, startX, startY, color) {

    if (bitmap[startY] === undefined || bitmap[startY][startX] === undefined)
        throw new Error("Coordinates must be within valid 2D array.");

    if (bitmap[startY][startX] === color) return;

    // use a Queue of "Location" objects to represent cells we plan to visit.
    // This mimics a Breadth-first search for a Graph.
    let locationQueue = new Queue();
    locationQueue.push({ x: startX, y: startY });

    while (!locationQueue.isEmpty()) {

        let loc = locationQueue.pop();
        bitmap[loc.y][loc.x] = color;

        let leftLoc = { x: loc.x - 1, y: loc.y }
        if (locationWithinRange(bitmap, leftLoc) && bitmap[leftLoc.y][leftLoc.x] !== color)
            locationQueue.push(leftLoc);

        let upLoc = { x: loc.x, y: loc.y - 1 };
        if (locationWithinRange(bitmap, upLoc) && bitmap[upLoc.y][upLoc.x] !== color)
            locationQueue.push(upLoc);

        let rightLoc = { x: loc.x + 1, y: loc.y };
        if (locationWithinRange(bitmap, rightLoc) && bitmap[rightLoc.y][rightLoc.x] !== color)
            locationQueue.push(rightLoc);

        let downLoc = { x: loc.x, y: loc.y + 1 };
        if (locationWithinRange(bitmap, downLoc) && bitmap[downLoc.y][downLoc.x] !== color)
            locationQueue.push(downLoc);

    }

}


function locationWithinRange(bitmap, loc) {
    return bitmap[loc.y] !== undefined && bitmap[loc.y][loc.x] !== undefined;
}


// Tests
let bitmap = [
    [1, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 1]
];
console.table(bitmap);

let it1 = bitmap.map(arr => arr.slice());
floodFillIterative(it1, 0, 3, 0);
console.table(it1);

let re1 = bitmap.map(arr => arr.slice());
floodFill(re1, 0, 3, 0);
console.table(re1)

let it2 = bitmap.map(arr => arr.slice());
floodFillIterative(it2, 1, 1, 1);
console.table(it2);

let re2 = bitmap.map(arr => arr.slice());
floodFill(re2, 1, 1, 1);
console.table(re2);

let it3 = bitmap.map(arr => arr.slice());
floodFillIterative(it3, 3, 0, 1);
console.table(it3);

let re3 = bitmap.map(arr => arr.slice());
floodFill(re3, 3, 0, 1);
console.table(re3);