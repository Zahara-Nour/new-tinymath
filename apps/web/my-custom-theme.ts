import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin'

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': 'Averia Serif Libre',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #ffc400
		'--color-primary-50': '255 246 217', // #fff6d9
		'--color-primary-100': '255 243 204', // #fff3cc
		'--color-primary-200': '255 240 191', // #fff0bf
		'--color-primary-300': '255 231 153', // #ffe799
		'--color-primary-400': '255 214 77', // #ffd64d
		'--color-primary-500': '255 196 0', // #ffc400
		'--color-primary-600': '230 176 0', // #e6b000
		'--color-primary-700': '191 147 0', // #bf9300
		'--color-primary-800': '153 118 0', // #997600
		'--color-primary-900': '125 96 0', // #7d6000
		// secondary | #d4d651
		'--color-secondary-50': '249 249 229', // #f9f9e5
		'--color-secondary-100': '246 247 220', // #f6f7dc
		'--color-secondary-200': '244 245 212', // #f4f5d4
		'--color-secondary-300': '238 239 185', // #eeefb9
		'--color-secondary-400': '225 226 133', // #e1e285
		'--color-secondary-500': '212 214 81', // #d4d651
		'--color-secondary-600': '191 193 73', // #bfc149
		'--color-secondary-700': '159 161 61', // #9fa13d
		'--color-secondary-800': '127 128 49', // #7f8031
		'--color-secondary-900': '104 105 40', // #686928
		// tertiary | #C2CAD0
		'--color-tertiary-50': '246 247 248', // #f6f7f8
		'--color-tertiary-100': '243 244 246', // #f3f4f6
		'--color-tertiary-200': '240 242 243', // #f0f2f3
		'--color-tertiary-300': '231 234 236', // #e7eaec
		'--color-tertiary-400': '212 218 222', // #d4dade
		'--color-tertiary-500': '194 202 208', // #C2CAD0
		'--color-tertiary-600': '175 182 187', // #afb6bb
		'--color-tertiary-700': '146 152 156', // #92989c
		'--color-tertiary-800': '116 121 125', // #74797d
		'--color-tertiary-900': '95 99 102', // #5f6366
		// success | #a3d651
		'--color-success-50': '241 249 229', // #f1f9e5
		'--color-success-100': '237 247 220', // #edf7dc
		'--color-success-200': '232 245 212', // #e8f5d4
		'--color-success-300': '218 239 185', // #daefb9
		'--color-success-400': '191 226 133', // #bfe285
		'--color-success-500': '163 214 81', // #a3d651
		'--color-success-600': '147 193 73', // #93c149
		'--color-success-700': '122 161 61', // #7aa13d
		'--color-success-800': '98 128 49', // #628031
		'--color-success-900': '80 105 40', // #506928
		// warning | #ffc400
		'--color-warning-50': '255 246 217', // #fff6d9
		'--color-warning-100': '255 243 204', // #fff3cc
		'--color-warning-200': '255 240 191', // #fff0bf
		'--color-warning-300': '255 231 153', // #ffe799
		'--color-warning-400': '255 214 77', // #ffd64d
		'--color-warning-500': '255 196 0', // #ffc400
		'--color-warning-600': '230 176 0', // #e6b000
		'--color-warning-700': '191 147 0', // #bf9300
		'--color-warning-800': '153 118 0', // #997600
		'--color-warning-900': '125 96 0', // #7d6000
		// error | #ff5757
		'--color-error-50': '255 230 230', // #ffe6e6
		'--color-error-100': '255 221 221', // #ffdddd
		'--color-error-200': '255 213 213', // #ffd5d5
		'--color-error-300': '255 188 188', // #ffbcbc
		'--color-error-400': '255 137 137', // #ff8989
		'--color-error-500': '255 87 87', // #ff5757
		'--color-error-600': '230 78 78', // #e64e4e
		'--color-error-700': '191 65 65', // #bf4141
		'--color-error-800': '153 52 52', // #993434
		'--color-error-900': '125 43 43', // #7d2b2b
		// surface | #c7c1c4
		'--color-surface-50': '247 246 246', // #f7f6f6
		'--color-surface-100': '244 243 243', // #f4f3f3
		'--color-surface-200': '241 240 240', // #f1f0f0
		'--color-surface-300': '233 230 231', // #e9e6e7
		'--color-surface-400': '216 212 214', // #d8d4d6
		'--color-surface-500': '199 193 196', // #c7c1c4
		'--color-surface-600': '179 174 176', // #b3aeb0
		'--color-surface-700': '149 145 147', // #959193
		'--color-surface-800': '119 116 118', // #777476
		'--color-surface-900': '98 95 96', // #625f60
	},
}
