namespace $ {

	export class $my_debug_person extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $my_debug_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'person' ).doc( this.id() )
		}
		
		@ $mol_mem
		email( next?: string ) {
			return String( this.state().sub( 'email' ).value( next ) ?? '' )
		}
		
		@ $mol_mem
		hash( next?: string ) {
			return String( this.state().sub( 'hash' ).value( next ) ?? '' )
		}
	}

}
