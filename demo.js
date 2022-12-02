let axios = require('axios')
let corpid = process.env.CORPID
let corpsecret = process.env.CORPSECRET
async function taobaoMonitor() {
  let res = await axios.request({
    method: 'GET',
    url: 'https://detailskip.taobao.com/service/getData/1/p1/item/detail/sib.htm',
    params: {
      itemId: '576542211043',
      sellerId: '196145005',
      modules:
        'dynStock,qrcode,viewer,price,duty,xmpPromotion,delivery,upp,sellableArea,activity,fqg,zjys,couponActivity,soldQuantity,page,originalPrice,tradeContract',
      callback: 'onSibRequestSuccess'
    },
    headers: {
      accept: '*/*',
      'accept-encoding': '*',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      cookie:
        't=e5f06ad7073165209e35cdf6ac073b4b; xlly_s=1; thw=cn; sgcookie=E100ZlbY2dPM1jtjoo1NcXlNVpKnWNh3Ch5ZX/gfyHKxEqnBVED3ox85+J77KtAhtJyExp2cZpG7QlcCIBa7tRuQp7lHUTMIjdH+beEd+KIkQjk=; ubn=p; ucn=center; cookie2=60687fd3e2d13275d6e6ea0288e5507d; _tb_token_=7ba885e53b5a6; _m_h5_tk=7a8bc8a9479f470c043ee78c797a01ec_1669116616951; _m_h5_tk_enc=19d41dac175f5a9bb6b0327e3b3a1ac0; _samesite_flag_=true; mt=ci=0_0; tracknick=; uc1=cookie14=UoeyBzDMjmfPEw==; cna=iLTwG2kDEUQCARsqjB8FuMcv; isg=BBgYsl6dz4cTTOMDKgJhMEYy6UaqAXyL0FAVPFIJM9MG7bjX-hEIGy6MJSVdfTRj; l=eBrxhGcPTcax1b7JBOfwourza77tYIRAguPzaNbMiOCP_0565dCAW6zpcTLBCnGVh6rwR3z0a8PJBeYBq_C-nxvte5DDwsHmn; tfstk=caFOB9fcSMjGv8smTfBnu-Al6IVAZd6K0NivM7p2RtwfrlRAi4Puwp3BCquAjwC..',
      referer:
        'https://item.taobao.com/item.htm?id=576542211043&price=20&sourceType=item&sourceType=item&suid=55fbf919-ebc6-49d7-8e07-e5ba89a513ce&shareUniqueId=18908604460&ut_sk=1.YRNedrAqL0wDAAVWAu/7b9Sn_21646297_1669107974225.Copy.1&un=7d79524c2f3b08b228b5e1fb31f54c83&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_abtk=gray_1_code_simpleAndroid2&tbSocialPopKey=shareItem&sp_tk=eXRWT2RYbndoQU8=&cpp=1&shareurl=true&short_name=h.US8iN8z&bxsign=scdvBRZ6P9kRWizmmg9u-2867A2z8BsaQcinzk2DJ5opNOXb1aDY6YjV9A5q9RsEGnpBL8fIF7nyCsuTcQpYyLAJ6Lzirvoyri7MoS4bf45c7iSRihR233bAcmrWUgx07_F&tk=ytVOdXnwhAO CZ3457&app=chrome',
      'sec-ch-ua': '"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'script',
      'sec-fetch-mode': 'no-cors',
      'sec-fetch-site': 'same-site',
      'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52',
      'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
    }
  })
  console.log(JSON.parse(res.data.slice(22, -2)))
  let sku = JSON.parse(res.data.slice(22, -2)).data.dynStock.sku
  // ;31560:123907191; 浅度烘焙 ;31560:29164057; 中度烘焙 ;31560:24600297; 深度烘焙 ;31560:12025290277; 挂耳/冷萃咖啡
  if (';31560:123907191;' in sku || ';31560:29164057;' in sku || ';31560:24600297;' in sku || ";31560:12025290277;" in sku) {
//     let access_token = await axios.request({
//       method: 'GET',
//       url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
//       params: {
//         corpid: corpid,
//         corpsecret: corpsecret
//       }
//     })
//     access_token = access_token.data.access_token
    access_token = 'azrwbpr4-QAyEZLY80MkFu7zp7-joOF9C93fo4WAxWZCCibekZ673bue1wJ9VEZMdWMLeiqYDPIXSh-9BpFtco0YLOHTfjyvmUSNMsq9CgHRlIdLh3amzMrkaGb1RYtjKDgVOH3WeiCbnr6EOLgA3KyklMd_ARk7Uts2t1_lKWf1gQpCYbaTHJbDwRlfNp3TU90fsFox7dJug4cot7QRgA'
    let res = await axios.request({
      method: 'POST',
      url: 'https://qyapi.weixin.qq.com/cgi-bin/message/send',
      params: {
        access_token: access_token
      },
      data: {
        touser: '@all',
        toparty: '@all',
        totag: '@all',
        msgtype: 'text',
        agentid: 1000002,
        text: { content: '咖啡豆有货' },
        safe: 0,
        enable_id_trans: 0,
        enable_duplicate_check: 0
      }
    })
    console.log(res.data);
  } else console.log('无货');
}
// setInterval(taobaoMonitor, 1800000)
taobaoMonitor()
console.log('商品监控中...')
