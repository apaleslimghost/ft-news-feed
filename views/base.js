export default ({body, styles}) => `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>FT News Feed</title>
	<style>${styles}</style>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<main>${body}</main>
</body>
<script src="/app.js"></script>
</html>`;
