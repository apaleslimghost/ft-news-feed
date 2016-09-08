import React, {PropTypes} from 'react';

const Home = ({articles}, {link}) => <ul>
	{articles.map(article => <li key={article.id}>
		<a href={`/content/${article.id}`} onClick={link}>
			{article.title}
		</a>
	</li>)}
</ul>;

Home.contextTypes = {
	link: PropTypes.func,
};

export default Home;
