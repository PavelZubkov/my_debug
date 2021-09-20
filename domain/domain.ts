namespace $ {
	
	export class $my_debug_domain extends $mol_object2 {
		
		@ $mol_mem
		state() {
			const state = new this.$.$mol_state_shared
			// state.server = $mol_const( 'ws://localhost:3000' )
			return state
		}
		
		@ $mol_mem
		person_ids( next?: string[] ) {
			return ( this.state().doc( 'person' ).doc( 'ids' ).list( next ) ?? [] ) as string[]
		}
		
		@ $mol_mem_key
		person( id : string ) {
			const item = new $my_debug_person
			item.id = $mol_const( id )
			item.domain = $mol_const( this )
			return item
		}

	}
	
}
