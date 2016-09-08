import React, {PropTypes} from 'react';

const Home = ({articles, page}, {link}) => <ul>
	{articles.map(article => <li key={article.id}>
		<a href={`/content/${article.id}`} onClick={link}>
			{article.title}
		</a>
	</li>)}

	{page > 1 && <a href={`/page/${page - 1}`} onClick={link}>←</a>}
	Page {page}
	<a href={`/page/${page + 1}`} onClick={link}>→</a>
</ul>;

Home.contextTypes = {
	link: PropTypes.func,
};

export default Home;
