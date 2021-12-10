const checkTermsCookies = () => {
  if (document.readyState == "complete") {
    const cookieCheck = document.cookie
      ? document.cookie.includes("signUp=true")
      : null;
    if (cookieCheck) {
      document.getElementById("wp-submit").removeAttribute("disabled");
      document.getElementById("sign-up-termos").checked = true;
    }
  }
};

export default checkTermsCookies;
