import {getData} from "@/app/resources/data"
export function getTableData(){
    const data = getData()
    const headers = Object.keys(data[0])
    let rows = [];

    for (let i=0; i<data.length;i++) {
        rows.push(Object.values(data[i]))
    }

    return {
        "headers": headers,
        "rows": rows
    }
}
