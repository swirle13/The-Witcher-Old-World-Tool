type ListifyType = "Alpha" | "Num" | "Dot"

export default function listify(
    arr: Array<any>,
    type?: ListifyType
) {
    if (arr.length > 26) throw new Error(`Provided array, ${arr}, had a length of longer than 26.`);
    let i = 0;
    type === "Alpha" ? i = 65 : i = 0;
    const temp: Array<any> = [];
    for (i; i <= arr.length; i++) {
        temp.push(String.fromCharCode(i) + ". " + arr[i-65]);
    }
    return temp;
}