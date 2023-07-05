import { Paginator } from '@pantheon-systems/nextjs-kit';
import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import { getFooterMenu } from '../../../lib/Menus';
import { paginationPostsQuery } from '../../../lib/PostsPagination';

import styles from './pagination.module.css';

export default function PaginationExampleTemplate({ menuItems, posts }) {
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems.map((item) => {
			return (
				<article key={item.title} className={styles.item}>
					<h2>{item.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: item.excerpt }} />
				</article>
			);
		});
	};
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo>
				<title>Pagination example</title>
				<meta
					name="description"
					content="Generated by create-pantheon-decoupled-kit."
				/>
				<link rel="icon" href="/favicon.ico" />
			</NextSeo>
			<div className={styles.container}>
				<section className={styles.content}>
					<h1>Pagination example</h1>
					<Paginator
						data={posts}
						itemsPerPage={5}
						breakpoints={{ start: 4, end: 8, add: 4 }}
						routing
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const { menuItems, menuItemHeaders } = await getFooterMenu();
	const { posts, headers: postHeaders } = await paginationPostsQuery();

	const headers = [menuItemHeaders, postHeaders];
	setOutgoingHeaders({ headers, res });

	return {
		props: {
			menuItems,
			posts,
		},
	};
}
