<script lang="ts">
	import PageHeader from '$lib/ui/PageHeader.svelte'
	import { getLogger, isEmptyObject, objectMap } from '$lib/utils'
	import { Accordion, AccordionItem, getToastStore } from '@skeletonlabs/skeleton'
	import type { Student, StudentProfile, Teacher } from '../../../types/type'
	import { user } from '$lib/stores'
	import type { SupabaseClient } from '@supabase/supabase-js'
	import type { Database } from '../../../types/supabase'
	import { DB_fetchDayStudentsTeacherWarnings, DB_fetchStudentWarnings } from '$lib/db'
	import { DateTime } from 'luxon'
	import { warningCases } from '$lib/warnings'
	import Warnings from './Warnings.svelte'
	export let db: SupabaseClient<Database>

	const toastStore = getToastStore()
	let { warn, trace, fail } = getLogger('TeacherAwardMgmt', 'warn')
	let u = $user as Student
	let lang = 'fr'
	let warningsTerm1ByDate: Record<string, string[]> = {}
	let warningsTerm2ByDate: Record<string, string[]> = {}
	let warningsTerm3ByDate: Record<string, string[]> = {}
	let markTerm1: number | null
	let markTerm2: number | null
	let markTerm3: number | null

	getWarnings()
	const today = DateTime.now()
	const term1Start = DateTime.fromISO('2024-09-01')
	const term2Start = DateTime.fromISO('2024-12-15')
	const term3Start = DateTime.fromISO('2025-03-09')
	const yearEnd = DateTime.fromISO('2025-07-01')

	async function getWarnings() {
		warningsTerm1ByDate = {}
		warningsTerm2ByDate = {}
		warningsTerm3ByDate = {}
		const { data, error } = await DB_fetchStudentWarnings(db, u.id)
		if (error) {
			console.log(error.message)
			toastStore.trigger({
				message: 'Erreur lors de la récupération des avertissements',
				background: 'bg-error-500',
			})
		} else if (!data) {
			toastStore.trigger({
				message: 'Avertissements : aucune donnée',
				background: 'bg-error-500',
			})
		} else {
			warningsTerm1ByDate = data
				.filter(
					(a) => DateTime.fromISO(a.date) >= term1Start && DateTime.fromISO(a.date) < term2Start,
				)
				.sort((a, b) => b.date.localeCompare(a.date))
				.reduce(
					(acc, curr) => {
						acc[curr.date] = curr.warnings

						return acc
					},
					{} as Record<string, string[]>,
				)
			markTerm1 = Object.entries(warningsTerm3ByDate).length
				? (Object.entries(warningsTerm1ByDate).filter((entry) => entry[1].length).length /
						Object.entries(warningsTerm1ByDate).length) *
					20
				: null
			warningsTerm2ByDate = data
				.filter(
					(a) => DateTime.fromISO(a.date) >= term2Start && DateTime.fromISO(a.date) < term3Start,
				)
				.sort((a, b) => b.date.localeCompare(a.date))
				.reduce(
					(acc, curr) => {
						acc[curr.date] = curr.warnings

						return acc
					},
					{} as Record<string, string[]>,
				)
			markTerm2 = Object.entries(warningsTerm3ByDate).length
				? (Object.entries(warningsTerm2ByDate).filter((entry) => entry[1].length).length /
						Object.entries(warningsTerm2ByDate).length) *
					20
				: null

			warningsTerm3ByDate = data
				.filter((a) => DateTime.fromISO(a.date) >= term3Start)
				.sort((a, b) => b.date.localeCompare(a.date))
				.reduce(
					(acc, curr) => {
						acc[curr.date] = curr.warnings

						return acc
					},
					{} as Record<string, string[]>,
				)
			markTerm3 = Object.entries(warningsTerm3ByDate).length
				? (Object.entries(warningsTerm3ByDate).filter((entry) => !entry[1].length).length /
						Object.values(warningsTerm3ByDate).filter(
							(warnings) => !(warnings.length === 1 && warnings[0] === 'Absent'),
						).length) *
					20
				: null
		}
	}
</script>

<PageHeader title="Avertissements" />

<Warnings {db} student={u} />
