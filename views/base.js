export default ({body, styles}) => `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>FT News Feed</title>
	<style>${styles}</style>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="theme-color" content="#fff1e0" />
	<link rel="apple-touch-icon" href="/icons/192.png">
	<link rel="manifest" href="/manifest.json">
</head>
<body>
	${body}
</body>
<script src="/app.js"></script>
<link rel="stylesheet" href="/style.css">
</html>`;
