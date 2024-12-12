const injectCookies = () => {
  const oneDayExpire = new Date(Date.now() + 86400 * 1000).toUTCString();

  document.cookie =
    "same_domain_cookie_1=local_value_1; expires=" + oneDayExpire + ";path=/;";
  document.cookie =
    "same_domain_cookie2=local_value_2; expires=" + oneDayExpire + ";path=/;";
  document.cookie =
    "same_domain_cookie3=local_value_3; expires=" + oneDayExpire + ";path=/;";
  document.cookie =
    "same_domain_cookie4=local_value_4; expires=" + oneDayExpire + ";path=/;";

  document.cookie =
    "test_cookie__1=local_value_4; expires=" + oneDayExpire + ";path=/;";
  document.cookie =
    "test_cookie__2=local_value_4; expires=" + oneDayExpire + ";path=/;";
  document.cookie =
    "test_cookie__3=local_value_4; expires=" + oneDayExpire + ";path=/;";
  document.cookie =
    "test_cookie__4=local_value_4; expires=" + oneDayExpire + ";path=/;";
};

injectCookies();
