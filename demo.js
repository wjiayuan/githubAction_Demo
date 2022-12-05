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
      cookie: '_m_h5_tk=8f65d48eba793596562f7d3bf126b6da_1670061426321; _m_h5_tk_enc=84438e298a6637d76130a83e5864cb31; t=79d5099586a1acb61067b4f048ea5702; thw=cn; sgcookie=E100wyQdQ0hFTq0kR2G4qnkcM6WtnRqHEBPioPX4pMLyRFgIxNHZ7sk1iqhhzwlPTdAoV+skL3UWZo7OwUEndsireGp0/j0/zjHejpud6J7t7T0=; uc3=lg2=VT5L2FSpMGV7TQ==&id2=UU6oL/oA8+B++Q==&nk2=DkLz0cc27w==&vt3=F8dCvjcL6ToIWhwOc1U=; lgc=mr_svip; uc4=nk4=0@DCdCar6lUxGE/A512Udsrcjk&id4=0@U2xloerkAUpcNTK0wbk+z4grFRm1; tracknick=mr_svip; _cc_=VT5L2FSpdA==; ubn=p; ucn=center; mt=ci=6_1; x5sec=7b22617365727665723b32223a226164636437653863343732333638656566393635383162393736626462663533434a6956724a7747454957737676434139596a6a6b414561444449324f5459334e444d304d7a41374e6a43436c346e462b762f2f2f2f384251414d3d227d; isg=BI6OUBkzYXKe_NWhwLxfcoxk32RQD1IJauZDv7jXiRF8Gy51IJ9PGXOaU0d3A0oh; l=fBrxhGcPTcax1LrpBOfZourza779DIRAguPzaNbMi9fP_vC6P_wdW65GGq8BCnGVFsppR3z0a8rWBeYBq_C-nxvte5DDwgDmne_7Qn5..; tfstk=cG3FBdYJueLegVlJHP4ruOKUBeVdZT0myFP4xLvTSuBdNjqhiwB8sZCZ_bWtBkf..',
      referer: 'https://item.taobao.com/item.htm?id=576542211043&price=20&sourceType=item&sourceType=item&suid=95f9adde-8aa7-445e-b404-53a1150affdc&shareUniqueId=19065126906&ut_sk=1.YRNedrAqL0wDAAVWAu/7b9Sn_21646297_1670053654312.Copy.1&un=7d79524c2f3b08b228b5e1fb31f54c83&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_abtk=gray_1_code_simpleAndroid2&tbSocialPopKey=shareItem&sp_tk=dGVRRmRkTnhQT24=&cpp=1&shareurl=true&short_name=h.URPa3co&bxsign=scdmpPbsyVlN5L2T3oxArdE9_EzH8f__ixweMpAcfiLUwkrFAjNKbXp7Q_35VLHL0n0vs5DEsVqN7TEPPs9LUp1YODgQh3rjzsFRIDYs_L2tE7xBg9934YgsokPAjKhUiqh&tk=teQFddNxPOn CZ3457&app=chrome',
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

  let sku = JSON.parse(res.data.slice(11, -2)).data.dynStock.sku
  console.log(sku);
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
    
    access_token = 'FebWk3xRDsp5VtyQaGiBjwfioynMuZI61Lb6V_ihBV0GCGGvIgE99O_Hr9rUvWZUVXUyYmhgiXniRlo5BWW-tnMlrdI9vqMZxpiT2uu_vTIsvVVlVQLMAs0juBF0QZrUNcSsSo602ohMAgCJIGUqaM7Nb2RVj9VLQ4zjFe0z-NW4epftg9ct1NhwdVgEnUW6Tse9diyHfOSv0pCbW6L-3w'
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

