import idbKeyval from 'idb-keyval';

export default article => {
	console.log(`caching ${article.title} ${article.id}`);
	idbKeyval.set(article.id, article);
	return article;
};
