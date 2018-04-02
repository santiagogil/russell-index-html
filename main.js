module.exports = function template () {
  return `<html lang='es'><head>
<meta charset="UTF-8">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="{{themecolor}}">
<link rel="shortcut icon" href="/assets/favicon.ico">
<meta name="msapplication-TileColor" content="{{themecolor}}">
<meta name="Description" content="{{description}}">
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="{{themecolor}}">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="{{themecolor}}">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" href="/assets/img/launcher-icon-4x.png">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="/manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="{{name}}">
<meta name="apple-mobile-web-app-title" content="{{name}}">
<meta name="msapplication-starturl" content="/">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="{{google-site-verification}}" />
<link rel='stylesheet' type='text/css' href='/assets/css/main-{{version}}.css'>
<link rel='stylesheet' type='text/css' href='/assets/css/fonts-{{version}}.css'>
<link rel='stylesheet' type='text/css' href='/assets/css/custom-{{version}}.css'>
<title>{{name}}</title>
</head>

<body>
<div id='main'>
      </div>
<script async id='bundle' src='/assets/bundle-{{version}}.js' type='text/javascript'></script>
</body></html>`
}
