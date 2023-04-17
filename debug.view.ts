namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		url_base() {
			return 'https://jsonplaceholder.typicode.com'
		}

		@ $mol_mem
		post_current(next = 1) {
			return next
		}

		@ $mol_mem
		post_comments() {
			return this.$.$mol_fetch.json(`${this.url_base()}/posts/${this.post_current()}/comments`) as any[]
		}

		@ $mol_mem
		status() {
			try {
				return `Post ${this.post_current()} has ${this.post_comments()?.length} comments`
			} catch(error: unknown) {
				if ( $mol_promise_like(error) ) return 'Loading'
				throw error
			}
		}

		@ $mol_action
		post_next() {
			return this.post_current( this.post_current() + 1 )
		}

	}

}
