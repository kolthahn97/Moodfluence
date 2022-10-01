import Avatar from '@mui/material/Avatar'
import { User } from 'firebase/auth'

interface UserAvatarProps {
	user: User
}

function stringToColor(string: string) {
	let hash: number = 0
	let i: number

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash)
	}

	let color = '#'

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff
		color += `00${value.toString(16)}`.slice(-2)
	}
	/* eslint-enable no-bitwise */

	return color
}

function stringAvatar(name: string) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	}
}

export default function UserAvatar({ user }: UserAvatarProps) {
	return (
		<>{user?.displayName && <Avatar {...stringAvatar(user.displayName)} />}</>
	)
}
