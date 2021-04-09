const aliOrderQueryResult = {
    "trade_no": "2021030522001429931420107410",
    "out_trade_no": "2021030516031128766240611",
    "buyer_logon_id": "403***@qq.com",
    "trade_status": "TRADE_CLOSED",
    "total_amount": 0.01,
    "pay_amount": null,
    "buyer_pay_amount": 0.00,
    "point_amount": 0.00,
    "send_pay_date": "2021-03-05 08:37:19",
    "receipt_amount": 0.00,
    "buyer_user_id": "2088102603329936",
    "request_message": "{\"body\":\"{\\\"alipay_trade_query_response\\\":{\\\"code\\\":\\\"10000\\\",\\\"msg\\\":\\\"Success\\\",\\\"buyer_logon_id\\\":\\\"403***@qq.com\\\",\\\"buyer_pay_amount\\\":\\\"0.00\\\",\\\"buyer_user_id\\\":\\\"2088102603329936\\\",\\\"invoice_amount\\\":\\\"0.00\\\",\\\"out_trade_no\\\":\\\"2021030516031128766240611\\\",\\\"point_amount\\\":\\\"0.00\\\",\\\"receipt_amount\\\":\\\"0.00\\\",\\\"send_pay_date\\\":\\\"2021-03-05 16:37:19\\\",\\\"total_amount\\\":\\\"0.01\\\",\\\"trade_no\\\":\\\"2021030522001429931420107410\\\",\\\"trade_status\\\":\\\"TRADE_CLOSED\\\"},\\\"sign\\\":\\\"kqB2g1ZlXg/bOiiX+oE1zmscuWYAAqh1jjp+TazNgX8A5r4w2enjgg85T62d3djHh0f4pCtZhPg6zRUm19fBPtDtMePAIzH2yt8O2/1s2NFtCtD0Cn/TrXNLt6ZgqeIj6FLXCIUfN+UOedNCp9zRLXBCLgEggIdOcgm5tHVUlz0=\\\"}\",\"buyerLogonId\":\"403***@qq.com\",\"buyerPayAmount\":\"0.00\",\"buyerUserId\":\"2088102603329936\",\"code\":\"10000\",\"errorCode\":\"10000\",\"invoiceAmount\":\"0.00\",\"msg\":\"Success\",\"outTradeNo\":\"2021030516031128766240611\",\"params\":{\"app_auth_token\":\"202001BB8c65277d48874601a801104843026F25\",\"biz_content\":\"{\\\"out_trade_no\\\":\\\"2021030516031128766240611\\\"}\"},\"pointAmount\":\"0.00\",\"receiptAmount\":\"0.00\",\"sendPayDate\":1614933439000,\"success\":true,\"totalAmount\":\"0.01\",\"tradeNo\":\"2021030522001429931420107410\",\"tradeStatus\":\"TRADE_CLOSED\"}",
    "refund_list": [{
        "out_request_no": "202103051603112876624061190350",
        "refund_amount": 0.01
    }]
}
const wxOrderQueryResult = {
    "trade_type": "JSAPI",
    "trade_state": "REFUND",
    "bank_type": "OTHERS",
    "total_fee": 0.01,
    "cash_fee": 0.01,
    "coupon_fee": 0,
    "transaction_id": "4200000980202103263511284504",
    "out_trade_no": "109534493852856729603261",
    "time_end": "20210326135314",
    "request_message": "{\"appid\":\"wx07662484d90b8159\",\"attach\":\"{\\\"haipay.com.self.payType\\\":\\\"QR_mian_pay\\\"}\",\"bank_type\":\"OTHERS\",\"cash_fee\":\"1\",\"cash_fee_type\":\"CNY\",\"fee_type\":\"CNY\",\"is_subscribe\":\"Y\",\"mch_id\":\"1378987002\",\"nonce_str\":\"hajJm0h2i8HE5cd7\",\"openid\":\"oQaT5wZc6c-zVbaiHaiRj5pxC_NE\",\"out_trade_no\":\"109534493852856729603261\",\"result_code\":\"SUCCESS\",\"return_code\":\"SUCCESS\",\"return_msg\":\"OK\",\"sign\":\"614FB619291A8C60843C7D59255353EA\",\"sub_mch_id\":\"1410736602\",\"time_end\":\"20210326135314\",\"total_fee\":\"1\",\"trade_state\":\"REFUND\",\"trade_state_desc\":\"订单发生过退款，退款详情请查询退款单\",\"trade_type\":\"JSAPI\",\"transaction_id\":\"4200000980202103263511284504\"}",
    "trade_state_desc": "订单发生过退款，退款详情请查询退款单",
    "refund_count": 1,
    "refund_list": [{
        "out_refund_no": "10953449385285672960326102710",
        "refund_id": "50301207702021032607463204420",
        "refund_channel": "ORIGINAL",
        "refund_fee": 0.01,
        "settlement_refund_fee": 0,
        "refund_status": "SUCCESS",
        "refund_account": "REFUND_SOURCE_RECHARGE_FUNDS",
        "refund_recv_accout": "支付用户的零钱",
        "refund_success_time": "2021-03-26 13:55:56"
    }]
}
const order = {
    "success": true,
    "code": "0",
    "message": "",
    "aliOrderQueryResult": aliOrderQueryResult,
    "wxOrderQueryResult": wxOrderQueryResult
};



exports.order = order;
exports.aliOrderQueryResult = aliOrderQueryResult;
exports.wxOrderQueryResult = wxOrderQueryResult;