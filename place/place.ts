namespace $ {

	export class $my_debug_place extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $my_debug_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'place' ).doc( this.id() )
		}
		
		@ $mol_mem
		title( next?: string ) {
			return String( this.state().sub( 'title' ).value( next ) ?? '' )
		}
		
	}
	
}
