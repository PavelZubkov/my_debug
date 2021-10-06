namespace $ {
	
	export class $my_debug_domain extends $mol_object2 {
		
		@ $mol_mem
		state() {
			const state = new this.$.$mol_state_shared
			return state
		}
		
		@ $mol_mem_key
		object( id : string ) {
			const item = new $my_debug_object
			item.id = $mol_const( id )
			item.domain = $mol_const( this )
			return item
		}
		
		@ $mol_mem_key
		place( id : string ) {
			const item = new $my_debug_place
			item.id = $mol_const( id )
			item.domain = $mol_const( this )
			return item
		}
		
	}
	
}
