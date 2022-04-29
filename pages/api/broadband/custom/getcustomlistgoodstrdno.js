const Mock = require('mockjs')
const data = Mock.mock([
  {
    "id": "3ba1bb5bb0b940a493417c0d48cd189a",
    "goodsNo": "12021083010263750",
    "title": "上海联通老用户享1000M宽带（0元/年）(优惠装）",
    "subtitle": null,
    "displaytitle": "上海联通老用户享1000M宽带（0元/年）(优惠装）",
    "listviewPic": null,
    "previewPic": null,
    "goodsGraph": "https://jj-img2019.oss-cn-hangzhou.aliyuncs.com/commondity/commondity_20220303154926_product_2de1c56d.jpg",
    "activityRulesPic": null,
    "spesDesc": {
      "bandwidth": "1000M",
      "contractPeriod": "12个月",
      "widetype": "光纤"
    },
    "goodsType": "1",
    "price": 0.00,
    "originalPrice": null,
    "stock": 999999,
    "productOperator": "1",
    "priority": null,
    "viewCount": null,
    "buyCount": null,
    "businessType": null,
    "serviceNo": 10001187,
    "goodsStatus": "1",
    "delFlag": null,
    "isHot": null,
    "isAgreement": null,
    "isHide": null,
    "goodsLabelDesc": [
      "",
      "100元话费",
      "装成再送话费",
      "宽带免费领"
    ],
    "goodsDescription": null,
    "operatorLogo": "/images/w2.png",
    "typeSymbol": null,
    "averagePrice": null,
    "operatorCode": "1",
    "agreementNames": null,
    "cornerIcon": null,
    "cornerIconName": null,
    "payment": null,
    "prepayAmount": null,
    "splendMinCount": null,
    "splendMaxCount": null,
    "splendSelectCount": null,
    "child": null,
    "mailWays": null,
    "goodsTipsResp": null,
    "additionalName": null,
    "isAddition": null,
    "isTips": null,
    "thirdActivitiesId": null,
    "goodsTrdNo": null,
    "goodsAdditionals": null,
    "additionalInfo": null,
    "h5Url": null,
    "goodsGraphList": null,
    "headImg": null,
    "submitMarketingImg": null,
    "productPro": "31",
    "productCity": "310100",
    "isAuth": null,
    "thirdGoodsType": null
  }
])
export default function handler(req, res) {
  if (req.method === 'GET' && req.query.goodsTrdNos) {
    res.status(200).json({
      "code": 10000,
      "msg": "ok",
      "data": data,
    })
  }
  if (!req.query.goodsTrdNos) {
    res.status(200).json({
      "code": 400,
      "msg": "Required String parameter 'goodsTrdNos' is not present",
      "data": null
    })
  }
}
