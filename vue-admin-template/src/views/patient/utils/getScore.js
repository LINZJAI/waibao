export const getScore = (itemCode, valueCode, FormList) => {
  let list = []
  for (let item of FormList) {
    list.push(...item.itemValueList)
  }

  let obj = list.find(
    item => item.itemCode == itemCode && item.valueCode == valueCode
  )

  if (obj) return Number(obj.score || 0)
  return 0
}

export const getScoreList = (itemCodeList, itemDataMap, FormList) => {
  return itemCodeList.reduce((total, itemCode) => {
    return (total += getScore(itemCode, itemDataMap[itemCode], FormList))
  }, 0)
}
