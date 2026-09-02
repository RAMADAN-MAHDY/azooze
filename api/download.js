const IOS_URL =
  "https://apps.apple.com/sa/app/captain-azooz-%D9%83%D8%A8%D8%AA%D9%86-%D8%B9%D8%B2%D9%88%D8%B2/id1668170251";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.azooz.user2";

export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return res.redirect(302, IOS_URL);
  }

  if (/Android/i.test(userAgent)) {
    return res.redirect(302, ANDROID_URL);
  }

  // أي جهاز غير معروف (مكتبي / Desktop) توجيه إلى iOS أو حسب الرغبة
  return res.redirect(302, IOS_URL);
}
