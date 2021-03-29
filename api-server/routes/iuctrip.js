// Map < String, BufferedImage > map = ImageUtil.createImage();
// //获取验证码图片上的字符
// String key = map.keySet().iterator().next();
// setSessionCode(getSession(), key);
// setSessionCodeExpires(getSession());
// ByteArrayOutputStream bos = null;
// try {
//   //            BufferedImage buffImg = map.get(key);
//   //            bos = new ByteArrayOutputStream();
//   //            ImageIO.write(buffImg, "jpg", bos);
//   //
//   //            bos.flush();
//   //            bos.toByteArray();
//   //            bos.close();
//   //            buffImg.flush();
//   //            buffImg = null;
//   //            imageStream = new ByteArrayInputStream(imageBt);
//   //            resp.setHeader("Pragma", "no-cache");
//   //            resp.setHeader("Cache-Control", "no-cache");
//   //            resp.setDateHeader("Expires", 0);
//   //            resp.setContentType("image/jpeg");
//   //            // 将图像输出到Servlet输出流中。
//   //            ServletOutputStream sos = resp.getOutputStream();
//   //            ImageIO.write(buffImg, "jpeg", sos);
//   //            sos.close();

//   BufferedImage buffImg = map.get(key);
//   bos = new ByteArrayOutputStream();
//   ImageIO.write(buffImg, "jpeg", bos);
//   byte[] imageByte = bos.toByteArray();
//   httpServletResponse.setHeader("Cache-Control", "no-store");
//   httpServletResponse.setHeader("Pragma", "no-cache");
//   httpServletResponse.setDateHeader("Expires", 0);
//   httpServletResponse.setContentType("image/jpeg");
//   ServletOutputStream responseOutputStream = httpServletResponse
//     .getOutputStream();
//   responseOutputStream.write(imageByte);
//   responseOutputStream.flush();
//   responseOutputStream.close();