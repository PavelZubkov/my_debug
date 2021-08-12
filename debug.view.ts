namespace $.$$ {

	export class $my_debug extends $.$my_debug {
		
		@ $mol_mem_key
		object( id : string ) {
			// $mol_mem_persist()
			return {
				id: id,
				title: $mol_stub_select_random([ 'Ivanhoe' , 'Bewicke', 'Cliff', 'Kingsland', 'Hart' ])
					+ ' '
					+ $mol_stub_select_random([ 'Parkway' , 'Road' , 'Fold', '' , '' ])
					+ ' '
					+ $mol_stub_select_random( $mol_range2( index => index + 1 , () => 100) ),
				places: new Array( $mol_stub_select_random( [ 2 , 3, 4 , 6, 7, 8, 9 ] )  ).fill( 0 ).map( () => $mol_guid() )
			}
		}
		
		@ $mol_mem_key
		place( id : string ) {
			// $mol_mem_persist()
			return {
				id: id,
				title: Number.parseInt( $mol_stub_code( $mol_stub_select_random( [ 1 , 1 , 1, 2 ] ) ) , 16 ).toString(), 
				meters: new Array( $mol_stub_select_random( [ 1 , 2 , 3 ] ) ).fill( 0 ).map( () => $mol_guid() )
			}
		}
		
		
		@ $mol_mem_key
		meter( id : string ) {
			// $mol_mem_persist()
			return {
				id: id,
				title: id,
				type: $mol_stub_select_random<'KV' | 'SV' | 'EA'>( [ 'KV' , 'SV' , 'EA' ] )
			}
		}

		@ $mol_mem
		object_rows() {
			// $mol_mem_persist()
			return $mol_range2( index => index , () => 100 ).map( id => this.Object_row( id.toString() ) )
		}

		@ $mol_mem_key
		object_row_expanded( id : number , next? : boolean ) {
			return next ?? false
		}
		
		object_row_title( id : string ) {
			return this.object( id ).title
		}
		
		object_row_content( id : string ) {
			return this.object( id ).places.map( id => this.Place_row( id ) )
		}

		place_row_title( id : string ) {
			return this.place( id ).title
		}
		
		place_row_content( id : string ) {
			return this.place( id ).meters.map( id => this.Meter_row( id ) )
		}
		
		meter_link( id : string ) {
			return id
		}
		
		meter_title( id : string ) {
			return this.meter( id ).title
		}
		
		meter_icon( id : string ) {
			const type = this.meter( id ).type
			if ( type === 'KV' ) return this.Meter_icon_water_cold()
			if ( type === 'SV' ) return this.Meter_icon_water_hot()
			return this.Meter_icon_energy()
		}

	}

}
