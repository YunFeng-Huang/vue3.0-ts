const order = {
    "success": true,
    "code": "0",
    "message": "",
    "aliOrderQueryResult": {
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
    },
    "wxOrderQueryResult": {

    }
};



exports.order = order;