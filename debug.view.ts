namespace $.$$ {

	export class $my_debug extends $.$my_debug {
		
		@ $mol_mem_key
		object( id: string ) {
			return this.domain().object( id )
		}
		
		@ $mol_mem_key
		place( id: string ) {
			return this.domain().place( id )
		}
		
		@ $mol_mem_key
		object_title( id: string ) {
			return this.object( id ).title()
		}
		
		@ $mol_mem_key
		place_title( id: string ) {
			return this.place( id ).title()
		}
		
		@ $mol_mem
		object_rows() {
			return [ this.Object( 'objectA' ) ]
		}
		
		@ $mol_mem
		object_content() {
			return [ 'placeA' , 'placeB' , 'placeC' ].map( id => this.Place( id ) )
		}
		
		
	}

}
