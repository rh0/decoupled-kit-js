import React from 'react';

/**
 *
 * @param cols - The number of columns to build the grid with
 * @param children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component meant to be used with the withGrid component
 */

export const Grid = ({
	cols = '3',
	children,
}: {
	cols?: string;
	children?: JSX.Element[];
}) => {
	return (
		<div
			className={`mt-12 grid gap-5 max-w-content mx-auto lg:grid-cols-${String(
				cols,
			)} lg:max-w-screen-lg`}
		>
			{children}
		</div>
	);
};

/**
 *
 * @param props - props to spread onto the passed component
 * @param Component - Element to be passed to the Grid component
 * @param data - The data that will be displayed in the grid
 * @param props.contentType - An optional prop to display the desired content type in the case that no content was found
 * @returns A Higher Order Component to use Grid
 */
export const withGrid = (Component: React.ElementType) => {
	const GridedComponent = ({
		data,
		...props
	}: {
		data: Record<string, string | number>[];
		contentType?: string;
	}): JSX.Element => {
		return (
			<>
				{data ? (
					<Grid>
						{data.map((content, i) => {
							return <Component key={i} content={content} {...props} />;
						})}
					</Grid>
				) : props.contentType ? (
					<h2 className="text-xl text-center mt-14">
						No {props.contentType} found 🏜
					</h2>
				) : null}
			</>
		);
	};

	return GridedComponent;
};
