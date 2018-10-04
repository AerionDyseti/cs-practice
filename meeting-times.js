function arrangeMeetings(meetingArr) {

    // Sort, which is O(n log n), but allows us to process them in O(n);
    meetingArr.sort((a, b) => a.startTime - b.startTime);

    let mergedMeetings = [meetingArr[0]];

    for (meeting of meetingArr) {

        let latestMerge = mergedMeetings[mergedMeetings.length - 1];

        if (latestMerge.endTime >= meeting.startTime) {
            latestMerge.endTime = Math.max(latestMerge.endTime, meeting.endTime);
        }
        else {
            mergedMeetings.push(meeting);
        }

    }

    return mergedMeetings;

}


let test1 = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];

console.log(arrangeMeetings(test1));

let test2 = [
    { startTime: 7, endTime: 10 },
    { startTime: 7, endTime: 6 },
    { startTime: 7, endTime: 5 },
    { startTime: 7, endTime: 9 },
];

console.log(arrangeMeetings(test2));