import getItemsInfos from "./getItemsInfos";
import getItemHistory from "./getItemHistory";


export default function getItemsAllHistory():object{
    const IDArray:number[] = new Array(getItemsInfos.length);
    //生成包含所有itemid的数组
    for (let index = 0; index < getItemsInfos.length; index++) {
        IDArray[index] =getItemsInfos().ItemID;
    }
    for (const itemsID in IDArray) {
        var peopleitem = {
            personID: 1001,     //需要获取当前用户状态
            itemID: Number(itemsID)
        }
        getItemHistory(peopleitem)
    }
}