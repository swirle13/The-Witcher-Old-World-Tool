export default function listify(arr: Array<any>) {
    if (arr.length > 26) throw new Error(`Provided array, ${arr}, had a length of longer than 26.`);
    
    const temp: Array<any> = [];
    for (let i = 65; i <= 90; i++) {
        temp.push(String.fromCharCode(i) + ". " + arr[i-65]);
    }
    return temp;
}