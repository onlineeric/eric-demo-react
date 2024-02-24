import React from 'react';
import { Link, SxProps, Theme, Typography, TypographyProps } from '@mui/material';

interface CopyrightProps extends TypographyProps {
	sx?: SxProps<Theme>;
}

export default function Copyright(props: CopyrightProps) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/onlineeric">
				My Github page
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
