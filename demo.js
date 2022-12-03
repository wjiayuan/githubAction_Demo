let axios = require('axios')
let corpid = process.env.CORPID
let corpsecret = process.env.CORPSECRET
async function taobaoMonitor() {
  let res = await axios.request({
  method: 'GET',
  url: 'https://detailskip.taobao.com/service/getData/1/p1/item/detail/sib.htm',
  params: {
    _ksTS: '1670027819254_698',
    callback: 'jsonp699',
    itemId: '576542211043',
    sellerId: '196145005',
    modules: 'dynStock,qrcode,viewer,price,duty,xmpPromotion,delivery,upp,sellableArea,activity,fqg,zjys,couponActivity,soldQuantity,page,originalPrice,tradeContract',
    ref: ''
  },
  headers: {
    accept: '*/*',
    'accept-encoding': '*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    cookie: 'thw=cn; sgcookie=E100ZlbY2dPM1jtjoo1NcXlNVpKnWNh3Ch5ZX/gfyHKxEqnBVED3ox85+J77KtAhtJyExp2cZpG7QlcCIBa7tRuQp7lHUTMIjdH+beEd+KIkQjk=; ubn=p; ucn=center; tracknick=; cna=iLTwG2kDEUQCARsqjB8FuMcv; miid=10605451340835758; _m_h5_tk=21a6ee0c4340619de6b679a2b8bac21f_1670036373788; _m_h5_tk_enc=c039502e71715df162412e045c606803; xlly_s=1; cookie2=17764b838fb09f5329ab917aacfb2bb9; t=8dd8cfc6f5845b074c5217ea516ff177; _tb_token_=e653e5775883b; mt=ci=-1_1; isg=BKCgGV-T12kd3Gub4lppWA7qca5yqYRzKLidJRqx3btOFUA_wrk6A1dkrb2VpTxL; tfstk=cQFfBVjaFnxbd45Mim_Pb2m5vDcCayAjzKiYliMERek5PQZE2s4kTDNheAxo_V35.; l=fBrxhGcPTcax1qy_BO5Courza779wIRb4sPzaNbMiIEGa6tf6F1uJNCF_SipJdtjgTCDCetzo7yzVdLHR3fRwxDDBYFinQUS3xv9QaVb5',
    referer: 'https://item.taobao.com/item.htm?id=576542211043&price=20&sourceType=item&sourceType=item&suid=55fbf919-ebc6-49d7-8e07-e5ba89a513ce&shareUniqueId=18908604460&ut_sk=1.YRNedrAqL0wDAAVWAu/7b9Sn_21646297_1669107974225.Copy.1&un=7d79524c2f3b08b228b5e1fb31f54c83&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_abtk=gray_1_code_simpleAndroid2&tbSocialPopKey=shareItem&sp_tk=eXRWT2RYbndoQU8=&cpp=1&shareurl=true&short_name=h.US8iN8z&bxsign=scdvBRZ6P9kRWizmmg9u-2867A2z8BsaQcinzk2DJ5opNOXb1aDY6YjV9A5q9RsEGnpBL8fIF7nyCsuTcQpYyLAJ6Lzirvoyri7MoS4bf45c7iSRihR233bAcmrWUgx07_F&tk=ytVOdXnwhAO CZ3457&app=chrome',
    'sec-ch-ua': '"Microsoft Edge";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.62',
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
  },
  data: '-----011000010111000001101001--\r\n\r\n'
})
  let sku = JSON.parse(res.data.slice(22, -2)).data.dynStock.sku
  // ;31560:123907191; 浅度烘焙 ;31560:29164057; 中度烘焙 ;31560:24600297; 深度烘焙 ;31560:12025290277; 挂耳/冷萃咖啡
  if (';31560:123907191;' in sku || ';31560:29164057;' in sku || ';31560:24600297;' in sku || ";31560:12025290277;" in sku) {
    // let access_token = await axios.request({
    //   method: 'GET',
    //   url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
    //   params: {
    //     corpid: 'ww7fba3c8527f07dd8',
    //     corpsecret: '8auv76lKGpLC1OfUQtH2h5zW85g3ZSmuXBJyWYhNd5Y'
    //   }
    // })
    // access_token = access_token.data.access_token
    
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
