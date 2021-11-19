namespace $.$$ {
	
	type Person = {
		id: string
		name: string
		age: number
	}
	
	export class $my_debug_person_repo extends $mol_store<
		Record< string , Person >
	> {
		@ $mol_mem
		list() {
			return Object.keys( this.data() ).map( id => this.Person( id ) )
		}
		
		@ $mol_mem_key
		Person( id: string ) {
			return this.sub( id )
		}
		
		add( item: Person ) {
			const dict = this.data()
			dict[ item.id ] = item
			this.data( dict )
		}
		
		add2( item: Person ) {
			const dict = this.data()
			this.data( { ...dict, [item.id]: item } )
		}
	}

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		person_repo() {
			const obj = new $my_debug_person_repo( {
				a: { id: 'a', name: 'hello', age: 1 } ,
				b: { id: 'b', name: 'world', age: 2 } ,
			} )
			return obj
		}
		
		@ $mol_mem_key
		name( id: string ) {
			return this.person_repo().Person( id ).value( 'name' )
		}
		
		@ $mol_mem_key
		age( id: string ) {
			return this.person_repo().Person( id ).value( 'age' ).toString()
		}
		
		rows() {
			return this.person_repo().list().map( person => this.Row( person.value( 'id' ) ) )
		}

	}

}
