'use client';

import { Group, Text, rem, useMantineTheme } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';

export const UploadForm = () => {
	const theme = useMantineTheme();
	return (
		<Dropzone
			onDrop={files => console.log('accepted files', files)}
			onReject={files => console.log('rejected files', files)}
			maxSize={Math.sqrt(3 * 1024)}
			accept={IMAGE_MIME_TYPE}
		>
			<Group
				position="center"
				spacing="xl"
				style={{ minHeight: rem(220), pointerEvents: 'none' }}
			>
				<Dropzone.Accept>
					<IconUpload
						size="3.2rem"
						stroke={1.5}
						color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
					/>
				</Dropzone.Accept>
				<Dropzone.Reject>
					<IconX
						size="3.2rem"
						stroke={1.5}
						color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
					/>
				</Dropzone.Reject>
				<Dropzone.Idle>
					<IconPhoto size="3.2rem" stroke={1.5} />
				</Dropzone.Idle>

				<div>
					<Text size="xl" inline>
						Drag images here or click to select files
					</Text>
					<Text size="sm" color="dimmed" inline mt={7}>
						Attach as many files as you like, each file should not exceed 5mb
					</Text>
				</div>
			</Group>
		</Dropzone>
	);
};
