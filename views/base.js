export default ({body, styles}) => `<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>FT News Feed</title>
	<style>${styles}</style>
</head>
<body>
	<main>${body}</main>
</body>
<script src="/app.js"></script>
</html>`;
