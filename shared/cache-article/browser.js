import idbKeyval from 'idb-keyval';

export const cacheArticle = article => {
	idbKeyval.set(article.id, article);
	return article;
};

export const getArticle = uuid => e => {
	if(e.message === 'Failed to fetch') {
		return idbKeyval.get(uuid).then(article => {
			article.offline = true;
			return article;
		});
	}

	throw e;
}
