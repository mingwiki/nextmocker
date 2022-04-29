const Mock = require('mockjs')
const data = Mock.mock({
  devingidine: true,
  "items|1-10": ['@integer(12)'],
  msg: null,
  operator: "1",
  status: null
})
export default function handler(req, res) {
  if (req.method === 'GET' && req.query.phoneNumber) {
    res.status(200).json({
      "code": 10000,
      "msg": "ok",
      "data": data,
    })
  }
  if (!req.query.phoneNumber) {
    res.status(200).json({
      "code": 400,
      "msg": "Required String parameter 'phoneNumber' is not present",
      "data": null
    })
  }
}
