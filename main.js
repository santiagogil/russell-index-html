module.exports = function template () {
  return `<html lang='es'><head>
<meta charset="UTF-8">
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#222222">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#222222">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" href="/assets/img/launcher-icon-4x.png">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon">
<link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
<link rel="manifest" href="manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="{{name}}">
<meta name="apple-mobile-web-app-title" content="{{name}}">
<meta name="msapplication-starturl" content="/">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="{{google-site-verification}}" />
<link id='css' rel='stylesheet' type='text/css' href='/assets/css/main-{{version}}.css'>
<title>{{name}}</title>
</head>

<body>
<div id='main'>
      </div>
<script async id='bundle' src='/assets/bundle-{{version}}.js' type='text/javascript'></script>
</body></html>`
}
