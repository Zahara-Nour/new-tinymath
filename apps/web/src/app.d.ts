// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { GoTrueAdminApi, Session, SupabaseClient } from '@supabase/supabase-js'
import { Database } from './types/supabase'

declare global {
	namespace App {
		interface Supabase {
			// Use the path to where you generated the types using the Supbase CLI.
			Database: Database
		}
		interface Locals {
			supabase: SupabaseClient<Database>
			supabaseService: SupabaseClient<Database>
			getSession(): Promise<Session | null>
			adminAuth: GoTrueAdminApi
		}
		interface PageData {
			session: Session | null
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {}
